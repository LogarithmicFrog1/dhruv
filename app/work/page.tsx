import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "What I've done and what I'm working on.",
};

type Role = {
  period: string;
  title: string;
  org: string;
  description: string;
};

const current: Role[] = [
  {
    period: "2024 –",
    title: "Building things",
    org: "",
    description:
      "Working on projects at the intersection of technology and craft. More details coming soon.",
  },
];

const previous: Role[] = [
  {
    period: "2022 – 2024",
    title: "Placeholder Role",
    org: "Placeholder Company",
    description:
      "Replace this with a real description of what you did, what you learned, and what mattered about the work.",
  },
  {
    period: "2020 – 2022",
    title: "Another Role",
    org: "Another Place",
    description:
      "Replace this too. Keep it conversational — this isn't a résumé, it's context for who you are.",
  },
];

function RoleEntry({ role }: { role: Role }) {
  return (
    <div className="flex gap-6">
      <span className="w-28 shrink-0 pt-0.5 font-mono text-sm text-ink-secondary">
        {role.period}
      </span>
      <div>
        <p className="font-medium">
          {role.title}
          {role.org && (
            <span className="font-normal text-ink-secondary">
              {" "}
              — {role.org}
            </span>
          )}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
          {role.description}
        </p>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-20">
      <h1 className="border-b border-rule pb-6 text-xs font-medium uppercase tracking-widest text-ink-secondary">
        What I&apos;ve Done
      </h1>

      <section className="mt-10">
        <h2 className="mb-6 text-sm font-medium text-accent">Now</h2>
        <div className="space-y-6">
          {current.map((role, i) => (
            <RoleEntry key={i} role={role} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="mb-6 text-sm font-medium text-accent">Previously</h2>
        <div className="space-y-8">
          {previous.map((role, i) => (
            <RoleEntry key={i} role={role} />
          ))}
        </div>
      </section>

      <div className="mt-16 border-t border-rule pt-8">
        <p className="text-sm leading-relaxed text-ink-secondary">
          This page is a work in progress. Replace the placeholder entries above
          with your actual experience. Keep it honest, keep it brief, keep it
          human.
        </p>
      </div>
    </div>
  );
}
