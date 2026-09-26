import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Polaris Archive" },
      {
        name: "description",
        content:
          "Polaris Archive is an independent outreach and knowledge initiative keeping the polar research record open, legible and free.",
      },
      { property: "og:title", content: "About — Polaris Archive" },
      {
        property: "og:description",
        content: "An independent initiative keeping the polar research record open and free.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { label: "Records catalogued", value: "6,640" },
  { label: "Partner stations", value: "40+" },
  { label: "Expeditions logged", value: "72" },
  { label: "Founded", value: "2011" },
];

function AboutPage() {
  return (
    <main className="bg-paper">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember">About</p>
        <h1 className="mt-3 max-w-[26ch] text-balance font-display text-4xl font-medium leading-tight tracking-tight lg:text-5xl">
          We keep the polar record open, legible, and in the hands of everyone who will read it
          next.
        </h1>
        <p className="mt-6 max-w-[56ch] text-pretty text-lg text-ink-soft">
          Polaris Archive is an independent outreach and knowledge initiative. We collect research
          findings from polar stations and expeditions, catalogue them with care, and share every
          record freely with students, teachers and the public — because the polar record belongs
          to everyone it affects.
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                {s.label}
              </dt>
              <dd className="mt-1 font-display text-3xl font-medium">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="ruled bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-soft">
              How we work
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">
              From field log to public record
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-5">
                <span className="font-mono text-[11px] text-ember">01</span>
                <div>
                  <h3 className="font-display text-lg font-medium">Collected at the source</h3>
                  <p className="mt-1 max-w-[52ch] text-pretty text-sm text-ink-soft">
                    Researchers at partner stations contribute findings, datasets and field notes
                    directly from active expeditions.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="font-mono text-[11px] text-ember">02</span>
                <div>
                  <h3 className="font-display text-lg font-medium">Catalogued with care</h3>
                  <p className="mt-1 max-w-[52ch] text-pretty text-sm text-ink-soft">
                    Every record is indexed by discipline, station and location, with metadata
                    checked against the original field logs.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="font-mono text-[11px] text-ember">03</span>
                <div>
                  <h3 className="font-display text-lg font-medium">Shared in plain language</h3>
                  <p className="mt-1 max-w-[52ch] text-pretty text-sm text-ink-soft">
                    Summaries are written for curious readers, not specialists — with the full
                    technical record always one click away.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-md bg-polar p-8 text-paper ring-1 ring-black/5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60">
                Contribute
              </p>
              <p className="mt-3 text-balance font-display text-2xl font-medium leading-snug">
                Working at a polar station? Your records belong in the archive.
              </p>
              <p className="mt-4 text-pretty text-sm text-paper/75">
                We accept findings, datasets, photography and field notes from accredited polar
                programmes. Every contribution is credited and remains yours.
              </p>
              <Link
                to="/repository"
                className="mt-6 inline-flex items-center rounded-md bg-paper py-2 pl-3 pr-4 text-sm text-polar ring-1 ring-paper transition-colors hover:bg-paper/90"
              >
                Browse the repository
                <span className="ml-2 text-polar/60">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
