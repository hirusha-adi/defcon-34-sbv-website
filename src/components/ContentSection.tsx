interface ContentSectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'soft';
  className?: string;
}

export function ContentSection({
  children,
  variant = 'default',
  className = '',
}: ContentSectionProps) {
  const variantClass =
    variant === 'soft' ? 'border-y border-village-border bg-village-soft' : '';

  return (
    <section className={`py-16 md:py-24 ${variantClass} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
