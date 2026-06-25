import type Stripe from 'stripe'

/**
 * Stripe Checkout dynamic payment methods — omit `payment_method_types` so Dashboard
 * settings control wallets (Google Pay, Apple Pay, Link) and cards.
 * @see https://docs.stripe.com/payments/payment-methods/integration-options#using-dynamic-payment-methods
 */
export function buildCheckoutPaymentParams(): Pick<
  Stripe.Checkout.SessionCreateParams,
  'payment_method_options' | 'payment_method_configuration'
> {
  const params: Pick<
    Stripe.Checkout.SessionCreateParams,
    'payment_method_options' | 'payment_method_configuration'
  > = {
    payment_method_options: {
      card: {
        request_three_d_secure: 'automatic',
      },
    },
  }

  const paymentMethodConfiguration = process.env.STRIPE_PAYMENT_METHOD_CONFIGURATION?.trim()
  if (paymentMethodConfiguration?.startsWith('pmc_')) {
    params.payment_method_configuration = paymentMethodConfiguration
  }

  return params
}
