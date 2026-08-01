import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type Frontmatter = Record<string, any>;

export interface ContentEntry {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}

function collectionDir(collection: string) {
  return path.join(CONTENT_DIR, collection);
}

export function getSlugs(collection: string): string[] {
  const dir = collectionDir(collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => (f.endsWith(".md") || f.endsWith(".mdx")) && f.toLowerCase() !== "readme.md")
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getEntry(collection: string, slug: string): ContentEntry | null {
  const dir = collectionDir(collection);
  const mdPath = path.join(dir, `${slug}.md`);
  const mdxPath = path.join(dir, `${slug}.mdx`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, frontmatter: data, content };
}

export function getAllEntries(collection: string): ContentEntry[] {
  return getSlugs(collection)
    .map((slug) => getEntry(collection, slug))
    .filter((e): e is ContentEntry => e !== null)
    .sort((a, b) => {
      const da = a.frontmatter.date ? new Date(a.frontmatter.date).getTime() : 0;
      const db = b.frontmatter.date ? new Date(b.frontmatter.date).getTime() : 0;
      return db - da;
    });
}
