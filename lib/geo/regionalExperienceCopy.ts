import type { AppLocale } from '@/lib/i18n/routing'

export type RegionalCopy = {
  eyebrow: string
  title: string
  bodyWithCity: (city: string, country: string, currency: string) => string
  bodyCountryOnly: (country: string, currency: string) => string
  continueEnglish: string
  secondary: string
  changeTitle: string
  languageLabel: string
  currencyLabel: string
  apply: string
  close: string
}

/** Primary CTA for switching to the visitor's regional language — always in that language. */
export const continueInLanguageCta: Record<string, string> = {
  ar: 'المتابعة بالعربية',
  zh: '继续使用中文',
  ru: 'Продолжить на русском',
  it: 'Continua in italiano',
  de: 'Weiter auf Deutsch',
  fr: 'Continuer en français',
  es: 'Continuar en español',
  nl: 'Doorgaan in het Nederlands',
  pt: 'Continuar em português',
  id: 'Lanjutkan dalam Bahasa Indonesia',
  ms: 'Teruskan dalam Bahasa Melayu',
}

const en: RegionalCopy = {
  eyebrow: 'Bint Saeed',
  title: 'Your regional experience',
  bodyWithCity: (city, country, currency) =>
    `Since you're browsing from ${city}, ${country}, our prices are shown in ${currency}. You can change your language or currency at any time.`,
  bodyCountryOnly: (country, currency) =>
    `For ${country}, our prices are shown in ${currency}. You can change your language or currency at any time.`,
  continueEnglish: 'Continue in English',
  secondary: 'Change language or currency',
  changeTitle: 'Preferences',
  languageLabel: 'Language',
  currencyLabel: 'Currency',
  apply: 'Apply selection',
  close: 'Close',
}

export function getRegionalExperienceCopy(_locale?: AppLocale): RegionalCopy {
  return en
}

export function getContinueInLanguageCta(languageCode: string): string | undefined {
  return continueInLanguageCta[languageCode]
}
