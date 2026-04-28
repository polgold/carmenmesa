"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";

const ContactSchema = z.object({
  nombre: z
    .string()
    .min(2, "Tu nombre, por favor.")
    .max(120, "Demasiado largo."),
  email: z.string().email("Email inválido."),
  asunto: z.enum(["funcion", "workshop", "clase", "privada", "prensa", "otro"], {
    message: "Elegí un motivo.",
  }),
  mensaje: z
    .string()
    .min(10, "Contame un poco más (mínimo 10 caracteres).")
    .max(4000, "Mensaje demasiado largo."),
  website: z.string().max(0).optional(),
});

export type ContactState = {
  status: "idle" | "ok" | "error";
  message?: string;
  errors?: Partial<Record<keyof z.infer<typeof ContactSchema>, string[]>>;
};

const ASUNTO_LABELS: Record<z.infer<typeof ContactSchema>["asunto"], string> = {
  funcion: "Contratar una función",
  workshop: "Workshop / seminario",
  clase: "Clase regular",
  privada: "Clase particular",
  prensa: "Prensa / entrevista",
  otro: "Otro",
};

const FALLBACK_EMAIL = "cmesaramirez@gmail.com";
const FALLBACK_ERROR = `No pudimos enviar el mensaje. Escribime directo a ${FALLBACK_EMAIL}.`;

const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

async function clientIp(): Promise<string> {
  const h = await headers();
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return h.get("x-real-ip") ?? "unknown";
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    submissions.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    asunto: formData.get("asunto"),
    mensaje: formData.get("mensaje"),
    website: formData.get("website") ?? "",
  };

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Revisá los campos marcados.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  if (parsed.data.website) {
    return { status: "ok", message: "Gracias, recibí tu mensaje." };
  }

  const ip = await clientIp();
  if (rateLimited(ip)) {
    return {
      status: "error",
      message: `Demasiados envíos. Intentá más tarde o escribí a ${FALLBACK_EMAIL}.`,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? FALLBACK_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Carmen Mesa <onboarding@resend.dev>";

  if (!apiKey) {
    console.error(
      "[contacto] RESEND_API_KEY no configurada — el mensaje no se envió.",
      { from: parsed.data.email, asunto: parsed.data.asunto },
    );
    return { status: "error", message: FALLBACK_ERROR };
  }

  try {
    const resend = new Resend(apiKey);
    const subjectLabel = ASUNTO_LABELS[parsed.data.asunto];
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: parsed.data.email,
      subject: `[carmenmesa.com] ${subjectLabel} — ${parsed.data.nombre}`,
      text: [
        `Nombre: ${parsed.data.nombre}`,
        `Email: ${parsed.data.email}`,
        `Motivo: ${subjectLabel}`,
        "",
        parsed.data.mensaje,
      ].join("\n"),
    });

    if (error) {
      console.error("[contacto] Resend error", error);
      return { status: "error", message: FALLBACK_ERROR };
    }

    return {
      status: "ok",
      message:
        "¡Gracias! Recibí tu mensaje. Te respondo en cuanto pueda, a veces estoy en gira.",
    };
  } catch (err) {
    console.error("[contacto] envío falló", err);
    return { status: "error", message: FALLBACK_ERROR };
  }
}
