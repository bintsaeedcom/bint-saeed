import { Redis } from '@upstash/redis'

const EVENT_KEY_PREFIX = 'bs:stripe:event:'
const DEFAULT_TTL_SECONDS = 60 * 60 * 24 * 14 // 14 days

let redis: Redis | null = null
const memoryEvents = new Map<string, number>()

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

function keyFor(eventId: string) {
  return `${EVENT_KEY_PREFIX}${eventId}`
}

function pruneMemory() {
  const now = Date.now()
  for (const [id, expiresAt] of memoryEvents.entries()) {
    if (expiresAt <= now) memoryEvents.delete(id)
  }
}

export async function wasStripeEventProcessed(eventId: string): Promise<boolean> {
  const r = getRedis()
  if (r) {
    const value = await r.get<string>(keyFor(eventId))
    return value === '1'
  }

  pruneMemory()
  const expiresAt = memoryEvents.get(eventId)
  return typeof expiresAt === 'number' && expiresAt > Date.now()
}

export async function markStripeEventProcessed(eventId: string, ttlSeconds = DEFAULT_TTL_SECONDS): Promise<void> {
  const r = getRedis()
  if (r) {
    await r.set(keyFor(eventId), '1', { ex: Math.max(60, Math.floor(ttlSeconds)) })
    return
  }

  pruneMemory()
  memoryEvents.set(eventId, Date.now() + Math.max(60, Math.floor(ttlSeconds)) * 1000)
}
