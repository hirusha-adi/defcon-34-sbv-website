export type BadgeTone = 'paper' | 'yellow' | 'coral' | 'mint' | 'sky' | 'violet' | 'green' | 'blue' | 'pink';

interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}

const toneClasses: Record<BadgeTone, string> = {
  paper: 'border-paper-dim/50 text-paper-dim',
  yellow: 'border-yellow text-yellow',
  coral: 'border-coral text-coral',
  mint: 'border-mint text-mint',
  sky: 'border-sky text-sky',
  violet: 'border-violet text-violet',
  green: 'border-green text-green',
  blue: 'border-blue text-blue',
  pink: 'border-pink text-pink',
};

export function Badge({ children, tone = 'paper', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-none border-2 bg-panel px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
