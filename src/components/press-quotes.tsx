"use client";

import { motion, useReducedMotion } from "motion/react";

const quotes = [
  { quote: "Una española para adorar.", source: "La Nación" },
  { quote: "Andalusian pepper and cante.", source: "Buenos Aires Herald" },
  {
    quote: "La intensidad del proceso creativo del baile flamenco.",
    source: "Festival de Sevilla",
  },
];

const EASE = [0.23, 1, 0.32, 1] as const;

export function PressQuotes() {
  const reduce = useReducedMotion();
  return (
    <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-14">
      {quotes.map((q, i) => (
        <motion.figure
          key={q.source}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
          className="flex flex-col gap-6 h-full"
        >
          <motion.span
            aria-hidden
            initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
            whileInView={
              reduce ? undefined : { clipPath: "inset(0 0 0 0)" }
            }
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.12 + 0.15,
              ease: EASE,
            }}
            className="font-display text-rojo text-6xl leading-none inline-block"
          >
            &ldquo;
          </motion.span>
          <blockquote className="font-display italic text-paper text-2xl md:text-3xl leading-tight font-light flex-1">
            {q.quote}
          </blockquote>
          <figcaption className="eyebrow flex items-center gap-3">
            <span className="block w-6 h-px bg-muted" />
            {q.source}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
