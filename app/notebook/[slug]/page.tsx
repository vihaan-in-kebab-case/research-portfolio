import { getAllEntries, getEntry } from "@/lib/content";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXLink } from "@/components/MDXLink";

export function generateStaticParams() {
  return getAllEntries("notebook").map((e) => ({ slug: e.slug }));
}

export default function NotebookEntryPage({ params }: { params: { slug: string } }) {
  const entry = getEntry("notebook", params.slug);
  if (!entry) return notFound();

  return (
    <article className="py-16">
      <div className="rounded-md border border-border bg-card p-10">
        <div className="mb-4 font-mono text-[11px] text-rust">{entry.frontmatter.date ?? entry.slug}</div>
        <div className="prose prose-invert max-w-none prose-headings:font-mono prose-headings:text-[11px] prose-headings:uppercase prose-headings:tracking-widest prose-headings:text-rust prose-p:text-text-dim prose-li:text-text-dim prose-strong:text-text prose-a:text-cyan">
          <MDXRemote source={entry.content} components={{ a: MDXLink }} />
        </div>
      </div>
    </article>
  );
}
