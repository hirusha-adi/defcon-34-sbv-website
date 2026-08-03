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
  const variantClass = variant === 'soft' ? 'border-y-[3px] border-panel-2 bg-panel/40' : '';

  return (
    <section className={`py-[clamp(4rem,8vw,6rem)] ${variantClass} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
