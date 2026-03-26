export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  published: boolean;
  featured: boolean;
  tags?: string[];
  content: string;
};

export type PostMeta = Omit<Post, "content">;
