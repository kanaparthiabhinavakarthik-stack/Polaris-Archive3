import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";

export const Route = createFileRoute("/researchers")({
  component: ResearchersPage,
});

function ResearchersPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
          Researcher Portal
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Submit Research
        </h1>

        <p className="mt-4 text-slate-400">
          Researchers can submit legitimate research material for archive
          review before publication.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-green-500/30 bg-green-500/10 p-8">
            <h2 className="text-2xl font-semibold text-green-400">
              Submission Received
            </h2>

            <p className="mt-3 text-slate-300">
              Your research has been placed into the review queue.
              It will not automatically become a verified archive document.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-lg bg-slate-800 px-4 py-2"
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-8"
          >
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Researcher Name
              </label>

              <input
                required
                name="name"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 outline-none focus:border-purple-500"
                placeholder="Dr. / Researcher name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Institutional Email
              </label>

              <input
                required
                type="email"
                name="email"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 outline-none focus:border-purple-500"
                placeholder="researcher@institution.edu"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Research Discipline
              </label>

              <select
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
              >
                <option value="">Select discipline</option>
                <option>Glaciology</option>
                <option>Climate Science</option>
                <option>Atmospheric Science</option>
                <option>Oceanography</option>
                <option>Polar Biology</option>
                <option>Geospatial Science</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Research Title
              </label>

              <input
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
                placeholder="Title of your research"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Research Summary
              </label>

              <textarea
                required
                rows={5}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
                placeholder="Briefly describe the research..."
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Research Document
              </label>

              <input
                required
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
              />
            </div>

            <label className="flex gap-3 text-sm text-slate-400">
              <input required type="checkbox" />
              I confirm that I have permission to submit this material.
            </label>

            <button
              type="submit"
              className="w-full rounded-lg bg-purple-500 px-5 py-3 font-semibold text-white hover:bg-purple-400"
            >
              Submit for Review
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
