"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

interface ReadingEntry {
  slug: string;
  title?: string;
  difficulty?: string;
  domain?: string;
  status?: string;
  key_takeaway?: string;
  authors?: string;
  venue?: string;
  year?: string;
  [key: string]: any;
}

export default function ReadingListClient({ entries }: { entries: ReadingEntry[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return entries.filter((e) =>
      [e.title, e.domain, e.status].join(" ").toLowerCase().includes(q)
    );
  }, [entries, query]);

  return (
    <div>
      <input
        value={query}
        onChange={(ev) => setQuery(ev.target.value)}
        placeholder="Search by title, domain, or status..."
        className="mb-6 w-full border border-border bg-card px-4 py-2.5 font-mono text-sm text-text placeholder:text-text-faint focus:border-cyan focus:outline-none"
      />
      <div className="space-y-2">
        {filtered.map((e) => {
          const isDeepDive = Boolean(e.authors || e.venue);
          return (
            <Link
              key={e.slug}
              href={`/reading/${e.slug}`}
              className="flex flex-col gap-1 border border-border bg-card p-4 transition hover:border-cyan sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-pixel text-sm">{e.title ?? e.slug}</span>
                  {isDeepDive && (
                    <span className="border border-rust px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-rust">
                      deep dive
                    </span>
                  )}
                </div>
                <div className="mt-1 text-xs text-text-dim">{e.key_takeaway ?? ""}</div>
              </div>
              <div className="flex gap-2 font-mono text-[10px] text-text-faint">
                <span className="border border-border px-2 py-1">{e.domain ?? "—"}</span>
                <span className="border border-border px-2 py-1">{e.difficulty ?? "—"}</span>
                <span className="border border-border px-2 py-1">{e.status ?? "—"}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
