import { NextRequest, NextResponse } from 'next/server'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { lookupGiftCardBalance } from '@/lib/giftCards/issueRedeem'
import { checkoutAmountToGiftCardAed, giftCardBalanceInCurrency } from '@/lib/giftCards/catalogPrices'
import { normalizeCurrencyCode } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'

export const dynamic = 'force-dynamic'

/**
 * Preview gift-card spend for checkout (read-only).
 * Balance is never debited here — paid webhooks call `commitRedeemForPaidOrder`.
 */
export async function POST(request: NextRequest) {
  const rl = await rateLimitResponse(request, 'gift_card_redeem', 40, 60)
  if (rl) return rl

  try {
    const body = await request.json()
    if (body?.commit === true) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Gift card balances are applied after payment. Use preview only from checkout.',
        },
        { status: 403 },
      )
    }

    const code = typeof body?.code === 'string' ? body.code : ''
    const requestedInCurrency = Number(body?.amount)
    const currency = normalizeCurrencyCode(
      typeof body?.currency === 'string' ? body.currency : 'AED',
    ) as SupportedCurrency

    if (!code.trim()) {
      return NextResponse.json({ ok: false, message: 'Enter a gift card code.' }, { status: 400 })
    }
    if (!(requestedInCurrency > 0)) {
      return NextResponse.json({ ok: false, message: 'Invalid amount.' }, { status: 400 })
    }

    const found = await lookupGiftCardBalance(code, currency)
    if (!found) {
      return NextResponse.json({ ok: false, message: 'This gift card code was not found.' })
    }
    if (found.status !== 'active' || found.balanceAed <= 0) {
      return NextResponse.json({ ok: false, message: 'This gift card has no remaining balance.' })
    }
    const requestedAed = checkoutAmountToGiftCardAed(requestedInCurrency, currency)
    const appliedAed = Math.min(found.balanceAed, requestedAed)
    const remainingAed = Math.round((found.balanceAed - appliedAed) * 100) / 100
    return NextResponse.json({
      ok: true,
      preview: true,
      code: found.code,
      appliedAed,
      appliedInCurrency: giftCardBalanceInCurrency(appliedAed, currency),
      remainingAed,
      remainingInCurrency: giftCardBalanceInCurrency(remainingAed, currency),
      currency,
    })
  } catch (e) {
    console.error('gift-card-redeem', e)
    return NextResponse.json({ ok: false, message: 'Unable to apply gift card.' }, { status: 500 })
  }
}
