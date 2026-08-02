import { getAllEntries, isDeepDive } from "@/lib/content";
import EmptyState from "@/components/EmptyState";
import ReadingListClient from "./ReadingListClient";

export default function ReadingPage() {
  const entries = getAllEntries("reading").map((e) => ({
    slug: e.slug,
    ...e.frontmatter,
    isDeepDive: isDeepDive(e),
  }));

  return (
    <section className="py-16">
      <div className="mb-8 font-mono text-xs uppercase tracking-widest text-text-faint">
        paper_analysis.md
      </div>
      <h1 className="mb-2 font-pixel text-2xl">Reading List </h1>
      <p className="mb-10 max-w-xl text-text-dim">
        Deep dives (and the occasional quick note) on papers I read. Strengths, weaknesses, assumptions, connections, what I still don't understand, and ideas inspired by the work.
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
