# paramiyer.github.io

A portfolio and writing site that maintains itself. Ten routes of hand-written
technical content, statically generated with **zero runtime dependencies**, refreshed
weekly by a scheduled job, and gated by 16 structural invariants that fail the build
rather than ship a defect.

**Live:** [paramiyer.github.io](https://paramiyer.github.io/)

---

## The problem

Most of my delivery work lives in private enterprise repositories and Azure DevOps.
A conventional portfolio would therefore either understate the work or overstate it —
count public commits and the numbers are meaningless; write prose instead and nothing
is verifiable.

Two further constraints shaped everything else:

- **A portfolio that goes stale is worse than none**, because staleness is visible and
  dated. Whatever I built had to refresh without me remembering to do it.
- **Client work cannot be named.** The content had to be substantive enough to prove
  capability while naming no client, system or ticket.

## Architecture

Four moving parts, deliberately boring:

```
content/*.mjs ──► build-pages.mjs ──► static HTML (10 routes)
                                             │
GitHub + OpenAlex APIs ──► build-stats.mjs ──┤ injects <!-- GEN:x --> regions
local git history ──────► local-activity.mjs ┘
                                             │
                                      validate.mjs ──► 16 invariants, exits non-zero
                                             │
                              GitHub Actions ──► Pages
```

**Content as data.** Pages are objects in `content/pages.mjs` and
`content/case-studies.mjs`, not HTML files. Adding a page is adding an object and a
route. The template in `content/_template.mjs` encodes the required shape — every page
must carry a tradeoff table, a decision framework and a "when not to" section.

**Marker injection, not templating.** Generated regions are delimited by
`<!-- GEN:x -->` comments inside hand-authored HTML. The generator replaces what is
between the markers and touches nothing else, so `index.html` stays editable by hand
and the generators stay re-runnable. **Idempotence is a hard property**: running a
generator twice must produce a byte-identical tree.

**No toolchain.** No bundler, no framework, no `node_modules`, no npm install in CI.
The generators are plain ES modules using only the standard library. Nothing to
upgrade, nothing to audit, nothing that breaks in eighteen months.

## Validation

`scripts/validate.mjs` asserts invariants that would otherwise ship real defects:

| Check | Why it exists |
|---|---|
| Every sitemap URL resolves to a file | A sitemap listing a 404 is worse than no sitemap |
| Unique `<title>` and description per page | Duplicates get pages deduplicated out of results |
| Canonical matches the route | Wrong canonicals silently deindex pages |
| JSON-LD parses | An invalid blob is ignored entirely, and fails silently |
| **No `jobTitle` / `worksFor` asserted** | See below — this is the important one |
| Every internal link resolves | 160 links, checked on every build |
| **No client identifiers on any page** | Regex denylist over employers' clients, ticket ids, internal hosts |
| Product counts are self-consistent | A claimed total that disagrees with the list is a credibility hole |

The last-but-one is a confidentiality guard, enforced in CI rather than in a review
checklist, because a checklist is a thing you skip when you are tired.

### The `jobTitle` check

The site positions me as a *Principal AI Architect*. That is positioning, not a title
I have held — so the structured data must never assert it as employment. It would be
easy to add `jobTitle` to the JSON-LD for SEO benefit, and it would be a lie.

Making that a **failing test** rather than a note in a document is the difference
between a rule and an intention.

## Automation

A single workflow, scheduled Mondays 05:00 UTC, that regenerates the activity
snapshot, rebuilds, validates and deploys.

One thing worth knowing if you build something similar: **a commit pushed with
`GITHUB_TOKEN` does not trigger other workflows.** Loop prevention silently breaks the
obvious two-workflow design — one to refresh, one to deploy — and you will debug it at
midnight. Refresh and deploy therefore live in the same job.

Activity counts are computed from **local git history across all repositories**, not
the GitHub API, because the API sees only public repos and most of the work is private.
The honest number required reading a source GitHub cannot see.

## What I would do differently

- **Language statistics are a trap.** Byte-weighted language mix read 98.3% Jupyter,
  because notebooks embed base64 image output. Count projects, not bytes.
- **Contrast needs measuring, not eyeballing.** I claimed AA compliance in an early
  pass; when I actually computed the ratios, body text on the light theme was 4.35:1
  against a 4.5 requirement. Two hundred lines of confident prose, one failing number.
- **Full-ISO timestamps break idempotence.** `dateModified` and `lastmod` now carry
  dates only. A generator that dirties the tree on every run cannot be trusted to run
  unattended.

## Running it

```bash
node scripts/build-pages.mjs   # content modules -> HTML
node scripts/build-stats.mjs   # inject generated regions, sitemap, JSON-LD
node scripts/validate.mjs      # 16 invariants; non-zero exit gates CI
python3 -m http.server 8000    # true preview: no build differs from production
```

No install step. That is the point.
