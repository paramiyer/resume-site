# Search Strategy — Phase 6

**Updated:** 2026-08-29 · 10 indexable routes · no analytics by design

No ranking is promised anywhere in this document. What follows is a map of intent
to page, an honest strength assessment, and what would have to be true for each
cluster to work.

---

## Set expectations first

Three facts shape everything below, and pretending otherwise would waste your time.

1. **The site is roughly two weeks old with no backlinks.** Nine of its ten pages
   were published today. Organic ranking for competitive commercial terms is not a
   near-term outcome.
2. **It lives on a project path of a shared domain** — `paramiyer.github.io/resume-site/`.
   Authority signals are diluted across every `github.io` site, and the path reads
   as a side project rather than a professional presence. See *Custom domain* below.
3. **Traffic is not the goal.** The goal is that a specific, small set of people and
   systems — recruiters, CIOs, AI retrieval engines — find and correctly classify a
   senior enterprise AI architect. A hundred right visitors beats ten thousand wrong ones.

Realistically the site earns its keep in this order: **AI retrieval → branded search
→ a credible destination for LinkedIn traffic → long-tail technical queries →
competitive commercial queries.** The last of those is a year-scale ambition, and
only with a custom domain and sustained publishing.

---

## Cluster A — commercial / hiring intent

Someone is looking to hire, or to shortlist.

### A1. `principal AI architect UAE` · `enterprise AI architect Dubai`

| | |
|---|---|
| **Intent** | Hiring or shortlisting a named seniority in a named market |
| **Audience** | In-house recruiter, executive search, hiring CTO |
| **Best target** | `/about/` |
| **Current strength** | **Weak.** `/about/` states the positioning and the region, but is not built to answer this query — no sector framing, no "what I do in the GCC" specifics |
| **Evidence available** | Strong — positioning, sectors, UAE base, delivery record |
| **Internal links in** | Nav, byline on all 9 generated pages |
| **Gap** | The page reads as a bio, not as an answer to "who does this here" |
| **Expansion** | Strengthen `/about/` with sector and market specifics rather than creating a new page |

### A2. `enterprise AI transformation GCC` · `AI transformation UAE`

| | |
|---|---|
| **Intent** | Mixed — some hiring, some buying advisory |
| **Audience** | CIO, CDO, transformation lead |
| **Best target** | **None. Orphaned cluster.** |
| **Current strength** | **Zero** |
| **Evidence available** | Real but hard to publish — the richest GCC material is client-confidential |
| **Gap** | The obvious page, `/ai-transformation-gcc/`, is exactly the page most likely to become filler |
| **Expansion** | **Only write it with GCC specifics you can actually disclose** — regulatory posture, data-residency constraints, sovereign-cloud realities, why programmes stall here specifically. A generic "AI transformation in the GCC" page would be the weakest thing on the site and would drag the rest down. Leave orphaned until that content exists |

### A3. `head of AI UAE` · `director of AI engineering Dubai` · `GenAI platform leader GCC`

| | |
|---|---|
| **Intent** | Hiring, adjacent titles |
| **Audience** | Recruiters searching by title variants |
| **Best target** | `/about/` |
| **Current strength** | Weak — the site names one positioning, deliberately, and does not chase title variants |
| **Gap** | Intentional. Chasing every adjacent title is the keyword-soup failure the programme exists to avoid |
| **Expansion** | Handle this on **LinkedIn**, where recruiters actually search by title, not on the site. See `linkedin-strategy.md` |

---

## Cluster B — technical authority

Someone has a problem and is looking for how to solve it. This is where the site is
genuinely competitive, because the content is first-hand and specific.

### B1. `enterprise RAG architecture` · `production RAG regulated` · `RAG cache invalidation`

| | |
|---|---|
| **Intent** | Informational, high expertise |
| **Audience** | AI engineers, architects, engineering leaders |
| **Best target** | `/enterprise-rag/` |
| **Current strength** | **Strong** — direct answer, grounding contract, the cache-key failure, evaluation gates, when-not-to |
| **Evidence** | First-hand production experience |
| **Links in** | Homepage *Problems I Solve*, nav, two case studies, agentic page |
| **Gap** | None material |
| **Expansion** | A dedicated piece on cache identity would rank for a narrower, very high-intent query |

### B2. `agentic AI enterprise architecture` · `when not to use agents`

| | |
|---|---|
| **Intent** | Informational, decision-stage |
| **Audience** | CTOs, principal engineers |
| **Best target** | `/agentic-ai/` |
| **Current strength** | **Strong** — the "most things called agents should not be" thesis is contrarian and defensible |
| **Links in** | Nav, homepage capability matrix, case study |
| **Gap** | None material |

### B3. `MCP enterprise architecture` · `MCP vs REST API`

| | |
|---|---|
| **Intent** | Informational, emerging topic with low competition |
| **Audience** | Engineers, architects evaluating MCP |
| **Best target** | `/agentic-ai/` (section) and `/case-studies/mcp-product/` |
| **Current strength** | **Moderate** — covered as a section and a case study, not as a dedicated page |
| **Evidence** | Strong and unusual: an MCP server actually built and in use |
| **Gap** | The topic is under-served generally and deserves its own page |
| **Expansion** | **Highest-value expansion on this list.** Low competition, real evidence, growing demand |

### B4. `Databricks vs PostgreSQL serving layer` · `should APIs query the lakehouse`

| | |
|---|---|
| **Intent** | Informational, architecture decision |
| **Audience** | Data architects, platform engineers |
| **Best target** | **None yet. Orphaned.** |
| **Current strength** | Zero |
| **Evidence** | **Strong first-hand material** — this is a decision made repeatedly with real reasoning |
| **Gap** | Backlog item #1 from Phase 3, still unwritten |
| **Expansion** | Write it. Clear intent, real expertise, and it links naturally to the architecture page |

### B5. `H3 geospatial at scale` · `site suitability scoring`

| | |
|---|---|
| **Intent** | Informational, niche |
| **Audience** | Geospatial and data engineers |
| **Best target** | `/case-studies/geospatial-site-suitability/` |
| **Current strength** | **Strong but narrow** — a real build at ~29.7M rows |
| **Gap** | It is a case study, not a how-to; it will attract fewer queries but convert better |

### B6. `AI governance without slowing delivery` · `LLM guardrails production`

| | |
|---|---|
| **Intent** | Informational, leadership |
| **Audience** | CIOs, risk, heads of engineering |
| **Best target** | `/enterprise-ai-architecture/` (section) |
| **Current strength** | **Moderate** — covered inside a broader page |
| **Gap** | Governance is the topic most likely to reach a CIO, and it is currently a subsection |
| **Expansion** | Strong candidate for its own page; high commercial adjacency |

---

## Orphaned clusters — stated plainly

| Cluster | Decision |
|---|---|
| **A2** AI transformation GCC | Leave orphaned until disclosable GCC specifics exist. Do not write filler |
| **A3** Title variants | Handle on LinkedIn, not here |
| **B4** Lakehouse vs serving layer | Write it — evidence exists |

---

## Content backlog — ranked

Ranked by commercial relevance × differentiated expertise × evidence available ÷ effort.

| # | Piece | Why it ranks here |
|---|---|---|
| 1 | **Databricks vs PostgreSQL for serving enterprise AI applications** | Fills orphaned B4; strong first-hand reasoning; clear decision intent |
| 2 | **MCP vs conventional APIs in enterprise integration** | Fills B3 properly; low competition; unusual evidence |
| 3 | **AI governance without killing delivery speed** | Promotes B6 out of a subsection; most likely to reach a CIO |
| 4 | **From GenAI pilot to production platform** | Highest commercial intent of any technical piece |
| 5 | **Why enterprise APIs should not query the lakehouse directly** | Sharp, opinionated, pairs with #1 |
| 6 | **Cache identity in LLM systems** | Narrow, very high intent, already half-written on the RAG page |
| 7 | **AI transformation in the GCC** | Only with specifics — see A2 |

**Eight to twelve excellent pieces, not a hundred adequate ones.** At one a fortnight
that is roughly six months, which is the right pace for work written from real delivery.

---

## Indexing — manual steps

Nothing here is fabricated. All of it needs you.

### Google Search Console

1. Add property. **Use the URL-prefix property** `https://paramiyer.github.io/resume-site/` —
   domain properties need DNS, which you do not control on `github.io`.
2. Verify via **HTML tag**: add to the `<head>` of `index.html`, immediately after
   the `<meta name="description">` line.
   ```html
   <meta name="google-site-verification" content="PASTE_TOKEN">
   ```
   *(The file-upload method also works: drop `google*.html` at the repo root and add
   it to the staging list in `.github/workflows/static.yml`.)*
3. Submit `https://paramiyer.github.io/resume-site/sitemap.xml`.
4. Request indexing for the homepage and the three expertise pages.

### Bing Webmaster Tools

1. Import from Search Console — fastest path once step 1 above is done.
2. Or verify with a meta tag in the same place:
   ```html
   <meta name="msvalidate.01" content="PASTE_TOKEN">
   ```
3. Submit the same sitemap.

### IndexNow

Optional, and low value at ten pages that change weekly. If you want it:

1. Generate a key — a 32-character hex string, self-issued. **I have deliberately
   not generated one**; the brief says not to fabricate keys, and it is a one-command
   job you should own: `openssl rand -hex 16`
2. Save it as `<key>.txt` at the repo root, containing only the key.
3. Add that filename to the staging list in `.github/workflows/static.yml`.
4. Ping on publish. Realistically not worth automating until publishing is frequent.

---

## Analytics — the Phase 2 open question, decided

**Recommendation: keep the no-tracker stance.** The footer says "no trackers" and
that should stay true.

The reasoning is not privacy theatre — it is that **Search Console and Bing Webmaster
give exactly the data this programme needs**, and they do it without observing
visitors at all:

| Question | Answered by |
|---|---|
| Which queries surface the site? | Search Console — *Queries* |
| Which pages get impressions? | Search Console — *Pages* |
| Is the positioning being matched to the right intent? | Query text itself |
| Branded vs non-branded discovery | Query filter on the name |
| Is anything failing to index? | Coverage report |

None of that requires a script on the page. What you lose is on-page engagement —
scroll depth, time on page, CTA clicks. Given that the success metric is *the right
person arriving and understanding*, not session duration, that is an acceptable loss.

**If you later want engagement data**, use a cookieless, no-personal-data option such
as GoatCounter or Plausible. Do not add Google Analytics — it would contradict the
footer, add a third-party request to every page, and answer questions you are not
really asking.

---

## Custom domain — the highest-leverage change available

`paramiyer.github.io/resume-site/` is a project path on a shared domain. Two costs:

- **Authority is diluted.** Signals do not accrue to you; they accrue to a path.
- **It reads junior.** A Principal AI Architect on a `github.io/resume-site` path is
  a small but real mismatch between the positioning and its container.

A custom domain — `paramiyer.ai`, `paramiyer.com` or similar — fixes both, and is
roughly $10–50 a year plus a DNS record.

**The migration is already designed for.** Everything absolute derives from the
`SITE` constant in `scripts/build-stats.mjs` and `content/pages.mjs`. Changing it,
adding a `CNAME` file to the repo root and the staging list, and re-running the
generators moves the whole site — metadata, structured data, sitemap and all.

Do this **before** requesting indexing, not after. Migrating a site that has already
been indexed means redirects you cannot configure on GitHub Pages.

---

## Measurement framework

Review monthly. Fifteen minutes.

### Leading indicators — do this first

| Signal | Where | What good looks like |
|---|---|---|
| Indexed pages | Search Console → Coverage | 10 of 10 |
| Impressions on non-branded technical queries | Search Console → Queries | Any at all, in month one |
| Query–page match | Queries × Pages | RAG queries landing on `/enterprise-rag/`, not the homepage |
| AI-retrieval visibility | Manual: ask an AI assistant the B-cluster questions | Your framing appearing, cited or not |

### Lagging indicators

| Signal | Where |
|---|---|
| Branded searches for the name | Search Console |
| LinkedIn referrals | LinkedIn post analytics |
| Direct approaches referencing a case study | Your inbox — the one that actually matters |

### What not to measure

Raw sessions, bounce rate, time on page. This site has ten pages and one purpose. A
recruiter who reads one case study and emails you is a total success and would look
like a bounce.

**The honest success metric is: did a qualified person arrive, classify you
correctly, and make contact.** Everything above is a proxy.
