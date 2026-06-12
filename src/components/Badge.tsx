interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'warning' | 'danger' | 'accent';
  className?: string;
}

const variantClasses = {
  default: 'border-village-border bg-village-soft text-village-muted',
  warning: 'border-village-warning/40 bg-village-warning/10 text-village-warning',
  danger: 'border-village-danger/40 bg-village-danger/10 text-village-danger',
  accent: 'border-village-green/40 bg-village-green/10 text-village-green',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
