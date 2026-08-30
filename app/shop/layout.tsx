import type { Metadata } from 'next'
import { getServerLocale } from '@/lib/i18n/serverLocale'
import { localizedPath, type AppLocale } from '@/lib/i18n/routing'
import { getResolvedRoutePageMeta } from '@/lib/seo/routePageMeta'
import { brandDocumentTitle } from '@/lib/seo/brandDocumentTitle'
import { mergedMetaKeywordsForLocale } from '@/lib/seo/keywordMerge'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'
import { buildHreflangLanguages } from '@/lib/i18n/hreflang'
import { BRAND_NAME_ZH_DISPLAY } from '@/lib/i18n/brandProperNouns'

/** Ensures shop always gets a fresh render with search params (avoids stale static shell without styles/JS). */
export const dynamic = 'force-dynamic'

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

const OG_TITLE: Record<AppLocale, string> = {
  en: 'Shop Luxury Abayas, Kaftans & Eveningwear | Bint Saeed',
  ar: 'تسوّقي عبايات فاخرة وقفاطين وأزياء سهرة | Bint Saeed',
  fr: 'Boutique Abayas, Kaftans & Robes de soirée de luxe | Bint Saeed',
  de: 'Luxus-Abayas, Kaftane & Abendmode | Bint Saeed',
  it: 'Abaya, Caftani e Moda da sera di lusso | Bint Saeed',
  es: 'Abayas, Caftanes y Moda de noche de lujo | Bint Saeed',
  ru: 'Роскошные абаи, кафтаны и вечерние наряды | Bint Saeed',
  zh: `奢华阿巴亚、卡夫坦与晚装 | ${BRAND_NAME_ZH_DISPLAY}`,
  nl: "Luxe abaya\u2019s, kaftans & avondkleding | Bint Saeed",
  pt: 'Abayas, Caftãs e Moda de noite de luxo | Bint Saeed',
  id: 'Abaya, Kaftan & Busana Malam Mewah | Bint Saeed',
  ms: 'Abaya, Kaftan & Busana Malam Mewah | Bint Saeed',
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const meta = getResolvedRoutePageMeta(locale, '/shop')
  const title = brandDocumentTitle(OG_TITLE[locale])
  const desc = meta.description

  const canonicalUrl = `${BASE_URL}${localizedPath(locale, '/shop')}`
  const languages = buildHreflangLanguages('/shop', BASE_URL)

  return {
    title: { absolute: title },
    description: desc,
    keywords: mergedMetaKeywordsForLocale(locale),
    authors: [{ name: 'Bint Saeed' }],
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title,
      description: clipMetaDescription(desc, 200),
      url: canonicalUrl,
      siteName: locale === 'zh' ? BRAND_NAME_ZH_DISPLAY : 'Bint Saeed',
      locale: locale === 'ar' ? 'ar_AE' : locale === 'zh' ? 'zh_CN' : `${locale}_${locale.toUpperCase()}`,
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og-share.jpg`,
          width: 1200,
          height: 675,
          alt: OG_TITLE[locale],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: clipMetaDescription(desc, 200),
      images: [`${BASE_URL}/og-share.jpg`],
    },
    other: {
      'ai:brand': 'Bint Saeed',
      'ai:category': 'Luxury abayas, kaftans, dresses, eveningwear',
      'ai:location': 'Abu Dhabi, United Arab Emirates',
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
