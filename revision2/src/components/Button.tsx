import { Link } from 'react-router-dom';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  external?: boolean;
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-none border-[3px] px-5 py-3 font-display text-xs font-bold uppercase tracking-wide transition-transform duration-150 ease-out-strong focus:outline-none';

const variantClasses = {
  primary: 'border-paper bg-yellow text-ink shadow-pix hover:shadow-pix-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none',
  secondary:
    'border-paper bg-panel text-paper shadow-pix hover:shadow-pix-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none',
  ghost:
    'border-transparent bg-transparent px-2 py-2 text-paper-dim underline decoration-dotted underline-offset-4 hover:text-yellow',
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
