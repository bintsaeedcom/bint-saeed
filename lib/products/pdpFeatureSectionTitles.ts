import type { AppLocale } from '@/lib/i18n/routing'

export const PDP_SILHOUETTE_TITLE: Record<AppLocale, string> = {
  en: 'Silhouette',
  ar: 'القصة',
  fr: 'Silhouette',
  it: 'Silhouette',
  es: 'Silueta',
  ru: 'Силуэт',
  zh: '廓形',
  de: 'Silhouette',
  nl: 'Silhouet',
  pt: 'Silhueta',
  id: 'Siluet',
  ms: 'Siluet',
}

export const PDP_COLOUR_TITLE: Record<AppLocale, string> = {
  en: 'Colour',
  ar: 'اللون',
  fr: 'Couleur',
  it: 'Colore',
  es: 'Color',
  ru: 'Цвет',
  zh: '颜色',
  de: 'Farbe',
  nl: 'Kleur',
  pt: 'Cor',
  id: 'Warna',
  ms: 'Warna',
}

/** Shared first silhouette bullet for A-line abayas (Covent Garden, Marylebone, Park Lane). */
export const A_LINE_ABAYA_SILHOUETTE_LINE = 'Elegant A-line abaya' as const
