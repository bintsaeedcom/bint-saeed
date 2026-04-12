import { Redis } from '@upstash/redis'
import type { VerifiedUserRecord, VerifyPayload } from './types'

const TTL_SEC = 48 * 60 * 60

function normEmail(email: string): string {
  return email.trim().toLowerCase()
}

function userKey(email: string) {
  return `bs:user:${normEmail(email)}`
}
function verifyKey(token: string) {
  return `bs:v:${token}`
}
function pendKey(email: string) {
  return `bs:pend:${normEmail(email)}`
}

let client: Redis | null = null

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!client) {
    client = new Redis({ url, token })
  }
  return client
}

export function isRedisConfigured(): boolean {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
}

export const redisAuthStore = {
  async getVerifiedUser(email: string): Promise<VerifiedUserRecord | null> {
    const r = getRedis()
    if (!r) return null
    const raw = await r.get<string>(userKey(email))
    if (!raw) return null
    try {
      return typeof raw === 'string' ? (JSON.parse(raw) as VerifiedUserRecord) : (raw as unknown as VerifiedUserRecord)
    } catch {
      return null
    }
  },

  async setVerifiedUser(email: string, user: VerifiedUserRecord): Promise<void> {
    const r = getRedis()
    if (!r) throw new Error('Redis not configured')
    await r.set(userKey(email), JSON.stringify(user))
  },

  async clearPendingForEmail(email: string): Promise<void> {
    const r = getRedis()
    if (!r) return
    const oldToken = await r.get<string>(pendKey(email))
    if (oldToken) await r.del(verifyKey(oldToken))
    await r.del(pendKey(email))
  },

  async setPendingVerify(email: string, token: string, payload: VerifyPayload): Promise<void> {
    const r = getRedis()
    if (!r) throw new Error('Redis not configured')
    await this.clearPendingForEmail(email)
    await r.set(verifyKey(token), JSON.stringify(payload), { ex: TTL_SEC })
    await r.set(pendKey(email), token, { ex: TTL_SEC })
  },

  async getVerifyPayload(token: string): Promise<VerifyPayload | null> {
    const r = getRedis()
    if (!r) return null
    const raw = await r.get<string>(verifyKey(token))
    if (!raw) return null
    try {
      return typeof raw === 'string' ? (JSON.parse(raw) as VerifyPayload) : (raw as unknown as VerifyPayload)
    } catch {
      return null
    }
  },

  async consumeVerifyToken(token: string): Promise<VerifyPayload | null> {
    const r = getRedis()
    if (!r) return null
    const raw = await r.get<string>(verifyKey(token))
    if (!raw) return null
    let payload: VerifyPayload
    try {
      payload = typeof raw === 'string' ? JSON.parse(raw) : raw
    } catch {
      return null
    }
    await r.del(verifyKey(token))
    await r.del(pendKey(payload.email))
    return payload
  },
}
