import { classifyRouteMetaKey, getResolvedRoutePageMeta } from '@/lib/seo/routePageMeta'
import { getSitePageIndex } from '@/lib/search-intelligence/siteIndex'
import { normalizeKeyword } from '@/lib/search-intelligence/normalize'
import type { ContentGapStatus } from '@/lib/search-intelligence/types'

export type ContentIndexEntry = {
  path: string
  title: string
  metaDescription: string
  h1Proxy: string
  routeKey: string
  schemaHint: string
}

export type ContentCoverageLevel = 'strong' | 'weak' | 'mentioned' | 'absent' | 'cannibalisation'

export function buildContentIndex(): ContentIndexEntry[] {
  return getSitePageIndex().map((p) => {
    const routeKey = classifyRouteMetaKey(p.path)
    const meta = getResolvedRoutePageMeta('en', p.path)
    const schemaHint =
      p.path.includes('/heritage') || p.path.includes('/craftsmanship')
        ? 'Article'
        : p.path.includes('/shop')
          ? 'Product'
          : p.path.includes('/faq')
            ? 'FAQPage'
            : 'WebPage'
    return {
      path: p.path,
      title: meta.title,
      metaDescription: meta.description,
      h1Proxy: meta.title.replace(/\s*\|\s*Bint Saeed$/i, '').trim(),
      routeKey,
      schemaHint,
    }
  })
}

export function assessContentCoverage(keyword: string): {
  level: ContentCoverageLevel
  status: ContentGapStatus
  matchedPages: ContentIndexEntry[]
  cannibalisationRisk: boolean
} {
  const norm = normalizeKeyword(keyword)
  const tokens = norm.split(/\s+/).filter((t) => t.length > 2)
  const index = buildContentIndex()

  const scored = index
    .map((entry) => {
      const hay = normalizeKeyword(`${entry.path} ${entry.title} ${entry.metaDescription} ${entry.h1Proxy}`)
      let score = 0
      if (hay.includes(norm)) score += 15
      for (const t of tokens) {
        if (hay.includes(t)) score += 3
      }
      return { entry, score }
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)

  if (scored.length === 0) {
    return { level: 'absent', status: 'not_covered', matchedPages: [], cannibalisationRisk: false }
  }

  const top = scored[0]
  const strongMatches = scored.filter((s) => s.score >= 12)
  const cannibalisationRisk = strongMatches.length >= 3

  if (cannibalisationRisk) {
    return {
      level: 'cannibalisation',
      status: 'competing_pages',
      matchedPages: strongMatches.map((s) => s.entry),
      cannibalisationRisk: true,
    }
  }

  if (top.score >= 15) {
    return {
      level: 'strong',
      status: 'covered',
      matchedPages: scored.slice(0, 3).map((s) => s.entry),
      cannibalisationRisk: false,
    }
  }

  if (top.score >= 8) {
    return {
      level: 'weak',
      status: 'partially_covered',
      matchedPages: scored.slice(0, 3).map((s) => s.entry),
      cannibalisationRisk: false,
    }
  }

  return {
    level: 'mentioned',
    status: 'needs_updating',
    matchedPages: scored.slice(0, 3).map((s) => s.entry),
    cannibalisationRisk: false,
  }
}
