import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { authStore } from '@/lib/auth/store'
import { USER_COOKIE, verifyUserSessionCookie } from '@/lib/auth/userSession'

export async function GET() {
  const jar = await cookies()
  const token = jar.get(USER_COOKIE)?.value
  const session = await verifyUserSessionCookie(token)

  if (!session) {
    return NextResponse.json({ user: null })
  }

  const record = await authStore.getVerifiedUser(session.email)
  if (!record) {
    return NextResponse.json({ user: null })
  }

  return NextResponse.json({
    user: {
      email: session.email,
      name: record.name,
      authProvider: record.authProvider,
      picture: record.picture,
    },
  })
}
