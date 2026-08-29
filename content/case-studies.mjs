/**
 * Case studies.
 *
 * Confidentiality rule: client engagements are anonymised to the smallest true
 * description ("a leading UAE bank", "a productised decision-intelligence
 * platform"). No employer, client, system, ticket or repository from a client
 * engagement is named. Architecture is described at pattern level — the same
 * level already published on the expertise pages.
 *
 * Own projects are described in full, because they are mine to describe.
 *
 * Template sections are included only where the fact is known. Where a detail is
 * unavailable — budgets, headcount on a given engagement, user numbers — the
 * section is omitted rather than invented.
 */

const PARENT = { slug: 'case-studies', label: 'Case Studies' };

/* ── shared inline SVG ────────────────────────────────────────────────────
 * A coverage decision is genuinely hard to convey in prose: three outcomes,
 * two of which write back. Drawn rather than described. Not decorative. */
const COVERAGE_SVG = `
  <figure class="diagram">
    <svg viewBox="0 0 720 250" role="img" xmlns="http://www.w3.org/2000/svg"
         aria-label="A request is canonicalised, then coverage is checked. Full coverage serves from storage with no fetch. Partial coverage fetches only the missing slice and accumulates it. No coverage fetches everything and stores it. Both fetch paths write back, so the next identical request is served from storage.">
      <defs>
        <marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
          <path d="M0,0 L9,4.5 L0,9 z" fill="currentColor"/>
        </marker>
      </defs>
      <g class="d-box">
        <rect x="8" y="100" width="132" height="50" rx="8"/>
        <rect x="188" y="100" width="132" height="50" rx="8"/>
        <rect x="392" y="14"  width="150" height="46" rx="8"/>
        <rect x="392" y="102" width="150" height="46" rx="8"/>
        <rect x="392" y="190" width="150" height="46" rx="8"/>
        <rect x="590" y="102" width="120" height="46" rx="8"/>
      </g>
      <g class="d-text">
        <text x="74"  y="130">canonicalise</text>
        <text x="254" y="123">check</text>
        <text x="254" y="139">coverage</text>
        <text x="467" y="42">FULL — serve, no fetch</text>
        <text x="467" y="130">PARTIAL — fetch gap</text>
        <text x="467" y="218">NONE — fetch all</text>
        <text x="650" y="130">store</text>
      </g>
      <g class="d-line" marker-end="url(#a)">
        <path d="M140,125 H182"/>
        <path d="M320,118 H386 M320,118 V37 H386"/>
        <path d="M320,125 H386"/>
        <path d="M320,132 H386 M320,132 V213 H386"/>
        <path d="M542,125 H584"/>
        <path d="M542,213 H566 V150"/>
      </g>
      <g class="d-note"><text x="650" y="166">writes back</text></g>
    </svg>
    <figcaption>Coverage is derived from what is stored, not tracked separately —
    otherwise the tracker and the truth drift apart.</figcaption>
  </figure>
`;

export const CASE_STUDIES = [
  {
    slug: 'case-studies',
    crumb: 'Case Studies',
    parent: null,
    type: 'CollectionPage',
    title: 'Case Studies',
    titleTag: 'Enterprise AI Case Studies | Parameshwaran Iyer',
    h1: 'Case studies',
    description:
      'Enterprise AI platforms and products taken into production: signal intelligence for a bank, agentic data reuse, continental-scale geospatial suitability, and an MCP-driven product.',
    published: '2026-08-29',
    about: ['Enterprise AI Architecture', 'AI Platforms'],
    related: [
      { slug: 'enterprise-ai-architecture', label: 'Enterprise AI Architecture', note: 'the thinking behind these builds.' },
      { slug: 'agentic-ai', label: 'Agentic AI', note: 'when an agent is the right shape.' },
    ],
    body: `
  <div class="answer">
    <p>Four builds, ordered by enterprise weight rather than recency. Client
    engagements are anonymised and described at pattern level; my own projects are
    described in full.</p>
  </div>
  <ul class="stack">
    <li><span class="who"><a href="enterprise-signal-intelligence/">Signal intelligence for a leading UAE bank</a></span>
    <span class="what">— production GenAI over enterprise data, with grounding contracts, evaluation gates and human sign-off. Corporate and investment banking.</span></li>
    <li><span class="who"><a href="agentic-data-reuse/">Coverage-aware reuse for a multi-agent platform</a></span>
    <span class="what">— agents that stop paying for the same work twice, and the tenant isolation that made the platform sellable to a second customer.</span></li>
    <li><span class="who"><a href="geospatial-site-suitability/">Continental-scale site suitability</a></span>
    <span class="what">— roughly 1.5 million hexagonal cells and 29.7 million rows, scored live against a dozen weighted infrastructure layers.</span></li>
    <li><span class="who"><a href="mcp-product/">A product with its own MCP server</a></span>
    <span class="what">— where the database generates the API and an AI client is a first-class consumer.</span></li>
  </ul>
`,
  },

  {
    slug: 'case-studies/enterprise-signal-intelligence',
    crumb: 'Signal intelligence for a bank',
    parent: PARENT,
    title: 'Signal Intelligence for a Leading UAE Bank',
    h1: 'Production GenAI for corporate banking: signal intelligence',
    description:
      'Taking generative AI into production inside a bank: grounding contracts, scored signal intelligence, compliance screening that stays advisory until an analyst signs off, and the control plane that made release possible.',
    published: '2026-08-29',
    about: ['Generative AI', 'Retrieval-Augmented Generation', 'AI Governance'],
    related: [
      { slug: 'enterprise-rag', label: 'Production RAG', note: 'the patterns this build is drawn from.' },
      { slug: 'enterprise-ai-architecture', label: 'Enterprise AI Architecture', note: 'the four layers, and the one that decides release.' },
    ],
    body: `
  <div class="answer">
    <p><strong>An AI platform that tells relationship managers which companies to
    approach, and why — in production at a leading UAE bank.</strong> The hard part was
    never the model. It was making generated output defensible enough for a regulated
    institution to act on.</p>
  </div>

  <h2>Context</h2>
  <p>Corporate and investment banking relationship managers work a large universe of
  companies with limited attention. The commercial question is which companies deserve
  attention this week, and what to say when the call happens.</p>

  <h2>Business problem</h2>
  <p>Signals that indicate opportunity — funding, expansion, distress, leadership change —
  are scattered across sources of wildly differing reliability. Reading them manually does
  not scale, and a naive AI summary of a news feed is not something a bank can act on.</p>

  <h2>Constraints</h2>
  <ul>
    <li>Regulated environment: every output touching a customer needs an audit trail.</li>
    <li>Generated narratives must be traceable to source, not plausible-sounding.</li>
    <li>Screening outcomes cannot be automated decisions.</li>
    <li>Latency low enough for interactive use by front-line staff.</li>
  </ul>

  <h2>My role</h2>
  <p>Architecture and delivery, end to end — data platform through to production go-live,
  across a multi-repository estate covering services, a front end, the ETL platform and a
  gateway. I owned the architecture decisions and the engineering standards, and worked
  in the codebase throughout.</p>

  <h2>Architecture</h2>
  <p>Four layers, as described in
  <a href="../../enterprise-ai-architecture/">enterprise AI architecture</a>:</p>
  <ul>
    <li><strong>Governed data</strong> — a lakehouse with layered refinement, catalogue-level
    access control, a canonical source registry and a single sanctioned write path.</li>
    <li><strong>Scoring</strong> — signals scored across weighted dimensions with a
    source-credibility rating, and a multi-pillar company score with explicit verdict
    bands. Missing inputs renormalise rather than defaulting, so a score never implies
    data that is absent.</li>
    <li><strong>Generation</strong> — grounded narratives built from a context pack
    assembled from known-good internal sources, under an explicit grounding contract.</li>
    <li><strong>Control plane</strong> — a reusable guardrail library, controls on data
    leaving the boundary, default-deny route access enforced at boot, and human review
    queues for anything advisory.</li>
  </ul>

  <h2>Key decisions</h2>
  <h3>Grounding contract over model capability</h3>
  <p>The system is designed on the premise that the model has never heard of these
  companies. Every claim must trace to injected context. This costs work in context
  assembly and buys the ability to answer "where did this come from" — which is the
  question that decides whether a bank can use it.</p>
  <h3>Advisory until signed off</h3>
  <p>Compliance screening produces a result marked provisional. An analyst confirms it.
  The review state is in the data model, and rows are marked resolved rather than deleted,
  so the audit trail survives.</p>
  <h3>Deterministic before generative</h3>
  <p>The assistant tries a cascade of exact, deterministic responders first and only
  composes with a model when none match. Faster, cheaper and explainable for the majority
  of questions.</p>
  <h3>Evaluation as a release gate</h3>
  <p>A golden-query set gates production readiness, and every defect ever fixed became a
  permanent regression test.</p>

  <h2>Tradeoffs</h2>
  <table>
    <thead><tr><th>Decision</th><th>Bought</th><th>Cost</th></tr></thead>
    <tbody>
      <tr><td>Cache-first context assembly</td><td>Interactive latency at enterprise volume</td><td>Cache identity becomes a correctness concern, not a performance one</td></tr>
      <tr><td>Fail-soft enrichment</td><td>A secondary field cannot fail the whole response</td><td>Gaps are invisible unless surfaced deliberately</td></tr>
      <tr><td>Renormalise on missing data</td><td>Scores never imply absent evidence</td><td>Scores move as coverage improves, which needs explaining</td></tr>
      <tr><td>Human sign-off on screening</td><td>Defensible in a regulated setting</td><td>Throughput is bounded by analyst time</td></tr>
    </tbody>
  </table>

  <h2>Governance</h2>
  <p>A ten-control guardrail library reused across the estate, enforced by a conformance
  test that requires a live invocation at every model call site — not merely an import.
  Sensitive data is scrubbed before any external model call. Access is default-deny and
  the service refuses to start if a route is uncatalogued.</p>

  <h2>Outcome</h2>
  <p>In production, serving corporate and investment banking. One of two enterprise AI
  products I took end-to-end for this client.</p>

  <h2>Lessons</h2>
  <ul>
    <li><strong>A cache key without the prompt in it is a correctness bug.</strong> Edit a
    prompt and the system serves the old one indefinitely, silently.</li>
    <li><strong>Safety defaults must fail closed.</strong> A mock-data flag defaulting to
    on served fabricated data in production because production set neither the variable
    nor the secret.</li>
    <li><strong>Docs drift within months.</strong> Treat code, decision records and recent
    history as authoritative, and say so.</li>
  </ul>
`,
  },

  {
    slug: 'case-studies/agentic-data-reuse',
    crumb: 'Agentic data reuse',
    parent: PARENT,
    title: 'Coverage-Aware Reuse for a Multi-Agent Platform',
    h1: 'Agents that stop paying for the same work twice',
    description:
      'A multi-agent analytics platform re-fetched everything on every run. Coverage-aware reuse cut repeat runs to zero re-fetch, and owner-scoped identity made the platform safe for a second customer.',
    published: '2026-08-29',
    about: ['Agentic AI', 'AI Platforms', 'Data Architecture'],
    related: [
      { slug: 'agentic-ai', label: 'Agentic AI', note: 'the general patterns behind this build.' },
      { slug: 'enterprise-ai-architecture', label: 'Enterprise AI Architecture', note: 'the governed foundation underneath.' },
    ],
    body: `
  <div class="answer">
    <p><strong>Agents that recompute everything on every request are the default, and are
    ruinously wasteful.</strong> Persisting what was fetched and checking coverage before
    fetching again took repeat runs to zero re-fetch, with gap-only retrieval when the ask
    widened.</p>
  </div>

  <h2>Context</h2>
  <p>A productised decision-intelligence platform where specialised agents answer
  economic questions over external data — trade, geospatial and fiscal.</p>

  <h2>Business problem</h2>
  <p>Every agent invocation fetched from source, so asking a similar question twice cost
  twice. Worse, widening a question — one more year, one more region — re-fetched
  everything already held. Cost and latency both scaled with usage rather than with new
  information.</p>

  <h2>My role</h2>
  <p>Architecture and delivery of the reuse layer: I authored the governing architecture
  decision records, built the lakehouse and the application read path, and took the work
  through review gates.</p>

  <h2>Architecture</h2>
  <p>Two match modes, which is the core insight:</p>
  <ul>
    <li><strong>Identity</strong> — the same request resolves to the same stored answer.</li>
    <li><strong>Coverage</strong> — a wider request that contains what is already stored
    reuses the overlap and fetches only the remainder.</li>
  </ul>
  ${COVERAGE_SVG}
  <p>Coverage is derived from the stored rows through views, rather than maintained in a
  separate table. A separate tracker is a second source of truth, and the two drift.</p>

  <h2>Key decisions</h2>
  <h3>Content-addressed identity, computed identically in two places</h3>
  <p>The application and the pipeline both compute the same identity hash over the same
  canonical form. If they disagree, reuse silently stops working, so identical computation
  is a requirement rather than a convention.</p>
  <h3>Prompt and model tier are part of identity</h3>
  <p>For agents whose output depends on a prompt, the composed prompt content, the trust
  boundary and the model tier all enter the identity — keyed on content, not on a registry
  version. A registry toggle must not reset reuse, and a boundary change must not be
  served as identical.</p>
  <h3>Whole-envelope caching where the unit of value is the document</h3>
  <p>Some agents produce an answer document rather than rows. For those, caching the
  envelope means a repeat serves full fidelity with no recomputation — including for an
  expensive economic model that would otherwise re-solve.</p>
  <h3>Owner scope in the identity and the primary key</h3>
  <p>Reuse keyed purely on data content means two customers running the same scenario
  collide on the same row. Folding an owner scope into both the hash and the key makes
  isolation structural rather than a filter someone might forget. Genuinely global
  reference data stays shared and byte-identical.</p>

  <h2>Tradeoffs</h2>
  <table>
    <thead><tr><th>Decision</th><th>Bought</th><th>Cost</th></tr></thead>
    <tbody>
      <tr><td>Coverage derived from stored data</td><td>One source of truth</td><td>Coverage queries are more expensive than reading a tracker</td></tr>
      <tr><td>Content-addressed identity</td><td>Reuse survives config changes</td><td>Two implementations must agree byte-for-byte</td></tr>
      <tr><td>Owner scope in the primary key</td><td>Cross-tenant collision becomes impossible</td><td>A migration, and legacy rows need a grandfathering rule</td></tr>
    </tbody>
  </table>

  <h2>Outcome</h2>
  <p>Reuse proven at formal gate review for two agent families: a repeat run performed
  zero re-fetch, and widening a request fetched only the new slice. The isolation model
  was reviewed and accepted for enterprise rollout.</p>

  <h2>Lessons</h2>
  <ul>
    <li><strong>Decide tenant isolation before the second customer.</strong> Retrofitting
    an owner scope into a primary key is a migration; designing it in is a column.</li>
    <li><strong>Two implementations of one hash will drift</strong> unless a parity test
    holds them together.</li>
    <li><strong>Reuse is a platform property you design in</strong>, and it is directly
    measurable — which makes it one of the few architecture arguments you can settle with
    a number.</li>
  </ul>
`,
  },

  {
    slug: 'case-studies/geospatial-site-suitability',
    crumb: 'Geospatial site suitability',
    parent: PARENT,
    title: 'Continental-Scale Site Suitability Scoring',
    h1: 'Scoring 29.7 million rows of the United States, live',
    description:
      'A site-suitability platform for US AI datacenters at H3 resolution 7 — about 1.5 million hexagons, a dozen normalised infrastructure layers, and weighted scoring recomputed as the user moves the sliders.',
    published: '2026-08-29',
    about: ['Geospatial Analysis', 'Data Architecture', 'AI Platforms'],
    related: [
      { slug: 'enterprise-ai-architecture', label: 'Enterprise AI Architecture', note: 'governed data foundations at scale.' },
      { slug: 'case-studies/mcp-product', label: 'A product with its own MCP server', note: 'the other build I own outright.' },
    ],
    body: `
  <div class="answer">
    <p><strong>Where should the next AI datacenter go?</strong> The answer depends on
    power, fibre, water, land, workforce, hazard and politics — and on how much each
    matters to you. This platform scores the continental United States at H3 resolution 7,
    about 1.5 million hexagons, and lets the weighting be changed live.</p>
  </div>

  <h2>Context</h2>
  <p>My own project, so described in full. Roughly 5.16 km² per cell — about 1,275 acres,
  or one campus.</p>

  <h2>Problem</h2>
  <p>Site selection at national scale is a multi-criteria problem where the criteria
  conflict and the weights are contested. Published rankings bake in one opinion. The
  useful tool lets the argument happen on the map.</p>

  <h2>Architecture</h2>
  <ul>
    <li><strong>Ingestion</strong> — per-layer crawlers and loaders, bronze through silver,
    each layer normalised to a common 0–1 scale so weights mean the same thing everywhere.</li>
    <li><strong>Serving</strong> — materialised views over roughly 29.7 million rows, with
    the weighted sum computed per request.</li>
    <li><strong>Front end</strong> — a map with live weight sliders and a viewport-bounded
    query guard.</li>
  </ul>

  <h2>Key decisions</h2>
  <h3>Normalise every layer to 0–1, and never show un-normalised internals</h3>
  <p>Weights are only comparable if the things being weighted are. This is enforced as a
  standing rule rather than a per-layer judgement.</p>
  <h3>Absence semantics decided per layer</h3>
  <p>Every layer must answer whether a missing row means null or zero. Null drops the
  layer from the denominator and excuses the cell; zero-fill makes it dead weight. Getting
  this wrong is silent and changes every score.</p>
  <h3>Quality caps that a preference cannot lift</h3>
  <p>Some layers are capped because the underlying data is weak, not because the topic is
  unimportant. A user preference can move a weight within the cap but cannot exceed it,
  so poor data cannot be promoted by enthusiasm.</p>
  <h3>Pinned colour domain</h3>
  <p>The palette breakpoints are calibrated against the score distribution and pinned.
  Making them dynamic would mean the same cell changes colour as the dataset grows.</p>

  <h2>Scale and delivery</h2>
  <p>Around 1.5 million cells at resolution 7, about 29.7 million rows. CI runs backend
  lint and tests, and separately applies every migration against a clean database — the
  cheapest guard against a migration that only works on a developer's laptop.</p>

  <h2>Lessons</h2>
  <ul>
    <li><strong>Rate limits are an architecture constraint.</strong> One layer was first
    written to sample point by point, which meant thousands of requests against a free
    public service and a crawler that ground to a halt. Concurrency and retries both made
    it worse. The fix was a different access pattern, not more parallelism.</li>
    <li><strong>Never tune toward incumbent rankings.</strong> Reproducing the existing
    datacenter map would be the one failure this tool could not survive — it would
    validate the status quo rather than inform a decision.</li>
    <li><strong>A proxy that is convenient is not a proxy that is correct.</strong> Land
    cost sourced from residential property values prices the wrong thing, and diverges
    most exactly where campuses actually get built.</li>
  </ul>
`,
  },

  {
    slug: 'case-studies/mcp-product',
    crumb: 'MCP-driven product',
    parent: PARENT,
    title: 'A Product With Its Own MCP Server',
    h1: 'When the database is the API, and an AI client is a first-class user',
    description:
      'A ticketing product where PostgREST generates the REST API from the schema, row-level security carries authorisation, and the web app and an MCP server are two clients of the same API.',
    published: '2026-08-29',
    about: ['Model Context Protocol', 'Full-Stack Product Engineering', 'API Design'],
    related: [
      { slug: 'agentic-ai', label: 'Agentic AI', note: 'why MCP changes the integration question.' },
      { slug: 'case-studies/geospatial-site-suitability', label: 'Continental-scale site suitability', note: 'the other build I own outright.' },
    ],
    body: `
  <div class="answer">
    <p><strong>Choosing a stack where the database generates the API removes most of what
    would otherwise be written by hand.</strong> This ticketing product — board, comment
    threads, subtasks, and an MCP server so it can be driven from an AI client — came
    together in an evening, and is in daily use.</p>
  </div>

  <h2>Context</h2>
  <p>My own product, so described in full. I needed ticketing I could drive from an AI
  client while working, rather than switching tools to record what I had just decided.</p>

  <h2>Architecture</h2>
  <p>The load-bearing decision is that there is no hand-written CRUD layer:</p>
  <ul>
    <li>Product tables live in a dedicated Postgres schema.</li>
    <li><strong>PostgREST generates the REST API from that schema.</strong></li>
    <li><strong>Row-level security carries authorisation</strong> — 20 policies, enforced
    by the database rather than by application code.</li>
    <li>The web application and the MCP server are <strong>two clients of the same
    API</strong>, so the MCP server adds tool definitions and almost no logic.</li>
  </ul>

  <h2>Why this is fast, and it is not mainly the AI</h2>
  <p>A ticketing app is mostly CRUD plus authorisation. Conventionally that means
  controllers per entity, serializers, auth middleware, per-endpoint permission checks and
  an ORM layer — thousands of lines for eight tables. Here the schema <em>is</em> the API
  and the policies <em>are</em> the authorisation model. Generation made writing the SQL
  fast; the architecture made that SQL sufficient.</p>

  <h2>Scale and delivery</h2>
  <p>Eight tables, 20 row-level security policies, an MCP server, full authentication
  flows. Ships to Vercel with preview-on-pull-request and production-on-main. In real use,
  not a demo.</p>

  <h2>Tradeoffs</h2>
  <table>
    <thead><tr><th>Decision</th><th>Bought</th><th>Cost</th></tr></thead>
    <tbody>
      <tr><td>Database-generated API</td><td>No CRUD layer to write or keep in sync</td><td>The schema becomes the public contract; renaming is a breaking change</td></tr>
      <tr><td>Authorisation in row-level security</td><td>One enforcement point, impossible to route around</td><td>A wrong policy fails silently by returning fewer rows, never an error</td></tr>
      <tr><td>MCP server as a peer client</td><td>An AI client is a first-class user</td><td>Tool contracts need the same care as a public API</td></tr>
    </tbody>
  </table>

  <h2>Honest limitation</h2>
  <p>Test coverage is thin relative to 20 row-level security policies, and RLS is exactly
  where a multi-tenant bug hides silently — a wrong policy returns someone else's rows
  rather than an error. Cross-tenant policy tests are the next work, and I would rather
  state that than let the build imply a rigour it has not yet earned.</p>

  <h2>Lessons</h2>
  <ul>
    <li><strong>Pick the stack that deletes the work</strong>, rather than the stack you
    can write fastest.</li>
    <li><strong>Silent authorisation failures need tests, not review.</strong> Nothing
    throws when a policy is wrong.</li>
    <li><strong>An MCP server is a product surface</strong>, and deserves the same contract
    discipline as any other API.</li>
  </ul>
`,
  },
];
