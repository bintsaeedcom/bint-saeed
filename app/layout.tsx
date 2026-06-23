import type { Metadata } from 'next'
import { Montserrat, Noto_Kufi_Arabic, Rozha_One } from 'next/font/google'
import './globals.css'
import 'react-phone-number-input/style.css'
import './phone-input-theme.css'
import LayoutWrapper from '@/components/LayoutWrapper'
import ContentProtection from '@/components/ContentProtection'
import { Toaster } from 'react-hot-toast'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { CurrencyProvider } from '@/lib/currency/CurrencyContext'
import { AnalyticsProvider } from '@/lib/analytics/AnalyticsContext'
import AnalyticsBootstrap from '@/components/AnalyticsBootstrap'
import AnalyticsTracker from '@/components/AnalyticsTracker'

import { buildRootMetadata } from '@/lib/i18n/buildRootMetadata'
import { getServerLocale, getServerPathname } from '@/lib/i18n/serverLocale'
import { buildOrganizationJsonLd } from '@/lib/seo/organizationSchemaLd'
import {
  buildBrandJsonLd,
  buildBreadcrumbJsonLd,
  buildItemListJsonLd,
  buildLocalBusinessJsonLd,
  buildProductJsonLd,
  buildWebPageJsonLd,
  buildWebsiteJsonLd,
} from '@/lib/seo/rootLayoutJsonLd'
import { buildFaqPageJsonLd } from '@/lib/seo/faqPageJsonLd'
import { buildSupplementalJsonLdGraphScriptJson } from '@/lib/seo/seo'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'

/** Locale + pathname come from middleware headers — avoid serving one cached HTML canonical for all URLs. */
export const dynamic = 'force-dynamic'

const fontMontserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

const fontRozha = Rozha_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rozha',
  display: 'swap',
})

const fontNotoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-arabic',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const [locale, pathname] = await Promise.all([getServerLocale(), getServerPathname()])
  return buildRootMetadata(locale, pathname)
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [locale, pathname] = await Promise.all([getServerLocale(), getServerPathname()])
  const { pathname: innerPath } = stripLocaleFromPathname(pathname ?? '/')
  const schemaPath = (innerPath.split('?')[0] || '/').replace(/\/+$/, '') || '/'
  const isFaqPath = schemaPath === '/faq' || schemaPath.startsWith('/faq/')
  /** Extra homepage-only ClothingStore snippet: editorial landing at `/home` (not duplicated on `/` coming-soon). */
  const isEditorialHomePath = schemaPath === '/home'
  /** Omit shop-like Product / ItemList / offer catalog on coming-soon and prelaunch root (stable Rich Results). */
  const hideCommerceProductSchema =
    schemaPath === '/coming-soon' ||
    (process.env.NEXT_PUBLIC_COMING_SOON_ONLY === 'true' && schemaPath === '/')

  const organizationSchema = buildOrganizationJsonLd(locale)
  const brandSchemaLd = buildBrandJsonLd(locale)
  const websiteSchema = buildWebsiteJsonLd(locale)
  const localBusinessSchema = buildLocalBusinessJsonLd(locale, {
    omitOfferCatalog: hideCommerceProductSchema,
  })
  const breadcrumbSchema = buildBreadcrumbJsonLd(locale)
  const productSchema = buildProductJsonLd(locale)
  const faqSchema = isFaqPath ? buildFaqPageJsonLd(locale) : null
  const webPageSchema = buildWebPageJsonLd(locale, schemaPath)
  const itemListSchema = buildItemListJsonLd(locale)

  /** GCC / press / royal supplemental blocks merged + deduped (single @graph); FAQ route skips static supplement to avoid duplicate FAQPage. */
  const supplementalLdJson = buildSupplementalJsonLdGraphScriptJson({ isFaqRoute: isFaqPath, locale })

  const langAttr = locale === 'zh' ? 'zh-CN' : locale === 'en' ? 'en' : locale
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html
      lang={langAttr}
      dir={dir}
      className={`${fontMontserrat.variable} ${fontRozha.variable} ${fontNotoKufi.variable}`}
    >
      <head>
        {/* Favicon - explicit links for better browser support */}
        <link rel="icon" href="/flavicon.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/flavicon.png?v=2" />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="Bint Saeed — machine-readable summary for AI assistants"
        />

        {/* Fonts: self-hosted via next/font/google (above) — avoids GSC / crawler gstatic failures */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://js.stripe.com" />
        
        {/* Structured Data - Multiple Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchemaLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {!hideCommerceProductSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
          />
        ) : null}
        {faqSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        {!hideCommerceProductSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
          />
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: supplementalLdJson }}
        />
        {isEditorialHomePath ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ClothingStore',
                name: 'Bint Saeed',
                description:
                  'A contemporary house from Abu Dhabi devoted to evolving lifestyles. Abayas, kaftans, dresses, jewellery and lifestyle pieces — made to order.',
                url: 'https://www.bintsaeed.com',
                logo: 'https://www.bintsaeed.com/og-image.png',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Abu Dhabi',
                  addressCountry: 'AE',
                },
                sameAs: ['https://www.instagram.com/bintsaeed'],
                priceRange: 'AED 2000 - AED 3500',
                currenciesAccepted: 'AED',
                paymentAccepted: 'Credit Card, Apple Pay',
                openingHoursSpecification: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                  ],
                  opens: '00:00',
                  closes: '23:59',
                },
              }),
            }}
          />
        ) : null}

        {/* Bing Webmaster verification */}
        <meta name="msvalidate.01" content="7BA982E3BEF4E04896CC719115678C24" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <LanguageProvider initialLocale={locale}>
          <AnalyticsProvider>
            <CurrencyProvider>
              <ContentProtection />
              <AnalyticsBootstrap />
              <AnalyticsTracker />
              <LayoutWrapper>
                {children}
              </LayoutWrapper>
              <Toaster 
                position="bottom-right"
                toastOptions={{
                  style: {
                    background:
                      'linear-gradient(135deg, rgba(59,10,18,0.96) 0%, rgba(31,5,8,0.94) 100%)',
                    color: '#F5EDE8',
                    fontFamily: 'var(--font-montserrat)',
                    letterSpacing: '0.03em',
                    border: '1px solid rgba(212,189,172,0.28)',
                    borderRadius: '12px',
                    boxShadow: '0 18px 36px rgba(12, 2, 8, 0.35)',
                    padding: '12px 14px',
                    minWidth: '250px',
                  },
                  success: {
                    style: {
                      borderColor: 'rgba(146,170,193,0.45)',
                    },
                  },
                  error: {
                    style: {
                      borderColor: 'rgba(193,144,134,0.5)',
                    },
                  },
                }}
              />
            </CurrencyProvider>
          </AnalyticsProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
