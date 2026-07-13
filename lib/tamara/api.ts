import type { CheckoutCartItem } from '@/lib/checkout/types'
import {
  money,
  tamaraFetch,
  type TamaraAddress,
  type TamaraConsumer,
} from '@/lib/tamara/config'

type CreateSessionArgs = {
  orderRef: string
  orderTotal: number
  shippingFee: number
  currency: string
  countryCode: 'AE' | 'SA'
  locale: 'en_US' | 'ar_SA'
  items: CheckoutCartItem[]
  consumer: TamaraConsumer
  shippingAddress: TamaraAddress
  discountCode?: string
  discountAmount?: number
  description: string
  merchantUrl: {
    success: string
    failure: string
    cancel: string
    notification: string
  }
}

export type TamaraCheckoutSessionResponse = {
  order_id?: string
  checkout_id?: string
  checkout_url?: string
  status?: string
  message?: string
}

function mapItems(items: CheckoutCartItem[], currency: string) {
  return items.map((item) => {
    const unit = Number(item.price) || 0
    const qty = Math.max(1, Number(item.quantity) || 1)
    const lineTotal = unit * qty
    const sku = (item.sku || item.id || 'item').slice(0, 128)
    return {
      reference_id: item.id,
      type: 'Physical',
      name: item.name.slice(0, 255),
      sku,
      quantity: qty,
      unit_price: money(unit, currency),
      tax_amount: money(0, currency),
      discount_amount: money(0, currency),
      total_amount: money(lineTotal, currency),
      ...(item.image ? { image_url: item.image.startsWith('http') ? item.image : undefined } : {}),
      ...(item.productUrl?.startsWith('http') ? { item_url: item.productUrl } : {}),
    }
  })
}

export async function createTamaraCheckoutSession(
  args: CreateSessionArgs,
): Promise<{ ok: boolean; status: number; data: TamaraCheckoutSessionResponse }> {
  const body: Record<string, unknown> = {
    order_reference_id: args.orderRef,
    order_number: args.orderRef,
    total_amount: money(args.orderTotal, args.currency),
    description: args.description.slice(0, 255),
    country_code: args.countryCode,
    payment_type: 'PAY_BY_INSTALMENTS',
    instalments: 4,
    locale: args.locale,
    items: mapItems(args.items, args.currency),
    consumer: {
      first_name: args.consumer.first_name,
      last_name: args.consumer.last_name,
      phone_number: args.consumer.phone_number,
      email: args.consumer.email,
    },
    billing_address: args.shippingAddress,
    shipping_address: args.shippingAddress,
    tax_amount: money(0, args.currency),
    shipping_amount: money(args.shippingFee, args.currency),
    merchant_url: args.merchantUrl,
  }

  if (args.discountCode && args.discountAmount && args.discountAmount > 0) {
    body.discount = {
      name: args.discountCode,
      amount: money(args.discountAmount, args.currency),
    }
  }

  return tamaraFetch<TamaraCheckoutSessionResponse>('/checkout', {
    method: 'POST',
    body: JSON.stringify(body),
  })
}

export async function authoriseTamaraOrder(orderId: string) {
  return tamaraFetch(`/orders/${encodeURIComponent(orderId)}/authorise`, {
    method: 'POST',
    body: JSON.stringify({}),
  })
}

export async function captureTamaraOrder(orderId: string, amount: number, currency: string) {
  return tamaraFetch(`/payments/capture`, {
    method: 'POST',
    body: JSON.stringify({
      order_id: orderId,
      total_amount: money(amount, currency),
    }),
  })
}

export async function cancelTamaraOrder(orderId: string) {
  return tamaraFetch(`/orders/${encodeURIComponent(orderId)}/cancel`, {
    method: 'POST',
    body: JSON.stringify({
      total_amount: money(0, 'AED'),
    }),
  })
}
