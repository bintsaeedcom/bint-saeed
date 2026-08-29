import {
  DATAFORSEO_AUTOCOMPLETE_ENDPOINT,
  DATAFORSEO_REQUEST_TIMEOUT_MS,
  DATAFORSEO_SEARCH_VOLUME_ENDPOINT,
  getDataForSeoCredentials,
} from '@/lib/search-intelligence/dataforseo/config'
import type { DataForSeoLocationTarget } from '@/lib/search-intelligence/dataforseo/locations'
import { locationPayload } from '@/lib/search-intelligence/dataforseo/locations'

export class DataForSeoError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly httpStatus?: number,
    public readonly retryable = false,
  ) {
    super(message)
    this.name = 'DataForSeoError'
  }
}

type DfsTaskResponse<T> = {
  status_code: number
  status_message: string
  cost?: number
  tasks?: Array<{
    status_code: number
    status_message: string
    cost?: number
    result?: T[]
    data?: Record<string, unknown>
  }>
}

export type AutocompleteApiResult = {
  suggestions: string[]
  costUsd: number | null
  checkUrl?: string
}

export type SearchVolumeApiResult = {
  keyword: string
  searchVolume: number | null
  cpc: number | null
  competition: number | null
  monthlySearches?: { year: number; month: number; search_volume: number }[]
}

export type DataForSeoConnectionTestResult = {
  ok: boolean
  message: string
  apiLogin?: string
  balanceUsd?: number | null
  costUsd?: number | null
}

export const DATAFORSEO_USER_DATA_ENDPOINT = 'https://api.dataforseo.com/v3/appendix/user_data'

function sanitizeApiMessage(message: string): string {
  const creds = getDataForSeoCredentials()
  let out = message
  if (creds?.login) out = out.split(creds.login).join('[redacted]')
  if (creds?.password) out = out.split(creds.password).join('[redacted]')
  return out.replace(/Basic\s+[A-Za-z0-9+/=]+/gi, 'Basic [redacted]')
}

async function dfsRequest<T>(
  url: string,
  init: { method: 'GET' | 'POST'; body?: unknown[] },
): Promise<DfsTaskResponse<T>> {
  const creds = getDataForSeoCredentials()
  if (!creds) {
    throw new DataForSeoError('DataForSEO credentials not configured', 'not_configured')
  }

  const auth = Buffer.from(`${creds.login}:${creds.password}`).toString('base64')
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), DATAFORSEO_REQUEST_TIMEOUT_MS)

  try {
    const res = await fetch(url, {
      method: init.method,
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: init.method === 'POST' ? JSON.stringify(init.body ?? []) : undefined,
      signal: controller.signal,
    })

    const json = (await res.json()) as DfsTaskResponse<T>

    if (!res.ok) {
      throw new DataForSeoError(
        sanitizeApiMessage(json.status_message || `HTTP ${res.status}`),
        String(json.status_code ?? res.status),
        res.status,
        res.status === 429 || res.status >= 500,
      )
    }

    if (json.status_code !== 20000) {
      const msg = sanitizeApiMessage(json.status_message || 'DataForSEO request failed')
      if (/balance|payment|insufficient/i.test(msg)) {
        throw new DataForSeoError(msg, 'balance_exhausted')
      }
      if (/auth|credential|unauthorized/i.test(msg)) {
        throw new DataForSeoError(msg, 'invalid_credentials')
      }
      throw new DataForSeoError(msg, String(json.status_code))
    }

    const task = json.tasks?.[0]
    if (!task) {
      throw new DataForSeoError('Empty DataForSEO task response', 'empty_response')
    }

    if (task.status_code !== 20000) {
      const msg = sanitizeApiMessage(task.status_message || 'DataForSEO task failed')
      if (/location/i.test(msg)) {
        throw new DataForSeoError(msg, 'invalid_location', undefined, false)
      }
      if (/rate|limit/i.test(msg)) {
        throw new DataForSeoError(msg, 'rate_limit', undefined, true)
      }
      throw new DataForSeoError(msg, String(task.status_code), undefined, task.status_code >= 50000)
    }

    return json
  } catch (e) {
    if (e instanceof DataForSeoError) throw e
    if (e instanceof Error && e.name === 'AbortError') {
      throw new DataForSeoError('DataForSEO request timed out', 'timeout', undefined, true)
    }
    const raw = e instanceof Error ? e.message : 'Network error'
    throw new DataForSeoError(sanitizeApiMessage(raw), 'network_error', undefined, true)
  } finally {
    clearTimeout(timer)
  }
}

async function dfsPost<T>(url: string, body: unknown[]): Promise<DfsTaskResponse<T>> {
  return dfsRequest<T>(url, { method: 'POST', body })
}

async function dfsGet<T>(url: string): Promise<DfsTaskResponse<T>> {
  return dfsRequest<T>(url, { method: 'GET' })
}

/** Cheapest auth check: GET /v3/appendix/user_data (no autocomplete charge). */
export async function testDataForSeoConnection(): Promise<DataForSeoConnectionTestResult> {
  if (!getDataForSeoCredentials()) {
    return { ok: false, message: 'DataForSEO credentials not configured' }
  }

  try {
    const json = await dfsGet<{
      login?: string
      money?: { balance?: number; total?: number }
    }>(DATAFORSEO_USER_DATA_ENDPOINT)

    const task = json.tasks?.[0]
    const result = task?.result?.[0]
    const login = result?.login
    const balance = result?.money?.balance

    return {
      ok: true,
      message: 'DataForSEO authentication successful',
      apiLogin: login ? maskLogin(login) : undefined,
      balanceUsd: balance != null ? Number(balance) : null,
      costUsd: task?.cost ?? json.cost ?? null,
    }
  } catch (e) {
    const err = e instanceof DataForSeoError ? e : new DataForSeoError('Connection test failed', 'unknown')
    return {
      ok: false,
      message: sanitizeApiMessage(err.message),
    }
  }
}

function maskLogin(login: string): string {
  if (login.length <= 4) return '****'
  return `${login.slice(0, 2)}***${login.slice(-2)}`
}

export async function fetchGoogleAutocomplete(params: {
  keyword: string
  languageCode: string
  location: DataForSeoLocationTarget
}): Promise<AutocompleteApiResult> {
  const loc = locationPayload(params.location)
  const json = await dfsPost<{
    items?: { type?: string; suggestion?: string }[]
    check_url?: string
  }>(DATAFORSEO_AUTOCOMPLETE_ENDPOINT, [
    {
      keyword: params.keyword,
      language_code: params.languageCode,
      ...loc,
      client: 'gws-wiz-serp',
    },
  ])

  const task = json.tasks?.[0]
  const result = task?.result?.[0]
  const items = result?.items ?? []
  const suggestions = items
    .filter((i) => i.type === 'autocomplete' && i.suggestion?.trim())
    .map((i) => i.suggestion!.trim())

  const costUsd = task?.cost ?? json.cost ?? null

  return {
    suggestions: [...new Set(suggestions)],
    costUsd: costUsd != null ? Number(costUsd) : null,
    checkUrl: result?.check_url,
  }
}

export async function fetchSearchVolumeBatch(params: {
  keywords: string[]
  languageCode: string
  location: DataForSeoLocationTarget
}): Promise<{ results: SearchVolumeApiResult[]; costUsd: number | null }> {
  const loc = locationPayload(params.location)
  const json = await dfsPost<{
    keyword: string
    search_volume: number | null
    cpc: number | null
    competition: number | null
    monthly_searches?: { year: number; month: number; search_volume: number }[]
  }>(DATAFORSEO_SEARCH_VOLUME_ENDPOINT, [
    {
      keywords: params.keywords.slice(0, 1000),
      language_code: params.languageCode,
      ...loc,
    },
  ])

  const task = json.tasks?.[0]
  const rows = task?.result ?? []
  const results: SearchVolumeApiResult[] = rows.map((r) => ({
    keyword: r.keyword,
    searchVolume: r.search_volume ?? null,
    cpc: r.cpc ?? null,
    competition: r.competition ?? null,
    monthlySearches: r.monthly_searches,
  }))

  return {
    results,
    costUsd: task?.cost ?? json.cost ?? null,
  }
}
