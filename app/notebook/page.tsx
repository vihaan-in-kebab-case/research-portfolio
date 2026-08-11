import { getAllEntries } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import EmptyState from "@/components/EmptyState";
import ExpandableNotebookCard from "@/components/ExpandableNotebookCard";

export default function NotebookPage() {
  const entries = getAllEntries("notebook");

  return (
    <section className="py-16">
      <div className="mb-8 font-mono text-xs uppercase tracking-widest text-text-faint">
        research notebook
      </div>
      <h1 className="mb-2 font-pixel text-2xl">Notebook</h1>
      <p className="mb-10 max-w-xl text-text-dim">
        A chronological lab notebook: objective, hypothesis, results,
        unexpected observations, next steps.
      </p>

      {entries.length === 0 ? (
        <EmptyState
          collection="notebook"
          hint="A notebook entry needs: date, objective, hypothesis, experiments, results, unexpected observations, questions, next steps."
        />
      ) : (
        <div className="space-y-6">
          {entries.map((e) => (
            <ExpandableNotebookCard
              key={e.slug}
              title={e.frontmatter.date ?? e.slug}
              rows={[
                { label: "objective", value: e.frontmatter.objective ?? "-" },
                { label: "hypothesis", value: e.frontmatter.hypothesis ?? "-" },
                { label: "next", value: e.frontmatter.next_steps ?? "-" },
              ]}
            >
              <MDXRemote source={e.content} />
            </ExpandableNotebookCard>
          ))}
        </div>
      )}
    </section>
  );
}