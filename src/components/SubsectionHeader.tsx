interface SubsectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SubsectionHeader({ title, description, className = '' }: SubsectionHeaderProps) {
  return (
    <div className={`mb-6 ${className}`}>
      <h2 className="font-body text-2xl font-extrabold tracking-tight text-paper">{title}</h2>
      {description && <p className="mt-2 text-sm leading-6 text-paper-dim">{description}</p>}
    </div>
  );
}
