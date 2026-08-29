#!/usr/bin/env node
/**
 * build-pages.mjs — render the multi-page routes from content/pages.mjs.
 *
 * Deliberately not a framework. See docs/technical-seo.md for why: this repo's
 * best property is zero dependencies, no lockfile and no install step, and a
 * layout function plus a data array buys most of what a generator would at a
 * fraction of the commitment.
 *
 * `index.html` is NOT rendered here. It stays hand-authored with GEN markers
 * rewritten by build-stats.mjs, so prose written by a human is never at the
 * mercy of a template.
 *
 * Each page gets: a unique title and description, a canonical, OpenGraph and
 * Twitter cards, a TechArticle + BreadcrumbList JSON-LD graph pointing at the
 * one Person entity, and navigation that marks the current page.
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { PAGES, SITE, NAV } from '../content/pages.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const nav = (slug) => `<nav class="nav" aria-label="Primary">
  <a class="nav-brand" href="${slug ? '../' : './'}">Parameshwaran Iyer</a>
  <div class="nav-links">
${NAV.map((n) => {
  const href = slug ? (n.slug ? `../${n.slug}/` : '../') : n.slug ? `${n.slug}/` : './';
  const cur = n.slug === slug ? ' aria-current="page"' : '';
  return `    <a href="${href}"${cur}>${esc(n.label)}</a>`;
}).join('\n')}
  </div>
</nav>`;

function jsonLd(page, updated) {
  const url = SITE + page.slug + '/';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': page.type || 'TechArticle',
        '@id': url + '#article',
        headline: page.title,
        description: page.description,
        url,
        inLanguage: 'en',
        datePublished: page.published,
        dateModified: updated,
        author: { '@id': SITE + '#person' },
        publisher: { '@id': SITE + '#person' },
        mainEntityOfPage: url,
        about: page.about,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': url + '#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: page.crumb, item: url },
        ],
      },
    ],
  };
}

function layout(page, updated) {
  const url = SITE + page.slug + '/';
  const graph = JSON.stringify(jsonLd(page, updated), null, 2);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${esc(page.titleTag || page.title + ' | Parameshwaran Iyer')}</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#0d1117" media="(prefers-color-scheme: dark)">
<meta name="theme-color" content="#f6f8fa" media="(prefers-color-scheme: light)">
<link rel="icon" href="../favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="../apple-touch-icon.png">
<link rel="stylesheet" href="../styles.css">

<meta property="og:type" content="article">
<meta property="og:site_name" content="Parameshwaran Iyer">
<meta property="og:locale" content="en_GB">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:image" content="${SITE}og-image.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${SITE}og-image.png">

<script type="application/ld+json">
${graph}
</` + `script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${nav(page.slug)}
<div class="wrap">
<main id="main">
<article class="article">
  <p class="crumbs"><a href="../">Home</a> · ${esc(page.crumb)}</p>
  <h1>${esc(page.h1)}</h1>
  <p class="byline">By Parameshwaran Iyer · Updated ${updated}</p>
${page.body}
  <div class="related">
    <h2>Related</h2>
    <ul>
${page.related.map((r) => `      <li><a href="../${r.slug}/">${esc(r.label)}</a> — ${esc(r.note)}</li>`).join('\n')}
      <li><a href="../">Back to the portfolio</a> — enterprise outcomes, platforms shipped and the builds behind them.</li>
    </ul>
  </div>
  <p style="margin-top:36px"><strong>Building an enterprise AI or GenAI platform?</strong>
  <a href="mailto:paramiyer@gmail.com">paramiyer@gmail.com</a> ·
  <a href="https://www.linkedin.com/in/parameshwaran-iyer-790b2131/" target="_blank" rel="noopener">LinkedIn</a></p>
</article>
</main>
</div>
<footer class="wrap">
  <p>Written from first-hand enterprise delivery. Client names and confidential
  architecture details are deliberately omitted.</p>
</footer>
</body>
</html>
`;
}

async function main() {
  const updated = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Dubai',
  }).format(new Date());

  for (const page of PAGES) {
    await mkdir(join(ROOT, page.slug), { recursive: true });
    await writeFile(join(ROOT, page.slug, 'index.html'), layout(page, updated));
  }
  console.log(`ok — ${PAGES.length} pages: ${PAGES.map((p) => p.slug).join(', ')}`);
}

main().catch((err) => {
  console.error(`build-pages failed: ${err.message}`);
  process.exit(1);
});
