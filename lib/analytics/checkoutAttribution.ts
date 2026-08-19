import {
  getSessionSeconds,
  readFirstTouchAttribution,
  readStoredLocation,
  type FirstTouchAttribution,
} from '@/lib/analytics/attributionStorage'
import { detectClientDeviceLabel } from '@/lib/analytics/parseClientDevice'

export type CheckoutAttribution = {
  city?: string
  country?: string
  trafficSource?: string
  sessionSeconds?: number
  deviceLabel?: string
}

function detectDeviceLabel(): string {
  return detectClientDeviceLabel()
}

export function formatTrafficSource(firstTouch: FirstTouchAttribution | null): string {
  if (!firstTouch) return 'Unknown'

  if (firstTouch.utmSource) {
    return [firstTouch.utmSource, firstTouch.utmMedium, firstTouch.utmCampaign].filter(Boolean).join(' / ')
  }

  const referrer = firstTouch.referrer?.trim()
  if (referrer && referrer !== 'Direct') {
    try {
      return new URL(referrer).hostname
    } catch {
      return referrer.slice(0, 120)
    }
  }

  if (firstTouch.landingPath) {
    return `Direct · ${firstTouch.landingPath}`
  }

  return 'Direct'
}

export function formatSessionDuration(seconds?: number): string {
  if (!seconds || seconds <= 0) return 'Unknown'
  if (seconds < 60) return `${seconds}s`
  const minutes = Math.floor(seconds / 60)
  const remainder = seconds % 60
  if (minutes < 60) return remainder > 0 ? `${minutes}m ${remainder}s` : `${minutes}m`
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`
}

/** Client-only — call when building checkout payload. */
export function getCheckoutAttributionContext(): CheckoutAttribution {
  const location = readStoredLocation()
  const firstTouch = readFirstTouchAttribution()
  const sessionSeconds = getSessionSeconds()

  const city = location?.city?.trim()
  const country = location?.country?.trim() || location?.countryCode?.trim()

  return {
    city: city && city !== 'Unknown' ? city : undefined,
    country: country && country !== 'Unknown' && country !== 'XX' ? country : undefined,
    trafficSource: formatTrafficSource(firstTouch),
    sessionSeconds: sessionSeconds > 0 ? sessionSeconds : undefined,
    deviceLabel: detectDeviceLabel(),
  }
}
