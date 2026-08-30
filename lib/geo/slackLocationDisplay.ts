import { buildReadablePlace, type PlaceLocationInput } from '@/lib/geo/resolvePlaceNames'

export type SlackGeoLocationInput = PlaceLocationInput & {
  latitude?: number | null
  longitude?: number | null
  accuracyLevel?: string | null
  geoSource?: string | null
  address?: string | null
  postalCode?: string | null
}

export function formatGeoProviderLabel(source: unknown): string {
  const raw = typeof source === 'string' ? source.trim() : ''
  if (!raw) return 'IP geolocation'
  if (raw === 'merged') return 'Vercel edge + ip-api.com'
  if (raw === 'ip-api') return 'ip-api.com'
  if (raw === 'vercel') return 'Vercel edge headers'
  if (raw === 'ipapi.co') return 'ipapi.co'
  return raw
}

export function isApproximateGeoLocation(location: SlackGeoLocationInput | null | undefined): boolean {
  if (!location) return true
  return location.accuracyLevel !== 'gps'
}

export function slackLocationFieldLabel(location: SlackGeoLocationInput | null | undefined): string {
  return isApproximateGeoLocation(location) ? 'Approximate location' : 'Location'
}

export function buildSlackLocationLine(location: SlackGeoLocationInput | null | undefined): string {
  return buildReadablePlace(location).line
}

const SLACK_LOCATION_UNAVAILABLE = 'Not available'

function formatSlackPlacePart(value: string | null | undefined): string {
  if (!value || /^unknown$/i.test(value.trim())) return SLACK_LOCATION_UNAVAILABLE
  return value.trim()
}

/** Labeled city / neighborhood / country block for Slack fields. */
export function buildSlackLocationDetailLines(
  location: SlackGeoLocationInput | null | undefined,
): string {
  const place = buildReadablePlace(location)
  return [
    `*City:* ${formatSlackPlacePart(place.city)}`,
    `*Neighborhood / district:* ${formatSlackPlacePart(place.neighborhood)}`,
    `*Country:* ${formatSlackPlacePart(place.country)}`,
  ].join('\n')
}

export function buildSlackLocationFootnote(location: SlackGeoLocationInput | null | undefined): string | null {
  if (!isApproximateGeoLocation(location)) return null
  const provider = formatGeoProviderLabel(location?.geoSource)
  return `${provider} — network/IP estimate only, not a confirmed address`
}

/**
 * Slack mrkdwn for a location field, e.g.
 * *Approximate location:*
 * *City:* Dubai
 * *Neighborhood / district:* Business Bay
 * *Country:* United Arab Emirates
 * _ip-api.com — network/IP estimate only, not a confirmed address_
 */
export function formatSlackLocationMrkdwn(
  location: SlackGeoLocationInput | null | undefined,
  opts?: { withMapLink?: boolean },
): string {
  const label = slackLocationFieldLabel(location)
  const detail = buildSlackLocationDetailLines(location)
  const footnote = buildSlackLocationFootnote(location)
  const mapUrl = opts?.withMapLink ? buildSlackMapLink(location) : ''
  const mapLine = mapUrl ? `\n<${mapUrl}|📍 Open in Maps>` : ''
  const note = footnote ? `\n_${footnote}_` : ''
  return `*${label}:*\n${detail}${mapLine}${note}`
}

export function buildSlackMapLink(location: SlackGeoLocationInput | null | undefined): string {
  if (!location) return ''
  const line = buildSlackLocationLine(location)
  const isGps = location.accuracyLevel === 'gps'
  const lat = Number(location.latitude)
  const lng = Number(location.longitude)

  if (isGps && Number.isFinite(lat) && Number.isFinite(lng)) {
    return `https://www.google.com/maps?q=${lat},${lng}`
  }
  if (line && line !== 'Unknown') {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(line)}`
  }
  if (Number.isFinite(lat) && Number.isFinite(lng)) {
    return `https://www.google.com/maps?q=${lat},${lng}`
  }
  return ''
}

export function formatSlackLocationWithMap(location: SlackGeoLocationInput | null | undefined): string {
  const detail = buildSlackLocationDetailLines(location)
  const mapUrl = buildSlackMapLink(location)
  const footnote = buildSlackLocationFootnote(location)
  const mapLine = mapUrl ? `\n<${mapUrl}|📍 Open in Maps>` : ''
  const note = footnote ? `\n_${footnote}_` : ''
  return `${detail}${mapLine}${note}`
}

export function formatSlackAddressLine(location: SlackGeoLocationInput | null | undefined): string {
  if (!location) return 'Not available'
  if (typeof location.address === 'string' && location.address.trim()) {
    return location.address.trim()
  }
  const place = buildReadablePlace(location)
  if (place.line !== 'Unknown') return place.line
  return 'Not available'
}
