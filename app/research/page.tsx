import Link from "next/link";
import { getAllEntries } from "@/lib/content";
import EmptyState from "@/components/EmptyState";

export default function ResearchPage() {
  const entries = getAllEntries("research");

  return (
    <section className="py-16">
      <div className="mb-8 font-mono text-xs uppercase tracking-widest text-text-faint">
        my_work.md
      </div>
      <h1 className="mb-2 font-pixel text-2xl">Research</h1>
      <p className="mb-10 max-w-xl text-text-dim">
        Each entry below is a live, evolving research thread — motivation,
        method, results, and sometimes where it fell apart.
      </p>

      {entries.length === 0 ? (
        <EmptyState
          collection="research"
          hint="A research entry needs: title, motivation, research question, background, literature, methodology, experiments, results, failure analysis, future work, paper/poster."
        />
      ) : (
        <div className="space-y-4">
          {entries.map((e) => (
            <Link
              key={e.slug}
              href={`/research/${e.slug}`}
              className="block border border-border bg-card p-6 transition hover:border-cyan"
            >
              <div className="mb-1 flex items-center gap-2 font-mono text-[11px] text-text-faint">
                <span>{e.frontmatter.status ?? "status unset"}</span>
                <span>·</span>
                <span>{e.frontmatter.date ?? "date unset"}</span>
              </div>
              <div className="font-pixel text-base">
                {e.frontmatter.title ?? e.slug}
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
