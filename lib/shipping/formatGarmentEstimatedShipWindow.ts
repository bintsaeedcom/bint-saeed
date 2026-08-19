import type { AppLocale } from '@/lib/i18n/routing'

const GARMENT_LEAD_DAYS_MIN = 10
const GARMENT_LEAD_DAYS_MAX = 14

const DATE_LOCALE: Record<AppLocale, string> = {
  en: 'en-GB',
  ar: 'ar-AE',
  fr: 'fr-FR',
  de: 'de-DE',
  it: 'it-IT',
  es: 'es-ES',
  ru: 'ru-RU',
  zh: 'zh-CN',
  nl: 'nl-NL',
  pt: 'pt-PT',
  id: 'id-ID',
  ms: 'ms-MY',
}

function addDays(base: Date, days: number): Date {
  const next = new Date(base)
  next.setDate(next.getDate() + days)
  return next
}

/** Garment PDP — estimated shipment window from the moment the page is viewed. */
export function formatGarmentEstimatedShipWindow(
  locale: AppLocale,
  viewedAt: Date = new Date(),
): string {
  const intlLocale = DATE_LOCALE[locale] ?? 'en-GB'
  const from = addDays(viewedAt, GARMENT_LEAD_DAYS_MIN)
  const to = addDays(viewedAt, GARMENT_LEAD_DAYS_MAX)

  const dayFormatter = new Intl.DateTimeFormat(intlLocale, { day: 'numeric' })
  const monthFormatter = new Intl.DateTimeFormat(intlLocale, { month: 'short' })
  const monthYearFormatter = new Intl.DateTimeFormat(intlLocale, {
    month: 'short',
    year: 'numeric',
  })
  const fullFormatter = new Intl.DateTimeFormat(intlLocale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  const sameYear = from.getFullYear() === to.getFullYear()
  const sameMonth = sameYear && from.getMonth() === to.getMonth()

  if (sameMonth) {
    return `${dayFormatter.format(from)} – ${dayFormatter.format(to)} ${monthYearFormatter.format(to)}`
  }

  if (sameYear) {
    return `${dayFormatter.format(from)} ${monthFormatter.format(from)} – ${fullFormatter.format(to)}`
  }

  return `${fullFormatter.format(from)} – ${fullFormatter.format(to)}`
}
