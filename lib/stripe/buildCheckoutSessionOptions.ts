import type Stripe from 'stripe'
import { cartSubtotalInCurrency } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import { resolveLineItemSku } from '@/lib/checkout/resolveLineItemSku'
import { buildCheckoutAttributionMetadata } from '@/lib/checkout/attributionMetadata'
import type { ParsedCheckoutRequest } from '@/lib/checkout/types'
import { buildCheckoutPaymentParams } from '@/lib/stripe/checkoutPaymentMethods'
import { buildCheckoutLineItems } from '@/lib/stripe/buildCheckoutLineItems'
import { buildProvisionalStripeShippingOption } from '@/lib/stripe/buildStripeShippingOption'

export type StripeCheckoutUiMode = 'hosted' | 'elements' | 'embedded'

export function resolveStripeCheckoutUiMode(): StripeCheckoutUiMode {
  // Embedded Checkout keeps payment fields on Stripe while allowing destination-accurate shipping.
  // UAE Stripe accounts still cannot use Stripe-native PayPal — use the direct PayPal rail.
  return 'embedded'
}

type BuildSessionOptions = {
  parsed: ParsedCheckoutRequest
  baseUrl: string
  uiMode?: StripeCheckoutUiMode
}

/** Countries we currently accept for Stripe address collection. */
export const STRIPE_SHIPPING_ALLOWED_COUNTRIES: Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry[] =
  ['AE', 'SA', 'KW', 'BH', 'OM', 'QA', 'GB', 'US', 'FR', 'DE', 'IT']

export function buildStripeCheckoutSessionParams({
  parsed,
  baseUrl,
  uiMode = resolveStripeCheckoutUiMode(),
}: BuildSessionOptions): Stripe.Checkout.SessionCreateParams {
  const currency = parsed.currency as SupportedCurrency
  const lineItems = buildCheckoutLineItems(parsed.items, currency, baseUrl)
  const cartSubtotal = cartSubtotalInCurrency(parsed.items, currency)

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
    cartSubtotal: String(cartSubtotal),
    // Fee is recalculated when the client enters a shipping address (embedded flow).
    shippingFee: 'pending',
    shippingScope: 'pending',
    ...buildCheckoutAttributionMetadata(parsed.clientContext),
  }

  const shared: Stripe.Checkout.SessionCreateParams = {
    ...buildCheckoutPaymentParams(),
    line_items: lineItems,
    mode: 'payment',
    shipping_address_collection: {
      allowed_countries: STRIPE_SHIPPING_ALLOWED_COUNTRIES,
    },
    billing_address_collection: 'required',
    allow_promotion_codes: true,
    phone_number_collection: {
      enabled: true,
    },
    shipping_options: [buildProvisionalStripeShippingOption(currency)],
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

  if (uiMode === 'embedded') {
    return {
      ...shared,
      ui_mode: 'embedded_page',
      return_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      permissions: {
        update_shipping_details: 'server_only',
      },
    }
  }

  if (uiMode === 'elements') {
    return {
      ...shared,
      ui_mode: 'elements',
      return_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      permissions: {
        update_shipping_details: 'server_only',
      },
    }
  }

  return {
    ...shared,
    ui_mode: 'hosted_page',
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
