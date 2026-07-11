import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import { buildPhoneCharmPdpPack } from '@/lib/accessories/phoneCharmPdpContentI18n'

export const AL_QUAA_PHONE_CHARM_IDS = [
  'al-quaa-phone-charm-fuchsia-jade',
  'al-quaa-phone-charm-orange-jade',
  'al-quaa-phone-charm-onyx',
  'al-quaa-phone-charm-tiger-eye',
  'al-quaa-phone-charm-malachite',
  'al-quaa-phone-charm-lapis-lazuli',
  'al-quaa-phone-charm-rose-quartz',
] as const

export type AlQuaaPhoneCharmId = (typeof AL_QUAA_PHONE_CHARM_IDS)[number]

const PHONE_CHARM_ID_SET = new Set<string>(AL_QUAA_PHONE_CHARM_IDS)

export function isAlQuaaPhoneCharmId(id: string): id is AlQuaaPhoneCharmId {
  return PHONE_CHARM_ID_SET.has(id)
}

export type PhoneCharmFaqItem = {
  question: string
  answer: string | string[]
}

/** Aligned with necklace PDP: intro + flat Features, Care separate. */
export type PhoneCharmPdpContentPack = {
  headline: string
  introParagraphs: string[]
  featuresTitle: string
  features: string[]
  careLead: string
  care: string[]
  colour: string
  faq: PhoneCharmFaqItem[]
}

export function faqAnswerParagraphs(answer: string | string[]): string[] {
  return Array.isArray(answer) ? answer : [answer]
}

export function getPhoneCharmPdpContent(
  id: string,
  locale: AppLocale = 'en',
): PhoneCharmPdpContentPack | undefined {
  const canonicalId = resolveAccessoryId(id)
  if (!isAlQuaaPhoneCharmId(canonicalId)) return undefined
  return buildPhoneCharmPdpPack(canonicalId, locale)
}

export function getPhoneCharmFaqForSchema(id: string, locale: AppLocale = 'en'): ProductFaqItem[] {
  const content = getPhoneCharmPdpContent(id, locale)
  if (!content?.faq.length) return []
  return content.faq.map((item) => ({
    question: item.question,
    answer: faqAnswerParagraphs(item.answer).join(' '),
  }))
}
