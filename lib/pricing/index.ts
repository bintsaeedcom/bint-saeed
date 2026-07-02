import { products as staticProducts } from '@/data/products'
import { accessories } from '@/data/accessories'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import {
  EXPRESS_SHIPPING_PRICES,
  SIGNATURE_PACKAGING_PRICES,
} from './catalogPrices'
import { luxuryRoundFromAed } from './luxuryRound'
import {
  getCatalogAedPrice,
  getListedPriceForSlug,
  PRODUCT_CATALOG_PRICES,
} from './productPrices'
import { getListedPriceForAccessory, isAccessoryPricingConfirmed } from './accessoryCatalogPrices'
import type { SupportedCurrency } from './types'
import { SUPPORTED_CURRENCIES } from './types'

export {
  PRODUCT_CATALOG_PRICES,
  PRODUCT_CATALOG_TRIPLES,
  getCatalogAedPrice,
  getListedPriceForSlug,
  hasCatalogPrice,
  buildLuxuryCatalogPriceMap,
  buildFullPriceMap,
} from './productPrices'
export type { ProductCatalogTriple } from './luxuryCatalogPriceMap'
export {
  BELGRAVIA_CATALOG_PRICES,
  KAFTAN_CATALOG_PRICES,
} from './luxuryCatalogPriceMap'
export {
  ACCESSORY_CATALOG_PRICES,
  ACCESSORY_CATEGORIES_PENDING_AED,
  getListedPriceForAccessory,
  isAccessoryPricingConfirmed,
  isAccessoryCategoryPendingAed,
} from './accessoryCatalogPrices'
export {
  EXPRESS_SHIPPING_PRICES,
  SIGNATURE_PACKAGING_PRICES,
} from './catalogPrices'

export function isSupportedCurrency(code: string): code is SupportedCurrency {
  return (SUPPORTED_CURRENCIES as readonly string[]).includes(code)
}

export function normalizeCurrencyCode(code: string | undefined | null): SupportedCurrency {
  const upper = (code ?? 'AED').toUpperCase()
  return isSupportedCurrency(upper) ? upper : 'AED'
}

export function getProductSlugById(productId: string): string | undefined {
  return staticProducts.find((p) => p.id === productId)?.slug
}

/** @deprecated Use product id / slug lookup instead. */
export function getPriceTierForCategory(_category: string): undefined {
  return undefined
}

/** @deprecated Use product id / slug lookup instead. */
export function getPriceTierForProductId(_productId: string): undefined {
  return undefined
}

/** Master AED price from catalog (ignores stale cart amounts). */
export function resolveCatalogAedPrice(productId: string): number | null {
  const product = staticProducts.find((p) => p.id === productId)
  if (product) {
    return getCatalogAedPrice(product.slug) ?? product.price
  }
  const accessory = accessories.find((a) => a.id === resolveAccessoryId(productId))
  return accessory?.price ?? null
}

/**
 * Listed retail price in `currency` for a master AED amount.
 * When `productId` is set, uses the per-SKU catalogue table first.
 */
export function getListedPrice(
  aedMaster: number,
  currency: SupportedCurrency,
  _tier?: never,
  productId?: string,
): number {
  if (productId) {
    const slug = getProductSlugById(productId)
    if (slug) {
      const catalog = getListedPriceForSlug(slug, currency)
      if (catalog != null) return catalog
    }
    const accessory = accessories.find((a) => a.id === resolveAccessoryId(productId))
    if (accessory) {
      if (isAccessoryPricingConfirmed(accessory)) {
        const listed = getListedPriceForAccessory(accessory.id, currency)
        if (listed != null) return listed
      }
      if (currency === 'AED') return accessory.price
      return luxuryRoundFromAed(accessory.price, currency)
    }
  }
  if (currency === 'AED') return aedMaster
  return luxuryRoundFromAed(aedMaster, currency)
}

export function getCustomisationSurcharge(_currency: SupportedCurrency): number {
  return 0
}

export function getSignaturePackagingFee(currency: SupportedCurrency): number {
  return SIGNATURE_PACKAGING_PRICES[currency]
}

export function getExpressShippingFee(currency: SupportedCurrency): number {
  return EXPRESS_SHIPPING_PRICES[currency]
}

export type CartLineForPricing = {
  id: string
  price: number
  quantity: number
  customisationMessage?: string
  customisationSurcharge?: number
}

export function lineUnitInCurrency(
  item: Pick<CartLineForPricing, 'id' | 'price' | 'customisationMessage' | 'customisationSurcharge'>,
  currency: SupportedCurrency,
): number {
  const aedMaster = resolveCatalogAedPrice(item.id) ?? item.price
  return getListedPrice(aedMaster, currency, undefined, item.id)
}

export function lineTotalInCurrency(
  item: Pick<CartLineForPricing, 'id' | 'price' | 'quantity' | 'customisationMessage' | 'customisationSurcharge'>,
  currency: SupportedCurrency,
): number {
  return lineUnitInCurrency(item, currency) * item.quantity
}

export function cartSubtotalInCurrency(
  items: Pick<CartLineForPricing, 'id' | 'price' | 'quantity' | 'customisationMessage' | 'customisationSurcharge'>[],
  currency: SupportedCurrency,
): number {
  return items.reduce((sum, item) => sum + lineTotalInCurrency(item, currency), 0)
}

/** Stripe minor units — 3-decimal GCC currencies use 1000 subunits; IDR/NGN use ×100. */
export function toStripeMinorUnits(amount: number, currency: SupportedCurrency): number {
  const code = currency.toUpperCase()
  const threeDecimal = code === 'BHD' || code === 'KWD' || code === 'OMR'
  const factor = threeDecimal ? 1000 : 100
  return Math.max(0, Math.min(50_000_000, Math.round(amount * factor)))
}

export function formatAmountForCurrency(amount: number, currency: SupportedCurrency): string {
  const threeDecimal = currency === 'BHD' || currency === 'KWD' || currency === 'OMR'
  const fractionDigits = threeDecimal ? 3 : 0
  const formatted = amount.toLocaleString(undefined, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  })

  switch (currency) {
    case 'GBP':
      return `£${formatted}`
    case 'EUR':
      return `€${formatted}`
    case 'USD':
      return `$${formatted}`
    case 'CHF':
      return `CHF ${formatted}`
    case 'AED':
      return `${formatted} AED`
    case 'SAR':
      return `${formatted} SAR`
    case 'QAR':
      return `${formatted} QAR`
    case 'KWD':
      return `${formatted} KWD`
    case 'BHD':
      return `${formatted} BHD`
    case 'OMR':
      return `${formatted} OMR`
    case 'RUB':
      return `${formatted} ₽`
    case 'CNY':
      return `¥${formatted}`
    case 'CAD':
      return `C$${formatted}`
    case 'SGD':
      return `S$${formatted}`
    case 'BND':
      return `B$${formatted}`
    case 'MYR':
      return `RM ${formatted}`
    case 'MAD':
      return `${formatted} MAD`
    case 'NGN':
      return `₦${formatted}`
    case 'IDR':
      return `Rp ${amount.toLocaleString('id-ID', { maximumFractionDigits: 0 })}`
    case 'KZT':
      return `₸${formatted}`
    case 'AZN':
      return `₼${formatted}`
    case 'UZS':
      return `${amount.toLocaleString('uz-UZ', { maximumFractionDigits: 0 })} so'm`
    case 'HKD':
      return `HK$${formatted}`
    default:
      return `${formatted} ${currency}`
  }
}
