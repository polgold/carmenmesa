"use client";

import { useActionState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { sendContact, type ContactState } from "./actions";

const initial: ContactState = { status: "idle" };

const subjects = [
  { value: "funcion", label: "Contratar una función" },
  { value: "workshop", label: "Workshop / seminario" },
  { value: "clase", label: "Clase regular" },
  { value: "privada", label: "Clase particular" },
  { value: "prensa", label: "Prensa / entrevista" },
  { value: "otro", label: "Otro" },
];

export function ContactForm() {
  const params = useSearchParams();
  const presetSubject = params.get("asunto");
  const [state, formAction, pending] = useActionState(sendContact, initial);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "ok") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} className="grid gap-7" noValidate>
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
      />

      <Field
        label="Tu nombre"
        name="nombre"
        autoComplete="name"
        error={state.errors?.nombre?.[0]}
        required
      />
      <Field
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        error={state.errors?.email?.[0]}
        required
      />

      <div className="flex flex-col gap-2">
        <label
          htmlFor="asunto"
          className="eyebrow flex items-center gap-3"
        >
          <span className="block w-6 h-px bg-rojo" />
          Motivo
        </label>
        <select
          id="asunto"
          name="asunto"
          required
          defaultValue={
            presetSubject &&
            subjects.some((s) => s.value === presetSubject)
              ? presetSubject
              : ""
          }
          className="bg-transparent border-b border-line focus:border-paper text-paper text-lg py-3 outline-none transition-colors"
        >
          <option value="" disabled className="bg-ink">
            Elegí un motivo…
          </option>
          {subjects.map((s) => (
            <option key={s.value} value={s.value} className="bg-ink">
              {s.label}
            </option>
          ))}
        </select>
        {state.errors?.asunto?.[0] && (
          <p className="text-rojo-bright text-sm">{state.errors.asunto[0]}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="mensaje"
          className="eyebrow flex items-center gap-3"
        >
          <span className="block w-6 h-px bg-rojo" />
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={6}
          required
          minLength={10}
          placeholder="Contame fechas, lugar, formato del evento o lo que necesites…"
          className="bg-transparent border-b border-line focus:border-paper text-paper text-lg py-3 outline-none transition-colors placeholder:text-muted-2 resize-none"
        />
        {state.errors?.mensaje?.[0] && (
          <p className="text-rojo-bright text-sm">{state.errors.mensaje[0]}</p>
        )}
      </div>

      <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          disabled={pending}
          className="group relative inline-flex items-center gap-3 px-7 py-4 bg-rojo hover:bg-rojo-bright text-paper text-[12px] uppercase tracking-[0.28em] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span>{pending ? "Enviando…" : "Enviar mensaje"}</span>
          <span className="block w-6 h-px bg-paper transition-all duration-500 group-hover:w-10" />
        </button>

        {state.status === "ok" && (
          <p
            role="status"
            className="font-display italic text-oro text-lg"
          >
            {state.message}
          </p>
        )}
        {state.status === "error" && state.message && (
          <p role="alert" className="text-rojo-bright text-sm">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="eyebrow flex items-center gap-3"
      >
        <span className="block w-6 h-px bg-rojo" />
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="bg-transparent border-b border-line focus:border-paper text-paper text-lg py-3 outline-none transition-colors placeholder:text-muted-2"
      />
      {error && <p className="text-rojo-bright text-sm">{error}</p>}
    </div>
  );
}
