/** Server-side IP / edge geolocation for analytics Slack (city / region / country — no street). */

export type IpGeoResult = {
  city: string
  region: string
  country: string
  countryCode: string
  ip?: string
  latitude?: number | null
  longitude?: number | null
  timezone?: string
  isp?: string
  org?: string
  as?: string
  source: 'vercel' | 'ip-api' | 'merged'
}

function isPrivateOrLocalIp(ip: string): boolean {
  if (!ip || ip === 'Unknown') return true
  if (ip === '127.0.0.1' || ip === '::1') return true
  if (ip.startsWith('10.') || ip.startsWith('192.168.') || ip.startsWith('172.')) return true
  return false
}

/** Best client IP from Vercel / proxy headers. */
export function getClientIpFromRequest(request: Request): string | null {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) return first
  }
  const real = request.headers.get('x-real-ip')?.trim()
  if (real) return real
  // Vercel occasionally exposes this
  const vercelFwd = request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim()
  return vercelFwd || null
}

/**
 * Free geo from Vercel edge headers (no third-party API, no GPS).
 * Docs: x-vercel-ip-city, x-vercel-ip-country, x-vercel-ip-country-region, x-vercel-ip-latitude/longitude
 */
export function getVercelGeoFromRequest(request: Request): Partial<IpGeoResult> | null {
  const countryCode = (request.headers.get('x-vercel-ip-country') || '').toUpperCase()
  if (!countryCode || countryCode === 'XX') return null

  const cityRaw = request.headers.get('x-vercel-ip-city') || ''
  // Vercel URL-encodes spaces as %20
  let city = cityRaw
  try {
    city = decodeURIComponent(cityRaw)
  } catch {
    city = cityRaw
  }

  const lat = request.headers.get('x-vercel-ip-latitude')
  const lng = request.headers.get('x-vercel-ip-longitude')

  return {
    city: city.trim(),
    region: (request.headers.get('x-vercel-ip-country-region') || '').trim(),
    country: countryCode, // full name filled later if possible
    countryCode,
    latitude: lat ? Number(lat) : null,
    longitude: lng ? Number(lng) : null,
    source: 'vercel',
  }
}

/** IP → approximate city / emirate / country + ISP hints for VPN guess. */
export async function lookupGeoFromIp(ip: string): Promise<IpGeoResult | null> {
  if (isPrivateOrLocalIp(ip)) return null

  try {
    const res = await fetch(
      `https://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,country,countryCode,regionName,city,lat,lon,timezone,isp,org,as,query`,
      { signal: AbortSignal.timeout(4000), next: { revalidate: 0 } },
    )
    const data = (await res.json()) as {
      status?: string
      city?: string
      regionName?: string
      country?: string
      countryCode?: string
      lat?: number
      lon?: number
      timezone?: string
      isp?: string
      org?: string
      as?: string
      query?: string
    }
    if (data.status !== 'success' || !data.country) return null
    return {
      city: data.city?.trim() || '',
      region: data.regionName?.trim() || '',
      country: data.country.trim(),
      countryCode: (data.countryCode || '').toUpperCase(),
      ip: data.query || ip,
      latitude: typeof data.lat === 'number' ? data.lat : null,
      longitude: typeof data.lon === 'number' ? data.lon : null,
      timezone: data.timezone?.trim() || '',
      isp: data.isp?.trim() || '',
      org: data.org?.trim() || '',
      as: data.as?.trim() || '',
      source: 'ip-api',
    }
  } catch {
    return null
  }
}

/** Merge Vercel edge geo (fast/free) with ip-api enrichment (ISP / timezone). */
export async function resolveRequestGeo(request: Request): Promise<IpGeoResult | null> {
  const ip = getClientIpFromRequest(request)
  const vercel = getVercelGeoFromRequest(request)
  const fromIp = ip ? await lookupGeoFromIp(ip) : null

  if (!vercel && !fromIp) return null

  if (vercel && fromIp) {
    // Prefer city + coords from the same provider. Mixing ip-api city with Vercel lat/lng
    // often opens Maps on a CDN hub (e.g. Amsterdam) while Slack shows another Dutch town.
    const cityFromIp = Boolean(fromIp.city)
    return {
      city: fromIp.city || vercel.city || '',
      region: fromIp.region || vercel.region || '',
      country: fromIp.country || vercel.countryCode || vercel.country || '',
      countryCode: fromIp.countryCode || vercel.countryCode || '',
      ip: fromIp.ip || ip || undefined,
      latitude: cityFromIp
        ? fromIp.latitude ?? null
        : fromIp.latitude ?? vercel.latitude ?? null,
      longitude: cityFromIp
        ? fromIp.longitude ?? null
        : fromIp.longitude ?? vercel.longitude ?? null,
      timezone: fromIp.timezone || '',
      isp: fromIp.isp,
      org: fromIp.org,
      as: fromIp.as,
      source: 'merged',
    }
  }

  if (fromIp) return fromIp

  return {
    city: vercel!.city || '',
    region: vercel!.region || '',
    country: vercel!.country || vercel!.countryCode || '',
    countryCode: vercel!.countryCode || '',
    ip: ip || undefined,
    latitude: vercel!.latitude ?? null,
    longitude: vercel!.longitude ?? null,
    source: 'vercel',
  }
}
