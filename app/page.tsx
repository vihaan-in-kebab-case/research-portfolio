import TerminalCard from "@/components/TerminalCard";
import { getAllEntries } from "@/lib/content";
import { SITE_CONFIG } from "@/lib/site-config";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function HomePage() {
  const research = getAllEntries("research");
  const reading = getAllEntries("reading");
  const questions = getAllEntries("questions");
  const openQuestions = questions.filter(
    (q) => (q.frontmatter.status ?? "open").toLowerCase() !== "answered"
  );

  return (
    <section>
      <div className="py-16 md:py-24">
        <h1 className="mb-3 font-pixel text-3xl leading-snug">
          Hi, I&apos;m Vihaan Kharia.
        </h1>
        <p className="mb-4 font-mono text-sm text-cyan">
          computer vision · natural language processing · 3d-reconstruction
        </p>
        <p className="mb-6 max-w-xl text-text-dim">
          I'm an undergraduate computer science student from <a href="https://www.manipal.edu/mit.html" target="_blank" rel="noopener noreferrer" className="underline decoration-cyan font-mono text-[13px] font-bold">Manipal Institute of Technology</a> with a growing interest in machine learning research, particularly in computer vision, natural language processing, multimodal learning, and representation learning. I'm fascinated by understanding not just <b>what</b> works, but <b>why</b> it works.<br></br><br></br>
          My work centers around reading and reproducing research, building systems from first principles, and documenting both successes and failures through this open research notebook. I enjoy dissecting papers, questioning assumptions, and exploring the mathematical foundations behind modern AI.<br></br><br></br>
          This website is a living record of that journey, a place where I document projects, experiments, research notes, and the questions that continue to shape my thinking.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <a href="/research" className="border border-cyan bg-cyan px-4 py-2.5 font-mono text-[13px] font-semibold text-bg transition hover:opacity-90">
            Research →
          </a>
          <a href="/about#cv" className="border border-border bg-card px-4 py-2.5 font-mono text-[13px] transition hover:border-cyan">
            CV
          </a>
          <a href={SITE_CONFIG.github} className="border border-border bg-card px-4 py-2.5 font-mono text-[13px] transition hover:border-cyan" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="/contact" className="border border-border bg-card px-4 py-2.5 font-mono text-[13px] transition hover:border-cyan">
            Email
          </a>
        </div>
      </div>

      <TerminalCard
        title="~/now"
        rows={[
          { label: "reading", value: "[paper title — update in app/page.tsx]" },
          { label: "building", value: "[current project]" },
          { label: "asking", value: "[current research question]" },
        ]}
      />

      <div className="mb-16 mt-14">
        <h2 className="mb-5 font-pixel text-lg">This notebook, in numbers</h2>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
          <div className="border border-border bg-card p-5">
            <div className="mb-1 font-mono text-2xl text-cyan">{research.length}</div>
            <div className="text-xs text-text-dim">research threads, live or complete</div>
          </div>
          <div className="border border-border bg-card p-5">
            <div className="mb-1 font-mono text-2xl text-cyan">{reading.length}</div>
            <div className="text-xs text-text-dim">papers and articles logged</div>
          </div>
          <div className="border border-border bg-card p-5">
            <div className="mb-1 font-mono text-2xl text-cyan">{openQuestions.length}</div>
            <div className="text-xs text-text-dim">open research questions</div>
          </div>
        </div>
      </div>
      <Analytics />
      <SpeedInsights />
    </section>
  );
}
