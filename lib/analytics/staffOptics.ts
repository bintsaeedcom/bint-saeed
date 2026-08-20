import { stripLocaleFromPathname } from '@/lib/i18n/routing'

/** Persists after owner login so storefront QA does not pollute Slack / Clarity. */
export const STAFF_OPTICS_KEY = 'bs_staff_optics'

/**
 * Named house people — still post to Slack, labelled (not hidden).
 * IDs are `bs_visitor_id` from Slack / localStorage. Add each device/browser.
 */
export const NAMED_HOUSE_VISITORS: { name: string; visitorIds: readonly string[] }[] = [
  {
    name: 'Sunain',
    visitorIds: [
      '5iakr0vsbd7mnnk165v', // mobile Safari
      'yyuaarsvulmmlwoi940', // earlier house browser
    ],
  },
]

/** Suppress-only IDs (test devices). Named house visitors must not be listed here. */
export const STAFF_VISITOR_IDS: readonly string[] = []

export function namedHouseVisitor(visitorId?: string | null): string | null {
  const vid = (visitorId || '').trim()
  if (!vid) return null
  for (const person of NAMED_HOUSE_VISITORS) {
    if (person.visitorIds.some((id) => vid === id || vid.endsWith(id))) return person.name
  }
  return null
}

export function isNamedHouseVisitor(visitorId?: string | null): boolean {
  return namedHouseVisitor(visitorId) !== null
}

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

/** Server or client: suppress Slack noise for QA traffic. Named house visitors still post. */
export function shouldSuppressVisitorNoise(data?: {
  visitorId?: string | null
  path?: string | null
  browserPath?: string | null
  currentPagePath?: string | null
  staffOptics?: boolean | null
}): boolean {
  if (isNamedHouseVisitor(data?.visitorId)) return false
  if (data?.staffOptics === true) return true
  if (isStaffVisitorId(data?.visitorId)) return true
  const path = data?.path || data?.browserPath || data?.currentPagePath || ''
  if (path && isAdminBrowserPath(path)) return true
  if (typeof window !== 'undefined') return isStaffOpticsActive()
  return false
}
