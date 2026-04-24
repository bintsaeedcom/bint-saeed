import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_COOKIE, isAdminSecretConfigured } from '@/lib/admin/sessionCookie'
import { createAdminSessionCookieValue } from '@/lib/admin/sessionCookie.server'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { timingSafeStringEqual } from '@/lib/security/timingSafeStringEqual'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const rl = await rateLimitResponse(request, 'admin_login', 25, 900)
  if (rl) return rl

  if (!isAdminSecretConfigured()) {
    return NextResponse.json(
      { error: 'Set ADMIN_DASHBOARD_SECRET (min 8 chars) and ADMIN_DASHBOARD_PASSWORD in .env' },
      { status: 503 }
    )
  }

  const pwd = process.env.ADMIN_DASHBOARD_PASSWORD
  if (!pwd) {
    return NextResponse.json({ error: 'Set ADMIN_DASHBOARD_PASSWORD in .env' }, { status: 503 })
  }

  let body: { password?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (typeof body.password !== 'string' || !timingSafeStringEqual(body.password, pwd)) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const token = createAdminSessionCookieValue()
  if (!token) {
    return NextResponse.json({ error: 'Could not create session' }, { status: 500 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
    path: '/',
    maxAge: 7 * 24 * 3600,
  })
  return res
}
