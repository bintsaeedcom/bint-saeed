import { Redis } from '@upstash/redis'

export type DataForSeoUsageSnapshot = {
  connected: boolean
  requestsSession: number
  requestsToday: number
  cacheHits: number
  liveApiCalls: number
  lastApiCallAt: string | null
  costTodayUsd: number | null
  costMonthUsd: number | null
  lastError: string | null
  dailyLimit: number
  maxPerRun: number
}

type UsageState = {
  sessionId: string
  requestsSession: number
  requestsToday: number
  cacheHits: number
  liveApiCalls: number
  lastApiCallAt: string | null
  costTodayUsd: number
  costMonthUsd: number
  lastError: string | null
  dayKey: string
  monthKey: string
}

let redis: Redis | null = null
let memoryUsage: UsageState | null = null

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10)
}

function monthKey(): string {
  return new Date().toISOString().slice(0, 7)
}

function freshState(sessionId: string): UsageState {
  const day = todayKey()
  const month = monthKey()
  return {
    sessionId,
    requestsSession: 0,
    requestsToday: 0,
    cacheHits: 0,
    liveApiCalls: 0,
    lastApiCallAt: null,
    costTodayUsd: 0,
    costMonthUsd: 0,
    lastError: null,
    dayKey: day,
    monthKey: month,
  }
}

const KEY_USAGE_DAY = (d: string) => `bs:si:dfs:usage:day:${d}`
const KEY_USAGE_MONTH = (m: string) => `bs:si:dfs:usage:month:${m}`
const KEY_SESSION = (id: string) => `bs:si:dfs:session:${id}`

async function loadState(sessionId: string): Promise<UsageState> {
  const day = todayKey()
  const month = monthKey()
  const r = getRedis()

  if (r) {
    const [dayRaw, monthRaw, sessionRaw] = await Promise.all([
      r.get<string>(KEY_USAGE_DAY(day)),
      r.get<string>(KEY_USAGE_MONTH(month)),
      r.get<string>(KEY_SESSION(sessionId)),
    ])
    const dayData = dayRaw
      ? (typeof dayRaw === 'string' ? JSON.parse(dayRaw) : dayRaw)
      : { requestsToday: 0, cacheHits: 0, liveApiCalls: 0, costTodayUsd: 0 }
    const monthData = monthRaw
      ? (typeof monthRaw === 'string' ? JSON.parse(monthRaw) : monthRaw)
      : { costMonthUsd: 0 }
    const sessionData = sessionRaw
      ? (typeof sessionRaw === 'string' ? JSON.parse(sessionRaw) : sessionRaw)
      : { requestsSession: 0, lastApiCallAt: null, lastError: null }

    return {
      sessionId,
      requestsSession: sessionData.requestsSession ?? 0,
      requestsToday: dayData.requestsToday ?? 0,
      cacheHits: dayData.cacheHits ?? 0,
      liveApiCalls: dayData.liveApiCalls ?? 0,
      lastApiCallAt: sessionData.lastApiCallAt ?? null,
      costTodayUsd: dayData.costTodayUsd ?? 0,
      costMonthUsd: monthData.costMonthUsd ?? 0,
      lastError: sessionData.lastError ?? null,
      dayKey: day,
      monthKey: month,
    }
  }

  if (!memoryUsage || memoryUsage.dayKey !== day) {
    memoryUsage = freshState(sessionId)
  }
  if (memoryUsage.sessionId !== sessionId) {
    memoryUsage = { ...memoryUsage, sessionId, requestsSession: 0 }
  }
  return memoryUsage
}

async function persistState(state: UsageState): Promise<void> {
  const r = getRedis()
  if (r) {
    await Promise.all([
      r.set(
        KEY_USAGE_DAY(state.dayKey),
        JSON.stringify({
          requestsToday: state.requestsToday,
          cacheHits: state.cacheHits,
          liveApiCalls: state.liveApiCalls,
          costTodayUsd: state.costTodayUsd,
        }),
        { ex: 60 * 60 * 48 },
      ),
      r.set(
        KEY_USAGE_MONTH(state.monthKey),
        JSON.stringify({ costMonthUsd: state.costMonthUsd }),
        { ex: 60 * 60 * 24 * 45 },
      ),
      r.set(
        KEY_SESSION(state.sessionId),
        JSON.stringify({
          requestsSession: state.requestsSession,
          lastApiCallAt: state.lastApiCallAt,
          lastError: state.lastError,
        }),
        { ex: 60 * 60 * 8 },
      ),
    ])
    return
  }
  memoryUsage = state
}

export async function recordDataForSeoCacheHit(sessionId: string): Promise<void> {
  const state = await loadState(sessionId)
  state.cacheHits += 1
  await persistState(state)
}

export async function recordDataForSeoLiveCall(
  sessionId: string,
  costUsd: number | null,
  error?: string | null,
): Promise<{ allowed: boolean; reason?: string }> {
  const state = await loadState(sessionId)
  state.requestsSession += 1
  state.requestsToday += 1
  state.liveApiCalls += 1
  state.lastApiCallAt = new Date().toISOString()
  if (error) state.lastError = error
  else state.lastError = null
  if (costUsd != null && Number.isFinite(costUsd)) {
    state.costTodayUsd += costUsd
    state.costMonthUsd += costUsd
  }
  await persistState(state)
  return { allowed: true }
}

export async function getDataForSeoUsage(
  sessionId: string,
  limits: { dailyLimit: number; maxPerRun: number },
  connected: boolean,
): Promise<DataForSeoUsageSnapshot> {
  const state = await loadState(sessionId)
  return {
    connected,
    requestsSession: state.requestsSession,
    requestsToday: state.requestsToday,
    cacheHits: state.cacheHits,
    liveApiCalls: state.liveApiCalls,
    lastApiCallAt: state.lastApiCallAt,
    costTodayUsd: state.costTodayUsd > 0 ? roundUsd(state.costTodayUsd) : null,
    costMonthUsd: state.costMonthUsd > 0 ? roundUsd(state.costMonthUsd) : null,
    lastError: state.lastError,
    dailyLimit: limits.dailyLimit,
    maxPerRun: limits.maxPerRun,
  }
}

export async function checkDailyLimit(sessionId: string, dailyLimit: number): Promise<boolean> {
  const state = await loadState(sessionId)
  return state.requestsToday < dailyLimit
}

export async function getTodayRequestCount(sessionId: string): Promise<number> {
  const state = await loadState(sessionId)
  return state.requestsToday
}

function roundUsd(n: number): number {
  return Math.round(n * 1_000_000) / 1_000_000
}
