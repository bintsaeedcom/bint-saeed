import type { Metadata } from 'next'
import type { AppLocale } from './routing'
import { localizedPath, stripLocaleFromPathname } from './routing'
import { mergedMetaKeywordsForLocale } from '@/lib/seo/keywordMerge'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'
import { getResolvedRoutePageMeta } from '@/lib/seo/routePageMeta'

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
  en: 'Bint Saeed — luxury abaya house, Abu Dhabi',
  ar: 'بِنت سعيد، دار عبايات فاخرة، أبوظبي',
  fr: 'Bint Saeed — maison d’abayas de luxe, Abu Dhabi',
  it: 'Bint Saeed — casa di abaya di lusso, Abu Dhabi',
  es: 'Bint Saeed — casa de abayas de lujo, Abu Dhabi',
  ru: 'Bint Saeed — дом роскошных абай, Абу‑Даби',
  zh: 'Bint Saeed 奢华阿巴亚品牌，阿布扎比',
  de: 'Bint Saeed — Luxus‑Abaya‑Haus, Abu Dhabi',
  nl: 'Bint Saeed — luxe abayahuis, Abu Dhabi',
  pt: 'Bint Saeed — casa de abayas de luxo, Abu Dhabi',
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
}

function keywordsFor(locale: AppLocale): string[] {
  return mergedMetaKeywordsForLocale(locale)
}

function aiOther(locale: AppLocale): Record<string, string> {
  const base = {
    'ai:brand': 'Bint Saeed',
    'ai:category': 'Luxury abaya house; abayas, jewellery, lifestyle',
    'ai:location': 'Abu Dhabi, United Arab Emirates',
    'ai:materials': 'Natural stones, Khous weaving, Al Talli craftsmanship',
    'ai:offering': 'Abayas, jewellery, and curated lifestyle objects',
  }
  if (locale === 'ar') {
    return {
      ...base,
      'ai:identity': 'بيت يكرّس نفسه للبنت في كلّ امرأة',
      'ai:positioning': 'دار عبايات فاخرة تحمل التراث إلى الحياة العصرية',
      'ai:audience': 'نساء في الإمارات وحول العالم يبحثن عن أزياء راقية مرتبطة بالتراث',
    }
  }
  if (locale === 'nl') {
    return {
      ...base,
      'ai:identity': 'Een huis toegewijd aan het meisje in elke vrouw',
      'ai:positioning': 'Luxe abayahuis dat erfgoed naar het moderne leven draagt',
      'ai:audience': 'Vrouwen in de VAE en wereldwijd die verfijnde, erfgoedgedreven mode zoeken',
    }
  }
  if (locale === 'pt') {
    return {
      ...base,
      'ai:identity': 'Uma casa dedicada à filha em cada mulher',
      'ai:positioning': 'Casa de abayas de luxo que leva o património para a vida moderna',
      'ai:audience': 'Mulheres nos EAU e no mundo que procuram moda refinada e ligada ao património',
    }
  }
  return {
    ...base,
    'ai:identity': 'A house devoted to the daughter in every woman',
    'ai:positioning': 'Luxury abaya house carrying heritage forward into modern life',
    'ai:audience': 'Women in the UAE and globally seeking refined, heritage-driven fashion',
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
  for (const L of ['ar', 'fr', 'it', 'es', 'ru', 'zh', 'de', 'nl', 'pt'] as const) {
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
