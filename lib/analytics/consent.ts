'use client'

export const CONSENT_EVENT_NAME = 'bs-consent-changed'

export type ConsentState = {
  analytics: boolean
  marketing: boolean
}

function parseBoolean(value: string | null): boolean {
  return value === 'true'
}

export function getConsentState(): ConsentState {
  if (typeof window === 'undefined') return { analytics: false, marketing: false }
  return {
    analytics: parseBoolean(localStorage.getItem('analyticsConsent')),
    marketing: parseBoolean(localStorage.getItem('marketingConsent')),
  }
}

export function setConsentState(next: ConsentState) {
  if (typeof window === 'undefined') return
  localStorage.setItem('analyticsConsent', String(next.analytics))
  localStorage.setItem('marketingConsent', String(next.marketing))
  localStorage.setItem('cookieConsent', next.analytics || next.marketing ? 'all' : 'essential')
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT_NAME, { detail: next }))
}
