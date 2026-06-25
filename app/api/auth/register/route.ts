import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { randomBytes } from 'crypto'
import { authStore, usingRedis } from '@/lib/auth/store'
import { sendVerificationEmail } from '@/lib/auth/sendVerificationEmail'
import { passwordsMatch, validatePassword } from '@/lib/auth/passwordPolicy'
import { rateLimitResponse } from '@/lib/security/rateLimit'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function norm(email: string): string {
  return email.trim().toLowerCase()
}

export async function POST(request: NextRequest) {
  const rl = await rateLimitResponse(request, 'auth_register', 8, 3600)
  if (rl) return rl

  try {
    const body = await request.json()
    const emailRaw = body.email
    const password = body.password
    const confirmPassword = body.confirmPassword
    const nameRaw = body.name

    if (!emailRaw || typeof emailRaw !== 'string') {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
    }
    if (!nameRaw || typeof nameRaw !== 'string' || !nameRaw.trim()) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    }
    if (!password || typeof password !== 'string') {
      return NextResponse.json({ error: 'Password is required.' }, { status: 400 })
    }
    if (!confirmPassword || typeof confirmPassword !== 'string') {
      return NextResponse.json({ error: 'Please confirm your password.' }, { status: 400 })
    }

    const passwordCheck = validatePassword(password)
    if (!passwordCheck.ok) {
      return NextResponse.json({ error: passwordCheck.error }, { status: 400 })
    }
    if (!passwordsMatch(password, confirmPassword)) {
      return NextResponse.json({ error: 'Passwords do not match.' }, { status: 400 })
    }

    const name = nameRaw.trim().slice(0, 120)

    const email = norm(emailRaw)
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const existing = await authStore.getVerifiedUser(email)
    if (existing) {
      return NextResponse.json(
        { error: 'An account with this email already exists.' },
        { status: 409 }
      )
    }

    const passwordHash = await bcrypt.hash(password, 12)
    const token = randomBytes(32).toString('hex')

    await authStore.setPendingVerify(email, token, {
      email,
      passwordHash,
      name,
    })

    const sent = await sendVerificationEmail(request, { to: email, token, name })

    if (!sent.ok) {
      return NextResponse.json({ error: sent.error }, { status: 503 })
    }

    return NextResponse.json({
      ok: true,
      message: 'Check your inbox for a confirmation link.',
      ...(process.env.NODE_ENV === 'development' && 'devLink' in sent && sent.devLink
        ? { devLink: sent.devLink }
        : {}),
      ...(process.env.NODE_ENV === 'development' ? { storage: usingRedis() ? 'redis' : 'memory' } : {}),
    })
  } catch (e) {
    console.error('register', e)
    return NextResponse.json({ error: 'Registration failed.' }, { status: 500 })
  }
}
