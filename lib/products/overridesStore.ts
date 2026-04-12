import { Redis } from '@upstash/redis'

export interface ProductOverride {
  price?: number
  name?: string
  /** When false, product is hidden from shop/catalog API */
  published?: boolean
}

const HASH = 'bs:prod_override'

let redis: Redis | null = null
const memory = new Map<string, ProductOverride>()

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

export async function getAllOverrides(): Promise<Record<string, ProductOverride>> {
  const r = getRedis()
  if (r) {
    const raw = await r.hgetall<Record<string, string>>(HASH)
    if (!raw) return {}
    const out: Record<string, ProductOverride> = {}
    for (const [k, v] of Object.entries(raw)) {
      try {
        out[k] = JSON.parse(v) as ProductOverride
      } catch {
        /* skip */
      }
    }
    return out
  }
  const out: Record<string, ProductOverride> = {}
  memory.forEach((v, k) => {
    out[k] = v
  })
  return out
}

export async function setOverride(productId: string, patch: ProductOverride): Promise<void> {
  const r = getRedis()
  const merged: ProductOverride = { ...(await getOverride(productId)), ...patch }
  if (r) {
    await r.hset(HASH, { [productId]: JSON.stringify(merged) })
    return
  }
  memory.set(productId, merged)
}

export async function getOverride(productId: string): Promise<ProductOverride> {
  const all = await getAllOverrides()
  return all[productId] ?? {}
}

export async function clearOverride(productId: string): Promise<void> {
  const r = getRedis()
  if (r) {
    await r.hdel(HASH, productId)
    return
  }
  memory.delete(productId)
}
