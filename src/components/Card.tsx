interface CardProps {
  children: React.ReactNode;
  interactive?: boolean;
  className?: string;
}

export function Card({ children, interactive = false, className = '' }: CardProps) {
  const interactiveClasses = interactive
    ? 'transition hover:-translate-y-0.5 hover:border-village-green hover:shadow-glow motion-reduce:transition-none motion-reduce:hover:translate-y-0'
    : '';

  return (
    <div
      className={`rounded-2xl border border-village-border bg-village-surface/80 p-6 shadow-panel ${interactiveClasses} ${className}`}
    >
      {children}
    </div>
  );
}
