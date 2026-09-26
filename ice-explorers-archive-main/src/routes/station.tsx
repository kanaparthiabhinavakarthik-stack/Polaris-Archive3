import { createFileRoute } from "@tanstack/react-router";
import { stations } from "../lib/archive-data";

export const Route = createFileRoute("/stations")({
  component: StationsPage,
});

function StationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Polaris Archive
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Polar Research Stations
        </h1>

        <p className="mt-4 max-w-2xl text-slate-400">
          Explore stations represented in the archive catalogue.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stations.map((station, index) => (
            <article
              key={station.name}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-500/50"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                {index + 1}
              </div>

              <h2 className="text-xl font-semibold">
                {station.name}
              </h2>

              <p className="mt-3 text-sm text-slate-400">
                {station.region}
              </p>

              <div className="mt-5 border-t border-slate-800 pt-4 text-sm">
                <p>
                  <span className="text-slate-500">Country:</span>{" "}
                  {station.country}
                </p>

                <p className="mt-2">
                  <span className="text-slate-500">Type:</span>{" "}
                  {station.type}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
          <p className="text-lg font-semibold">
            {stations.length} stations represented
          </p>

          <p className="mt-2 text-sm text-slate-400">
            This catalogue represents stations included in the Polaris
            Archive demonstration. It does not by itself indicate an
            institutional partnership or official affiliation.
          </p>
        </div>
      </div>
    </main>
  );
}
