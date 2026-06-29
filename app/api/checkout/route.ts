import { NextRequest, NextResponse } from 'next/server'
import { isAllowedCheckoutOrigin, resolvePublicSiteBaseUrl } from '@/lib/security/allowedCheckoutOrigin'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { notifyHealthAlert } from '@/lib/ops/notifications'
import { parseCheckoutRequestBody } from '@/lib/checkout/parseCheckoutRequest'
import {
  applyCheckoutDiscountCode,
  buildStripeCheckoutSessionParams,
  resolveStripeCheckoutUiMode,
} from '@/lib/stripe/buildCheckoutSessionOptions'
import { getStripeClient, isStripeSecretKeyConfigured } from '@/lib/stripe/getStripeClient'

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

    const uiMode = resolveStripeCheckoutUiMode()
    const sessionOptions = buildStripeCheckoutSessionParams({ parsed, baseUrl, uiMode })
    const stripe = getStripeClient()

    if (parsed.discountCode) {
      await applyCheckoutDiscountCode(stripe, sessionOptions, parsed.discountCode)
    }

    const session = await stripe.checkout.sessions.create(sessionOptions)

    if (uiMode === 'elements') {
      if (!session.client_secret) {
        throw new Error('Stripe elements session missing client secret')
      }
      return NextResponse.json({
        mode: 'elements',
        sessionId: session.id,
        clientSecret: session.client_secret,
      })
    }

    return NextResponse.json({
      mode: 'hosted',
      sessionId: session.id,
      url: session.url,
    })
  } catch (error: unknown) {
    console.error('Stripe checkout error:', error)
    await notifyHealthAlert({
      source: 'api/checkout',
      message: error instanceof Error ? error.message : 'Unknown checkout error',
    })
    return NextResponse.json(
      { error: 'Checkout is temporarily unavailable. Please try again.' },
      { status: 500 },
    )
  }
}
