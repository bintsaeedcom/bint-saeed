'use client'

export const CONSENT_EVENT_NAME = 'bs-consent-changed'
export const COOKIE_CONSENT_KEY = 'cookieConsent'
/** Session backup if localStorage is flaky / cleared mid-session. */
export const COOKIE_CONSENT_SESSION_KEY = 'bint-saeed-cookie-consent-session'

export type ConsentState = {
  analytics: boolean
  marketing: boolean
}

function parseBoolean(value: string | null): boolean {
  return value === 'true'
}

export function getConsentState(): ConsentState {
  if (typeof window === 'undefined') return { analytics: false, marketing: false }
  try {
    return {
      analytics: parseBoolean(localStorage.getItem('analyticsConsent')),
      marketing: parseBoolean(localStorage.getItem('marketingConsent')),
    }
  } catch {
    return { analytics: false, marketing: false }
  }
}

/** True when the user already made a cookie choice (Accept / Essential only). */
export function hasStoredCookieChoice(): boolean {
  if (typeof window === 'undefined') return false
  try {
    if (localStorage.getItem(COOKIE_CONSENT_KEY)) return true
    // Legacy: category flags written without the summary key
    if (localStorage.getItem('analyticsConsent') != null && localStorage.getItem('marketingConsent') != null) {
      return true
    }
  } catch {
    /* ignore */
  }
  try {
    if (sessionStorage.getItem(COOKIE_CONSENT_SESSION_KEY)) return true
  } catch {
    /* ignore */
  }
  return false
}

export function setConsentState(next: ConsentState) {
  if (typeof window === 'undefined') return
  const summary = next.analytics || next.marketing ? 'all' : 'essential'
  try {
    localStorage.setItem('analyticsConsent', String(next.analytics))
    localStorage.setItem('marketingConsent', String(next.marketing))
    localStorage.setItem(COOKIE_CONSENT_KEY, summary)
  } catch {
    /* private mode / quota — still mark session so the banner does not loop */
  }
  try {
    sessionStorage.setItem(COOKIE_CONSENT_SESSION_KEY, summary)
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT_NAME, { detail: next }))
}
