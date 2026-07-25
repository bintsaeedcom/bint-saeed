/**
 * Google Merchant Center product feed (TSV / tab-separated).
 * Spec: https://support.google.com/merchants/answer/7052112
 *
 * Primary image_link = PDP carousel image 1 (front).
 * Prefer AED for UAE Free Listings; pass another currency for country-specific feeds.
 *
 * Hosted URL (after rewrite):
 *   https://www.bintsaeed.com/feeds/google.txt
 * Optional: ?currency=SAR (or AED, USD, GBP, QAR, KWD, BHD, OMR)
 */

import { getListedPrice } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import {
  buildMerchantCatalogItems,
  type MerchantCatalogItem,
} from '@/lib/feeds/merchantCatalogItems'

/** Default for UAE Free Listings / primary Merchant Center target. */
export const GOOGLE_PRIMARY_CURRENCY: SupportedCurrency = 'AED'

export const GOOGLE_COUNTRY_CURRENCY: Record<string, SupportedCurrency> = {
  AE: 'AED',
  SA: 'SAR',
  QA: 'QAR',
  KW: 'KWD',
  BH: 'BHD',
  OM: 'OMR',
  GB: 'GBP',
  US: 'USD',
}

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
] as const

type FeedColumn = (typeof FEED_COLUMNS)[number]

function formatFeedPrice(aedMaster: number, currency: SupportedCurrency, productId: string): string {
  const amount = getListedPrice(aedMaster, currency, undefined, productId)
  const threeDecimal = currency === 'BHD' || currency === 'KWD' || currency === 'OMR'
  return `${amount.toFixed(threeDecimal ? 3 : 2)} ${currency}`
}

/** Escape tabs/newlines so a row stays one TSV line. */
function tsvCell(value: string): string {
  return value.replace(/\t/g, ' ').replace(/\r\n/g, ' ').replace(/\n/g, ' ').replace(/\r/g, ' ').trim()
}

function itemToRow(item: MerchantCatalogItem, currency: SupportedCurrency): Record<FeedColumn, string> {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    link: item.link,
    image_link: item.image_link,
    additional_image_link: item.additional_image_link,
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
  }
}

export function rowsToGoogleTsv(rows: Record<FeedColumn, string>[]): string {
  const header = FEED_COLUMNS.join('\t')
  const body = rows.map((row) => FEED_COLUMNS.map((col) => tsvCell(row[col] ?? '')).join('\t'))
  return `${header}\n${body.join('\n')}\n`
}

export function parseGoogleFeedCurrency(raw: string | null | undefined): SupportedCurrency {
  const code = (raw ?? '').trim().toUpperCase()
  const allowed: SupportedCurrency[] = ['AED', 'SAR', 'QAR', 'KWD', 'BHD', 'OMR', 'GBP', 'USD']
  if (allowed.includes(code as SupportedCurrency)) return code as SupportedCurrency
  return GOOGLE_PRIMARY_CURRENCY
}

/** Full catalog TSV for Google Merchant scheduled fetch. */
export async function buildGoogleMerchantTsv(
  currency: SupportedCurrency = GOOGLE_PRIMARY_CURRENCY,
): Promise<string> {
  const items = await buildMerchantCatalogItems()
  return rowsToGoogleTsv(items.map((item) => itemToRow(item, currency)))
}
