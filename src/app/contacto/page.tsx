import { Suspense } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escribime para contratar funciones, workshops o reservar lugar en clases. Carmen Mesa, bailaora flamenca.",
};

export default function ContactoPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/photos/photo-11.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-40 md:pt-48 pb-32 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-rojo" />
              Contacto
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display text-paper text-[clamp(2.75rem,7vw,6rem)] leading-[0.95]">
              Conversemos
              <br />
              <span className="italic font-light text-paper-soft">
                sin prisa.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-paper-soft text-lg leading-relaxed max-w-md">
              Carmen gestiona personalmente sus contrataciones — funciones,
              residencias, clases. Si tu mensaje pide fechas concretas,
              incluí lugar y aforo si lo conocés.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="mt-12 space-y-5 text-sm">
              <div className="flex gap-4">
                <dt className="eyebrow w-28 shrink-0 pt-0.5">Email</dt>
                <dd>
                  <a
                    href="mailto:cmesaramirez@gmail.com"
                    className="text-paper link-underline text-base"
                  >
                    cmesaramirez@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="eyebrow w-28 shrink-0 pt-0.5">España</dt>
                <dd className="text-paper text-base">+34 616 659 168</dd>
              </div>
              <div className="flex gap-4">
                <dt className="eyebrow w-28 shrink-0 pt-0.5">Argentina</dt>
                <dd className="text-paper text-base">+54 9 11 4889 9107</dd>
              </div>
              <div className="flex gap-4">
                <dt className="eyebrow w-28 shrink-0 pt-0.5">Estudio</dt>
                <dd className="text-paper text-base">
                  Rocamora 4077, casa 1 · Buenos Aires
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="eyebrow w-28 shrink-0 pt-0.5">Social</dt>
                <dd>
                  <a
                    href="https://www.facebook.com/carmen.mesa.52"
                    target="_blank"
                    rel="noopener"
                    className="text-paper link-underline text-base"
                  >
                    Facebook
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <div className="relative bg-surface/70 backdrop-blur border border-line p-8 md:p-12 lg:p-14">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-6 text-xs text-muted-2 leading-relaxed max-w-xl">
              Tus datos se usan únicamente para responder a tu consulta. Sin
              suscripciones, sin terceros.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
