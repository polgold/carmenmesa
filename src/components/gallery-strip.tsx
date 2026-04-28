"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type Photo = { src: string; alt: string; aspect?: string };

export function GalleryStrip({ photos }: { photos: Photo[] }) {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const open = useCallback((i: number) => setOpenIndex(i), []);
  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i - 1 + photos.length) % photos.length,
      ),
    [photos.length],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        {photos.map((p, i) => (
          <motion.figure
            key={p.src}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.23, 1, 0.32, 1],
            }}
            className={[
              "relative overflow-hidden bg-surface group",
              p.aspect ?? "aspect-[3/4]",
              i % 5 === 0 ? "md:row-span-2 md:aspect-[3/5]" : "",
            ].join(" ")}
          >
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`Ampliar imagen: ${p.alt}`}
              className="absolute inset-0 z-10 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-rojo focus-visible:ring-offset-0"
            />
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              quality={88}
              priority={i < 2}
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.06]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] p-4 md:p-5 text-paper text-[11px] uppercase tracking-[0.24em] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
              {p.alt}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <Lightbox
        photos={photos}
        index={openIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}

function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose, onPrev, onNext]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    if (dx > 0) onPrev();
    else onNext();
  };

  const photo = isOpen ? photos[index] : null;

  return (
    <AnimatePresence>
      {isOpen && photo && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={photo.alt}
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={
            reduce
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
                }
          }
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-sm"
          onClick={onClose}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="press absolute top-5 right-5 md:top-8 md:right-8 z-10 text-paper text-[11px] uppercase tracking-[0.28em] inline-flex items-center gap-3 px-3 py-2 hover:text-rojo transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rojo"
          >
            Cerrar
            <span className="block w-6 h-px bg-current" />
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                aria-label="Imagen anterior"
                className="press absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-10 text-paper text-3xl md:text-4xl font-display leading-none w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:text-rojo transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rojo"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                aria-label="Imagen siguiente"
                className="press absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-10 text-paper text-3xl md:text-4xl font-display leading-none w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:text-rojo transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rojo"
              >
                ›
              </button>
            </>
          )}

          <motion.figure
            key={photo.src}
            initial={
              reduce
                ? false
                : { opacity: 0, scale: 0.96, filter: "blur(4px)" }
            }
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={
              reduce
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    scale: 0.98,
                    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
                  }
            }
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-[92vw] h-[78vh] md:w-[82vw] md:h-[82vh] max-w-[1400px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="92vw"
              quality={92}
              priority
              className="object-contain"
            />
            <figcaption className="absolute -bottom-8 md:-bottom-10 left-0 right-0 text-center text-paper-soft text-[11px] uppercase tracking-[0.28em]">
              {photo.alt} · {index + 1} / {photos.length}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
