import { getSiteOrigin } from '@/lib/auth/siteOrigin'
import type { NextRequest } from 'next/server'

const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth'
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token'
const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo'

export function isGoogleOAuthConfigured(): boolean {
  return Boolean(process.env.GOOGLE_CLIENT_ID?.trim() && process.env.GOOGLE_CLIENT_SECRET?.trim())
}

export function googleRedirectUri(request: NextRequest): string {
  return `${getSiteOrigin(request)}/api/auth/google/callback`
}

export function buildGoogleAuthUrl(request: NextRequest, state: string): string {
  const clientId = process.env.GOOGLE_CLIENT_ID?.trim()
  if (!clientId) throw new Error('GOOGLE_CLIENT_ID is not configured')

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: googleRedirectUri(request),
    response_type: 'code',
    scope: 'openid email profile',
    state,
    prompt: 'select_account',
    access_type: 'online',
  })

  return `${GOOGLE_AUTH_URL}?${params.toString()}`
}

export type GoogleUserInfo = {
  sub: string
  email: string
  email_verified?: boolean
  name?: string
  given_name?: string
  family_name?: string
  picture?: string
}

export async function exchangeGoogleCode(
  request: NextRequest,
  code: string,
): Promise<GoogleUserInfo> {
  const clientId = process.env.GOOGLE_CLIENT_ID?.trim()
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim()
  if (!clientId || !clientSecret) {
    throw new Error('Google OAuth is not configured')
  }

  const tokenRes = await fetch(GOOGLE_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: googleRedirectUri(request),
      grant_type: 'authorization_code',
    }),
  })

  if (!tokenRes.ok) {
    throw new Error('Google token exchange failed')
  }

  const tokenJson = (await tokenRes.json()) as { access_token?: string }
  if (!tokenJson.access_token) {
    throw new Error('Google token missing')
  }

  const profileRes = await fetch(GOOGLE_USERINFO_URL, {
    headers: { Authorization: `Bearer ${tokenJson.access_token}` },
  })

  if (!profileRes.ok) {
    throw new Error('Google userinfo failed')
  }

  const profile = (await profileRes.json()) as GoogleUserInfo
  if (!profile.email || profile.email_verified === false) {
    throw new Error('Google account email is not verified')
  }

  return profile
}
