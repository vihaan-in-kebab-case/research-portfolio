interface TerminalCardProps {
  title: string;
  rows: { label: string; value: React.ReactNode }[];
}

export default function TerminalCard({ title, rows }: TerminalCardProps) {
  return (
    <div className="my-2 rounded-md border border-border bg-card overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-border-soft bg-bg-raised px-3 py-2">
        <span className="h-1.5 w-1.5 bg-rust" />
        <span className="h-1.5 w-1.5 bg-border" />
        <span className="h-1.5 w-1.5 bg-border" />
        <span className="ml-1.5 font-mono text-[11px] tracking-wide text-text-faint">
          {title}
        </span>
      </div>
      <div className="space-y-2.5 p-5 font-mono text-[13px]">
        {rows.map((row, i) => (
          <div key={i} className="flex gap-2.5">
            <span className="whitespace-nowrap text-text-faint">{row.label}</span>
            <span className="text-text">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}