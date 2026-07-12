import { getSiteOrigin } from '@/lib/auth/siteOrigin'
import type { NextRequest } from 'next/server'

const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth'
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token'
const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo'

/** Strip quotes/whitespace pasted from dashboards. */
function readEnv(name: string): string {
  return (process.env[name] ?? '')
    .trim()
    .replace(/^['"]|['"]$/g, '')
    .replace(/\s+/g, '')
}

/**
 * Google Web client IDs always end with `.apps.googleusercontent.com`.
 * Invalid / placeholder values produce Google's 401 invalid_client page.
 */
export function getGoogleClientId(): string | null {
  const id = readEnv('GOOGLE_CLIENT_ID')
  if (!id) return null
  if (!id.endsWith('.apps.googleusercontent.com')) return null
  return id
}

export function getGoogleClientSecret(): string | null {
  const secret = readEnv('GOOGLE_CLIENT_SECRET')
  return secret || null
}

export function isGoogleOAuthConfigured(): boolean {
  return Boolean(getGoogleClientId() && getGoogleClientSecret())
}

/**
 * Redirect URI must match an Authorized redirect URI on the Google OAuth client.
 * Prefer the live request host so localhost + production both work when both URIs are registered.
 */
export function googleRedirectUri(request: NextRequest): string {
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host')
  const proto =
    request.headers.get('x-forwarded-proto') ||
    (host?.includes('localhost') || host?.startsWith('127.') ? 'http' : 'https')
  if (host) {
    return `${proto}://${host.replace(/\/$/, '')}/api/auth/google/callback`
  }
  return `${getSiteOrigin(request)}/api/auth/google/callback`
}

export function buildGoogleAuthUrl(request: NextRequest, state: string): string {
  const clientId = getGoogleClientId()
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
  const clientId = getGoogleClientId()
  const clientSecret = getGoogleClientSecret()
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
    const body = await tokenRes.text().catch(() => '')
    console.error('Google token exchange failed', tokenRes.status, body.slice(0, 400))
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
