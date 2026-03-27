import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDateArchive, getYear } from "@/lib/utils";
import type { PostMeta } from "@/lib/types";

export const metadata: Metadata = {
  title: "Archive",
  description: "All writing, chronologically.",
};

function groupByYear(posts: PostMeta[]): Map<string, PostMeta[]> {
  const groups = new Map<string, PostMeta[]>();
  for (const post of posts) {
    const year = getYear(post.date);
    const existing = groups.get(year) ?? [];
    existing.push(post);
    groups.set(year, existing);
  }
  return groups;
}

export default function ArchivePage() {
  const posts = getAllPosts();
  const grouped = groupByYear(posts);

  return (
    <div className="mx-auto max-w-2xl px-6 pb-20">
      <h1 className="border-b border-rule pb-6 text-sm font-medium text-accent">
        Archive
      </h1>

      {Array.from(grouped.entries()).map(([year, yearPosts]) => (
        <section key={year} className="mt-10">
          <h2 className="mb-6 text-sm font-medium text-accent">{year}</h2>
          <ul className="space-y-4">
            {yearPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/writing/${post.slug}`}
                  className="group flex items-baseline gap-6"
                >
                  <time className="w-24 shrink-0 font-mono text-sm text-ink-secondary">
                    {formatDateArchive(post.date)}
                  </time>
                  <span className="text-sm text-ink transition-colors group-hover:text-accent">
                    {post.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
