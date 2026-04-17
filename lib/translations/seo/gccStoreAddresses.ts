import type { GccStoreId } from './types'

/** Fixed postal / areaServed facts for ClothingStore JSON-LD (not locale-specific). */
export type GccStoreAddressBlock = {
  addressLocality: string
  addressRegion: string
  addressCountry: string
  areaServedCity: string
  areaServedCountry: string
}

export const GCC_STORE_ADDRESS_BY_ID: Record<GccStoreId, GccStoreAddressBlock> = {
  'abu-dhabi': {
    addressLocality: 'Abu Dhabi',
    addressRegion: 'Abu Dhabi',
    addressCountry: 'AE',
    areaServedCity: 'Abu Dhabi',
    areaServedCountry: 'United Arab Emirates',
  },
  dubai: {
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
    areaServedCity: 'Dubai',
    areaServedCountry: 'United Arab Emirates',
  },
  doha: {
    addressLocality: 'Doha',
    addressRegion: 'Doha',
    addressCountry: 'QA',
    areaServedCity: 'Doha',
    areaServedCountry: 'Qatar',
  },
  riyadh: {
    addressLocality: 'Riyadh',
    addressRegion: 'Riyadh',
    addressCountry: 'SA',
    areaServedCity: 'Riyadh',
    areaServedCountry: 'Saudi Arabia',
  },
  jeddah: {
    addressLocality: 'Jeddah',
    addressRegion: 'Makkah',
    addressCountry: 'SA',
    areaServedCity: 'Jeddah',
    areaServedCountry: 'Saudi Arabia',
  },
}
