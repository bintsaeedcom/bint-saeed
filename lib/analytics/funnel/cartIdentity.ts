export type CartFingerprintLine = {
  id: string
  size?: string
  color?: string
  lengthCm?: string | number
  customisationMessage?: string
  quantity: number
}

const CART_ID_KEY = 'bs_cart_id'
const CART_FIRST_SEEN_KEY = 'bs_cart_first_seen'
const CART_LAST_ACTIVITY_KEY = 'bs_cart_last_activity'

function generateCartId(): string {
  return `cart_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`
}

export function getOrCreateCartId(): string {
  if (typeof window === 'undefined') return ''
  try {
    const existing = localStorage.getItem(CART_ID_KEY)?.trim()
    if (existing) return existing
    const id = generateCartId()
    localStorage.setItem(CART_ID_KEY, id)
    const now = new Date().toISOString()
    localStorage.setItem(CART_FIRST_SEEN_KEY, now)
    localStorage.setItem(CART_LAST_ACTIVITY_KEY, now)
    return id
  } catch {
    return generateCartId()
  }
}

export function readCartId(): string | null {
  if (typeof window === 'undefined') return null
  try {
    return localStorage.getItem(CART_ID_KEY)?.trim() || null
  } catch {
    return null
  }
}

export function resetCartIdentity(): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(CART_ID_KEY)
    localStorage.removeItem(CART_FIRST_SEEN_KEY)
    localStorage.removeItem(CART_LAST_ACTIVITY_KEY)
  } catch {
    /* ignore */
  }
}

export function touchCartActivity(): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(CART_LAST_ACTIVITY_KEY, new Date().toISOString())
  } catch {
    /* ignore */
  }
}

export function readCartFirstSeen(): string | null {
  if (typeof window === 'undefined') return null
  try {
    return localStorage.getItem(CART_FIRST_SEEN_KEY)
  } catch {
    return null
  }
}

export function readCartLastActivity(): string | null {
  if (typeof window === 'undefined') return null
  try {
    return localStorage.getItem(CART_LAST_ACTIVITY_KEY)
  } catch {
    return null
  }
}

/** Normalized bag contents for dedup — not used as the permanent cart id. */
export function computeCartFingerprint(items: CartFingerprintLine[]): string {
  const lines = items
    .map((item) =>
      [
        item.id,
        item.size ?? '',
        item.color ?? '',
        item.lengthCm != null ? String(item.lengthCm) : '',
        item.customisationMessage ?? '',
        item.quantity,
      ].join('|'),
    )
    .sort()
  return lines.join(';')
}
