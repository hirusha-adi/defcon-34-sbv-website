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
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  const Heading = as;

  return (
    <div className={`mb-10 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-village-muted">
          {eyebrow}
        </p>
      )}
      <Heading className="text-3xl font-black tracking-[-0.02em] text-village-text md:text-4xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-base leading-7 text-village-muted md:text-lg">{description}</p>
      )}
    </div>
  );
}
