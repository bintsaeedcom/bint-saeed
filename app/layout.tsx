import type { Metadata } from 'next'
import { Montserrat, Noto_Kufi_Arabic, Rozha_One } from 'next/font/google'
import './globals.css'
import 'react-phone-number-input/style.css'
import './phone-input-theme.css'
import LayoutWrapper from '@/components/LayoutWrapper'
import ContentProtection from '@/components/ContentProtection'
import AnalyticsBootstrap from '@/components/AnalyticsBootstrap'
import AnalyticsTracker from '@/components/AnalyticsTracker'
import AppToaster from '@/components/AppToaster'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { CurrencyProvider } from '@/lib/currency/CurrencyContext'
import { AnalyticsProvider } from '@/lib/analytics/AnalyticsContext'

import { buildRootMetadata } from '@/lib/i18n/buildRootMetadata'
import { getServerLocale, getServerPathname } from '@/lib/i18n/serverLocale'
import { buildOrganizationJsonLd } from '@/lib/seo/organizationSchemaLd'
import {
  buildBrandJsonLd,
  buildBreadcrumbJsonLd,
  buildItemListJsonLd,
  buildLocalBusinessJsonLd,
  buildPrimarySiteNavigationJsonLd,
  buildProductJsonLd,
  buildWebPageJsonLd,
  buildWebsiteJsonLd,
} from '@/lib/seo/rootLayoutJsonLd'
import { buildFaqPageJsonLd } from '@/lib/seo/faqPageJsonLd'
import { buildSupplementalJsonLdGraphScriptJson } from '@/lib/seo/seo'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'
import {
  buildGtmHeadBootstrapScript,
  GTM_CONTAINER_ID,
  isGtmConfigured,
} from '@/lib/analytics/gtm'

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
  const primaryNavigationSchema = buildPrimarySiteNavigationJsonLd(locale)
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
  const gtmEnabled = isGtmConfigured()

  return (
    <html
      lang={langAttr}
      dir={dir}
      className={`${fontMontserrat.variable} ${fontRozha.variable} ${fontNotoKufi.variable}`}
    >
      <head>
        {gtmEnabled ? (
          <script
            id="gtm-bootstrap"
            dangerouslySetInnerHTML={{
              __html: buildGtmHeadBootstrapScript(GTM_CONTAINER_ID),
            }}
          />
        ) : null}
        {/* Favicon — stable URLs; must stay crawlable by Googlebot-Image */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-48.png?v=3" type="image/png" sizes="48x48" />
        <link rel="icon" href="/favicon.png?v=3" type="image/png" sizes="500x500" />
        <link rel="apple-touch-icon" href="/favicon-48.png?v=3" />
        <link rel="shortcut icon" href="/flavicon.png?v=3" />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(primaryNavigationSchema) }}
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
                  'A contemporary fashion house from Abu Dhabi devoted to evolving lifestyles. Abayas, kaftans, dresses, jewellery and lifestyle pieces — made to order.',
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
                paymentAccepted: 'Credit Card, Apple Pay, Google Pay',
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
      <body className="min-h-screen font-sans antialiased" dir={dir} data-locale={locale}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded focus:bg-brand-darkRed focus:px-4 focus:py-2 focus:font-montserrat focus:text-sm focus:text-white focus:shadow-lg"
        >
          Skip to content
        </a>
        {gtmEnabled ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
              height={0}
              width={0}
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}
        <LanguageProvider initialLocale={locale}>
          <AnalyticsProvider>
            <CurrencyProvider>
              <ContentProtection />
              <AnalyticsBootstrap />
              <AnalyticsTracker />
              <LayoutWrapper>
                {children}
              </LayoutWrapper>
              <AppToaster />
            </CurrencyProvider>
          </AnalyticsProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
