import type { AppLocale } from '@/lib/i18n/routing'

export type RegionalCopy = {
  eyebrow: string
  title: string
  body: string
  detectedLine: (city: string, country: string) => string
  settingsLine: (language: string, currency: string) => string
  currentLanguageLine: (language: string) => string
  continueEnglish: string
  continueLocal: (language: string) => string
  secondary: string
  changeTitle: string
  languageLabel: string
  currencyLabel: string
  apply: string
  close: string
}

/** Popup copy is always English — luxury sites keep this prompt international. */
const en: RegionalCopy = {
  eyebrow: 'Bint Saeed',
  title: 'Your regional experience',
  body:
    'We have detected your location. You may continue in English or switch to the language and currency suggested for your region.',
  detectedLine: (city, country) =>
    city ? `Browsing from ${city}, ${country}` : `Browsing from ${country}`,
  settingsLine: (language, currency) => `Suggested for your region: ${language} · ${currency}`,
  currentLanguageLine: (language) => `Current language: ${language}`,
  continueEnglish: 'Continue in English',
  continueLocal: (language) => `Continue in ${language}`,
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
