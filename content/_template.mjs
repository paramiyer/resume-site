/**
 * Reusable template for a new expertise page or insight.
 *
 * Copy this object into content/pages.mjs (or content/case-studies.mjs), then:
 *   1. add the slug to ROUTES in scripts/build-stats.mjs   — or it will not be in the sitemap
 *   2. add the slug to the staging loop in .github/workflows/static.yml
 *   3. add it to NAV in content/pages.mjs if it belongs in the top nav
 *   4. run: node scripts/build-pages.mjs && node scripts/build-stats.mjs
 *
 * The structure below is not decoration. It exists because AI retrieval lifts
 * sections out of context: every heading has to name its topic, and every section
 * has to carry its own claim, or the fragment is useless once separated.
 *
 * Before writing, answer these. If you cannot, the page should not exist:
 *   - What exact question does this answer?
 *   - Who is asking it, and at what seniority?
 *   - What do I know first-hand that a competent generalist could not write?
 *   - What is the tradeoff or decision framework?
 *   - When is my answer WRONG?
 *
 * A page with no "when not to" section is usually marketing.
 */

export const TEMPLATE = {
  // ── routing ──────────────────────────────────────────────────────────────
  slug: 'your-slug-here',            // no leading or trailing slash
  crumb: 'Short Breadcrumb',
  parent: null,                      // or { slug: 'case-studies', label: 'Case Studies' }
  type: 'TechArticle',               // AboutPage / CollectionPage where accurate

  // ── metadata — must be unique across the whole site ───────────────────────
  title: 'Page Title In Title Case',
  // titleTag: 'Override | Parameshwaran Iyer',   // only if the default reads badly
  h1: 'A headline that states the claim, not the topic',
  description:
    'One or two sentences, under about 160 characters, that answer the question rather than ' +
    'describing the page. This is what shows in search results and what an AI system quotes.',
  published: 'YYYY-MM-DD',
  about: ['Schema Topic One', 'Schema Topic Two'],   // feeds JSON-LD `about`

  related: [
    { slug: 'enterprise-ai-architecture', label: 'Enterprise AI Architecture', note: 'one clause on why it is related.' },
  ],

  // ── body ─────────────────────────────────────────────────────────────────
  body: `
  <div class="answer">
    <p><strong>The direct answer, in bold, first.</strong> Say the conclusion before
    the reasoning. If a retrieval system reads only this block, it should still get
    the right answer and be able to attribute it.</p>
  </div>

  <h2>Context</h2>
  <p>Why this question arises, in two or three sentences. No throat-clearing, no
  "in today's fast-moving landscape".</p>

  <h2>The core idea</h2>
  <p>The substance. Use a descriptive heading that would make sense on its own in a
  search result — "Cache identity is a correctness problem" beats "Considerations".</p>

  <h3>A named sub-pattern</h3>
  <p>Sub-patterns get their own headings so they can be retrieved and cited
  independently.</p>

  <h2>Tradeoffs</h2>
  <table>
    <thead><tr><th>Decision</th><th>Bought</th><th>Cost</th></tr></thead>
    <tbody>
      <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    </tbody>
  </table>

  <h2>Enterprise constraints</h2>
  <p>What changes in a regulated environment: governance, audit, data residency,
  sign-off. This is the section a generalist cannot write, and it is usually the
  reason the page is worth reading.</p>

  <h2>Decision framework</h2>
  <ul>
    <li><strong>Choose this when</strong> …</li>
    <li><strong>Choose the alternative when</strong> …</li>
  </ul>

  <h2>When not to</h2>
  <ul>
    <li>A case where this advice is wrong, stated plainly.</li>
  </ul>

  <h2>Conclusion</h2>
  <p>Restate the answer with the reasoning now behind it. One paragraph. No summary
  of what the reader just read.</p>
`,
};

/* ── Confidentiality checklist — run before publishing ─────────────────────
 *  [ ] No employer, client, product or system named from an engagement
 *  [ ] No ticket ids, PR numbers, internal hostnames or repository names
 *  [ ] No colleague named
 *  [ ] Scale figures are mine to disclose, or generalised
 *  [ ] Anonymised labels are the smallest true description, never inflated
 *      ("a leading UAE bank" only if that is accurate)
 *  [ ] Every claim traces to the evidence inventory in docs/baseline-audit.md
 * ------------------------------------------------------------------------- */
