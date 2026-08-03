interface WarningPanelProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'danger' | 'warning';
  className?: string;
}

const variantClasses = {
  danger: {
    panel: 'border-coral bg-coral/5',
    title: 'text-coral',
  },
  warning: {
    panel: 'border-yellow bg-yellow/5',
    title: 'text-yellow',
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
    <div className={`rounded-none border-[3px] p-6 ${styles.panel} ${className}`}>
      {title && (
        <p className={`font-mono text-xs font-bold uppercase tracking-widest ${styles.title}`}>{title}</p>
      )}
      <div className={title ? 'mt-3 text-base leading-7 text-paper' : ''}>{children}</div>
    </div>
  );
}
