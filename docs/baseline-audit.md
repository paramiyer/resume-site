# Baseline Audit — Phase 0

**Date:** 2026-08-29 · **Site:** https://paramiyer.github.io/resume-site/
**Scope:** audit only. No production content was changed.

> **Do not publish this file as-is.** See *Build & deployment risks* — the Pages
> workflow serves the entire repository, so `docs/` is publicly fetchable at a
> guessable URL. This document is uncommitted pending that decision.

---

## 0. Repository reality

Seven tracked files. **There is no build system**: no `package.json`, no lint,
no TypeScript, no test runner, no bundler.

```
.github/workflows/static.yml
ParamProfile.png
data/activity-local.json
data/github-stats.json
index.html            ← the entire site, 38 KB, inline CSS + ~30 lines of JS
scripts/build-stats.mjs
scripts/local-activity.mjs
```

`index.html` is hand-authored. Two Node generators rewrite only the regions
between `<!-- GEN:x -->` markers; everything else is prose the automation never
touches. Node is used ad hoc via `node scripts/…`, not as a project dependency.

**Baseline build/lint/test status: not applicable — none exist.** This is a
finding, not a failure, and it materially changes Phases 2, 3 and 7, which the
brief writes as though a framework were present.

---

## 1. Current positioning

Hero reads:

> **Parameshwaran Iyer**
> AI & Data Science Leader — Strategy, Platforms & Enablement

Against the target of *Principal AI Architect & Enterprise AI Leader*, three gaps:

- **"Data Science" leads.** That is a 2019 framing and reads a level below
  architect. It invites Lead/Principal Data Scientist classification.
- **"Enablement" is an operating-model word**, carried over from a Head-of-AI-
  Enablement application. It signals staff-function rather than build-and-own.
- **No architecture signal at all.** The words architect, platform architecture
  and system design do not appear above the fold.

The `<title>` repeats the same framing, so search results inherit it.

## 2. Current information hierarchy

| # | Section | Serves |
|---|---|---|
| 1 | Hero + "Managed via Claude" pill | identity |
| 2 | At a Glance — 6 metric tiles | proof |
| 3 | **This Week** — commits / repos / PRs | activity |
| 4 | Professional Summary | narrative |
| 5 | Selected Impact — 6 outcome tiles | enterprise proof |
| 6 | AI Capability — 10 areas, repo-linked | technical proof |
| 7 | Projects — 10 cards | technical proof |
| 8 | Language Mix | activity |
| 9 | Career Highlights | history |
| 10 | Products Shipped | **enterprise proof** |
| 11 | Core Expertise — 15 tags | skills |
| 12 | Education / Research / Contact | credentials |

Against the brief's target order this is materially wrong in three places:

- **Activity is at position 3.** The brief wants activity last. "This Week" is
  the third thing a CIO sees.
- **Products Shipped is at position 10** — the strongest enterprise evidence on
  the page, below a language bar.
- **"Problems I solve" does not exist.** Every section describes what he *has
  done*, none frames what he *solves*. That is the core CIO-comprehension gap.

## 3. Strongest evidence

- **Products Shipped (7)** — two production bank systems, two own products, three
  commercial/marketplace. Genuinely strong, currently buried.
- **AI Capability matrix** — 10 areas each linked to code. Claims backed by
  artefacts rather than adjectives. Structurally the best idea on the page.
- **smith** — a product with its own MCP server, PostgREST-generated API, Vercel
  preview-on-PR, in real use. Directly proves "still hands-on" at architect level.
- **ai-center-locator** — continental-scale H3 (~1.5M cells / ~29.7M rows).
  Proves data-platform architecture at scale.
- **Live citation chart** — OpenAlex, refreshed weekly, externally verifiable.
- **The site itself** — self-updating via CI/CD, which is quiet evidence.

## 4. Weakest sections

- **Language Mix** — a GitHub-dashboard artefact. Says "Jupyter 5, Python 3" and
  proves nothing at architect level. The brief explicitly warns against this.
- **This Week** — useful, wrongly placed, and currently reads as vanity.
- **Core Expertise** — 15 undifferentiated tags approaching the "badge wall" the
  brief prohibits. No grouping into capability domains.
- **Professional Summary** — abstract; no named enterprise problem.
- **Career Highlights** — role/detail strings, no scope, scale or architecture.
- **Research** — "still being cited today" with a chart, but no link between the
  research and the enterprise positioning.

## 5. Duplicate messaging

- The two bank products appear in **Products Shipped** and are described again in
  **Career Highlights** (Whiteshield) — different words, same facts.
- **At a Glance** repeats **Selected Impact**: AED 90M+ is 50M + 40M restated.
- **Capability matrix** and **Projects** list the same repos twice — deliberate
  (evidence vs detail) but reads as repetition on a single page.
- **Core Expertise** overlaps the capability matrix without adding evidence.

## 6. Competing identities

Four identities are visible at once:

| Identity | Where |
|---|---|
| AI & Data Science Leader | hero, title |
| Enterprise AI enablement leader | summary, expertise tags |
| Hands-on builder | This Week, Projects, Language Mix |
| Researcher | citations, h-index |

None is subordinated to the others, so a recruiter must choose. The brief's
target — architect who still builds — is present but not *led*.

## 7. Technical credibility signals

Present and good: capability matrix, MCP, PostgREST/RLS, H3 at scale, Databricks/
Unity Catalog/ADLS, guardrails and evaluation harness, CI/CD, live activity.

Missing: any **architecture artefact**. No diagram, no decision record, no
tradeoff discussion, no "why we chose X over Y". Everything is *what*, nothing is
*why* — which is precisely what separates architect from senior engineer.

## 8. Enterprise credibility signals

Present: AED/EUR outcomes, 40-person function, two production bank systems,
regulated-sector language, marketplace products.

Missing: scale descriptors (users, transactions, data volume), governance and
security narrative, stakeholder/operating-model context, and any case study. The
outcomes are **assertions with numbers**, not evidence with structure.

## 9. Recruiter risks

| Risk | Cause |
|---|---|
| **Down-levelling to Lead/Principal DS** | "Data Science Leader" leads the hero |
| **Job-hopping perception** | Whiteshield Apr 2026–, Contango Aug 2025–Mar 2026, career break — three entries in ~24 months, none explained as engagements |
| **Title inconsistency** | Site says ZainTECH *Principal Data Scientist*, Bosch *Sr Principal Data Scientist*, ADQ *Principal Data Scientist*. Resume says *Head of Data Science*, *Chief Expert Data Science*, *Director*. Two public documents disagree — the most concrete integrity risk on the page |
| **Consultant-without-ownership** | Two recent employers are consultancies; no ownership framing |
| **Generalist perception** | 10 capability areas + 15 tags with no primary |
| **"AI-generated site"** | The *Managed via Claude* pill is honest and interesting, but sits in the highest-value pixels |

## 10. SEO gaps

| Element | State |
|---|---|
| `<title>`, meta description, viewport, `lang` | present |
| canonical | **absent** |
| OpenGraph / Twitter | **absent (0 tags)** |
| JSON-LD structured data | **absent (0 blocks)** |
| `robots.txt` | **absent** |
| `sitemap.xml` | **absent** |
| favicon / manifest | **absent** |
| Analytics | **absent** (deliberate — footer says "no trackers") |
| Routes | **one** (`/`). No `/about`, `/projects`, per-project or article routes |

Content is server-rendered static HTML, so crawlability itself is fine. The
problem is there is only one URL to crawl and no entity markup on it.

## 11. AI-search / GEO gaps

- **No standalone-retrievable sections.** Content is bullets and tiles; a
  retrieved fragment carries no question, claim or conclusion.
- **Headings are labels, not questions** — "At a Glance", "Language Mix".
- **No direct answers.** Nothing on the page answers "how do you take GenAI from
  pilot to production in a bank?" — the question the positioning implies.
- **No definitions, tradeoffs or decision frameworks** — the citable units.
- **No author, no dates, no article semantics.** Only "last refresh".
- **No entity graph.** Nothing machine-readable links the person to their
  expertise, sectors or location.

## 12. LinkedIn / GitHub consistency (inferable from repo only)

- Site links to LinkedIn `parameshwaran-iyer-790b2131` and `github.com/paramiyer`.
- **GitHub profile is effectively empty**: name, bio, company, location and blog
  are all unset; 0 followers. The profile contradicts the portfolio by silence.
- Public repos are largely notebooks; the four strongest builds are **private**,
  so a recruiter visiting GitHub sees the weakest 40% of the work.
- LinkedIn content cannot be audited from here — Phase 5.

## 13. Architecture constraints

- **One hand-written HTML file, no build.** The brief's Phase 3 route list
  (`/enterprise-ai-architecture`, `/insights/[slug]`, …) implies 12–20 pages.
  Hand-authoring those means duplicating `<head>` and ~250 lines of CSS per file —
  unmaintainable within about three pages.
- **Decision required in Phase 2**, not now: extend the existing marker/inject
  generator into a minimal multi-page builder, or adopt a small static generator.
  The brief rightly warns against fashion-driven migration; the honest test is
  whether one file can carry a content system. It cannot.
- Zero dependencies is a real asset. Whatever is chosen should preserve it.

## 14. Build & deployment risks

1. **The whole repo is published.** `upload-pages-artifact` uses `path: '.'`.
   Verified live: `/scripts/build-stats.mjs` and `/data/github-stats.json` both
   return **HTTP 200**. Anything committed — including this audit — becomes
   publicly readable. **Highest-priority finding.**
2. **The workflow always commits**, deliberately, to keep the cron alive past
   GitHub's 60-day inactivity cutoff. Consequence: concurrent human work must
   rebase; this happened three times in one session.
3. **Refresh and deploy share one workflow**, so a generator failure blocks
   deployment. Intentional (fail rather than publish stale-as-fresh) but it means
   an OpenAlex outage can stop a content release.
4. **`data/activity-local.json` goes stale.** After 7 days the generator falls
   back to the API, and the weekly numbers silently drop from ~127 to ~3 because
   the token cannot see private repos.
5. **No `dev` branch.** Every change deploys on merge to `main`.
6. **No tests of any kind**, so Phase 7's "run the tests" has nothing to run.

---

# Evidence Inventory

Source of truth for later phases. Do not embellish beyond this.

## VERIFIED — externally checkable or measured directly

| Item | Value | Source |
|---|---|---|
| Research citations | **144**, 8 works, **h-index 5** | OpenAlex API, live |
| OpenAlex identity | split across 2 author records (GM, Bosch) | API |
| Public repos | 22 owned, 3 forks | GitHub API |
| Private repos | 7: smith, ai-center-locator, myBob, astro, branch-react-app, coach-slot, fab-summary | local remotes vs API 404 |
| smith build time | first→last commit **4h 45m**, 2026-08-28 | git log |
| smith scale | 7,733 LOC; 8 tables, **20 RLS policies**, 8 indexes, 4 triggers; 8 routes; MCP server 466 LOC | repo inspection |
| smith in use | 47 tickets across 2 projects | its own MCP server |
| smith stack | Postgres + PostgREST-generated API, TypeScript monorepo, Vercel preview-on-PR | README + config |
| ai-center-locator | H3 res 7, ~1.5M hexagons, ~29.7M rows, ~12 normalised layers | its README |
| ai-center-locator CI | backend lint/tests + migrations-against-clean-Postgres job | ci.yml |
| Last 7 days | **127 commits, 3 repositories, 16 PRs** | local git |
| Education | MSc Industrial Engineering, Penn State; BE Mechanical, Mumbai | site + resume |
| Site CI/CD | GitHub Actions, weekly cron, auto-deploy | workflow + run history |

## SELF-REPORTED — his own consistent claim; safe to publish as his statement, not third-party fact

| Item | Value |
|---|---|
| Experience | 20+ years |
| Zaintech | AED 50M annual value; alternative credit scoring; population-density estimation |
| ADAG (via Contango) | AED 40M across 3 optimisation use cases |
| Bosch | **EUR 8M** savings (user-confirmed canonical 2026-08-20; supersedes an older "EUR 2M") |
| Bosch | founded and scaled a **40-member** global AI function |
| Careem | driver incentive spend 10% → 5% of GMV |
| UAE bank | two enterprise AI products taken to production |
| pii-schema-classifier | >94% cost saving vs manual review |
| FAB platform detail | 112-source registry, 10-control guardrail library, golden-query evaluation harness |

## AMBIGUOUS — confirm before relying on

| Item | Issue |
|---|---|
| **"200+ citations"** | Google Scholar figure, not machine-verifiable. OpenAlex says 144. Currently on-site and attributed to Scholar — acceptable, but do not restate as a bare fact |
| **Job titles** | Site and resume disagree for ZainTECH, ADQ/Next50 and Bosch. Both are public. **Must be reconciled before an authority push** |
| **AED 90M+** | A derived aggregate (50 + 40). Fine if labelled, misleading if presented as a single engagement |
| Whiteshield engagement | Client is a specific named bank. Keep anonymised as "a leading UAE bank" |
| Career break Aug 2024–Aug 2025 | Stated on the resume, absent from the site. Decide one story |

## DO NOT USE WITHOUT CONFIRMATION

| Item | Why |
|---|---|
| **"Principal AI Architect" as a held title** | He has never held it. Titles held: AI Consultant, Associate Director, Head of Data Science, Director, Lead DS Manager, Chief Expert Data Science, Senior Scientist. Valid as **market positioning**; must never render as a past job title, in copy or in `Person.jobTitle` describing history |
| Client names (bank, LEAP client) | Confidential |
| Azure ML, Data Factory | Requested by two target JDs; **no evidence anywhere** |
| Big-4 / in-house bank employment | Never held |
| Awards, certifications, speaking, partnerships, memberships | **No evidence found in any source.** If any exist they are undocumented |
| Team sizes other than Bosch's 40 | No evidence |
| User/transaction/revenue scale for the bank products | No evidence |

---

## Baseline state recorded

| Check | Result |
|---|---|
| Production build | n/a — no build system |
| Lint | n/a |
| TypeScript | n/a |
| Tests | n/a |
| Generators run clean | yes — `build-stats.mjs`, `local-activity.mjs` both exit 0 |
| Generator idempotence | yes — second run produces no diff beyond the date |
| Deployed HTML | 39,137 bytes, TTFB ~0.26 s |
| Avatar | 66,071 bytes PNG (unoptimised; no WebP/AVIF, no dimensions attribute) |
| Routes | 1 |
| Live deploy | green |
