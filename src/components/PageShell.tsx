interface PageShellProps {
  children: React.ReactNode;
  grid?: boolean;
}

export function PageShell({ children, grid = false }: PageShellProps) {
  return (
    <div className="relative py-16 md:py-24">
      {grid && (
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
}
