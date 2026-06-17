import type { Metadata } from 'next'
import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'
import { getHeritageMetaSnippet } from '@/lib/products/heritageSeo'

const SITE = new URL('https://www.bintsaeed.com')

/** Intro line per locale — brand, Abu Dhabi, UAE, Emirati brand signal. */
const PRODUCT_INTRO: Record<AppLocale, string> = {
  en: 'Bint Saeed — Emirati luxury fashion brand from Abu Dhabi, UAE.',
  ar: 'بِنت سعيد — علامة أزياء فاخرة إماراتية من أبوظبي، الإمارات العربية المتحدة.',
  fr: 'Bint Saeed — marque de mode de luxe émiratie depuis Abu Dhabi (EAU).',
  it: 'Bint Saeed — brand di moda di lusso emiratino da Abu Dhabi (EAU).',
  es: 'Bint Saeed — marca de moda de lujo emiratí desde Abu Dhabi (EAU).',
  ru: 'Bint Saeed — эмиратский люксовый бренд из Абу‑Даби (ОАЭ).',
  zh: 'Bint Saeed — 阿联酋阿布扎比奢华时尚品牌。',
  de: 'Bint Saeed — emiratische Luxusmodemarke aus Abu Dhabi (VAE).',
  nl: 'Bint Saeed — Emiratisch luxemerken uit Abu Dhabi (VAE).',
  pt: 'Bint Saeed — marca de moda de luxo emirati de Abu Dhabi (EAU).',
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
