import type { CartEmptyDiscoverCopy } from '@/lib/i18n/cartEmptyDiscoverI18n'

export type DiscoverDestinationKey =
  | 'discoverAccessories'
  | 'exploreCollection'
  | 'discoverStrands'
  | 'personalise'

export type DiscoverDestination = {
  href: '/accessories' | '/shop' | '/strands' | '/personalisation'
  image: string
  analytics: string
  labelKey: Exclude<DiscoverDestinationKey, 'discoverStrands'> | 'discoverStrands'
  hintKey: keyof Pick<
    CartEmptyDiscoverCopy,
    'accessoriesHint' | 'collectionHint' | 'strandsHint' | 'personaliseHint'
  >
  strandsLock: boolean
}

/** Shared discovery exits for empty states and post-purchase keep-browsing. */
export const DISCOVER_DESTINATIONS: DiscoverDestination[] = [
  {
    href: '/accessories',
    image: '/collection-section/bint-saeed-necklaces-collection-nav.webp',
    analytics: 'discover_accessories',
    labelKey: 'discoverAccessories',
    hintKey: 'accessoriesHint',
    strandsLock: false,
  },
  {
    href: '/shop',
    image: '/collection-section/bint-saeed-luxury-abayas-collection-nav.webp',
    analytics: 'discover_shop',
    labelKey: 'exploreCollection',
    hintKey: 'collectionHint',
    strandsLock: false,
  },
  {
    href: '/strands',
    image: '/collection-section/bint-saeed-signature-strands-collection-nav.webp',
    analytics: 'discover_strands',
    labelKey: 'discoverStrands',
    hintKey: 'strandsHint',
    strandsLock: true,
  },
  {
    href: '/personalisation',
    image: '/collection-section/bint-saeed-name-labels-collection-nav.webp',
    analytics: 'discover_personalisation',
    labelKey: 'personalise',
    hintKey: 'personaliseHint',
    strandsLock: false,
  },
]
