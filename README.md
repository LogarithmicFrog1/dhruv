# marsland.ing

A minimal, typography-first personal site for Dhruv Vaze. Built with Next.js.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Writing content

Posts live in `content/writing/` as Markdown files with frontmatter:

```md
---
title: "Post Title"
date: "2026-03-15"
description: "A short summary."
published: true
featured: false
tags: ["optional", "tags"]
---

Your content here.
```

- Set `published: true` to show a post on the site.
- Set `featured: true` to show it on the homepage (selected posts).
- The filename becomes the URL slug (`my-post.md` → `/writing/my-post`).

## Site structure

| Route | Purpose |
|---|---|
| `/` | Homepage — selected/featured posts |
| `/archive` | All posts, grouped by year |
| `/work` | What I've done — chill resume |
| `/about` | Who I am |
| `/now` | What I'm up to right now |
| `/writing/[slug]` | Individual post |

## Project layout

```
app/                   → Pages and layout (Next.js App Router)
components/            → Header, footer
content/writing/       → Markdown posts
lib/
  posts.ts             → Content reading and parsing
  types.ts             → TypeScript types
  utils.ts             → Date formatting
  site.ts              → Site-wide config (name, URL, description)
```

## Customizing

**Colors** — Edit the CSS custom properties in `app/globals.css`. Light and dark mode palettes are in `:root` and the `prefers-color-scheme: dark` media query. The accent color is a warm bronze.

**Typography** — Inter only, loaded in `app/layout.tsx`. One scale (`text-sm` / 14px) across UI and prose; gold accent for page and section labels. Monospace only for dates. Tweak in `app/globals.css` (`body`, `.prose`).

**Metadata** — Site name, URL, and description are in `lib/site.ts`. Page-level metadata is in each page file.

**Work page** — Edit `app/work/page.tsx` directly. Replace the placeholder roles with your actual experience.

## Deploying to Vercel

Push to a Git repository and import on [vercel.com](https://vercel.com). No environment variables or infrastructure needed — everything is statically generated at build time.

## Tech

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4
- [gray-matter](https://github.com/jonschlinkert/gray-matter) + [remark](https://github.com/remarkjs/remark) for Markdown
