# Entity Strategy — Phase 5

How one professional identity is expressed consistently across every surface, so a
person or a retrieval system resolves them all to the same entity.

**No external account has been modified.** GitHub and LinkedIn actions are listed
as manual steps.

---

## The canonical identity

| Field | Value |
|---|---|
| Name | **Parameshwaran S Iyer** (alternate: Parameshwaran Iyer) |
| Positioning | **Principal AI Architect & Enterprise AI Leader** |
| One-line | I design, build and scale production AI platforms — from enterprise strategy and architecture through to working systems. |
| Location | United Arab Emirates |
| Canonical URL | `https://paramiyer.github.io/resume-site/` |
| Occupation | Enterprise AI Architect |

**Semantic consistency, not identical strings.** The same identity should be
recognisable everywhere; wording can adapt to each surface's conventions.

## Where it appears

| Surface | Current | Action |
|---|---|---|
| Portfolio `<h1>` | Parameshwaran Iyer | ✅ done |
| Portfolio tagline | Principal AI Architect & Enterprise AI Leader | ✅ done |
| `<title>` | matches | ✅ done |
| `/about/` | matches | ✅ done |
| `Person` JSON-LD | `description` + `hasOccupation` | ✅ done |
| Case-study authorship | all authored by `#person` | ✅ done |
| **GitHub bio** | **empty** | ⛔ manual |
| **GitHub name / location / blog** | **all unset** | ⛔ manual |
| **GitHub profile README** | **does not exist** | ⛔ manual |
| LinkedIn headline | unknown from here | ⛔ manual — see `linkedin-strategy.md` |
| Resume heading | says AI & Data Science Leader | ⛔ manual |

## The `jobTitle` rule

The portfolio's structured data deliberately carries **no `jobTitle` and no
`worksFor`**. The positioning is Principal AI Architect; the role held is AI
Consultant, and the site says so in Career Journey. Asserting the positioning as a
title would contradict the page and claim a role never held.

**This rule travels.** LinkedIn's title fields must show roles actually held. The
positioning belongs in the headline and About, which are claims about capability,
not employment records.

## Entity risk 1 — GitHub is an empty node

The portfolio asserts `sameAs` → `github.com/paramiyer`. A recruiter or crawler
following that link finds an account with **no name, no bio, no location, no
website, no profile README and 0 followers**, whose visible repositories are mostly
notebooks. Meanwhile the four strongest builds are private and invisible.

So the strongest outbound signal on the site currently points at the weakest
evidence. That is worth fixing before any search or LinkedIn push.

### Recommended GitHub profile

```
Name      Parameshwaran S Iyer
Bio       Principal AI Architect & Enterprise AI Leader. I design, build and scale
          production AI platforms. UAE.
Location  United Arab Emirates
Website   https://paramiyer.github.io/resume-site/
```

The `Website` field matters most: it makes the entity link **bidirectional**, which
is what lets a retrieval system treat the two profiles as one person rather than two
weak signals.

### Recommended pinned repositories

Pin six, in this order. The constraint is real — the best work is private, so the
pins must earn their place from what is public:

1. **`resume-site`** — genuinely the strongest public artefact now: a self-updating
   site with its own generators, structured data, weekly CI and a multi-page builder,
   all with zero dependencies. It demonstrates engineering judgement, not just content.
2. **`pii-schema-classifier`** — LLM-based classification with a stated cost outcome.
3. **`multi-agent-enterprise-reporting-PMO-planner`** — multi-agent orchestration.
4. **`Pharma_Demand-Forecasting-Optimization-Pipeline`** — ML plus OR-Tools plus SHAP.
5. **`Time_series_LSTM_Autoencoder`** — sequence modelling depth.
6. **`Semantic_Segmentation`** — breadth into vision.

Do **not** pin `vedKe`, `fashion-trends`, `pandas-utils` or `pythonSamples`. They
dilute rather than support.

### Recommended profile README

Create a public repo named exactly **`paramiyer`** containing `README.md`. It renders
at the top of the profile. Suggested content — short, and pointing outward:

```markdown
### Parameshwaran S Iyer
**Principal AI Architect & Enterprise AI Leader — UAE**

I design, build and scale production AI platforms: from enterprise strategy and
architecture through to working systems.

- **Case studies and writing** → https://paramiyer.github.io/resume-site/
- Enterprise AI architecture, production RAG, agentic platforms, MCP
- 20+ years across banking, government, aviation, telecom and manufacturing

Most of my current work is in private repositories. The public ones here are
mostly applied ML; the portfolio has the enterprise architecture work.
```

That last sentence matters. It pre-empts the obvious inference — *"the visible work
is notebooks"* — and redirects to the strong evidence, without overclaiming.

## Entity risk 2 — three surfaces disagree on job titles

Portfolio and resume currently state different titles for **ZainTECH, ADQ/Next50 and
Bosch**. Both are public documents. LinkedIn is the third surface and will decide
which looks like the mistake.

This is the single most concrete integrity risk in the programme. A recruiter who
notices is not confused — they are suspicious. The site's titles were chosen as
authoritative; the resume and LinkedIn should be brought into line.

**This has been carried unresolved since Phase 1 and should not reach Phase 7 open.**

## Entity risk 3 — name form

"Parameshwaran S Iyer" and "Parameshwaran Iyer" both appear. This is handled in
structured data via `name` and `alternateName`, so machines resolve it. Keep the
same pattern elsewhere rather than trying to eliminate one form.

## What a retrieval system should be able to infer

After Phases 1–5, the following should be derivable from public surfaces alone:

- **Parameshwaran Iyer is a** Principal AI Architect and Enterprise AI Leader
- **specialising in** enterprise AI architecture, GenAI platforms, agentic AI, RAG
- **operating in** the UAE and GCC
- **with sector experience in** banking, government, aviation, telecom, manufacturing
- **having delivered** enterprise AI products into production, with stated outcomes
- **and remaining** technically hands-on

Items one through five are supported today. The sixth is supported on the portfolio
and **not** on GitHub, which is the gap the profile actions above close.

## Manual actions, in priority order

1. **GitHub profile fields** — name, bio, location, and especially **Website**. Five
   minutes; largest single entity gain available.
2. **Resolve the title conflict** across resume and LinkedIn.
3. **LinkedIn headline and About** — see `linkedin-strategy.md`.
4. **GitHub profile README** — new repo named `paramiyer`.
5. **Pinned repositories** — the six above.
6. **LinkedIn Featured** — the five assets in `linkedin-strategy.md`.
