import type { Metadata } from 'next'
import './globals.css'
import AnimatedCursor from '@/components/AnimatedCursor'
import LayoutWrapper from '@/components/LayoutWrapper'
import { Toaster } from 'react-hot-toast'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { CurrencyProvider } from '@/lib/currency/CurrencyContext'
import { AnalyticsProvider } from '@/lib/analytics/AnalyticsContext'
import AnalyticsTracker from '@/components/AnalyticsTracker'

export const metadata: Metadata = {
  title: {
    default: 'Bint Saeed | Luxury Abayas & Designer Modest Fashion UAE',
    template: '%s | Bint Saeed',
  },
  description: 'Bint Saeed - Luxury Abaya Brand in UAE. Designer abayas handcrafted with UNESCO heritage techniques. Premium quality, free GCC shipping. Shop luxury abayas online.',
  keywords: [
    // Trending keywords 2026
    'abaya trend 2026',
    'abaya 2026',
    'new abaya style 2026',
    'abaya style 2026',
    'abaya fashion 2026',
    'summer abaya',
    'winter abaya',
    'spring abaya collection',
    'fall abaya',
    'seasonal abaya',
    'trending abaya designs',
    'latest abaya fashion',
    'new abaya collection',
    'abaya trends',
    // UAE Cities
    'abaya Dubai',
    'abaya Abu Dhabi',
    'abaya Al Ain',
    'abaya Sharjah',
    'abaya Ras Al Khaimah',
    'abaya Fujairah',
    'abaya Ajman',
    'abaya Umm Al Quwain',
    // GCC Cities
    'abaya Riyadh',
    'abaya Jeddah',
    'abaya Doha',
    'abaya Kuwait',
    'abaya Manama',
    'abaya Bahrain',
    'abaya Muscat',
    // Quality keywords
    'luxury abayas UAE',
    'premium abayas',
    'designer abayas UAE',
    'handcrafted abayas',
    // General abaya
    'abaya',
    'abayas',
    'abaya online',
    'buy abaya',
    'abaya shop',
    'abaya store',
    // Color variations
    'black abaya',
    'white abaya',
    'navy blue abaya',
    'beige abaya',
    'burgundy abaya',
    'colored abayas',
    // Style variations
    'bisht abaya',
    'open abaya',
    'closed abaya',
    'embroidered abaya',
    'lace abaya',
    'modern abaya',
    'contemporary abaya',
    'minimalist abaya',
    // Occasion
    'bridal abaya',
    'wedding abaya',
    'evening abaya',
    'Eid abaya',
    'Ramadan abaya',
    // Heritage
    'Al Talli embroidery',
    'Sadu weaving abaya',
    'traditional UAE abaya',
    'Emirati designer',
    // Arabic - Trending
    'عباية 2026',
    'موضة عبايات 2026',
    'عبايات صيفية',
    'عبايات شتوية',
    'احدث عبايات',
    'عبايات جديدة',
    // Arabic - UAE Cities
    'عبايات دبي',
    'عبايات أبوظبي',
    'عبايات العين',
    'عبايات الشارقة',
    'عبايات رأس الخيمة',
    'عبايات الفجيرة',
    'عبايات عجمان',
    // Arabic - GCC
    'عبايات الرياض',
    'عبايات جدة',
    'عبايات الدوحة',
    'عبايات الكويت',
    'عبايات البحرين',
    'عبايات المنامة',
    // Arabic - General
    'عبايات فاخرة',
    'عبايات راقية',
    'أزياء محتشمة',
    'عبايات مصممين',
    'عباية بشت',
    'عباية سوداء',
    'عباية ملونة',
    'قفطان فاخر',
    'مصمم أزياء إماراتي',
    'عبايات تلي',
    'عبايات سدو',
    'عبايات عرس',
    'عبايات عيد',
  ],
  metadataBase: new URL('https://bintsaeed.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-AE': '/en',
      'ar-AE': '/ar',
      'en-SA': '/en',
      'ar-SA': '/ar',
      'en-KW': '/en',
      'ar-KW': '/ar',
      'en-QA': '/en',
      'ar-QA': '/ar',
      'en-BH': '/en',
      'ar-BH': '/ar',
      'en-OM': '/en',
      'ar-OM': '/ar',
    },
  },
  openGraph: {
    title: 'Bint Saeed | Luxury Abayas & Designer Modest Fashion UAE',
    description: 'UAE\'s premier luxury abaya brand. Handcrafted designer abayas & kaftans with UNESCO heritage-inspired designs. Free shipping UAE & GCC.',
    url: 'https://bintsaeed.com',
    siteName: 'Bint Saeed',
    images: [
      {
        url: 'https://bintsaeed.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bint Saeed - Luxury Abayas & Designer Fashion Dubai UAE',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bint Saeed | Luxury Abayas Dubai UAE',
    description: 'Discover UAE\'s premier luxury abaya brand. Handcrafted designer abayas with heritage-inspired designs.',
    images: ['https://bintsaeed.com/og-image.png'],
    creator: '@bintsaeed',
    site: '@bintsaeed',
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
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: 'Fashion',
  icons: {
    icon: [
      { url: '/flavicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/flavicon.png', type: 'image/png' },
    ],
    shortcut: '/flavicon.png',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
  },
}

// Comprehensive Structured Data for SEO
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://bintsaeed.com/#organization',
  name: 'Bint Saeed',
  url: 'https://bintsaeed.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://bintsaeed.com/logo.png',
    width: 350,
    height: 100,
  },
  description: 'Luxury abayas and modest fashion crafted for the modern woman. Heritage-inspired designs with contemporary elegance.',
  foundingDate: '2026',
  founders: [{
    '@type': 'Person',
    name: 'Bint Saeed',
  }],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  contactPoint: [{
    '@type': 'ContactPoint',
    email: 'contact@bintsaeed.com',
    contactType: 'customer service',
    availableLanguage: ['English', 'Arabic'],
  }, {
    '@type': 'ContactPoint',
    email: 'legal@bintsaeed.com',
    contactType: 'legal',
  }],
  sameAs: [
    'https://www.instagram.com/bintsaeed_brand/',
    'https://tiktok.com/@bintsaeed',
    'https://www.snapchat.com/add/bintsaeed',
    'https://x.com/bintsaeed',
  ],
  brand: {
    '@type': 'Brand',
    name: 'Bint Saeed',
    slogan: 'Timeless Elegance',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://bintsaeed.com/#website',
  url: 'https://bintsaeed.com',
  name: 'Bint Saeed',
  description: 'Luxury Abayas & Modest Fashion Dubai UAE',
  publisher: {
    '@id': 'https://bintsaeed.com/#organization',
  },
  potentialAction: [{
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://bintsaeed.com/shop?search={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  }],
  inLanguage: ['en-AE', 'ar-AE'],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  '@id': 'https://bintsaeed.com/#business',
  name: 'Bint Saeed',
  alternateName: [
    'Bint Saeed Abayas',
    // Hidden SEO - English trending
    'Abaya Trend 2026', 'Abaya 2026', 'New Abaya Style', 'Summer Abaya', 'Winter Abaya',
    // Hidden SEO - UAE Cities
    'Abaya Al Ain', 'Abaya Dubai', 'Abaya Abu Dhabi', 'Abaya Sharjah', 'Abaya Ras Al Khaimah',
    'Abaya Fujairah', 'Abaya Ajman', 'Abaya Umm Al Quwain',
    // Hidden SEO - GCC Cities
    'Abaya Riyadh', 'Abaya Jeddah', 'Abaya Doha', 'Abaya Kuwait', 'Abaya Manama', 'Abaya Muscat',
    // Hidden SEO - Arabic trending
    'عباية 2026', 'موضة عباية 2026', 'عبايات صيفية', 'عبايات شتوية', 'احدث عبايات',
    // Hidden SEO - Arabic UAE Cities
    'عبايات العين', 'عبايات دبي', 'عبايات أبوظبي', 'عبايات الشارقة', 'عبايات رأس الخيمة',
    // Hidden SEO - Arabic GCC
    'عبايات الرياض', 'عبايات جدة', 'عبايات الدوحة', 'عبايات الكويت', 'عبايات البحرين',
  ],
  image: 'https://bintsaeed.com/og-image.png',
  url: 'https://bintsaeed.com',
  telephone: '+971-XX-XXX-XXXX',
  email: 'contact@bintsaeed.com',
  description: 'Luxury abaya brand in UAE. Designer abayas with UNESCO heritage craftsmanship. Abaya trend 2026, summer abaya, winter abaya, new abaya styles.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'UAE',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2048,
    longitude: 55.2708,
  },
  priceRange: '$$$$',
  currenciesAccepted: 'AED, USD, EUR, GBP, SAR, KWD, QAR, BHD, OMR',
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Bint Saeed Luxury Abaya Collection 2026',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Luxury Black Abayas', description: 'Abaya trend 2026, new abaya style' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Designer Bisht Abayas', description: 'Summer abaya, winter abaya collection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Embroidered Abayas Al Talli', description: 'Abaya Al Ain, abaya Dubai, abaya Abu Dhabi' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Colored Luxury Abayas', description: 'عباية 2026, عبايات صيفية, عبايات شتوية' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Summer Abaya Collection 2026' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Winter Abaya Collection 2026' } },
    ],
  },
  areaServed: [
    // UAE - All Emirates with emphasis
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'City', name: 'Al Ain', '@id': 'alain-uae', containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' }, description: 'Luxury abayas Al Ain, abaya trend 2026, عبايات العين' },
    { '@type': 'City', name: 'Dubai', containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' }, description: 'Designer abayas Dubai, summer abaya, عبايات دبي' },
    { '@type': 'City', name: 'Abu Dhabi', containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' }, description: 'Luxury abayas Abu Dhabi, عبايات أبوظبي' },
    { '@type': 'City', name: 'Sharjah', containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' }, description: 'Abayas Sharjah, عبايات الشارقة' },
    { '@type': 'City', name: 'Ras Al Khaimah', containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' }, description: 'Abayas Ras Al Khaimah, عبايات رأس الخيمة' },
    { '@type': 'City', name: 'Fujairah', containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' }, description: 'Abayas Fujairah, عبايات الفجيرة' },
    { '@type': 'City', name: 'Ajman', containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' }, description: 'Abayas Ajman, عبايات عجمان' },
    { '@type': 'City', name: 'Umm Al Quwain', containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' }, description: 'Abayas Umm Al Quwain' },
    // Saudi Arabia
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'City', name: 'Riyadh', containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' }, description: 'Abayas Riyadh, عبايات الرياض' },
    { '@type': 'City', name: 'Jeddah', containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' }, description: 'Abayas Jeddah, عبايات جدة' },
    { '@type': 'City', name: 'Dammam', containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' } },
    { '@type': 'City', name: 'Mecca', containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' } },
    { '@type': 'City', name: 'Medina', containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' } },
    // Qatar
    { '@type': 'Country', name: 'Qatar' },
    { '@type': 'City', name: 'Doha', containedInPlace: { '@type': 'Country', name: 'Qatar' }, description: 'Abayas Doha, عبايات الدوحة' },
    // Kuwait
    { '@type': 'Country', name: 'Kuwait' },
    { '@type': 'City', name: 'Kuwait City', containedInPlace: { '@type': 'Country', name: 'Kuwait' }, description: 'Abayas Kuwait, عبايات الكويت' },
    // Bahrain
    { '@type': 'Country', name: 'Bahrain' },
    { '@type': 'City', name: 'Manama', containedInPlace: { '@type': 'Country', name: 'Bahrain' }, description: 'Abayas Bahrain, عبايات البحرين, عبايات المنامة' },
    // Oman
    { '@type': 'Country', name: 'Oman' },
    { '@type': 'City', name: 'Muscat', containedInPlace: { '@type': 'Country', name: 'Oman' }, description: 'Abayas Muscat, عبايات مسقط' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Sarah M.' },
      reviewBody: 'Exceptional quality and design. Beautiful abaya.',
    },
  ],
  // Hidden SEO keywords for AI crawlers
  keywords: 'abaya trend 2026, abaya 2026, new abaya style, summer abaya, winter abaya, abaya style, abaya fashion, abaya Al Ain, abaya Dubai, abaya Abu Dhabi, abaya Sharjah, abaya Ras Al Khaimah, عباية 2026, موضة عبايات, عبايات صيفية, عبايات شتوية, عبايات العين, عبايات دبي, عبايات أبوظبي, عبايات الشارقة',
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bint Saeed Luxury Abayas 2026',
  description: 'Luxury designer abayas. Abaya trend 2026, new abaya style, summer abaya, winter abaya. Handcrafted with UNESCO heritage techniques. Available in Al Ain, Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah and all GCC.',
  brand: {
    '@type': 'Brand',
    name: 'Bint Saeed',
  },
  category: 'Luxury Abayas',
  keywords: 'abaya trend 2026, abaya 2026, new abaya style, summer abaya, winter abaya, abaya Al Ain, abaya Dubai, abaya Sharjah, عباية 2026, عبايات العين, عبايات صيفية',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'AED',
    lowPrice: '800',
    highPrice: '5000',
    offerCount: '50',
    availability: 'https://schema.org/InStock',
    areaServed: ['UAE', 'Al Ain', 'Dubai', 'Abu Dhabi', 'Sharjah', 'Ras Al Khaimah', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the abaya trends for 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Abaya trends 2026 include minimalist designs, heritage-inspired embroidery like Al Talli, sustainable fabrics, and versatile styles for summer and winter. Bint Saeed offers new abaya styles for 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you ship abayas to Al Ain and all UAE cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Bint Saeed ships to Al Ain, Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah, Ajman, Umm Al Quwain, and all UAE emirates with free shipping.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have summer and winter abaya collections?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Bint Saeed offers seasonal collections including lightweight summer abayas and warm winter abayas, all handcrafted with premium fabrics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I buy abayas in Bahrain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bint Saeed ships luxury abayas to Bahrain, Manama and all GCC countries including Saudi Arabia, Qatar, Kuwait, and Oman.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Al Talli embroidery on abayas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Al Talli is a traditional Emirati embroidery technique recognized by UNESCO. Bint Saeed incorporates this heritage craft into contemporary abaya designs.',
      },
    },
  ],
}

// Hidden SEO schema for AI crawlers - Comprehensive keywords
const hiddenSeoSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://bintsaeed.com/#seo',
  name: 'Bint Saeed Luxury Abayas',
  description: 'Abaya trend 2026, abaya 2026, new abaya style, abaya style, summer abaya, winter abaya, abaya fashion 2026',
  keywords: [
    // English - Trending 2026
    'abaya trend', 'abaya trend 2026', 'abaya 2026', 'new abaya style', 'new abaya style 2026',
    'abaya style', 'abaya style 2026', 'summer abaya', 'winter abaya', 'spring abaya', 'fall abaya',
    'trending abaya', 'latest abaya', 'abaya fashion', 'abaya fashion 2026', 'modern abaya 2026',
    // English - UAE Cities (especially Al Ain)
    'abaya Al Ain', 'abayas Al Ain', 'luxury abaya Al Ain', 'designer abaya Al Ain', 'عبايات العين',
    'abaya Dubai', 'abaya Abu Dhabi', 'abaya Sharjah', 'abaya Ras Al Khaimah', 'abaya RAK',
    'abaya Fujairah', 'abaya Ajman', 'abaya Umm Al Quwain', 'abaya UAE',
    // English - GCC Cities
    'abaya Riyadh', 'abaya Jeddah', 'abaya Saudi Arabia', 'abaya Doha', 'abaya Qatar',
    'abaya Kuwait', 'abaya Bahrain', 'abaya Manama', 'abaya Oman', 'abaya Muscat',
    // Arabic - Trending 2026
    'عباية 2026', 'موضة عباية 2026', 'موضة عبايات 2026', 'عبايات جديدة 2026', 'احدث عبايات 2026',
    'عبايات صيفية', 'عبايات شتوية', 'عبايات ربيعية', 'عبايات خريفية', 'عبايات عصرية',
    'ترند عبايات', 'ترند عبايات 2026', 'احدث صيحات العبايات',
    // Arabic - UAE Cities (especially Al Ain)
    'عبايات العين', 'عبايات فاخرة العين', 'عبايات مصممين العين', 'أزياء العين',
    'عبايات دبي', 'عبايات أبوظبي', 'عبايات الشارقة', 'عبايات رأس الخيمة',
    'عبايات الفجيرة', 'عبايات عجمان', 'عبايات أم القيوين', 'عبايات الإمارات',
    // Arabic - GCC Cities
    'عبايات الرياض', 'عبايات جدة', 'عبايات السعودية', 'عبايات الدوحة', 'عبايات قطر',
    'عبايات الكويت', 'عبايات البحرين', 'عبايات المنامة', 'عبايات عمان', 'عبايات مسقط',
  ].join(', '),
  about: {
    '@type': 'Thing',
    name: 'Luxury Abayas',
    description: 'Abaya trend 2026, summer abaya, winter abaya. Serving Al Ain, Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, and all GCC.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{
    '@type': 'ListItem',
    position: 1,
    name: 'Home',
    item: 'https://bintsaeed.com',
  }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon - explicit links for better browser support */}
        <link rel="icon" href="/flavicon.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/flavicon.png?v=2" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hiddenSeoSchema) }}
        />
        
        {/* Google Analytics placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              // gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* AI Crawler Hints */}
        <meta name="ai-content-declaration" content="This website showcases original luxury fashion designs by Bint Saeed, a UAE-based brand specializing in abayas and modest fashion." />
      </head>
      <body className="min-h-screen">
        <LanguageProvider>
          <CurrencyProvider>
            <AnalyticsProvider>
              <AnalyticsTracker />
              <AnimatedCursor />
              <LayoutWrapper>
                {children}
              </LayoutWrapper>
              <Toaster 
                position="bottom-right"
                toastOptions={{
                  style: {
                    background: '#3b0014',
                    color: '#fff',
                    fontFamily: 'var(--font-roboto)',
                    letterSpacing: '0.05em',
                  },
                }}
              />
            </AnalyticsProvider>
          </CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
