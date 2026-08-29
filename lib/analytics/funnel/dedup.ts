import { Redis } from '@upstash/redis'
import type { FunnelSlackEvent } from '@/lib/analytics/funnel/types'

const DEDUP_TTL_SEC = 60 * 60 * 24 // 24h
const KEY = (cartId: string, event: string, fingerprint: string) =>
  `bs:funnel:slack:${cartId}:${event}:${fingerprint}`

let redis: Redis | null = null
const memoryDedup = new Map<string, number>()

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

function hashFingerprint(fingerprint: string): string {
  let h = 0
  for (let i = 0; i < fingerprint.length; i += 1) {
    h = (h * 31 + fingerprint.charCodeAt(i)) | 0
  }
  return Math.abs(h).toString(36)
}

/**
 * Returns true when this Slack funnel alert should be sent (not a duplicate).
 * Never blocks later-stage events because keys include the event type.
 */
export async function shouldSendFunnelSlackAlert(args: {
  cartId: string
  event: FunnelSlackEvent
  fingerprint: string
}): Promise<boolean> {
  const cartId = args.cartId.trim()
  if (!cartId) return true
  const fp = hashFingerprint(args.fingerprint || 'empty')
  const redisKey = KEY(cartId, args.event, fp)

  const r = getRedis()
  if (r) {
    try {
      const existing = await r.get<string>(redisKey)
      if (existing) return false
      await r.set(redisKey, '1', { ex: DEDUP_TTL_SEC })
      return true
    } catch {
      /* fall through to memory */
    }
  }

  const now = Date.now()
  const expires = memoryDedup.get(redisKey)
  if (expires && expires > now) return false
  memoryDedup.set(redisKey, now + DEDUP_TTL_SEC * 1000)
  if (memoryDedup.size > 5000) {
    for (const [k, v] of memoryDedup) {
      if (v <= now) memoryDedup.delete(k)
    }
  }
  return true
}
