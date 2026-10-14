import type Stripe from 'stripe'
import { getHouseMember } from '@/lib/membership/memberStore'

export function lockedCustomerIdForPromo(pc: Stripe.PromotionCode): string | null {
  const c = pc.customer
  if (!c) return null
  return typeof c === 'string' ? c : c.id
}

/** Personal codes are locked to one Stripe customer; Checkout rejects them unless that customer is attached. */
export async function promoCustomerMatchesEmail(
  stripe: Stripe,
  customerId: string,
  email: string | undefined,
): Promise<boolean> {
  const normalized = (email || '').trim().toLowerCase()
  if (!normalized || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) return false

  const member = await getHouseMember(normalized).catch(() => null)
  if (member?.privilegeStripeCustomerId === customerId) return true

  const customer = await stripe.customers.retrieve(customerId)
  if (customer.deleted) return false
  return (customer.email || '').trim().toLowerCase() === normalized
}
