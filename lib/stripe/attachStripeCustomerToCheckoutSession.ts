import type Stripe from 'stripe'
import { getHouseMember } from '@/lib/membership/memberStore'

/**
 * Prefer an existing Stripe Customer so email-locked promotion codes
 * (House Privilege) redeem correctly on return visits.
 * First-time guests keep `customer_email` + `customer_creation`.
 */
export async function attachStripeCustomerToCheckoutSession(
  stripe: Stripe,
  sessionOptions: Stripe.Checkout.SessionCreateParams,
  email: string | undefined,
): Promise<void> {
  const normalized = (email || '').trim().toLowerCase()
  if (!normalized || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) return

  try {
    let customerId: string | undefined

    const member = await getHouseMember(normalized)
    if (member?.privilegeStripeCustomerId) {
      customerId = member.privilegeStripeCustomerId
    }

    if (!customerId) {
      const existing = await stripe.customers.list({ email: normalized, limit: 1 })
      customerId = existing.data[0]?.id
    }

    if (!customerId) return

    sessionOptions.customer = customerId
    delete sessionOptions.customer_email
    delete sessionOptions.customer_creation
  } catch (e) {
    console.error('attachStripeCustomerToCheckoutSession', e)
  }
}
