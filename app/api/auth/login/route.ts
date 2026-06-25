import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { authStore } from '@/lib/auth/store'
import { attachUserSessionCookie } from '@/lib/auth/setUserSession'
import { rateLimitResponse } from '@/lib/security/rateLimit'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function norm(email: string): string {
  return email.trim().toLowerCase()
}

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const rl = await rateLimitResponse(request, 'auth_login', 20, 900)
  if (rl) return rl

  let body: { email?: string; password?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const emailRaw = body.email
  const password = body.password

  if (!emailRaw || typeof emailRaw !== 'string') {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
  }
  if (!password || typeof password !== 'string') {
    return NextResponse.json({ error: 'Password is required.' }, { status: 400 })
  }

  const email = norm(emailRaw)
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const user = await authStore.getVerifiedUser(email)
  if (!user?.passwordHash) {
    return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 })
  }

  const valid = await bcrypt.compare(password, user.passwordHash)
  if (!valid) {
    return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 })
  }

  const res = NextResponse.json({
    ok: true,
    user: {
      email,
      name: user.name,
      authProvider: user.authProvider,
    },
  })

  const withCookie = attachUserSessionCookie(res, email)
  if (!withCookie) {
    return NextResponse.json({ error: 'Could not create session.' }, { status: 500 })
  }

  return withCookie
}
