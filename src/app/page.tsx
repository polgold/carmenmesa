import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { PlacesMarquee } from "@/components/marquee";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { GalleryStrip } from "@/components/gallery-strip";

const galleryPhotos = [
  { src: "/photos/photo-10.jpg", alt: "Carmen Mesa, retrato" },
  { src: "/photos/photo-1.jpg", alt: "Carmen Mesa en escena" },
  { src: "/photos/photo-9.jpg", alt: "Movimiento de baile" },
  { src: "/photos/photo-11.jpg", alt: "Mirada en escena" },
  { src: "/photos/photo-6.jpg", alt: "Vestido y vuelo" },
  { src: "/photos/photo-2.jpg", alt: "Detalle de manos" },
  { src: "/photos/photo-7.jpg", alt: "Compás" },
  { src: "/photos/photo-4.jpg", alt: "Performance" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="relative mx-auto max-w-7xl px-6 lg:px-12 py-32 md:py-48 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 md:sticky md:top-32 self-start">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-rojo" />
              Biografía
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display text-[clamp(2.5rem,5vw,4.5rem)] text-paper">
              Una vida<br />
              <span className="italic font-light text-paper-soft">
                tejida en compás.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7 space-y-6 text-paper-soft text-lg md:text-xl leading-relaxed">
          <Reveal delay={0.2}>
            <p>
              Bailaora andaluza, nacida en Córdoba, Carmen cruza océanos con el
              flamenco como brújula. De la tradición jonda a los escenarios
              contemporáneos, su baile es búsqueda y memoria a la vez.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p>
              Su trayectoria une dos orillas: la Andalucía natal y la Argentina
              que la acogió. Entre Sevilla y Buenos Aires, entre los polvorientos
              caminos de los Andes y los teatros de Madrid, su arte se ha
              convertido en una conversación continua entre raíz y horizonte.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p>
              En 2020 estrenó{" "}
              <em className="font-display italic text-paper">
                Pa&apos;Trás Ni Pa&apos;Tomar Impulso
              </em>
              , documental dirigido por Lupe Pérez García sobre el camino
              creativo del flamenco — la película la sigue desde Córdoba hasta
              los Andes, mostrando la intensidad de su proceso.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="pt-6">
              <Link
                href="/agenda"
                className="inline-flex items-center gap-3 text-paper text-[12px] uppercase tracking-[0.28em]"
              >
                <span className="link-underline">Próximas funciones y clases</span>
                <span className="block w-8 h-px bg-paper" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <PlacesMarquee />

      <section className="relative mx-auto max-w-7xl px-6 lg:px-12 py-32 md:py-40">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative">
            <Reveal>
              <div className="relative aspect-video overflow-hidden bg-surface shadow-cinema">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/sLTZ9oakXLY?rel=0&modestbranding=1"
                  title="Pa'Tras Ni Pa'Tomar Impulso — trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-rojo" />
                Documental · 2020
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="display text-paper text-[clamp(2rem,4vw,3.5rem)] leading-[1]">
                Pa&apos;Trás
                <br />
                <span className="italic font-light text-paper-soft">
                  Ni Pa&apos;Tomar Impulso
                </span>
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-paper-soft leading-relaxed">
                Dirigida por Lupe Pérez García. España · 76 min. La historia de
                Carmen, una mujer valiente y apasionada que lucha por el baile
                flamenco — su sueño, su compañero de aventuras desde la
                cuadrícula de Buenos Aires hasta los caminos polvorientos de
                Los Andes.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a
                  href="https://www.instagram.com/patrasnipatomarimpulso"
                  target="_blank"
                  rel="noopener"
                  className="text-paper link-underline"
                >
                  Instagram
                </a>
                <a
                  href="https://imposiblefilms.net/pa-tras-ni-pa-tomar-impulso/"
                  target="_blank"
                  rel="noopener"
                  className="text-paper link-underline"
                >
                  Imposible Films
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 lg:px-12 py-32 md:py-40 border-y border-line">
        <SectionHeading
          eyebrow="Prensa"
          title="Lo que dice"
          italic="la crítica."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-14">
          {[
            { quote: "Una española para adorar.", source: "La Nación" },
            { quote: "Andalusian pepper and cante.", source: "Buenos Aires Herald" },
            {
              quote: "La intensidad del proceso creativo del baile flamenco.",
              source: "Festival de Sevilla",
            },
          ].map((q, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="flex flex-col gap-6 h-full">
                <span className="font-display text-rojo text-6xl leading-none">
                  &ldquo;
                </span>
                <blockquote className="font-display italic text-paper text-2xl md:text-3xl leading-tight font-light flex-1">
                  {q.quote}
                </blockquote>
                <figcaption className="eyebrow flex items-center gap-3">
                  <span className="block w-6 h-px bg-muted" />
                  {q.source}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 lg:px-12 py-32 md:py-40">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading eyebrow="Galería" title="Imágenes" italic="del baile." />
          <Reveal>
            <Link
              href="/agenda#archivo"
              className="text-paper text-[12px] uppercase tracking-[0.28em] inline-flex items-center gap-3"
            >
              <span className="link-underline">Archivo completo</span>
              <span className="block w-8 h-px bg-paper" />
            </Link>
          </Reveal>
        </div>
        <GalleryStrip photos={galleryPhotos} />
      </section>

      <section className="relative mx-auto max-w-7xl px-6 lg:px-12 pb-32 md:pb-48">
        <div className="relative overflow-hidden bg-surface border border-line">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/photos/photo-5.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-transparent" />
          </div>
          <div className="relative px-8 md:px-16 py-20 md:py-28 max-w-3xl">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-rojo" />
                Trabajemos juntos
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display text-paper text-[clamp(2.25rem,5vw,4rem)]">
                ¿Una función,
                <br />
                <span className="italic font-light">
                  un workshop, una clase?
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-paper-soft text-lg max-w-xl">
                Carmen gestiona personalmente sus contrataciones, residencias y
                clases privadas. Escribime y conversemos.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                href="/contacto"
                className="mt-10 inline-flex items-center gap-3 px-7 py-4 bg-rojo hover:bg-rojo-bright text-paper transition-colors"
              >
                <span className="text-[12px] uppercase tracking-[0.28em]">
                  Escribir
                </span>
                <span className="block w-6 h-px bg-paper" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
