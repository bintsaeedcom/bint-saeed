import type { CheckoutCartItem, CheckoutClientContext } from '@/lib/checkout/types'

export type TabbyBuyer = {
  email: string
  phone: string
  name: string
}

export type TabbyShippingAddress = {
  city: string
  address: string
  zip?: string
}

export type PendingTabbyCheckout = {
  items: CheckoutCartItem[]
  currency: string
  cartSubtotal: number
  shippingFee: number
  orderTotal: number
  orderRef: string
  countryCode: 'AE' | 'SA' | 'KW'
  discountCode?: string
  customerEmail?: string
  checkoutNotes?: string
  buyer: TabbyBuyer
  shippingAddress: TabbyShippingAddress
  clientContext?: CheckoutClientContext
  clientIp?: string
  createdAt: string
}

/** Secret key alone is enough to call APIs; merchant code required for multi-store. */
export function isTabbyConfigured(): boolean {
  return Boolean(process.env.TABBY_SECRET_KEY?.trim() && process.env.TABBY_MERCHANT_CODE?.trim())
}

/** Public checkout rail — stays off until you flip the flag after keys land. */
export function isPublicTabbyCheckoutAvailable(): boolean {
  return (
    process.env.NEXT_PUBLIC_TABBY_CHECKOUT_ENABLED === 'true' &&
    Boolean(
      process.env.NEXT_PUBLIC_TABBY_PUBLIC_KEY?.trim() ||
        (process.env.TABBY_SECRET_KEY?.trim() && process.env.TABBY_MERCHANT_CODE?.trim()),
    )
  )
}

/**
 * UAE/KW → api.tabby.ai · KSA → api.tabby.sa
 * Override with TABBY_API_BASE_URL when Tabby gives you a fixed host.
 */
export function getTabbyApiBaseUrl(countryCode?: string | null): string {
  const explicit = process.env.TABBY_API_BASE_URL?.trim()
  if (explicit) return explicit.replace(/\/$/, '')
  const cc = (countryCode || '').toUpperCase()
  if (cc === 'SA') return 'https://api.tabby.sa'
  return 'https://api.tabby.ai'
}

export function getTabbySecretKey(): string {
  return process.env.TABBY_SECRET_KEY?.trim() ?? ''
}

export function getTabbyMerchantCode(): string {
  return process.env.TABBY_MERCHANT_CODE?.trim() ?? ''
}

export function getTabbyPublicKey(): string | null {
  const key = process.env.NEXT_PUBLIC_TABBY_PUBLIC_KEY?.trim()
  return key || null
}

export function getTabbyWebhookSecret(): string {
  return process.env.TABBY_WEBHOOK_SECRET?.trim() ?? ''
}

/** Primary markets for Bint Saeed BNPL. */
export const TABBY_CURRENCIES = new Set(['AED', 'SAR', 'KWD'])

export function isTabbyCurrency(currency: string | null | undefined): boolean {
  return Boolean(currency && TABBY_CURRENCIES.has(currency.toUpperCase()))
}

export function resolveTabbyCountryCode(args: {
  currency: string
  visitorCountry?: string | null
}): 'AE' | 'SA' | 'KW' {
  const visitor = args.visitorCountry?.toUpperCase()
  if (visitor === 'SA' || visitor === 'AE' || visitor === 'KW') return visitor
  const cur = args.currency.toUpperCase()
  if (cur === 'SAR') return 'SA'
  if (cur === 'KWD') return 'KW'
  return 'AE'
}

export async function tabbyFetch<T = unknown>(
  path: string,
  init?: RequestInit,
  countryCode?: string | null,
): Promise<{ ok: boolean; status: number; data: T }> {
  const secret = getTabbySecretKey()
  const merchantCode = getTabbyMerchantCode()
  if (!secret || !merchantCode) {
    return { ok: false, status: 503, data: { message: 'Tabby is not configured.' } as T }
  }

  const response = await fetch(`${getTabbyApiBaseUrl(countryCode)}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${secret}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Merchant-Code': merchantCode,
      ...(init?.headers ?? {}),
    },
  })

  let data = {} as T
  try {
    data = (await response.json()) as T
  } catch {
    /* empty */
  }
  return { ok: response.ok, status: response.status, data }
}
