import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { authStore } from '@/lib/auth/store'
import { passwordsMatch, validatePassword } from '@/lib/auth/passwordPolicy'
import { rateLimitResponse } from '@/lib/security/rateLimit'

export const runtime = 'nodejs'

/** Peek whether a reset token is still valid (does not consume it). */
export async function GET(request: NextRequest) {
  const rl = await rateLimitResponse(request, 'auth_reset_password_peek', 30, 600)
  if (rl) return rl

  const token = request.nextUrl.searchParams.get('token')?.trim() || ''
  if (!token) {
    return NextResponse.json({ ok: false, valid: false }, { status: 400 })
  }

  const payload = await authStore.peekPasswordResetToken(token)
  return NextResponse.json({ ok: true, valid: Boolean(payload) })
}

export async function POST(request: NextRequest) {
  const rl = await rateLimitResponse(request, 'auth_reset_password', 10, 900)
  if (rl) return rl

  let body: { token?: string; password?: string; confirmPassword?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const token = typeof body.token === 'string' ? body.token.trim() : ''
  const password = body.password
  const confirmPassword = body.confirmPassword

  if (!token) {
    return NextResponse.json({ error: 'Reset link is invalid or has expired.' }, { status: 400 })
  }

  if (!password || typeof password !== 'string') {
    return NextResponse.json({ error: 'Password is required.' }, { status: 400 })
  }

  const passwordCheck = validatePassword(password)
  if (!passwordCheck.ok) {
    return NextResponse.json({ error: passwordCheck.error }, { status: 400 })
  }

  if (typeof confirmPassword !== 'string' || !passwordsMatch(password, confirmPassword)) {
    return NextResponse.json({ error: 'Passwords do not match.' }, { status: 400 })
  }

  const payload = await authStore.consumePasswordResetToken(token)
  if (!payload) {
    return NextResponse.json(
      { error: 'Reset link is invalid or has expired. Please request a new one.' },
      { status: 400 },
    )
  }

  const user = await authStore.getVerifiedUser(payload.email)
  if (!user) {
    return NextResponse.json(
      { error: 'Reset link is invalid or has expired. Please request a new one.' },
      { status: 400 },
    )
  }

  const passwordHash = await bcrypt.hash(password, 12)
  await authStore.setVerifiedUser(payload.email, {
    ...user,
    passwordHash,
    authProvider: user.googleId ? user.authProvider : 'email',
  })

  return NextResponse.json({
    ok: true,
    message: 'Your password has been updated. You can sign in now.',
  })
}
