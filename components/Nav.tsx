"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research & Projects" },
  { href: "/notebook", label: "Notebook" },
  { href: "/reading", label: "Reading & Notes" },
  { href: "/questions", label: "Questions" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border-soft bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 font-pixel text-sm tracking-wide">
          <span className="h-2 w-2 animate-pulse bg-cyan" />
          vihaan's research notebook
        </Link>

        <button
          className="border border-border px-3 py-1.5 font-mono text-[11px] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          MENU
        </button>

        <ul
          className={`${open ? "flex" : "hidden"
            } absolute left-0 right-0 top-full flex-col border-b border-border-soft bg-bg-raised p-2 md:static md:flex md:flex-row md:border-none md:bg-transparent md:p-0`}
        >
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-sm px-3 py-2 font-pixel text-[11px] tracking-wide transition-colors ${active
                    ? "bg-cyan text-bg"
                    : "text-text-dim hover:bg-card-2 hover:text-text"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
