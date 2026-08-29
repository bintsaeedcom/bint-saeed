/** GSC sync period presets */

export type GscPeriodId = '7d' | '28d' | '3m' | '6m' | '12m' | '16m'

export type GscComparisonMode = 'none' | 'previous_period' | 'previous_year'

export type GscDateRange = {
  periodId: GscPeriodId
  startDate: string
  endDate: string
  label: string
}

function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10)
}

function daysAgo(n: number): Date {
  const d = new Date()
  d.setUTCDate(d.getUTCDate() - n)
  return d
}

/** GSC data is typically delayed ~2 days */
function gscEndDate(): Date {
  return daysAgo(2)
}

const PERIOD_DAYS: Record<GscPeriodId, number> = {
  '7d': 7,
  '28d': 28,
  '3m': 90,
  '6m': 180,
  '12m': 365,
  '16m': 487,
}

export function resolveGscPeriod(periodId: GscPeriodId): GscDateRange {
  const end = gscEndDate()
  const days = PERIOD_DAYS[periodId]
  const start = daysAgo(days + 2)
  return {
    periodId,
    startDate: formatDate(start),
    endDate: formatDate(end),
    label: `Last ${periodId}`,
  }
}

export function comparisonRange(
  primary: GscDateRange,
  mode: GscComparisonMode,
): GscDateRange | null {
  if (mode === 'none') return null
  const start = new Date(primary.startDate + 'T00:00:00Z')
  const end = new Date(primary.endDate + 'T00:00:00Z')
  const spanMs = end.getTime() - start.getTime()

  if (mode === 'previous_period') {
    const compEnd = new Date(start.getTime() - 86400000)
    const compStart = new Date(compEnd.getTime() - spanMs)
    return {
      periodId: primary.periodId,
      startDate: formatDate(compStart),
      endDate: formatDate(compEnd),
      label: 'Previous period',
    }
  }

  const compStart = new Date(start)
  compStart.setUTCFullYear(compStart.getUTCFullYear() - 1)
  const compEnd = new Date(end)
  compEnd.setUTCFullYear(compEnd.getUTCFullYear() - 1)
  return {
    periodId: primary.periodId,
    startDate: formatDate(compStart),
    endDate: formatDate(compEnd),
    label: 'Previous year',
  }
}
