import { NextRequest, NextResponse } from 'next/server'
import { isTamaraConfigured, isTamaraCurrency } from '@/lib/tamara/config'
import { checkTamaraEligibility } from '@/lib/tamara/eligibility'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Lightweight eligibility probe for checkout UI (phone optional). */
export async function POST(request: NextRequest) {
  if (!isTamaraConfigured()) {
    return NextResponse.json({ eligible: false, configured: false })
  }

  try {
    const body = (await request.json()) as {
      amount?: number
      currency?: string
      phone?: string
    }
    const amount = Number(body.amount)
    const currency = String(body.currency || 'AED').toUpperCase()
    if (!Number.isFinite(amount) || amount <= 0 || !isTamaraCurrency(currency)) {
      return NextResponse.json({ eligible: false, configured: true })
    }

    const result = await checkTamaraEligibility({
      amount,
      currency,
      phone: body.phone,
    })
    return NextResponse.json({ eligible: result.eligible, configured: true })
  } catch {
    return NextResponse.json({ eligible: true, configured: true })
  }
}
