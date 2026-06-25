import { NextResponse } from 'next/server'
import { USER_COOKIE } from '@/lib/auth/userSession'
import { createUserSessionCookieValue } from '@/lib/auth/userSession.server'

const SESSION_MAX_AGE = 30 * 24 * 3600

export function attachUserSessionCookie(response: NextResponse, email: string): NextResponse | null {
  const token = createUserSessionCookieValue(email)
  if (!token) return null

  response.cookies.set(USER_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  })
  return response
}

export function clearUserSessionCookie(response: NextResponse): void {
  response.cookies.set(USER_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
    path: '/',
    maxAge: 0,
  })
}
