import { createFileRoute } from "@tanstack/react-router";
import { findings } from "../lib/archive-data";
import iceCore from "../assets/ice-core.jpg";

export const Route = createFileRoute("/findings")({
  head: () => ({
    meta: [
      { title: "Research Findings — Polaris Archive" },
      {
        name: "description",
        content:
          "Recent polar research findings from active expeditions, written in plain language for students and the public.",
      },
      { property: "og:title", content: "Research Findings — Polaris Archive" },
      {
        property: "og:description",
        content: "Recent polar research findings from active expeditions, in plain language.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FindingsPage,
});

function FindingsPage() {
  const featured = findings[0]!;
  const rest = findings.slice(1);

  return (
    <main className="bg-paper">
      {/* Featured finding */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-12">
        <div className="rise lg:col-span-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember">
            Featured Finding · {featured.station}
          </p>
          <h1 className="mt-3 max-w-[22ch] text-balance font-display text-4xl font-medium leading-tight tracking-tight lg:text-5xl">
            {featured.title}
          </h1>
          <p className="mt-5 max-w-[48ch] text-pretty text-lg text-ink-soft">{featured.summary}</p>
          <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-ink/10 pt-6">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">Record</dt>
              <dd className="mt-1 font-display text-xl font-medium">{featured.id}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">Field</dt>
              <dd className="mt-1 font-display text-xl font-medium">{featured.discipline}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">Year</dt>
              <dd className="mt-1 font-display text-xl font-medium">{featured.year}</dd>
            </div>
          </dl>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
            {featured.location}
          </p>
        </div>
        <div className="rise rise-2 lg:col-span-6">
          <img
            src={iceCore}
            alt="Vertical pale blue ice core cylinder in a bright laboratory"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-black/5"
          />
        </div>
      </section>

      {/* All findings */}
      <section className="ruled bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-soft">
            Recent entries
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">
            From the field log
          </h2>
          <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {rest.map((f) => (
              <article key={f.id} className="grid gap-3 py-8 sm:grid-cols-12 sm:gap-6">
                <div className="sm:col-span-2">
                  <p className="font-mono text-[11px] text-ember">{f.id}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                    {f.year}
                  </p>
                </div>
                <div className="sm:col-span-7">
                  <h3 className="font-display text-2xl font-medium tracking-tight">{f.title}</h3>
                  <p className="mt-2 max-w-[62ch] text-pretty text-ink-soft">{f.summary}</p>
                </div>
                <div className="sm:col-span-3 sm:text-right">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                    {f.discipline} · {f.station}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{f.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
