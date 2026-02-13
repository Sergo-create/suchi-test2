interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl tracking-wide text-white md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-sm text-white/70 md:text-base">{subtitle}</p> : null}
    </div>
  );
}
