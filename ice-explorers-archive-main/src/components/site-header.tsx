import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/repository", label: "Repository" },
  { to: "/findings", label: "Findings" },
  { to: "/media", label: "Media" },
  { to: "/documents", label: "Documents" },
  { to: "/stations", label: "Stations" },
  { to: "/researchers", label: "For Researchers" },
  { to: "/students", label: "For Students" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-ink/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-4">
          <div className="grid size-10 select-none place-items-center rounded-md bg-polar font-display text-lg text-paper">
            P
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg font-medium tracking-tight">Polaris Archive</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
              Expedition Records · Vol. IX
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-ink-soft transition-colors hover:text-ink"
              activeProps={{ className: "text-ink font-medium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/repository"
          className="hidden items-center rounded-md bg-ink py-2 pl-3 pr-3 text-sm text-paper transition-colors hover:bg-ink/85 sm:inline-flex"
        >
          <span className="mr-1.5">Search</span>
          <span className="rounded border border-paper/30 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em]">
            /
          </span>
        </Link>
      </div>
    </header>
  );
}
