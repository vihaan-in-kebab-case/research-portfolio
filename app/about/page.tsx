export default function AboutPage() {
  return (
    <section className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.3fr_1fr]">
      <div>
        <div className="mb-6 font-mono text-xs uppercase tracking-widest text-text-faint">
          vihaan.env
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
    </section>
  );
}
