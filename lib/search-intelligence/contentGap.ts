import { assessContentCoverage } from '@/lib/search-intelligence/contentIndex'
import { findRelevantPages } from '@/lib/search-intelligence/siteIndex'
import { normalizeKeyword } from '@/lib/search-intelligence/normalize'
import type { ContentGapStatus } from '@/lib/search-intelligence/types'

export function assessContentGap(keyword: string): {
  status: ContentGapStatus
  matchedPages: string[]
  bestPage: string | null
  coverageLevel?: string
  cannibalisationRisk?: boolean
} {
  const coverage = assessContentCoverage(keyword)
  const matchedPages = coverage.matchedPages.map((p) => p.path)
  const bestPage = matchedPages[0] ?? null
  return {
    status: coverage.status,
    matchedPages,
    bestPage,
    coverageLevel: coverage.level,
    cannibalisationRisk: coverage.cannibalisationRisk,
  }
}

export function matchGscPageToSitePath(gscUrl: string): string | null {
  try {
    const u = new URL(gscUrl)
    return u.pathname || null
  } catch {
    const pages = findRelevantPages(gscUrl, 1)
    return pages[0]?.path ?? null
  }
}
