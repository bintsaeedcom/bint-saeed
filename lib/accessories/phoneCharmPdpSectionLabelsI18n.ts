import type { AppLocale } from '@/lib/i18n/routing'

export type PhoneCharmSectionLabels = {
  design: string
  naturalStones: string
  houseSignatures: string
  care: string
  compatibility: string
  colour: string
}

const EN: PhoneCharmSectionLabels = {
  design: 'Design',
  naturalStones: 'Natural Stones',
  houseSignatures: 'House Signatures',
  care: 'Care',
  compatibility: 'Compatibility',
  colour: 'Colour',
}

const FR: PhoneCharmSectionLabels = {
  design: 'Design',
  naturalStones: 'Pierres naturelles',
  houseSignatures: 'Signatures de la Maison',
  care: 'Entretien',
  compatibility: 'Compatibilité',
  colour: 'Couleur',
}

const BY_LOCALE: Partial<Record<AppLocale, PhoneCharmSectionLabels>> = {
  en: EN,
  fr: FR,
}

export function getPhoneCharmSectionLabels(locale: AppLocale = 'en'): PhoneCharmSectionLabels {
  return BY_LOCALE[locale] ?? EN
}
