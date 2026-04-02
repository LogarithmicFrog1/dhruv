import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm up to right now.",
};

export default function NowPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-20">
      <h1 className="border-b border-rule pb-6 text-sm font-medium text-accent">
        Now
      </h1>

      <div className="prose mt-8">
        <h2>Working on</h2>
        <p>
          <a
            href="https://www.logpose.live/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LogPose
          </a>{" "}
          is modern software for tutoring centers. We&apos;re intent on
          building a great, profitable business while staying bootstrapped.
          Based in SF, serving education businesses across the nation.
        </p>

        <h2>Trying to</h2>
        <ul>
          <li>
            Cut down from a winter bulk and actually get lean for once. Living
            next to a beach is great motivation.
          </li>
          <li>Drink more coffee.</li>
        </ul>

        <h2>Reading</h2>
        <ul>
          <li>
            <em>Flow</em> (Csikszentmihalyi).
          </li>
          <li>
            <em>On the Edge</em> (Silver)
          </li>
        </ul>
      </div>
    </div>
  );
}
