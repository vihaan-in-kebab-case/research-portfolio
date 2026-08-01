import { getAllEntries } from "@/lib/content";
import EmptyState from "@/components/EmptyState";
import ReadingListClient from "./ReadingListClient";

export default function ReadingPage() {
  const entries = getAllEntries("reading").map((e) => ({
    slug: e.slug,
    ...e.frontmatter,
  }));

  return (
    <section className="py-16">
      <div className="mb-8 font-mono text-xs uppercase tracking-widest text-text-faint">
        reading &amp; notes
      </div>
      <h1 className="mb-2 font-pixel text-2xl">Reading &amp; Notes</h1>
      <p className="mb-10 max-w-xl text-text-dim">
        Everything I read, logged. Some entries are a one-line takeaway;
        others get the full critical-analysis treatment — strengths,
        weaknesses, assumptions, and what I still don&apos;t understand.
      </p>

      {entries.length === 0 ? (
        <EmptyState
          collection="reading"
          hint="Every entry needs: title, domain, difficulty, date, status, key_takeaway. Add authors/venue/year and a full Markdown body (Strengths, Weaknesses, Assumptions, Connections, Questions, Ideas) for a deep-dive note."
        />
      ) : (
        <ReadingListClient entries={entries} />
      )}
    </section>
  );
}
