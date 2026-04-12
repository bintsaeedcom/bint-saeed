import type { VerifiedUserRecord, VerifyPayload } from './types'

const TTL_MS = 48 * 60 * 60 * 1000

type Bucket = {
  users: Map<string, VerifiedUserRecord>
  /** token -> payload + wall-clock expiry */
  verify: Map<string, { payload: VerifyPayload; exp: number }>
  /** email -> { token, exp } */
  pend: Map<string, { token: string; exp: number }>
}

function getBucket(): Bucket {
  const g = globalThis as typeof globalThis & { __bintAuthMemory?: Bucket }
  if (!g.__bintAuthMemory) {
    g.__bintAuthMemory = {
      users: new Map(),
      verify: new Map(),
      pend: new Map(),
    }
  }
  return g.__bintAuthMemory
}

function normEmail(email: string): string {
  return email.trim().toLowerCase()
}

function pruneVerify(bucket: Bucket) {
  const now = Date.now()
  for (const [t, v] of bucket.verify) {
    if (v.exp <= now) bucket.verify.delete(t)
  }
  for (const [e, v] of bucket.pend) {
    if (v.exp <= now) bucket.pend.delete(e)
  }
}

export const memoryAuthStore = {
  async getVerifiedUser(email: string): Promise<VerifiedUserRecord | null> {
    const bucket = getBucket()
    return bucket.users.get(normEmail(email)) ?? null
  },

  async setVerifiedUser(email: string, user: VerifiedUserRecord): Promise<void> {
    const bucket = getBucket()
    bucket.users.set(normEmail(email), user)
  },

  async getPendToken(email: string): Promise<string | null> {
    const bucket = getBucket()
    pruneVerify(bucket)
    const e = normEmail(email)
    const row = bucket.pend.get(e)
    if (!row || row.exp <= Date.now()) {
      bucket.pend.delete(e)
      return null
    }
    return row.token
  },

  async clearPendingForEmail(email: string, oldToken?: string): Promise<void> {
    const bucket = getBucket()
    const e = normEmail(email)
    const row = bucket.pend.get(e)
    const tokenToDrop = oldToken ?? row?.token
    if (tokenToDrop) bucket.verify.delete(tokenToDrop)
    bucket.pend.delete(e)
  },

  async setPendingVerify(email: string, token: string, payload: VerifyPayload): Promise<void> {
    const bucket = getBucket()
    pruneVerify(bucket)
    const e = normEmail(email)
    const row = bucket.pend.get(e)
    if (row?.token) bucket.verify.delete(row.token)

    const exp = Date.now() + TTL_MS
    bucket.verify.set(token, { payload, exp })
    bucket.pend.set(e, { token, exp })
  },

  async getVerifyPayload(token: string): Promise<VerifyPayload | null> {
    const bucket = getBucket()
    pruneVerify(bucket)
    const row = bucket.verify.get(token)
    if (!row || row.exp <= Date.now()) {
      bucket.verify.delete(token)
      return null
    }
    return row.payload
  },

  async consumeVerifyToken(token: string): Promise<VerifyPayload | null> {
    const bucket = getBucket()
    const row = bucket.verify.get(token)
    if (!row || row.exp <= Date.now()) {
      bucket.verify.delete(token)
      return null
    }
    const payload = row.payload
    bucket.verify.delete(token)
    bucket.pend.delete(normEmail(payload.email))
    return payload
  },
}
