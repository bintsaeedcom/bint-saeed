import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  COOKIE_NAME,
  verifyPreviewAccessCookie,
  getPreviewSecretBytes,
  sanitizePreviewReturnPath,
} from '@/lib/previewAccessCookie'
import { verifyAdminSessionCookie, ADMIN_COOKIE } from '@/lib/admin/sessionCookie'
import { isLocalePrefix, stripLocaleFromPathname } from '@/lib/i18n/routing'
import { COMING_SOON_ONLY, isPathAllowedDuringComingSoonOnly } from '@/lib/comingSoon'

const GATE_SUFFIX = '/home/gate'

function localePrefixFromPathname(pathname: string): string {
  const m = pathname.match(/^\/(ar|fr|it|es|ru|zh|de|nl|pt)(\/.*)?$/)
  if (m && isLocalePrefix(m[1])) {
    return `/${m[1]}`
  }
  return ''
}

function isHomeGatedArea(pathname: string): boolean {
  const { pathname: inner } = stripLocaleFromPathname(pathname)
  return inner === '/home' || inner.startsWith('/home/')
}

function isHomeGateExempt(pathname: string): boolean {
  const { pathname: inner } = stripLocaleFromPathname(pathname)
  return (
    inner === '/home/gate' ||
    inner.startsWith('/home/gate/') ||
    inner === '/home/blocked' ||
    inner.startsWith('/home/blocked/')
  )
}

function withAdminPrivacyHeaders(res: NextResponse): NextResponse {
  res.headers.set('X-Robots-Tag', 'noindex, nofollow')
  res.headers.set('Cache-Control', 'private, no-store, max-age=0')
  return res
}

function withLocaleHeaders(
  request: NextRequest,
  locale: string,
  pathname: string,
): NextResponse {
  const headers = new Headers(request.headers)
  headers.set('x-bs-locale', locale)
  headers.set('x-bs-pathname', pathname)
  return NextResponse.next({ request: { headers } })
}

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/.well-known') ||
    /\.(ico|png|jpg|jpeg|gif|webp|svg|txt|xml|json|woff2?|map)$/i.test(pathname)
  ) {
    return NextResponse.next()
  }

  if (COMING_SOON_ONLY && !isPathAllowedDuringComingSoonOnly(pathname)) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    url.search = request.nextUrl.search
    return NextResponse.redirect(url, 307)
  }

  if (pathname.startsWith('/api/admin')) {
    const res = withLocaleHeaders(request, 'en', pathname)
    return withAdminPrivacyHeaders(res)
  }

  if (pathname.startsWith('/admin')) {
    const base = withLocaleHeaders(request, 'en', pathname)
    if (pathname === '/admin/login' || pathname.startsWith('/admin/login/')) {
      return withAdminPrivacyHeaders(base)
    }
    const ok = await verifyAdminSessionCookie(request.cookies.get(ADMIN_COOKIE)?.value)
    if (!ok) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/login'
      url.searchParams.set('next', pathname)
      const res = NextResponse.redirect(url)
      return withAdminPrivacyHeaders(res)
    }
    return withAdminPrivacyHeaders(base)
  }

  if (isHomeGatedArea(pathname)) {
    if (isHomeGateExempt(pathname)) {
      return withLocaleHeaders(request, 'en', pathname)
    }

    if (process.env.PREVIEW_GATE_DISABLED === 'true') {
      return withLocaleHeaders(request, 'en', pathname)
    }

    const secret = getPreviewSecretBytes()
    if (!secret) {
      return withLocaleHeaders(request, 'en', pathname)
    }

    const token = request.cookies.get(COOKIE_NAME)?.value
    if (token && (await verifyPreviewAccessCookie(token, secret))) {
      return withLocaleHeaders(request, 'en', pathname)
    }

    const returnTo = sanitizePreviewReturnPath(pathname, search)
    const url = request.nextUrl.clone()
    const prefix = localePrefixFromPathname(pathname)
    url.pathname = `${prefix}${GATE_SUFFIX}`
    url.searchParams.set('returnTo', returnTo)
    return NextResponse.redirect(url)
  }

  const localeMatch = pathname.match(/^\/(ar|fr|it|es|ru|zh|de|nl|pt)(\/.*)?$/)
  if (localeMatch && isLocalePrefix(localeMatch[1])) {
    const locale = localeMatch[1]
    const rest = localeMatch[2] && localeMatch[2].length > 0 ? localeMatch[2] : '/'
    const url = request.nextUrl.clone()
    url.pathname = rest
    const headers = new Headers(request.headers)
    headers.set('x-bs-locale', locale)
    headers.set('x-bs-pathname', rest)
    return NextResponse.rewrite(url, { request: { headers } })
  }

  return withLocaleHeaders(request, 'en', pathname)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
