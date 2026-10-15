interface EmptyStateProps {
  collection: string;
  hint?: string;
}

export default function EmptyState({ collection, hint }: EmptyStateProps) {
  return (
    <div className="my-16 border border-dashed border-border p-10 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-text-faint">
        no entries yet
      </p>
      {/* 
        Hint is kept as a code comment for reference when creating entries; not displayed on the website:
        {hint}
      */}
    </div>
  );
}

