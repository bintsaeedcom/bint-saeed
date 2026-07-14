import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { issueGiftCard } from '@/lib/giftCards/issueRedeem'
import { listGiftCards } from '@/lib/giftCards/giftCardStore'
import { isGiftCardDenomination } from '@/lib/giftCards/catalogPrices'
import { normalizeCurrencyCode } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'

export const dynamic = 'force-dynamic'

/** Admin: list gift cards (most recent first). */
export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const cards = await listGiftCards({ limit: 200 })
  return NextResponse.json({
    cards: cards.map((c) => ({
      id: c.id,
      code: c.code,
      status: c.status,
      denominationAed: c.denominationAed,
      balanceAed: c.balanceAed,
      issuedAed: c.issuedAed,
      purchaserEmail: c.purchaserEmail,
      recipientEmail: c.recipientEmail,
      purchaseOrderId: c.purchaseOrderId,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt,
      ledgerCount: c.ledger.length,
    })),
    total: cards.length,
  })
}

/**
 * Admin / fulfilment: issue a gift card after payment confirmation.
 * Automated checkout calls `fulfillPaidGiftCards` from each payment webhook.
 */
export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = await rateLimitResponse(request, 'gift_card_issue', 40, 60)
  if (rl) return rl

  try {
    const body = await request.json()
    const denominationAed = Number(body?.denominationAed)
    if (!isGiftCardDenomination(denominationAed)) {
      return NextResponse.json(
        { error: 'denominationAed must be 500, 1000, 2500, or 5000.' },
        { status: 400 }
      )
    }

    const currencyPaid =
      typeof body?.currencyPaid === 'string'
        ? (normalizeCurrencyCode(body.currencyPaid) as SupportedCurrency)
        : undefined

    const card = await issueGiftCard({
      denominationAed,
      purchaserEmail: typeof body?.purchaserEmail === 'string' ? body.purchaserEmail : undefined,
      recipientEmail: typeof body?.recipientEmail === 'string' ? body.recipientEmail : undefined,
      recipientName: typeof body?.recipientName === 'string' ? body.recipientName : undefined,
      personalMessage: typeof body?.personalMessage === 'string' ? body.personalMessage : undefined,
      purchaseOrderId: typeof body?.purchaseOrderId === 'string' ? body.purchaseOrderId : undefined,
      currencyPaid,
      amountPaid: typeof body?.amountPaid === 'number' ? body.amountPaid : undefined,
    })

    return NextResponse.json({
      ok: true,
      card: {
        id: card.id,
        code: card.code,
        status: card.status,
        denominationAed: card.denominationAed,
        balanceAed: card.balanceAed,
        createdAt: card.createdAt,
      },
    })
  } catch (e) {
    console.error('gift-card-issue', e)
    return NextResponse.json({ error: 'Unable to issue gift card.' }, { status: 500 })
  }
}
