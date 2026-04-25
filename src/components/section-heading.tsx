import { Reveal } from "./reveal";

type Props = {
  eyebrow?: string;
  title: string;
  italic?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  italic,
  align = "left",
}: Props) {
  return (
    <div
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : ""}`}
    >
      {eyebrow && (
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="block w-8 h-px bg-rojo" />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="display text-paper text-[clamp(2.25rem,5vw,4.75rem)] max-w-[16ch]">
          {title}
          {italic ? (
            <>
              {" "}
              <span className="italic font-light text-paper-soft">{italic}</span>
            </>
          ) : null}
        </h2>
      </Reveal>
    </div>
  );
}
