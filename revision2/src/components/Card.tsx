interface CardProps {
  children: React.ReactNode;
  interactive?: boolean;
  className?: string;
}

export function Card({ children, interactive = false, className = '' }: CardProps) {
  const interactiveClasses = interactive
    ? 'transition-transform duration-150 ease-out-strong hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-pix-lg motion-reduce:transition-none motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0'
    : '';

  return (
    <div
      className={`rounded-none border-[3px] border-paper bg-panel p-6 shadow-pix ${interactiveClasses} ${className}`}
    >
      {children}
    </div>
  );
}
