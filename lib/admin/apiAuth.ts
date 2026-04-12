import { NextRequest } from 'next/server'
import { ADMIN_COOKIE, verifyAdminSessionCookie } from '@/lib/admin/sessionCookie'

export async function requireAdmin(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get(ADMIN_COOKIE)?.value
  return verifyAdminSessionCookie(token)
}
