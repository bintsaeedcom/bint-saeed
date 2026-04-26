import type { Metadata } from 'next'
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
  const path = (pathname.split('?')[0] || '/').replace(/\/$/, '') || '/'
  const isFaqPath = path === '/faq' || path.startsWith('/faq/')

  const organizationSchema = buildOrganizationJsonLd(locale)
  const brandSchemaLd = buildBrandJsonLd(locale)
  const websiteSchema = buildWebsiteJsonLd(locale)
  const localBusinessSchema = buildLocalBusinessJsonLd(locale)
  const breadcrumbSchema = buildBreadcrumbJsonLd(locale)
  const productSchema = buildProductJsonLd(locale)
  const faqSchema = isFaqPath ? buildFaqPageJsonLd(locale) : null
  const webPageSchema = buildWebPageJsonLd(locale)
  const itemListSchema = buildItemListJsonLd(locale)

  /** GCC / press / royal supplemental blocks merged + deduped (single @graph); FAQ route skips static supplement to avoid duplicate FAQPage. */
  const supplementalLdJson = buildSupplementalJsonLdGraphScriptJson({ isFaqRoute: isFaqPath, locale })

  const langAttr = locale === 'zh' ? 'zh-CN' : locale === 'en' ? 'en' : locale
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={langAttr} dir={dir}>
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

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Fonts outside globals.css: if these fail (privacy/ad-block), site CSS still loads */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Rozha+One&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300;400;500;700&display=swap"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://ipapi.co" />
        
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: supplementalLdJson }}
        />

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
