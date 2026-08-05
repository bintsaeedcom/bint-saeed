/**
 * Parse Google Search Console CSV exports (Queries / Pages).
 * Free path: Search Console → Export → drop file in ops/content/inbox/_gsc/
 */
import { promises as fs } from 'fs'
import path from 'path'

export type GscQueryRow = {
  query: string
  clicks: number
  impressions: number
  ctr: number
  position: number
}

export type GscPageRow = {
  page: string
  clicks: number
  impressions: number
  ctr: number
  position: number
}

export type GscAuditSnapshot = {
  sourceFiles: string[]
  exportedAtHint: string | null
  topQueries: GscQueryRow[]
  topPages: GscPageRow[]
  markdown: string
}

function gscDir() {
  return path.join(process.cwd(), 'ops', 'content', 'inbox', '_gsc')
}

function parseNumber(raw: string): number {
  const cleaned = raw.replace(/%/g, '').replace(/,/g, '').trim()
  const n = Number(cleaned)
  return Number.isFinite(n) ? n : 0
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let cell = ''
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    const next = text[i + 1]
    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"'
        i++
      } else if (ch === '"') {
        inQuotes = false
      } else {
        cell += ch
      }
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
      if (row.some((c) => c.length)) rows.push(row)
      row = []
      cell = ''
      continue
    }
    cell += ch
  }
  row.push(cell.trim())
  if (row.some((c) => c.length)) rows.push(row)
  return rows
}

function headerIndex(headers: string[], candidates: string[]): number {
  const norm = headers.map((h) => h.toLowerCase().trim())
  for (const c of candidates) {
    const i = norm.indexOf(c.toLowerCase())
    if (i >= 0) return i
  }
  return -1
}

function parseQueriesCsv(text: string): GscQueryRow[] {
  const table = parseCsv(text)
  if (table.length < 2) return []
  const headers = table[0]
  const q = headerIndex(headers, ['Top queries', 'Query', 'Queries'])
  const clicks = headerIndex(headers, ['Clicks'])
  const impressions = headerIndex(headers, ['Impressions'])
  const ctr = headerIndex(headers, ['CTR'])
  const position = headerIndex(headers, ['Position'])
  if (q < 0) return []

  return table
    .slice(1)
    .map((cols) => ({
      query: cols[q] || '',
      clicks: clicks >= 0 ? parseNumber(cols[clicks] || '0') : 0,
      impressions: impressions >= 0 ? parseNumber(cols[impressions] || '0') : 0,
      ctr: ctr >= 0 ? parseNumber(cols[ctr] || '0') : 0,
      position: position >= 0 ? parseNumber(cols[position] || '0') : 0,
    }))
    .filter((r) => r.query.length > 0)
}

function parsePagesCsv(text: string): GscPageRow[] {
  const table = parseCsv(text)
  if (table.length < 2) return []
  const headers = table[0]
  const page = headerIndex(headers, ['Top pages', 'Page', 'Pages', 'Landing page'])
  const clicks = headerIndex(headers, ['Clicks'])
  const impressions = headerIndex(headers, ['Impressions'])
  const ctr = headerIndex(headers, ['CTR'])
  const position = headerIndex(headers, ['Position'])
  if (page < 0) return []

  return table
    .slice(1)
    .map((cols) => ({
      page: cols[page] || '',
      clicks: clicks >= 0 ? parseNumber(cols[clicks] || '0') : 0,
      impressions: impressions >= 0 ? parseNumber(cols[impressions] || '0') : 0,
      ctr: ctr >= 0 ? parseNumber(cols[ctr] || '0') : 0,
      position: position >= 0 ? parseNumber(cols[position] || '0') : 0,
    }))
    .filter((r) => r.page.length > 0)
}

function toMarkdown(snapshot: Omit<GscAuditSnapshot, 'markdown'>): string {
  const lines: string[] = [
    '# GSC owned demand (auto-imported)',
    '',
    `Sources: ${snapshot.sourceFiles.join(', ') || 'none'}`,
    snapshot.exportedAtHint ? `Folder hint: ${snapshot.exportedAtHint}` : '',
    '',
    '## Top queries',
    '| Query | Clicks | Impressions | CTR | Position |',
    '|-------|--------|-------------|-----|----------|',
  ]

  for (const r of snapshot.topQueries.slice(0, 40)) {
    lines.push(
      `| ${r.query.replace(/\|/g, '/')} | ${r.clicks} | ${r.impressions} | ${r.ctr} | ${r.position} |`,
    )
  }

  lines.push('', '## Top pages', '| Page | Clicks | Impressions | CTR | Position |', '|------|--------|-------------|-----|----------|')
  for (const r of snapshot.topPages.slice(0, 25)) {
    lines.push(
      `| ${r.page.replace(/\|/g, '/')} | ${r.clicks} | ${r.impressions} | ${r.ctr} | ${r.position} |`,
    )
  }

  lines.push(
    '',
    '## How to use',
    '- Prefer these phrases as **Owned demand (A-priority)** in KEYWORDS.md when claim-safe and on-brand.',
    '- Map product packs to pages that already earn impressions.',
    '- Do not invent volume numbers beyond this export.',
  )

  return lines.filter((l, i) => !(l === '' && lines[i - 1] === '')).join('\n')
}

export async function loadGscAuditSnapshot(limitQueries = 40, limitPages = 25): Promise<GscAuditSnapshot> {
  const dir = gscDir()
  let files: string[] = []
  try {
    files = (await fs.readdir(dir)).filter((f) => f.toLowerCase().endsWith('.csv')).sort().reverse()
  } catch {
    files = []
  }

  const queries: GscQueryRow[] = []
  const pages: GscPageRow[] = []
  const sourceFiles: string[] = []

  for (const file of files.slice(0, 8)) {
    const raw = await fs.readFile(path.join(dir, file), 'utf8')
    const lower = file.toLowerCase()
    if (lower.includes('page')) {
      const rows = parsePagesCsv(raw)
      if (rows.length) {
        pages.push(...rows)
        sourceFiles.push(file)
      }
    } else {
      const rows = parseQueriesCsv(raw)
      if (rows.length) {
        queries.push(...rows)
        sourceFiles.push(file)
      } else {
        // fallback: try pages parser
        const pageRows = parsePagesCsv(raw)
        if (pageRows.length) {
          pages.push(...pageRows)
          sourceFiles.push(file)
        }
      }
    }
  }

  const dedupeQuery = new Map<string, GscQueryRow>()
  for (const q of queries) {
    const prev = dedupeQuery.get(q.query)
    if (!prev || q.impressions > prev.impressions) dedupeQuery.set(q.query, q)
  }
  const topQueries = [...dedupeQuery.values()].sort((a, b) => b.impressions - a.impressions).slice(0, limitQueries)

  const dedupePage = new Map<string, GscPageRow>()
  for (const p of pages) {
    const prev = dedupePage.get(p.page)
    if (!prev || p.impressions > prev.impressions) dedupePage.set(p.page, p)
  }
  const topPages = [...dedupePage.values()].sort((a, b) => b.impressions - a.impressions).slice(0, limitPages)

  const base = {
    sourceFiles: [...new Set(sourceFiles)],
    exportedAtHint: files[0] || null,
    topQueries,
    topPages,
  }

  return { ...base, markdown: toMarkdown(base) }
}
