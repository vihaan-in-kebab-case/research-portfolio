interface EmptyStateProps {
  collection: string;
  hint: string;
}

export default function EmptyState({ collection, hint }: EmptyStateProps) {
  return (
    <div className="my-16 border border-dashed border-border p-10 text-center">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-text-faint">
        no entries yet
      </p>
      <p className="mx-auto max-w-md text-sm text-text-dim">{hint}</p>
      <p className="mx-auto mt-4 max-w-md font-mono text-xs text-text-faint">
        Add a .md file to{" "}
        <code className="text-cyan">content/{collection}/</code> and it will
        appear here automatically.
      </p>
    </div>
  );
}
