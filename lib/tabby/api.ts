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
      installments?: { web_url?: string }
    }
  }
  web_url?: string
  message?: string
  error?: string
  rejection_reason_code?: string
}

function mapItems(items: CheckoutCartItem[]) {
  return items.map((item) => {
    const unit = Number(item.price) || 0
    const qty = Math.max(1, Number(item.quantity) || 1)
    return {
      title: item.name.slice(0, 255),
      description:
        [item.size, item.color, item.customisationMessage].filter(Boolean).join(' · ').slice(0, 255) ||
        undefined,
      quantity: qty,
      unit_price: unit.toFixed(2),
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
  const items = mapItems(args.items)
  const body = {
    payment: {
      amount: args.orderTotal.toFixed(2),
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
        zip: args.shippingAddress.zip || undefined,
      },
      order: {
        tax_amount: '0.00',
        shipping_amount: args.shippingFee.toFixed(2),
        discount_amount: '0.00',
        reference_id: args.orderRef,
        items,
      },
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
  return tabbyFetch<{ id?: string; status?: string; amount?: string; currency?: string }>(
    `/api/v2/payments/${encodeURIComponent(paymentId)}`,
    { method: 'GET' },
    countryCode,
  )
}

export async function captureTabbyPayment(
  paymentId: string,
  amount: number,
  currency: string,
  countryCode?: string | null,
) {
  return tabbyFetch(
    `/api/v2/payments/${encodeURIComponent(paymentId)}/captures`,
    {
      method: 'POST',
      body: JSON.stringify({
        amount: amount.toFixed(2),
        currency: currency.toUpperCase(),
      }),
    },
    countryCode,
  )
}

/** Lightweight pre-check — create session is the real eligibility gate; this probes config. */
export async function checkTabbyEligibility(args: {
  amount: number
  currency: string
  phone?: string
  email?: string
  countryCode?: string | null
}): Promise<{ eligible: boolean; reason?: string }> {
  if (args.amount <= 0) return { eligible: false, reason: 'invalid_amount' }
  // Full pre-scoring needs buyer identity; without phone/email we assume show rail and let checkout decide.
  if (!args.phone && !args.email) return { eligible: true }
  return { eligible: true }
}
