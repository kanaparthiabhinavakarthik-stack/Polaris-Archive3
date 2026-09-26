import { createFileRoute, Link } from "@tanstack/react-router";
import { disciplines, studentResources } from "../lib/archive-data";
import iceCore from "../assets/ice-core.jpg";
import glacierCamp from "../assets/glacier-camp.jpg";
import drilling from "../assets/drilling.jpg";
import penguins from "../assets/penguins.jpg";
import meltwater from "../assets/meltwater.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Polaris Archive — Polar Research Records" },
      {
        name: "description",
        content:
          "An open archive of polar research findings, shared freely with students and the public through a knowledge repository and media hub.",
      },
      { property: "og:title", content: "Polaris Archive — Polar Research Records" },
      {
        property: "og:description",
        content:
          "An open archive of polar research findings, shared freely with students and the public.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const mediaItems = [
  { kind: "Photography", title: "The long blue of the glacier", image: glacierCamp, alt: "Aerial view of a glacier meeting dark rock with an expedition camp below" },
  { kind: "Video · 04:12", title: "Drilling at minus forty", image: drilling, alt: "Researcher in a yellow parka drilling into a snowfield" },
  { kind: "Field story", title: "A rookery that moved north", image: penguins, alt: "Emperor penguins huddled on pale ice" },
  { kind: "Sound · 06:30", title: "Listening to the melt", image: meltwater, alt: "Calm polar ocean with a ribbon of meltwater at dusk" },
];

function HomePage() {
  return (
    <main>
      {/* Hero: featured finding */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-12 lg:py-20">
          <div className="rise lg:col-span-5">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.24em] text-ember">
              Featured Finding · Station 7
            </p>
            <h1 className="max-w-[24ch] text-balance font-display text-5xl font-medium leading-tight tracking-tight lg:text-6xl">
              The ice memory of the last three centuries
            </h1>
            <p className="mt-6 max-w-[44ch] text-pretty text-lg text-ink-soft">
              A 312-metre ice core retrieved from the Devon ice shelf now holds trapped air from
              690 years ago — a continuous breath of the planet's past, one winter at a time.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/findings"
                className="inline-flex items-center rounded-md bg-polar py-2 pl-3 pr-4 text-sm text-paper ring-1 ring-polar transition-colors hover:bg-polar/85"
              >
                Read the full record
                <span className="ml-2 text-paper/70">→</span>
              </Link>
              <Link
                to="/findings"
                className="inline-flex items-center rounded-md border border-ink/15 px-3 py-2 text-sm text-ink transition-colors hover:bg-ink/5"
              >
                Browse all findings
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-6">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">Depth</dt>
                <dd className="mt-1 font-display text-2xl font-medium">312 m</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">Age span</dt>
                <dd className="mt-1 font-display text-2xl font-medium">690 yr</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">Samples</dt>
                <dd className="mt-1 font-display text-2xl font-medium">1,204</dd>
              </div>
            </dl>
          </div>
          <div className="rise rise-2 lg:col-span-7">
            <div className="relative">
              <div className="drift absolute -left-6 -top-6 -z-0 size-24 rounded-full bg-ice/70 blur-2xl" />
              <div
                className="drift absolute -right-8 bottom-8 -z-0 size-40 rounded-full bg-frost/50 blur-3xl"
                style={{ animationDelay: "-5s" }}
              />
              <img
                src={iceCore}
                alt="Vertical pale blue ice core cylinder in a bright laboratory"
                width={1024}
                height={1280}
                className="relative z-10 aspect-[4/5] w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <div className="absolute -bottom-6 left-6 right-6 z-20 flex items-center justify-between rounded-md bg-panel/90 px-5 py-4 ring-1 ring-black/5 backdrop-blur-sm">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                    Core D-0142 · 75°12′ S
                  </p>
                  <p className="mt-1 font-display text-sm font-medium">
                    DeVries Ice Shelf, East Antarctica
                  </p>
                </div>
                <span className="font-mono text-[10px] text-ember">Fig. 01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repository browser */}
      <section className="ruled bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-soft">
                Knowledge Repository
              </p>
              <h2 className="mt-2 max-w-[30ch] text-balance font-display text-3xl font-medium tracking-tight">
                Browse the collection by discipline
              </h2>
            </div>
            <Link
              to="/repository"
              className="hidden text-sm text-polar transition-colors hover:text-ink sm:inline"
            >
              View catalogue →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((d) => (
              <Link
                key={d.slug}
                to="/repository"
                className="group block rounded-md bg-ice/50 p-6 ring-1 ring-black/5 transition-colors hover:bg-ice"
              >
                <span className="font-mono text-[10px] text-ember">{d.index}</span>
                <h3 className="mt-3 font-display text-xl font-medium">{d.name}</h3>
                <p className="mt-2 text-pretty text-sm text-ink-soft">{d.description}</p>
                <p className="mt-5 font-mono text-[11px] text-ink-soft">{d.records}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Media hub */}
      <section className="bg-panel">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-soft">Media Hub</p>
            <h2 className="mt-2 max-w-[30ch] text-balance font-display text-3xl font-medium tracking-tight">
              From the field, in pictures and sound
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {mediaItems.map((item) => (
              <Link
                key={item.title}
                to="/media"
                className="overflow-hidden rounded-md bg-paper ring-1 ring-black/5"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <div className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ember">
                    {item.kind}
                  </p>
                  <p className="mt-1.5 font-display text-base font-medium">{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Students + mission */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-soft">
              For Students
            </p>
            <h2 className="mt-2 max-w-[34ch] text-balance font-display text-3xl font-medium tracking-tight">
              Bring the archive into your classroom
            </h2>
            <p className="mt-4 max-w-[52ch] text-pretty text-ink-soft">
              Downloadable datasets, annotated field notes and guided reading packs — written in
              plain language, sourced from the same records our researchers rely on.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {studentResources.map((r) => (
                <div key={r.name} className="rounded-md bg-ice/50 p-5 ring-1 ring-black/5">
                  <h3 className="font-display text-lg font-medium">{r.name}</h3>
                  <p className="mt-1.5 text-pretty text-sm text-ink-soft">{r.description}</p>
                </div>
              ))}
            </div>
            <Link
              to="/students"
              className="mt-6 inline-flex items-center rounded-md bg-ink px-4 py-2 text-sm text-paper transition-colors hover:bg-ink/85"
            >
              Explore student resources
              <span className="ml-2 text-paper/70">→</span>
            </Link>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-md bg-polar p-8 text-paper ring-1 ring-black/5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60">
                Our mission
              </p>
              <p className="mt-3 max-w-[26ch] text-balance font-display text-2xl font-medium leading-snug">
                We keep the polar record open, legible, and in the hands of everyone who will read
                it next.
              </p>
              <p className="mt-5 max-w-[42ch] text-pretty text-sm text-paper/75">
                Polaris Archive is an independent outreach and knowledge initiative. Since 2011 we
                have catalogued 6,640 records from 40+ partner stations, and shared every one of
                them freely.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center rounded-md bg-paper py-2 pl-3 pr-4 text-sm text-polar ring-1 ring-paper transition-colors hover:bg-paper/90"
              >
                Read the mission statement
                <span className="ml-2 text-polar/60">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
