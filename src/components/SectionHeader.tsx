interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';

  return (
    <div className={`mb-10 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-3 font-mono text-[11px] tracking-[0.18em] text-village-muted">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-black tracking-[-0.02em] text-village-text md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-village-muted md:text-lg">{description}</p>
      )}
    </div>
  );
}
