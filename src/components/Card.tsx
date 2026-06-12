interface CardProps {
  children: React.ReactNode;
  interactive?: boolean;
  className?: string;
}

export function Card({ children, interactive = false, className = '' }: CardProps) {
  const interactiveClasses = interactive
    ? 'transition hover:border-village-border-strong motion-reduce:transition-none'
    : '';

  return (
    <div
      className={`rounded-2xl border border-village-border bg-village-surface/80 p-6 shadow-panel ${interactiveClasses} ${className}`}
    >
      {children}
    </div>
  );
}
