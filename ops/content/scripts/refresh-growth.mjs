#!/usr/bin/env node
/**
 * Refresh growth markdown summary from ops/content/growth/weekly.csv
 *
 *   node ops/content/scripts/refresh-growth.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const growthDir = path.join(__dirname, '..', 'growth')
const csvPath = path.join(growthDir, 'weekly.csv')
const outPath = path.join(growthDir, 'LATEST_GROWTH.md')

function parseCsv(text) {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
  if (lines.length < 1) return { headers: [], rows: [] }
  const headers = lines[0].split(',').map((h) => h.trim())
  const rows = lines.slice(1).map((line) => {
    // simple CSV (no commas in notes ideally — use ; in notes)
    const cols = line.split(',')
    const obj = {}
    headers.forEach((h, i) => {
      obj[h] = (cols[i] ?? '').trim()
    })
    return obj
  })
  return { headers, rows }
}

function num(v) {
  if (v === '' || v == null) return null
  const n = Number(String(v).replace(/,/g, ''))
  return Number.isFinite(n) ? n : null
}

function delta(curr, prev) {
  if (curr == null || prev == null) return '—'
  const d = curr - prev
  if (d === 0) return '0'
  return d > 0 ? `+${d}` : `${d}`
}

if (!fs.existsSync(csvPath)) {
  console.error('Missing', csvPath)
  process.exit(1)
}

const { rows } = parseCsv(fs.readFileSync(csvPath, 'utf8'))
const data = rows.filter((r) => r.week_start)

const lines = [
  '# Social growth (from weekly.csv)',
  '',
  `Updated: ${new Date().toISOString().slice(0, 10)}`,
  `Weeks logged: ${data.length}`,
  '',
]

if (!data.length) {
  lines.push('_No weeks logged yet. Fill `SCORECARD_TEMPLATE.md`, append a row to `weekly.csv`, re-run this script._', '')
} else {
  const latest = data[data.length - 1]
  const prev = data.length > 1 ? data[data.length - 2] : null

  const metrics = [
    ['IG followers', 'ig_followers'],
    ['IG reach (7d)', 'ig_reach'],
    ['IG profile visits', 'ig_profile_visits'],
    ['IG website taps', 'ig_website_taps'],
    ['TikTok followers', 'tt_followers'],
    ['TikTok views (7d)', 'tt_views'],
    ['Pinterest impressions', 'pin_impressions'],
    ['Pinterest outbound', 'pin_outbound_clicks'],
    ['X followers', 'x_followers'],
    ['Posts shipped', 'posts_shipped'],
  ]

  lines.push(`## Latest week: ${latest.week_start}`, '')
  lines.push('| Metric | Value | vs prior week |', '|--------|------:|--------------:|')
  for (const [label, key] of metrics) {
    const c = num(latest[key])
    const p = prev ? num(prev[key]) : null
    lines.push(`| ${label} | ${c ?? '—'} | ${delta(c, p)} |`)
  }
  if (latest.notes) lines.push('', `Notes: ${latest.notes}`, '')

  lines.push('', '## History', '', '| Week | IG fol | IG reach | TT fol | Pin impr | Posts |', '|------|-------:|---------:|-------:|---------:|------:|')
  for (const r of data.slice(-12)) {
    lines.push(
      `| ${r.week_start} | ${r.ig_followers || '—'} | ${r.ig_reach || '—'} | ${r.tt_followers || '—'} | ${r.pin_impressions || '—'} | ${r.posts_shipped || '—'} |`,
    )
  }
  lines.push('')
}

fs.writeFileSync(outPath, lines.join('\n'))
console.log(`Wrote ${outPath} (${data.length} weeks)`)
