import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { rateLimitResponse } from '@/lib/security/rateLimit'

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
    apiVersion: '2025-02-24.acacia',
  })
}

export async function POST(request: NextRequest) {
  const rl = await rateLimitResponse(request, 'validate_discount', 40, 60)
  if (rl) return rl

  try {
    const { code } = await request.json()
    if (!code || typeof code !== 'string') {
      return NextResponse.json({ valid: false, message: 'Enter a code' }, { status: 400 })
    }

    const trimmed = code.trim()
    if (!trimmed) {
      return NextResponse.json({ valid: false, message: 'Enter a code' }, { status: 400 })
    }

    const stripe = getStripe()
    const promotionCodes = await stripe.promotionCodes.list({
      code: trimmed,
      active: true,
      limit: 1,
    })

    if (promotionCodes.data.length === 0) {
      return NextResponse.json({ valid: false, message: 'This code is not valid or has expired.' })
    }

    const pc = promotionCodes.data[0]
    if (pc.max_redemptions && pc.times_redeemed >= pc.max_redemptions) {
      return NextResponse.json({ valid: false, message: 'This code has reached its usage limit.' })
    }

    return NextResponse.json({
      valid: true,
      message: 'Code applied.',
      code: pc.code,
    })
  } catch (e) {
    console.error('validate-discount', e)
    return NextResponse.json({ valid: false, message: 'Unable to verify code. Try again.' }, { status: 500 })
  }
}
