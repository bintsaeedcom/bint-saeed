import { memoryAuthStore } from './memoryStore'
import { isRedisConfigured, redisAuthStore } from './redisStore'
import type { VerifiedUserRecord, VerifyPayload } from './types'

/**
 * Production: set UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN (Upstash Redis).
 * Without Redis, an in-memory store is used (fine for local dev only — not for multi-instance deploys).
 */
export const authStore = {
  async getVerifiedUser(email: string): Promise<VerifiedUserRecord | null> {
    if (isRedisConfigured()) {
      return redisAuthStore.getVerifiedUser(email)
    }
    return memoryAuthStore.getVerifiedUser(email)
  },

  async setVerifiedUser(email: string, user: VerifiedUserRecord): Promise<void> {
    if (isRedisConfigured()) {
      await redisAuthStore.setVerifiedUser(email, user)
      return
    }
    await memoryAuthStore.setVerifiedUser(email, user)
  },

  async setPendingVerify(email: string, token: string, payload: VerifyPayload): Promise<void> {
    if (isRedisConfigured()) {
      await redisAuthStore.setPendingVerify(email, token, payload)
      return
    }
    await memoryAuthStore.setPendingVerify(email, token, payload)
  },

  async consumeVerifyToken(token: string): Promise<VerifyPayload | null> {
    if (isRedisConfigured()) {
      return redisAuthStore.consumeVerifyToken(token)
    }
    return memoryAuthStore.consumeVerifyToken(token)
  },
}

export function usingRedis(): boolean {
  return isRedisConfigured()
}
