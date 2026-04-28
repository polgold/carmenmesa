"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/photos/photo-3.jpg"
          alt="Carmen Mesa, bailaora flamenca"
          fill
          priority
          sizes="100vw"
          className="object-cover kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />
      </div>

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 lg:px-12 flex flex-col justify-end pb-20 md:pb-28">
        <motion.p
          className="eyebrow text-paper-soft mb-6"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
        >
          Bailaora andaluza · Flamenco
        </motion.p>

        <h1 className="display text-paper text-[clamp(3.25rem,11vw,11rem)] max-w-[12ch]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={reduce ? false : { y: "110%" }}
              animate={reduce ? undefined : { y: 0 }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              Carmen
            </motion.span>
          </span>
          <span className="block overflow-hidden italic font-light text-paper-soft">
            <motion.span
              className="block"
              initial={reduce ? false : { y: "110%" }}
              animate={reduce ? undefined : { y: 0 }}
              transition={{ duration: 0.85, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
            >
              Mesa
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <Link
            href="/agenda"
            className="group press relative inline-flex items-center gap-3 px-7 py-4 bg-rojo hover:bg-rojo-bright text-paper transition-colors"
          >
            <span className="text-[12px] uppercase tracking-[0.28em]">Ver agenda</span>
            <span className="block w-6 h-px bg-paper transition-all duration-300 group-hover:w-10" />
          </Link>
          <Link
            href="/contacto"
            className="text-paper-soft hover:text-paper text-[12px] uppercase tracking-[0.28em] transition-colors"
          >
            <span className="link-underline">Contactar</span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 right-6 lg:right-12 z-10 flex items-center gap-3 text-muted text-[10px] tracking-[0.32em] uppercase"
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.9 }}
      >
        <span className="block w-12 h-px bg-muted" />
        <span>scroll</span>
      </motion.div>
    </section>
  );
}
