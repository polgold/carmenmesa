"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";
import { EASE_CURTAIN } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: EASE_CURTAIN,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function RevealLetters({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden align-baseline mr-[0.25em]"
        >
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%" }}
            whileInView={reduce ? undefined : { y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.06,
              ease: EASE_CURTAIN,
            }}

          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
