import type { CheckoutCartItem } from '@/lib/checkout/types'
import {
  getTabbyMerchantCode,
  tabbyFetch,
  type TabbyBuyer,
  type TabbyShippingAddress,
} from '@/lib/tabby/config'

type CreateSessionArgs = {
  orderRef: string
  orderTotal: number
  shippingFee: number
  discountAmount?: number
  currency: string
  countryCode: 'AE' | 'SA' | 'KW'
  lang: 'en' | 'ar'
  items: CheckoutCartItem[]
  buyer: TabbyBuyer
  shippingAddress: TabbyShippingAddress
  description: string
  merchantUrls: {
    success: string
    cancel: string
    failure: string
  }
}

export type TabbyCheckoutSessionResponse = {
  id?: string
  status?: string
  payment?: { id?: string; status?: string }
  configuration?: {
    available_products?: {
      installments?: Array<{ web_url?: string }>
      installments_xx?: Array<{ web_url?: string }>
      monthly_billing?: Array<{ web_url?: string }>
    }
    products?: {
      installments?: {
        web_url?: string
        rejection_reason?: string
      }
    }
  }
  web_url?: string
  message?: string
  error?: string
  rejection_reason_code?: string
}

function mapItems(items: CheckoutCartItem[], currency: string) {
  const decimals = currency.toUpperCase() === 'KWD' ? 3 : 2
  return items.map((item) => {
    const unit = Number(item.price) || 0
    const qty = Math.max(1, Number(item.quantity) || 1)
    return {
      title: item.name.slice(0, 255),
      description:
        [item.size, item.color, item.customisationMessage].filter(Boolean).join(' · ').slice(0, 255) ||
        undefined,
      quantity: qty,
      unit_price: unit.toFixed(decimals),
      reference_id: item.id,
      category: 'fashion',
      image_url: item.image?.startsWith('http') ? item.image : undefined,
      product_url: item.productUrl?.startsWith('http') ? item.productUrl : undefined,
    }
  })
}

/** Pull hosted checkout URL from the shapes Tabby returns across regions. */
export function extractTabbyWebUrl(data: TabbyCheckoutSessionResponse): string | null {
  if (data.web_url) return data.web_url
  const products = data.configuration?.available_products
  if (products) {
    for (const key of ['installments', 'installments_xx', 'monthly_billing'] as const) {
      const list = products[key]
      const url = list?.[0]?.web_url
      if (url) return url
    }
  }
  const installmentsProduct = data.configuration?.products?.installments?.web_url
  return installmentsProduct || null
}

export async function createTabbyCheckoutSession(
  args: CreateSessionArgs,
): Promise<{ ok: boolean; status: number; data: TabbyCheckoutSessionResponse }> {
  const items = mapItems(args.items, args.currency)
  const nowIso = new Date().toISOString()
  const moneyDecimals = args.currency.toUpperCase() === 'KWD' ? 3 : 2
  const fmt = (n: number) => n.toFixed(moneyDecimals)

  const body = {
    payment: {
      amount: fmt(args.orderTotal),
      currency: args.currency.toUpperCase(),
      description: args.description.slice(0, 255),
      buyer: {
        email: args.buyer.email,
        phone: args.buyer.phone,
        name: args.buyer.name,
      },
      shipping_address: {
        city: args.shippingAddress.city,
        address: args.shippingAddress.address,
        // Schema requires zip — UAE/KSA often omit; send city fallback when blank.
        zip: args.shippingAddress.zip?.trim() || args.shippingAddress.city.slice(0, 16) || '00000',
      },
      order: {
        tax_amount: fmt(0),
        shipping_amount: fmt(args.shippingFee),
        discount_amount: fmt(Math.max(0, args.discountAmount ?? 0)),
        reference_id: args.orderRef,
        items,
      },
      // Required by Tabby session schema — guests: loyalty 0 + empty history.
      buyer_history: {
        registered_since: nowIso,
        loyalty_level: 0,
      },
      order_history: [] as unknown[],
    },
    lang: args.lang,
    merchant_code: getTabbyMerchantCode(),
    merchant_urls: args.merchantUrls,
  }

  return tabbyFetch<TabbyCheckoutSessionResponse>(
    '/api/v2/checkout',
    { method: 'POST', body: JSON.stringify(body) },
    args.countryCode,
  )
}

export async function getTabbyPayment(paymentId: string, countryCode?: string | null) {
  return tabbyFetch<{
    id?: string
    status?: string
    amount?: string
    currency?: string
    captures?: Array<{ id?: string; amount?: string; reference_id?: string }>
    order?: { reference_id?: string }
  }>(`/api/v2/payments/${encodeURIComponent(paymentId)}`, { method: 'GET' }, countryCode)
}

/**
 * Full capture for an AUTHORIZED payment.
 * `referenceId` is required for Tabby idempotency — retries with the same id do not double-capture.
 */
export async function captureTabbyPayment(args: {
  paymentId: string
  amount: number
  currency: string
  referenceId: string
  countryCode?: string | null
  taxAmount?: number
  shippingAmount?: number
  discountAmount?: number
}) {
  const decimals = args.currency.toUpperCase() === 'KWD' ? 3 : 2
  const fmt = (n: number) => Math.max(0, n).toFixed(decimals)
  return tabbyFetch<{
    id?: string
    status?: string
    captures?: Array<{ id?: string; amount?: string; reference_id?: string }>
  }>(
    `/api/v2/payments/${encodeURIComponent(args.paymentId)}/captures`,
    {
      method: 'POST',
      body: JSON.stringify({
        amount: fmt(args.amount),
        reference_id: args.referenceId.slice(0, 200),
        tax_amount: fmt(args.taxAmount ?? 0),
        shipping_amount: fmt(args.shippingAmount ?? 0),
        discount_amount: fmt(args.discountAmount ?? 0),
      }),
    },
    args.countryCode,
  )
}

export async function registerTabbyWebhook(args: {
  url: string
  headerTitle?: string
  headerValue?: string
  countryCode?: string | null
}) {
  const body: Record<string, unknown> = { url: args.url }
  if (args.headerTitle && args.headerValue) {
    body.header = { title: args.headerTitle, value: args.headerValue }
  }
  return tabbyFetch<{ id?: string; url?: string; is_test?: boolean }>(
    '/api/v1/webhooks',
    { method: 'POST', body: JSON.stringify(body) },
    args.countryCode,
  )
}

export async function listTabbyWebhooks(countryCode?: string | null) {
  return tabbyFetch<Array<{ id?: string; url?: string }> | { webhooks?: unknown }>(
    '/api/v1/webhooks',
    { method: 'GET' },
    countryCode,
  )
}

/** Lightweight pre-check — create session is the real eligibility gate; this probes config. */
export async function checkTabbyEligibility(args: {
  amount: number
  currency: string
  phone?: string
  email?: string
  name?: string
  countryCode?: string | null
}): Promise<{ eligible: boolean; reason?: string; status?: string }> {
  if (args.amount <= 0) return { eligible: false, reason: 'invalid_amount' }
  // Without buyer contact, fail-open (show Tabby; place-order session is the hard gate).
  if (!args.phone?.trim() || !args.email?.trim()) {
    return { eligible: true, reason: 'deferred' }
  }

  const body = {
    payment: {
      amount: args.amount.toFixed(2),
      currency: args.currency.toUpperCase(),
      buyer: {
        email: args.email.trim(),
        phone: args.phone.trim(),
        ...(args.name?.trim() ? { name: args.name.trim() } : {}),
      },
    },
    merchant_code: getTabbyMerchantCode(),
  }

  const { ok, data } = await tabbyFetch<TabbyCheckoutSessionResponse>(
    '/api/v2/checkout',
    { method: 'POST', body: JSON.stringify(body) },
    args.countryCode,
  )

  // Fail-open on transport/API errors so checkout never falsely hides Tabby.
  if (!ok) return { eligible: true, reason: 'api_error', status: data.status }

  const status = String(data.status || '').toLowerCase()
  if (status === 'rejected') {
    const reason =
      data.configuration?.products?.installments?.rejection_reason ||
      data.rejection_reason_code ||
      'not_available'
    return { eligible: false, reason: String(reason), status: data.status }
  }

  return {
    eligible: status === 'created' || !status || Boolean(extractTabbyWebUrl(data)),
    status: data.status,
  }
}
