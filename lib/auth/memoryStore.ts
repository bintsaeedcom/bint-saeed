import type { PasswordResetPayload, VerifiedUserRecord, VerifyPayload } from './types'

const TTL_MS = 48 * 60 * 60 * 1000
const RESET_TTL_MS = 60 * 60 * 1000

type Bucket = {
  users: Map<string, VerifiedUserRecord>
  /** token -> payload + wall-clock expiry */
  verify: Map<string, { payload: VerifyPayload; exp: number }>
  /** email -> { token, exp } */
  pend: Map<string, { token: string; exp: number }>
  reset: Map<string, { payload: PasswordResetPayload; exp: number }>
  resetPend: Map<string, { token: string; exp: number }>
}

function getBucket(): Bucket {
  const g = globalThis as typeof globalThis & { __bintAuthMemory?: Bucket }
  if (!g.__bintAuthMemory) {
    g.__bintAuthMemory = {
      users: new Map(),
      verify: new Map(),
      pend: new Map(),
      reset: new Map(),
      resetPend: new Map(),
    }
  } else {
    // Hot-reload safety for older in-memory buckets
    if (!g.__bintAuthMemory.reset) g.__bintAuthMemory.reset = new Map()
    if (!g.__bintAuthMemory.resetPend) g.__bintAuthMemory.resetPend = new Map()
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
  for (const [t, v] of bucket.reset) {
    if (v.exp <= now) bucket.reset.delete(t)
  }
  for (const [e, v] of bucket.resetPend) {
    if (v.exp <= now) bucket.resetPend.delete(e)
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

  async clearPasswordResetForEmail(email: string): Promise<void> {
    const bucket = getBucket()
    const e = normEmail(email)
    const row = bucket.resetPend.get(e)
    if (row?.token) bucket.reset.delete(row.token)
    bucket.resetPend.delete(e)
  },

  async setPasswordReset(email: string, token: string): Promise<void> {
    const bucket = getBucket()
    pruneVerify(bucket)
    const e = normEmail(email)
    const existing = bucket.resetPend.get(e)
    if (existing?.token) bucket.reset.delete(existing.token)

    const exp = Date.now() + RESET_TTL_MS
    bucket.reset.set(token, { payload: { email: e }, exp })
    bucket.resetPend.set(e, { token, exp })
  },

  async peekPasswordResetToken(token: string): Promise<PasswordResetPayload | null> {
    const bucket = getBucket()
    pruneVerify(bucket)
    const row = bucket.reset.get(token)
    if (!row || row.exp <= Date.now()) {
      bucket.reset.delete(token)
      return null
    }
    return row.payload
  },

  async consumePasswordResetToken(token: string): Promise<PasswordResetPayload | null> {
    const bucket = getBucket()
    const row = bucket.reset.get(token)
    if (!row || row.exp <= Date.now()) {
      bucket.reset.delete(token)
      return null
    }
    const payload = row.payload
    bucket.reset.delete(token)
    bucket.resetPend.delete(normEmail(payload.email))
    return payload
  },
}
