/**
 * Page content for the expertise routes.
 *
 * Written from first-hand enterprise delivery. Every lesson here is a pattern,
 * not a client disclosure: no employer, client, system or ticket is named, and
 * nothing is included that would identify a specific engagement.
 *
 * Format follows the retrieval brief — each page opens with the question it
 * answers and a direct answer, so a section lifted out of context still carries
 * its own claim.
 */

export const SITE = 'https://paramiyer.github.io/resume-site/';

export const NAV = [
  { slug: '', label: 'Home' },
  { slug: 'enterprise-ai-architecture', label: 'Enterprise AI Architecture' },
  { slug: 'enterprise-rag', label: 'Production RAG' },
  { slug: 'agentic-ai', label: 'Agentic AI' },
  { slug: 'about', label: 'About' },
];

export const PAGES = [
  {
    slug: 'enterprise-ai-architecture',
    crumb: 'Enterprise AI Architecture',
    title: 'Enterprise AI Architecture',
    h1: 'Enterprise AI architecture: the layer most pilots never build',
    description:
      'What enterprise AI architecture actually consists of, why GenAI pilots stall before production, and the control plane that decides whether a regulated organisation can deploy anything at all.',
    published: '2026-08-29',
    about: ['Enterprise AI Architecture', 'AI Platforms', 'Data Governance'],
    related: [
      { slug: 'enterprise-rag', label: 'Production RAG', note: 'what changes when retrieval has to pass a risk review.' },
      { slug: 'agentic-ai', label: 'Agentic AI', note: 'when an agent is the right shape, and what the platform underneath needs.' },
    ],
    body: `
  <div class="answer">
    <p><strong>Enterprise AI architecture is four layers, not three.</strong> A governed
    data platform, a model and retrieval layer, and the applications and APIs on top —
    then a control plane that makes the first three deployable in a regulated
    organisation. Most pilots build three layers well and never build the fourth, which
    is why they stall at exactly the point where they meet risk, security and audit.</p>
  </div>

  <h2>The four layers</h2>
  <p>Stated plainly, so the rest of the page has something to refer to:</p>
  <ol>
    <li><strong>Governed data.</strong> A lakehouse or equivalent with layered
    refinement, a catalogue that knows what every table is, and access control that
    an auditor can read.</li>
    <li><strong>Models and retrieval.</strong> Model access, grounding, retrieval,
    caching, evaluation. This is the layer everyone means when they say "AI".</li>
    <li><strong>Applications and APIs.</strong> The services and interfaces where the
    output actually reaches a person who makes a decision.</li>
    <li><strong>The control plane.</strong> Guardrails, model risk, audit, human
    sign-off, and the deployment path that carries all of it. This is the layer that
    decides whether anything above it can go live.</li>
  </ol>

  <h2>Why GenAI pilots stall</h2>
  <p>A pilot is judged on whether the output is good. A platform is judged on whether
  the organisation can defend it. Those are different tests, and the second one is
  usually met for the first time in a risk review, months after the demo.</p>
  <p>The failure is rarely model quality. It is that nobody can answer: which data did
  this see, who is allowed to run it, what happens when it is wrong, who signed off,
  and how would we know if it silently degraded. Those questions are answered by
  architecture, not by prompt engineering.</p>

  <h2>What "governed" means in practice</h2>
  <p>Governance fails when it lives in a document. It works when it lives in the
  runtime and fails the build. Three patterns that have earned their place:</p>
  <h3>A sanctioned write path, and only one</h3>
  <p>Every write into the platform goes through a shared library that enforces schema,
  naming, partitioning and cataloguing. Direct writes are prohibited, and a conformance
  test in CI proves nobody took a shortcut. The value is not tidiness — it is that
  provenance is guaranteed rather than hoped for.</p>
  <h3>A canonical source registry</h3>
  <p>One machine-readable list of every source and entity, with schema stubs required
  for each. Adding a source becomes a reviewed change rather than a pipeline someone
  wrote on a Friday. On a platform I designed, this registry reached 112 sources and
  remained the thing that made the estate legible.</p>
  <h3>Default-deny, enforced at boot</h3>
  <p>Access rules are declared centrally, and the service <em>refuses to start</em> if
  any route is uncatalogued. That single design choice converts "we think everything is
  protected" into "it cannot run unless everything is protected". It is the cheapest
  strong control I know of.</p>

  <h2>The decision that shapes everything else</h2>
  <p>Shared platform, or one stack per use case? This is the architectural fork, and
  the honest answer depends on how many use cases you actually expect.</p>
  <table>
    <thead><tr><th>&nbsp;</th><th>Shared platform</th><th>Per-use-case stacks</th></tr></thead>
    <tbody>
      <tr><th>Time to first pilot</th><td>Slower</td><td>Faster</td></tr>
      <tr><th>Time to fifth use case</th><td>Much faster</td><td>Linear, then worse</td></tr>
      <tr><th>Governance</th><td>Once, centrally</td><td>Re-argued every time</td></tr>
      <tr><th>Failure mode</th><td>Central team becomes the bottleneck</td><td>Estate fragments; nothing is auditable</td></tr>
      <tr><th>Right when</th><td>Three or more use cases are real</td><td>Genuinely exploring whether AI helps at all</td></tr>
    </tbody>
  </table>
  <p>The trap is choosing per-use-case stacks for speed, succeeding, and then
  discovering the second and third teams cannot reuse anything. The mitigation is not
  to over-build early — it is to put the sanctioned write path and the registry in
  place at use case one, when they cost almost nothing.</p>

  <h2>Failure modes worth designing against</h2>
  <p>These are drawn from production, not from theory:</p>
  <ul>
    <li><strong>Documentation drift.</strong> On any fast-moving estate, the code and
    the docs disagree within months. Treat the code, the architecture decision records
    and recent history as authoritative, and say so explicitly — otherwise a new joiner
    builds against a description of a system that no longer exists.</li>
    <li><strong>A safety default that is unsafe in production.</strong> A mock-data flag
    defaulting to <em>on</em> meant a service happily served fabricated data in
    production, because production set neither the variable nor the secret. Defaults
    should fail closed and loudly, never quietly and plausibly.</li>
    <li><strong>Silent weakening.</strong> An enrichment step that degrades to null on
    timeout rather than erroring keeps the page up, and keeps the gap invisible. Decide
    per field whether missing means "unknown" or "zero" — they are not the same, and the
    difference changes every downstream calculation.</li>
    <li><strong>Unbounded human-review queues.</strong> Review surfaces must never
    silently disappear. Mark rows resolved, never delete, and mirror them for audit.</li>
  </ul>

  <h2>Conclusion</h2>
  <p>If you are choosing where to spend architectural effort on an enterprise AI
  programme, spend it on the control plane first. The data platform and the model layer
  have good vendors and good defaults. The layer that decides whether a regulated
  organisation can actually deploy — provenance, enforced access, evaluation gates,
  human sign-off — has to be designed, and it is the layer that determines whether your
  pilot becomes a platform or a demo people remember fondly.</p>
`,
  },

  {
    slug: 'enterprise-rag',
    crumb: 'Production RAG',
    title: 'Production RAG in Regulated Enterprises',
    h1: 'Production RAG: retrieval is the easy part',
    description:
      'What changes when a retrieval-augmented system has to survive a risk review: grounding contracts, what belongs in a cache key, evaluation as a release gate, and where human sign-off is not optional.',
    published: '2026-08-29',
    about: ['Retrieval-Augmented Generation', 'Generative AI', 'AI Governance'],
    related: [
      { slug: 'enterprise-ai-architecture', label: 'Enterprise AI Architecture', note: 'the control plane a RAG system has to fit into.' },
      { slug: 'agentic-ai', label: 'Agentic AI', note: 'when retrieval alone is not enough.' },
    ],
    body: `
  <div class="answer">
    <p><strong>In a regulated enterprise, retrieval quality is rarely what blocks
    release.</strong> What blocks release is that nobody can prove what the model saw,
    that a prompt change silently served stale answers from cache, that there is no
    regression gate, and that a system giving advice on a customer has no human sign-off.
    Those are architecture problems, and they are solvable.</p>
  </div>

  <h2>Start with a grounding contract</h2>
  <p>Write it down, in the prompt and in the design: <em>the model has never heard of
  these entities, and every claim it makes must trace to context supplied in this
  request.</em> Anything the model appears to know that was not injected is a defect,
  not a bonus.</p>
  <p>That single sentence forces useful architecture. Context has to be assembled
  deliberately from known-good sources, which means those sources have to exist, be
  addressable and be trustworthy. It also makes hallucination testable: you can ask
  whether a claim appears in the supplied context, which you cannot do if the boundary
  was never drawn.</p>

  <h2>Cache identity is a correctness problem, not a performance one</h2>
  <p>Caching LLM output is close to mandatory at enterprise volume — a cache hit turns a
  multi-second, multi-call context build into a single fast read. The question is what
  belongs in the key.</p>
  <p>A cache key that includes the entity and the model but <strong>not the prompt
  text</strong> looks fine and behaves fine, right up until someone edits a prompt file.
  From then on the system serves answers generated by the previous prompt, indefinitely,
  with no error and no signal. I have seen this exact shape in production, where the
  mitigation was a documented instruction to truncate the cache manually after any prompt
  change — which is a process fix for an architecture defect.</p>
  <div class="answer">
    <p>If a change would alter the output, it belongs in the cache key. In practice that
    means the composed prompt content, the trust boundary, the model tier, and the
    caller-specific inputs that personalise the answer. Anything less and the cache is a
    correctness risk wearing a performance disguise.</p>
  </div>

  <h2>Evaluation is a release gate, not a dashboard</h2>
  <p>A golden-query set — real questions with known-good answers — run before release
  turns "the demo looked fine" into a pass/fail. It does not need to be large. It needs
  to be representative, versioned alongside the prompts, and blocking.</p>
  <p>The complement is a permanent regression test for every defect ever fixed. When a
  wrong answer is corrected, the case that produced it becomes a test. Over a year that
  set becomes the most valuable artefact in the system, because it encodes every way
  this particular domain has already surprised you.</p>

  <h2>Advisory until signed off</h2>
  <p>For any output that affects a person — a screening result, a risk flag, an
  eligibility decision — the architectural default should be that the system produces an
  <em>advisory</em> result and a human confirms it. That means the data model needs a
  review state from day one, and review rows are marked resolved rather than deleted, so
  the audit trail survives.</p>
  <p>Retrofitting this is expensive. Designing for it costs one column and one queue.</p>

  <h2>Design decisions and their tradeoffs</h2>
  <table>
    <thead><tr><th>Decision</th><th>Choose this when</th><th>Cost</th></tr></thead>
    <tbody>
      <tr><td>Cache-first context build</td><td>Context assembly is expensive and answers are reusable</td><td>Cache invalidation becomes a correctness concern</td></tr>
      <tr><td>Fail-soft enrichment</td><td>A secondary field should not fail the whole response</td><td>Gaps become invisible unless surfaced deliberately</td></tr>
      <tr><td>Renormalise on missing inputs</td><td>A score must not imply data that is absent</td><td>Scores move as coverage changes; needs explaining</td></tr>
      <tr><td>Web-grounded retrieval</td><td>The answer depends on facts outside the enterprise</td><td>A new egress path, and a new review surface</td></tr>
    </tbody>
  </table>

  <h2>When not to use RAG</h2>
  <ul>
    <li><strong>The question is deterministic.</strong> If it can be answered by a query,
    answer it by a query. A cascade of exact, deterministic responses with the language
    model only as fallback is faster, cheaper and auditable.</li>
    <li><strong>The corpus is small and stable.</strong> Fitting it in context is simpler
    than operating a retrieval stack.</li>
    <li><strong>The output must be exactly reproducible.</strong> Regulatory reporting
    wants a query and a lineage, not a generated paragraph.</li>
  </ul>

  <h2>Conclusion</h2>
  <p>Production RAG in a regulated environment is mostly not a retrieval problem. Get the
  grounding contract, the cache identity, the evaluation gate and the sign-off model
  right, and the retrieval layer becomes the straightforward part. Get them wrong and the
  retrieval can be excellent while the system remains undeployable.</p>
`,
  },

  {
    slug: 'agentic-ai',
    crumb: 'Agentic AI',
    title: 'Enterprise Agentic AI Platforms',
    h1: 'Agentic AI: most things called agents should not be',
    description:
      'When an agent is genuinely the right shape, what an enterprise agent platform needs underneath it — prompt identity, data reuse and tenant isolation — and why MCP changes the integration question.',
    published: '2026-08-29',
    about: ['Agentic AI', 'Model Context Protocol', 'AI Platforms'],
    related: [
      { slug: 'enterprise-rag', label: 'Production RAG', note: 'the grounding and evaluation an agent still needs.' },
      { slug: 'enterprise-ai-architecture', label: 'Enterprise AI Architecture', note: 'the platform an agent platform sits inside.' },
    ],
    body: `
  <div class="answer">
    <p><strong>Most enterprise "agents" are pipelines with a language model in them, and
    they should stay that way.</strong> An agent earns its cost when the work is genuinely
    open-ended — unknown number of steps, unknown tools, a real decision about what to do
    next. Everything else is better served by a deterministic cascade that falls back to a
    model only when it fails to match.</p>
  </div>

  <h2>Deterministic first</h2>
  <p>A pattern that has held up well: classify intent, then try a series of exact,
  deterministic responders in priority order, and only compose an answer with a language
  model when none of them match. The deterministic paths are fast, free, testable and
  explainable. The model handles the tail.</p>
  <p>This inverts the usual instinct, which is to let the model decide everything and add
  guardrails afterwards. Starting deterministic means the expensive, non-deterministic
  path is the exception you can afford to scrutinise.</p>

  <h2>What an agent platform needs underneath it</h2>
  <p>Once agents are real, three platform problems appear that single-agent demos never
  surface.</p>

  <h3>1. Prompt and model as part of data identity</h3>
  <p>If an agent's output is cached or reused, the cache key has to include the composed
  prompt content, the trust boundary and the model tier — keyed on content, not on a
  registry version number. Otherwise toggling a prompt registry on or off, or changing
  model tier, silently reuses results that a different system produced. Content-addressed
  prompt identity makes that class of bug impossible rather than unlikely.</p>

  <h3>2. Reuse, or you pay for the same work forever</h3>
  <p>Agents that re-fetch everything on every run are the default and are ruinously
  wasteful. The pattern that fixes it: persist what was fetched, and on the next request
  check coverage <em>before</em> fetching. Two distinct match modes matter —
  <strong>identity</strong> (the same request, so serve the same answer) and
  <strong>coverage</strong> (a wider request that contains what you already have, so fetch
  only the gap and accumulate).</p>
  <p>On a multi-agent platform I designed this reduced repeat runs to zero re-fetch, with
  gap-only retrieval when the ask widened. The architectural cost is real: coverage has to
  be derived from the stored data rather than tracked separately, or the tracker and the
  truth drift apart.</p>

  <h3>3. Tenant isolation belongs in the identity, not the query</h3>
  <p>The moment two clients share a platform, reuse keyed purely on data content will
  collide — the same scenario run by two customers resolves to the same row. The fix is to
  fold an owner scope into both the identity hash and the primary key, so isolation is
  structural rather than a filter someone might forget. Genuinely global reference data
  can stay shared and byte-identical; everything else is scoped.</p>
  <p>This is worth deciding before the second customer, not after.</p>

  <h2>MCP changes the integration question</h2>
  <p>The Model Context Protocol makes "how does an AI client reach this system" a
  first-class design question rather than an afterthought. The pattern I have found
  cleanest: let the database generate the API, and treat the web application and the MCP
  server as two clients of that same API.</p>
  <p>On a product I built this way, the schema generates the REST layer and row-level
  security carries authorisation, so the MCP server adds tool definitions and almost no
  logic. The whole product — board, comments, subtasks, an MCP server and preview-on-push
  deployment — came together in an evening, not because generation is magic but because
  choosing a stack where the database <em>is</em> the API removes most of what would
  otherwise be written by hand.</p>
  <table>
    <thead><tr><th>&nbsp;</th><th>MCP server</th><th>Conventional REST integration</th></tr></thead>
    <tbody>
      <tr><td>Consumer</td><td>An AI client, interactively</td><td>Another service, programmatically</td></tr>
      <tr><td>Contract</td><td>Tools with descriptions the model reads</td><td>A schema humans read</td></tr>
      <tr><td>Auth</td><td>Still yours to solve — the protocol does not grant it</td><td>Established patterns</td></tr>
      <tr><td>Best for</td><td>Letting a person drive your system through an assistant</td><td>Machine-to-machine at volume</td></tr>
    </tbody>
  </table>

  <h2>When not to build an agent</h2>
  <ul>
    <li>The workflow has a fixed number of known steps. Write the pipeline.</li>
    <li>Every step needs an audit trail with a named approver. Agency and accountability
    pull against each other; be explicit about which you need.</li>
    <li>Latency matters more than flexibility. Multi-step reasoning is slow, and users
    notice.</li>
    <li>You cannot yet evaluate the output. An unevaluable agent is an unfalsifiable one.</li>
  </ul>

  <h2>Conclusion</h2>
  <p>Agentic architecture is mostly ordinary distributed-systems work wearing new
  vocabulary: identity, caching, isolation, cost and evaluation. The interesting decisions
  are about what deserves agency at all, and what the platform beneath guarantees when the
  answer is "this part does".</p>
`,
  },

  {
    slug: 'about',
    crumb: 'About',
    type: 'AboutPage',
    title: 'About Parameshwaran Iyer',
    titleTag: 'About Parameshwaran Iyer | Principal AI Architect',
    h1: 'About',
    description:
      'Parameshwaran Iyer is a Principal AI Architect and Enterprise AI Leader based in the UAE, working across banking, government, aviation, telecom and industrial enterprises in the GCC.',
    published: '2026-08-29',
    about: ['Enterprise AI Architecture', 'AI Platforms', 'AI Transformation'],
    related: [
      { slug: 'enterprise-ai-architecture', label: 'Enterprise AI Architecture', note: 'how I think about the layers and the control plane.' },
      { slug: 'enterprise-rag', label: 'Production RAG', note: 'what changes under a risk review.' },
    ],
    body: `
  <div class="answer">
    <p>I design, build and scale production AI platforms — from enterprise strategy and
    architecture through to working systems. Based in the UAE, working across the GCC.</p>
  </div>

  <h2>What I do</h2>
  <p>I work at the point where an AI strategy has to become a system that runs. In
  practice that means owning the whole path: the data platform underneath, the models and
  retrieval layer, the APIs and applications on top, and the governance that lets a
  regulated organisation actually deploy any of it.</p>
  <p>Over 20+ years I have done this across banking and financial services, government and
  sovereign entities, aviation, telecom, mobility and manufacturing — as an engineer, as a
  data science leader, and now primarily as an architect.</p>

  <h2>What I am useful for</h2>
  <ul>
    <li>Taking GenAI from pilot to a platform that survives a risk review</li>
    <li>Enterprise AI architecture across data, models, APIs and applications</li>
    <li>Governed retrieval and agentic platforms in regulated environments</li>
    <li>Consolidating fragmented analytics and ML estates onto one governed foundation</li>
    <li>Building the AI engineering function and operating model that keeps it shipping</li>
  </ul>

  <h2>Evidence rather than adjectives</h2>
  <p>Two enterprise AI products taken end-to-end into production for a leading UAE bank.
  AED 50M in annual value from AI and data strategy at a regional technology group. AED
  40M across three optimisation use cases for an aviation group. EUR 8M in savings at a
  global industrial manufacturer, where I founded and scaled a 40-person AI function
  across Europe, the UK and Asia. Driver incentive spend reduced from 10% to 5% of GMV at
  a high-volume consumer marketplace, measured by controlled experiment.</p>

  <h2>Still hands-on</h2>
  <p>I still build. Recent work includes a continental-scale geospatial suitability
  platform scoring roughly 1.5 million hexagonal cells across the United States, and a
  ticketing product with its own Model Context Protocol server so it can be driven
  directly from an AI client. The point is not the projects — it is that I can challenge
  an architecture or an implementation decision on its merits rather than on authority.</p>

  <h2>Background</h2>
  <p>MSc in Industrial Engineering from Pennsylvania State University, covering operations
  research, applied statistics and optimisation; BE in Mechanical Engineering from the
  University of Mumbai. Published research is indexed with 144 citations across 8 works
  and an h-index of 5, refreshed weekly on the homepage from OpenAlex.</p>

  <h2>Conversations I am interested in</h2>
  <p>Principal AI architecture, enterprise GenAI platforms, AI transformation, and AI
  engineering leadership — particularly in banking, government, energy, aviation and
  telecom across the UAE and wider GCC.</p>
`,
  },
];
