import type { DiscoveryDepth } from '@/lib/search-intelligence/discovery/types'

export const DATAFORSEO_AUTOCOMPLETE_ENDPOINT =
  'https://api.dataforseo.com/v3/serp/google/autocomplete/live/advanced'

export const DATAFORSEO_SEARCH_VOLUME_ENDPOINT =
  'https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live'

export function isDataForSeoConfigured(): boolean {
  return Boolean(process.env.DATAFORSEO_LOGIN?.trim() && process.env.DATAFORSEO_PASSWORD?.trim())
}

export function getDataForSeoCredentials(): { login: string; password: string } | null {
  const login = process.env.DATAFORSEO_LOGIN?.trim()
  const password = process.env.DATAFORSEO_PASSWORD?.trim()
  if (!login || !password) return null
  return { login, password }
}

export function maxRequestsPerRun(): number {
  const n = Number(process.env.SEARCH_INTEL_MAX_REQUESTS_PER_RUN ?? '25')
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 25
}

export function dailyRequestLimit(): number {
  const n = Number(process.env.SEARCH_INTEL_DAILY_REQUEST_LIMIT ?? '200')
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 200
}

export function cacheTtlHours(): number {
  const n = Number(process.env.SEARCH_INTEL_CACHE_TTL_HOURS ?? '168')
  return Number.isFinite(n) && n > 0 ? n : 168
}

export function cacheTtlMs(): number {
  return cacheTtlHours() * 60 * 60 * 1000
}

/** Standard/Deep runs above this live-request count require explicit confirmation. */
export function confirmationThreshold(): number {
  return 15
}

export function microTestMaxLiveCalls(): number {
  return 5
}

export function defaultDiscoveryDepth(): DiscoveryDepth {
  return 'quick'
}

export const DATAFORSEO_REQUEST_TIMEOUT_MS = 30_000
