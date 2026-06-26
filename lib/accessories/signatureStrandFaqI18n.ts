import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import { getStrandPdpContent } from '@/lib/accessories/strandPdp/resolveStrandPdpContent'

/** FAQ for signature-strand JSON-LD — fully localized from strand PDP content. */
export function getSignatureStrandFaq(accessoryId: string, locale: AppLocale = 'en'): ProductFaqItem[] {
  return getStrandPdpContent(accessoryId, locale)?.faq ?? []
}
