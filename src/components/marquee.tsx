const items = [
  "Buenos Aires",
  "Sevilla",
  "Córdoba",
  "Madrid",
  "Comodoro Rivadavia",
  "Entre Ríos",
  "Andalucía",
  "Los Andes",
];

export function PlacesMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-line py-10 bg-ink-soft">
      <div className="marquee flex gap-16 w-max whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display italic font-light text-5xl md:text-7xl text-paper/30 hover:text-paper/80 transition-colors duration-700"
          >
            {item}
            <span className="ml-16 text-rojo">·</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
