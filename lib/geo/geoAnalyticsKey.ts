import { formatVisitorLocation, type VisitorLocationParts } from '@/lib/geo/formatVisitorLocation'

export type GeoMeta = {
  label: string
  city?: string
  region?: string
  country?: string
  countryCode?: string
}

/** Stable Redis hash field for a city / region / country cluster. */
export function geoFieldKey(location: VisitorLocationParts): string | null {
  const meta = geoMetaFromLocation(location)
  if (!meta) return null
  const parts = [meta.countryCode || meta.country, meta.region, meta.city]
    .filter(Boolean)
    .map((p) => String(p).toLowerCase().replace(/\s+/g, '-').slice(0, 48))
  return parts.join('|').slice(0, 120) || null
}

export function geoMetaFromLocation(location: VisitorLocationParts): GeoMeta | null {
  if (!location) return null
  const label = formatVisitorLocation(location)
  if (label === 'Unknown') return null
  return {
    label,
    city: location.city?.trim() || undefined,
    region: location.region?.trim() || undefined,
    country: location.country?.trim() || undefined,
    countryCode: location.countryCode?.trim().toUpperCase() || undefined,
  }
}
