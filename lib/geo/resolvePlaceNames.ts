/**
 * Resolve IP/geo place parts to human-readable Slack/admin display names.
 * Raw ISO codes are kept in analytics payloads; never shown as primary labels.
 */

const COUNTRY_DISPLAY = (() => {
  try {
    return new Intl.DisplayNames(['en'], { type: 'region' })
  } catch {
    return null
  }
})()

const US_STATE_NAMES: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California', CO: 'Colorado',
  CT: 'Connecticut', DE: 'Delaware', FL: 'Florida', GA: 'Georgia', HI: 'Hawaii', ID: 'Idaho',
  IL: 'Illinois', IN: 'Indiana', IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana',
  ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota',
  MS: 'Mississippi', MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada',
  NH: 'New Hampshire', NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York',
  NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregon',
  PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina', SD: 'South Dakota',
  TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont', VA: 'Virginia', WA: 'Washington',
  WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming', DC: 'District of Columbia',
}

const UAE_EMIRATE_NAMES: Record<string, string> = {
  AZ: 'Abu Dhabi',
  AD: 'Abu Dhabi',
  DU: 'Dubai',
  DB: 'Dubai',
  SH: 'Sharjah',
  AJ: 'Ajman',
  UQ: 'Umm Al Quwain',
  RK: 'Ras Al Khaimah',
  RA: 'Ras Al Khaimah',
  FU: 'Fujairah',
}

const CA_PROVINCE_NAMES: Record<string, string> = {
  AB: 'Alberta', BC: 'British Columbia', MB: 'Manitoba', NB: 'New Brunswick',
  NL: 'Newfoundland and Labrador', NS: 'Nova Scotia', NT: 'Northwest Territories',
  NU: 'Nunavut', ON: 'Ontario', PE: 'Prince Edward Island', QC: 'Quebec',
  SK: 'Saskatchewan', YT: 'Yukon',
}

const AU_STATE_NAMES: Record<string, string> = {
  ACT: 'Australian Capital Territory', NSW: 'New South Wales', NT: 'Northern Territory',
  QLD: 'Queensland', SA: 'South Australia', TAS: 'Tasmania', VIC: 'Victoria', WA: 'Western Australia',
}

const IN_STATE_NAMES: Record<string, string> = {
  AP: 'Andhra Pradesh', AR: 'Arunachal Pradesh', AS: 'Assam', BR: 'Bihar', CG: 'Chhattisgarh',
  GA: 'Goa', GJ: 'Gujarat', HR: 'Haryana', HP: 'Himachal Pradesh', JH: 'Jharkhand',
  KA: 'Karnataka', KL: 'Kerala', MP: 'Madhya Pradesh', MH: 'Maharashtra', MN: 'Manipur',
  ML: 'Meghalaya', MZ: 'Mizoram', NL: 'Nagaland', OD: 'Odisha', PB: 'Punjab',
  RJ: 'Rajasthan', SK: 'Sikkim', TN: 'Tamil Nadu', TG: 'Telangana', TR: 'Tripura',
  UP: 'Uttar Pradesh', UK: 'Uttarakhand', WB: 'West Bengal', AN: 'Andaman and Nicobar Islands',
  CH: 'Chandigarh', DN: 'Dadra and Nagar Haveli and Daman and Diu', DL: 'Delhi',
  JK: 'Jammu and Kashmir', LA: 'Ladakh', LD: 'Lakshadweep', PY: 'Puducherry',
}

export type PlaceLocationInput = {
  city?: string | null
  region?: string | null
  country?: string | null
  countryCode?: string | null
  neighborhood?: string | null
  suburb?: string | null
  cityDistrict?: string | null
  district?: string | null
  borough?: string | null
} | null | undefined

function cleanPart(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function looksLikeIsoCode(value: string): boolean {
  return /^[A-Z]{2,3}$/.test(value.trim().toUpperCase())
}

function resolveCountryCode(location: PlaceLocationInput): string {
  const code = cleanPart(location?.countryCode).toUpperCase()
  if (code.length === 2) return code
  const country = cleanPart(location?.country).toUpperCase()
  if (country.length === 2) return country
  return ''
}

/** ISO 3166-1 alpha-2 → full country name; returns null if only an unresolved code. */
export function resolveCountryName(value: unknown, countryCodeHint?: string): string | null {
  const hint = cleanPart(countryCodeHint).toUpperCase()
  const raw = cleanPart(value)
  const code = raw.length === 2 ? raw.toUpperCase() : hint

  if (code.length === 2 && COUNTRY_DISPLAY) {
    try {
      const name = COUNTRY_DISPLAY.of(code)
      if (name && name.toUpperCase() !== code) return name
    } catch {
      /* ignore */
    }
  }

  if (!raw) return null
  if (looksLikeIsoCode(raw)) return null
  if (/^unknown$/i.test(raw)) return null
  return raw
}

/** Subdivision / emirate / state — omit when only an unexplained code. */
export function resolveSubdivisionName(value: unknown, countryCode: string): string | null {
  const raw = cleanPart(value)
  if (!raw || /^unknown$/i.test(raw)) return null

  const code = raw.toUpperCase()
  const cc = countryCode.toUpperCase()

  if (cc === 'US' && US_STATE_NAMES[code]) return US_STATE_NAMES[code]
  if (cc === 'AE' && UAE_EMIRATE_NAMES[code]) return UAE_EMIRATE_NAMES[code]
  if (cc === 'CA' && CA_PROVINCE_NAMES[code]) return CA_PROVINCE_NAMES[code]
  if (cc === 'AU' && AU_STATE_NAMES[code]) return AU_STATE_NAMES[code]
  if (cc === 'IN' && IN_STATE_NAMES[code]) return IN_STATE_NAMES[code]

  if (looksLikeIsoCode(raw)) return null
  return raw
}

function resolveAreaName(location: PlaceLocationInput, countryCode: string): string | null {
  const neighborhood = cleanPart(
    location?.neighborhood || location?.suburb || location?.cityDistrict || location?.district || location?.borough,
  )
  const city = cleanPart(location?.city)

  const candidates = [neighborhood, city].filter(Boolean)
  for (const candidate of candidates) {
    if (/^unknown(\s+city)?$/i.test(candidate)) continue
    if (looksLikeIsoCode(candidate) && resolveCountryName(candidate, countryCode) === null) continue
    const countryName = resolveCountryName(candidate, countryCode)
    if (countryName && countryName.toLowerCase() === candidate.toLowerCase()) continue
    const subdivision = resolveSubdivisionName(candidate, countryCode)
    if (subdivision && subdivision.toLowerCase() === candidate.toLowerCase() && looksLikeIsoCode(candidate)) continue
    if (looksLikeIsoCode(candidate)) continue
    return candidate
  }
  return null
}

function dedupeParts(parts: string[]): string[] {
  const out: string[] = []
  for (const part of parts) {
    const last = out[out.length - 1]
    if (!last || last.toLowerCase() !== part.toLowerCase()) out.push(part)
  }
  return out
}

export type ReadablePlace = {
  area: string | null
  subdivision: string | null
  country: string | null
  line: string
}

/** Area / City, Emirate / State / Province, Country — no raw codes. */
export function buildReadablePlace(location: PlaceLocationInput): ReadablePlace {
  if (!location) {
    return { area: null, subdivision: null, country: null, line: 'Unknown' }
  }

  const countryCode = resolveCountryCode(location)
  const country = resolveCountryName(location.country, countryCode) || resolveCountryName(countryCode)
  const area = resolveAreaName(location, countryCode)
  const subdivisionRaw = resolveSubdivisionName(location.region, countryCode)
  const subdivision =
    subdivisionRaw && area && subdivisionRaw.toLowerCase() === area.toLowerCase() ? null : subdivisionRaw

  const parts = dedupeParts([area, subdivision, country].filter((p): p is string => Boolean(p)))
  return {
    area,
    subdivision,
    country,
    line: parts.length > 0 ? parts.join(', ') : 'Unknown',
  }
}
