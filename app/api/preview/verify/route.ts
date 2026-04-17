import { NextRequest, NextResponse } from 'next/server'
import { COOKIE_NAME } from '@/lib/previewAccessCookie'
import { createPreviewAccessCookieValue } from '@/lib/previewAccessCookie.server'
import { rateLimitResponse } from '@/lib/security/rateLimit'

type IpWhoSecurity = {
  vpn?: boolean
  proxy?: boolean
  tor?: boolean
}

type IpWhoResponse = {
  success?: boolean
  security?: IpWhoSecurity
}

function clientIp(request: NextRequest): string | null {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) return first
  }
  const real = request.headers.get('x-real-ip')?.trim()
  if (real) return real
  return null
}

async function assessIpRisk(ip: string | null): Promise<{ blocked: boolean; reason?: string }> {
  if (!ip || ip === '127.0.0.1' || ip === '::1') {
    return { blocked: false }
  }

  try {
    const res = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}`, {
      next: { revalidate: 0 },
      headers: { Accept: 'application/json' },
    })
    if (!res.ok) {
      return { blocked: false }
    }
    const data = (await res.json()) as IpWhoResponse
    if (data.success === false) {
      return { blocked: false }
    }
    const s = data.security
    if (!s) return { blocked: false }
    if (s.tor) return { blocked: true, reason: 'TOR' }
    if (s.vpn) return { blocked: true, reason: 'VPN' }
    if (s.proxy) return { blocked: true, reason: 'PROXY' }
    return { blocked: false }
  } catch {
    return { blocked: false }
  }
}

export async function POST(request: NextRequest) {
  const rl = await rateLimitResponse(request, 'preview_verify', 30, 300)
  if (rl) return rl

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!siteKey || !secretKey || !process.env.PREVIEW_GATE_SECRET) {
    return NextResponse.json(
      { ok: false, code: 'CONFIG', message: 'Preview gate is not configured.' },
      { status: 503 }
    )
  }

  let body: { token?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, code: 'BAD_REQUEST' }, { status: 400 })
  }

  const token = body.token
  if (!token || typeof token !== 'string') {
    return NextResponse.json({ ok: false, code: 'TOKEN' }, { status: 400 })
  }

  const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: secretKey,
      response: token,
    }),
  })

  const verifyJson = (await verifyRes.json()) as {
    success: boolean
    score?: number
    action?: string
    'error-codes'?: string[]
  }

  if (!verifyJson.success) {
    return NextResponse.json({ ok: false, code: 'BOT', message: 'Verification failed.' }, { status: 403 })
  }

  const score = verifyJson.score ?? 0
  if (score < 0.45) {
    return NextResponse.json({ ok: false, code: 'BOT', message: 'Low trust score.' }, { status: 403 })
  }

  const ip = clientIp(request)
  const risk = await assessIpRisk(ip)
  if (risk.blocked) {
    return NextResponse.json(
      { ok: false, code: 'VPN', message: 'This network is not allowed for preview access.', detail: risk.reason },
      { status: 403 }
    )
  }

  try {
    const value = createPreviewAccessCookieValue()
    const res = NextResponse.json({ ok: true })
    const secure = process.env.NODE_ENV === 'production'
    res.cookies.set(COOKIE_NAME, value, {
      httpOnly: true,
      secure,
      sameSite: 'lax',
      path: '/home',
      maxAge: 60 * 60 * 48,
    })
    return res
  } catch (e) {
    console.error('preview gate sign error', e)
    return NextResponse.json({ ok: false, code: 'SERVER' }, { status: 500 })
  }
}
