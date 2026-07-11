import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import { getBagCharmPdpPack } from '@/lib/accessories/bagCharmPdpContentI18n'

export const AL_AIN_OASIS_BAG_CHARM_IDS = [
  'al-ain-oasis-i-bag-charm-fuchsia-jade',
  'al-ain-oasis-ii-bag-charm-fuchsia-jade',
] as const

export type AlAinOasisBagCharmId = (typeof AL_AIN_OASIS_BAG_CHARM_IDS)[number]

const BAG_CHARM_ID_SET = new Set<string>(AL_AIN_OASIS_BAG_CHARM_IDS)

export function isAlAinOasisBagCharmId(id: string): id is AlAinOasisBagCharmId {
  return BAG_CHARM_ID_SET.has(id)
}

export type BagCharmFaqItem = {
  question: string
  answer: string | string[]
}

/** Aligned with phone-charm PDP: intro + Features, Care separate, FAQ. */
export type BagCharmPdpContentPack = {
  headline: string
  introParagraphs: string[]
  featuresTitle: string
  features: string[]
  careLead: string
  care: string[]
  colour: string
  faq: BagCharmFaqItem[]
}

export function faqAnswerParagraphs(answer: string | string[]): string[] {
  return Array.isArray(answer) ? answer : [answer]
}

export function getBagCharmPdpContent(
  id: string,
  locale: AppLocale = 'en',
): BagCharmPdpContentPack | undefined {
  const canonicalId = resolveAccessoryId(id)
  if (!isAlAinOasisBagCharmId(canonicalId)) return undefined
  return getBagCharmPdpPack(canonicalId, locale)
}

export function getBagCharmFaqForSchema(id: string, locale: AppLocale = 'en'): ProductFaqItem[] {
  const content = getBagCharmPdpContent(id, locale)
  if (!content?.faq.length) return []
  return content.faq.map((item) => ({
    question: item.question,
    answer: faqAnswerParagraphs(item.answer).join(' '),
  }))
}
