interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  as = 'h2',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : '';
  const Heading = as;

  return (
    <div className={`mb-10 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-yellow">
          <span className="inline-block h-2 w-2 bg-yellow" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      {as === 'h1' ? (
        <Heading className="font-display text-[clamp(1.375rem,3.6vw,2.25rem)] leading-[1.6] tracking-tight text-paper">
          {title}
        </Heading>
      ) : (
        <Heading className="font-body text-3xl font-extrabold tracking-tight text-paper md:text-4xl">
          {title}
        </Heading>
      )}
      {description && (
        <p className="mt-4 text-base leading-7 text-paper-dim md:text-lg">{description}</p>
      )}
    </div>
  );
}
