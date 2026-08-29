import type { SiCountry } from '@/lib/search-intelligence/types'

/**
 * DataForSEO Google SERP location targets.
 * Country codes from https://docs.dataforseo.com/v3/serp/google/locations/
 * City entries use location_name (SERP API format) where city-level targeting is supported.
 */
export type DataForSeoLocationTarget = {
  id: string
  label: string
  locationCode?: number
  locationName?: string
  countryIso: string
}

export const DATAFORSEO_COUNTRY_LOCATIONS: Record<
  Exclude<SiCountry, 'Global'>,
  DataForSeoLocationTarget
> = {
  UAE: {
    id: 'uae',
    label: 'United Arab Emirates',
    locationCode: 2784,
    countryIso: 'AE',
  },
  'Saudi Arabia': {
    id: 'sa',
    label: 'Saudi Arabia',
    locationCode: 2682,
    countryIso: 'SA',
  },
  Qatar: {
    id: 'qa',
    label: 'Qatar',
    locationCode: 2274,
    countryIso: 'QA',
  },
  Kuwait: {
    id: 'kw',
    label: 'Kuwait',
    locationCode: 2414,
    countryIso: 'KW',
  },
  Bahrain: {
    id: 'bh',
    label: 'Bahrain',
    locationCode: 2048,
    countryIso: 'BH',
  },
  Oman: {
    id: 'om',
    label: 'Oman',
    locationCode: 2512,
    countryIso: 'OM',
  },
  UK: {
    id: 'uk',
    label: 'United Kingdom',
    locationCode: 2826,
    countryIso: 'GB',
  },
  US: {
    id: 'us',
    label: 'United States',
    locationCode: 2840,
    countryIso: 'US',
  },
  France: {
    id: 'fr',
    label: 'France',
    locationCode: 2250,
    countryIso: 'FR',
  },
  Italy: {
    id: 'it',
    label: 'Italy',
    locationCode: 2380,
    countryIso: 'IT',
  },
  Netherlands: {
    id: 'nl',
    label: 'Netherlands',
    locationCode: 2528,
    countryIso: 'NL',
  },
}

/** UAE city-level SERP targets (location_name per DataForSEO SERP locations API). */
export const DATAFORSEO_UAE_CITY_LOCATIONS: DataForSeoLocationTarget[] = [
  {
    id: 'abu-dhabi',
    label: 'Abu Dhabi',
    locationName: 'Abu Dhabi,Abu Dhabi,United Arab Emirates',
    countryIso: 'AE',
  },
  {
    id: 'dubai',
    label: 'Dubai',
    locationName: 'Dubai,Dubai,United Arab Emirates',
    countryIso: 'AE',
  },
  {
    id: 'al-ain',
    label: 'Al Ain',
    locationName: 'Al Ain,Abu Dhabi,United Arab Emirates',
    countryIso: 'AE',
  },
]

export function resolveDataForSeoLocation(
  country: SiCountry,
  cityId?: string | null,
): DataForSeoLocationTarget {
  if (country === 'Global') {
    return DATAFORSEO_COUNTRY_LOCATIONS.UAE
  }
  if (country === 'UAE' && cityId) {
    const city = DATAFORSEO_UAE_CITY_LOCATIONS.find((c) => c.id === cityId)
    if (city) return city
  }
  return DATAFORSEO_COUNTRY_LOCATIONS[country]
}

export function locationPayload(target: DataForSeoLocationTarget): {
  location_code?: number
  location_name?: string
} {
  if (target.locationCode) return { location_code: target.locationCode }
  if (target.locationName) return { location_name: target.locationName }
  return { location_code: 2784 }
}
