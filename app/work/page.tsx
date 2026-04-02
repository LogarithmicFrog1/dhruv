import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "What I've done and what I'm working on.",
};

type Role = {
  period: string;
  title: string;
  org: string;
  orgUrl?: string;
  note: string;
};

const current: Role[] = [
  {
    period: "Winter 2025 –",
    title: "Co-founder & CEO",
    org: "LogPose",
    orgUrl: "https://www.logpose.live/",
    note: "Scheduling and ops for tutoring centers. Built with owners who were juggling calendars, texts, and half a dozen tools that don't talk to each other.",
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
  {
    period: "Fall 2023",
    title: "Director",
    org: "University Consulting Club",
    note: "Developed my first taste for cold outreach - the holy grail.",
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
          <span className="text-ink-secondary">
            {" @ "}
            {role.orgUrl ? (
              <a
                href={role.orgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:text-ink hover:decoration-ink"
              >
                {role.org}
              </a>
            ) : (
              role.org
            )}
          </span>
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
        <div className="group flex min-w-0 max-w-full flex-nowrap items-baseline gap-3">
          <h1 className="cursor-default shrink-0 text-sm font-medium text-accent transition-colors group-hover:text-ink">
            What I&apos;ve Done
          </h1>
          <p
            className="max-w-0 overflow-hidden whitespace-nowrap text-sm text-ink-secondary opacity-0 transition-[max-width,opacity] duration-300 ease-out group-hover:max-w-[min(100%,12rem)] group-hover:opacity-100"
            aria-hidden
          >
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
