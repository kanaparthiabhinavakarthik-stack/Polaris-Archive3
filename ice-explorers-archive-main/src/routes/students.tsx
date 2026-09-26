import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";

export const Route = createFileRoute("/students")({
  component: StudentsPage,
});

function StudentsPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Student Research Hub
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Build Your Polar Research Profile
        </h1>

        <p className="mt-4 max-w-2xl text-slate-400">
          Students can create a research profile, upload a CV and submit
          legitimate research projects for review.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-green-500/30 bg-green-500/10 p-8">
            <h2 className="text-2xl font-semibold text-green-400">
              Student Profile Submitted
            </h2>

            <p className="mt-3 text-slate-300">
              Your profile and research submission are marked as
              <strong> Pending Review</strong>.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-lg bg-slate-800 px-4 py-2"
            >
              Edit Submission
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-8"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Student Name
                </label>

                <input
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email
                </label>

                <input
                  required
                  type="email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
                  placeholder="student@email.com"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Institution
              </label>

              <input
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
                placeholder="School / College / University"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Research Interests
              </label>

              <input
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
                placeholder="Glaciology, climate, polar biology..."
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Skills
              </label>

              <input
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
                placeholder="Python, GIS, data analysis..."
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Upload CV
              </label>

              <input
                required
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
              />
            </div>

            <div className="border-t border-slate-800 pt-6">
              <h2 className="text-xl font-semibold">
                Research Submission
              </h2>

              <div className="mt-5 space-y-5">
                <input
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
                  placeholder="Research project title"
                />

                <textarea
                  required
                  rows={5}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
                  placeholder="Describe your research project..."
                />

                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
                />
              </div>
            </div>

            <label className="flex gap-3 text-sm text-slate-400">
              <input required type="checkbox" />
              I confirm that this is my work or that I have permission to
              submit it.
            </label>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 px-5 py-3 font-semibold hover:bg-blue-400"
            >
              Create Student Research Profile
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
