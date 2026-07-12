import { randomBytes } from 'crypto'
import { NextRequest, NextResponse } from 'next/server'
import { authStore } from '@/lib/auth/store'
import { sendPasswordResetEmail } from '@/lib/auth/sendPasswordResetEmail'
import { rateLimitResponse } from '@/lib/security/rateLimit'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const GENERIC_OK =
  'If an account exists for that email, we’ve sent a password reset link. Please check your inbox.'

function norm(email: string): string {
  return email.trim().toLowerCase()
}

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const rl = await rateLimitResponse(request, 'auth_forgot_password', 5, 3600)
  if (rl) return rl

  let body: { email?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const emailRaw = body.email
  if (!emailRaw || typeof emailRaw !== 'string') {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
  }

  const email = norm(emailRaw)
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const user = await authStore.getVerifiedUser(email)

  // Always return the same success shape to avoid account enumeration.
  if (!user) {
    return NextResponse.json({ ok: true, message: GENERIC_OK })
  }

  const token = randomBytes(32).toString('hex')
  try {
    await authStore.setPasswordReset(email, token)
  } catch (e) {
    console.error('Password reset store error:', e)
    return NextResponse.json({ error: 'Could not start password reset. Try again later.' }, { status: 500 })
  }

  const sent = await sendPasswordResetEmail(request, {
    to: email,
    token,
    name: user.name,
  })

  if (!sent.ok) {
    return NextResponse.json({ error: sent.error }, { status: 503 })
  }

  return NextResponse.json({
    ok: true,
    message: GENERIC_OK,
    ...(sent.devLink ? { devLink: sent.devLink } : {}),
  })
}
