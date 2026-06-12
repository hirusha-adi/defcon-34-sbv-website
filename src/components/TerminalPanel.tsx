interface TerminalPanelProps {
  lines: string[];
  className?: string;
}

export function TerminalPanel({ lines, className = '' }: TerminalPanelProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-village-border bg-village-soft shadow-panel ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-village-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-village-danger/80" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-village-warning/80" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-village-green/80" aria-hidden="true" />
        <span className="ml-2 font-mono text-xs text-village-muted">scambait-village@defcon34</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-village-muted">
        {lines.map((line, i) => (
          <span key={i} className="block">
            {highlightLine(line)}
          </span>
        ))}
      </pre>
    </div>
  );
}

function highlightLine(line: string) {
  if (line.startsWith('$') || line.startsWith('scambait')) {
    return <span className="text-village-green">{line}</span>;
  }
  if (line.includes('=')) {
    const [key, ...rest] = line.split('=');
    return (
      <>
        <span className="text-village-cyan">{key}=</span>
        <span className="text-village-text">{rest.join('=')}</span>
      </>
    );
  }
  if (line.startsWith('[')) {
    return <span className="text-village-warning">{line}</span>;
  }
  return line;
}
