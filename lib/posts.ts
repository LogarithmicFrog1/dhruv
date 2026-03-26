import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Post, PostMeta } from "./types";

const contentDirectory = path.join(process.cwd(), "content/writing");

function parseFrontmatter(slug: string): Post {
  const filePath = path.join(contentDirectory, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? "",
    description: data.description ?? "",
    published: data.published ?? false,
    featured: data.featured ?? false,
    tags: data.tags ?? [],
    content,
  };
}

function getAllSlugs(): string[] {
  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getAllSlugs()
    .map((slug) => {
      const post = parseFrontmatter(slug);
      return {
        slug: post.slug,
        title: post.title,
        date: post.date,
        description: post.description,
        published: post.published,
        featured: post.featured,
        tags: post.tags,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getFeaturedPosts(): PostMeta[] {
  return getAllPosts().filter((post) => post.featured);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const slugs = getAllSlugs();
  if (!slugs.includes(slug)) return null;

  const post = parseFrontmatter(slug);
  if (!post.published) return null;

  const result = await remark().use(html).process(post.content);

  return {
    ...post,
    content: result.toString(),
  };
}

export function getPublishedSlugs(): string[] {
  return getAllSlugs().filter((slug) => {
    const post = parseFrontmatter(slug);
    return post.published;
  });
}
