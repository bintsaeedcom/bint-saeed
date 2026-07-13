import { NextRequest, NextResponse } from 'next/server'
import { isAllowedCheckoutOrigin } from '@/lib/security/allowedCheckoutOrigin'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { normalizeCurrencyCode } from '@/lib/pricing'
import {
  buildStripeShippingOption,
  resolveShippingLabels,
} from '@/lib/stripe/buildStripeShippingOption'
import { getStripeClient, isStripeSecretKeyConfigured } from '@/lib/stripe/getStripeClient'
import { STRIPE_SHIPPING_ALLOWED_COUNTRIES } from '@/lib/stripe/buildCheckoutSessionOptions'

type ShippingDetailsBody = {
  name?: unknown
  address?: {
    country?: unknown
    line1?: unknown
    line2?: unknown
    city?: unknown
    state?: unknown
    postal_code?: unknown
  }
}

function asTrimmedString(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : undefined
}

function parseShippingDetails(raw: unknown): {
  name: string
  address: {
    country: string
    line1: string
    line2?: string
    city?: string
    state?: string
    postal_code?: string
  }
} | null {
  if (!raw || typeof raw !== 'object') return null
  const details = raw as ShippingDetailsBody
  const name = asTrimmedString(details.name)
  const country = asTrimmedString(details.address?.country)?.toUpperCase()
  const line1 = asTrimmedString(details.address?.line1)
  if (!name || !country || !line1) return null

  return {
    name,
    address: {
      country,
      line1,
      line2: asTrimmedString(details.address?.line2),
      city: asTrimmedString(details.address?.city),
      state: asTrimmedString(details.address?.state),
      postal_code: asTrimmedString(details.address?.postal_code),
    },
  }
}

export async function POST(request: NextRequest) {
  if (!isStripeSecretKeyConfigured()) {
    return NextResponse.json(
      { type: 'error', message: 'Checkout is temporarily unavailable.' },
      { status: 503 },
    )
  }

  const tooMany = await rateLimitResponse(request, 'checkout-shipping', 120, 3600)
  if (tooMany) return tooMany

  if (!isAllowedCheckoutOrigin(request)) {
    return NextResponse.json({ type: 'error', message: 'Forbidden' }, { status: 403 })
  }

  try {
    const body = (await request.json()) as Record<string, unknown>
    const checkoutSessionId =
      typeof body.checkout_session_id === 'string' ? body.checkout_session_id.trim() : ''
    const shippingDetails = parseShippingDetails(body.shipping_details)

    if (!checkoutSessionId.startsWith('cs_')) {
      return NextResponse.json(
        { type: 'error', message: 'Invalid checkout session.' },
        { status: 400 },
      )
    }

    if (!shippingDetails) {
      return NextResponse.json(
        {
          type: 'error',
          message: 'Please enter a complete shipping name and street address.',
        },
        { status: 400 },
      )
    }

    if (!shippingDetails.address.city) {
      return NextResponse.json(
        {
          type: 'error',
          message: 'Please enter your city / emirate so we can calculate shipping.',
        },
        { status: 400 },
      )
    }

    const allowed = STRIPE_SHIPPING_ALLOWED_COUNTRIES as readonly string[]
    if (!allowed.includes(shippingDetails.address.country)) {
      return NextResponse.json(
        {
          type: 'error',
          message: `We cannot ship to ${shippingDetails.address.country}. Please choose another destination.`,
        },
        { status: 400 },
      )
    }

    const stripe = getStripeClient()
    const session = await stripe.checkout.sessions.retrieve(checkoutSessionId)

    if (session.status === 'complete' || session.status === 'expired') {
      return NextResponse.json(
        { type: 'error', message: 'This checkout session is no longer active.' },
        { status: 400 },
      )
    }

    const currency = normalizeCurrencyCode(session.currency?.toUpperCase())
    const cartSubtotal = Number(session.metadata?.cartSubtotal ?? 0)
    if (!Number.isFinite(cartSubtotal) || cartSubtotal <= 0) {
      return NextResponse.json(
        { type: 'error', message: 'Unable to calculate shipping for this order.' },
        { status: 400 },
      )
    }

    const labels = resolveShippingLabels({
      subtotal: cartSubtotal,
      currency,
      country: shippingDetails.address.country,
    })
    const shippingOption = buildStripeShippingOption({
      subtotal: cartSubtotal,
      currency,
      country: shippingDetails.address.country,
    })

    await stripe.checkout.sessions.update(checkoutSessionId, {
      collected_information: {
        shipping_details: shippingDetails,
      },
      shipping_options: [shippingOption],
      metadata: {
        ...(session.metadata ?? {}),
        shippingFee: String(labels.fee),
        shippingScope: labels.scope,
        shippingCountry: shippingDetails.address.country,
      },
    })

    return NextResponse.json({
      type: 'object',
      value: { succeeded: true },
      shippingFee: labels.fee,
      shippingScope: labels.scope,
    })
  } catch (error: unknown) {
    console.error('Stripe shipping-options error:', error)
    return NextResponse.json(
      {
        type: 'error',
        message: 'We could not update shipping for this address. Please try again.',
      },
      { status: 500 },
    )
  }
}
