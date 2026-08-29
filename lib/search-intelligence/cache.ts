const memoryCache = new Map<string, { expires: number; value: unknown }>()

export function getCached<T>(key: string): T | null {
  const hit = memoryCache.get(key)
  if (!hit) return null
  if (Date.now() > hit.expires) {
    memoryCache.delete(key)
    return null
  }
  return hit.value as T
}

export function setCached<T>(key: string, value: T, ttlMs = 5 * 60 * 1000): void {
  memoryCache.set(key, { expires: Date.now() + ttlMs, value })
}

export function cacheKey(parts: (string | number | boolean | undefined)[]): string {
  return parts.filter((p) => p !== undefined).join(':')
}
