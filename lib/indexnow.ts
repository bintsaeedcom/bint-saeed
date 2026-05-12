/**
 * IndexNow API utility — ping Bing / Yandex / partners when URLs change.
 * https://www.indexnow.org/
 *
 * Host the verification key at `https://{host}/{INDEXNOW_KEY}.txt` (contents = the key).
 */

import { getSitemapAbsoluteUrls } from '@/lib/sitemapUrlList'

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')
const indexNowKey = process.env.INDEXNOW_KEY ?? ''

export const INDEXNOW_ENDPOINTS = {
  bing: 'https://www.bing.com/indexnow',
  yandex: 'https://yandex.com/indexnow',
  seznam: 'https://search.seznam.cz/indexnow',
  naver: 'https://searchadvisor.naver.com/indexnow',
} as const

export type SearchEngine = keyof typeof INDEXNOW_ENDPOINTS

export interface IndexNowRequest {
  host: string
  key: string
  urlList: string[]
}

export interface IndexNowResponse {
  success: boolean
  statusCode?: number
  searchEngine: SearchEngine
  message?: string
  error?: string
}

export interface IndexNowBatchResponse {
  results: IndexNowResponse[]
  totalSubmitted: number
  successful: number
  failed: number
}

/** IndexNow keys are 8–128 chars: letters, digits, dashes (see IndexNow docs). */
export function validateIndexNowKey(key: string): boolean {
  if (!key || key.length < 8 || key.length > 128) {
    return false
  }
  return /^[a-zA-Z0-9-]+$/.test(key)
}

/**
 * IndexNow requires `host` in the JSON body to match the hostname of URLs in `urlList`
 * (e.g. `www.example.com` if URLs use https://www.example.com/...). Do not strip `www`.
 */
export function extractHost(url: string): string {
  try {
    return new URL(url).hostname
  } catch {
    return ''
  }
}

export function normalizeUrls(urls: string[]): string[] {
  return urls
    .map((url) => {
      try {
        return new URL(url).toString()
      } catch {
        return null
      }
    })
    .filter((url): url is string => url !== null)
}

export function batchUrls(urls: string[], batchSize: number = 10000): string[][] {
  const batches: string[][] = []
  for (let i = 0; i < urls.length; i += batchSize) {
    batches.push(urls.slice(i, i + batchSize))
  }
  return batches
}

export async function submitToSearchEngine(
  urls: string[],
  searchEngine: SearchEngine,
  key: string = indexNowKey,
  host?: string,
): Promise<IndexNowResponse> {
  if (!validateIndexNowKey(key)) {
    return {
      success: false,
      searchEngine,
      error:
        'Invalid IndexNow key. Key must be 8–128 characters (a–z, A–Z, 0–9, -). Set INDEXNOW_KEY and publish {key}.txt at your site root.',
    }
  }

  if (urls.length === 0) {
    return {
      success: false,
      searchEngine,
      error: 'No URLs provided',
    }
  }

  if (urls.length > 10000) {
    return {
      success: false,
      searchEngine,
      error: 'Too many URLs. Maximum 10,000 URLs per request.',
    }
  }

  const normalizedUrls = normalizeUrls(urls)
  if (normalizedUrls.length === 0) {
    return {
      success: false,
      searchEngine,
      error: 'No valid URLs provided',
    }
  }

  const requestHost = host || extractHost(normalizedUrls[0])
  if (!requestHost) {
    return {
      success: false,
      searchEngine,
      error: 'Could not extract host from URLs',
    }
  }

  const endpoint = INDEXNOW_ENDPOINTS[searchEngine]
  const requestBody: IndexNowRequest = {
    host: requestHost,
    key,
    urlList: normalizedUrls,
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(requestBody),
    })

    const statusCode = response.status

    // IndexNow endpoints (Bing, Yandex, …) return 200 OK or 202 Accepted on success; treat any 2xx as ok.
    if (response.ok) {
      return {
        success: true,
        statusCode,
        searchEngine,
        message: `Successfully submitted ${normalizedUrls.length} URL(s) to ${searchEngine}`,
      }
    }
    const errorText = await response.text().catch(() => 'Unknown error')
    return {
      success: false,
      statusCode,
      searchEngine,
      error: `HTTP ${statusCode}: ${errorText}`,
    }
  } catch (error) {
    return {
      success: false,
      searchEngine,
      error: error instanceof Error ? error.message : 'Network error',
    }
  }
}

export async function submitToMultipleSearchEngines(
  urls: string[],
  searchEngines: SearchEngine[] = ['bing', 'yandex'],
  key: string = indexNowKey,
  host?: string,
): Promise<IndexNowBatchResponse> {
  const normalizedUrls = normalizeUrls(urls)

  if (normalizedUrls.length === 0) {
    return {
      results: [],
      totalSubmitted: 0,
      successful: 0,
      failed: 0,
    }
  }

  const urlBatches = batchUrls(normalizedUrls, 10000)
  const results: IndexNowResponse[] = []

  for (const urlBatch of urlBatches) {
    const promises = searchEngines.map((engine) => submitToSearchEngine(urlBatch, engine, key, host))
    const batchResults = await Promise.all(promises)
    results.push(...batchResults)
  }

  const successful = results.filter((r) => r.success).length
  const failed = results.filter((r) => !r.success).length

  return {
    results,
    totalSubmitted: normalizedUrls.length,
    successful,
    failed,
  }
}

/** Same URLs as `/sitemap.xml` (respects prelaunch vs live). */
export async function getUrlsFromSitemap(): Promise<string[]> {
  return getSitemapAbsoluteUrls()
}

export async function submitSitemapToSearchEngines(
  searchEngines: SearchEngine[] = ['bing', 'yandex'],
  key: string = indexNowKey,
): Promise<IndexNowBatchResponse> {
  const urls = await getUrlsFromSitemap()

  if (urls.length === 0) {
    return {
      results: [],
      totalSubmitted: 0,
      successful: 0,
      failed: 0,
    }
  }

  return submitToMultipleSearchEngines(urls, searchEngines, key)
}

export async function submitSingleUrl(
  url: string,
  searchEngines: SearchEngine[] = ['bing', 'yandex'],
  key: string = indexNowKey,
): Promise<IndexNowBatchResponse> {
  return submitToMultipleSearchEngines([url], searchEngines, key)
}

/** Resolved public site origin (for docs / admin routes). */
export function getIndexNowSiteOrigin(): string {
  return siteUrl
}
