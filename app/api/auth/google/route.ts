import { NextRequest, NextResponse } from 'next/server'
import { randomBytes } from 'crypto'
import { buildGoogleAuthUrl, isGoogleOAuthConfigured } from '@/lib/auth/googleOAuth'
import { getSiteOrigin } from '@/lib/auth/siteOrigin'
import { rateLimitResponse } from '@/lib/security/rateLimit'

const OAUTH_STATE_COOKIE = 'bs_oauth_state'
const OAUTH_NEXT_COOKIE = 'bs_oauth_next'

function safeNextPath(value: string | null): string {
  if (!value || !value.startsWith('/') || value.startsWith('//')) return '/account'
  return value
}

export async function GET(request: NextRequest) {
  const rl = await rateLimitResponse(request, 'auth_google', 30, 600)
  if (rl) return rl

  const origin = getSiteOrigin(request)
  if (!isGoogleOAuthConfigured()) {
    return NextResponse.redirect(new URL('/sign-in?error=google_not_configured', origin))
  }

  const state = randomBytes(24).toString('hex')
  const next = safeNextPath(request.nextUrl.searchParams.get('next'))

  let authUrl: string
  try {
    authUrl = buildGoogleAuthUrl(request, state)
  } catch {
    return NextResponse.redirect(new URL('/sign-in?error=google_not_configured', origin))
  }

  const res = NextResponse.redirect(authUrl)
  const cookieOpts = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? ('strict' as const) : ('lax' as const),
    path: '/',
    maxAge: 600,
  }

  res.cookies.set(OAUTH_STATE_COOKIE, state, cookieOpts)
  res.cookies.set(OAUTH_NEXT_COOKIE, next, cookieOpts)
  return res
}
