const buckets = new Map<string, { count: number; resetAt: number }>()

const WINDOW_MS = 15 * 60 * 1000
const MAX_REQUESTS = 40

export function checkRateLimit(clientKey: string): { ok: boolean; retryAfterSec?: number } {
  const now = Date.now()
  const bucket = buckets.get(clientKey)
  if (!bucket || now > bucket.resetAt) {
    buckets.set(clientKey, { count: 1, resetAt: now + WINDOW_MS })
    return { ok: true }
  }
  if (bucket.count >= MAX_REQUESTS) {
    return { ok: false, retryAfterSec: Math.ceil((bucket.resetAt - now) / 1000) }
  }
  bucket.count += 1
  return { ok: true }
}
