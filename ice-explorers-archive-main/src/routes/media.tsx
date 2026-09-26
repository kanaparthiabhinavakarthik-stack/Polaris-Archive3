import { createFileRoute } from "@tanstack/react-router";
import glacierCamp from "../assets/glacier-camp.jpg";
import drilling from "../assets/drilling.jpg";
import penguins from "../assets/penguins.jpg";
import meltwater from "../assets/meltwater.jpg";
import iceCore from "../assets/ice-core.jpg";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media Hub — Polaris Archive" },
      {
        name: "description",
        content:
          "Photography, film, field stories and sound from polar expeditions — the archive in pictures and audio.",
      },
      { property: "og:title", content: "Media Hub — Polaris Archive" },
      {
        property: "og:description",
        content: "Photography, film, field stories and sound from polar expeditions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MediaPage,
});

const mediaItems = [
  {
    kind: "Photography",
    title: "The long blue of the glacier",
    caption: "An expedition camp dwarfed by the calving front, DeVries Ice Shelf.",
    image: glacierCamp,
    alt: "Aerial view of a glacier meeting dark rock with an expedition camp below",
  },
  {
    kind: "Video · 04:12",
    title: "Drilling at minus forty",
    caption: "Shallow-core drilling on the plateau during the cold-season window.",
    image: drilling,
    alt: "Researcher in a yellow parka drilling into a snowfield",
  },
  {
    kind: "Field story",
    title: "A rookery that moved north",
    caption: "Following an emperor colony that abandoned its century-old breeding ground.",
    image: penguins,
    alt: "Emperor penguins huddled on pale ice",
  },
  {
    kind: "Sound · 06:30",
    title: "Listening to the melt",
    caption: "Hydrophone recordings from beneath a melting ice front at dusk.",
    image: meltwater,
    alt: "Calm polar ocean with a ribbon of meltwater at dusk",
  },
  {
    kind: "Photography",
    title: "A core in time",
    caption: "Core D-0142 in the cold laboratory, 690 years of trapped air.",
    image: iceCore,
    alt: "Vertical pale blue ice core cylinder in a bright laboratory",
  },
];

function MediaPage() {
  return (
    <main className="bg-panel">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember">Media Hub</p>
        <h1 className="mt-3 max-w-[24ch] text-balance font-display text-4xl font-medium tracking-tight lg:text-5xl">
          From the field, in pictures and sound
        </h1>
        <p className="mt-5 max-w-[52ch] text-pretty text-lg text-ink-soft">
          Photography, short films, field stories and sound recordings from active expeditions —
          every item free to use in classrooms with attribution.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mediaItems.map((item) => (
            <figure
              key={item.title}
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
              <figcaption className="p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ember">
                  {item.kind}
                </p>
                <p className="mt-1.5 font-display text-lg font-medium">{item.title}</p>
                <p className="mt-2 text-pretty text-sm text-ink-soft">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
