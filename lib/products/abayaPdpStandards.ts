import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductPdpContent } from '@/data/productPdpContent'
import type { Product } from '@/data/products'
import { pdpStructuredStrings } from '@/lib/products/productPdpStructuredI18n'

/**
 * Standard abaya PDP feature — always keep in Product Details (and Fit & Size).
 * When updating hero copy, add new bullets without removing this line.
 */
export function abayaCustomLengthLine(locale: AppLocale): string {
  return pdpStructuredStrings(locale).customLength
}

const CUSTOM_LENGTH_PATTERN =
  /custom length|panjang (custom|tersuai|kustom)|comprimento personalizado|longueur sur mesure|largo personalizado|läng(e)? auf anfrage|lunghezza personalizzata|длин[аы] по запросу|定制长度|aangepaste lengte|طول مخصص/i

function hasCustomLengthLine(lines: string[]): boolean {
  return lines.some((line) => CUSTOM_LENGTH_PATTERN.test(line))
}

/** Insert custom-length line before origin line, or before the end if none. */
function insertCustomLengthFeature(details: string[], line: string): string[] {
  if (hasCustomLengthLine(details)) return details

  const originIdx = details.findIndex((d) =>
    /^(Made in|Dibuat di|Dihasilkan di|Fabriqué|Hergestellt|Realizzato|Hecho|Сделано|制作|Gemaakt|Feito|صُنع)/i.test(
      d.trim(),
    ),
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

  const line = abayaCustomLengthLine(locale)

  return {
    ...content,
    productDetails: insertCustomLengthFeature(content.productDetails, line),
    fitAndSizeDetails: hasCustomLengthLine(content.fitAndSizeDetails)
      ? content.fitAndSizeDetails
      : [...content.fitAndSizeDetails, line],
  }
}
