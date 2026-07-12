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

/**
 * WhatsApp, Facebook, iMessage, Slack, etc. fetch shared URLs without preview cookies.
 * Without a bypass they hit `/home` → redirect to `/home/gate` and scrape a noindex gate
 * page, so link previews show no image. Allow known link-preview crawlers to read `/home`.
 */
function isLinkPreviewBot(userAgent: string | null): boolean {
  if (!userAgent) return false
  const ua = userAgent.toLowerCase()
  return (
    ua.includes('facebookexternalhit') ||
    ua.includes('facebot') ||
    ua.includes('whatsapp') ||
    ua.includes('slackbot') ||
    ua.includes('linkedinbot') ||
    ua.includes('twitterbot') ||
    ua.includes('pinterest') ||
    ua.includes('telegrambot') ||
    ua.includes('discordbot') ||
    ua.includes('vkshare') ||
    ua.includes('skypeuripreview') ||
    ua.includes('applebot') ||
    ua.includes('embedly') ||
    ua.includes('iframely') ||
    ua.includes('snapchat') ||
    ua.includes('outbrain')
  )
}

function localePrefixFromPathname(pathname: string): string {
  const m = pathname.match(/^\/(ar|fr|it|es|ru|zh|de|nl|pt|id|ms)(\/.*)?$/)
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

/** Legacy owner URLs (and locale-prefixed variants) → current /admin/* routes. */
function redirectLegacyAdminPath(
  request: NextRequest,
  innerPath: string,
): NextResponse | null {
  let destination: string | null = null
  if (innerPath === '/dashboard' || innerPath.startsWith('/dashboard/')) {
    destination = '/admin/dashboard'
  } else if (innerPath === '/login' || innerPath.startsWith('/login/')) {
    destination = '/admin/login'
  }
  if (!destination) return null

  const url = request.nextUrl.clone()
  url.pathname = destination
  return withAdminPrivacyHeaders(NextResponse.redirect(url))
}

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  try {
  // IndexNow key proof: serve `/{INDEXNOW_KEY}.txt` (body = the key). Handled here so we
  // don't need a catch-all `[filename]` route that would swallow every unknown single-segment
  // URL and bypass the branded 404 page.
  const indexNowMatch = pathname.match(/^\/([A-Za-z0-9-]{8,128})\.txt$/)
  if (indexNowMatch) {
    const key = process.env.INDEXNOW_KEY?.trim() ?? ''
    if (key && indexNowMatch[1] === key) {
      return new NextResponse(key, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
      })
    }
  }

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/.well-known') ||
    /\.(ico|png|jpg|jpeg|gif|webp|svg|txt|xml|json|woff2?|map)$/i.test(pathname)
  ) {
    return NextResponse.next()
  }

  // Public launch: root and /coming-soon serve the webshop home (not the teaser shell).
  if (!COMING_SOON_ONLY) {
    const { pathname: launchInner, locale: launchLocale } = stripLocaleFromPathname(pathname)
    if (launchInner === '/' || launchInner === '/coming-soon') {
      const url = request.nextUrl.clone()
      url.pathname = launchLocale === 'en' ? '/home' : `/${launchLocale}/home`
      return NextResponse.redirect(url, 308)
    }
  }

  if (COMING_SOON_ONLY && !isPathAllowedDuringComingSoonOnly(pathname)) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    url.search = request.nextUrl.search
    return NextResponse.redirect(url, 307)
  }

  const { pathname: innerPath, locale: pathLocale } = stripLocaleFromPathname(pathname)

  const legacyAdminRedirect = redirectLegacyAdminPath(request, innerPath)
  if (legacyAdminRedirect) return legacyAdminRedirect

  if (pathname.startsWith('/api/admin')) {
    const res = withLocaleHeaders(request, 'en', pathname)
    return withAdminPrivacyHeaders(res)
  }

  if (innerPath === '/admin' || innerPath.startsWith('/admin/')) {
    const headers = new Headers(request.headers)
    headers.set('x-bs-locale', pathLocale)
    headers.set('x-bs-pathname', innerPath)

    const serveAdmin = () => {
      if (pathname !== innerPath) {
        const url = request.nextUrl.clone()
        url.pathname = innerPath
        return withAdminPrivacyHeaders(NextResponse.rewrite(url, { request: { headers } }))
      }
      return withAdminPrivacyHeaders(NextResponse.next({ request: { headers } }))
    }

    if (innerPath === '/admin/login' || innerPath.startsWith('/admin/login/')) {
      return serveAdmin()
    }

    const ok = await verifyAdminSessionCookie(request.cookies.get(ADMIN_COOKIE)?.value)
    if (!ok) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/login'
      url.searchParams.set('next', innerPath)
      const res = NextResponse.redirect(url)
      return withAdminPrivacyHeaders(res)
    }
    return serveAdmin()
  }

  if (isHomeGatedArea(pathname)) {
    if (isHomeGateExempt(pathname)) {
      return withLocaleHeaders(request, 'en', pathname)
    }

    if (isLinkPreviewBot(request.headers.get('user-agent'))) {
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

  const localeMatch = pathname.match(/^\/(ar|fr|it|es|ru|zh|de|nl|pt|id|ms)(\/.*)?$/)
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
  } catch (err) {
    console.error('[middleware]', pathname, err)
    return withLocaleHeaders(request, 'en', pathname)
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
