import type { Metadata } from 'next'
import type { AppLocale } from './routing'
import { localizedPath, stripLocaleFromPathname } from './routing'
import { mergedMetaKeywordsForLocale } from '@/lib/seo/keywordMerge'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'
import { getResolvedRoutePageMeta } from '@/lib/seo/routePageMeta'
import { BRAND_NAME, LOCALE_GEO } from '@/lib/i18n/brandProperNouns'
import { BRAND_TAGLINE } from '@/lib/brand/brandPositioning'

const G = LOCALE_GEO

function metadataBaseUrl(): URL {
  return new URL((process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, ''))
}

/**
 * Inner path only (no `/ar`, `/fr`, … prefix). Matches middleware `x-bs-pathname` and prevents
 * `localizedPath(locale, '/ar')` → `/ar/ar` if a proxy ever forwards a prefixed path.
 */
export function innerPathForMetadata(pathname: string): string {
  const pathOnly = (pathname || '/').split('?')[0] || '/'
  const { pathname: inner } = stripLocaleFromPathname(pathOnly)
  return inner.replace(/\/+$/, '') || '/'
}

/** Absolute canonical URL for the current locale + pathname from headers (used by root metadata). */
export function absoluteCanonicalForLocaleRoute(locale: AppLocale, pathnameFromHeaders: string): string {
  const inner = innerPathForMetadata(pathnameFromHeaders)
  return new URL(localizedPath(locale, inner), metadataBaseUrl()).toString()
}

const OG_HERO_IMAGE_ALT: Record<AppLocale, string> = {
  en: `${BRAND_NAME} — contemporary house, ${G.en.city}`,
  ar: `${BRAND_NAME} — دار معاصرة، ${G.ar.city}`,
  fr: `${BRAND_NAME} — maison contemporaine, ${G.fr.city}`,
  it: `${BRAND_NAME} — casa contemporanea, ${G.it.city}`,
  es: `${BRAND_NAME} — casa contemporánea, ${G.es.city}`,
  ru: `${BRAND_NAME} — современный дом, ${G.ru.city}`,
  zh: `${BRAND_NAME} — 当代品牌屋，${G.zh.city}`,
  de: `${BRAND_NAME} — zeitgenössisches Haus, ${G.de.city}`,
  nl: `${BRAND_NAME} — eigentijds huis, ${G.nl.city}`,
  pt: `${BRAND_NAME} — casa contemporânea, ${G.pt.city}`,
  id: `${BRAND_NAME} — rumah kontemporer, ${G.id.city}`,
}

const OG_LOCALE: Record<AppLocale, string> = {
  en: 'en_AE',
  ar: 'ar_AE',
  fr: 'fr_FR',
  it: 'it_IT',
  es: 'es_ES',
  ru: 'ru_RU',
  zh: 'zh_CN',
  de: 'de_DE',
  nl: 'nl_NL',
  pt: 'pt_PT',
  id: 'en_AE',
}

function keywordsFor(locale: AppLocale): string[] {
  return mergedMetaKeywordsForLocale(locale)
}

function aiOther(locale: AppLocale): Record<string, string> {
  return {
    'ai:brand': BRAND_NAME,
    'ai:category': 'Contemporary fashion house; abayas, kaftans, dresses, jewellery, lifestyle',
    'ai:location': G[locale].madeIn,
    'ai:materials': 'Natural stones, Khous weaving, Al Talli craftsmanship',
    'ai:offering': 'Abayas, kaftans, dresses, jewellery, and curated lifestyle objects',
    'ai:identity': BRAND_TAGLINE[locale],
    'ai:positioning': 'Contemporary house carrying heritage forward into modern life',
    'ai:audience': 'Contemporary women seeking refined, heritage-informed luxury fashion',
  }
}

/** Inner path without locale prefix, normalized (matches middleware `x-bs-pathname`). */
function normalizedInnerPath(pathname: string): string {
  const pathOnly = pathname.split('?')[0] || '/'
  const { pathname: inner } = stripLocaleFromPathname(pathOnly)
  return inner.replace(/\/+$/, '') || '/'
}

/** Same programmed SEO pack as `/` (coming-soon shell): editorial landing lives at `/home`. */
function usesHomeMetadata(pathname: string): boolean {
  const path = normalizedInnerPath(pathname)
  return path === '/' || path === '' || path === '/home'
}

export function buildRootMetadata(locale: AppLocale, pathname: string): Metadata {
  const innerPath = innerPathForMetadata(pathname)
  const meta = getResolvedRoutePageMeta(locale, innerPath)
  const desc = meta.description
  const isHomeShell = usesHomeMetadata(innerPath)

  const title: Metadata['title'] = isHomeShell
    ? { default: meta.title, template: '%s | Bint Saeed' }
    : { absolute: meta.title }

  const ogTitle = meta.ogTitle
  const ogDescription =
    locale === 'en' && usesHomeMetadata(innerPath)
      ? 'Crafted to order abayas with natural stone strands. Made in Abu Dhabi, worn worldwide.'
      : clipMetaDescription(desc, 200)
  const twTitle = ogTitle
  const twDesc = clipMetaDescription(desc, 200)

  const base = metadataBaseUrl()
  const canonicalUrl = new URL(localizedPath(locale, innerPath), base).toString()

  const languages: Record<string, string> = {
    'x-default': new URL(innerPath === '/' ? '/' : innerPath, base).toString(),
    en: new URL(innerPath === '/' ? '/' : innerPath, base).toString(),
  }
  for (const L of ['ar', 'fr', 'it', 'es', 'ru', 'zh', 'de', 'nl', 'pt', 'id'] as const) {
    languages[L] = new URL(localizedPath(L, innerPath), base).toString()
  }

  const ogImageOrigin = base.origin

  /** Social preview (OG / WhatsApp / X). Web-sized JPEG so crawlers do not time out on large originals. */
  const ogShareImagePath = '/og-share.jpg'

  return {
    metadataBase: base,
    title,
    description: desc,
    authors: [{ name: 'Bint Saeed' }],
    keywords: keywordsFor(locale),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonicalUrl,
      siteName: 'Bint Saeed',
      locale: OG_LOCALE[locale],
      type: 'website',
      images: [
        {
          url: `${ogImageOrigin}${ogShareImagePath}`,
          secureUrl: `${ogImageOrigin}${ogShareImagePath}`,
          width: 1200,
          height: 675,
          type: 'image/jpeg',
          alt: OG_HERO_IMAGE_ALT[locale],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: twTitle,
      description: twDesc,
      images: [`${ogImageOrigin}${ogShareImagePath}`],
      creator: '@bintsaeed_brand',
      site: '@bintsaeed_brand',
    },
    /* `/` and `/coming-soon`: index,follow (nested segment layouts may add noindex for /shop etc. during prelaunch). */
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {},
    category: 'Fashion',
    icons: {
      icon: [{ url: '/flavicon.png', type: 'image/png' }],
      apple: [{ url: '/flavicon.png', type: 'image/png' }],
      shortcut: '/flavicon.png',
    },
    other: {
      'p:domain_verify': '7f00ff9ac3718eb1ce00735a6958cc0e',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'format-detection': 'telephone=no',
      'msapplication-TileColor': '#1a0210',
      ...aiOther(locale),
    },
  }
}
