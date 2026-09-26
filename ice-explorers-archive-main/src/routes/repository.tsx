import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { disciplines, findings } from "../lib/archive-data";

export const Route = createFileRoute("/repository")({
  head: () => ({
    meta: [
      { title: "Knowledge Repository — Polaris Archive" },
      {
        name: "description",
        content:
          "Browse the full polar research catalogue by discipline — glaciology, climate, wildlife and oceanography records.",
      },
      { property: "og:title", content: "Knowledge Repository — Polaris Archive" },
      {
        property: "og:description",
        content: "Browse the full polar research catalogue by discipline.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RepositoryPage,
});

function RepositoryPage() {
  const [query, setQuery] = useState("");
  const [discipline, setDiscipline] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return findings.filter((f) => {
      const matchesDiscipline = !discipline || f.discipline === discipline;
      const matchesQuery =
        !q ||
        f.title.toLowerCase().includes(q) ||
        f.summary.toLowerCase().includes(q) ||
        f.location.toLowerCase().includes(q) ||
        f.id.toLowerCase().includes(q);
      return matchesDiscipline && matchesQuery;
    });
  }, [query, discipline]);

  return (
    <main className="bg-paper">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember">
          Knowledge Repository
        </p>
        <h1 className="mt-3 max-w-[24ch] text-balance font-display text-4xl font-medium tracking-tight lg:text-5xl">
          The catalogue, open to everyone
        </h1>
        <p className="mt-5 max-w-[52ch] text-pretty text-lg text-ink-soft">
          Every record in the archive is catalogued by discipline, station and location. Search the
          collection, or browse by field of study.
        </p>

        {/* Search */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search records, stations, locations…"
            className="w-full max-w-md rounded-md border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-polar/40"
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setDiscipline(null)}
              className={`rounded-md px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] ring-1 transition-colors ${
                discipline === null
                  ? "bg-polar text-paper ring-polar"
                  : "bg-ice/50 text-ink-soft ring-black/5 hover:bg-ice"
              }`}
            >
              All
            </button>
            {disciplines.map((d) => (
              <button
                key={d.slug}
                onClick={() => setDiscipline(d.name === discipline ? null : d.name)}
                className={`rounded-md px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] ring-1 transition-colors ${
                  discipline === d.name
                    ? "bg-polar text-paper ring-polar"
                    : "bg-ice/50 text-ink-soft ring-black/5 hover:bg-ice"
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>

        {/* Discipline cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d) => (
            <button
              key={d.slug}
              onClick={() => setDiscipline(d.name === discipline ? null : d.name)}
              className={`block rounded-md p-6 text-left ring-1 transition-colors ${
                discipline === d.name
                  ? "bg-ice ring-polar/40"
                  : "bg-ice/50 ring-black/5 hover:bg-ice"
              }`}
            >
              <span className="font-mono text-[10px] text-ember">{d.index}</span>
              <h2 className="mt-3 font-display text-xl font-medium">{d.name}</h2>
              <p className="mt-2 text-pretty text-sm text-ink-soft">{d.description}</p>
              <p className="mt-5 font-mono text-[11px] text-ink-soft">{d.records}</p>
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mt-14">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            {results.length} {results.length === 1 ? "record" : "records"} shown
          </p>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {results.map((f) => (
              <article key={f.id} className="grid gap-3 py-6 sm:grid-cols-12 sm:gap-6">
                <div className="sm:col-span-2">
                  <p className="font-mono text-[11px] text-ember">{f.id}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                    {f.year}
                  </p>
                </div>
                <div className="sm:col-span-7">
                  <h3 className="font-display text-xl font-medium tracking-tight">{f.title}</h3>
                  <p className="mt-2 max-w-[60ch] text-pretty text-sm text-ink-soft">{f.summary}</p>
                </div>
                <div className="sm:col-span-3 sm:text-right">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                    {f.discipline}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{f.location}</p>
                </div>
              </article>
            ))}
            {results.length === 0 && (
              <p className="py-10 text-center text-sm text-ink-soft">
                No records match your search. Try a broader term.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
