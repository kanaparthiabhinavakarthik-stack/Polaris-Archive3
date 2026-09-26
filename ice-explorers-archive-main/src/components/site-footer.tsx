export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="grid size-8 select-none place-items-center rounded bg-polar font-display text-paper">
            P
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
            Polaris Archive · 75° S · Est. 2011
          </p>
        </div>
        <p className="text-sm text-ink-soft">An open record of the polar world, kept in daylight.</p>
      </div>
    </footer>
  );
}
