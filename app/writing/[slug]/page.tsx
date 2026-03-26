import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPublishedSlugs } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return getPublishedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6">
      <header className="pb-10">
        <Link
          href="/archive"
          className="text-sm text-ink-secondary transition-colors hover:text-ink"
        >
          &larr; Archive
        </Link>
        <h1 className="mt-6 font-serif text-2xl font-normal tracking-tight sm:text-3xl">
          {post.title}
        </h1>
        <time className="mt-3 block text-sm text-ink-secondary">
          {formatDate(post.date)}
        </time>
      </header>

      <div
        className="prose pb-20"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
