import { Redis } from '@upstash/redis'
import { getCached, setCached, cacheKey } from '@/lib/search-intelligence/cache'
import { cacheTtlMs } from '@/lib/search-intelligence/dataforseo/config'

const KEY_PREFIX = 'bs:si:dfs:cache:'

let redis: Redis | null = null

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

export type AutocompleteCacheEntry = {
  suggestions: string[]
  fetchedAt: string
  costUsd: number | null
  locationKey: string
}

function redisKey(parts: (string | number)[]): string {
  return KEY_PREFIX + cacheKey(parts)
}

export async function getAutocompleteCache(
  seed: string,
  country: string,
  language: string,
  pattern: string,
  locationKey: string,
): Promise<AutocompleteCacheEntry | null> {
  const key = redisKey([seed, country, language, pattern, locationKey])
  const r = getRedis()
  if (r) {
    const raw = await r.get<string>(key)
    if (!raw) return null
    const entry = typeof raw === 'string' ? (JSON.parse(raw) as AutocompleteCacheEntry) : (raw as AutocompleteCacheEntry)
    const age = Date.now() - Date.parse(entry.fetchedAt)
    if (age > cacheTtlMs()) return null
    return entry
  }
  return getCached<AutocompleteCacheEntry>(key)
}

export async function setAutocompleteCache(
  seed: string,
  country: string,
  language: string,
  pattern: string,
  locationKey: string,
  entry: AutocompleteCacheEntry,
): Promise<void> {
  const key = redisKey([seed, country, language, pattern, locationKey])
  const r = getRedis()
  if (r) {
    await r.set(key, JSON.stringify(entry), { ex: Math.ceil(cacheTtlMs() / 1000) })
    return
  }
  setCached(key, entry, cacheTtlMs())
}
