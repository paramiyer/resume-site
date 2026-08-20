#!/usr/bin/env node
/**
 * build-stats.mjs — regenerate the GitHub-derived sections of index.html.
 *
 * Zero dependencies, Node 20+ (native fetch). Run by .github/workflows/static.yml
 * every Monday 05:00 UTC (09:00 Asia/Dubai), and runnable locally with no token.
 *
 * Design notes worth knowing before editing:
 *
 *  - The repos carry NO descriptions and NO topics on GitHub. Anything rendered
 *    from `repo.description` or `repo.topics` would come out blank, so the prose
 *    lives in CATALOGUE below and only volatile facts (language, last push,
 *    language byte mix) are fetched live.
 *
 *  - Only the regions between <!-- GEN:x --> and <!-- /GEN:x --> in index.html are
 *    rewritten. Hand-written prose outside those markers is never touched.
 *
 *  - Deliberately no stars / followers / streaks / contribution calendar. The
 *    public numbers are zero and the real work lives in Azure DevOps, so counting
 *    would understate rather than evidence. We show what the code demonstrates.
 */

import { writeFile, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const USER = 'paramiyer';
const TZ = 'Asia/Dubai';

/* ── Curated catalogue ─────────────────────────────────────────────────────
 * Blurbs are Param's own, lifted from the previous hand-written index.html.
 * `caps` drives the capability matrix. Repos absent here still surface in the
 * live repo list, they just don't get a curated card.
 * ------------------------------------------------------------------------- */
const CATALOGUE = {
  'pii-schema-classifier': {
    title: 'AI Schema Classifier',
    blurb:
      'Open-source tool for automated PII and DAMA data-classification audits using LLMs, delivering over 94% cost saving against manual review.',
    caps: ['llm', 'governance'],
    flagship: true,
  },
  'multi-agent-enterprise-reporting-PMO-planner': {
    title: 'Multi-Agent AI PMO Planner',
    blurb:
      'Multi-agent orchestration system that generates project plans across six technology functions, producing four delivery options with different timelines and costs.',
    caps: ['agents', 'llm'],
    flagship: true,
  },
  'AI_Car_Diagnosis_Assistant': {
    title: 'AI Car Diagnosis & Repair Assistant',
    blurb:
      'From user-described symptoms, runs a constrained-domain search and returns grounded inferences from an LLM. Streamlit front end.',
    caps: ['llm'],
  },
  'Time_series_LSTM_Autoencoder': {
    title: 'LSTM Autoencoder for Time Series',
    blurb:
      'Deep learning for synthetic data generation, anomaly detection and missing-value imputation — applied to temperature and financial series.',
    caps: ['timeseries'],
    flagship: true,
  },
  'Pharma_Demand-Forecasting-Optimization-Pipeline': {
    title: 'Supply Chain Engagement Optimisation',
    blurb:
      'ML and optimisation pipeline over CRM activity data, combining SHAP-based explainability with Google OR-Tools for constrained resource allocation.',
    caps: ['timeseries', 'optimisation'],
    flagship: true,
  },
  'Semantic_Segmentation': {
    title: 'Semantic Segmentation',
    blurb: 'Deep-learning semantic segmentation for pixel-level image analysis.',
    caps: ['vision'],
  },
  'Ride-Hailing': {
    title: 'Ride-Hailing Customer Satisfaction',
    blurb:
      'Analyses ride-hailing marketplace data to extract satisfaction drivers and improve service efficiency.',
    caps: ['optimisation'],
  },
  'Linkedin-Job-Scrapper': {
    title: 'LinkedIn Job Scraper',
    blurb: 'Collects job postings for labour-market and skills-demand analysis.',
    caps: ['dataeng'],
  },

  /* Private repos. Not visible to the API and not linkable — rendered as cards
   * without a URL so the page never ships a 404. Facts here are static. */
  'myBob': {
    title: 'myBob — Local-First Analytics Dashboard',
    blurb:
      'Personal analytics and insight dashboard over an MCP server, running entirely locally — no central hosting. TypeScript monorepo with a browser SPA and its own API layer.',
    caps: ['tooling', 'dataeng'],
    private: true, language: 'TypeScript', since: '2026',
    flagship: true,
  },
  'coach-slot': {
    title: 'CoachSlot — Booking & Billing Mini-App',
    blurb:
      'Google Workspace mini-app for coach-owned booking: slot management, calendar integration, tokenised email confirmations and session-based invoicing.',
    caps: ['tooling'],
    private: true, language: 'JavaScript', since: '2026',
  },
};

/* Capability areas, in display order. `proves` is the claim the code backs up. */
const CAPABILITIES = [
  { id: 'llm',         name: 'LLMs & Applied GenAI',       proves: 'Production LLM systems: grounding, structured extraction, cost control' },
  { id: 'agents',      name: 'Multi-Agent Orchestration',  proves: 'Decomposing work across specialised agents with an orchestration layer' },
  { id: 'timeseries',  name: 'Time Series & Forecasting',  proves: 'Sequence models for forecasting, anomaly detection and imputation' },
  { id: 'optimisation',name: 'Optimisation & OR',          proves: 'Constrained allocation under real business limits, not just prediction' },
  { id: 'vision',      name: 'Computer Vision',            proves: 'Pixel-level scene understanding with deep networks' },
  { id: 'governance',  name: 'Data Governance & PII',      proves: 'Automated classification of sensitive data estates at audit scale' },
  { id: 'tooling',     name: 'Agent Tooling & Internal Products', proves: 'End-to-end internal tools: MCP integrations, scheduling, analytics surfaces' },
  { id: 'dataeng',     name: 'Data Acquisition',           proves: 'Building the collection layer that feeds the models' },
];

/* Language swatches — kept in step with the palette in index.html. */
const LANG_COLOUR = {
  Python: '#3572A5', 'Jupyter Notebook': '#DA5B0B', HTML: '#e34c26', JavaScript: '#f1e05a',
  TypeScript: '#3178c6', CSS: '#563d7c', Shell: '#89e051', R: '#198CE7', Dockerfile: '#384d54',
};

const EXCLUDE = new Set(['resume-site', 'pythonSamples']);

/* ── fetch helpers ───────────────────────────────────────────────────────── */

const token = process.env.GITHUB_TOKEN || '';

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'resume-site-stats',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!res.ok) {
    throw new Error(`GitHub ${res.status} ${res.statusText} for ${path}`);
  }
  return res.json();
}

/* ── formatting ──────────────────────────────────────────────────────────── */

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* Recent work gets a relative age; anything over a year old shows its year.
 * "updated 1.3y ago" reads as neglected where "updated 2025" reads as dated —
 * same fact, and the reader can still do the arithmetic. */
function relativeAge(iso) {
  const d = new Date(iso);
  const days = Math.floor((Date.now() - d.getTime()) / 86400000);
  if (days < 1) return 'today';
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return String(d.getUTCFullYear());
}

const swatch = (lang) =>
  `<span class="dot" style="background:${LANG_COLOUR[lang] || '#8b949e'}" aria-hidden="true"></span>`;

/* ── renderers ───────────────────────────────────────────────────────────── */

function renderMetrics({ projectCount, languageCount, capabilityCount }) {
  const tiles = [
    { v: '20+',      l: 'Years leading AI &amp; data',  src: 'career' },
    { v: 'AED 90M+', l: 'Enterprise value delivered',   src: 'career' },
    { v: projectCount,   l: 'Open-source AI/ML projects', src: 'live' },
    { v: capabilityCount, l: 'Capability areas evidenced', src: 'live' },
  ];
  return `<div class="metrics">
${tiles
  .map(
    (t) => `      <div class="metric">
        <div class="metric-v" data-count="${typeof t.v === 'number' ? t.v : ''}">${t.v}</div>
        <div class="metric-l">${t.l}</div>
        <div class="metric-src metric-src--${t.src}">${t.src === 'career' ? 'career' : 'live from GitHub'}</div>
      </div>`
  )
  .join('\n')}
    </div>`;
}

function renderCapability(byCapability) {
  const blocks = CAPABILITIES.filter((c) => byCapability[c.id]?.length).map((c) => {
    const repos = byCapability[c.id]
      .map((r) =>
        r.url
          ? `<a class="chip" href="${esc(r.url)}" target="_blank" rel="noopener">${swatch(r.language)}${esc(r.title)}</a>`
          : `<span class="chip chip--private">${swatch(r.language)}${esc(r.title)}</span>`
      )
      .join('\n            ');
    return `      <div class="cap">
        <h3 class="cap-name">${esc(c.name)}</h3>
        <p class="cap-proves">${esc(c.proves)}</p>
        <div class="chips">
            ${repos}
        </div>
      </div>`;
  });
  return `<div class="caps">\n${blocks.join('\n')}\n    </div>`;
}

function renderProjects(items) {
  const cards = items
    .map((r) => {
      const heading = r.url
        ? `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.title)}</a>`
        : esc(r.title);
      const when = r.pushed_at ? `updated ${relativeAge(r.pushed_at)}` : `${esc(r.since || '')}`;
      const tag = r.url ? '' : '<span class="sep">·</span><span class="tag-private">private repo</span>';
      return `      <article class="card${r.flagship ? ' card--flagship' : ''}">
        <h3 class="card-t">${heading}</h3>
        <p class="card-d">${esc(r.blurb)}</p>
        <div class="card-m">${swatch(r.language)}<span>${esc(r.language || 'Mixed')}</span><span class="sep">·</span><span>${when}</span>${tag}</div>
      </article>`;
    })
    .join('\n');
  return `<div class="cards">\n${cards}\n    </div>`;
}

/**
 * Language mix, weighted by PROJECT COUNT rather than bytes.
 *
 * Byte-weighting is actively misleading here: .ipynb files embed base64 image
 * outputs, so the byte split came out 98.3% Jupyter / 1.7% Python — a near-solid
 * bar implying notebooks are all there is. Counting projects gives the honest
 * shape, and needs no per-repo API calls.
 */
function renderLanguages(totals) {
  const sum = Object.values(totals).reduce((a, b) => a + b, 0) || 1;
  const rows = Object.entries(totals).sort((a, b) => b[1] - a[1]);

  const bar = rows
    .map(
      ([lang, v]) =>
        `<span class="seg" style="width:${((v / sum) * 100).toFixed(2)}%;background:${
          LANG_COLOUR[lang] || '#8b949e'
        }" title="${esc(lang)} ${((v / sum) * 100).toFixed(1)}%"></span>`
    )
    .join('');

  const key = rows
    .map(
      ([lang, v]) =>
        `<li>${swatch(lang)}${esc(lang)} <span class="pct">${v} ${v === 1 ? 'project' : 'projects'}</span></li>`
    )
    .join('\n        ');

  return `<div class="langbar" role="img" aria-label="Primary language across ${sum} projects">${bar}</div>
      <ul class="langkey">
        ${key}
      </ul>`;
}

/* ── injection ───────────────────────────────────────────────────────────── */

function inject(html, marker, body) {
  const re = new RegExp(`(<!-- GEN:${marker} -->)([\\s\\S]*?)(<!-- /GEN:${marker} -->)`);
  if (!re.test(html)) throw new Error(`Marker GEN:${marker} not found in index.html`);
  return html.replace(re, `$1\n    ${body}\n    $3`);
}

/* ── main ────────────────────────────────────────────────────────────────── */

async function main() {
  const all = await gh(`/users/${USER}/repos?per_page=100&type=owner&sort=pushed`);
  const live = new Map(
    all.filter((r) => !r.fork && !r.archived && !EXCLUDE.has(r.name)).map((r) => [r.name, r])
  );

  // Build from the catalogue, merging live facts on top. Public entries that have
  // vanished from GitHub (renamed/deleted) are dropped rather than rendered dead.
  const items = [];
  for (const [name, meta] of Object.entries(CATALOGUE)) {
    const l = live.get(name);
    if (!l && !meta.private) {
      console.warn(`  ! catalogue entry '${name}' not found on GitHub — skipped`);
      continue;
    }
    items.push({
      name,
      title: meta.title,
      blurb: meta.blurb,
      caps: meta.caps || [],
      flagship: !!meta.flagship,
      language: l?.language || meta.language || null,
      url: l?.html_url || null,
      pushed_at: l?.pushed_at || null,
      since: meta.since || null,
    });
  }

  // Flagship first, then most-recently pushed. Private entries have no push date
  // and sort last within their group.
  items.sort(
    (a, b) =>
      Number(b.flagship) - Number(a.flagship) ||
      new Date(b.pushed_at || 0) - new Date(a.pushed_at || 0)
  );

  // Primary language per project. See renderLanguages() for why this is counted
  // by project rather than by bytes.
  const totals = {};
  for (const r of items) if (r.language) totals[r.language] = (totals[r.language] || 0) + 1;

  const byCapability = {};
  for (const r of items) for (const cap of r.caps) (byCapability[cap] ||= []).push(r);

  const capabilityCount = CAPABILITIES.filter((c) => byCapability[c.id]?.length).length;
  const publicCount = items.filter((i) => i.url).length;

  const refreshed = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: TZ,
  }).format(new Date());

  const snapshot = {
    generated_at: new Date().toISOString(),
    refreshed_label: refreshed,
    project_count: items.length,
    public_project_count: publicCount,
    capability_count: capabilityCount,
    languages: totals,
    projects: items.map(({ name, url, language, pushed_at, caps }) => ({
      name, url, language, pushed_at, caps,
    })),
  };
  await writeFile(join(ROOT, 'data', 'github-stats.json'), JSON.stringify(snapshot, null, 2) + '\n');

  let html = await readFile(join(ROOT, 'index.html'), 'utf8');
  html = inject(html, 'METRICS', renderMetrics({
    projectCount: publicCount,
    languageCount: Object.keys(totals).length,
    capabilityCount,
  }));
  html = inject(html, 'CAPABILITY', renderCapability(byCapability));
  html = inject(html, 'PROJECTS', renderProjects(items));
  html = inject(html, 'LANGUAGES', renderLanguages(totals));
  html = inject(html, 'REFRESHED', `<span class="refreshed">last refresh ${refreshed}</span>`);
  await writeFile(join(ROOT, 'index.html'), html);

  console.log(
    `ok — ${items.length} projects (${publicCount} public), ${capabilityCount} capability areas, ` +
    `${Object.keys(totals).length} languages, refreshed ${refreshed}`
  );
}

main().catch((err) => {
  console.error(`build-stats failed: ${err.message}`);
  process.exit(1);
});
