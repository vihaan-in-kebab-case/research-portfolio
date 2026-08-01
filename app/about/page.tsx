import { SITE_CONFIG } from "@/lib/site-config";

export default function AboutPage() {
  return (
    <section className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.3fr_1fr]">
      <div>
        <div className="mb-6 font-mono text-xs uppercase tracking-widest text-text-faint">
          about
        </div>
        <h2 className="mb-3 font-pixel text-base">What problems interest me</h2>
        <p className="mb-7 text-text-dim">[Placeholder — replace in app/about/page.tsx]</p>
        <h2 className="mb-3 font-pixel text-base">Why I enjoy research</h2>
        <p className="mb-7 text-text-dim">[Placeholder]</p>
        <h2 className="mb-3 font-pixel text-base">My philosophy toward learning</h2>
        <p className="mb-7 text-text-dim">[Placeholder]</p>
        <h2 className="mb-3 font-pixel text-base">Long-term aspirations</h2>
        <p className="text-text-dim">[Placeholder]</p>
      </div>
      <div>
        <h2 className="mb-4 font-pixel text-base">Timeline</h2>
        <div className="space-y-6 border-l border-border pl-6">
          {["[Year]", "[Year]", "[Year]"].map((year, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[27px] top-1 h-2 w-2 border border-rust bg-bg" />
              <div className="font-mono text-[11px] text-rust">{year}</div>
              <div className="mt-0.5 text-[13.5px] text-text-dim">[Milestone]</div>
            </div>
          ))}
        </div>
        <h2 className="mb-3 mt-10 font-pixel text-base">Research areas</h2>
        <div className="flex flex-wrap gap-2">
          {["[area]", "[area]", "[area]"].map((tag, i) => (
            <span key={i} className="border border-border bg-card px-2.5 py-1 font-mono text-[11.5px] text-text-dim">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div id="cv" className="col-span-full mt-4 border-t border-border-soft pt-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-pixel text-lg">CV</h2>
          <div className="flex gap-2.5">
            <a
              href={SITE_CONFIG.githubCvPath}
              className="border border-border bg-card px-3.5 py-2 font-mono text-[12px] transition hover:border-cyan"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a
              href="/cv.pdf"
              className="border border-cyan bg-cyan px-3.5 py-2 font-mono text-[12px] font-semibold text-bg transition hover:opacity-90"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {[
            "Education",
            "Research Experience",
            "Technical Skills",
            "Publications",
            "Awards",
            "Teaching / Mentoring",
          ].map((title) => (
            <div key={title}>
              <h3 className="mb-2 font-mono text-[11px] uppercase tracking-widest text-rust">
                {title}
              </h3>
              <p className="text-sm text-text-dim">
                [Placeholder — add {title.toLowerCase()} entries here, or
                keep the PDF above as the source of truth and just link it.]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
