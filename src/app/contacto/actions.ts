"use server";

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
  // honeypot
  website: z.string().max(0).optional(),
});

export type ContactState = {
  status: "idle" | "ok" | "error";
  message?: string;
  errors?: Partial<Record<keyof z.infer<typeof ContactSchema>, string[]>>;
};

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

  // Honeypot trap: silently drop bot submissions.
  if (parsed.data.website) {
    return { status: "ok", message: "Gracias, recibí tu mensaje." };
  }

  // TODO: integrar servicio de email (Resend, SendGrid, SMTP, etc.)
  // Por ahora dejamos el log en server: el destinatario es cmesaramirez@gmail.com.
  console.log("[contacto] nuevo mensaje", parsed.data);

  return {
    status: "ok",
    message:
      "¡Gracias! Recibí tu mensaje. Te respondo en cuanto pueda — a veces estoy en gira.",
  };
}
