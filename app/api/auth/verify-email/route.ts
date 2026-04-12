import { NextRequest, NextResponse } from 'next/server'
import { authStore } from '@/lib/auth/store'
import { getSiteOrigin } from '@/lib/auth/siteOrigin'
import type { VerifiedUserRecord } from '@/lib/auth/types'
import { rateLimitResponse } from '@/lib/security/rateLimit'

export async function GET(request: NextRequest) {
  const rl = await rateLimitResponse(request, 'verify_email', 40, 600)
  if (rl) {
    const origin = getSiteOrigin(request)
    return NextResponse.redirect(new URL('/verify-email?error=too_many', origin))
  }

  const origin = getSiteOrigin(request)
  const fail = (code: string) =>
    NextResponse.redirect(new URL(`/verify-email?error=${encodeURIComponent(code)}`, origin))

  const token = request.nextUrl.searchParams.get('token')?.trim()
  if (!token) {
    return fail('missing_token')
  }

  try {
    const payload = await authStore.consumeVerifyToken(token)
    if (!payload) {
      return fail('invalid_or_expired')
    }

    const existing = await authStore.getVerifiedUser(payload.email)
    if (existing) {
      return NextResponse.redirect(new URL('/verify-email?already=1', origin))
    }

    const record: VerifiedUserRecord = {
      passwordHash: payload.passwordHash,
      name: payload.name,
      verifiedAt: new Date().toISOString(),
    }
    await authStore.setVerifiedUser(payload.email, record)

    return NextResponse.redirect(new URL('/verify-email?verified=1', origin))
  } catch (e) {
    console.error('verify-email', e)
    return fail('server')
  }
}
