const TIMELINE = [
  {
    year: "2024",
    milestone:
      "Started B.Tech in Computer Science at Manipal Institute of Technology",
  },
  {
    year: "Jul 2026",
    milestone: "Commenced Honours degree program in Computer Science",
  },
  {
    year: "Sep 2026",
    milestone:
      "Honours research kickoff: SFGV-RAG (adaptive dynamic graphs & faithfulness verification)",
  },
  {
    year: "Oct 2026",
    milestone:
      "Neural network calibration study: reproducing Guo et al. on ECE & temperature scaling",
  },
  {
    year: "Oct 2026",
    milestone:
      "Document rectification pipeline: first-principles classical geometry & learned homography ablations",
  },
  {
    year: "Nov 2026",
    milestone:
      "Indic tokenizer analysis: measuring vocabulary fragmentation & fertility across Indian languages",
  },
  {
    year: "Winter 2026",
    milestone: "Planned winter research internship",
  },
  {
    year: "Summer 2027",
    milestone: "Planned corporate / research internship",
  },
  {
    year: "Winter 2027",
    milestone: "Planned winter internship",
  },
  {
    year: "Jun/Jul 2028",
    milestone:
      "Expected graduation (B.Tech in Computer Science) from Manipal Institute of Technology",
  },
];


const RESEARCH_AREAS = [
  "geometric computer vision",
  "homography estimation",
  "graph rag & dynamic kgs",
  "faithfulness verification",
  "model calibration & ece",
  "tokenization & indic nlp",
  "representation learning",
  "first-principles ablations",
];

export default function AboutPage() {
  return (
    <section className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.3fr_1fr]">
      <div>
        <div className="mb-6 font-mono text-xs uppercase tracking-widest text-text-faint">
          vihaan.env
        </div>
        <h2 className="mb-3 font-pixel text-base">What problems interest me</h2>
        <p className="mb-7 text-text-dim">
          I am drawn to the tension between empirical deep learning and
          first-principles mechanics including what happens when
          foundational assumptions quietly break. Modern AI often functions as an
          intricate black box where high benchmark numbers mask fragile failure
          surfaces: neural networks that exhibit severe overconfidence under
          distribution shift, RAG pipelines that hallucinate under retrieval-state
          lock-in, learned vision models that trade feature-matching pitfalls for
          fragile brightness constancy, and tokenizers that aggressively fragment
          low-resource and Indic scripts. I am interested in deconstructing these
          failure modes, bridging classical geometric and algorithmic guarantees
          with learned representations, and designing verifiable systems where
          every component&apos;s contribution is grounded and understood.
        </p>
        <h2 className="mb-3 font-pixel text-base">Why I enjoy research</h2>
        <p className="mb-7 text-text-dim">
          For as long as I can remember, I have been curious about how things
          actually work. I used to do this by stripping down devices, both mechanical and
          electronic, to the bare-bones level, inspecting each individual part,
          and figuring out how they interact to make the complete working system.
          I have also always been obsessed with fixing things that are broken
          instead of replacing them, a mindset that crystallized when I built my
          first PC with my dad at fifteen. Research gives me that exact same
          investigative framework, but with the promise of making actual impact
          and contributing to the development of cutting-edge technology.
        </p>
        <h2 className="mb-3 font-pixel text-base">My philosophy toward learning</h2>
        <p className="mb-7 text-text-dim">
          With every project, every paper read, and every manuscript drafted, I aim
          to walk away better than I was before it. My philosophy is to go into the
          depths of everything and truly understand what all the individual
          components do. This naturally inclines me to be obsessed with ablation studies and
          insist on implementing systems from scratch. That might seem
          counterintuitive to the &ldquo;standing on the shoulders of
          giants&rdquo; approach, but as a beginner researcher, building
          everything from first principles establishes a grounding that pays off
          dividends in the long run. When I am where I want to be, I can revert to
          being efficient instead of insane.
        </p>
        <h2 className="mb-3 font-pixel text-base">Long-term aspirations</h2>
        <p className="text-text-dim">
          I want to use technology to give back to society by creating
          meaningful tools that simplify everyday life, contribute positively to
          the environment, and solve long-standing challenges through principled
          engineering. Above all, I want to spend my career pursuing questions
          that excite me, sustaining my genuine passion and lifestyle while doing
          work that leaves things better than I found them.
        </p>
      </div>
      <div>
        <h2 className="mb-4 font-pixel text-base">Timeline</h2>
        <div className="space-y-6 border-l border-border pl-6">
          {TIMELINE.map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[27px] top-1 h-2 w-2 border border-rust bg-bg" />
              <div className="font-mono text-[11px] text-rust">{item.year}</div>
              <div className="mt-0.5 text-[13.5px] text-text-dim">{item.milestone}</div>
            </div>
          ))}
        </div>
        <h2 className="mb-3 mt-10 font-pixel text-base">Research areas</h2>
        <div className="flex flex-wrap gap-2">
          {RESEARCH_AREAS.map((tag, i) => (
            <span
              key={i}
              className="border border-border bg-card px-2.5 py-1 font-mono text-[11.5px] text-text-dim"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
