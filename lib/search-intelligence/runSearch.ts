import { randomUUID } from 'crypto'
import { assessContentGap } from '@/lib/search-intelligence/contentGap'
import { buildTopicClusters } from '@/lib/search-intelligence/clusters'
import { classifySearchIntent } from '@/lib/search-intelligence/intent'
import { dedupeKey, normalizeKeyword } from '@/lib/search-intelligence/normalize'
import { getProviderRegistry, getAllProviderStatuses } from '@/lib/search-intelligence/providers/registry'
import { gscCsvProvider } from '@/lib/search-intelligence/providers/gscCsvProvider'
import { runSelectedProviders } from '@/lib/search-intelligence/providers/types'
import { enrichRecordScores } from '@/lib/search-intelligence/scoring'
import { cacheKey, getCached, setCached } from '@/lib/search-intelligence/cache'
import { saveOpportunitiesBatch } from '@/lib/search-intelligence/store'
import { getLatestGscSnapshot } from '@/lib/search-intelligence/gsc/store'
import { computeGscPulse, computeQueryTrends } from '@/lib/search-intelligence/gsc/trends'
import { buildGscSyncInfo } from '@/lib/search-intelligence/gsc/syncInfo'
import { filterGscRowsBySeed } from '@/lib/search-intelligence/gsc/loadGscData'
import type {
  KeywordRecord,
  PublishNextRecommendation,
  SearchIntelligenceRequest,
  SearchIntelligenceResponse,
  SearchIntelligenceSummary,
  SearchPulse,
  SiProvenance,
  SiSourceId,
} from '@/lib/search-intelligence/types'
import { defaultDiscoveryDepth } from '@/lib/search-intelligence/dataforseo/config'
import { actionLabel } from '@/lib/search-intelligence/clusters'

function recordProvenance(p: Partial<KeywordRecord>, fallback: SiProvenance = 'generated'): SiProvenance {
  return p.provenance ?? p.dataCategory ?? fallback
}

function mergePartialRecords(partials: Partial<KeywordRecord>[], ctx: SearchIntelligenceRequest): KeywordRecord[] {
  const map = new Map<string, KeywordRecord>()
  const now = new Date().toISOString()

  for (const p of partials) {
    if (!p.keyword) continue
    const keyword = p.keyword.trim()
    const dk = dedupeKey(keyword, ctx.country, ctx.language)
    const gap = assessContentGap(keyword)
    const existing = map.get(dk)
    const incomingProv = recordProvenance(p)

    const mergedSources = [...(existing?.sources ?? []), ...(p.sources ?? [])]
    const uniqueSources = mergedSources.filter(
      (s, i, arr) =>
        arr.findIndex(
          (x) => x.sourceId === s.sourceId && x.sourceLabel === s.sourceLabel && x.observedAt === s.observedAt,
        ) === i,
    )

    const base: KeywordRecord = {
      id: existing?.id ?? randomUUID(),
      keyword,
      normalizedKeyword: normalizeKeyword(keyword),
      topicCluster: p.topicCluster ?? ctx.seedTopic,
      clusterGroup: p.clusterGroup ?? 'other',
      provenance: existing?.provenance ?? incomingProv,
      sources: uniqueSources,
      firstSeenAt: existing?.firstSeenAt ?? p.firstSeenAt,
      lastSeenAt: p.lastSeenAt ?? now,
      isNewDiscovery: p.isNewDiscovery ?? existing?.isNewDiscovery,
      hasGscEvidence: existing?.hasGscEvidence || p.hasGscEvidence || false,
      hasExternalDiscovery: existing?.hasExternalDiscovery || p.hasExternalDiscovery || false,
      expansionPatterns: [
        ...new Set([...(existing?.expansionPatterns ?? []), ...(p.expansionPatterns ?? [])]),
      ],
      surfacingSeeds: [...new Set([...(existing?.surfacingSeeds ?? []), ...(p.surfacingSeeds ?? [])])],
      metricsEnrichedAt: p.metricsEnrichedAt ?? existing?.metricsEnrichedAt,
      country: ctx.country,
      language: ctx.language,
      searchIntent: p.searchIntent ?? classifySearchIntent(keyword),
      searchVolume: p.searchVolume ?? existing?.searchVolume ?? null,
      cpc: p.cpc ?? existing?.cpc ?? null,
      difficulty: p.difficulty ?? existing?.difficulty ?? null,
      trend: p.trend ?? existing?.trend ?? null,
      ranking: p.ranking ?? existing?.ranking ?? null,
      impressions: p.impressions ?? existing?.impressions ?? null,
      clicks: p.clicks ?? existing?.clicks ?? null,
      existingPage: p.existingPage ?? gap.bestPage ?? existing?.existingPage ?? null,
      contentGapStatus: gap.status,
      opportunityScore: 0,
      scoreFactors: [],
      recommendedAction: 'no_action',
      status: existing?.status ?? 'new',
      seedTopic: ctx.seedTopic,
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
      lastCheckedAt: p.lastCheckedAt ?? now,
    }

    if (incomingProv === 'observed' || existing?.provenance === 'observed') {
      base.provenance = 'observed'
    } else if (incomingProv === 'inferred' || existing?.provenance === 'inferred') {
      base.provenance = 'inferred'
    }

    if (p.hasGscEvidence || existing?.hasGscEvidence) base.hasGscEvidence = true
    if (base.hasGscEvidence && base.hasExternalDiscovery) {
      base.scoreFactors.push('GSC + external discovery crossover')
    }

    map.set(dk, enrichRecordScores(base))
  }

  return [...map.values()]
}

function applyCrossoverBoost(records: KeywordRecord[]): KeywordRecord[] {
  return records.map((r) => {
    if (!r.hasGscEvidence) return r
    let bonus = 0
    const factors = [...r.scoreFactors]
    if (r.ranking != null && r.ranking >= 4 && r.ranking <= 20 && (r.impressions ?? 0) >= 20) {
      bonus += 10
      factors.push('GSC quick-win zone crossover (+10)')
    }
    if (r.contentGapStatus === 'not_covered' && (r.impressions ?? 0) >= 30) {
      bonus += 8
      factors.push('Content gap with existing demand (+8)')
    }
    if (r.hasExternalDiscovery && r.hasGscEvidence) {
      bonus += 5
      factors.push('Observed demand + site impressions (+5)')
    }
    if (!bonus) return r
    return {
      ...r,
      opportunityScore: Math.min(100, r.opportunityScore + bonus),
      scoreFactors: factors,
    }
  })
}

async function buildInferredFromGscTrends(
  ctx: SearchIntelligenceRequest,
  seed: string,
  existingKeys: Set<string>,
): Promise<KeywordRecord[]> {
  const snapshot = await getLatestGscSnapshot()
  if (!snapshot?.rows?.length) return []

  const trends = computeQueryTrends(snapshot)
  const seedLower = seed.toLowerCase()
  const now = new Date().toISOString()
  const inferred: KeywordRecord[] = []

  for (const t of trends) {
    if (!t.query.includes(seedLower)) continue
    const dk = dedupeKey(t.query, ctx.country, ctx.language)
    if (existingKeys.has(dk)) continue
    if (t.trend !== 'rising' && t.trend !== 'new' && t.trend !== 'falling') continue

    const gap = assessContentGap(t.query)
    const record = enrichRecordScores({
      id: randomUUID(),
      keyword: t.query,
      normalizedKeyword: normalizeKeyword(t.query),
      topicCluster: seed,
      clusterGroup: 'gsc_owned',
      provenance: 'inferred',
      sources: [
        {
          sourceId: 'google_search_console',
          sourceLabel: 'GSC trend analysis',
          observedAt: snapshot.syncedAt,
        },
      ],
      hasGscEvidence: true,
      country: ctx.country,
      language: ctx.language,
      searchIntent: classifySearchIntent(t.query),
      searchVolume: null,
      cpc: null,
      difficulty: null,
      trend: t.trend,
      ranking: t.currentPosition || null,
      impressions: t.currentImpressions,
      clicks: null,
      existingPage: gap.bestPage,
      contentGapStatus: gap.status,
      opportunityScore: 0,
      scoreFactors: [`Inferred from GSC ${t.trend} trend (Δ ${t.deltaImpressions} impressions)`],
      recommendedAction: 'no_action',
      status: 'new',
      seedTopic: seed,
      createdAt: now,
      updatedAt: now,
      lastCheckedAt: now,
    })
    inferred.push(record)
    existingKeys.add(dk)
  }

  return inferred
}

function buildSummary(all: KeywordRecord[]): SearchIntelligenceSummary {
  return {
    totalOpportunities: all.length,
    quickWins: all.filter(
      (r) =>
        r.hasGscEvidence &&
        (r.impressions ?? 0) >= 20 &&
        r.ranking != null &&
        r.ranking >= 4 &&
        r.ranking <= 20,
    ).length,
    commercialKeywords: all.filter(
      (r) => r.searchIntent === 'commercial' || r.searchIntent === 'transactional',
    ).length,
    contentGaps: all.filter((r) => r.contentGapStatus === 'not_covered').length,
    existingRankings: all.filter((r) => r.ranking != null && r.ranking > 0).length,
    highPriorityTopics: all.filter((r) => r.opportunityScore >= 65).length,
  }
}

function buildSearchPulse(
  all: KeywordRecord[],
  gscPulse: ReturnType<typeof computeGscPulse>,
  contentGaps: number,
): SearchPulse {
  return {
    newSearchesDiscovered: all.filter((r) => r.isNewDiscovery).length,
    risingQueries: gscPulse.risingQueries,
    quickWins: gscPulse.quickWins,
    commercialOpportunities: gscPulse.commercialOpportunities,
    contentGaps,
    rankingsGained: gscPulse.rankingsGained,
    rankingsLost: gscPulse.rankingsLost,
  }
}

function buildPublishNext(all: KeywordRecord[]): PublishNextRecommendation[] {
  return [...all]
    .filter((r) => r.recommendedAction !== 'no_action')
    .sort((a, b) => b.opportunityScore - a.opportunityScore)
    .slice(0, 5)
    .map((r) => ({
      keyword: r.keyword,
      title: r.keyword.replace(/\b\w/g, (c) => c.toUpperCase()),
      opportunityScore: r.opportunityScore,
      reason: r.scoreFactors.slice(0, 2).join(' · ') || actionLabel(r.recommendedAction),
      recommendedAction: r.recommendedAction,
    }))
}

const DEFAULT_SOURCES: SiSourceId[] = ['google_search_console', 'generated']

export async function runSearchIntelligence(
  req: SearchIntelligenceRequest,
  options?: { persist?: boolean; skipCache?: boolean },
): Promise<SearchIntelligenceResponse> {
  const seed = req.seedTopic.trim()
  if (!seed) {
    throw new Error('Seed topic is required')
  }

  const sources = req.sources?.length ? req.sources : DEFAULT_SOURCES
  const ck = cacheKey(['si', seed, req.country, req.language, sources.join(',')])
  if (!options?.skipCache) {
    const cached = getCached<SearchIntelligenceResponse>(ck)
    if (cached) return cached
  }

  const now = new Date().toISOString()
  const ctx = {
    seedTopic: seed,
    country: req.country,
    language: req.language,
    now,
    discoveryDepth: req.discoveryDepth ?? defaultDiscoveryDepth(),
    refreshLiveData: req.refreshLiveData,
    sessionId: req.sessionId ?? 'si-default',
  }
  const registry = getProviderRegistry()

  const partials = await runSelectedProviders(registry.search, ctx, sources)
  let all = applyCrossoverBoost(mergePartialRecords(partials, req))

  const existingKeys = new Set(all.map((r) => dedupeKey(r.keyword, ctx.country, ctx.language)))
  const inferredTrends = await buildInferredFromGscTrends(req, seed, existingKeys)
  all = [...all, ...inferredTrends]

  const observed = all.filter((r) => r.provenance === 'observed')
  const inferred = all.filter((r) => r.provenance === 'inferred')
  const generated = all.filter((r) => r.provenance === 'generated')

  const gscOpportunities =
    sources.includes('google_search_console') && gscCsvProvider.fetchGscOpportunities
      ? await gscCsvProvider.fetchGscOpportunities(ctx)
      : []

  const contentGaps = all
    .filter((r) => r.contentGapStatus && r.contentGapStatus !== 'covered')
    .slice(0, 100)
    .map((r) => ({
      keyword: r.keyword,
      status: r.contentGapStatus!,
      matchedPages: r.existingPage ? [r.existingPage] : [],
      recommendedAction: r.recommendedAction,
    }))

  const snapshot = await getLatestGscSnapshot()
  const gscPulse = computeGscPulse(snapshot)
  const gscSync = await buildGscSyncInfo()

  const response: SearchIntelligenceResponse = {
    seedTopic: seed,
    country: req.country,
    language: req.language,
    providers: getAllProviderStatuses(),
    summary: buildSummary(all),
    searchPulse: buildSearchPulse(all, gscPulse, contentGaps.length),
    gscSync,
    publishNext: buildPublishNext(all),
    observed,
    inferred,
    generated,
    all,
    topicClusters: buildTopicClusters(all),
    gscOpportunities,
    contentGaps,
    searchedAt: now,
  }

  if (options?.persist !== false) {
    await saveOpportunitiesBatch(all.slice(0, 200))
  }

  setCached(ck, response)
  return response
}
