import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { GalleryStrip } from "@/components/gallery-strip";
import { SectionHeading } from "@/components/section-heading";
import {
  upcomingShows,
  recentWorkshops,
  regularClasses,
  archivePhotos,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Agenda",
  description:
    "Próximas funciones, clases regulares en Buenos Aires y workshops itinerantes de Carmen Mesa.",
};

export default function AgendaPage() {
  return (
    <>
      <section className="relative pt-40 md:pt-48 pb-20 md:pb-28 overflow-hidden border-b border-line">
        <div className="absolute inset-0 opacity-[0.18]">
          <Image
            src="/photos/photo-7.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-rojo" />
              Agenda
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display text-paper text-[clamp(3rem,9vw,8rem)] leading-[0.92] max-w-[14ch]">
              Funciones,
              <br />
              <span className="italic font-light text-paper-soft">
                clases & workshops.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <nav className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-paper-soft text-[12px] uppercase tracking-[0.28em]">
              <a href="#funciones" className="link-underline">Próximas funciones</a>
              <span className="text-muted-2">·</span>
              <a href="#clases" className="link-underline">Clases regulares</a>
              <span className="text-muted-2">·</span>
              <a href="#workshops" className="link-underline">Workshops</a>
              <span className="text-muted-2">·</span>
              <a href="#archivo" className="link-underline">Archivo</a>
            </nav>
          </Reveal>
        </div>
      </section>

      {/* FUNCIONES */}
      <section
        id="funciones"
        className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24 md:py-32 scroll-mt-24"
      >
        <SectionHeading
          eyebrow="Próximas funciones"
          title="En escena"
          italic="próximamente."
        />

        {upcomingShows.length === 0 ? (
          <Reveal delay={0.2}>
            <div className="mt-16 border border-line bg-surface/60 px-8 md:px-14 py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="eyebrow mb-5">Sin funciones publicadas</p>
                <p className="font-display text-paper italic font-light text-3xl md:text-4xl leading-tight">
                  Próximamente más fechas. Si te interesa contratar a Carmen para
                  una función, residencia o evento privado, escribime.
                </p>
                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                  <Link
                    href="/contacto"
                    className="press inline-flex items-center gap-3 px-6 py-3.5 bg-rojo hover:bg-rojo-bright text-paper text-[12px] uppercase tracking-[0.28em] transition-colors"
                  >
                    Contratar
                    <span className="block w-6 h-px bg-paper" />
                  </Link>
                  <a
                    href="https://www.facebook.com/carmen.mesa.52"
                    target="_blank"
                    rel="noopener"
                    className="press inline-flex items-center gap-3 px-6 py-3.5 border border-paper/30 hover:border-paper text-paper text-[12px] uppercase tracking-[0.28em] transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/photos/photo-3.jpg"
                  alt="Carmen Mesa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        ) : (
          <ul className="mt-16 divide-y divide-line border-y border-line">
            {upcomingShows.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06}>
                <li className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12">
                  <div className="md:col-span-2 font-display text-paper text-3xl md:text-4xl leading-none">
                    {s.date}
                  </div>
                  <div className="md:col-span-7">
                    <p className="eyebrow text-paper-soft">
                      {s.city} · {s.venue}
                    </p>
                    <h3 className="mt-3 font-display text-paper text-3xl md:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-paper-soft max-w-xl">
                      {s.description}
                    </p>
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    {s.ticketUrl && (
                      <a
                        href={s.ticketUrl}
                        target="_blank"
                        rel="noopener"
                        className="press inline-flex items-center gap-3 px-5 py-3 border border-paper/30 hover:border-paper text-paper text-[12px] uppercase tracking-[0.28em] transition-colors"
                      >
                        {s.ticketLabel ?? "Entradas"}
                        <span className="block w-6 h-px bg-paper" />
                      </a>
                    )}
                    {s.image && (
                      <div className="mt-5 relative aspect-[4/5] md:max-w-[260px] md:ml-auto overflow-hidden">
                        <Image
                          src={s.image}
                          alt={s.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 260px"
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        )}
      </section>

      {/* CLASES */}
      <section
        id="clases"
        className="relative bg-surface/40 border-y border-line scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-24 md:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <SectionHeading
              eyebrow="Clases regulares · Buenos Aires"
              title="Estudio"
              italic="Rocamora."
            />
            <Reveal delay={0.2}>
              <p className="mt-8 text-paper-soft leading-relaxed max-w-md">
                Flamenqueando de la mano de la bailaora andaluza Carmen Mesa.
                Clases con guitarra en vivo. Espacio íntimo, foco en técnica y
                expresión.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <dl className="mt-10 space-y-4 text-sm">
                <div className="flex gap-4">
                  <dt className="eyebrow w-24 shrink-0 pt-0.5">Lugar</dt>
                  <dd className="text-paper">
                    Estudio Rocamora 4077, casa 1
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="eyebrow w-24 shrink-0 pt-0.5">Reservas</dt>
                  <dd className="text-paper">
                    +54 9 11 4889 9107 · 4864-4937
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="eyebrow w-24 shrink-0 pt-0.5">Email</dt>
                  <dd>
                    <a
                      href="mailto:cmesaramirez@gmail.com"
                      className="text-paper link-underline"
                    >
                      cmesaramirez@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {regularClasses.map((c, i) => (
                <Reveal key={c.id} delay={i * 0.05}>
                  <li className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-x-6 gap-y-2 py-7">
                    <div className="font-display text-paper text-2xl md:text-3xl leading-none w-28 shrink-0">
                      {c.day}
                    </div>
                    <div>
                      <p className="text-paper text-lg">{c.title}</p>
                      <p className="text-muted text-sm mt-1">{c.description}</p>
                    </div>
                    <div className="md:text-right text-paper-soft tracking-wide">
                      {c.time}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-wrap gap-3">
                <Link
                  href="/contacto?asunto=clase"
                  className="press inline-flex items-center gap-3 px-6 py-3.5 bg-paper text-ink text-[12px] uppercase tracking-[0.28em] hover:bg-oro transition-colors"
                >
                  Reservar lugar
                  <span className="block w-6 h-px bg-ink" />
                </Link>
                <Link
                  href="/contacto?asunto=privada"
                  className="press inline-flex items-center gap-3 px-6 py-3.5 border border-paper/30 hover:border-paper text-paper text-[12px] uppercase tracking-[0.28em] transition-colors"
                >
                  Clase particular
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WORKSHOPS */}
      <section
        id="workshops"
        className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24 md:py-32 scroll-mt-24"
      >
        <SectionHeading
          eyebrow="Workshops · Itinerantes"
          title="Encuentros"
          italic="por gira."
        />
        <Reveal delay={0.15}>
          <p className="mt-6 text-paper-soft max-w-2xl">
            Carmen lleva su trabajo en formato de seminarios intensivos,
            workshops de fin de semana y masterclasses. Algunos pasos recientes:
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
          {recentWorkshops.map((w, i) => (
            <Reveal key={w.id} delay={i * 0.08}>
              <article className="group relative bg-surface border border-line overflow-hidden flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {w.image && (
                    <Image
                      src={w.image}
                      alt={w.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="eyebrow text-paper-soft mb-2">{w.date}</p>
                    <h3 className="font-display text-paper text-3xl leading-none">
                      {w.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 md:p-7 flex-1 flex flex-col gap-3">
                  <p className="eyebrow">
                    <span className="text-rojo">●</span> {w.city}
                  </p>
                  <p className="text-paper-soft text-sm leading-relaxed">
                    {w.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ARCHIVO / GALERÍA */}
      <section
        id="archivo"
        className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24 md:py-32 scroll-mt-24"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Archivo"
            title="Imágenes"
            italic="del baile."
          />
          <Reveal>
            <p className="text-paper-soft text-sm max-w-sm">
              Una selección de fotografías de funciones, ensayos y residencias.
            </p>
          </Reveal>
        </div>
        <GalleryStrip photos={archivePhotos} />
      </section>
    </>
  );
}
