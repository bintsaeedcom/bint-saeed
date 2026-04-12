import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  COOKIE_NAME,
  verifyPreviewAccessCookie,
  getPreviewSecretBytes,
  sanitizePreviewReturnPath,
} from '@/lib/previewAccessCookie'
import { verifyAdminSessionCookie, ADMIN_COOKIE } from '@/lib/admin/sessionCookie'

const GATE_PATH = '/preview/gate'
const BLOCKED_PATH = '/preview/blocked'

function withAdminPrivacyHeaders(res: NextResponse): NextResponse {
  res.headers.set('X-Robots-Tag', 'noindex, nofollow')
  res.headers.set('Cache-Control', 'private, no-store, max-age=0')
  return res
}

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  if (pathname.startsWith('/api/admin')) {
    return withAdminPrivacyHeaders(NextResponse.next())
  }

  if (pathname.startsWith('/admin')) {
    if (pathname === '/admin/login' || pathname.startsWith('/admin/login/')) {
      return withAdminPrivacyHeaders(NextResponse.next())
    }
    const ok = await verifyAdminSessionCookie(request.cookies.get(ADMIN_COOKIE)?.value)
    if (!ok) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/login'
      url.searchParams.set('next', pathname)
      return withAdminPrivacyHeaders(NextResponse.redirect(url))
    }
    return withAdminPrivacyHeaders(NextResponse.next())
  }

  if (!pathname.startsWith('/preview')) {
    return NextResponse.next()
  }

  if (
    pathname === GATE_PATH ||
    pathname.startsWith(`${GATE_PATH}/`) ||
    pathname === BLOCKED_PATH ||
    pathname.startsWith(`${BLOCKED_PATH}/`)
  ) {
    return NextResponse.next()
  }

  if (process.env.PREVIEW_GATE_DISABLED === 'true') {
    return NextResponse.next()
  }

  const secret = getPreviewSecretBytes()
  if (!secret) {
    return NextResponse.next()
  }

  const token = request.cookies.get(COOKIE_NAME)?.value
  if (token && (await verifyPreviewAccessCookie(token, secret))) {
    return NextResponse.next()
  }

  const returnTo = sanitizePreviewReturnPath(pathname, search)
  const url = request.nextUrl.clone()
  url.pathname = GATE_PATH
  url.searchParams.set('returnTo', returnTo)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/preview/:path*', '/admin', '/admin/:path*', '/api/admin/:path*'],
}
