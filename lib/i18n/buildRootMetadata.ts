import type { Metadata } from 'next'
import type { AppLocale } from './routing'
import { localizedPath } from './routing'
import { mergedMetaKeywordsForLocale } from '@/lib/seo/keywordMerge'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'
import { getResolvedRoutePageMeta } from '@/lib/seo/routePageMeta'

const BASE = new URL('https://bintsaeed.com')

const OG_HERO_IMAGE_ALT: Record<AppLocale, string> = {
  en: 'Bint Saeed — luxury abaya house, Abu Dhabi',
  ar: 'بِنت سعيد — دار عبايات فاخرة، أبوظبي',
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

/** Same programmed SEO pack as `/` (coming-soon shell): editorial landing lives at `/home`. */
function usesHomeMetadata(pathname: string): boolean {
  const path = pathname.split('?')[0] || '/'
  return path === '/' || path === '' || path === '/home'
}

export function buildRootMetadata(locale: AppLocale, pathname: string): Metadata {
  const meta = getResolvedRoutePageMeta(locale, pathname)
  const desc = meta.description
  const isHomeShell = usesHomeMetadata(pathname)

  const title: Metadata['title'] = isHomeShell
    ? { default: meta.title, template: '%s | Bint Saeed' }
    : { absolute: meta.title }

  const ogTitle = meta.ogTitle
  const twTitle = ogTitle
  const twDesc = clipMetaDescription(desc, 200)

  const canonicalUrl = new URL(localizedPath(locale, pathname), BASE).toString()

  const languages: Record<string, string> = {
    'x-default': new URL(pathname === '/' ? '/' : pathname, BASE).toString(),
    en: new URL(pathname === '/' ? '/' : pathname, BASE).toString(),
  }
  for (const L of ['ar', 'fr', 'it', 'es', 'ru', 'zh', 'de', 'nl', 'pt'] as const) {
    languages[L] = new URL(localizedPath(L, pathname), BASE).toString()
  }

  return {
    metadataBase: BASE,
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
      description: clipMetaDescription(desc, 200),
      url: canonicalUrl,
      siteName: 'Bint Saeed',
      locale: OG_LOCALE[locale],
      type: 'website',
      images: [
        {
          url: 'https://bintsaeed.com/hero-bintsaeed.jpg',
          secureUrl: 'https://bintsaeed.com/hero-bintsaeed.jpg',
          width: 1920,
          height: 1080,
          type: 'image/jpeg',
          alt: OG_HERO_IMAGE_ALT[locale],
        },
        {
          url: 'https://bintsaeed.com/og-image.png',
          secureUrl: 'https://bintsaeed.com/og-image.png',
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: 'Bint Saeed',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: twTitle,
      description: twDesc,
      images: ['https://bintsaeed.com/hero-bintsaeed.jpg', 'https://bintsaeed.com/og-image.png'],
      creator: '@bintsaeed_brand',
      site: '@bintsaeed_brand',
    },
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
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'format-detection': 'telephone=no',
      'msapplication-TileColor': '#3B0A12',
      ...aiOther(locale),
    },
  }
}
