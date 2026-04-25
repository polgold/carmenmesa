import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl text-paper leading-none">
            <span className="italic font-light">Carmen</span>{" "}
            <span className="font-medium">Mesa</span>
          </p>
          <p className="mt-4 text-sm text-muted max-w-xs">
            Bailaora andaluza. Espectáculos, clases y workshops de flamenco entre España y Argentina.
          </p>
        </div>

        <div className="md:justify-self-center">
          <p className="eyebrow mb-4">Navegación</p>
          <ul className="space-y-3 text-paper">
            <li><Link href="/" className="link-underline">Inicio</Link></li>
            <li><Link href="/agenda" className="link-underline">Agenda</Link></li>
            <li><Link href="/contacto" className="link-underline">Contacto</Link></li>
          </ul>
        </div>

        <div className="md:justify-self-end">
          <p className="eyebrow mb-4">Contacto</p>
          <ul className="space-y-3 text-paper text-sm">
            <li>
              <a href="mailto:cmesaramirez@gmail.com" className="link-underline">
                cmesaramirez@gmail.com
              </a>
            </li>
            <li className="text-muted">España +34 616 659 168</li>
            <li className="text-muted">Argentina +54 9 11 4889 9107</li>
            <li>
              <a
                href="https://www.facebook.com/carmen.mesa.52"
                target="_blank"
                rel="noopener"
                className="link-underline"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-xs text-muted-2 tracking-wide">
          <span>© {new Date().getFullYear()} Carmen Mesa · Todos los derechos reservados</span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-display italic text-muted">arte vivo desde Andalucía</span>
            <span className="hidden md:inline text-muted-2">·</span>
            <span>
              Diseño por{" "}
              <a
                href="https://exitmedia.com.ar"
                target="_blank"
                rel="noopener"
                className="text-paper link-underline"
              >
                Exit Media
              </a>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
