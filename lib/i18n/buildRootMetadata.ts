import type { Metadata } from 'next'
import { ENGLISH_ROOT_KEYWORDS } from './englishRootKeywords'
import { translations, seoKeywords, type Language } from './translations'
import type { AppLocale } from './routing'
import { localizedPath } from './routing'

const BASE = new URL('https://bintsaeed.com')

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

const HOME_OG_TITLE: Record<AppLocale, string> = {
  en: 'Bint Saeed | Luxury Abaya House',
  ar: 'بنت سعيد | دار عبايات فاخرة',
  fr: 'Bint Saeed | Maison d’abayas de luxe',
  it: 'Bint Saeed | Casa di abaya di lusso',
  es: 'Bint Saeed | Casa de abayas de lujo',
  ru: 'Bint Saeed | Дом роскошных абай',
  zh: 'Bint Saeed | 奢华阿巴亚之家',
  de: 'Bint Saeed | Luxus-Abaya-Haus',
  nl: 'Bint Saeed | Luxe abayahuis',
  pt: 'Bint Saeed | Casa de abayas de luxo',
}

const NL_HOME_DESC =
  'Bint Saeed is een luxe abayahuis in Abu Dhabi, toegewijd aan het meisje in elke vrouw—erfenis vooruit door verfijnd ontwerp, sieraden en lifestyle. Al Talli-embroidery en Khous-vlechtwerk.'
const PT_HOME_DESC =
  'A Bint Saeed é uma casa de abayas de luxo em Abu Dhabi, dedicada à filha em cada mulher—património em frente com design refinado, joias e lifestyle. Bordado Al Talli e trançado Khous.'

function getT(locale: AppLocale): typeof translations.en {
  if (locale === 'nl' || locale === 'pt') return translations.en
  return translations[locale as Exclude<Language, 'nl' | 'pt'>]
}

function homeDescription(locale: AppLocale): string {
  if (locale === 'nl') return NL_HOME_DESC
  if (locale === 'pt') return PT_HOME_DESC
  return getT(locale).hero.description
}

function clip(s: string, max = 168): string {
  if (s.length <= max) return s
  return `${s.slice(0, max - 1).trimEnd()}…`
}

function keywordsFor(locale: AppLocale): string[] {
  if (locale === 'en') return [...ENGLISH_ROOT_KEYWORDS]
  const pack = seoKeywords[locale as keyof typeof seoKeywords]
  return pack ? [...pack] : [...ENGLISH_ROOT_KEYWORDS]
}

function innerTitleKey(locale: AppLocale, pathname: string): string | null {
  const path = pathname.split('?')[0] || '/'
  if (path === '/' || path === '' || path === '/home') return null
  const t = getT(locale)
  if (path.startsWith('/shop')) return t.shop.title
  if (path.startsWith('/about')) return t.about.title
  if (path.startsWith('/contact')) return t.footer.contactUs
  if (path.startsWith('/heritage')) return t.nav.heritage
  if (path.startsWith('/accessories')) return t.nav.accessories
  if (path.startsWith('/cart')) return t.nav.cart
  if (path.startsWith('/checkout')) return t.nav.cart
  if (path.startsWith('/wishlist')) return t.nav.wishlist
  if (path.startsWith('/account')) return t.nav.account
  if (path.startsWith('/register')) return t.nav.account
  if (path.startsWith('/faq')) return t.footer.faq
  if (path.startsWith('/size-guide')) return t.search.title
  if (path.startsWith('/privacy-policy')) return 'Privacy'
  if (path.startsWith('/cookie-policy')) return 'Cookies'
  if (path.startsWith('/terms')) return 'Terms'
  if (path.startsWith('/verify-email')) return t.nav.account
  if (path.startsWith('/home/gate')) return 'Access verification'
  if (path.startsWith('/home/blocked')) return 'Access restricted'
  return t.shop.title
}

function homeDefaultTitle(locale: AppLocale): string {
  const map: Record<AppLocale, string> = {
    en: 'Bint Saeed | Luxury Abaya House in Abu Dhabi',
    ar: 'بنت سعيد | دار عبايات فاخرة في أبوظبي',
    fr: 'Bint Saeed | Maison d’abayas de luxe à Abou Dabi',
    it: 'Bint Saeed | Casa di abaya di lusso ad Abu Dhabi',
    es: 'Bint Saeed | Casa de abayas de lujo en Abu Dabi',
    ru: 'Bint Saeed | Дом роскошных абай в Абу-Даби',
    zh: 'Bint Saeed | 阿布扎比奢华阿巴亚之家',
    de: 'Bint Saeed | Luxus-Abaya-Haus in Abu Dhabi',
    nl: 'Bint Saeed | Luxe abayahuis in Abu Dhabi',
    pt: 'Bint Saeed | Casa de abayas de luxo em Abu Dhabi',
  }
  return map[locale]
}

function aiOther(locale: AppLocale): Record<string, string> {
  const base = {
    'ai:brand': 'Bint Saeed',
    'ai:category': 'Luxury Fashion, Abaya, Jewellery, Lifestyle',
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
  const desc = clip(homeDescription(locale))
  const inner = innerTitleKey(locale, pathname)
  const isHomeShell = usesHomeMetadata(pathname)

  const title: Metadata['title'] = isHomeShell
    ? { default: homeDefaultTitle(locale), template: '%s | Bint Saeed' }
    : { absolute: `${inner ?? 'Bint Saeed'} | Bint Saeed` }

  const ogTitle = isHomeShell ? HOME_OG_TITLE[locale] : `${inner ?? 'Bint Saeed'} | Bint Saeed`
  const twTitle = ogTitle
  const twDesc = clip(
    isHomeShell
      ? locale === 'en'
        ? 'A house devoted to the daughter in every woman—heritage forward through refined abayas, jewellery, and lifestyle. Abu Dhabi, UAE.'
        : desc
      : desc,
    200,
  )

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
      description: clip(desc, 200),
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
          alt:
            locale === 'ar'
              ? 'بنت سعيد — دار عبايات فاخرة، أبوظبي'
              : 'Bint Saeed — luxury abaya house, Abu Dhabi',
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
      'msapplication-TileColor': '#3b0014',
      ...aiOther(locale),
    },
  }
}
