import type { AppLocale } from '@/lib/i18n/routing'
import { getProductHref } from '@/lib/products/links'
import { altLoc } from '@/lib/products/imageAltOverridesI18n'

export const KNIGHTSBRIDGE_ABAYA_SLUG = 'knightsbridge-abaya-jacket'
export const KNIGHTSBRIDGE_DRESS_SLUG = 'knightsbridge-dress'

export type KnightsbridgeCatalogColor = 'Dark Brown' | 'Navy Grey'

const DARK_BROWN_LABEL = altLoc(
  'Dark Brown',
  'بني داكن',
  'brun foncé',
  'marrone scuro',
  'marrón oscuro',
  'тёмно-коричневый',
  '深棕色',
  'Dunkelbraun',
  'donkerbruin',
  'castanho escuro',
  'Coklat Tua',
  'Coklat Gelap',
)

const NAVY_GRAY_LABEL = altLoc(
  'Navy Gray',
  'رمادي كحلي',
  'gris marine',
  'grigio navy',
  'gris marino',
  'тёмно-серый',
  '海军灰',
  'Marinegrau',
  'marinegrijs',
  'cinza-marinho',
  'Abu-abu Navy',
  'Kelabu Navy',
)

const ABAYA_PAIRING_NOTE = (
  color: string,
): Record<AppLocale, string> => ({
  en: `Pairs beautifully with the Knightsbridge Dress in ${color} — layer the jacket abaya over the dress for a coordinated silhouette, or wear each piece on its own.`,
  ar: `يتناسق بشكل جميل مع فستان Knightsbridge باللون ${color} — ارتدي عباية الجاكيت فوق الفستان لإطلالة منسقة، أو ارتدي كل قطعة على حدة.`,
  fr: `S\'associe magnifiquement à la robe Knightsbridge en ${color} — portez la veste abaya par-dessus la robe pour une silhouette coordonnée, ou chaque pièce seule.`,
  it: `Si abbina magnificamente al vestito Knightsbridge in ${color} — indossa la giacca abaya sopra il vestito per una silhouette coordinata, o ogni capo da solo.`,
  es: `Combina maravillosamente con el vestido Knightsbridge en ${color} — lleva la chaqueta abaya sobre el vestido para una silueta coordinada, o cada pieza por separado.`,
  ru: `Прекрасно сочетается с платьем Knightsbridge цвета ${color} — наденьте жакет-абайю поверх платья для согласованного силуэта или носите каждую вещь отдельно.`,
  zh: `与 ${color} 色 Knightsbridge 连衣裙完美搭配 — 可将夹克式阿巴亚叠穿于连衣裙之上，亦可单独穿着。`,
  de: `Harmoniert wunderbar mit dem Knightsbridge-Kleid in ${color} — tragen Sie die Jacket-Abaya über das Kleid für eine abgestimmte Silhouette oder jedes Stück einzeln.`,
  nl: `Past prachtig bij de Knightsbridge-jurk in ${color} — draag de jacket abaya over de jurk voor een gecoördineerde silhouet, of elk stuk apart.`,
  pt: `Combina lindamente com o vestido Knightsbridge em ${color} — use a casaco abaya sobre o vestido para uma silhueta coordenada, ou cada peça separadamente.`,
  id: `Cocok dipadukan dengan Gaun Knightsbridge dalam ${color} — lapiskan abaya jaket di atas gaun untuk siluet yang selaras, atau kenakan masing-masing sendiri.`,
  ms: `Serasi dengan Gaun Knightsbridge dalam ${color} — lapiskan abaya jaket di atas gaun untuk siluet yang selaras, atau pakai setiap kepingan bersendirian.`,
})

const DRESS_PAIRING_NOTE = (
  color: string,
): Record<AppLocale, string> => ({
  en: `Pairs beautifully with the Knightsbridge Abaya Jacket in ${color} — wear together for a complete Knightsbridge silhouette, or style the dress on its own.`,
  ar: `يتناسق بشكل جميل مع عباية جاكيت Knightsbridge باللون ${color} — ارتدي القطعتين معاً لإطلالة Knightsbridge كاملة، أو ارتدي الفستان وحده.`,
  fr: `S\'associe magnifiquement à la veste abaya Knightsbridge en ${color} — portez les deux pour une silhouette Knightsbridge complète, ou la robe seule.`,
  it: `Si abbina magnificamente alla giacca abaya Knightsbridge in ${color} — indossali insieme per una silhouette Knightsbridge completa, o il vestito da solo.`,
  es: `Combina maravillosamente con la chaqueta abaya Knightsbridge en ${color} — llévalas juntas para una silueta Knightsbridge completa, o el vestido solo.`,
  ru: `Прекрасно сочетается с жакетом-абайей Knightsbridge цвета ${color} — носите вместе для полного силуэта Knightsbridge или платье отдельно.`,
  zh: `与 ${color} 色 Knightsbridge 夹克式阿巴亚完美搭配 — 可成套穿着打造完整 Knightsbridge 轮廓，亦可单独穿着连衣裙。`,
  de: `Harmoniert wunderbar mit der Knightsbridge Jacket-Abaya in ${color} — tragen Sie beides zusammen für eine vollständige Knightsbridge-Silhouette oder das Kleid einzeln.`,
  nl: `Past prachtig bij de Knightsbridge jacket abaya in ${color} — draag samen voor een complete Knightsbridge-silhouet, of de jurk apart.`,
  pt: `Combina lindamente com a casaco abaya Knightsbridge em ${color} — use juntas para uma silhueta Knightsbridge completa, ou o vestido sozinho.`,
  id: `Cocok dipadukan dengan Abaya Jaket Knightsbridge dalam ${color} — kenakan bersama untuk siluet Knightsbridge lengkap, atau kenakan gaunnya sendiri.`,
  ms: `Serasi dengan Abaya Jaket Knightsbridge dalam ${color} — pakai bersama untuk siluet Knightsbridge lengkap, atau gayakan gaunnya sendiri.`,
})

export function isKnightsbridgePairingSlug(slug: string): boolean {
  const s = slug.toLowerCase()
  return s === KNIGHTSBRIDGE_ABAYA_SLUG || s === KNIGHTSBRIDGE_DRESS_SLUG
}

export function getKnightsbridgePairedSlug(slug: string): string | null {
  const s = slug.toLowerCase()
  if (s === KNIGHTSBRIDGE_ABAYA_SLUG) return KNIGHTSBRIDGE_DRESS_SLUG
  if (s === KNIGHTSBRIDGE_DRESS_SLUG) return KNIGHTSBRIDGE_ABAYA_SLUG
  return null
}

/** Swatch / URL colour name (catalog). */
export function normalizeKnightsbridgeCatalogColor(color?: string): KnightsbridgeCatalogColor {
  const c = (color ?? '').toLowerCase()
  if (c.includes('navy')) return 'Navy Grey'
  return 'Dark Brown'
}

/** PDP prose colour label — Navy Grey swatch reads as Navy Gray in EN copy. */
export function knightsbridgePdpColorLabel(
  catalogColor: KnightsbridgeCatalogColor,
  locale: AppLocale = 'en',
): string {
  return catalogColor === 'Navy Grey' ? NAVY_GRAY_LABEL[locale] : DARK_BROWN_LABEL[locale]
}

export function getKnightsbridgeStylePairingNote(
  slug: string,
  color: string | undefined,
  locale: AppLocale = 'en',
): string | undefined {
  if (!isKnightsbridgePairingSlug(slug)) return undefined
  const catalogColor = normalizeKnightsbridgeCatalogColor(color)
  const label = knightsbridgePdpColorLabel(catalogColor, locale)
  if (slug.toLowerCase() === KNIGHTSBRIDGE_ABAYA_SLUG) {
    return ABAYA_PAIRING_NOTE(label)[locale]
  }
  return DRESS_PAIRING_NOTE(label)[locale]
}

export function getProductHrefWithColor(
  product: { id: string; name: string; slug?: string },
  color: string,
): string {
  const href = getProductHref(product)
  if (!color.trim()) return href
  return `${href}?color=${encodeURIComponent(color)}`
}
