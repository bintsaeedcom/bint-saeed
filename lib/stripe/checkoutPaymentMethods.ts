import type Stripe from 'stripe'

/**
 * Stripe Checkout — dynamic payment methods.
 *
 * Omit `payment_method_types` so Dashboard (and optional PMC) control cards and wallets.
 *
 * American Express: Stripe does **not** support Amex for merchant accounts based in
 * the United Arab Emirates. It may appear enabled in Dashboard but is filtered at
 * checkout for UAE Stripe accounts. See Stripe Cards docs (account-country table).
 *
 * If `STRIPE_PAYMENT_METHOD_CONFIGURATION` is set, that PMC must list every method
 * you want (cards + Apple Pay + Google Pay + Link). A PMC without Amex hides it even
 * when the account country supports it.
 *
 * @see https://docs.stripe.com/payments/payment-methods/dynamic-payment-methods
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
