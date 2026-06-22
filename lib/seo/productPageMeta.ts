import type { Metadata } from 'next'
import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'
import { getHeritageMetaSnippet } from '@/lib/products/heritageSeo'
import { BRAND_NAME, CITY_NAME, MADE_IN_PHRASE } from '@/lib/i18n/brandProperNouns'

const SITE = new URL('https://www.bintsaeed.com')

/** Intro line per locale — brand, Abu Dhabi, UAE, Emirati brand signal. */
const PRODUCT_INTRO: Record<AppLocale, string> = {
  en: `${BRAND_NAME} — Emirati luxury fashion brand from ${MADE_IN_PHRASE}.`,
  ar: `${BRAND_NAME} — علامة أزياء فاخرة إماراتية من ${MADE_IN_PHRASE}.`,
  fr: `${BRAND_NAME} — marque de mode de luxe émiratie depuis ${CITY_NAME} (EAU).`,
  it: `${BRAND_NAME} — brand di moda di lusso emiratino da ${CITY_NAME} (EAU).`,
  es: `${BRAND_NAME} — marca de moda de lujo emiratí desde ${CITY_NAME} (EAU).`,
  ru: `${BRAND_NAME} — эмиратский люксовый бренд из ${CITY_NAME} (ОАЭ).`,
  zh: `${BRAND_NAME} — 阿联酋 ${CITY_NAME} 奢华时尚品牌。`,
  de: `${BRAND_NAME} — emiratische Luxusmodemarke aus ${CITY_NAME} (VAE).`,
  nl: `${BRAND_NAME} — Emiratisch luxemerken uit ${CITY_NAME} (VAE).`,
  pt: `${BRAND_NAME} — marca de moda de luxo emirati de ${CITY_NAME} (EAU).`,
}

export function buildProductMetaDescription(
  locale: AppLocale,
  body: { name: string; description: string; fabric: string; slug?: string },
): string {
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
  for (const L of ['ar', 'fr', 'it', 'es', 'ru', 'zh', 'de', 'nl', 'pt'] as const) {
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
}

export function productNotFoundMetadata(locale: AppLocale): Metadata {
  const m = NOT_FOUND[locale]
  return {
    title: m.title,
    description: m.description,
    robots: { index: false, follow: false },
  }
}
