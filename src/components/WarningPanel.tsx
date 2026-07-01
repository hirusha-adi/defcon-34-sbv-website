interface WarningPanelProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'danger' | 'warning';
  className?: string;
}

const variantClasses = {
  danger: {
    panel: 'border-village-danger/30 bg-village-danger/5',
    title: 'text-village-danger',
  },
  warning: {
    panel: 'border-village-warning/30 bg-village-warning/5',
    title: 'text-village-warning',
  },
};

export function WarningPanel({
  title,
  children,
  variant = 'danger',
  className = '',
}: WarningPanelProps) {
  const styles = variantClasses[variant];

  return (
    <div className={`rounded-2xl border p-6 ${styles.panel} ${className}`}>
      {title && (
        <p className={`font-mono text-xs uppercase tracking-widest ${styles.title}`}>{title}</p>
      )}
      <div className={title ? 'mt-3 text-base leading-7 text-village-text' : ''}>{children}</div>
    </div>
  );
}
