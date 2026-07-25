/**
 * Meta (Facebook / Instagram) Commerce Manager catalog feed (CSV).
 * Spec: https://www.facebook.com/business/help/120325381656392
 *
 * Primary image_link = PDP carousel image 1 (front).
 * Hosted URL (after rewrite):
 *   https://www.bintsaeed.com/feeds/meta.csv
 * Optional: ?currency=AED (default AED for UAE ad accounts)
 */

import { getListedPrice } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import {
  buildMerchantCatalogItems,
  type MerchantCatalogItem,
} from '@/lib/feeds/merchantCatalogItems'
import { parseGoogleFeedCurrency } from '@/lib/feeds/googleMerchantFeed'

export const META_PRIMARY_CURRENCY: SupportedCurrency = 'AED'

const FEED_COLUMNS = [
  'id',
  'title',
  'description',
  'availability',
  'condition',
  'price',
  'link',
  'image_link',
  'brand',
  'additional_image_link',
  'gender',
  'color',
  'size',
  'age_group',
  'item_group_id',
  'google_product_category',
  'product_type',
  'custom_label_0',
] as const

type FeedColumn = (typeof FEED_COLUMNS)[number]

function csvEscape(value: string): string {
  const normalized = value.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim()
  return `"${normalized.replace(/"/g, '""')}"`
}

function formatFeedPrice(aedMaster: number, currency: SupportedCurrency, productId: string): string {
  const amount = getListedPrice(aedMaster, currency, undefined, productId)
  const threeDecimal = currency === 'BHD' || currency === 'KWD' || currency === 'OMR'
  return `${amount.toFixed(threeDecimal ? 3 : 2)} ${currency}`
}

/** Meta uses spaced availability values. */
function metaAvailability(value: MerchantCatalogItem['availability']): string {
  return value === 'in_stock' ? 'in stock' : 'out of stock'
}

function itemToRow(item: MerchantCatalogItem, currency: SupportedCurrency): Record<FeedColumn, string> {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    availability: metaAvailability(item.availability),
    condition: item.condition,
    price: formatFeedPrice(item.aedMaster, currency, item.productId),
    link: item.link,
    image_link: item.image_link,
    brand: item.brand,
    additional_image_link: item.additional_image_link,
    gender: item.gender,
    color: item.color,
    size: item.size,
    age_group: item.age_group,
    item_group_id: item.item_group_id,
    google_product_category: item.google_product_category,
    product_type: item.product_type,
    custom_label_0: item.custom_label_0,
  }
}

export function rowsToMetaCsv(rows: Record<FeedColumn, string>[]): string {
  const header = FEED_COLUMNS.join(',')
  const body = rows.map((row) => FEED_COLUMNS.map((col) => csvEscape(row[col] ?? '')).join(','))
  return `${header}\n${body.join('\n')}\n`
}

export function parseMetaFeedCurrency(raw: string | null | undefined): SupportedCurrency {
  return parseGoogleFeedCurrency(raw)
}

export async function buildMetaCatalogCsv(
  currency: SupportedCurrency = META_PRIMARY_CURRENCY,
): Promise<string> {
  const items = await buildMerchantCatalogItems()
  return rowsToMetaCsv(items.map((item) => itemToRow(item, currency)))
}
