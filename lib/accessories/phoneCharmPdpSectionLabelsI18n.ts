import type { AppLocale } from '@/lib/i18n/routing'

export type PhoneCharmSectionLabels = {
  featuresTitle: string
}

const BY_LOCALE: Record<AppLocale, PhoneCharmSectionLabels> = {
  en: { featuresTitle: 'Features' },
  ar: { featuresTitle: 'المواصفات' },
  fr: { featuresTitle: 'Caractéristiques' },
  it: { featuresTitle: 'Caratteristiche' },
  es: { featuresTitle: 'Características' },
  ru: { featuresTitle: 'Особенности' },
  zh: { featuresTitle: '产品特点' },
  de: { featuresTitle: 'Merkmale' },
  nl: { featuresTitle: 'Kenmerken' },
  pt: { featuresTitle: 'Características' },
  id: { featuresTitle: 'Fitur' },
  ms: { featuresTitle: 'Ciri-ciri' },
}

export function getPhoneCharmSectionLabels(locale: AppLocale = 'en'): PhoneCharmSectionLabels {
  return BY_LOCALE[locale] ?? BY_LOCALE.en
}
