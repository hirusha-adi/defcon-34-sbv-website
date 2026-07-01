interface SubsectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SubsectionHeader({ title, description, className = '' }: SubsectionHeaderProps) {
  return (
    <div className={`mb-6 ${className}`}>
      <h2 className="text-2xl font-bold text-village-text">{title}</h2>
      {description && <p className="mt-2 text-sm leading-6 text-village-muted">{description}</p>}
    </div>
  );
}
