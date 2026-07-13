import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  COOKIE_NAME,
  verifyPreviewAccessCookie,
  getPreviewSecretBytes,
  sanitizePreviewReturnPath,
} from '@/lib/previewAccessCookie'
import { verifyAdminSessionCookie, ADMIN_COOKIE } from '@/lib/admin/sessionCookie'
import {
  isLocalePrefix,
  stripLocaleFromPathname,
  LOCALE_PREFIXES,
  type AppLocale,
} from '@/lib/i18n/routing'
import { COMING_SOON_ONLY, isPathAllowedDuringComingSoonOnly } from '@/lib/comingSoon'

const GATE_SUFFIX = '/home/gate'

const LOCALE_PREFIX_RE = new RegExp(
  `^/(${LOCALE_PREFIXES.join('|')})(/.*)?$`,
)

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
  const m = pathname.match(LOCALE_PREFIX_RE)
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

/**
 * There is no `app/[locale]` tree — public URLs like `/nl/shop` must always
 * rewrite to `/shop` while preserving locale in request headers.
 */
function serveAppPath(
  request: NextRequest,
  locale: AppLocale | string,
  innerPath: string,
  publicPathname: string,
): NextResponse {
  const headers = new Headers(request.headers)
  headers.set('x-bs-locale', locale)
  headers.set('x-bs-pathname', innerPath)

  if (publicPathname !== innerPath) {
    const url = request.nextUrl.clone()
    url.pathname = innerPath
    return NextResponse.rewrite(url, { request: { headers } })
  }

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
    // IndexNow key proof: serve `/{INDEXNOW_KEY}.txt` (body = the key).
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

    // Public launch: root and /coming-soon (any locale) → webshop home.
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
      return withAdminPrivacyHeaders(serveAppPath(request, 'en', pathname, pathname))
    }

    if (innerPath === '/admin' || innerPath.startsWith('/admin/')) {
      const serveAdmin = () =>
        withAdminPrivacyHeaders(serveAppPath(request, pathLocale, innerPath, pathname))

      if (innerPath === '/admin/login' || innerPath.startsWith('/admin/login/')) {
        return serveAdmin()
      }

      const ok = await verifyAdminSessionCookie(request.cookies.get(ADMIN_COOKIE)?.value)
      if (!ok) {
        const url = request.nextUrl.clone()
        url.pathname = '/admin/login'
        url.searchParams.set('next', innerPath)
        return withAdminPrivacyHeaders(NextResponse.redirect(url))
      }
      return serveAdmin()
    }

    if (isHomeGatedArea(pathname)) {
      /**
       * Public launch (!COMING_SOON_ONLY): every IP reaches /home — no preview gate.
       * Preview gate only applies while the coming-soon shell is still the public mode.
       */
      const publicLaunchOpen = !COMING_SOON_ONLY
      const previewDisabled = process.env.PREVIEW_GATE_DISABLED === 'true'
      const secret = getPreviewSecretBytes()
      const token = request.cookies.get(COOKIE_NAME)?.value
      const hasValidPreviewCookie =
        !!secret && !!token && (await verifyPreviewAccessCookie(token, secret))

      const allowHome =
        publicLaunchOpen ||
        previewDisabled ||
        isHomeGateExempt(pathname) ||
        isLinkPreviewBot(request.headers.get('user-agent')) ||
        !secret ||
        hasValidPreviewCookie

      if (allowHome) {
        return serveAppPath(request, pathLocale, innerPath, pathname)
      }

      const returnTo = sanitizePreviewReturnPath(pathname, search)
      const url = request.nextUrl.clone()
      const prefix = localePrefixFromPathname(pathname)
      url.pathname = `${prefix}${GATE_SUFFIX}`
      url.searchParams.set('returnTo', returnTo)
      return NextResponse.redirect(url)
    }

    // Any remaining locale-prefixed URL (/nl/shop, /fr/about, …) → real app route
    if (pathLocale !== 'en') {
      return serveAppPath(request, pathLocale, innerPath, pathname)
    }

    return serveAppPath(request, 'en', pathname, pathname)
  } catch (err) {
    console.error('[middleware]', pathname, err)
    // Last resort: still strip locale so visitors never hard-404 on /nl/...
    try {
      const { pathname: innerPath, locale: pathLocale } = stripLocaleFromPathname(pathname)
      return serveAppPath(request, pathLocale, innerPath, pathname)
    } catch {
      return NextResponse.next()
    }
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
