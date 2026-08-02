import type Stripe from 'stripe'
import { cartSubtotalInCurrency } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import { resolveLineItemSku } from '@/lib/checkout/resolveLineItemSku'
import { buildCheckoutAttributionMetadata } from '@/lib/checkout/attributionMetadata'
import type { ParsedCheckoutRequest } from '@/lib/checkout/types'
import { buildCheckoutPaymentParams } from '@/lib/stripe/checkoutPaymentMethods'
import { buildCheckoutLineItems } from '@/lib/stripe/buildCheckoutLineItems'
import { buildProvisionalStripeShippingOption } from '@/lib/stripe/buildStripeShippingOption'
import { STRIPE_SHIPPING_ALLOWED_COUNTRIES } from '@/lib/stripe/stripeShippingAllowedCountries'
import {
  cartRequiresPhysicalShipping,
  compactGiftCardMetaForStripe,
} from '@/lib/giftCards/cartDetection'

export { STRIPE_SHIPPING_ALLOWED_COUNTRIES }

export type StripeCheckoutUiMode = 'hosted' | 'elements' | 'embedded'

export function resolveStripeCheckoutUiMode(): StripeCheckoutUiMode {
  // Prefer hosted Checkout for reliability (UAE accounts + wide ship-to lists).
  // Opt into embedded with STRIPE_CHECKOUT_UI_MODE=embedded when shipping callback is verified.
  const raw = process.env.STRIPE_CHECKOUT_UI_MODE?.trim().toLowerCase()
  if (raw === 'embedded' || raw === 'embedded_page') return 'embedded'
  if (raw === 'elements') return 'elements'
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
  const currency = parsed.currency as SupportedCurrency
  const lineItems = buildCheckoutLineItems(parsed.items, currency, baseUrl)
  const cartSubtotal = cartSubtotalInCurrency(parsed.items, currency)
  const requiresShipping = cartRequiresPhysicalShipping(parsed.items)
  const giftCardMeta = compactGiftCardMetaForStripe(parsed.items)

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
        ...(item.giftCard
          ? {
              giftCard: {
                denominationAed: item.giftCard.denominationAed,
                sendToRecipient: item.giftCard.sendToRecipient,
                recipientName: item.giftCard.recipientName,
                recipientEmail: item.giftCard.recipientEmail,
                personalMessage: item.giftCard.personalMessage?.slice(0, 120),
              },
            }
          : {}),
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
    shippingFee: requiresShipping ? 'pending' : '0',
    shippingScope: requiresShipping ? 'pending' : 'digital',
    ...(giftCardMeta ? { giftCardMeta } : {}),
    ...buildCheckoutAttributionMetadata(parsed.clientContext),
  }

  const shared: Stripe.Checkout.SessionCreateParams = {
    ...buildCheckoutPaymentParams(),
    line_items: lineItems,
    mode: 'payment',
    billing_address_collection: 'required',
    allow_promotion_codes: true,
    phone_number_collection: {
      enabled: true,
    },
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

  if (requiresShipping) {
    shared.shipping_address_collection = {
      allowed_countries: STRIPE_SHIPPING_ALLOWED_COUNTRIES,
    }
    shared.shipping_options = [buildProvisionalStripeShippingOption(currency)]
  }

  if (parsed.customerEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parsed.customerEmail)) {
    shared.customer_email = parsed.customerEmail
  }

  if (uiMode === 'embedded') {
    return {
      ...shared,
      ui_mode: 'embedded_page',
      return_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      ...(requiresShipping
        ? {
            permissions: {
              update_shipping_details: 'server_only' as const,
            },
          }
        : {}),
    }
  }

  if (uiMode === 'elements') {
    return {
      ...shared,
      ui_mode: 'elements',
      return_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      ...(requiresShipping
        ? {
            permissions: {
              update_shipping_details: 'server_only' as const,
            },
          }
        : {}),
    }
  }

  return {
    ...shared,
    ui_mode: 'hosted_page',
    success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/checkout?stripe=cancelled`,
    ...(requiresShipping
      ? {
          custom_fields: [
            {
              key: 'delivery_notes',
              label: {
                type: 'custom' as const,
                custom: 'Delivery Instructions (Optional)',
              },
              type: 'text' as const,
              optional: true,
            },
          ],
        }
      : {}),
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
      const existing = Array.isArray(sessionOptions.discounts) ? [...sessionOptions.discounts] : []
      sessionOptions.discounts = [
        ...existing,
        { promotion_code: promotionCodes.data[0].id },
      ]
      delete sessionOptions.allow_promotion_codes
    }
  } catch {
    console.log('Discount code lookup failed, allowing manual entry')
  }
}
