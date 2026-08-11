"use client";

import { useState } from "react";

interface Props {
    title: string;
    rows: { label: string; value: React.ReactNode }[];
    children: React.ReactNode;
}

export default function ExpandableNotebookCard({ title, rows, children }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="my-2 rounded-md border border-border bg-card overflow-hidden transition hover:border-cyan">
            <button
                onClick={() => setOpen((v) => !v)}
                className="flex w-full items-center gap-1.5 border-b border-border-soft bg-bg-raised px-3 py-2 text-left"
            >
                <span className="h-1.5 w-1.5 bg-rust" />
                <span className="h-1.5 w-1.5 bg-border" />
                <span className="h-1.5 w-1.5 bg-border" />
                <span className="ml-1.5 font-mono text-[11px] tracking-wide text-text-faint">
                    {title}
                </span>
                <span className="ml-auto font-mono text-[11px] text-text-faint">
                    {open ? "-" : "+"}
                </span>
            </button>

            <div className="space-y-2.5 p-5 font-mono text-[13px]">
                {rows.map((row, i) => (
                    <div key={i} className="flex gap-2.5">
                        <span className="whitespace-nowrap text-text-faint">{row.label}</span>
                        <span className="text-text">{row.value}</span>
                    </div>
                ))}
            </div>

            <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
                <div className="overflow-hidden">
                    <div className="prose prose-invert max-w-none border-t border-border-soft px-5 py-5 prose-headings:font-mono prose-headings:text-[11px] prose-headings:uppercase prose-headings:tracking-widest prose-headings:text-rust prose-p:text-text-dim prose-li:text-text-dim prose-strong:text-text prose-a:text-cyan">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}