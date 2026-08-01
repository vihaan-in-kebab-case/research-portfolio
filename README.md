# Research Notebook — scaffold

Structure-only scaffold for the open research notebook site. Six sections
plus Home: About (with CV folded in), Research (Projects folded in via a
`repo` link), Notebook, Reading & Notes (paper-notes folded in), Questions,
Contact.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Markdown/MDX content
via `next-mdx-remote/rsc`, no CMS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## How content works

Every collection page (`/research`, `/notebook`, `/reading`, `/questions`)
reads its entries straight from a folder under `content/`. Drop in a `.md`
file with the right frontmatter (see the `README.md` inside each
`content/<collection>/` folder) and it appears on the site automatically —
no code changes, no CMS. `README.md` files themselves are excluded from
the content list, so they're safe to leave in place as living docs.

Markdown bodies render as real MDX via `next-mdx-remote/rsc` (headings,
lists, bold, links all work) — see `content/reading/deep-homography-
unsupervised.md` for a filled-in example of a deep-dive note.

## Section structure

- **Home** — landing, current-focus terminal card
- **About** — philosophy, timeline, research areas, and a formatted CV
  section (`#cv`) with a GitHub link + PDF download, instead of a
  standalone CV page
- **Research** — paper-style entries; a `repo` frontmatter field links out
  to any artifact the thread produced, replacing a standalone Projects page
- **Notebook** — dated, granular lab-journal entries
- **Reading & Notes** — every paper/article read; add `authors`/`venue`/
  `year` to a `reading/` entry to mark it as a full critical-analysis
  "deep dive" (gets a badge + citation line), otherwise it's a quick log
  row with just a `key_takeaway`
- **Questions** — standing list of open questions, independent of any
  single Research or Notebook entry
- **Contact** — links + a form (not wired to a backend — see note below)

Blog was dropped entirely; long-form writing can live as a particularly
developed Research or Notebook entry instead.

## What's intentionally left for you

- Real copy everywhere marked `[Placeholder]`
- Sample content beyond the one `content/reading/` example
- A resume PDF at `public/cv.pdf`, and the GitHub URL in `app/about/page.tsx`
- Wiring the contact form to an actual handler (Formspree, or a Next.js
  API route + email provider)
