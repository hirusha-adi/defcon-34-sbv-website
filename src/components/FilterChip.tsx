interface FilterChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function FilterChip({ label, active = false, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-none border-2 px-3 py-1.5 font-mono text-xs uppercase tracking-wide transition focus:outline-none ${
        active
          ? 'border-yellow bg-yellow/10 text-yellow'
          : 'border-panel-2 bg-panel text-paper-dim hover:border-paper-dim hover:text-paper'
      }`}
    >
      {label}
    </button>
  );
}
