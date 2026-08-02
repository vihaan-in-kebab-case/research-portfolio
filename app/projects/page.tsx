import Link from "next/link";
import { getAllEntries } from "@/lib/content";
import EmptyState from "@/components/EmptyState";

export default function ProjectsPage() {
    const entries = getAllEntries("projects");

    return (
        <section className="py-16">
            <div className="mb-8 font-mono text-xs uppercase tracking-widest text-text-faint">
                my_work_2.exe
            </div>
            <h1 className="mb-2 font-pixel text-2xl">Projects</h1>
            <p className="mb-10 max-w-xl text-text-dim">
                Not software products: each one documents a problem, an approach,
                and what it taught me.
            </p>

            {entries.length === 0 ? (
                <EmptyState
                    collection="projects"
                    hint="A project entry needs: problem, why I built it, technical approach, mathematics involved, engineering decisions, lessons learned, limitations, future improvements, repository."
                />
            ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                    {entries.map((e) => (
                        <Link
                            key={e.slug}
                            href={`/projects/${e.slug}`}
                            className="block rounded-md border border-border bg-card p-6 transition hover:border-cyan"
                        >
                            <div className="font-pixel text-base">{e.frontmatter.title ?? e.slug}</div>
                            <div className="mt-2 text-sm text-text-dim">{e.frontmatter.problem ?? ""}</div>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
}