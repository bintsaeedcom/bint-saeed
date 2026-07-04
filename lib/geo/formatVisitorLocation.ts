export type VisitorLocationParts = {
  city?: string
  region?: string
  country?: string
  countryCode?: string
} | null | undefined

/** e.g. "Khalifa City, Abu Dhabi, United Arab Emirates" */
export function formatVisitorLocation(location: VisitorLocationParts): string {
  if (!location) return 'Unknown'

  const raw = [location.city, location.region, location.country]
    .map((part) => part?.trim())
    .filter((part): part is string => Boolean(part && part !== 'Unknown'))

  const parts: string[] = []
  for (const part of raw) {
    const last = parts[parts.length - 1]
    if (!last || last.toLowerCase() !== part.toLowerCase()) parts.push(part)
  }

  return parts.length > 0 ? parts.join(', ') : 'Unknown'
}
