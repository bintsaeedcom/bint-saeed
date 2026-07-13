import { NextRequest, NextResponse } from 'next/server'
import { isTamaraConfigured, isTamaraCurrency, resolveTamaraCountryCode } from '@/lib/tamara/config'
import { checkTamaraEligibility } from '@/lib/tamara/eligibility'
import { isPlausibleTamaraPhone, normalizeTamaraPhone } from '@/lib/tamara/normalizePhone'

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
      country?: string
    }
    const amount = Number(body.amount)
    const currency = String(body.currency || 'AED').toUpperCase()
    if (!Number.isFinite(amount) || amount <= 0 || !isTamaraCurrency(currency)) {
      return NextResponse.json({ eligible: false, configured: true })
    }

    const countryCode = resolveTamaraCountryCode({
      currency,
      visitorCountry: body.country,
    })

    // Only send a complete, normalized mobile — partial/raw strings make Tamara
    // return is_eligible:false and used to disable the pay button incorrectly.
    let phone: string | undefined
    if (typeof body.phone === 'string' && body.phone.trim()) {
      const normalized = normalizeTamaraPhone(body.phone, countryCode)
      if (isPlausibleTamaraPhone(normalized, countryCode)) {
        phone = normalized
      }
    }

    const result = await checkTamaraEligibility({
      amount,
      currency,
      phone,
    })
    return NextResponse.json({
      eligible: result.eligible,
      configured: true,
      phoneChecked: Boolean(phone),
    })
  } catch {
    return NextResponse.json({ eligible: true, configured: true })
  }
}
