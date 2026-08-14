import type { Metadata } from 'next'
import type { Product } from '@/data/products'
import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'
import { getHeritageMetaSnippet } from '@/lib/products/heritageSeo'
import { getKaftanPageSeo } from '@/lib/products/kaftanSchemaI18n'
import { getCoventGardenAbayaPageSeo, getCoventGardenAbayaMetaKeywords } from '@/lib/products/coventGardenAbayaPageSeoI18n'
import { getSohoSetPageSeo, getSohoSetMetaKeywords } from '@/lib/products/sohoSetPageSeoI18n'
import { getShopCatalogPageSeo } from '@/lib/seo/shopCatalogPageSeoI18n'
import { buildProductSchemaKeywords } from '@/lib/products/productSchemaMeta'
import { getProductSlug } from '@/lib/products/links'
import { BRAND_NAME, LOCALE_GEO } from '@/lib/i18n/brandProperNouns'
import { brandDocumentTitle } from '@/lib/seo/brandDocumentTitle'

const SITE = new URL('https://www.bintsaeed.com')
const G = LOCALE_GEO

function resolveDedicatedPageSeo(
  slug: string,
  locale: AppLocale,
): { title: string; description: string } | null {
  return (
    getCoventGardenAbayaPageSeo(slug, locale) ??
    getSohoSetPageSeo(slug, locale) ??
    getKaftanPageSeo(slug, locale) ??
    getShopCatalogPageSeo(slug, locale)
  )
}

export function buildProductPageTitle(
  locale: AppLocale,
  body: { name: string; slug?: string },
): string {
  // Covent Garden has a dedicated native SEO pack targeting Al Talli / UAE heritage intent.
  // Use it in the document, Open Graph, and Twitter title rather than leaving it dormant.
  if (body.slug) {
    const coventGarden = getCoventGardenAbayaPageSeo(body.slug, locale)
    if (coventGarden) return coventGarden.title
  }

  return brandDocumentTitle(body.name)
}

/** Intro line per locale — brand, city, country, Emirati brand signal. */
const PRODUCT_INTRO: Record<AppLocale, string> = {
  en: `${BRAND_NAME} — Emirati luxury fashion brand from ${G.en.madeIn}.`,
  ar: `${BRAND_NAME} — علامة أزياء فاخرة إماراتية من ${G.ar.madeIn}.`,
  fr: `${BRAND_NAME} — marque de mode de luxe émiratie depuis ${G.fr.madeIn}.`,
  it: `${BRAND_NAME} — brand di moda di lusso emiratino da ${G.it.madeIn}.`,
  es: `${BRAND_NAME} — marca de moda de lujo emiratí desde ${G.es.madeIn}.`,
  ru: `${BRAND_NAME} — эмиратский люксовый бренд из ${G.ru.madeIn}.`,
  zh: `${BRAND_NAME} — 阿联酋${G.zh.city}奢华时尚品牌。`,
  de: `${BRAND_NAME} — emiratische Luxusmodemarke aus ${G.de.madeIn}.`,
  nl: `${BRAND_NAME} — Emiratisch luxemerken uit ${G.nl.madeIn}.`,
  pt: `${BRAND_NAME} — marca de moda de luxo emirati de ${G.pt.madeIn}.`,
  id: `${BRAND_NAME} — merek fashion mewah Emirati dari ${G.id.madeIn}.`,
  ms: `${BRAND_NAME} — merek fesyen mewah Emirati dari ${G.id.madeIn}.`,
}

export function buildProductMetaDescription(
  locale: AppLocale,
  body: { name: string; description: string; fabric: string; slug?: string },
): string {
  const slug = body.slug?.toLowerCase()
  if (slug) {
    const dedicated = resolveDedicatedPageSeo(slug, locale)
    if (dedicated) return clipMetaDescription(dedicated.description, 200)
  }

  const heritage = body.slug ? getHeritageMetaSnippet(locale, body.slug) : ''
  const merged = [PRODUCT_INTRO[locale], body.name, body.description, heritage, body.fabric]
    .filter(Boolean)
    .join(' ')
  return clipMetaDescription(merged.replace(/\s+/g, ' ').trim(), 200)
}

export function getProductPageMetaKeywords(
  locale: AppLocale,
  product: Product,
  colorName?: string,
): string | undefined {
  const slug = getProductSlug(product).toLowerCase()
  const coventGarden = getCoventGardenAbayaPageSeo(slug, locale)
  if (coventGarden) return getCoventGardenAbayaMetaKeywords(locale, colorName)
  const soho = getSohoSetPageSeo(slug, locale)
  if (soho) return getSohoSetMetaKeywords(locale, colorName)
  return buildProductSchemaKeywords(product, colorName, locale)
}

const AI_CATEGORY: Record<string, string> = {
  Abayas: 'Luxury designer abayas; Emirati modest fashion',
  Dresses: 'Luxury designer dresses; Emirati contemporary fashion',
  Sets: 'Luxury coordinate sets; Emirati travelwear',
  Kaftans: 'Luxury occasion kaftans; Emirati fashion',
}

/** AI-oriented meta `other` tags — mirrors accessory PDP discovery signals. */
export function getProductPageAiOther(
  product: Product,
  locale: AppLocale = 'en',
): Record<string, string> {
  const slug = getProductSlug(product)
  return {
    'ai:brand': BRAND_NAME,
    'ai:category': AI_CATEGORY[product.category] ?? 'Luxury Emirati fashion',
    'ai:product': product.name,
    'ai:location': LOCALE_GEO[locale].madeIn,
    'ai:intent':
      'Organic discovery for luxury modest fashion, Emirati designer wardrobes, GCC and international shoppers',
    'ai:slug': slug,
  }
}

export function productCanonicalUrl(locale: AppLocale, slug: string): string {
  const path = localizedPath(locale, `/shop/${slug}`)
  return new URL(path, SITE).toString()
}

export function productHreflangLanguages(slug: string): Record<string, string> {
  const pathname = `/shop/${slug}`
  const languages: Record<string, string> = {
    'x-default': new URL(pathname, SITE).toString(),
    en: new URL(pathname, SITE).toString(),
  }
  for (const L of ['ar', 'fr', 'it', 'es', 'ru', 'zh', 'de', 'nl', 'pt', 'id', 'ms'] as const) {
    languages[L] = new URL(localizedPath(L, pathname), SITE).toString()
  }
  return languages
}

const NOT_FOUND: Record<AppLocale, { title: string; description: string }> = {
  en: {
    title: 'Product not found | Bint Saeed',
    description: 'This style is not available in the current Bint Saeed collection.',
  },
  ar: {
    title: 'المنتج غير متوفر | Bint Saeed',
    description: 'هذا الطراز غير متاح حالياً في مجموعة بِنت سعيد.',
  },
  fr: {
    title: 'Produit introuvable | Bint Saeed',
    description: 'Ce modèle n’est pas disponible dans la collection actuelle Bint Saeed.',
  },
  it: {
    title: 'Prodotto non trovato | Bint Saeed',
    description: 'Questo capo non è disponibile nella collezione Bint Saeed attuale.',
  },
  es: {
    title: 'Producto no encontrado | Bint Saeed',
    description: 'Este modelo no está disponible en la colección actual de Bint Saeed.',
  },
  ru: {
    title: 'Товар не найден | Bint Saeed',
    description: 'Эта модель недоступна в текущей коллекции Bint Saeed.',
  },
  zh: {
    title: '未找到商品 | Bint Saeed',
    description: '该款式暂不在当前 Bint Saeed 系列中。',
  },
  de: {
    title: 'Produkt nicht gefunden | Bint Saeed',
    description: 'Dieses Modell ist in der aktuellen Bint Saeed‑Kollektion nicht verfügbar.',
  },
  nl: {
    title: 'Product niet gevonden | Bint Saeed',
    description: 'Dit model is niet beschikbaar in de huidige Bint Saeed‑collectie.',
  },
  pt: {
    title: 'Produto não encontrado | Bint Saeed',
    description: 'Este modelo não está disponível na coleção atual da Bint Saeed.',
  },
  id: {
    title: 'Produk tidak ditemukan | Bint Saeed',
    description: 'Model ini tidak tersedia dalam koleksi Bint Saeed saat ini.',
  },
  ms: {
    title: 'Produk tidak dijumpai | Bint Saeed',
    description: 'Model ini tidak tersedia dalam koleksi Bint Saeed pada masa ini.',
  },
}

export function productNotFoundMetadata(locale: AppLocale): Metadata {
  const m = NOT_FOUND[locale]
  return {
    title: { absolute: brandDocumentTitle(m.title) },
    description: m.description,
    robots: { index: false, follow: false },
  }
}
