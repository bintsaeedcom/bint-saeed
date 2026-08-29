import { getSitemapUrlEntries, SITEMAP_BASE_URL } from '@/lib/sitemapUrlList'

export type SitePageRef = {
  path: string
  absoluteUrl: string
  label: string
}

function pathFromLoc(loc: string): string {
  try {
    const u = new URL(loc)
    return u.pathname || '/'
  } catch {
    return loc.startsWith('/') ? loc : `/${loc}`
  }
}

function labelFromPath(path: string): string {
  const clean = path.replace(/^\//, '').replace(/\/$/, '')
  if (!clean) return 'Home'
  return clean
    .split('/')
    .pop()!
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

/** Crawlable site URLs from the canonical sitemap builder. */
export function getSitePageIndex(): SitePageRef[] {
  const entries = getSitemapUrlEntries()
  const seen = new Set<string>()
  const pages: SitePageRef[] = []

  for (const e of entries) {
    const path = pathFromLoc(e.loc)
    if (seen.has(path)) continue
    seen.add(path)
    pages.push({
      path,
      absoluteUrl: e.loc.startsWith('http') ? e.loc : `${SITEMAP_BASE_URL}${path}`,
      label: labelFromPath(path),
    })
  }

  return pages.sort((a, b) => a.path.localeCompare(b.path))
}

export function findRelevantPages(keyword: string, limit = 5): SitePageRef[] {
  const norm = keyword.toLowerCase()
  const tokens = norm.split(/\s+/).filter((t) => t.length > 2)
  const pages = getSitePageIndex()

  const scored = pages
    .map((p) => {
      const hay = `${p.path} ${p.label}`.toLowerCase()
      let score = 0
      if (hay.includes(norm)) score += 10
      for (const t of tokens) {
        if (hay.includes(t)) score += 2
      }
      return { page: p, score }
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, limit).map((s) => s.page)
}
