import type { AppLocale } from '@/lib/i18n/routing'
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

export type BagCharmPdpContentPack = {
  headline: string
  introParagraphs: string[]
}

export function getBagCharmPdpContent(
  id: string,
  locale: AppLocale = 'en',
): BagCharmPdpContentPack | undefined {
  const canonicalId = resolveAccessoryId(id)
  if (!isAlAinOasisBagCharmId(canonicalId)) return undefined
  return getBagCharmPdpPack(canonicalId, locale)
}
