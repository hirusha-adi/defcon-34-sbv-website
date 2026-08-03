interface TerminalPanelProps {
  lines: string[];
  className?: string;
}

export function TerminalPanel({ lines, className = '' }: TerminalPanelProps) {
  return (
    <div className={`overflow-hidden rounded-none border-[3px] border-paper bg-panel shadow-pix ${className}`}>
      <div className="flex items-center gap-2 border-b-[3px] border-paper px-4 py-3">
        <span className="h-3 w-3 bg-coral" aria-hidden="true" />
        <span className="h-3 w-3 bg-yellow" aria-hidden="true" />
        <span className="h-3 w-3 bg-green" aria-hidden="true" />
        <span className="ml-2 font-mono text-xs text-paper-dim">scambait-village@defcon34</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-paper-dim">
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
    return <span className="text-green">{line}</span>;
  }
  if (line.includes('=')) {
    const [key, ...rest] = line.split('=');
    return (
      <>
        <span className="text-paper-dim">{key}=</span>
        <span className="text-paper">{rest.join('=')}</span>
      </>
    );
  }
  if (line.startsWith('[')) {
    return <span className="text-yellow">{line}</span>;
  }
  return line;
}
