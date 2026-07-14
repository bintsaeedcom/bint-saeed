import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { isAllowedCheckoutOrigin, resolvePublicSiteBaseUrl } from '@/lib/security/allowedCheckoutOrigin'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { notifyHealthAlert } from '@/lib/ops/notifications'
import { parseCheckoutRequestBody } from '@/lib/checkout/parseCheckoutRequest'
import { cartSubtotalInCurrency, resolveShippingFee } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import { cartRequiresPhysicalShipping } from '@/lib/giftCards/cartDetection'
import { resolveOptionalCheckoutGiftCredit } from '@/lib/giftCards/resolveCheckoutGiftCredit'
import { applyGiftCardCreditToStripeSession } from '@/lib/stripe/applyGiftCardCredit'
import {
  applyCheckoutDiscountCode,
  buildStripeCheckoutSessionParams,
  resolveStripeCheckoutUiMode,
  type StripeCheckoutUiMode,
} from '@/lib/stripe/buildCheckoutSessionOptions'
import { getStripeClient, isStripeSecretKeyConfigured } from '@/lib/stripe/getStripeClient'

function stripeErrorMessage(error: unknown): string {
  if (error instanceof Stripe.errors.StripeError) {
    return error.message || 'Stripe rejected this checkout session.'
  }
  if (error instanceof Error && error.message.trim()) return error.message
  return 'Checkout is temporarily unavailable. Please try again.'
}

async function createStripeSession(
  stripe: Stripe,
  parsed: Exclude<ReturnType<typeof parseCheckoutRequestBody>, { error: string; status: number }>,
  baseUrl: string,
  uiMode: StripeCheckoutUiMode,
  giftCredit: Awaited<ReturnType<typeof resolveOptionalCheckoutGiftCredit>>,
) {
  const sessionOptions = buildStripeCheckoutSessionParams({ parsed, baseUrl, uiMode })
  if (parsed.discountCode) {
    await applyCheckoutDiscountCode(stripe, sessionOptions, parsed.discountCode)
  }
  if (giftCredit.ok && giftCredit.credit) {
    await applyGiftCardCreditToStripeSession(stripe, sessionOptions, giftCredit.credit)
  }
  return stripe.checkout.sessions.create(sessionOptions)
}

export async function POST(request: NextRequest) {
  if (!isStripeSecretKeyConfigured()) {
    return NextResponse.json(
      { error: 'Stripe is not configured on this environment.' },
      { status: 503 },
    )
  }

  const tooMany = await rateLimitResponse(request, 'checkout', 45, 3600)
  if (tooMany) return tooMany

  if (!isAllowedCheckoutOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const baseUrl = resolvePublicSiteBaseUrl(request)
  if (!baseUrl) {
    return NextResponse.json({ error: 'Site URL is not configured.' }, { status: 503 })
  }

  try {
    const body = await request.json()
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
    }

    const parsed = parseCheckoutRequestBody(body as Record<string, unknown>, request)
    if ('error' in parsed) {
      return NextResponse.json({ error: parsed.error }, { status: parsed.status })
    }

    const currency = parsed.currency as SupportedCurrency
    const cartSubtotal = cartSubtotalInCurrency(parsed.items, currency)
    if (cartSubtotal <= 0) {
      return NextResponse.json({ error: 'Invalid cart total.' }, { status: 400 })
    }
    const shippingFee = cartRequiresPhysicalShipping(parsed.items)
      ? resolveShippingFee({
          subtotal: cartSubtotal,
          currency,
          country: parsed.clientContext.country,
        })
      : 0
    const gift = await resolveOptionalCheckoutGiftCredit({
      parsed,
      orderTotalBeforeGiftCard: cartSubtotal + shippingFee,
      currency,
    })
    if (!gift.ok) {
      return NextResponse.json({ error: gift.error }, { status: 400 })
    }
    if (gift.amountDue <= 0) {
      return NextResponse.json(
        {
          error: 'This order is fully covered by your gift card.',
          giftCardCoversFull: true,
        },
        { status: 400 },
      )
    }

    const preferredMode = resolveStripeCheckoutUiMode()
    const stripe = getStripeClient()

    let uiMode = preferredMode
    let session: Stripe.Checkout.Session

    try {
      session = await createStripeSession(stripe, parsed, baseUrl, preferredMode, gift)
    } catch (primaryError) {
      // Embedded / elements can fail on account permissions or ship-to config —
      // fall back to hosted Checkout so card payment stays available.
      if (preferredMode === 'hosted') throw primaryError
      console.error('Stripe preferred checkout mode failed; falling back to hosted', primaryError)
      uiMode = 'hosted'
      session = await createStripeSession(stripe, parsed, baseUrl, 'hosted', gift)
    }

    if (uiMode === 'embedded' || uiMode === 'elements') {
      if (!session.client_secret) {
        throw new Error('Stripe checkout session missing client secret')
      }
      return NextResponse.json({
        mode: uiMode === 'embedded' ? 'embedded' : 'elements',
        sessionId: session.id,
        clientSecret: session.client_secret,
        publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim() ?? '',
      })
    }

    if (!session.url) {
      throw new Error('Stripe hosted checkout URL missing')
    }

    return NextResponse.json({
      mode: 'hosted',
      sessionId: session.id,
      url: session.url,
    })
  } catch (error: unknown) {
    console.error('Stripe checkout error:', error)
    const message = stripeErrorMessage(error)
    await notifyHealthAlert({
      source: 'api/checkout',
      message,
    })
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
