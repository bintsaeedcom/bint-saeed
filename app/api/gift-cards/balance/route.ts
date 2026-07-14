import { NextRequest, NextResponse } from 'next/server'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { normalizeCurrencyCode } from '@/lib/pricing'
import { lookupGiftCardBalance } from '@/lib/giftCards/issueRedeem'
import type { SupportedCurrency } from '@/lib/pricing/types'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  const rl = await rateLimitResponse(request, 'gift_card_balance', 30, 60)
  if (rl) return rl

  try {
    const body = await request.json()
    const code = typeof body?.code === 'string' ? body.code : ''
    if (!code.trim()) {
      return NextResponse.json({ ok: false, message: 'Enter a code.' }, { status: 400 })
    }
    const currency = normalizeCurrencyCode(
      typeof body?.currency === 'string' ? body.currency : 'AED'
    ) as SupportedCurrency

    const result = await lookupGiftCardBalance(code, currency)
    if (!result) {
      return NextResponse.json({ ok: false, message: 'This gift card code was not found.' })
    }

    return NextResponse.json({
      ok: true,
      ...result,
    })
  } catch (e) {
    console.error('gift-card-balance', e)
    return NextResponse.json({ ok: false, message: 'Unable to check balance.' }, { status: 500 })
  }
}
