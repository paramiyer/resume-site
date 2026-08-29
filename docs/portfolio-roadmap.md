# Portfolio Roadmap

Executive AI portfolio programme — positioning, SEO, AI-search/GEO, LinkedIn and
validation. One phase per run; stop after each.

**Target positioning:** Principal AI Architect & Enterprise AI Leader — UAE / GCC.
**Governing rule:** factual integrity. Nothing is asserted that the evidence
inventory does not support.

| Phase | Title | Status |
|---|---|---|
| 0 | Baseline audit & evidence inventory | **Complete — not committed** |
| 1 | Positioning & information architecture | **Complete** |
| 2 | Technical SEO foundation | **Complete** |
| 3 | AI-search / GEO content architecture | Not started |
| 4 | Authority & case studies | Not started |
| 5 | LinkedIn + GitHub + entity alignment | Not started |
| 6 | Measurement, indexing & content system | Not started |
| 7 | Full QA, search validation & hiring-market test | Not started |

---

## Phase 0 — Baseline audit & evidence inventory

**Status:** complete. Findings in `docs/baseline-audit.md`.

### Decisions made

- **Audit only.** No production content changed; `index.html` untouched.
- **Docs written but deliberately not committed**, pending the publication
  decision below.
- Evidence graded four ways — VERIFIED / SELF-REPORTED / AMBIGUOUS / DO NOT USE —
  rather than a binary, because most career claims are self-reported by nature and
  that is legitimate provided they are not dressed as third-party fact.

### Files created

- `docs/baseline-audit.md` — audit + evidence inventory *(uncommitted)*
- `docs/portfolio-roadmap.md` — this file *(uncommitted)*

No files changed. No content changed.

### Technical changes

None.

### Assumptions

- The repository and the deployed site are the evidence base. Resume `.tex`
  sources in `~/Downloads` were cross-referenced for title conflicts but are not
  part of this repo.
- "Principal AI Architect" is a **market position**, not a held title.

### Unresolved questions — blocking

1. **Publish `docs/`?** The Pages workflow uses `path: '.'`, so every committed
   file is served. Verified: `/scripts/build-stats.mjs` returns HTTP 200. An
   internal audit at a guessable URL is a poor look. Options: exclude `docs/`
   from the artifact, keep the docs outside the repo, or accept publication.
   **Nothing is committed until this is decided.**
2. **Title conflict.** Site and resume disagree on three employers' titles, and
   both are public. Which is authoritative? This blocks Phase 1 copy.
3. **Career break** appears on the resume, not the site. One story is needed.
4. **Multi-page architecture.** Phases 3–4 need 12–20 routes; there is no build
   system. Decide in Phase 2: extend the marker/inject generator, or adopt a
   minimal static generator. Zero-dependency should survive either way.
5. **"This Week" placement.** The brief wants activity last; it is currently
   third. Confirm demotion — it was added deliberately two days ago.

### Manual actions required

- Decide (1)–(5) above.
- No external accounts touched. No credentials created or handled.

### Interaction with existing work

- The **parked blog plan** (`~/.claude/plans/…marble.md`) — chatlog MCP server plus
  a weekly local agent writing lesson-style posts — substantially overlaps Phases
  3 and 6. It should be folded in, not run in parallel.
- That plan's **Part 0 (`dev` branch + workflow split)** is a prerequisite for
  safe content work and should be pulled forward into Phase 1 or 2.

---

## Phase 1 — Positioning & information architecture

**Status:** complete.

### Decisions made

- **Hero repositioned** to *Principal AI Architect & Enterprise AI Leader*, with a
  supporting line and an explicit UAE location. Kept as **positioning, never as a
  held title** — no past role is relabelled anywhere on the page.
- **Blocker (1) resolved technically.** The Pages artifact is now staged into
  `_site/` containing only `index.html`, the avatar, `data/` and `scripts/`.
  `docs/` is no longer published. `scripts/` and `data/` stay public on purpose —
  they are the automation the page credits.
- **Blocker (2) resolved from prior instruction.** Site job titles are
  authoritative; you chose these earlier ("keep my existing roles"). The resume is
  the outlier and should be aligned to the site, not the reverse.
- **Blocker (3):** the site carries no dates in Career Journey, so no gap is
  exposed. Omitting all dates is honest; omitting some would not be. Status quo kept.
- **Blocker (5) resolved:** activity demoted from position 3 to *Still Hands-On*
  at position 10, absorbing the language bar, with a framing line explaining why
  it is there.
- **Core Expertise (15-tag wall) deleted**, replaced by five capability domains.
- **Executive proof bar cut from 6 tiles to 4** — career and delivery only.
  Repo counts, capability counts and citations moved out of the hero.

### Information architecture — before → after

| # | Before | After |
|---|---|---|
| 1 | At a Glance | Executive Proof |
| 2 | **This Week (activity)** | **Problems I Solve** *(new)* |
| 3 | Professional Summary | Professional Summary *(rewritten)* |
| 4 | Selected Impact | Selected Impact |
| 5 | AI Capability | **Enterprise Platforms & Products Shipped** *(was 10)* |
| 6 | Projects | AI Capability |
| 7 | Language Mix | Selected Technical Builds |
| 8 | Career Highlights | Career Journey |
| 9 | **Products Shipped** | Technical Landscape *(new)* |
| 10 | Core Expertise | **Still Hands-On** *(activity + language mix)* |
| 11 | Education / Research / Contact | Education / Research / **Let's Talk** *(CTA)* |

### Files changed

- `index.html` — hero, title, meta description, summary, section order, two new
  sections, expertise wall removed, `.hero-line` style added
- `scripts/build-stats.mjs` — proof-bar tiles reduced to 4; two dead product links removed
- `.github/workflows/static.yml` — artifact staged from `_site/`, excluding `docs/`

### Content changes

- New **Problems I Solve** — six CIO-level problems, not technology features
- New **Technical Landscape** — five capability domains replacing the tag cloud
- New **Let's Talk** CTA naming the four conversations sought
- **Still Hands-On** reframed: "I still build. It is why I can challenge an
  architecture or an implementation decision on its merits rather than on authority."

### Defects found and fixed

- **Two dead external links**, both verified 404 with a browser user agent:
  the Ijaba Azure Marketplace listing and the Bosch *Experience Based Repair*
  page. Both sat in the section promoted to position 5. Links removed, products
  retained. **Supply working URLs if they exist.**

### Verification

| Check | Result |
|---|---|
| Build / lint / TypeScript / tests | n/a — none exist in this repo |
| Generators | both exit 0; output idempotent |
| External links | all remaining resolve; no 404s |
| Responsive | no horizontal overflow at 500 / 768 / 1280 px |
| Heading hierarchy | h1 → h2 → h3, no skips |

### Assumptions

- "Principal AI Architect" is market positioning. Any future `Person.jobTitle`
  must reflect roles actually held.
- Site titles beat resume titles wherever they conflict.

### Unresolved questions

1. **Resume still contradicts the site** on three employers' titles. Both are
   public. Aligning the resume is now the open half of that fix.
2. **Dead product links** — replacements, or leave unlinked?
3. **Multi-page architecture** — still a Phase 2 decision. 12–20 routes cannot be
   hand-authored in one file.
4. **"Managed via Claude" pill** sits directly under the value proposition.
   Honest and differentiating, but it is prime real estate.

### Manual actions required

- Decide (1)–(4).
- No external accounts touched; no credentials created or handled.

### Next phase

**Phase 2 — Technical SEO foundation.** Nothing blocks it. Phase 2 must also settle
the multi-page architecture question before Phase 3 can create routes.

---

## Phase 2 — Technical SEO foundation

**Status:** complete. Detail in `docs/technical-seo.md`.

### Decisions made

- **No framework migration.** The multi-page question Phase 3 depends on is
  settled: extend the existing generator into a ~150-line layout/pages builder,
  keeping zero dependencies. Reasoning and revisit triggers in `technical-seo.md`.
- **No `jobTitle`, no `worksFor` in structured data.** The positioning is
  Principal AI Architect; the role held is AI Consultant, and the page says so.
  Asserting the positioning as a title would contradict the page and break the
  integrity rule. `hasOccupation` + `description` carry it accurately instead.
- **`docs/` excluded by absence, not by robots.** The workflow stages an explicit
  file list, so internal docs are never deployed.
- **OG image generated locally, not in CI.** Chrome is unavailable on the runner
  and the card changes only when positioning does.
- **Date-only `dateModified` and `lastmod`** — full timestamps would change every
  run and break generator idempotence, which the weekly job relies on.

### Files created

`robots.txt` · `sitemap.xml` *(generated)* · `site.webmanifest` · `404.html`
· `favicon.svg` · `apple-touch-icon.png` · `og-image.png` · `scripts/og-card.html`
· `docs/technical-seo.md`

### Files changed

- `index.html` — canonical, theme-color, icons, manifest, 11 OpenGraph tags,
  4 Twitter tags, `GEN:JSONLD` block, skip link, `<main id="main">`, avatar
  `width`/`height`/`fetchpriority`
- `scripts/build-stats.mjs` — `SITE`, `ROUTES`, `renderJsonLd()`, `renderSitemap()`
- `.github/workflows/static.yml` — staging list extended to the new assets

### Verification

| Check | Result |
|---|---|
| Generators | exit 0 |
| Idempotence | `index.html` **and** `sitemap.xml` byte-identical on re-run |
| JSON-LD | parses; 3 nodes — Person, ProfilePage, WebSite |
| Integrity check | `jobTitle` absent, `worksFor` absent — asserted by test |
| `sameAs` | 4 profiles, **all HTTP 200** |
| External links | no 404s |
| Heading order | h1 → h2 → h3, no skips |

### Assumptions

- Canonical origin stays `paramiyer.github.io/resume-site/`. A custom domain
  would need `SITE` updated plus a `CNAME` in the staging list.

### Unresolved questions

1. Carried from Phase 1: **resume still contradicts the site** on three titles.
2. Carried: dead product links — replacements or leave unlinked?
3. **`og-image.png` regeneration is manual.** Acceptable now; if positioning
   changes often, script it.
4. **No analytics.** The footer says "no trackers" — a deliberate stance, but it
   means Phase 6 has no first-party engagement data. Search Console and Bing give
   query and impression data without tracking visitors; decide in Phase 6 whether
   that is sufficient.

### Manual actions required

- None yet. Verification tokens are Phase 6; their exact insertion points are
  documented in `technical-seo.md`.

### Next phase

**Phase 3 — AI-search / GEO content architecture.** Unblocked: the builder
decision is made and `ROUTES` already drives the sitemap. Phase 3 should build the
layout/pages builder first, then the first expertise pages.

### Recommended next command

```
Proceed with Phase 3
```
