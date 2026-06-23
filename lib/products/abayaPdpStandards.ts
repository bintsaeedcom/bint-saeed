import type { AppLocale } from '@/lib/i18n/routing'
import type { Product } from '@/data/products'
import type { ProductPdpContent } from '@/data/productPdpContent'

/**
 * Standard abaya PDP feature — always keep in Product Details (and Fit & Size).
 * When updating hero copy, add new bullets without removing this line.
 */
export const ABAYA_CUSTOM_LENGTH_FEATURE: Record<'en' | 'id' | 'ms', string> = {
  en: 'Custom length available upon request',
  id: 'Panjang custom tersedia atas permintaan',
  ms: 'Panjang tersuai tersedia atas permintaan',
}

const CUSTOM_LENGTH_PATTERN =
  /custom length|panjang (custom|tersuai|kustom)|custom lengths upon request/i

function customLengthLine(locale: AppLocale): string {
  if (locale === 'id') return ABAYA_CUSTOM_LENGTH_FEATURE.id
  if (locale === 'ms') return ABAYA_CUSTOM_LENGTH_FEATURE.ms
  return ABAYA_CUSTOM_LENGTH_FEATURE.en
}

function hasCustomLengthLine(lines: string[]): boolean {
  return lines.some((line) => CUSTOM_LENGTH_PATTERN.test(line))
}

/** Insert custom-length line before origin line, or before the end if none. */
function insertCustomLengthFeature(details: string[], line: string): string[] {
  if (hasCustomLengthLine(details)) return details

  const originIdx = details.findIndex((d) =>
    /^(Made in|Dibuat di|Dihasilkan di)/i.test(d.trim()),
  )
  if (originIdx >= 0) {
    return [...details.slice(0, originIdx), line, ...details.slice(originIdx)]
  }

  return [...details, line]
}

/** Ensures every abaya PDP includes the standard custom-length feature. */
export function applyAbayaPdpStandards(
  product: Pick<Product, 'category'>,
  content: ProductPdpContent,
  locale: AppLocale = 'en',
): ProductPdpContent {
  if (product.category !== 'Abayas') return content

  const line = customLengthLine(locale)

  return {
    ...content,
    productDetails: insertCustomLengthFeature(content.productDetails, line),
    fitAndSizeDetails: hasCustomLengthLine(content.fitAndSizeDetails)
      ? content.fitAndSizeDetails
      : [...content.fitAndSizeDetails, line],
  }
}
