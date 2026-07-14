import type Stripe from 'stripe'
import type { PaymentProviderName } from '@/lib/orders/types'

const MOLLIE_METHOD_LABELS: Record<string, string> = {
  creditcard: 'Credit card',
  applepay: 'Apple Pay',
  googlepay: 'Google Pay',
  ideal: 'iDEAL',
  bancontact: 'Bancontact',
  paypal: 'PayPal',
  klarna: 'Klarna',
  banktransfer: 'Bank transfer',
}

function titleCase(value: string): string {
  return value
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ')
}

export function formatMolliePaymentMethodLabel(method?: string | null): string {
  if (!method) return 'Mollie'
  const key = method.toLowerCase()
  return MOLLIE_METHOD_LABELS[key] || titleCase(method)
}

export function formatStripePaymentMethodTypes(types?: string[] | null): string {
  if (!types?.length) return 'Stripe Checkout'
  const labels = types.map((type) => {
    if (type === 'card') return 'Card'
    if (type === 'link') return 'Stripe Link'
    return titleCase(type)
  })
  return `Stripe · ${labels.join(', ')}`
}

export async function resolveStripePaymentMethodLabel(
  stripe: Stripe,
  session: Stripe.Checkout.Session,
): Promise<string> {
  try {
    const intentId =
      typeof session.payment_intent === 'string'
        ? session.payment_intent
        : session.payment_intent?.id
    if (intentId) {
      const intent = await stripe.paymentIntents.retrieve(intentId, {
        expand: ['payment_method'],
      })
      const paymentMethod = intent.payment_method
      if (paymentMethod && typeof paymentMethod === 'object') {
        if (paymentMethod.type === 'card' && paymentMethod.card) {
          const wallet = paymentMethod.card.wallet?.type
          if (wallet === 'apple_pay') return 'Apple Pay'
          if (wallet === 'google_pay') return 'Google Pay'
          const brand = paymentMethod.card.brand
            ? titleCase(paymentMethod.card.brand)
            : 'Card'
          const last4 = paymentMethod.card.last4
          return last4 ? `${brand} ···· ${last4}` : brand
        }
        if (paymentMethod.type === 'link') return 'Stripe Link'
        return `Stripe · ${titleCase(paymentMethod.type)}`
      }
    }
  } catch {
    /* fall through */
  }

  return formatStripePaymentMethodTypes(session.payment_method_types)
}

export function formatOrderPaymentMethodLabel(args: {
  provider?: PaymentProviderName
  paymentMethod?: string
}): string {
  if (args.paymentMethod?.trim()) return args.paymentMethod.trim()
  if (args.provider === 'paypal') return 'PayPal'
  if (args.provider === 'mollie') return 'Mollie'
  if (args.provider === 'stripe') return 'Stripe Checkout'
  if (args.provider === 'tamara') return 'Tamara · Pay in 4'
  if (args.provider === 'tabby') return 'Tabby · Pay in 4'
  if (args.provider === 'gift_card') return 'Gift card'
  return 'Unknown'
}
