# Final Audit — Phase 7

**Date:** 2026-08-29 · 10 routes · 16 automated checks · zero third-party requests

Scored adversarially. Nothing is awarded 10, and the two lowest scores are for work
I completed the documentation for but **cannot execute**, because it lives on
external accounts.

---

## Automated checks

`scripts/validate.mjs` is new in this phase — the repo previously had no tests at
all. It asserts invariants that would ship real defects:

| Check | Result |
|---|---|
| Every sitemap URL has a file | 10/10 |
| Unique `<title>` per page | pass |
| Unique meta description per page | pass |
| Canonical matches the route | pass |
| Exactly one `<h1>` per page | pass |
| `og:image` present | pass |
| JSON-LD parses | pass |
| **No `jobTitle` / `worksFor` asserted** | pass |
| Internal links resolve | **160 links, 0 broken** |
| No client identifiers on generated pages | pass |
| Product count consistent (groups vs tile) | 7 = 7 |
| Activity snapshot present and non-zero | 133 commits |

**16 checks, 0 failures.** Generators idempotent. Build / lint / TypeScript remain
n/a — this repo deliberately has no npm toolchain.

## Defects found and fixed in this phase

1. **Light-mode contrast failed WCAG AA.** `--dim` on the page background measured
   **4.35:1**, below the 4.5 required for normal text — affecting bylines,
   breadcrumbs, the footer and the language key. I had claimed "real contrast
   ratios" in Phase 1 without measuring. Darkened to `#67717d` → **4.66:1**. Every
   foreground/background pair now passes AA in both themes.
2. **Proof was below the fold at 1280×800.** A 10-second recruiter scan saw the
   positioning and no evidence. Hero tightened by ~80px (padding, avatar 132→108px,
   first-section margin). All four tiles now clear the fold on a standard laptop.

---

## Scores

| # | Dimension | Score |
|---|---|---|
| 1 | Executive positioning | **9** |
| 2 | Recruiter clarity | **9** |
| 3 | Role classification | **8** |
| 4 | Enterprise authority | **8** |
| 5 | Technical credibility | **9** |
| 6 | Hands-on credibility | **9** |
| 7 | Case-study strength | **8** |
| 8 | SEO readiness | **8** |
| 9 | AI-search readiness | **9** |
| 10 | Entity consistency | **6** |
| 11 | LinkedIn alignment | **5** |
| 12 | GitHub alignment | **4** |
| 13 | Content authority | **7** |
| 14 | Accessibility | **9** |
| 15 | Mobile UX | **9** |
| 16 | Performance | **9** |
| 17 | Maintainability | **9** |

### Everything below 9, explained

**3 · Role classification — 8.** The site names exactly one positioning, on purpose.
A recruiter searching "Head of AI UAE" or "Director of AI Engineering" will not
match it. This is the correct trade — chasing title variants is the keyword-soup
failure the programme exists to avoid — but it is a real limitation, and the
mitigation lives on LinkedIn, which is not done. *Affected:* `/about/`, homepage hero.

**4 · Enterprise authority — 8.** Outcomes and case studies are strong, but there
are **no scale descriptors** — users, transactions, data volumes — for the client
platforms, and no stakeholder or operating-model narrative. Not fixable: the
evidence inventory has none, and inventing them is prohibited. *Affected:*
`/case-studies/enterprise-signal-intelligence/`, `/case-studies/agentic-data-reuse/`.

**7 · Case-study strength — 8.** Structure is right and the lessons are real. But
the two client studies end at "in production" with **no outcome number**, because
none can be disclosed. A sceptical reader can verify nothing in them. The two own
projects carry full detail and carry the section. *Affected:* the two client studies.

**8 · SEO readiness — 8.** Technically complete: canonical, OG, Twitter, JSON-LD,
sitemap, robots, 404, unique metadata. But technically ready is not competitive —
the site is two weeks old, has no backlinks, and sits on a **project path of a
shared domain**. The single highest-leverage remaining change is a custom domain.
*Affected:* all routes.

**10 · Entity consistency — 6.** Two unresolved breaks. The portfolio asserts
`sameAs` → GitHub, and **GitHub is an empty node** — no name, bio, location or
website. And the **resume still contradicts the site on three job titles**
(ZainTECH, ADQ/Next50, Bosch), both documents public. On-site consistency is
excellent — one Person `@id`, identity on 9/9 generated pages, no `jobTitle`
assertion — but an entity is only as consistent as its weakest public surface.
**Both fixes are external. I cannot make them.**

**11 · LinkedIn alignment — 5.** Fully documented in `linkedin-strategy.md`:
headlines, About, experience rules, Featured, skills, ten mapped post concepts.
**None of it is applied.** I cannot see or edit the profile. Scoring this highly
because the plan is good would be marking my own homework.

**12 · GitHub alignment — 4.** The lowest score, and deserved. Profile has no name,
bio, company, location or website; no profile README; 0 followers; the four
strongest builds are private, so a visitor sees notebooks. The site's strongest
outbound signal points at its weakest evidence. Documented in `entity-strategy.md`;
**five minutes of manual work would move this to 8.**

**13 · Content authority — 7.** Seven substantive pages written from first-hand
delivery is a real start, but authority is volume × time × citation, and this is
day one. Three of nine query clusters are orphaned, one of them (`lakehouse vs
serving layer`) with strong evidence already available. *Fix:* the ranked backlog
in `search-strategy.md`.

### Why several scores cannot be raised by more site work

Eight dimensions sit below 9. Of those, **five (3, 8, 10, 11, 12) are blocked on
actions outside this repository**, and two (4, 7) are blocked on evidence that does
not exist and must not be invented. Only **13** improves with more of the work done
here, and it improves with time as much as effort.

**The site-side programme is substantially complete. The remaining gains are
external.** That is the honest headline of this audit.

---

## Search and retrieval tests

**Google-style intent** — every priority cluster has a target page or is explicitly
orphaned; see `search-strategy.md`. No filler page was created to manufacture
coverage.

**AI retrieval** — each expertise page and case study opens with its question and a
bolded direct answer, uses descriptive headings that name their topic, and carries
author, positioning and date in the byline. A section lifted out of context retains
its claim and its attribution. This is the strongest dimension of the build.

**Entity** — a machine reading the site alone can infer: *Parameshwaran Iyer is a
Principal AI Architect and Enterprise AI Leader, specialising in enterprise AI
architecture, GenAI platforms, agentic AI and RAG, operating in the UAE and GCC,
with delivery in banking, aviation, telecom and manufacturing, and still hands-on.*
It **cannot** confirm that from GitHub, which is the break.

**Content quality** — every page carries at least one architecture decision, a
tradeoff table, a first-hand lesson and a "when not to" section. Nothing was written
primarily for a search engine.

---

## Manual action list — these require you

Nothing below was performed. Ordered by value per minute.

| # | Action | Effort | Moves |
|---|---|---|---|
| ~~1~~ | ~~**GitHub profile**: name, bio, location, **Website**~~ — **DONE 2026-08-29**, verified via api.github.com | — | 12: 4 → 8 |
| 2 | **Remove duplicate LinkedIn entries** (Next50 ×2, Bosch ×4) — see `linkedin-strategy.md` | 15 min | 10 |
| 3 | **Align the SITE to LinkedIn+resume** on ZainTECH and Next50 titles; decide Bosch | 30 min | 10: 6 → 9 |
| 3 | **LinkedIn headline + About** (`linkedin-strategy.md`) | 20 min | 11: 5 → 8 |
| 4 | **Custom domain** + `CNAME`, update `SITE` | 1 hr | 8: 8 → 9 |
| 5 | **Google Search Console** — verify, submit sitemap | 15 min | indexing |
| 6 | **Bing Webmaster** — import from GSC | 5 min | indexing |
| 7 | GitHub profile README (repo named `paramiyer`) | 15 min | 12 |
| 8 | Pin six repositories (`entity-strategy.md`) | 5 min | 12 |
| 9 | LinkedIn Featured — five assets | 10 min | 11 |
| 10 | Replace or drop the two dead product links | — | integrity |

**Do 4 before 5.** GitHub Pages cannot serve redirects, so migrating a domain after
indexing loses the accrued signal.

---

## First five pieces to publish

Chosen where enterprise relevance, search demand, AI-retrieval value, LinkedIn
distribution and your differentiated evidence overlap.

### 1. Databricks vs PostgreSQL for serving enterprise AI applications
**Audience:** data architects, platform engineers · **Intent:** architecture decision
**Thesis:** the lakehouse is where data is refined, not where an interactive
application should read from; the serving layer is a separate decision with separate
constraints.
**Supports:** fills the orphaned B4 cluster · **LinkedIn:** "Your AI app should not
query the lakehouse. Here is what to put in front of it." · **CTA:** architecture page

### 2. MCP vs conventional APIs in enterprise integration
**Audience:** engineers, architects evaluating MCP · **Intent:** informational, low competition
**Thesis:** MCP changes who the consumer is, not what the contract needs to be —
auth, versioning and rate limits remain yours to solve.
**Supports:** `/case-studies/mcp-product/` · **LinkedIn:** "We built the useful 5% of
Jira in an evening. It was not the AI." · **CTA:** case study

### 3. AI governance without killing delivery speed
**Audience:** CIO, CDO, risk · **Intent:** leadership, high commercial adjacency
**Thesis:** governance that lives in a document slows everything and prevents
nothing; governance that lives in the runtime and fails the build does the opposite.
**Supports:** the guardrail and default-deny patterns · **LinkedIn:** "A safety flag
defaulted to on, and served fabricated data in production." · **CTA:** contact

### 4. From GenAI pilot to production platform
**Audience:** CIO, CDO, transformation leads · **Intent:** highest commercial intent
**Thesis:** pilots are judged on output quality, platforms on defensibility — and
nobody plans for the second test.
**Supports:** `/enterprise-ai-architecture/` and the bank case study · **LinkedIn:**
"Enterprise AI architecture is four layers. Pilots build three." · **CTA:** contact

### 5. Cache identity in LLM systems
**Audience:** AI engineers · **Intent:** narrow, very high intent
**Thesis:** if a change would alter the output it belongs in the key — prompt text,
trust boundary, model tier — and a cache without them is a correctness risk wearing
a performance disguise.
**Supports:** already half-written on `/enterprise-rag/` · **LinkedIn:** "A cache key
without the prompt in it is a correctness bug." · **CTA:** RAG page

**Cadence:** one a fortnight. Five pieces is roughly ten weeks, and each has a
LinkedIn post already mapped in `linkedin-strategy.md`.
