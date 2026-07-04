import type Stripe from 'stripe'
import { cartSubtotalInCurrency } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import { resolveLineItemSku } from '@/lib/checkout/resolveLineItemSku'
import { buildCheckoutAttributionMetadata } from '@/lib/checkout/attributionMetadata'
import type { ParsedCheckoutRequest } from '@/lib/checkout/types'
import { buildCheckoutPaymentParams } from '@/lib/stripe/checkoutPaymentMethods'
import { buildCheckoutLineItems } from '@/lib/stripe/buildCheckoutLineItems'

export type StripeCheckoutUiMode = 'hosted' | 'elements'

export function resolveStripeCheckoutUiMode(): StripeCheckoutUiMode {
  // UAE Stripe accounts cannot use Stripe-native PayPal. Use direct PayPal checkout rail instead.
  return 'hosted'
}

type BuildSessionOptions = {
  parsed: ParsedCheckoutRequest
  baseUrl: string
  uiMode?: StripeCheckoutUiMode
}

export function buildStripeCheckoutSessionParams({
  parsed,
  baseUrl,
  uiMode = resolveStripeCheckoutUiMode(),
}: BuildSessionOptions): Stripe.Checkout.SessionCreateParams {
  const stripeCurrency = parsed.currency.toLowerCase()
  const lineItems = buildCheckoutLineItems(parsed.items, parsed.currency, baseUrl)

  const metadata: Stripe.MetadataParam = {
    customerEmail: parsed.customerEmail,
    checkoutCurrency: parsed.currency,
    orderItems: JSON.stringify(
      parsed.items.map((item) => ({
        id: item.id,
        productUrl: item.productUrl,
        name: item.name,
        size: item.size,
        color: item.color,
        quantity: item.quantity,
        priceAed: item.price,
        customLength: item.customLength,
        lengthCm: item.lengthCm,
        notes: item.notes,
        customisationMessage: item.customisationMessage,
        customisationSurcharge: item.customisationSurcharge,
        sku:
          item.sku ||
          resolveLineItemSku(item.id, item.color ?? '') ||
          undefined,
      })),
    ),
    discountCodeUsed: parsed.discountCode,
    packagingType: 'signature',
    clientIp: parsed.clientIp,
    clientTimezone: parsed.clientContext.timezone ?? '',
    clientLocalTime: parsed.clientContext.localTime ?? '',
    clientDeviceType: parsed.clientContext.deviceType ?? '',
    checkoutNotes: parsed.checkoutNotes,
    cartSubtotal: String(
      cartSubtotalInCurrency(parsed.items, parsed.currency as SupportedCurrency),
    ),
    ...buildCheckoutAttributionMetadata(parsed.clientContext),
  }

  const shared: Stripe.Checkout.SessionCreateParams = {
    ...buildCheckoutPaymentParams(),
    line_items: lineItems,
    mode: 'payment',
    shipping_address_collection: {
      allowed_countries: ['AE', 'SA', 'KW', 'BH', 'OM', 'QA', 'GB', 'US', 'FR', 'DE', 'IT'],
    },
    billing_address_collection: 'required',
    allow_promotion_codes: true,
    phone_number_collection: {
      enabled: true,
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            currency: stripeCurrency,
          },
          display_name: 'Included',
        },
      },
    ],
    metadata,
    customer_creation: 'always',
    invoice_creation: {
      enabled: true,
      invoice_data: {
        description: 'Bint Saeed Order',
        footer: 'Thank you for shopping with Bint Saeed.',
      },
    },
  }

  if (parsed.customerEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parsed.customerEmail)) {
    shared.customer_email = parsed.customerEmail
  }

  if (uiMode === 'elements') {
    return {
      ...shared,
      ui_mode: 'elements',
      return_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    }
  }

  return {
    ...shared,
    success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/checkout`,
    custom_fields: [
      {
        key: 'delivery_notes',
        label: {
          type: 'custom',
          custom: 'Delivery Instructions (Optional)',
        },
        type: 'text',
        optional: true,
      },
    ],
  }
}

export async function applyCheckoutDiscountCode(
  stripe: Stripe,
  sessionOptions: Stripe.Checkout.SessionCreateParams,
  discountCode: string,
): Promise<void> {
  if (!discountCode) return

  try {
    const promotionCodes = await stripe.promotionCodes.list({
      code: discountCode,
      active: true,
      limit: 1,
    })

    if (promotionCodes.data.length > 0) {
      sessionOptions.discounts = [{ promotion_code: promotionCodes.data[0].id }]
      delete sessionOptions.allow_promotion_codes
    }
  } catch {
    console.log('Discount code lookup failed, allowing manual entry')
  }
}
