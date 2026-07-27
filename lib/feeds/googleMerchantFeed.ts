/**
 * Google Merchant Center product feed (TSV / tab-separated).
 * Spec: https://support.google.com/merchants/answer/7052112
 *
 * One hosted feed URL per target country (matching currency + shipping):
 *   https://www.bintsaeed.com/feeds/google.txt?country=AE   → AED
 *   https://www.bintsaeed.com/feeds/google.txt?country=FR   → EUR
 *   https://www.bintsaeed.com/feeds/google.txt?country=SA   → SAR
 * Or: ?currency=EUR (ships to all euro markets in GOOGLE_MERCHANT_COUNTRY_FEEDS)
 *
 * Register each country as its own data source in Merchant Center with:
 *   - Feed label = country code (AE, FR, …)
 *   - Target country = that country
 *   - Shipping settings for that country in the feed currency
 */

import { getListedPrice } from '@/lib/pricing'
import {
  getInternationalShippingFee,
  getUaeShippingFee,
  getWorldwideFreeShippingThreshold,
  UAE_FREE_SHIPPING_AED,
} from '@/lib/pricing/shippingPolicy'
import type { SupportedCurrency } from '@/lib/pricing/types'
import {
  buildMerchantCatalogItems,
  type MerchantCatalogItem,
} from '@/lib/feeds/merchantCatalogItems'

/** Default for UAE Free Listings / primary Merchant Center target. */
export const GOOGLE_PRIMARY_CURRENCY: SupportedCurrency = 'AED'
export const GOOGLE_PRIMARY_COUNTRY = 'AE'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

export type GoogleMerchantCountryFeed = {
  currency: SupportedCurrency
  feedLabel: string
  name: string
}

/**
 * Country → currency map for Merchant Center feeds.
 * Register one scheduled fetch per country using ?country=XX.
 */
export const GOOGLE_MERCHANT_COUNTRY_FEEDS: Record<string, GoogleMerchantCountryFeed> = {
  AE: { currency: 'AED', feedLabel: 'AE', name: 'United Arab Emirates' },
  SA: { currency: 'SAR', feedLabel: 'SA', name: 'Saudi Arabia' },
  QA: { currency: 'QAR', feedLabel: 'QA', name: 'Qatar' },
  KW: { currency: 'KWD', feedLabel: 'KW', name: 'Kuwait' },
  BH: { currency: 'BHD', feedLabel: 'BH', name: 'Bahrain' },
  OM: { currency: 'OMR', feedLabel: 'OM', name: 'Oman' },
  GB: { currency: 'GBP', feedLabel: 'GB', name: 'United Kingdom' },
  US: { currency: 'USD', feedLabel: 'US', name: 'United States' },
  FR: { currency: 'EUR', feedLabel: 'FR', name: 'France' },
  DE: { currency: 'EUR', feedLabel: 'DE', name: 'Germany' },
  NL: { currency: 'EUR', feedLabel: 'NL', name: 'Netherlands' },
  PT: { currency: 'EUR', feedLabel: 'PT', name: 'Portugal' },
  ES: { currency: 'EUR', feedLabel: 'ES', name: 'Spain' },
  IT: { currency: 'EUR', feedLabel: 'IT', name: 'Italy' },
  BE: { currency: 'EUR', feedLabel: 'BE', name: 'Belgium' },
  CH: { currency: 'CHF', feedLabel: 'CH', name: 'Switzerland' },
  CA: { currency: 'CAD', feedLabel: 'CA', name: 'Canada' },
  AU: { currency: 'USD', feedLabel: 'AU', name: 'Australia' },
  SG: { currency: 'SGD', feedLabel: 'SG', name: 'Singapore' },
  MY: { currency: 'MYR', feedLabel: 'MY', name: 'Malaysia' },
  ID: { currency: 'IDR', feedLabel: 'ID', name: 'Indonesia' },
  BN: { currency: 'BND', feedLabel: 'BN', name: 'Brunei' },
}

/** @deprecated Prefer GOOGLE_MERCHANT_COUNTRY_FEEDS */
export const GOOGLE_COUNTRY_CURRENCY: Record<string, SupportedCurrency> = Object.fromEntries(
  Object.entries(GOOGLE_MERCHANT_COUNTRY_FEEDS).map(([country, meta]) => [country, meta.currency]),
)

const FEED_CURRENCIES: SupportedCurrency[] = [
  'AED',
  'SAR',
  'QAR',
  'KWD',
  'BHD',
  'OMR',
  'GBP',
  'USD',
  'EUR',
  'CHF',
  'CAD',
  'SGD',
  'MYR',
  'IDR',
  'BND',
]

const FEED_COLUMNS = [
  'id',
  'title',
  'description',
  'link',
  'image_link',
  'additional_image_link',
  'availability',
  'condition',
  'price',
  'brand',
  'identifier_exists',
  'mpn',
  'google_product_category',
  'product_type',
  'color',
  'size',
  'gender',
  'age_group',
  'item_group_id',
  'size_system',
  'size_type',
  'custom_label_0',
  'shipping',
] as const

type FeedColumn = (typeof FEED_COLUMNS)[number]

export type GoogleFeedTarget = {
  currency: SupportedCurrency
  /** ISO countries included in the `shipping` attribute for this fetch. */
  countries: string[]
}

function formatFeedPrice(aedMaster: number, currency: SupportedCurrency, productId: string): string {
  const amount = getListedPrice(aedMaster, currency, undefined, productId)
  const threeDecimal = currency === 'BHD' || currency === 'KWD' || currency === 'OMR'
  return `${amount.toFixed(threeDecimal ? 3 : 2)} ${currency}`
}

/**
 * Google Merchant rejects WebP for image_link — route through JPEG converter.
 */
function googleSafeImageUrl(absoluteUrl: string): string {
  if (!absoluteUrl || !/\.webp(\?|$)/i.test(absoluteUrl)) return absoluteUrl
  try {
    const path = decodeURIComponent(new URL(absoluteUrl).pathname)
    return `${SITE_URL}/api/feeds/merchant-image?src=${encodeURIComponent(path)}`
  } catch {
    return absoluteUrl
  }
}

function googleSafeAdditionalImages(csv: string): string {
  return csv
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)
    .map(googleSafeImageUrl)
    .join(',')
}

function shippingFeeForCountry(
  country: string,
  listed: number,
  currency: SupportedCurrency,
): number {
  if (country === 'AE') {
    return currency === 'AED' && listed >= UAE_FREE_SHIPPING_AED ? 0 : getUaeShippingFee(currency)
  }
  return listed >= getWorldwideFreeShippingThreshold(currency)
    ? 0
    : getInternationalShippingFee(currency)
}

/** One `country:::price currency` entry per target country (currency must match price). */
function buildShippingAttribute(
  aedMaster: number,
  currency: SupportedCurrency,
  productId: string,
  countries: string[],
): string {
  const listed = getListedPrice(aedMaster, currency, undefined, productId)
  const threeDecimal = currency === 'BHD' || currency === 'KWD' || currency === 'OMR'
  const fmt = (n: number) => n.toFixed(threeDecimal ? 3 : 2)

  return countries
    .map((country) => {
      const fee = shippingFeeForCountry(country, listed, currency)
      return `${country}:::${fmt(fee)} ${currency}`
    })
    .join(',')
}

/** Escape tabs/newlines so a row stays one TSV line. */
function tsvCell(value: string): string {
  return value.replace(/\t/g, ' ').replace(/\r\n/g, ' ').replace(/\n/g, ' ').replace(/\r/g, ' ').trim()
}

function itemToRow(
  item: MerchantCatalogItem,
  currency: SupportedCurrency,
  countries: string[],
): Record<FeedColumn, string> {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    link: item.link,
    image_link: googleSafeImageUrl(item.image_link),
    additional_image_link: googleSafeAdditionalImages(item.additional_image_link),
    availability: item.availability,
    condition: item.condition,
    price: formatFeedPrice(item.aedMaster, currency, item.productId),
    brand: item.brand,
    identifier_exists: item.identifier_exists,
    mpn: item.mpn,
    google_product_category: item.google_product_category,
    product_type: item.product_type,
    color: item.color,
    size: item.size,
    gender: item.gender,
    age_group: item.age_group,
    item_group_id: item.item_group_id,
    size_system: item.size_system,
    size_type: item.size_type,
    custom_label_0: item.custom_label_0,
    shipping: buildShippingAttribute(item.aedMaster, currency, item.productId, countries),
  }
}

export function rowsToGoogleTsv(rows: Record<FeedColumn, string>[]): string {
  const header = FEED_COLUMNS.join('\t')
  const body = rows.map((row) => FEED_COLUMNS.map((col) => tsvCell(row[col] ?? '')).join('\t'))
  return `${header}\n${body.join('\n')}\n`
}

export function parseGoogleFeedCurrency(raw: string | null | undefined): SupportedCurrency {
  const code = (raw ?? '').trim().toUpperCase()
  if (FEED_CURRENCIES.includes(code as SupportedCurrency)) return code as SupportedCurrency
  return GOOGLE_PRIMARY_CURRENCY
}

export function parseGoogleFeedCountry(raw: string | null | undefined): string | undefined {
  const code = (raw ?? '').trim().toUpperCase()
  if (!code) return undefined
  if (GOOGLE_MERCHANT_COUNTRY_FEEDS[code]) return code
  return undefined
}

/** Resolve currency + shipping countries from ?country= and/or ?currency=. */
export function resolveGoogleFeedTarget(input: {
  country?: string | null
  currency?: string | null
}): GoogleFeedTarget {
  const country = parseGoogleFeedCountry(input.country)
  if (country) {
    const meta = GOOGLE_MERCHANT_COUNTRY_FEEDS[country]
    return { currency: meta.currency, countries: [country] }
  }

  const currency = parseGoogleFeedCurrency(input.currency)
  const countries = Object.entries(GOOGLE_MERCHANT_COUNTRY_FEEDS)
    .filter(([, meta]) => meta.currency === currency)
    .map(([code]) => code)

  return {
    currency,
    countries: countries.length > 0 ? countries : [GOOGLE_PRIMARY_COUNTRY],
  }
}

/** Scheduled-fetch URLs to register in Merchant Center (one per country). */
export function listGoogleMerchantFeedUrls(baseUrl: string = SITE_URL): Array<{
  country: string
  name: string
  currency: SupportedCurrency
  feedLabel: string
  url: string
}> {
  const root = baseUrl.replace(/\/$/, '')
  return Object.entries(GOOGLE_MERCHANT_COUNTRY_FEEDS).map(([country, meta]) => ({
    country,
    name: meta.name,
    currency: meta.currency,
    feedLabel: meta.feedLabel,
    url: `${root}/feeds/google.txt?country=${country}`,
  }))
}

/** Full catalog TSV for Google Merchant scheduled fetch. */
export async function buildGoogleMerchantTsv(
  currencyOrTarget: SupportedCurrency | GoogleFeedTarget = GOOGLE_PRIMARY_CURRENCY,
): Promise<string> {
  const target: GoogleFeedTarget =
    typeof currencyOrTarget === 'string'
      ? resolveGoogleFeedTarget({ currency: currencyOrTarget })
      : currencyOrTarget

  const items = await buildMerchantCatalogItems()
  return rowsToGoogleTsv(items.map((item) => itemToRow(item, target.currency, target.countries)))
}
