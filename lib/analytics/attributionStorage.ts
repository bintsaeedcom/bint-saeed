export const BS_SESSION_STARTED_KEY = 'bs_session_started_at'
export const BS_FIRST_TOUCH_KEY = 'bs_first_touch'

export type StoredLocation = {
  city?: string
  country?: string
  countryCode?: string
  region?: string
}

export type FirstTouchAttribution = {
  referrer: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  landingPath: string
  capturedAt: string
}

export function persistSessionStart(): void {
  if (typeof sessionStorage === 'undefined') return
  if (!sessionStorage.getItem(BS_SESSION_STARTED_KEY)) {
    sessionStorage.setItem(BS_SESSION_STARTED_KEY, String(Date.now()))
  }
}

export function persistFirstTouchAttribution(input: {
  referrer: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  landingPath: string
}): void {
  if (typeof localStorage === 'undefined') return
  if (localStorage.getItem(BS_FIRST_TOUCH_KEY)) return
  const payload: FirstTouchAttribution = {
    referrer: input.referrer || 'Direct',
    utmSource: input.utmSource,
    utmMedium: input.utmMedium,
    utmCampaign: input.utmCampaign,
    landingPath: input.landingPath,
    capturedAt: new Date().toISOString(),
  }
  localStorage.setItem(BS_FIRST_TOUCH_KEY, JSON.stringify(payload))
}

export function readStoredLocation(): StoredLocation | null {
  if (typeof localStorage === 'undefined') return null
  try {
    const raw = localStorage.getItem('bs_location')
    if (!raw) return null
    const parsed = JSON.parse(raw) as StoredLocation
    return parsed && typeof parsed === 'object' ? parsed : null
  } catch {
    return null
  }
}

export function readFirstTouchAttribution(): FirstTouchAttribution | null {
  if (typeof localStorage === 'undefined') return null
  try {
    const raw = localStorage.getItem(BS_FIRST_TOUCH_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as FirstTouchAttribution
    return parsed && typeof parsed === 'object' ? parsed : null
  } catch {
    return null
  }
}

export function getSessionSeconds(): number {
  if (typeof sessionStorage === 'undefined') return 0
  const raw = sessionStorage.getItem(BS_SESSION_STARTED_KEY)
  if (!raw) return 0
  const started = Number(raw)
  if (!Number.isFinite(started) || started <= 0) return 0
  return Math.max(0, Math.round((Date.now() - started) / 1000))
}
