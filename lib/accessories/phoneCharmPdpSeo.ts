import type { AppLocale } from '@/lib/i18n/routing'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import type { AlQuaaPhoneCharmId } from '@/lib/accessories/phoneCharmPdpContent'
import { isAlQuaaPhoneCharmId } from '@/lib/accessories/phoneCharmPdpContent'
import {
  getPhoneCharmLocalizedAlts,
  type PhoneCharmLocalizedAlts,
} from '@/lib/accessories/phoneCharmImageAltI18n'

export type PhoneCharmSeoPack = PhoneCharmLocalizedAlts

/** Locale-aware PDP / carousel image alts for Al Quaa phone charms. */
export function getPhoneCharmPdpPack(
  id: string,
  locale: AppLocale = 'en',
): PhoneCharmSeoPack | undefined {
  return getPhoneCharmLocalizedAlts(id, locale)
}

export function getPhoneCharmCarouselAlt(id: string, locale: AppLocale = 'en'): string | undefined {
  return getPhoneCharmLocalizedAlts(id, locale)?.carouselAlt
}

export function getPhoneCharmPdpAlt(
  id: string,
  imageIndex: number,
  locale: AppLocale = 'en',
): string | undefined {
  const pack = getPhoneCharmLocalizedAlts(id, locale)
  if (!pack) return undefined
  if (imageIndex > 0 && pack.lifestyleAlt) return pack.lifestyleAlt
  return pack.pdpAlt
}

/** True when the accessory id resolves to an Al Quaa phone charm with curated alts. */
export function hasPhoneCharmImageAlts(id: string): boolean {
  const canonicalId = resolveAccessoryId(id)
  return isAlQuaaPhoneCharmId(canonicalId)
}

export type { AlQuaaPhoneCharmId }
