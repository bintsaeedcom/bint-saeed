import type { AppLocale } from '@/lib/i18n/routing'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import type { AlQuaaPhoneCharmId } from '@/lib/accessories/phoneCharmPdpContent'

export type PhoneCharmSeoPack = {
  carouselAlt: string
  pdpAlt: string
  lifestyleAlt?: string
}

const PHONE_CHARM_PDP_BY_ID: Record<AlQuaaPhoneCharmId, PhoneCharmSeoPack> = {
  'al-quaa-phone-charm-fuchsia-jade': {
    carouselAlt:
      'Al Quaa Fuchsia Jade phone charm — vibrant pink jade beads with hand-carved Carnelian Al Ain Rosette',
    pdpAlt:
      'Al Quaa Fuchsia Jade phone charm with vibrant pink jade beads, hand-carved Carnelian Al Ain Rosette and gold-plated hematite accents on display — natural stone phone charm by Bint Saeed Abu Dhabi',
  },
  'al-quaa-phone-charm-orange-jade': {
    carouselAlt:
      'Al Quaa Orange Jade phone charm — warm orange jade beads with Carnelian Al Ain Rosette',
    pdpAlt:
      'Al Quaa Orange Jade phone charm with luminous orange jade beads, hand-carved Carnelian Al Ain Rosette and gold-plated hematite on display — handcrafted stone phone charm Abu Dhabi',
  },
  'al-quaa-phone-charm-onyx': {
    carouselAlt:
      'Al Quaa Onyx phone charm — polished black onyx beads with Carnelian Al Ain Rosette',
    pdpAlt:
      'Al Quaa Onyx phone charm with polished black onyx beads, hand-carved Carnelian Al Ain Rosette and gold-plated hematite on display — natural stone phone charm by Bint Saeed UAE',
  },
  'al-quaa-phone-charm-tiger-eye': {
    carouselAlt:
      'Al Quaa Tiger Eye phone charm — chatoyant tiger eye beads with Carnelian Al Ain Rosette',
    pdpAlt:
      'Al Quaa Tiger Eye phone charm with warm chatoyant tiger eye beads, hand-carved Carnelian Al Ain Rosette and gold-plated hematite on display — handcrafted phone charm Abu Dhabi',
  },
  'al-quaa-phone-charm-malachite': {
    carouselAlt:
      'Al Quaa Malachite phone charm — deep green banded malachite beads with Carnelian Al Ain Rosette',
    pdpAlt:
      'Al Quaa Malachite phone charm with deep green banded malachite beads, hand-carved Carnelian Al Ain Rosette and gold-plated hematite on display — natural stone phone charm by Bint Saeed Abu Dhabi',
  },
  'al-quaa-phone-charm-lapis-lazuli': {
    carouselAlt:
      'Al Quaa Lapis Lazuli phone charm — royal blue lapis beads with Carnelian Al Ain Rosette',
    pdpAlt:
      'Al Quaa Lapis Lazuli phone charm with rich blue lapis lazuli beads and gold pyrite flecks, hand-carved Carnelian Al Ain Rosette on display — luxury stone phone charm UAE',
  },
  'al-quaa-phone-charm-rose-quartz': {
    carouselAlt:
      'Al Quaa Rose Quartz phone charm — soft blush rose quartz beads with Carnelian Al Ain Rosette',
    pdpAlt:
      'Al Quaa Rose Quartz phone charm with soft blush rose quartz beads, hand-carved Carnelian Al Ain Rosette and gold-plated hematite on display — romantic stone phone charm by Bint Saeed Abu Dhabi',
  },
}

export function getPhoneCharmPdpPack(id: string): PhoneCharmSeoPack | undefined {
  const canonicalId = resolveAccessoryId(id) as AlQuaaPhoneCharmId
  return PHONE_CHARM_PDP_BY_ID[canonicalId]
}

export function getPhoneCharmCarouselAlt(id: string, _locale: AppLocale = 'en'): string | undefined {
  return getPhoneCharmPdpPack(id)?.carouselAlt
}

export function getPhoneCharmPdpAlt(
  id: string,
  imageIndex: number,
  _locale: AppLocale = 'en',
): string | undefined {
  const pack = getPhoneCharmPdpPack(id)
  if (!pack) return undefined
  if (imageIndex > 0 && pack.lifestyleAlt) return pack.lifestyleAlt
  return pack.pdpAlt
}
