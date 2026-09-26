import { createFileRoute } from "@tanstack/react-router";
import { studentResources } from "../lib/archive-data";

export const Route = createFileRoute("/students")({
  head: () => ({
    meta: [
      { title: "For Students — Polaris Archive" },
      {
        name: "description",
        content:
          "Datasets, field notes and lesson packs that bring polar research into the classroom — free for students and teachers.",
      },
      { property: "og:title", content: "For Students — Polaris Archive" },
      {
        property: "og:description",
        content: "Datasets, field notes and lesson packs that bring polar research into the classroom.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudentsPage,
});

const modules = [
  {
    id: "Module 01",
    title: "Reading an ice core",
    length: "22 min",
    description:
      "How layers, bubbles and isotopes turn a cylinder of ice into a climate timeline.",
  },
  {
    id: "Module 02",
    title: "Mapping the calving front",
    length: "18 min",
    description:
      "Use real satellite pairs to measure how a glacier's edge retreats over a decade.",
  },
  {
    id: "Module 03",
    title: "What the data actually shows",
    length: "27 min",
    description:
      "A guided walk through a genuine methane flux dataset — uncertainty included.",
  },
];

function StudentsPage() {
  return (
    <main className="bg-paper">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember">For Students</p>
        <h1 className="mt-3 max-w-[24ch] text-balance font-display text-4xl font-medium tracking-tight lg:text-5xl">
          Bring the archive into your classroom
        </h1>
        <p className="mt-5 max-w-[52ch] text-pretty text-lg text-ink-soft">
          Everything here is written in plain language and sourced from the same records our
          researchers rely on. Free to download, free to teach with.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {studentResources.map((r) => (
            <div key={r.name} className="rounded-md bg-ice/50 p-6 ring-1 ring-black/5">
              <h2 className="font-display text-xl font-medium">{r.name}</h2>
              <p className="mt-2 text-pretty text-sm text-ink-soft">{r.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-soft">
            Guided modules
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">
            Learn the method, not just the map
          </h2>
          <div className="mt-8 space-y-3">
            {modules.map((m) => (
              <div
                key={m.id}
                className="flex flex-col gap-2 rounded-md bg-ice/50 p-5 ring-1 ring-black/5 transition-colors hover:bg-ice sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ember">
                    {m.id}
                  </span>
                  <p className="mt-0.5 font-display text-lg font-medium">{m.title}</p>
                  <p className="mt-1 max-w-[56ch] text-pretty text-sm text-ink-soft">
                    {m.description}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-[11px] text-ink-soft">{m.length} →</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
