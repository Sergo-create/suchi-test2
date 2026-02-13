interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      {eyebrow ? (
        <p className="mb-3 text-xs tracking-[0.35em] text-[#D4AF37]/80 uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl text-white sm:text-4xl md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">{description}</p>
      ) : null}
    </header>
  );
}
