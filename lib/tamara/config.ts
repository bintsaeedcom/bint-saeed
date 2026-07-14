import type { CheckoutCartItem, CheckoutClientContext } from '@/lib/checkout/types'
import type { AppliedGiftCardCredit } from '@/lib/giftCards/applyAtCheckout'

/** Tamara sandbox/production money object */
export type TamaraMoney = { amount: number; currency: string }

export type TamaraConsumer = {
  first_name: string
  last_name: string
  phone_number: string
  email: string
}

export type TamaraAddress = {
  first_name: string
  last_name: string
  line1: string
  city: string
  country_code: 'AE' | 'SA'
  phone_number: string
  region?: string
}

export type PendingTamaraCheckout = {
  items: CheckoutCartItem[]
  currency: string
  cartSubtotal: number
  shippingFee: number
  orderTotal: number
  orderRef: string
  countryCode: 'AE' | 'SA'
  discountCode?: string
  customerEmail?: string
  checkoutNotes?: string
  consumer: TamaraConsumer
  shippingAddress: TamaraAddress
  clientContext?: CheckoutClientContext
  clientIp?: string
  appliedGiftCard?: AppliedGiftCardCredit
  createdAt: string
}

export function isTamaraConfigured(): boolean {
  return Boolean(process.env.TAMARA_API_TOKEN?.trim())
}

export function isPublicTamaraCheckoutAvailable(): boolean {
  return (
    process.env.NEXT_PUBLIC_TAMARA_CHECKOUT_ENABLED === 'true' &&
    Boolean(process.env.NEXT_PUBLIC_TAMARA_PUBLIC_KEY?.trim() || process.env.TAMARA_API_TOKEN?.trim())
  )
}

/**
 * Live: https://api.tamara.co
 * Sandbox: https://api-sandbox.tamara.co
 * Token and base URL must match the same environment or Tamara returns "Invalid credentials".
 */
export function getTamaraApiBaseUrl(): string {
  let base = (process.env.TAMARA_API_BASE_URL?.trim() || 'https://api-sandbox.tamara.co').replace(
    /\/$/,
    '',
  )
  // Common typo from merchant docs: ap.tamara.co → api.tamara.co
  if (base === 'https://ap.tamara.co' || base === 'http://ap.tamara.co' || base === 'ap.tamara.co') {
    base = 'https://api.tamara.co'
  }
  if (
    base === 'https://ap-sandbox.tamara.co' ||
    base === 'http://ap-sandbox.tamara.co' ||
    base === 'ap-sandbox.tamara.co'
  ) {
    base = 'https://api-sandbox.tamara.co'
  }
  if (!/^https?:\/\//i.test(base)) {
    base = `https://${base}`
  }
  return base.replace(/\/$/, '')
}

export function getTamaraApiToken(): string {
  return process.env.TAMARA_API_TOKEN?.trim() ?? ''
}

export function getTamaraNotificationToken(): string {
  return process.env.TAMARA_NOTIFICATION_TOKEN?.trim() ?? ''
}

export function getTamaraPublicKey(): string | null {
  const key = process.env.NEXT_PUBLIC_TAMARA_PUBLIC_KEY?.trim()
  return key || null
}

/** Currencies Tamara accepts (UAE + KSA primary for Bint Saeed). */
export const TAMARA_CURRENCIES = new Set(['AED', 'SAR'])

export function isTamaraCurrency(currency: string | null | undefined): boolean {
  return Boolean(currency && TAMARA_CURRENCIES.has(currency.toUpperCase()))
}

/** Map cart currency (+ optional visitor geo) → Tamara country. Prefer SA for SAR, AE for AED. */
export function resolveTamaraCountryCode(args: {
  currency: string
  visitorCountry?: string | null
}): 'AE' | 'SA' {
  const visitor = args.visitorCountry?.toUpperCase()
  if (visitor === 'SA' || visitor === 'AE') return visitor
  return args.currency.toUpperCase() === 'SAR' ? 'SA' : 'AE'
}

export function money(amount: number, currency: string): TamaraMoney {
  return { amount: Number(amount.toFixed(2)), currency: currency.toUpperCase() }
}

export async function tamaraFetch<T = unknown>(
  path: string,
  init?: RequestInit,
): Promise<{ ok: boolean; status: number; data: T }> {
  const token = getTamaraApiToken()
  if (!token) {
    return { ok: false, status: 503, data: { message: 'Tamara is not configured.' } as T }
  }

  const response = await fetch(`${getTamaraApiBaseUrl()}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
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
