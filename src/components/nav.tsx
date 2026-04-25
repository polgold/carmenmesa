"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/agenda", label: "Agenda" },
  { href: "/contacto", label: "Contacto" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12 py-5">
        <Link
          href="/"
          aria-label="Carmen Mesa — inicio"
          className="font-display tracking-tight text-paper text-xl md:text-2xl leading-none flex items-baseline gap-2"
        >
          <span className="font-light italic">Carmen</span>
          <span className="font-medium">Mesa</span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={[
                    "text-[12px] uppercase tracking-[0.28em] transition-colors duration-300",
                    active
                      ? "text-paper"
                      : "text-muted hover:text-paper",
                  ].join(" ")}
                >
                  <span className="link-underline">{l.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative w-10 h-10 grid place-items-center text-paper"
        >
          <span
            className={[
              "absolute h-px w-6 bg-paper transition-transform duration-300",
              open ? "rotate-45" : "-translate-y-1.5",
            ].join(" ")}
          />
          <span
            className={[
              "absolute h-px w-6 bg-paper transition-transform duration-300",
              open ? "-rotate-45" : "translate-y-1.5",
            ].join(" ")}
          />
        </button>
      </nav>

      <div
        className={[
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-500 bg-ink/95 backdrop-blur-md",
          open ? "max-h-96 opacity-100 border-b border-line" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <ul className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-display text-3xl text-paper italic font-light"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
