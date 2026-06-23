import type { Metadata } from 'next'
import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'
import { getHeritageMetaSnippet } from '@/lib/products/heritageSeo'
import { getKaftanPageSeo } from '@/lib/products/kaftanSchemaI18n'
import { BRAND_NAME, LOCALE_GEO } from '@/lib/i18n/brandProperNouns'

const SITE = new URL('https://www.bintsaeed.com')
const G = LOCALE_GEO

export function buildProductPageTitle(
  locale: AppLocale,
  body: { name: string; slug?: string },
): string {
  const slug = body.slug?.toLowerCase()
  if (slug) {
    const kaftan = getKaftanPageSeo(slug, locale)
    if (kaftan) return kaftan.title
  }
  return `${body.name} | Bint Saeed`
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
}

export function buildProductMetaDescription(
  locale: AppLocale,
  body: { name: string; description: string; fabric: string; slug?: string },
): string {
  const slug = body.slug?.toLowerCase()
  if (slug) {
    const kaftan = getKaftanPageSeo(slug, locale)
    if (kaftan) return clipMetaDescription(kaftan.description, 200)
  }

  const heritage = body.slug ? getHeritageMetaSnippet(locale, body.slug) : ''
  const merged = [PRODUCT_INTRO[locale], body.name, body.description, heritage, body.fabric]
    .filter(Boolean)
    .join(' ')
  return clipMetaDescription(merged.replace(/\s+/g, ' ').trim(), 200)
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
  for (const L of ['ar', 'fr', 'it', 'es', 'ru', 'zh', 'de', 'nl', 'pt', 'id'] as const) {
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
}

export function productNotFoundMetadata(locale: AppLocale): Metadata {
  const m = NOT_FOUND[locale]
  return {
    title: m.title,
    description: m.description,
    robots: { index: false, follow: false },
  }
}
