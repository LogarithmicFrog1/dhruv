import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm up to right now.",
};

export default function NowPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-20">
      <h1 className="border-b border-rule pb-6 text-xs font-medium uppercase tracking-widest text-ink-secondary">
        Now
      </h1>
      <p className="mt-6 text-xs text-ink-secondary">Updated March 2026</p>

      <div className="prose mt-8">
        <h2>Thinking about</h2>
        <p>
          The difference between legibility and transparency. How personal
          writing changes once it has an audience. Whether taste can be
          cultivated deliberately or only encountered by accident.
        </p>

        <h2>Working on</h2>
        <p>
          Building this site. Writing more regularly. A few longer essays that
          aren&apos;t ready yet.
        </p>

        <h2>Reading</h2>
        <p>
          Re-reading Annie Dillard&apos;s <em>The Writing Life</em>. Scattered
          essays by Joan Didion. Too many browser tabs.
        </p>

        <h2>Trying to get better at</h2>
        <p>
          Editing ruthlessly. Sitting with ideas longer before writing about
          them. Not mistaking speed for quality.
        </p>
      </div>
    </div>
  );
}
