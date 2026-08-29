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
| 3 | AI-search / GEO content architecture | **Complete** |
| 4 | Authority & case studies | **Complete** |
| 5 | LinkedIn + GitHub + entity alignment | **Complete** |
| 6 | Measurement, indexing & content system | **Complete** |
| 7 | Full QA, search validation & hiring-market test | **Complete** |

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

---

## Phase 3 — AI-search / GEO content architecture

**Status:** complete.

### Decisions made

- **Four routes, not twelve.** The brief says quality over volume and to create
  only routes that can carry genuinely useful content. Three expertise pages plus
  an About page are what the current evidence supports without padding. The rest
  is backlog, below.
- **Builder built as decided in Phase 2** — `scripts/build-pages.mjs`, ~150 lines,
  zero dependencies. `index.html` is deliberately *not* rendered through it: it
  stays hand-authored with GEN markers, so human prose is never at a template's mercy.
- **CSS extracted to `styles.css`**, shared across all pages and cached, replacing
  the inline block.
- **Content is patterns, never disclosures.** No employer, client, system or ticket
  is named anywhere. Every lesson is stated as a reusable pattern.
- **Retrieval-first format**: each page opens with its question and a direct answer
  block, headings are descriptive claims, and every section carries its own point so
  a fragment lifted out of context still stands up.

### Files created

`content/pages.mjs` · `scripts/build-pages.mjs` · `styles.css` ·
`enterprise-ai-architecture/` · `enterprise-rag/` · `agentic-ai/` · `about/`

### Files changed

- `index.html` — inline `<style>` replaced by `styles.css`; primary nav added
- `scripts/build-stats.mjs` — `ROUTES` extended, so the sitemap now lists 5 URLs
- `.github/workflows/static.yml` — runs `build-pages.mjs`, stages the new routes
- `styles.css` — nav, article, answer-block, table and long-form heading styles

### Content written

| Route | Question it answers |
|---|---|
| `/enterprise-ai-architecture/` | What does enterprise AI architecture consist of, and why do pilots stall? |
| `/enterprise-rag/` | What changes when RAG has to survive a risk review? |
| `/agentic-ai/` | When is an agent the right shape, and what does the platform need? |
| `/about/` | Entity consolidation — who, what level, what evidence, where |

Each carries a direct-answer block, a tradeoff table, a "when not to" section and
an explicit conclusion.

### Defects found and fixed during the phase

- **About page was typed `TechArticle`** — wrong schema for an about page.
  Now `AboutPage` via a per-page `type`.
- **`<title>` read "About Parameshwaran Iyer | Parameshwaran Iyer"** — added a
  `titleTag` override.
- **Article typography** — the homepage `h2` is a small-caps section label and read
  as shouting in prose; overridden to sentence case for `.article`.

### Verification

| Check | Result |
|---|---|
| Generators | `build-pages.mjs` and `build-stats.mjs` exit 0 |
| Idempotence | pages and `index.html` byte-identical on re-run |
| Routes | all 5 plus `/404.html` return 200 |
| Relative links from a subpage | `../styles.css`, `../favicon.svg`, sibling routes all 200 |
| Per-page SEO | unique title, description and canonical; exactly one `h1` each |
| Structured data | TechArticle ×3 + AboutPage, each with BreadcrumbList, all authored by `#person` |
| Sitemap | 5 URLs, generated from `ROUTES` |

### Content backlog — ranked, not yet written

1. **Databricks vs PostgreSQL as the serving layer for AI applications** — strong
   first-hand material, high technical-authority value
2. **Why enterprise APIs should not query the lakehouse directly**
3. **From GenAI pilot to production platform** — the commercial-intent piece
4. **Scaling geospatial intelligence across millions of H3 cells** — differentiated,
   backed by a real build
5. **AI governance without killing delivery speed**
6. **MCP vs conventional APIs in enterprise integration** — partly covered on the
   agentic page; deserves its own treatment
7. **AI transformation in the GCC** — commercially the highest-intent page, and the
   one most at risk of becoming filler. Only worth writing with specifics

### Unresolved questions

1. Carried: **resume still contradicts the site** on three titles.
2. Carried: dead product links — replacements or leave unlinked?
3. **No `/insights` index yet.** Correct for four pages; needed once the backlog
   above is half-written.
4. **Homepage does not link into the expertise pages** beyond the nav. Deep
   contextual links from Problems I Solve and the capability matrix would be
   stronger — a Phase 4 job alongside case studies.

### Manual actions required

- Decide (1) and (2). Nothing blocks Phase 4.

### Next phase

**Phase 4 — Authority and case studies.** Should also add the contextual
homepage → expertise links noted above.

---

## Phase 4 — Authority and case studies

**Status:** complete.

### Decisions made

- **Four case studies plus an index**, ordered by enterprise weight rather than
  recency. Prioritised per the brief: production GenAI, agentic platforms,
  large-scale geospatial, MCP.
- **Two tiers of disclosure.** Client engagements are anonymised to the smallest
  true description ("a leading UAE bank", "a productised decision-intelligence
  platform") and described at pattern level — the same level already published on
  the expertise pages. **My own projects are described in full**, because they are
  mine to describe. Verified: **zero client identifiers across all nine generated
  pages.**
- **Template sections included only where the fact is known.** Budgets, engagement
  headcount and user numbers are omitted rather than invented — the brief's rule,
  and the Phase 0 inventory has no evidence for them.
- **One architecture diagram, not four.** The coverage-decision flow is genuinely
  hard to convey in prose — three outcomes, two of which write back — so it is
  drawn. Inline SVG, themed, horizontally scrollable, with a full `aria-label`
  describing the flow for screen readers. Phase 0 flagged "no architecture
  artefact" as a credibility gap; this closes part of it.
- **Builder made depth-aware.** `upTo()` computes relative depth from the slug, so
  nested routes resolve assets and siblings correctly and the site stays portable
  to a different base path. Breadcrumbs gained an optional middle level.

### Files created

`content/case-studies.mjs` · `case-studies/` index · four case-study routes

### Files changed

- `scripts/build-pages.mjs` — depth-aware paths, three-level breadcrumbs, renders case studies
- `scripts/build-stats.mjs` — `ROUTES` now 10; sitemap follows
- `content/pages.mjs` — Case Studies added to nav
- `index.html` — **contextual deep links** from Problems I Solve and the capability
  matrix into the expertise pages and case studies, closing the Phase 3 gap where
  the homepage only linked via nav
- `styles.css` — diagram styles
- `.github/workflows/static.yml` — stages the nested routes

### Case studies

| Route | Disclosure | Priority evidence |
|---|---|---|
| `enterprise-signal-intelligence` | anonymised client | production GenAI, RAG, governance, human sign-off |
| `agentic-data-reuse` | anonymised client | agentic platform, reuse, tenant isolation, **diagram** |
| `geospatial-site-suitability` | own project, full detail | H3 at continental scale, ~29.7M rows, CI discipline |
| `mcp-product` | own project, full detail | MCP, database-generated API, RLS authorisation |

### Verification

| Check | Result |
|---|---|
| Routes | all 10 return 200 |
| Nested resolution | `../../styles.css`, `../../favicon.svg`, sibling and grandparent links all 200 |
| Breadcrumbs | 3 levels on nested pages, correct URLs |
| Confidentiality | zero client identifiers across all generated pages |
| Diagram a11y | full descriptive `aria-label`; scrolls rather than squashing |
| Idempotence | case studies byte-identical on re-run |
| Sitemap | 10 URLs, generated |

### Deliberate omissions

- **No fabricated scale.** User counts, transaction volumes and revenue figures do
  not appear, because no evidence supports them.
- **The MCP case study states its own weakness** — thin test coverage against 20
  RLS policies — rather than letting the build imply rigour it has not earned.
  Honest, and more credible to a reviewing architect than silence.

### Unresolved questions

1. Carried: **resume still contradicts the site** on three job titles.
2. Carried: two dead product links — replacements or leave unlinked?
3. **Should the two client case studies name the sectors more precisely?**
   "A leading UAE bank" is safe. Anything sharper needs the client's consent.
4. **No `/insights` route yet** — correct at this size; needed once the Phase 3
   content backlog is half-written.

### Manual actions required

- Decide (1)–(3). Nothing blocks Phase 5.

### Next phase

**Phase 5 — LinkedIn, GitHub and entity alignment.** Portfolio-side only; no
external account will be modified.

---

## Phase 5 — LinkedIn, GitHub and entity alignment

**Status:** complete. No external account was modified.

### Decisions made

- **The `jobTitle` rule travels.** The portfolio asserts no `jobTitle`; LinkedIn's
  title fields must likewise show roles actually held, with the positioning confined
  to headline and About, which are capability claims rather than employment records.
- **Semantic consistency over identical strings** — one recognisable identity per
  surface, worded to each surface's conventions.
- **Skills recommendation deliberately demotes Python, ML, deep learning and CV.**
  All true, but they pull classification toward Data Scientist, which is the level
  down the whole programme is correcting.

### Files created

`docs/linkedin-strategy.md` — 3 headline options, About text, experience-wording
rules, 5 Featured assets, ranked skills, 10 mapped post concepts
`docs/entity-strategy.md` — canonical identity, surface-by-surface state, three
named entity risks, GitHub profile and README recommendations, priority actions

### Portfolio-side change

- `scripts/build-pages.mjs` — **the byline now carries the positioning**: "By
  Parameshwaran Iyer, Principal AI Architect & Enterprise AI Leader". Previously a
  page retrieved standalone by an AI system had an author with no seniority signal.
  Identity now appears on **9/9 generated pages**, and the byline links to `/about/`.

### Verification

| Check | Result |
|---|---|
| Author entity | a **single** `@id` across every page — one Person, not several |
| `jobTitle` assertion | absent everywhere — rule holds |
| Identity on generated pages | 9/9 after the byline fix (was 2/9) |
| Generators | exit 0, idempotent |

### Entity risks recorded

1. **GitHub is an empty node.** Name, bio, company, location, website all unset; no
   profile README; 0 followers; visible repos are mostly notebooks while the four
   strongest builds are private. The portfolio asserts `sameAs` → GitHub, so the
   site's strongest outbound signal currently points at its weakest evidence.
   Setting the **Website** field alone makes the link bidirectional, which is the
   largest single entity gain available.
2. **Three surfaces disagree on job titles** (ZainTECH, ADQ/Next50, Bosch).
   Carried since Phase 1. LinkedIn is the third surface and decides which of the two
   published documents looks like the error. **Should not reach Phase 7 open.**
3. **Name form** varies between "Parameshwaran S Iyer" and "Parameshwaran Iyer".
   Handled via `name` / `alternateName`; keep the pattern rather than eliminating one.

### Manual actions required — priority order

1. GitHub profile fields, especially **Website** *(≈5 minutes, largest gain)*
2. Resolve the title conflict across resume and LinkedIn
3. LinkedIn headline and About
4. GitHub profile README — new repo named `paramiyer`
5. Pinned repositories — six named in `entity-strategy.md`
6. LinkedIn Featured — five assets

### Next phase

**Phase 6 — Measurement, indexing and content system.** Note the open question
from Phase 2: the site has no analytics by design ("no trackers" in the footer), so
Phase 6 must decide whether Search Console and Bing query data alone are sufficient.

---

## Phase 6 — Measurement, indexing and content system

**Status:** complete. Detail in `docs/search-strategy.md`.

### Decisions made

- **Analytics: keep the no-tracker stance** — the Phase 2 open question, now closed.
  Search Console and Bing answer every question this programme actually asks (which
  queries surface the site, which pages get impressions, whether intent matches
  positioning, branded vs non-branded) **without observing visitors at all**. What is
  lost is on-page engagement, which is not the success metric. If engagement data is
  ever wanted, use a cookieless option — not Google Analytics, which would contradict
  the footer and add a third-party request to every page.
- **No fabricated tokens or keys.** GSC and Bing verification points are documented
  with exact insertion locations. IndexNow is documented but **deliberately not
  generated** — it is a one-command, self-issued key that should be owned by Param.
- **Two clusters left deliberately orphaned.** Writing them now would produce the
  filler the brief prohibits.
- **Ranking is not promised anywhere.** The document opens by stating why: a
  two-week-old site with no backlinks on a shared-domain project path.

### Files created

`docs/search-strategy.md` — clusters, orphans, backlog, indexing steps, analytics
decision, custom-domain case, measurement framework
`content/_template.mjs` — reusable page template with a pre-publication
confidentiality checklist. Verified it is **not** picked up as a route

### Query cluster coverage

| Cluster | Target | State |
|---|---|---|
| A1 principal AI architect UAE | `/about/` | weak — reads as a bio, not an answer |
| A2 AI transformation GCC | — | **orphaned by choice** |
| A3 title variants | — | **orphaned by choice** — belongs on LinkedIn |
| B1 enterprise RAG | `/enterprise-rag/` | strong |
| B2 agentic AI | `/agentic-ai/` | strong |
| B3 MCP architecture | `/agentic-ai/` | moderate — deserves its own page |
| B4 lakehouse vs serving layer | — | **orphaned; evidence exists — write it** |
| B5 H3 geospatial | case study | strong but narrow |
| B6 AI governance | `/enterprise-ai-architecture/` | moderate — buried in a subsection |

### The highest-leverage recommendation

**A custom domain.** `paramiyer.github.io/resume-site/` dilutes authority across a
shared domain and reads as a side project rather than a professional presence — a
mismatch between the positioning and its container. Roughly $10–50/year.

Migration is already designed for: everything absolute derives from the `SITE`
constant, so changing it plus adding a `CNAME` moves metadata, structured data and
the sitemap together. **Do it before requesting indexing** — GitHub Pages cannot
serve the redirects a later migration would need.

### Verification

| Check | Result |
|---|---|
| Template excluded from routing | yes — page count unchanged at 9 |
| Cluster → page mapping | 6 mapped, 3 orphaned and stated |
| Generators | exit 0, idempotent |
| Third-party requests | still zero |

### Unresolved questions

1. Carried since Phase 1: **job-title conflict** across site, resume and LinkedIn.
   This is the last integrity issue outstanding and should close in Phase 7.
2. Carried: two dead product links.
3. **Custom domain** — decision needed before indexing is requested.

### Manual actions required

1. Buy and configure a custom domain *(recommended before step 2)*
2. Google Search Console — verify, submit sitemap, request indexing
3. Bing Webmaster — import from GSC
4. IndexNow key — optional, low value at this size
5. All Phase 5 GitHub and LinkedIn actions

### Next phase

**Phase 7 — Full QA, search validation and hiring-market test.** Adversarial: the
brief asks for genuine weakness-hunting and explicitly forbids awarding 10/10 by
default.

---

## Phase 7 — Full QA, search validation and hiring-market test

**Status:** complete. Scores and manual actions in `docs/final-audit.md`.

### Added

- **`scripts/validate.mjs`** — the repo had no tests at all. 16 structural
  invariants: unique metadata, canonical correctness, one `h1`, JSON-LD parsing,
  **no `jobTitle`/`worksFor` assertion**, internal-link resolution, client-identifier
  scan, product-count consistency. **Now runs in CI and gates the deploy.**

### Defects found and fixed

1. **Light-mode contrast failed WCAG AA.** `--dim` on background measured 4.35:1
   against a 4.5 requirement, affecting bylines, breadcrumbs, footer and language
   key. Phase 1 had claimed "real contrast ratios" without measuring. Fixed to
   4.66:1; all pairs now pass in both themes.
2. **Proof below the fold at 1280×800.** A 10-second recruiter scan saw positioning
   and no evidence. Hero tightened ~80px; all four tiles now clear the fold.

### Results

16/16 checks · 160 internal links, 0 broken · no overflow 500–1600px · homepage
115 KB, case study 24 KB · zero third-party requests · generators idempotent.

### Scores — 8 of 17 below 9, and why that is the finding

Highest: AI-search readiness, technical and hands-on credibility, accessibility,
mobile, performance, maintainability (**9**).
Lowest: **GitHub alignment 4**, **LinkedIn alignment 5**, **entity consistency 6**.

Of the eight dimensions below 9, **five are blocked on external accounts** and two
on evidence that does not exist and must not be invented. Only content authority
improves with more work in this repository.

**The site-side programme is substantially complete; the remaining gains are
external.** Five minutes on the GitHub profile moves the lowest score from 4 to 8.

### Unresolved — carried to manual actions

1. **Job-title conflict** across site, resume and LinkedIn — open since Phase 1,
   now the last integrity issue.
2. Two dead product links.
3. Custom domain — decide **before** requesting indexing.

### Programme status

All seven phases complete. Ten routes live, self-updating weekly, validated in CI.

### Recommended next command

Nothing further is blocked. The highest-value next step is not code — it is the
manual action list in `docs/final-audit.md`, starting with the GitHub profile.
When ready to write, the first five pieces are specified there.
