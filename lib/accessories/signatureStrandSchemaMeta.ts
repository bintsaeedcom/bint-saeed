import type { Accessory } from '@/data/accessories'
import type { AppLocale } from '@/lib/i18n/routing'
import { getGlobalPdpSchemaDiscoveryKeywords } from '@/lib/products/globalPdpSchemaDiscoveryI18n'
import {
  getGlobalJewelleryDiscoveryKeywords,
  getJewelleryCategoryDiscoveryKeywords,
  mergeAccessorySchemaKeywords,
} from '@/lib/accessories/jewelleryDiscoveryI18n'
import { getStrandPdpPack } from '@/lib/accessories/strandPdpSeo'
import {
  buildSignatureStrandStoneKeywords,
  getSignatureStrandSharedKeywords,
} from '@/lib/accessories/signatureStrandSchemaKeywordsI18n'
import { getSignatureStrandFaq } from '@/lib/accessories/signatureStrandFaqI18n'
import { getSignatureStrandSchemaFacts } from '@/lib/accessories/signatureStrandSchemaLocalePacks'
import { localizeStrandSchemaPropertyLabel } from '@/lib/accessories/strandSchemaPropertyLabelsI18n'

export { getSignatureStrandFaq } from '@/lib/accessories/signatureStrandFaqI18n'
export {
  getSignatureStrandSchemaAudience,
  getSignatureStrandSchemaFacts,
} from '@/lib/accessories/signatureStrandSchemaLocalePacks'

/** Full merged keyword string for signature-strand Product JSON-LD. */
export function buildSignatureStrandSchemaKeywords(
  accessory: Accessory,
  displayName: string,
  locale: AppLocale = 'en',
): string {
  const pack = getStrandPdpPack(accessory.id)
  return mergeAccessorySchemaKeywords(
    getGlobalPdpSchemaDiscoveryKeywords(locale),
    getGlobalJewelleryDiscoveryKeywords(locale),
    getJewelleryCategoryDiscoveryKeywords('signature-strands', locale),
    getSignatureStrandSharedKeywords(locale),
    pack?.keywords,
    buildSignatureStrandStoneKeywords(displayName, pack?.keywords?.slice(0, 6)),
  )
}

export function buildSignatureStrandAdditionalProperties(
  accessory: Accessory,
  displayName: string,
  locale: AppLocale = 'en',
): Record<string, unknown>[] {
  const facts = getSignatureStrandSchemaFacts(accessory, locale)
  const pack = getStrandPdpPack(accessory.id)

  const props: Record<string, unknown>[] = [
    { '@type': 'PropertyValue', name: localizeStrandSchemaPropertyLabel('Product type', locale), value: facts.productType },
    { '@type': 'PropertyValue', name: localizeStrandSchemaPropertyLabel('Stone type', locale), value: displayName },
    { '@type': 'PropertyValue', name: localizeStrandSchemaPropertyLabel('Bead construction', locale), value: facts.beadConstruction },
    { '@type': 'PropertyValue', name: localizeStrandSchemaPropertyLabel('Attachment', locale), value: facts.attachment },
    { '@type': 'PropertyValue', name: localizeStrandSchemaPropertyLabel('Designed for', locale), value: facts.designedFor },
    { '@type': 'PropertyValue', name: localizeStrandSchemaPropertyLabel('Made in', locale), value: facts.madeIn },
    { '@type': 'PropertyValue', name: localizeStrandSchemaPropertyLabel('Care', locale), value: facts.care },
    { '@type': 'PropertyValue', name: localizeStrandSchemaPropertyLabel('Suitable for', locale), value: facts.suitableFor },
  ]

  if (pack) {
    props.push({
      '@type': 'PropertyValue',
      name: localizeStrandSchemaPropertyLabel('Pairs well with', locale),
      value: `${pack.pairing.necklaceLabel} and ${pack.pairing.earringsLabel}`,
    })
  }

  return props
}
