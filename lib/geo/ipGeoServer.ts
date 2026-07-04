/** Server-side IP geolocation for analytics (city / region / country — no street). */

export type IpGeoResult = {
  city: string
  region: string
  country: string
  countryCode: string
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
  return real || null
}

/** IP → approximate city / emirate / country. No GPS or consent required. */
export async function lookupGeoFromIp(ip: string): Promise<IpGeoResult | null> {
  if (isPrivateOrLocalIp(ip)) return null

  try {
    const res = await fetch(
      `https://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,country,countryCode,regionName,city`,
      { signal: AbortSignal.timeout(4000), next: { revalidate: 0 } },
    )
    const data = (await res.json()) as {
      status?: string
      city?: string
      regionName?: string
      country?: string
      countryCode?: string
    }
    if (data.status !== 'success' || !data.country) return null
    return {
      city: data.city?.trim() || '',
      region: data.regionName?.trim() || '',
      country: data.country.trim(),
      countryCode: (data.countryCode || '').toUpperCase(),
    }
  } catch {
    return null
  }
}
