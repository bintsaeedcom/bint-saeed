import { NextRequest, NextResponse } from 'next/server'
import {
  isTabbyConfigured,
  isTabbyCurrency,
  isTabbyProductionSafe,
  resolveTabbyCountryCode,
} from '@/lib/tabby/config'
import { checkTabbyEligibility } from '@/lib/tabby/api'
import { isPlausibleTabbyPhone, normalizeTabbyPhone } from '@/lib/tabby/normalizePhone'
import { tabbyRejectionMessage } from '@/lib/tabby/messages'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Background pre-scoring for checkout UI (buyer email + phone required for a real decision). */
export async function POST(request: NextRequest) {
  if (
    !isTabbyConfigured() ||
    process.env.NEXT_PUBLIC_TABBY_CHECKOUT_ENABLED !== 'true' ||
    !isTabbyProductionSafe()
  ) {
    return NextResponse.json({ eligible: false, configured: false })
  }

  try {
    const body = (await request.json()) as {
      amount?: number
      currency?: string
      phone?: string
      email?: string
      name?: string
      country?: string
      language?: string
    }
    const amount = Number(body.amount)
    const currency = String(body.currency || 'AED').toUpperCase()
    if (!Number.isFinite(amount) || amount <= 0 || !isTabbyCurrency(currency)) {
      return NextResponse.json({ eligible: false, configured: true })
    }

    const countryCode = resolveTabbyCountryCode({
      currency,
      visitorCountry: body.country,
    })

    let phone: string | undefined
    if (typeof body.phone === 'string' && body.phone.trim()) {
      const normalized = normalizeTabbyPhone(body.phone, countryCode)
      if (isPlausibleTabbyPhone(normalized, countryCode)) {
        phone = normalized
      }
    }

    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const result = await checkTabbyEligibility({
      amount,
      currency,
      phone,
      email: email || undefined,
      name: typeof body.name === 'string' ? body.name.trim() : undefined,
      countryCode,
    })

    const language = String(body.language || 'en')
    return NextResponse.json({
      eligible: result.eligible,
      configured: true,
      reason: result.reason,
      status: result.status,
      message: result.eligible
        ? undefined
        : tabbyRejectionMessage(result.reason, language),
      phoneChecked: Boolean(phone && email),
    })
  } catch {
    // Fail-open
    return NextResponse.json({ eligible: true, configured: true })
  }
}
