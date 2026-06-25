import { NextRequest, NextResponse } from 'next/server'
import { authStore } from '@/lib/auth/store'
import { exchangeGoogleCode } from '@/lib/auth/googleOAuth'
import { getSiteOrigin } from '@/lib/auth/siteOrigin'
import { attachUserSessionCookie } from '@/lib/auth/setUserSession'
import type { VerifiedUserRecord } from '@/lib/auth/types'
import { rateLimitResponse } from '@/lib/security/rateLimit'

const OAUTH_STATE_COOKIE = 'bs_oauth_state'
const OAUTH_NEXT_COOKIE = 'bs_oauth_next'

function safeNextPath(value: string | undefined): string {
  if (!value || !value.startsWith('/') || value.startsWith('//')) return '/account'
  return value
}

function resolveGoogleName(profile: {
  name?: string
  given_name?: string
  family_name?: string
  email: string
}): string {
  const full = profile.name?.trim()
  if (full) return full.slice(0, 120)
  const combined = [profile.given_name, profile.family_name].filter(Boolean).join(' ').trim()
  if (combined) return combined.slice(0, 120)
  return profile.email.split('@')[0].slice(0, 120)
}

export async function GET(request: NextRequest) {
  const rl = await rateLimitResponse(request, 'auth_google_callback', 30, 600)
  if (rl) return rl

  const origin = getSiteOrigin(request)
  const fail = (code: string) =>
    NextResponse.redirect(new URL(`/sign-in?error=${encodeURIComponent(code)}`, origin))

  const error = request.nextUrl.searchParams.get('error')
  if (error) {
    return fail('google_denied')
  }

  const code = request.nextUrl.searchParams.get('code')?.trim()
  const state = request.nextUrl.searchParams.get('state')?.trim()
  const savedState = request.cookies.get(OAUTH_STATE_COOKIE)?.value
  const next = safeNextPath(request.cookies.get(OAUTH_NEXT_COOKIE)?.value)

  if (!code || !state || !savedState || state !== savedState) {
    return fail('google_state')
  }

  try {
    const profile = await exchangeGoogleCode(request, code)
    const email = profile.email.trim().toLowerCase()
    const name = resolveGoogleName(profile)

    const existing = await authStore.getVerifiedUser(email)
    let record: VerifiedUserRecord

    if (existing) {
      record = {
        ...existing,
        name: existing.name || name,
        authProvider: existing.authProvider === 'email' ? 'email' : 'google',
        googleId: profile.sub,
        picture: profile.picture,
      }
    } else {
      record = {
        name,
        verifiedAt: new Date().toISOString(),
        authProvider: 'google',
        googleId: profile.sub,
        picture: profile.picture,
      }
    }

    await authStore.setVerifiedUser(email, record)

    const redirectUrl = new URL(next, origin)
    redirectUrl.searchParams.set('signed_in', '1')
    const res = NextResponse.redirect(redirectUrl)

    res.cookies.set(OAUTH_STATE_COOKIE, '', { path: '/', maxAge: 0 })
    res.cookies.set(OAUTH_NEXT_COOKIE, '', { path: '/', maxAge: 0 })

    const withCookie = attachUserSessionCookie(res, email)
    if (!withCookie) {
      return fail('session')
    }

    return withCookie
  } catch (e) {
    console.error('google callback', e)
    return fail('google_failed')
  }
}
