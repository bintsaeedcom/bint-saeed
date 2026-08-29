import type { GscAnalyticsRow } from '@/lib/search-intelligence/gsc/client'
import type { GscSnapshot } from '@/lib/search-intelligence/gsc/store'
import { normalizeKeyword } from '@/lib/search-intelligence/normalize'

export type GscQueryTrend = {
  query: string
  currentImpressions: number
  previousImpressions: number
  deltaImpressions: number
  deltaPercent: number | null
  currentPosition: number
  previousPosition: number
  positionDelta: number
  trend: 'rising' | 'falling' | 'new' | 'disappeared' | 'stable'
}

export type GscPulseMetrics = {
  newQueries: number
  risingQueries: number
  fallingQueries: number
  quickWins: number
  commercialOpportunities: number
  contentGaps: number
  rankingsGained: number
  rankingsLost: number
  highImpressionsLowCtr: number
  position4to10: number
  position11to20: number
  position21to50: number
}

function aggregateByQuery(rows: GscAnalyticsRow[]): Map<string, { impressions: number; clicks: number; position: number }> {
  const map = new Map<string, { impressions: number; clicks: number; position: number; weight: number }>()
  for (const r of rows) {
    if (!r.query) continue
    const key = normalizeKeyword(r.query)
    const prev = map.get(key)
    const imp = r.impressions ?? 0
    const clk = r.clicks ?? 0
    const pos = r.position ?? 0
    if (!prev) {
      map.set(key, { impressions: imp, clicks: clk, position: pos, weight: imp })
      continue
    }
    const totalImp = prev.impressions + imp
    const weightedPos = (prev.position * prev.weight + pos * imp) / (prev.weight + imp || 1)
    map.set(key, {
      impressions: totalImp,
      clicks: prev.clicks + clk,
      position: weightedPos,
      weight: totalImp,
    })
  }
  const out = new Map<string, { impressions: number; clicks: number; position: number }>()
  for (const [k, v] of map) {
    out.set(k, { impressions: v.impressions, clicks: v.clicks, position: v.position })
  }
  return out
}

export function computeQueryTrends(snapshot: GscSnapshot): GscQueryTrend[] {
  const current = aggregateByQuery(snapshot.rows.filter((r) => r.query))
  const previous = snapshot.compareRows
    ? aggregateByQuery(snapshot.compareRows.filter((r) => r.query))
    : new Map()

  const allKeys = new Set([...current.keys(), ...previous.keys()])
  const trends: GscQueryTrend[] = []

  for (const key of allKeys) {
    const cur = current.get(key)
    const prev = previous.get(key)
    const curImp = cur?.impressions ?? 0
    const prevImp = prev?.impressions ?? 0
    const curPos = cur?.position ?? 0
    const prevPos = prev?.position ?? 0
    const delta = curImp - prevImp
    const deltaPercent = prevImp > 0 ? Math.round((delta / prevImp) * 100) : null

    let trend: GscQueryTrend['trend'] = 'stable'
    if (!prev && cur) trend = 'new'
    else if (prev && !cur) trend = 'disappeared'
    else if (delta > 10) trend = 'rising'
    else if (delta < -10) trend = 'falling'

    trends.push({
      query: key,
      currentImpressions: curImp,
      previousImpressions: prevImp,
      deltaImpressions: delta,
      deltaPercent,
      currentPosition: curPos,
      previousPosition: prevPos,
      positionDelta: prevPos - curPos,
      trend,
    })
  }

  return trends.sort((a, b) => b.currentImpressions - a.currentImpressions)
}

export function computeGscPulse(snapshot: GscSnapshot | null): GscPulseMetrics {
  if (!snapshot) {
    return {
      newQueries: 0,
      risingQueries: 0,
      fallingQueries: 0,
      quickWins: 0,
      commercialOpportunities: 0,
      contentGaps: 0,
      rankingsGained: 0,
      rankingsLost: 0,
      highImpressionsLowCtr: 0,
      position4to10: 0,
      position11to20: 0,
      position21to50: 0,
    }
  }

  const trends = computeQueryTrends(snapshot)
  const queryRows = snapshot.rows.filter((r) => r.query && !r.page)

  let highImpressionsLowCtr = 0
  let position4to10 = 0
  let position11to20 = 0
  let position21to50 = 0
  let quickWins = 0

  for (const r of queryRows) {
    const imp = r.impressions ?? 0
    const pos = r.position ?? 0
    const ctr = r.ctr ?? 0
    if (imp >= 50 && ctr < 2) highImpressionsLowCtr++
    if (pos >= 4 && pos <= 10) position4to10++
    if (pos >= 11 && pos <= 20) position11to20++
    if (pos >= 21 && pos <= 50) position21to50++
    if (imp >= 20 && pos >= 4 && pos <= 20) quickWins++
  }

  const rankingsGained = trends.filter((t) => t.positionDelta > 1).length
  const rankingsLost = trends.filter((t) => t.positionDelta < -1).length

  return {
    newQueries: trends.filter((t) => t.trend === 'new').length,
    risingQueries: trends.filter((t) => t.trend === 'rising').length,
    fallingQueries: trends.filter((t) => t.trend === 'falling').length,
    quickWins,
    commercialOpportunities: queryRows.filter((r) =>
      /\b(buy|shop|price|luxury|bespoke|order|online)\b/i.test(r.query ?? ''),
    ).length,
    contentGaps: 0,
    rankingsGained,
    rankingsLost,
    highImpressionsLowCtr,
    position4to10,
    position11to20,
    position21to50,
  }
}

export function topQueriesByImpressions(rows: GscAnalyticsRow[], limit = 500): GscAnalyticsRow[] {
  const byQuery = new Map<string, GscAnalyticsRow>()
  for (const r of rows) {
    if (!r.query) continue
    const k = normalizeKeyword(r.query)
    const prev = byQuery.get(k)
    if (!prev || (r.impressions ?? 0) > (prev.impressions ?? 0)) {
      byQuery.set(k, { ...r, query: r.query })
    }
  }
  return [...byQuery.values()].sort((a, b) => (b.impressions ?? 0) - (a.impressions ?? 0)).slice(0, limit)
}
