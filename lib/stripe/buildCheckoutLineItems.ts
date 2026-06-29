import type Stripe from 'stripe'
import { lineUnitInCurrency, normalizeCurrencyCode, toStripeMinorUnits } from '@/lib/pricing'
import { products as staticProducts } from '@/data/products'
import { resolveSkuByProductId } from '@/lib/products/sku'
import { absoluteProductImageUrl } from '@/lib/products/shopImage'
import type { CheckoutCartItem } from '@/lib/checkout/types'

const MAX_DESC_LEN = 450

export function buildCheckoutLineItems(
  items: CheckoutCartItem[],
  checkoutCurrency: string,
  baseUrl: string,
): Stripe.Checkout.SessionCreateParams.LineItem[] {
  const currency = normalizeCurrencyCode(checkoutCurrency)
  const stripeCurrency = currency.toLowerCase()

  return items.map((item) => {
    const msg = item.customisationMessage?.trim().slice(0, 200) ?? ''
    const hasCustom = msg.length > 0
    const productId = item.id
    const color = item.color ?? ''
    const sku =
      item.sku?.trim() ||
      resolveSkuByProductId(productId, staticProducts, color) ||
      undefined
    const unitAmount = lineUnitInCurrency(
      {
        id: productId,
        price: item.price,
        customisationMessage: msg || undefined,
        customisationSurcharge: item.customisationSurcharge,
      },
      currency,
    )
    const productImage = absoluteProductImageUrl(baseUrl, item.image ?? '')
    const lengthPart =
      item.lengthCm != null && String(item.lengthCm).length > 0
        ? `, Length: ${String(item.lengthCm).slice(0, 24)} cm`
        : item.customLength
          ? `, Length: ${String(item.customLength).slice(0, 48)}`
          : ''
    const customPart = hasCustom
      ? `, Personalisation: ${msg} (customised items are non-returnable)`
      : ''
    const skuPart = sku ? `, SKU: ${sku}` : ''
    const descRaw = `Size: ${String(item.size ?? '').slice(0, 48)}, Color: ${String(item.color ?? '').slice(0, 48)}${lengthPart}${
      item.notes ? `, Notes: ${String(item.notes).slice(0, 120)}` : ''
    }${customPart}${skuPart}`
    const description =
      descRaw.length > MAX_DESC_LEN ? `${descRaw.slice(0, MAX_DESC_LEN - 1)}…` : descRaw
    const qty = Math.min(99, Math.max(1, Math.floor(item.quantity) || 1))

    return {
      price_data: {
        currency: stripeCurrency,
        product_data: {
          name: item.name.slice(0, 120),
          description,
          ...(productImage ? { images: [productImage] } : {}),
          ...(sku ? { metadata: { sku: sku.slice(0, 50) } } : {}),
        },
        unit_amount: toStripeMinorUnits(unitAmount, currency),
      },
      quantity: qty,
    }
  })
}
