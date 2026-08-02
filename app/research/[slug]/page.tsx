import { getAllEntries, getEntry } from "@/lib/content";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export function generateStaticParams() {
  return getAllEntries("research").map((e) => ({ slug: e.slug }));
}

export default function ResearchEntryPage({ params }: { params: { slug: string } }) {
  const entry = getEntry("research", params.slug);
  if (!entry) return notFound();

  const fm = entry.frontmatter;

  return (
    <article className="py-16">
      <div className="rounded-md border border-border bg-card p-10">
        <div className="mb-5 flex flex-wrap gap-4 font-mono text-[11px] text-text-faint">
          <span>STATUS: {fm.status ?? "—"}</span>
          <span>STARTED: {fm.date ?? "—"}</span>
          <span>DOMAIN: {fm.domain ?? "—"}</span>
        </div>
        <h1 className="mb-6 font-pixel text-xl leading-snug">{fm.title ?? entry.slug}</h1>

        {fm.repo && (
          <a
            href={fm.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 inline-block border border-cyan px-3 py-1.5 font-mono text-[12px] text-cyan transition hover:bg-cyan hover:text-bg"
          >
            View repository →
          </a>
        )}

        <div className="prose prose-invert max-w-none prose-headings:font-mono prose-headings:text-[11px] prose-headings:uppercase prose-headings:tracking-widest prose-headings:text-rust prose-p:text-text-dim prose-li:text-text-dim prose-strong:text-text prose-a:text-cyan">
          <MDXRemote source={entry.content} />
        </div>
      </div>
    </article>
  );
}
