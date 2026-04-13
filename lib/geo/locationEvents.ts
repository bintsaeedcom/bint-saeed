/** Dispatched after the in-app tailor prompt; Analytics listens and may call `navigator.geolocation` once. */
export const REQUEST_PRECISE_LOCATION_EVENT = 'bintsaeed-request-precise-location'

/** After the first browser geolocation prompt (allow or deny), we never call `getCurrentPosition` again — Safari may re-prompt on every call otherwise. */
export const GPS_PROMPT_HANDLED_KEY = 'bs_gps_prompt_handled'

export function ensureGpsHandledFromCache(): void {
  if (typeof window === 'undefined') return
  if (localStorage.getItem(GPS_PROMPT_HANDLED_KEY)) return
  try {
    const raw = localStorage.getItem('bs_location')
    if (!raw) return
    const loc = JSON.parse(raw) as { accuracyLevel?: string; latitude?: number | null }
    if (loc?.accuracyLevel === 'gps' && loc.latitude != null) {
      localStorage.setItem(GPS_PROMPT_HANDLED_KEY, 'granted')
    }
  } catch {
    /* ignore */
  }
}

export function isGpsPromptAlreadyHandled(): boolean {
  if (typeof window === 'undefined') return true
  ensureGpsHandledFromCache()
  return !!localStorage.getItem(GPS_PROMPT_HANDLED_KEY)
}

export function markGpsPromptHandled(outcome: 'granted' | 'denied') {
  if (typeof window === 'undefined') return
  localStorage.setItem(GPS_PROMPT_HANDLED_KEY, outcome)
}

export function dispatchRequestPreciseLocation() {
  if (typeof window === 'undefined') return
  if (isGpsPromptAlreadyHandled()) return
  window.dispatchEvent(new Event(REQUEST_PRECISE_LOCATION_EVENT))
}
