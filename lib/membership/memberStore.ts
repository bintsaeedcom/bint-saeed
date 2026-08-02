import { Redis } from '@upstash/redis'
import { emailKeyPart, normalizeCustomerEmail } from '@/lib/customers/customerStore'
import {
  HOUSE_FIRST_PURCHASE_CODE,
  HOUSE_PRIVILEGE_EXPIRES_AT_ISO,
} from '@/lib/membership/constants'

export type HousePromoUsage = {
  code: string
  orderId: string
  at: string
  amountTotal?: number
  currency?: string
}

export type HouseMemberRecord = {
  email: string
  name?: string
  subscribedAt: string
  source?: string
  /** Fixed welcome code shown after subscribe. */
  firstPurchaseCode: string
  /** Set after first paid order activates the personal privilege. */
  privilegeStatus: 'pending_first_order' | 'activated' | 'skipped'
  privilegeCode?: string
  privilegePromoId?: string
  privilegeCouponId?: string
  privilegeStripeCustomerId?: string
  privilegeActivatedAt?: string
  privilegeExpiresAt: string
  firstPaidOrderId?: string
  /** Orders where HOUSE15 / personal privilege codes were applied. */
  promoUsages?: HousePromoUsage[]
  updatedAt: string
}

const KEY_MEMBER = (part: string) => `bs:house:m:${part}`
const KEY_INDEX = 'bs:house:m:index'
const memory = new Map<string, HouseMemberRecord>()
let memoryIndex: string[] = []

let redis: Redis | null = null

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

function sortMemoryIndex() {
  memoryIndex.sort((a, b) => {
    const ta = memory.get(a)?.subscribedAt ?? ''
    const tb = memory.get(b)?.subscribedAt ?? ''
    return tb.localeCompare(ta)
  })
}

async function writeMember(record: HouseMemberRecord): Promise<void> {
  const email = normalizeCustomerEmail(record.email)
  const part = emailKeyPart(email)
  const next: HouseMemberRecord = {
    ...record,
    email,
    updatedAt: new Date().toISOString(),
  }
  const score = new Date(next.subscribedAt || next.updatedAt).getTime() || Date.now()
  const r = getRedis()
  if (r) {
    await r.set(KEY_MEMBER(part), JSON.stringify(next))
    await r.zadd(KEY_INDEX, { score, member: part })
  } else {
    memory.set(part, next)
    if (!memoryIndex.includes(part)) memoryIndex.push(part)
    sortMemoryIndex()
  }
}

export async function getHouseMember(email: string): Promise<HouseMemberRecord | null> {
  const normalized = normalizeCustomerEmail(email)
  if (!normalized.includes('@')) return null
  const part = emailKeyPart(normalized)
  const r = getRedis()
  if (r) {
    const raw = await r.get<string>(KEY_MEMBER(part))
    if (!raw) return null
    try {
      return typeof raw === 'string'
        ? (JSON.parse(raw) as HouseMemberRecord)
        : (raw as unknown as HouseMemberRecord)
    } catch {
      return null
    }
  }
  return memory.get(part) ?? null
}

export async function upsertHouseMemberOnSubscribe(input: {
  email: string
  name?: string
  source?: string
}): Promise<HouseMemberRecord> {
  const email = normalizeCustomerEmail(input.email)
  const now = new Date().toISOString()
  const existing = await getHouseMember(email)

  const next: HouseMemberRecord = {
    email,
    name: input.name?.trim() || existing?.name,
    subscribedAt: existing?.subscribedAt ?? now,
    source: input.source || existing?.source,
    firstPurchaseCode: HOUSE_FIRST_PURCHASE_CODE,
    privilegeStatus: existing?.privilegeStatus ?? 'pending_first_order',
    privilegeCode: existing?.privilegeCode,
    privilegePromoId: existing?.privilegePromoId,
    privilegeCouponId: existing?.privilegeCouponId,
    privilegeStripeCustomerId: existing?.privilegeStripeCustomerId,
    privilegeActivatedAt: existing?.privilegeActivatedAt,
    privilegeExpiresAt: existing?.privilegeExpiresAt ?? HOUSE_PRIVILEGE_EXPIRES_AT_ISO,
    firstPaidOrderId: existing?.firstPaidOrderId,
    promoUsages: existing?.promoUsages ?? [],
    updatedAt: now,
  }

  await writeMember(next)
  return next
}

export async function saveHouseMember(record: HouseMemberRecord): Promise<void> {
  await writeMember(record)
}

/** Record a paid order that used HOUSE15 or a personal House Privilege code. */
export async function recordHousePromoUsage(input: {
  email: string
  code: string
  orderId: string
  amountTotal?: number
  currency?: string
  at?: string
}): Promise<void> {
  const code = input.code.trim().toUpperCase()
  if (!code) return
  const member = await getHouseMember(input.email)
  if (!member) return

  const tracked =
    code === member.firstPurchaseCode ||
    code === (member.privilegeCode || '').toUpperCase() ||
    code === HOUSE_FIRST_PURCHASE_CODE ||
    code.startsWith('HOUSE10-')
  if (!tracked) return

  const usages = [...(member.promoUsages || [])]
  if (usages.some((u) => u.orderId === input.orderId && u.code === code)) {
    return
  }
  usages.push({
    code,
    orderId: input.orderId,
    at: input.at || new Date().toISOString(),
    amountTotal: input.amountTotal,
    currency: input.currency,
  })
  await writeMember({ ...member, promoUsages: usages })
}

export async function listHouseMembers(options?: { limit?: number }): Promise<HouseMemberRecord[]> {
  const limit = options?.limit ?? 400
  const r = getRedis()
  if (r) {
    const parts = await r.zrange(KEY_INDEX, 0, limit - 1, { rev: true })
    const out: HouseMemberRecord[] = []
    for (const part of parts) {
      const raw = await r.get<string>(KEY_MEMBER(part as string))
      if (!raw) continue
      try {
        const parsed =
          typeof raw === 'string'
            ? (JSON.parse(raw) as HouseMemberRecord)
            : (raw as unknown as HouseMemberRecord)
        out.push(parsed)
      } catch {
        /* skip */
      }
    }
    return out
  }
  return memoryIndex
    .slice(0, limit)
    .map((part) => memory.get(part))
    .filter((m): m is HouseMemberRecord => Boolean(m))
}

export function usingRedisForHouseMembers(): boolean {
  return Boolean(getRedis())
}
