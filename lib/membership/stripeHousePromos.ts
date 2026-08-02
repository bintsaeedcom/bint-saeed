import type Stripe from 'stripe'
import { getStripeClient, isStripeSecretKeyConfigured } from '@/lib/stripe/getStripeClient'
import {
  HOUSE_FIRST_PURCHASE_CODE,
  HOUSE_FIRST_PURCHASE_PERCENT,
  HOUSE_PRIVILEGE_PERCENT,
  housePrivilegeExpiresAtUnix,
} from '@/lib/membership/constants'

async function findPromotionByCode(stripe: Stripe, code: string): Promise<Stripe.PromotionCode | null> {
  const list = await stripe.promotionCodes.list({ code, active: true, limit: 1 })
  return list.data[0] ?? null
}

/** Ensure the shared HOUSE15 promotion exists (idempotent). */
export async function ensureHouse15PromotionCode(): Promise<{ ok: boolean; code: string; error?: string }> {
  if (!isStripeSecretKeyConfigured()) {
    return { ok: false, code: HOUSE_FIRST_PURCHASE_CODE, error: 'Stripe not configured' }
  }
  try {
    const stripe = getStripeClient()
    const existing = await findPromotionByCode(stripe, HOUSE_FIRST_PURCHASE_CODE)
    if (existing) return { ok: true, code: HOUSE_FIRST_PURCHASE_CODE }

    const coupon = await stripe.coupons.create({
      percent_off: HOUSE_FIRST_PURCHASE_PERCENT,
      duration: 'once',
      name: 'House welcome — 15% first purchase',
      metadata: {
        purpose: 'house_community_first_purchase',
        code: HOUSE_FIRST_PURCHASE_CODE,
      },
    })

    await stripe.promotionCodes.create({
      promotion: { type: 'coupon', coupon: coupon.id },
      code: HOUSE_FIRST_PURCHASE_CODE,
      active: true,
      restrictions: {
        first_time_transaction: true,
      },
      metadata: {
        purpose: 'house_community_first_purchase',
      },
    })

    return { ok: true, code: HOUSE_FIRST_PURCHASE_CODE }
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e)
    console.error('ensureHouse15PromotionCode', message)
    return { ok: false, code: HOUSE_FIRST_PURCHASE_CODE, error: message }
  }
}

function personalCodeForEmail(email: string): string {
  const digest = Buffer.from(email.toLowerCase(), 'utf8')
    .toString('base64url')
    .replace(/[^A-Z0-9]/gi, '')
    .toUpperCase()
    .slice(0, 6)
  const suffix = digest.padEnd(6, 'X').slice(0, 6)
  return `HOUSE10-${suffix}`
}

async function findOrCreateStripeCustomer(
  stripe: Stripe,
  email: string,
  name?: string,
): Promise<Stripe.Customer> {
  const existing = await stripe.customers.list({ email, limit: 1 })
  if (existing.data[0]) {
    if (name?.trim() && !existing.data[0].name) {
      return stripe.customers.update(existing.data[0].id, { name: name.trim() })
    }
    return existing.data[0]
  }
  return stripe.customers.create({
    email,
    name: name?.trim() || undefined,
    metadata: { purpose: 'house_privilege' },
  })
}

/**
 * Create a personal 10% promotion code locked to this Stripe customer,
 * reusable until 29 August 2027.
 */
export async function createPersonalHousePrivilegePromo(input: {
  email: string
  name?: string
}): Promise<
  | {
      ok: true
      code: string
      promoId: string
      couponId: string
      stripeCustomerId: string
      expiresAtUnix: number
    }
  | { ok: false; error: string }
> {
  if (!isStripeSecretKeyConfigured()) {
    return { ok: false, error: 'Stripe not configured' }
  }

  try {
    const stripe = getStripeClient()
    const customer = await findOrCreateStripeCustomer(stripe, input.email, input.name)
    const expiresAt = housePrivilegeExpiresAtUnix()
    let code = personalCodeForEmail(input.email)

    const existing = await findPromotionByCode(stripe, code)
    if (existing) {
      // If an old code exists without customer lock, mint a unique variant.
      const lockedTo =
        typeof existing.customer === 'string'
          ? existing.customer
          : existing.customer && typeof existing.customer === 'object'
            ? existing.customer.id
            : null
      if (lockedTo === customer.id) {
        return {
          ok: true,
          code: existing.code,
          promoId: existing.id,
          couponId:
            typeof existing.promotion === 'object' &&
            existing.promotion &&
            'coupon' in existing.promotion
              ? String((existing.promotion as { coupon?: string }).coupon ?? '')
              : '',
          stripeCustomerId: customer.id,
          expiresAtUnix: expiresAt,
        }
      }
      code = `${code}${Math.floor(Math.random() * 90 + 10)}`
    }

    // `once` = discount applies per Checkout payment; promo stays reusable until expires_at.
    const coupon = await stripe.coupons.create({
      percent_off: HOUSE_PRIVILEGE_PERCENT,
      duration: 'once',
      name: `House Privilege 10% — ${input.email}`.slice(0, 40),
      metadata: {
        purpose: 'house_privilege_personal',
        member_email: input.email.toLowerCase(),
      },
    })

    const promo = await stripe.promotionCodes.create({
      promotion: { type: 'coupon', coupon: coupon.id },
      code,
      active: true,
      customer: customer.id,
      expires_at: expiresAt,
      metadata: {
        purpose: 'house_privilege_personal',
        member_email: input.email.toLowerCase(),
      },
    })

    return {
      ok: true,
      code: promo.code,
      promoId: promo.id,
      couponId: coupon.id,
      stripeCustomerId: customer.id,
      expiresAtUnix: expiresAt,
    }
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e)
    console.error('createPersonalHousePrivilegePromo', message)
    return { ok: false, error: message }
  }
}
