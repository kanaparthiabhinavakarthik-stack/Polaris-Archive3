import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { documents } from "../lib/archive-data";

export const Route = createFileRoute("/documents")({
  component: DocumentsPage,
});

function DocumentsPage() {
  const [filter, setFilter] = useState("All");

  const filteredDocuments =
    filter === "All"
      ? documents
      : documents.filter((doc) => doc.access === filter);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Polaris Archive
          </p>

          <h1 className="text-4xl font-bold">
            Research Document Vault
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Explore research references, scientific records and student
            research material stored in the archive.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {["All", "Public", "Researcher", "Student"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                filter === item
                  ? "bg-cyan-500 text-slate-950"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredDocuments.map((doc) => (
            <article
              key={doc.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <span className="rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-400">
                  {doc.id}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    doc.access === "Public"
                      ? "bg-green-500/10 text-green-400"
                      : doc.access === "Researcher"
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-blue-500/10 text-blue-400"
                  }`}
                >
                  {doc.access}
                </span>
              </div>

              <h2 className="text-xl font-semibold">
                {doc.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {doc.description}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-slate-500">Year</p>
                  <p>{doc.year}</p>
                </div>

                <div>
                  <p className="text-slate-500">Discipline</p>
                  <p>{doc.discipline}</p>
                </div>
              </div>

              <a
                href={doc.file}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950 hover:bg-cyan-400"
              >
                View Document
              </a>
            </article>
          ))}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="rounded-xl border border-slate-800 p-10 text-center text-slate-400">
            No documents found.
          </div>
        )}
      </div>
    </main>
  );
}
