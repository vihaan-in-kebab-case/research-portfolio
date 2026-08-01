import { getAllEntries } from "@/lib/content";
import EmptyState from "@/components/EmptyState";

export default function QuestionsPage() {
  const entries = getAllEntries("questions");

  return (
    <section className="py-16">
      <div className="mb-8 font-mono text-xs uppercase tracking-widest text-text-faint">
        research questions
      </div>
      <h1 className="mb-2 font-pixel text-2xl">Questions, not answers</h1>
      <p className="mb-10 max-w-xl text-text-dim">
        Open threads I&apos;m still working through. Status changes as my
        understanding does.
      </p>

      {entries.length === 0 ? (
        <EmptyState
          collection="questions"
          hint="A question entry needs: question, why it interests me, current understanding, relevant papers, possible approaches, current status."
        />
      ) : (
        <div className="space-y-4">
          {entries.map((e) => (
            <div key={e.slug} className="border border-border bg-card p-6">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-rust">
                {e.frontmatter.status ?? "open"}
              </div>
              <div className="font-pixel text-base">{e.frontmatter.question ?? e.slug}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
