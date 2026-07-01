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
      className={`rounded-full border px-3 py-1 font-mono text-xs transition focus:outline-none focus:ring-2 focus:ring-village-green focus:ring-offset-2 focus:ring-offset-village-bg ${
        active
          ? 'border-village-green/40 bg-village-green/10 text-village-green'
          : 'border-village-border bg-village-soft text-village-muted hover:border-village-border-strong hover:text-village-text'
      }`}
    >
      {label}
    </button>
  );
}
