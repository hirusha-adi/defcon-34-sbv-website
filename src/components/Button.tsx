import { Link } from 'react-router-dom';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  external?: boolean;
}

const baseClasses =
  'inline-flex items-center justify-center rounded-xl px-5 py-3 font-mono text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-village-bg';

const variantClasses = {
  primary:
    'border border-village-green bg-village-green text-black hover:brightness-105 focus:ring-village-green',
  secondary:
    'border border-village-border-strong text-village-text hover:border-village-green hover:text-village-green focus:ring-village-cyan',
  ghost:
    'border border-transparent text-village-muted underline-offset-4 hover:text-village-green hover:underline focus:ring-village-cyan',
};

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  const isExternal = external || href.startsWith('http') || href === '#';

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  );
}
