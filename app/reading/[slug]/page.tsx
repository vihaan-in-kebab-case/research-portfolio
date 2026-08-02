import { getAllEntries, getEntry, isDeepDive } from "@/lib/content";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXLink } from "@/components/MDXLink";

export function generateStaticParams() {
  return getAllEntries("reading").map((e) => ({ slug: e.slug }));
}

export default function ReadingEntryPage({ params }: { params: { slug: string } }) {
  const entry = getEntry("reading", params.slug);
  if (!entry) return notFound();
  const fm = entry.frontmatter;
  const deepDive = isDeepDive(entry);
  const hasCitation = Boolean(fm.authors || fm.venue);

  return (
    <article className="py-16">
      <div className="rounded-md border border-border bg-card p-10">
        <div className="mb-4 flex flex-wrap gap-4 font-mono text-[11px] text-text-faint">
          {hasCitation ? (
            <>
              <span>{fm.authors ?? "-"}</span>
              <span>{fm.venue ?? "-"}</span>
              <span>{fm.year ?? "-"}</span>
            </>
          ) : (
            <>
              <span>DOMAIN: {fm.domain ?? "-"}</span>
              <span>STATUS: {fm.status ?? "-"}</span>
              <span>READ: {fm.date_read ?? fm.date ?? "-"}</span>
            </>
          )}
          {deepDive && (
            <span className="border border-rust px-1.5 py-0.5 text-[9px] uppercase tracking-widest text-rust">
              deep dive
            </span>
          )}
        </div>
        <h1 className="mb-6 font-pixel text-xl">{fm.title ?? entry.slug}</h1>

        {fm.key_takeaway && (
          <div className="mb-8 border-l-2 border-cyan pl-4 text-sm text-text-dim">
            {fm.key_takeaway}
          </div>
        )}

        {entry.content.trim().length > 0 && (
          <div className="prose prose-invert max-w-none prose-headings:font-mono prose-headings:text-[11px] prose-headings:uppercase prose-headings:tracking-widest prose-headings:text-rust prose-p:text-text-dim prose-li:text-text-dim prose-strong:text-text prose-a:text-cyan">
            <MDXRemote source={entry.content} components={{ a: MDXLink }} />
          </div>
        )}
      </div>
    </article>
  );
}
