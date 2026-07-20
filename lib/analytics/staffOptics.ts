import { stripLocaleFromPathname } from '@/lib/i18n/routing'

/** Persists after owner login so storefront QA does not pollute Slack / Clarity. */
export const STAFF_OPTICS_KEY = 'bs_staff_optics'

/**
 * Known house browser visitor IDs (from Slack / localStorage `bs_visitor_id`).
 * Keep in sync with owner devices — suppress cart / abandon Slack noise.
 */
export const STAFF_VISITOR_IDS = [
  'yyuaarsvulmmlwoi940',
] as const

export function isAdminBrowserPath(pathname?: string | null): boolean {
  const raw =
    pathname ??
    (typeof window !== 'undefined' ? window.location.pathname + window.location.search : '')
  if (!raw) return false
  const pathOnly = raw.split(/[?#]/)[0] || '/'
  const { pathname: inner } = stripLocaleFromPathname(pathOnly)
  return inner === '/admin' || inner.startsWith('/admin/')
}

export function markStaffOptics(): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STAFF_OPTICS_KEY, '1')
  } catch {
    /* private mode */
  }
}

export function clearStaffOptics(): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(STAFF_OPTICS_KEY)
  } catch {
    /* ignore */
  }
}

export function isStaffVisitorId(visitorId?: string | null): boolean {
  const vid = (visitorId || '').trim()
  if (!vid) return false
  return STAFF_VISITOR_IDS.some((id) => vid === id || vid.endsWith(id))
}

/** Client: owner flag, known visitor id, or currently on /admin. */
export function isStaffOpticsActive(): boolean {
  if (typeof window === 'undefined') return false
  try {
    if (localStorage.getItem(STAFF_OPTICS_KEY) === '1') return true
  } catch {
    /* ignore */
  }
  try {
    if (isStaffVisitorId(localStorage.getItem('bs_visitor_id'))) return true
  } catch {
    /* ignore */
  }
  return isAdminBrowserPath()
}

/** Server or client: suppress Slack noise for house traffic. */
export function shouldSuppressVisitorNoise(data?: {
  visitorId?: string | null
  path?: string | null
  browserPath?: string | null
  currentPagePath?: string | null
  staffOptics?: boolean | null
}): boolean {
  if (data?.staffOptics === true) return true
  if (isStaffVisitorId(data?.visitorId)) return true
  const path = data?.path || data?.browserPath || data?.currentPagePath || ''
  if (path && isAdminBrowserPath(path)) return true
  if (typeof window !== 'undefined') return isStaffOpticsActive()
  return false
}
