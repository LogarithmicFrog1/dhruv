import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "What I've done and what I'm working on.",
};

type Role = {
  period: string;
  title: string;
  org: string;
  note: string;
};

const current: Role[] = [
  {
    period: "Oct 2025 –",
    title: "Co-founder & CEO",
    org: "LogPose",
    note: "Building scheduling and ops software for tutoring centers. The kind of admin chaos — reschedules, cancellations, tutor availability, parent texts — that no existing tool handles well.",
  },
];

const previous: Role[] = [
  {
    period: "Summer 2025",
    title: "SDE Intern",
    org: "Amazon",
    note: "Built a seller compliance notification service in Java on AWS. Cut alarm escalation latency by 25% across the Marketplace.",
  },
  {
    period: "Summer 2024",
    title: "Summer Associate",
    org: "BCG",
    note: "Partnership strategy for a US tech hyperscaler. Also designed a GenAI training curriculum for BCG partners.",
  },
  {
    period: "Fall 2023",
    title: "Chief-of-Staff",
    org: "Cascading.AI (now Casca)",
    note: "Part-time at a YC-backed fintech AI startup. Ran GTM and helped build an ML pipeline for credit risk assessment.",
  },
];

function RoleEntry({ role }: { role: Role }) {
  return (
    <div className="flex gap-6">
      <span className="w-28 shrink-0 pt-0.5 font-mono text-sm text-ink-secondary">
        {role.period}
      </span>
      <div>
        <p className="text-sm text-ink">
          {role.title}
          <span className="text-ink-secondary"> — {role.org}</span>
        </p>
        <p className="mt-1.5 text-sm text-ink-secondary leading-relaxed">
          {role.note}
        </p>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-20">
      <header className="border-b border-rule pb-6">
        <div className="group inline-block">
          <h1 className="cursor-default text-sm font-medium text-accent transition-colors group-hover:text-ink">
            What I&apos;ve Done
          </h1>
          <p className="mt-0 max-h-0 overflow-hidden text-sm text-ink-secondary opacity-0 transition-[max-height,opacity,margin-top] duration-200 group-hover:mt-2 group-hover:max-h-10 group-hover:opacity-100">
            i&apos;ll face myself
          </p>
        </div>
      </header>

      <section className="mt-10">
        <h2 className="mb-6 text-sm font-medium text-accent">Now</h2>
        <div className="space-y-8">
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
    </div>
  );
}
