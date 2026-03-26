import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Who I am.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-20">
      <h1 className="border-b border-rule pb-6 text-xs font-medium uppercase tracking-widest text-ink-secondary">
        About
      </h1>

      <div className="prose mt-10">
        <p>
          I&apos;m Dhruv. I write about technology, ambition, taste, culture,
          and the long project of becoming more legible to yourself.
        </p>
        <p>
          I&apos;m drawn to questions about how people develop judgment, what it
          means to build something with care, and why certain ideas stick in
          your head for years while others vanish overnight. I care about the
          texture of how we think — not just what we believe, but the structures
          underneath.
        </p>
        <p>
          This site is where I keep the writing. Some of it is polished. Some
          of it is thinking out loud. The point is to write and see what
          clarifies over time.
        </p>
        <p>
          If you want to know what I&apos;ve worked on, there&apos;s a{" "}
          <Link href="/work">work page</Link>. If you want to know what
          I&apos;m up to right now, there&apos;s a{" "}
          <Link href="/now">now page</Link>.
        </p>
      </div>
    </div>
  );
}
