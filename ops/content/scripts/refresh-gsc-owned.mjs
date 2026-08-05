#!/usr/bin/env node
/**
 * Refresh owned-demand markdown from GSC CSVs in ops/content/inbox/_gsc/
 *
 *   node ops/content/scripts/refresh-gsc-owned.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dir = path.join(__dirname, '..', 'inbox', '_gsc')

function parseNumber(raw) {
  const n = Number(String(raw).replace(/%/g, '').replace(/,/g, '').trim())
  return Number.isFinite(n) ? n : 0
}

function parseCsv(text) {
  const rows = []
  let row = []
  let cell = ''
  let inQuotes = false
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    const next = text[i + 1]
    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"'
        i++
      } else if (ch === '"') inQuotes = false
      else cell += ch
      continue
    }
    if (ch === '"') {
      inQuotes = true
      continue
    }
    if (ch === ',') {
      row.push(cell.trim())
      cell = ''
      continue
    }
    if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && next === '\n') i++
      row.push(cell.trim())
      if (row.some(Boolean)) rows.push(row)
      row = []
      cell = ''
      continue
    }
    cell += ch
  }
  row.push(cell.trim())
  if (row.some(Boolean)) rows.push(row)
  return rows
}

function idx(headers, names) {
  const norm = headers.map((h) => h.toLowerCase().trim())
  for (const n of names) {
    const i = norm.indexOf(n.toLowerCase())
    if (i >= 0) return i
  }
  return -1
}

function parseQueries(text) {
  const table = parseCsv(text)
  if (table.length < 2) return []
  const h = table[0]
  const q = idx(h, ['Top queries', 'Query', 'Queries'])
  if (q < 0) return []
  const clicks = idx(h, ['Clicks'])
  const impressions = idx(h, ['Impressions'])
  const ctr = idx(h, ['CTR'])
  const position = idx(h, ['Position'])
  return table
    .slice(1)
    .map((cols) => ({
      query: cols[q] || '',
      clicks: clicks >= 0 ? parseNumber(cols[clicks]) : 0,
      impressions: impressions >= 0 ? parseNumber(cols[impressions]) : 0,
      ctr: ctr >= 0 ? parseNumber(cols[ctr]) : 0,
      position: position >= 0 ? parseNumber(cols[position]) : 0,
    }))
    .filter((r) => r.query)
}

function parsePages(text) {
  const table = parseCsv(text)
  if (table.length < 2) return []
  const h = table[0]
  const page = idx(h, ['Top pages', 'Page', 'Pages', 'Landing page'])
  if (page < 0) return []
  const clicks = idx(h, ['Clicks'])
  const impressions = idx(h, ['Impressions'])
  const ctr = idx(h, ['CTR'])
  const position = idx(h, ['Position'])
  return table
    .slice(1)
    .map((cols) => ({
      page: cols[page] || '',
      clicks: clicks >= 0 ? parseNumber(cols[clicks]) : 0,
      impressions: impressions >= 0 ? parseNumber(cols[impressions]) : 0,
      ctr: ctr >= 0 ? parseNumber(cols[ctr]) : 0,
      position: position >= 0 ? parseNumber(cols[position]) : 0,
    }))
    .filter((r) => r.page)
}

if (!fs.existsSync(dir)) {
  console.error('Missing', dir)
  process.exit(1)
}

const files = fs
  .readdirSync(dir)
  .filter((f) => f.toLowerCase().endsWith('.csv'))
  .sort()
  .reverse()
const queries = []
const pages = []
const sources = []

for (const file of files.slice(0, 12)) {
  const raw = fs.readFileSync(path.join(dir, file), 'utf8')
  const lower = file.toLowerCase()
  if (lower.includes('page')) {
    const rows = parsePages(raw)
    if (rows.length) {
      pages.push(...rows)
      sources.push(file)
    }
    continue
  }
  if (
    lower.includes('countr') ||
    lower.includes('device') ||
    lower.includes('chart') ||
    lower.includes('filter') ||
    lower.includes('appearance')
  ) {
    continue
  }
  const rows = parseQueries(raw)
  if (rows.length) {
    queries.push(...rows)
    sources.push(file)
  }
}

const qMap = new Map()
for (const q of queries) {
  const prev = qMap.get(q.query)
  if (!prev || q.impressions > prev.impressions) qMap.set(q.query, q)
}
const topQ = [...qMap.values()].sort((a, b) => b.impressions - a.impressions).slice(0, 40)

const pMap = new Map()
for (const p of pages) {
  const prev = pMap.get(p.page)
  if (!prev || p.impressions > prev.impressions) pMap.set(p.page, p)
}
const topP = [...pMap.values()].sort((a, b) => b.impressions - a.impressions).slice(0, 25)

const md = [
  '# GSC owned demand (auto-imported)',
  '',
  `Generated: ${new Date().toISOString().slice(0, 10)}`,
  `Sources: ${sources.join(', ') || 'none'}`,
  '',
  '## Top queries',
  '| Query | Clicks | Impressions | CTR | Position |',
  '|-------|--------|-------------|-----|----------|',
  ...topQ.map(
    (r) => `| ${r.query.replace(/\|/g, '/')} | ${r.clicks} | ${r.impressions} | ${r.ctr} | ${r.position} |`,
  ),
  '',
  '## Top pages',
  '| Page | Clicks | Impressions | CTR | Position |',
  '|------|--------|-------------|-----|----------|',
  ...topP.map(
    (r) => `| ${r.page.replace(/\|/g, '/')} | ${r.clicks} | ${r.impressions} | ${r.ctr} | ${r.position} |`,
  ),
  '',
  'Use as Owned demand (A-priority) in Content Pack KEYWORDS.md when claim-safe.',
  '',
].join('\n')

const out = path.join(dir, 'LATEST_OWNED_DEMAND.md')
fs.writeFileSync(out, md)
console.log(`Wrote ${out} (${topQ.length} queries, ${topP.length} pages, ${sources.length} source files)`)
