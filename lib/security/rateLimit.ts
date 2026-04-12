import { Redis } from '@upstash/redis'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getClientIp } from './clientIp'

let redis: Redis | null = null

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

type MemBucket = { count: number; resetAt: number }
const memoryBuckets = new Map<string, MemBucket>()

function memoryCleanup() {
  if (memoryBuckets.size < 5000) return
  const now = Date.now()
  for (const [k, v] of memoryBuckets) {
    if (v.resetAt <= now) memoryBuckets.delete(k)
  }
}

export type RateLimitResult = { ok: true } | { ok: false; retryAfterSec: number }

/**
 * Sliding-window style limit using Redis INCR or in-memory fallback (per server instance).
 */
export async function rateLimit(
  scope: string,
  identifier: string,
  limit: number,
  windowSec: number
): Promise<RateLimitResult> {
  const safeId = identifier.replace(/[^\w.:@-]/g, '_').slice(0, 128)
  const key = `bs:rl:${scope}:${safeId}`

  const r = getRedis()
  if (r) {
    const n = await r.incr(key)
    if (n === 1) await r.expire(key, windowSec)
    if (n > limit) {
      const ttl = await r.ttl(key)
      const retryAfterSec = ttl > 0 ? ttl : windowSec
      return { ok: false, retryAfterSec }
    }
    return { ok: true }
  }

  memoryCleanup()
  const now = Date.now()
  const windowMs = windowSec * 1000
  const b = memoryBuckets.get(key)
  if (!b || b.resetAt <= now) {
    memoryBuckets.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true }
  }
  b.count += 1
  if (b.count > limit) {
    return { ok: false, retryAfterSec: Math.max(1, Math.ceil((b.resetAt - now) / 1000)) }
  }
  return { ok: true }
}

export async function rateLimitResponse(
  request: NextRequest,
  scope: string,
  limit: number,
  windowSec: number
): Promise<NextResponse | null> {
  const ip = getClientIp(request)
  const res = await rateLimit(scope, ip, limit, windowSec)
  if (res.ok) return null
  return NextResponse.json(
    { error: 'Too many requests. Please try again later.' },
    {
      status: 429,
      headers: { 'Retry-After': String(res.retryAfterSec) },
    }
  )
}
