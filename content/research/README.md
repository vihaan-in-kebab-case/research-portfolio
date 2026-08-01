Add one .md file per research thread. Frontmatter fields used by app/research:

---
title: ""
status: ""        # e.g. ongoing, paused, complete
date: ""           # start date, used for sorting
domain: ""
repo: ""           # optional — link to a project/repo this thread produced
---

Body: free-form Markdown. Suggested headings — Motivation, Research Question,
Background, Literature, Methodology, Experiments, Results, Failure Analysis,
Future Work, Paper / Poster.

Projects are not a separate section: if a thread produced a working
artifact (code, a tool, a demo), link it with the `repo` field above and
mention it under a "Repository" or "What I built" heading in the body —
technical approach, engineering decisions, and lessons learned belong
here, not on a standalone page.
