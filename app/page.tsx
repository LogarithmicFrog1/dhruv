import Link from "next/link";
import { getFeaturedPosts, getAllPosts } from "@/lib/posts";
import { formatDateShort } from "@/lib/utils";

export default function HomePage() {
  const featured = getFeaturedPosts();
  const posts = featured.length > 0 ? featured : getAllPosts().slice(0, 8);

  return (
    <div className="mx-auto max-w-2xl px-6 pb-16">
      <div className="border-t border-rule" />

      <ul className="mt-10 space-y-5">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/writing/${post.slug}`}
              className="group flex items-baseline gap-6"
            >
              <time className="w-20 shrink-0 font-mono text-sm text-ink-secondary">
                {formatDateShort(post.date)}
              </time>
              <span className="transition-colors group-hover:text-accent">
                {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-14">
        <Link
          href="/archive"
          className="text-sm text-accent transition-colors hover:text-ink"
        >
          Full archive &rarr;
        </Link>
      </div>
    </div>
  );
}
