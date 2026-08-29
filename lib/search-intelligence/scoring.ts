import type {
  ContentGapStatus,
  KeywordRecord,
  SiCountry,
  SiProvenance,
  SiRecommendedAction,
  SiSearchIntent,
} from '@/lib/search-intelligence/types'
import { classifySearchIntent } from '@/lib/search-intelligence/intent'
import { BINT_SAEED_STRATEGIC_TERMS } from '@/lib/search-intelligence/expansion'

export type ScoreInput = {
  keyword: string
  searchIntent: SiSearchIntent
  country: SiCountry
  impressions: number | null
  clicks: number | null
  ranking: number | null
  difficulty: number | null
  searchVolume: number | null
  existingPage: string | null
  contentGapStatus: ContentGapStatus | null
  provenance?: SiProvenance
  /** @deprecated Use provenance */
  dataCategory?: SiProvenance
  clusterGroup: string
  hasGscEvidence?: boolean
  hasExternalDiscovery?: boolean
}

export type ScoreResult = {
  score: number
  factors: string[]
  recommendedAction: SiRecommendedAction
}

function businessRelevance(keyword: string): number {
  const k = keyword.toLowerCase()
  let score = 0
  for (const term of BINT_SAEED_STRATEGIC_TERMS) {
    if (k.includes(term.toLowerCase())) score += 8
  }
  if (/\babaya\b/.test(k)) score += 12
  if (/\b(al talli|khous|sadu|heritage|emirati)\b/.test(k)) score += 10
  if (/\b(jewellery|jewelry|strand|necklace|gemstone)\b/.test(k)) score += 8
  if (/\b(personal|bespoke|made to order|gift)\b/.test(k)) score += 6
  if (/\b(abu dhabi|al ain|uae|dubai)\b/.test(k)) score += 5
  return Math.min(score, 35)
}

function genericPenalty(keyword: string): number {
  const tokens = keyword.trim().split(/\s+/).filter(Boolean)
  if (tokens.length === 1 && keyword.length <= 5 && !/\b(abaya|khous|sadu|talli)\b/i.test(keyword)) {
    return -15
  }
  if (tokens.length === 1 && keyword.length <= 8 && businessRelevance(keyword) < 8) {
    return -10
  }
  return 0
}

function purchaseIntent(intent: SiSearchIntent): number {
  switch (intent) {
    case 'transactional':
      return 22
    case 'commercial':
      return 18
    case 'local':
      return 14
    case 'navigational':
      return 4
    case 'cultural_research':
      return 12
    default:
      return 8
  }
}

function geoImportance(country: SiCountry): number {
  if (country === 'UAE' || country === 'Global') return 10
  if (['Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'].includes(country)) return 8
  if (['UK', 'US', 'France', 'Italy', 'Netherlands'].includes(country)) return 6
  return 4
}

function seasonalBoost(keyword: string): number {
  if (/\b(ramadan|eid|wedding|gifting|national day)\b/i.test(keyword)) return 8
  if (/\b(winter|summer)\b/i.test(keyword)) return 4
  return 0
}

function cannibalisationPenalty(existingPage: string | null, gap: ContentGapStatus | null): number {
  if (gap === 'competing_pages') return -12
  if (gap === 'covered' && existingPage) return -8
  return 0
}

function recommendAction(input: ScoreInput, score: number): SiRecommendedAction {
  const k = input.keyword.toLowerCase()

  if (score < 25) return 'no_action'

  if (/\b(al talli|khous|sadu|heritage|emirati|unesco|battoulah)\b/.test(k)) {
    if (input.contentGapStatus === 'not_covered') return 'create_heritage_page'
    if (input.contentGapStatus === 'partially_covered') return 'improve_existing_page'
    return 'create_journal_article'
  }

  if (/\b(ramadan|eid|wedding|gifting)\b/i.test(k)) return 'seasonal_campaign'

  if (/\b(pinterest|outfit|style|look)\b/i.test(k)) return 'create_pinterest_content'

  if (input.searchIntent === 'transactional' || input.searchIntent === 'commercial') {
    if (/\/shop\//.test(input.existingPage || '')) return 'improve_product_page'
    if (input.contentGapStatus === 'not_covered') return 'create_seo_landing_page'
    return 'create_category_page'
  }

  if (/^(how|what|why|can|is)\b/.test(k)) {
    if (input.contentGapStatus === 'not_covered') return 'create_faq'
    return 'create_journal_article'
  }

  if (input.impressions && input.impressions > 50 && input.ranking && input.ranking <= 20) {
    return 'improve_existing_page'
  }

  if (input.existingPage && input.contentGapStatus === 'partially_covered') {
    return 'internal_linking_opportunity'
  }

  if (input.searchIntent === 'cultural_research') return 'create_journal_article'

  return 'create_social_content'
}

export function scoreOpportunity(input: ScoreInput): ScoreResult {
  const factors: string[] = []
  let score = 0
  const provenance = input.provenance ?? input.dataCategory ?? 'generated'

  const relevance = businessRelevance(input.keyword)
  if (relevance > 0) {
    score += relevance
    factors.push(`Bint Saeed relevance (+${relevance})`)
  }

  const generic = genericPenalty(input.keyword)
  if (generic < 0) {
    score += generic
    factors.push(`Broad generic term (${generic})`)
  }

  const intentPts = purchaseIntent(input.searchIntent)
  score += intentPts
  factors.push(`Search intent: ${input.searchIntent} (+${intentPts})`)

  const geo = geoImportance(input.country)
  score += geo
  factors.push(`Geographic priority: ${input.country} (+${geo})`)

  const seasonal = seasonalBoost(input.keyword)
  if (seasonal > 0) {
    score += seasonal
    factors.push(`Seasonal relevance (+${seasonal})`)
  }

  if (input.impressions != null && input.impressions > 0) {
    const impPts = Math.min(25, Math.round(Math.log10(input.impressions + 1) * 8))
    score += impPts
    factors.push(`GSC impressions ${input.impressions} (+${impPts})`)
  }

  if (input.ranking != null && input.ranking > 0) {
    if (input.ranking >= 4 && input.ranking <= 20) {
      score += 18
      factors.push(`Ranking position ${input.ranking.toFixed(1)} — quick-win zone (+18)`)
    } else if (input.ranking <= 3) {
      score += 8
      factors.push(`Strong ranking ${input.ranking.toFixed(1)} (+8)`)
    }
  }

  if (input.searchVolume != null) {
    const volPts = Math.min(8, Math.round(Math.log10(input.searchVolume + 1) * 3))
    score += volPts
    factors.push(`Search volume ${input.searchVolume} (+${volPts})`)
  } else {
    factors.push('Search volume unavailable')
  }

  if (input.difficulty != null) {
    const diffPts = Math.max(0, 10 - Math.round(input.difficulty / 10))
    score += diffPts
    factors.push(`Difficulty ${input.difficulty} (+${diffPts})`)
  } else {
    factors.push('Difficulty unavailable')
  }

  if (input.contentGapStatus === 'not_covered') {
    score += 10
    factors.push('Content gap: not covered (+10)')
  } else if (input.contentGapStatus === 'partially_covered') {
    score += 6
    factors.push('Content gap: partially covered (+6)')
  } else if (input.contentGapStatus === 'needs_updating') {
    score += 8
    factors.push('Page needs updating (+8)')
  }

  const cannibal = cannibalisationPenalty(input.existingPage, input.contentGapStatus)
  if (cannibal < 0) {
    score += cannibal
    factors.push(`Cannibalisation risk (${cannibal})`)
  }

  if (provenance === 'observed') {
    score += 8
    factors.push('Observed search signal (+8)')
  } else if (provenance === 'inferred') {
    score += 4
    factors.push('Inferred from observed data (+4)')
  } else {
    factors.push('Generated opportunity (not observed)')
  }

  if (input.hasGscEvidence) {
    score += 5
    factors.push('GSC evidence on file (+5)')
  }

  if (input.hasExternalDiscovery) {
    score += 4
    factors.push('External discovery signal (+4)')
  }

  score = Math.max(0, Math.min(100, Math.round(score)))
  const recommendedAction = recommendAction(input, score)

  return { score, factors, recommendedAction }
}

export function enrichRecordScores(record: KeywordRecord): KeywordRecord {
  const searchIntent = record.searchIntent || classifySearchIntent(record.keyword)
  const result = scoreOpportunity({
    keyword: record.keyword,
    searchIntent,
    country: record.country,
    impressions: record.impressions,
    clicks: record.clicks,
    ranking: record.ranking,
    difficulty: record.difficulty,
    searchVolume: record.searchVolume,
    existingPage: record.existingPage,
    contentGapStatus: record.contentGapStatus,
    provenance: record.provenance ?? record.dataCategory,
    clusterGroup: record.clusterGroup,
    hasGscEvidence: record.hasGscEvidence,
    hasExternalDiscovery: record.hasExternalDiscovery,
  })
  return {
    ...record,
    provenance: record.provenance ?? record.dataCategory ?? 'generated',
    searchIntent,
    opportunityScore: result.score,
    scoreFactors: result.factors,
    recommendedAction: result.recommendedAction,
  }
}
