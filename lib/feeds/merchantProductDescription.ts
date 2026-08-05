/**
 * Google Merchant / Meta product description composer.
 * Assembles existing approved EN PDP + schema facts only — never invents claims,
 * never changes site PDP copy.
 */

import type { Accessory } from '@/data/accessories'
import type { Product } from '@/data/products'
import { getProductPdpContent } from '@/data/productPdpContent'
import { getBagCharmPdpContent } from '@/lib/accessories/bagCharmPdpContent'
import { getNecklaceEarringPdpContent } from '@/lib/accessories/necklaceEarringPdpContent'
import { getPhoneCharmPdpContent } from '@/lib/accessories/phoneCharmPdpContent'
import { getStrandPdpContent } from '@/lib/accessories/strandPdp/resolveStrandPdpContent'
import { pdpIntroParagraphsToPlainText } from '@/lib/products/pdpIntroRich'
import { getProductSchemaFacts } from '@/lib/products/productSchemaMeta'

const FEED_DESCRIPTION_MAX = 5000

function isPlaceholder(value?: string | null): boolean {
  if (!value?.trim()) return true
  return /to be finalized|to be confirmed|composition — to be|measurements — to be/i.test(value)
}

function sanitizeFeedDescription(value: string, maxLen = FEED_DESCRIPTION_MAX): string {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLen)
}

function sentenceJoin(parts: string[]): string {
  return parts
    .map((part) => part.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .map((part) => (/[.!?]$/.test(part) ? part : `${part}.`))
    .join(' ')
}

function uniqueParts(parts: string[]): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  for (const part of parts) {
    const normalized = part.replace(/\s+/g, ' ').trim().toLowerCase()
    if (!normalized || seen.has(normalized)) continue
    // Drop near-duplicates that are fully contained in a longer part already kept.
    if ([...seen].some((existing) => existing.includes(normalized) && existing.length > normalized.length + 20)) {
      continue
    }
    seen.add(normalized)
    out.push(part.replace(/\s+/g, ' ').trim())
  }
  return out
}

/**
 * Rich Merchant description from PDP modules + schema facts (EN source of truth).
 * Optional colour / size echo structured feed attributes into the description body
 * (Google Shopping recommendations often flag these when missing from free text).
 */
export function buildMerchantProductDescription(
  product: Product,
  color?: string,
  size?: string,
): string {
  const pdp = getProductPdpContent(product, { locale: 'en', color })
  const facts = getProductSchemaFacts(product, 'en')

  const intro =
    pdp.introParagraphParts?.length
      ? pdpIntroParagraphsToPlainText(pdp.introParagraphParts)
      : pdp.introParagraphs ?? []

  const productDetails = [
    ...(pdp.productDetails ?? []),
    ...(pdp.productDetailGroups?.flatMap((group) => group.items) ?? []),
  ]

  const compositionItems = [
    ...(pdp.compositionDetails ?? []),
    ...(pdp.compositionGroups?.flatMap((group) => group.items) ?? []),
  ]

  let materialBlock = ''
  if (compositionItems.length > 0) {
    materialBlock = `Materials and composition: ${compositionItems.join('; ')}`
  } else if (!isPlaceholder(facts.material)) {
    materialBlock = `Materials: ${facts.material}`
  } else if (!isPlaceholder(product.fabric)) {
    materialBlock = `Materials: ${product.fabric}`
  }

  const careItems = pdp.careDetails ?? []
  const careBlock =
    careItems.length > 0
      ? `Care: ${careItems.join('; ')}`
      : !isPlaceholder(facts.care)
        ? `Care: ${facts.care}`
        : ''

  const fitItems = pdp.fitAndSizeDetails ?? []
  const fitBlock = fitItems.length > 0 ? `Fit and sizing: ${fitItems.join('; ')}` : ''

  const measurements =
    !isPlaceholder(product.measurements) ? `Measurements: ${product.measurements}` : ''

  const originItems = pdp.originDetails ?? []
  const originBlock =
    originItems.length > 0
      ? originItems.join(' ')
      : !isPlaceholder(facts.madeIn)
        ? `Origin: ${facts.madeIn}`
        : 'Created in Abu Dhabi, United Arab Emirates by Bint Saeed.'

  const occasions =
    !isPlaceholder(facts.suitableFor) ? `Designed for: ${facts.suitableFor}` : ''

  const colourLine = color?.trim() ? `Colour: ${color.trim()}` : ''
  const sizeLine = size?.trim() ? `Size: ${size.trim()}` : ''

  const brandStory = pdp.brandStory?.trim() || ''

  const fallbackCatalog =
    intro.length === 0 && productDetails.length === 0
      ? [product.description?.trim() || product.name, !isPlaceholder(product.fabric) ? product.fabric : '']
          .filter(Boolean)
          .join(' ')
      : ''

  const parts = uniqueParts([
    intro.join(' '),
    productDetails.length > 0 ? productDetails.join('. ') : '',
    materialBlock,
    careBlock,
    fitBlock,
    measurements,
    occasions,
    originBlock,
    colourLine,
    sizeLine,
    brandStory,
    fallbackCatalog,
    'Ships worldwide from Abu Dhabi where offered.',
  ])

  return sanitizeFeedDescription(sentenceJoin(parts), FEED_DESCRIPTION_MAX)
}

/** Rich Merchant description for jewellery / charm accessories from existing EN PDP packs. */
export function buildMerchantAccessoryDescription(item: Accessory): string {
  const strand = getStrandPdpContent(item.id, 'en')
  if (strand) {
    return sanitizeFeedDescription(
      sentenceJoin(
        uniqueParts([
          strand.introParagraphs.join(' '),
          strand.productDetails.join('. '),
          `Materials: ${strand.materials.join('; ')}`,
          strand.stoneOrigin,
          strand.naturalStone,
          `Care: ${strand.care.join('; ')}`,
          'Created in Abu Dhabi by Bint Saeed. Ships worldwide.',
        ]),
      ),
      FEED_DESCRIPTION_MAX,
    )
  }

  const necklaceEarring = getNecklaceEarringPdpContent(item.id, 'en')
  if (necklaceEarring) {
    return sanitizeFeedDescription(
      sentenceJoin(
        uniqueParts([
          necklaceEarring.introParagraphs.join(' '),
          necklaceEarring.features.join('. '),
          `Care: ${[necklaceEarring.careLead, ...necklaceEarring.care].filter(Boolean).join('; ')}`,
          'Created in Abu Dhabi by Bint Saeed. Ships worldwide.',
        ]),
      ),
      FEED_DESCRIPTION_MAX,
    )
  }

  const bagCharm = getBagCharmPdpContent(item.id, 'en')
  if (bagCharm) {
    return sanitizeFeedDescription(
      sentenceJoin(
        uniqueParts([
          bagCharm.introParagraphs.join(' '),
          bagCharm.features.join('. '),
          bagCharm.colour ? `Colour: ${bagCharm.colour}` : '',
          `Care: ${[bagCharm.careLead, ...bagCharm.care].filter(Boolean).join('; ')}`,
          'Created in Abu Dhabi by Bint Saeed. Ships worldwide.',
        ]),
      ),
      FEED_DESCRIPTION_MAX,
    )
  }

  const phoneCharm = getPhoneCharmPdpContent(item.id, 'en')
  if (phoneCharm) {
    return sanitizeFeedDescription(
      sentenceJoin(
        uniqueParts([
          phoneCharm.introParagraphs.join(' '),
          phoneCharm.features.join('. '),
          phoneCharm.colour ? `Colour: ${phoneCharm.colour}` : '',
          `Care: ${[phoneCharm.careLead, ...phoneCharm.care].filter(Boolean).join('; ')}`,
          'Created in Abu Dhabi by Bint Saeed. Ships worldwide.',
        ]),
      ),
      FEED_DESCRIPTION_MAX,
    )
  }

  return sanitizeFeedDescription(
    sentenceJoin(
      uniqueParts([
        item.description?.trim() || item.name,
        item.materials?.trim() ? `Materials: ${item.materials}` : '',
        'Created in Abu Dhabi by Bint Saeed. Ships worldwide.',
      ]),
    ),
    FEED_DESCRIPTION_MAX,
  )
}
