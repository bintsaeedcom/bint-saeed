import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import 'react-phone-number-input/style.css'
import './phone-input-theme.css'
import LayoutWrapper from '@/components/LayoutWrapper'
import ContentProtection from '@/components/ContentProtection'
import { Toaster } from 'react-hot-toast'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { CurrencyProvider } from '@/lib/currency/CurrencyContext'
import { AnalyticsProvider } from '@/lib/analytics/AnalyticsContext'
import AnalyticsTracker from '@/components/AnalyticsTracker'

import { buildRootMetadata } from '@/lib/i18n/buildRootMetadata'
import { getServerLocale, getServerPathname } from '@/lib/i18n/serverLocale'

export async function generateMetadata(): Promise<Metadata> {
  const [locale, pathname] = await Promise.all([getServerLocale(), getServerPathname()])
  return buildRootMetadata(locale, pathname)
}

/** Brand-level JSON-LD (complements Organization); aligned with on-page AI meta. */
const brandSchemaLd = {
  '@context': 'https://schema.org',
  '@type': 'Brand',
  '@id': 'https://bintsaeed.com/#brand',
  name: 'Bint Saeed',
  description:
    'A luxury abaya house devoted to the daughter in every woman, carrying heritage forward through refined design, jewellery, and lifestyle objects. Emirati heritage craft: Al Talli embroidery and Khous palm-frond weaving.',
  url: 'https://bintsaeed.com',
  logo: 'https://bintsaeed.com/logo.png',
  foundingLocation: {
    '@type': 'Place',
    name: 'Abu Dhabi, United Arab Emirates',
  },
  areaServed: 'Worldwide',
  knowsAbout: [
    'Luxury abayas',
    'Emirati heritage',
    'Khous weaving',
    'Al Talli craftsmanship',
    'Natural stone jewellery',
    'Modest fashion UAE',
  ],
}

// Comprehensive Structured Data for SEO - optimized for "luxury abayas UAE", "designer abayas Abu Dhabi"
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://bintsaeed.com/#organization',
  name: 'Bint Saeed',
  alternateName: [
    'Bint Saeed Luxury Abayas',
    'Bint Saeed Luxury Abayas UAE',
    'Bint Saeed Designer Abayas Abu Dhabi',
    'Bint Saeed Designer Abayas Dubai',
  ],
  url: 'https://bintsaeed.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://bintsaeed.com/logo.png',
    width: 350,
    height: 100,
  },
  description:
    'Bint Saeed is a luxury abaya house in Abu Dhabi devoted to the daughter in every woman—heritage-inspired abayas, ready-to-wear, and jewellery—with craftsmanship rooted in Emirati traditions such as Al Talli embroidery and Khous palm-frond weaving. Ships across the UAE, GCC, and worldwide where offered.',
  foundingDate: '2026',
  knowsAbout: [
    'Luxury abayas UAE',
    'Designer abayas Abu Dhabi',
    'Designer abayas Dubai',
    'Luxury modest fashion',
    'Modest fashion UAE',
    'Modest wear and ready-to-wear',
    'Modest dresses and separates',
    'Summer and winter abaya collections',
    'GCC modest fashion',
    'Emirati heritage fashion',
    'Heritage abaya UAE',
    'Traditional and contemporary abaya styles',
    'Black abaya',
    'Lace abaya',
    'Silk abaya and chiffon abaya',
    'Open abaya',
    'Formal abaya',
    'Office and work abaya',
    'Printed abaya',
    'Arab and Middle East modest fashion',
    'UNESCO Al Talli embroidery',
    'Khous palm-frond weaving',
    'Silk abayas',
    'Handcrafted abayas',
    'Handmade abayas UAE',
    'European inspired modest silhouettes',
    'Saudi Arabia and GCC abaya clientele',
    'Luxury kaftan and abaya styling',
    'Natural stone jewellery',
    'Luxury abaya house Abu Dhabi',
  ],
  founders: [{
    '@type': 'Person',
    name: 'Bint Saeed',
  }],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Abu Dhabi',
    addressLocality: 'Abu Dhabi',
    addressRegion: 'Abu Dhabi',
    addressCountry: 'AE',
  },
  contactPoint: [{
    '@type': 'ContactPoint',
    email: 'contact@bintsaeed.com',
    contactType: 'customer service',
    availableLanguage: [
      'English',
      'Arabic',
      'French',
      'Italian',
      'Spanish',
      'Russian',
      'Chinese',
      'German',
      'Dutch',
      'Portuguese',
    ],
  }, {
    '@type': 'ContactPoint',
    email: 'legal@bintsaeed.com',
    contactType: 'legal',
  }],
  sameAs: [
    'https://www.instagram.com/bintsaeed_brand/',
    'https://www.tiktok.com/@bintsaeed_brand',
    'https://www.snapchat.com/add/bintsaeed_brand',
    'https://x.com/bintsaeed_brand',
    'https://www.pinterest.com/bintsaeed_brand/',
  ],
  brand: {
    '@type': 'Brand',
    name: 'Bint Saeed',
    slogan: 'A house devoted to the daughter in every woman',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://bintsaeed.com/#website',
  url: 'https://bintsaeed.com',
  name: 'Bint Saeed',
  description:
    'Bint Saeed — luxury abaya house in Abu Dhabi; heritage forward through refined abayas, jewellery, and lifestyle. Al Talli embroidery and Khous palm-frond weaving. Online shopping with delivery across the UAE, GCC, and worldwide where offered.',
  publisher: {
    '@id': 'https://bintsaeed.com/#organization',
  },
  potentialAction: [{
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://bintsaeed.com/shop?category={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  }],
  inLanguage: ['en-AE', 'ar-AE', 'es', 'fr', 'it', 'ru', 'zh', 'de', 'nl', 'pt'],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  '@id': 'https://bintsaeed.com/#business',
  name: 'Bint Saeed',
  alternateName: [
    'Bint Saeed Luxury Abayas UAE',
    'Bint Saeed Designer Abayas Abu Dhabi',
    'Bint Saeed Abayas',
    'luxury abayas UAE',
    'designer abayas Abu Dhabi',
    'luxury abaya UAE',
    'abaya Abu Dhabi',
    'designer abaya',
    'black abaya Dubai',
    'modern abaya UAE',
    'dubai abaya',
    'abaya brand',
    'silk abaya',
    'عباية فاخرة الإمارات',
    'عباية أبوظبي',
    'عباية دبي',
    'Luxus-Abaya VAE',
    'Abaya Abu Dhabi',
    'abaya de lujo EAU',
    '奢华阿巴亚阿联酋',
  ],
  image: 'https://bintsaeed.com/og-image.png',
  url: 'https://bintsaeed.com',
  email: 'contact@bintsaeed.com',
  description:
    'Bint Saeed — luxury abaya house in Abu Dhabi, devoted to the daughter in every woman—heritage-inspired abayas and modest ready-to-wear online, with Al Talli embroidery and Khous palm-frond weaving. Delivery across UAE emirates and wider GCC; worldwide where offered.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Abu Dhabi',
    addressLocality: 'Abu Dhabi',
    addressRegion: 'Abu Dhabi',
    postalCode: '00000',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.4539,
    longitude: 54.3773,
  },
  priceRange: '$$$$',
  currenciesAccepted: 'AED, USD, EUR, GBP, CHF, SAR, KWD, QAR, BHD, OMR',
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
  keywords: [
    'luxury abaya UAE', 'abaya Abu Dhabi', 'elegant abayas', 'designer abaya', 'luxury modest fashion',
    'black abaya Dubai', 'modern abaya UAE', 'abaya', 'dubai abaya', 'dubai abayas', 'abaya style',
    'abaya brand', 'silk abaya', 'best abaya', 'abaya design', 'lace abaya', 'purple abaya',
    'green abaya', 'beige abaya', 'nude abaya', 'pink abaya', 'navy blue abaya',
    'silk purple abaya', 'silk green abaya', 'silk beige abaya', 'silk nude abaya', 'silk pink abaya',
    'abaya trend 2026', 'abaya 2026', 'summer abaya', 'winter abaya', 'abaya Dubai', 'abaya Sharjah',
    'عباية فاخرة الإمارات', 'عباية أبوظبي', 'عبايات أنيقة', 'عباية مصمم', 'عباية سوداء دبي',
    'عباية عصرية الإمارات', 'عباية', 'عباية دبي', 'عبايات دبي', 'عباية حرير', 'عباية دانتيل',
    'abaya de luxe EAU', 'abaya Abu Dhabi', 'abayas élégantes', 'abaya designer',
    'abaya lusso EAU', 'abaya Abu Dhabi', 'abaya eleganti',
    'abaya de lujo EAU', 'abaya Abu Dhabi', 'abayas elegantes',
    'люкс абайя ОАЭ', 'абайя Абу-Даби', 'дизайнерская абайя',
    '奢华阿巴亚阿联酋', '阿巴亚阿布扎比', '设计师阿巴亚', '迪拜阿巴亚',
    'Luxus-Abaya VAE', 'Abaya Abu Dhabi', 'Designer-Abaya', 'Abaya Dubai',
    'heritage abaya UAE', 'Emirati heritage abaya', 'lace abaya', 'black abaya', 'chiffon abaya',
    'open abaya', 'formal abaya', 'office abaya', 'printed abaya', 'ruffled abaya', 'abaya blazer',
    'arab abaya', 'gcc abaya', 'middle east abaya brands', 'abaya designer UAE',
    'عباية تراث إماراتي', 'عباية دانتيل', 'عباية سوداء', 'عباية شيفون',
  ].join(', '),
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': 'https://bintsaeed.com/#product',
  name: 'Bint Saeed Luxury Abayas',
  description:
    'Heritage-inspired abayas and modest ready-to-wear by Bint Saeed (UAE), often referencing Al Talli embroidery and Khous palm-frond weaving. Materials and silhouettes vary by collection—see individual products for details.',
  brand: {
    '@type': 'Brand',
    name: 'Bint Saeed',
  },
  category: 'Luxury Abayas',
  keywords: [
    'luxury abaya UAE', 'abaya Abu Dhabi', 'elegant abayas', 'designer abaya', 'luxury modest fashion',
    'modest fashion UAE', 'modest wear', 'modest dresses', 'summer abaya', 'winter abaya',
    'black abaya Dubai', 'modern abaya UAE', 'dubai abaya', 'abaya style', 'abaya brand', 'silk abaya',
    'abaya design', 'lace abaya', 'purple abaya', 'green abaya', 'beige abaya',
    'nude abaya', 'pink abaya', 'navy blue abaya', 'silk purple abaya', 'silk black abaya',
    'abaya trend 2026', 'abaya trend 2027', 'abaya 2027', 'abaya trend 2028', 'abaya 2028',
    'GCC modest fashion', 'UAE modest fashion brand',
    'heritage abaya', 'lace abaya', 'black abaya', 'chiffon abaya', 'open abaya', 'formal abaya',
    'office abaya', 'printed abaya', 'ruffled abaya', 'abaya blazer', 'traditional abaya', 'arab abaya',
    'عباية تراث إماراتي', 'عباية فاخرة الإمارات', 'عباية أبوظبي', 'عباية حرير', 'أزياء محتشمة',
    'abaya de luxe EAU', 'abaya de lujo EAU', '奢华阿巴亚阿联酋', '阿巴亚阿布扎比',
    'Luxus-Abaya VAE', 'Abaya Abu Dhabi', 'Abaya Seide',
  ].join(', '),
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'AED',
    lowPrice: '800',
    highPrice: '5000',
    offerCount: '50',
    availability: 'https://schema.org/InStock',
    areaServed: ['UAE', 'Al Ain', 'Dubai', 'Abu Dhabi', 'Sharjah', 'Ras Al Khaimah', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy luxury abayas in UAE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bint Saeed is an online UAE modest fashion house offering heritage-inspired abayas and ready-to-wear, with craft rooted in traditions such as Al Talli embroidery and Khous palm-frond weaving. We ship to Dubai, Abu Dhabi, Al Ain, Sharjah, and other emirates—see checkout for current destinations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where to find designer abayas in Abu Dhabi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bint Saeed serves customers in Abu Dhabi with online orders of designer-influenced, heritage-inspired abayas and modest clothing. Fabrics and details often reference Al Talli embroidery and Khous palm-frond weaving. Shipping options are shown at checkout.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the abaya trends for 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contemporary abaya trends often include cleaner silhouettes, heritage-inspired embroidery such as Al Talli, considered fabrics, and versatile layering. Bint Saeed releases seasonal collections aligned with these directions—see the shop for current pieces.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you ship luxury abayas to Dubai and Abu Dhabi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Bint Saeed ships within the UAE including Dubai, Abu Dhabi, Al Ain, Sharjah, Ras Al Khaimah, Fujairah, Ajman, and Umm Al Quwain. Shipping fees and timelines are confirmed at checkout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have summer and winter abaya collections?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Bint Saeed offers seasonal collections with lighter fabrics for warmer months and richer layers for cooler weather, subject to availability—see the shop and product pages.',
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
        text: 'Al Talli is a traditional Emirati embroidery technique recognized by UNESCO. Bint Saeed incorporates this heritage craft into designer abayas Abu Dhabi and luxury abayas Dubai.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Bint Saeed offer modest dresses and separates in addition to abayas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Bint Saeed’s collection includes heritage-inspired abayas alongside modest dresses, skirts, tops, and coordinated styling options—see the shop and accessories pages for current pieces.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Bint Saeed a UAE and GCC modest fashion brand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bint Saeed is based in the UAE with roots in Emirati craft traditions. The brand serves customers across UAE emirates and ships to multiple GCC countries; destinations and rates are shown at checkout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I find a heritage abaya inspired by UAE traditions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bint Saeed offers heritage-inspired abayas that reference Emirati craft such as Al Talli embroidery and Khous palm-frond weaving, alongside contemporary silhouettes in fabrics like silk and chiffon. Browse the shop for black abayas, lace abayas, open and formal styles, and regional delivery across the UAE and GCC.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Bint Saeed offer handmade abayas for customers in Saudi Arabia and Qatar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bint Saeed focuses on carefully finished, often handcrafted details within small-batch production. Customers in Saudi Arabia, Qatar, and other GCC countries can shop online where shipping is available—confirm destinations and delivery times at checkout.',
      },
    },
    {
      '@type': 'Question',
      name: 'I often discover abayas through department stores, luxury multi-brand retailers, or large online marketplaces—where can I buy Bint Saeed officially?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bint Saeed is an independent UAE heritage-led abaya brand. Shop the official collection at bintsaeed.com with delivery across the UAE and GCC (see checkout for destinations). We are not affiliated with third-party retailers unless we announce an authorized stockist on our own channels—when in doubt, purchase only through this official site.',
      },
    },
  ],
}

// WebPage JSON-LD — canonical public "home" entity is /home (brand-first title; URL signals for entity search).
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://bintsaeed.com/home#seo',
  url: 'https://bintsaeed.com/home',
  name: 'Bint Saeed | Luxury Abaya House Abu Dhabi',
  description:
    'Bint Saeed (bintsaeed.com): luxury abaya house in Abu Dhabi devoted to the daughter in every woman—heritage-led abayas and modest ready-to-wear with Al Talli embroidery and Khous palm-frond weaving; lace, silk, chiffon, formal and office styles. Serves the UAE, GCC, and Middle East modest-fashion shoppers; worldwide where offered.',
  mainEntity: {
    '@id': 'https://bintsaeed.com/#organization',
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://bintsaeed.com/og-image.png',
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.font-rozha', 'h1', 'h2'],
  },
  keywords: [
    // English - Core
    'luxury abaya UAE', 'abaya Abu Dhabi', 'elegant abayas', 'designer abaya', 'luxury modest fashion',
    'black abaya Dubai', 'modern abaya UAE', 'abaya', 'dubai abaya', 'dubai abayas', 'abaya style',
    'abaya brand', 'silk abaya', 'best abaya', 'abaya design', 'lace abaya',
    // English - Colors
    'purple abaya', 'green abaya', 'beige abaya', 'nude abaya', 'pink abaya', 'navy blue abaya',
    'silk purple abaya', 'silk green abaya', 'silk beige abaya', 'silk nude abaya', 'silk pink abaya', 'silk navy blue abaya', 'silk black abaya',
    'abaya trend 2026',
    'abaya trend 2027',
    'abaya 2027',
    'abaya trend 2028',
    'abaya 2028',
    'summer abaya',
    'winter abaya',
    'modest fashion',
    'modest wear',
    'modest dresses',
    'summer sets',
    'premium modest fashion',
    'UAE modest fashion',
    'GCC modest fashion',
    'abaya Dubai',
    'abaya Sharjah',
    'heritage abaya UAE',
    'Emirati heritage abaya',
    'black abaya',
    'lace abaya',
    'ruffled abaya',
    'abaya blazer',
    'formal abaya',
    'open abaya',
    'chiffon abaya',
    'blue abaya',
    'office abaya',
    'work abaya',
    'printed abaya',
    'traditional abaya',
    'arab abaya',
    'gcc abaya',
    'abu dhabi abaya',
    'dubai abaya',
    'riyadh abaya',
    'middle east abaya brands',
    // Arabic
    'عباية فاخرة الإمارات', 'عباية أبوظبي', 'عبايات أنيقة', 'عباية مصمم', 'أزياء محتشمة فاخرة',
    'عباية سوداء دبي', 'عباية عصرية الإمارات', 'عباية', 'عباية دبي', 'عبايات دبي', 'ستايل عباية',
    'ماركة عباية', 'عباية حرير', 'أفضل عباية', 'تصميم عباية', 'عباية دانتيل',
    'عباية بنفسجية', 'عباية خضراء', 'عباية بيج', 'عباية نود', 'عباية وردية', 'عباية زرقاء',
    'عباية حرير بنفسجية', 'عباية حرير خضراء', 'عباية حرير بيج', 'عباية حرير نود',
    // French
    'abaya de luxe EAU', 'abaya Abou Dhabi', 'abayas élégantes', 'abaya designer', 'mode modeste de luxe',
    'abaya noire Dubaï', 'abaya moderne EAU', 'abaya', 'abaya Dubaï', 'abayas Dubaï', 'style abaya',
    'marque abaya', 'abaya soie', 'meilleure abaya', 'design abaya', 'abaya dentelle',
    'abaya violette', 'abaya verte', 'abaya beige', 'abaya nude', 'abaya rose', 'abaya bleu marine',
    'abaya soie violette', 'abaya soie verte', 'abaya soie beige', 'abaya soie rose',
    // Italian
    'abaya lusso EAU', 'abaya Abu Dhabi', 'abaya eleganti', 'abaya designer', 'moda modesta lusso',
    'abaya nera Dubai', 'abaya moderna EAU', 'abaya', 'abaya Dubai', 'abaya Dubai', 'stile abaya',
    'marca abaya', 'abaya seta', 'migliore abaya', 'design abaya', 'abaya pizzo',
    'abaya viola', 'abaya verde', 'abaya beige', 'abaya nude', 'abaya rosa', 'abaya blu navy',
    'abaya seta viola', 'abaya seta verde', 'abaya seta beige', 'abaya seta rosa',
    // Russian
    'люкс абайя ОАЭ', 'абайя Абу-Даби', 'элегантные абайи', 'дизайнерская абайя', 'люкс скромная мода',
    'черная абайя Дубай', 'современная абайя ОАЭ', 'абайя', 'абайя Дубай', 'абайи Дубай', 'стиль абайя',
    'бренд абайя', 'шелковая абайя', 'лучшая абайя', 'дизайн абайя', 'кружевная абайя',
    'фиолетовая абайя', 'зеленая абайя', 'бежевая абайя', 'телесная абайя', 'розовая абайя', 'темно-синяя абайя',
    'шелковая фиолетовая абайя', 'шелковая зеленая абайя', 'шелковая бежевая абайя', 'шелковая розовая абайя',
    // Spanish
    'abaya de lujo EAU', 'abaya Abu Dhabi', 'abayas elegantes', 'abaya de diseñador', 'moda modesta de lujo',
    'abaya negra Dubái', 'abaya moderna EAU', 'abaya', 'abaya Dubái', 'abayas Dubái', 'estilo abaya',
    'marca abaya', 'abaya seda', 'mejor abaya', 'diseño abaya', 'abaya encaje',
    'abaya púrpura', 'abaya verde', 'abaya beige', 'abaya nude', 'abaya rosa', 'abaya azul marino',
    'abaya seda púrpura', 'abaya seda verde', 'abaya seda beige', 'abaya seda rosa',
    // Mandarin
    '奢华阿巴亚阿联酋', '阿巴亚阿布扎比', '优雅阿巴亚', '设计师阿巴亚', '奢华端庄时尚',
    '迪拜黑色阿巴亚', '现代阿巴亚阿联酋', '阿巴亚', '迪拜阿巴亚', '阿巴亚风格',
    '阿巴亚品牌', '丝绸阿巴亚', '最佳阿巴亚', '阿巴亚设计', '蕾丝阿巴亚',
    '紫色阿巴亚', '绿色阿巴亚', '米色阿巴亚', '裸色阿巴亚', '粉色阿巴亚', '藏青色阿巴亚',
    '丝绸紫色阿巴亚', '丝绸绿色阿巴亚', '丝绸米色阿巴亚', '丝绸粉色阿巴亚',
    // German
    'Luxus-Abaya VAE', 'Abaya Abu Dhabi', 'elegante Abayas', 'Designer-Abaya', 'Luxus bescheidene Mode',
    'schwarze Abaya Dubai', 'moderne Abaya VAE', 'Abaya', 'Abaya Dubai', 'Abayas Dubai', 'Abaya-Stil',
    'Abaya-Marke', 'Seiden-Abaya', 'beste Abaya', 'Abaya-Design', 'Spitzen-Abaya',
    'lila Abaya', 'grüne Abaya', 'beige Abaya', 'nude Abaya', 'rosa Abaya', 'dunkelblaue Abaya',
    'Seiden-Abaya lila', 'Seiden-Abaya grün', 'Seiden-Abaya beige', 'Seiden-Abaya rosa',
    // Dutch
    'luxe abaya VAE', 'abaya Abu Dhabi', 'elegante abaya', 'designer abaya', 'luxe bescheiden mode',
    'zwarte abaya Dubai', 'moderne abaya VAE',
    // Portuguese
    'abaya de luxo EAU', 'abaya Abu Dhabi', 'abayas elegantes', 'abaya designer', 'moda modesta de luxo',
    'abaya preta Dubai', 'abaya moderna EAU',
  ].join(', '),
  about: [
    {
      '@type': 'Thing',
      name: 'Luxury abayas UAE',
      description: 'Bint Saeed offers luxury abayas UAE with heritage craftsmanship.',
    },
    {
      '@type': 'Thing',
      name: 'Designer abayas Abu Dhabi',
      description: 'Designer abayas Abu Dhabi by Bint Saeed. Luxury modest fashion.',
    },
    {
      '@type': 'Thing',
      name: 'Luxury abayas Dubai',
      description: 'Luxury abayas Dubai. Bint Saeed designer abayas.',
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{
    '@type': 'ListItem',
    position: 1,
    name: 'Bint Saeed',
    item: 'https://bintsaeed.com/home',
  }],
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': 'https://bintsaeed.com/shop#collection',
  name: 'Luxury Abayas UAE | Designer Abayas Abu Dhabi | Bint Saeed',
  description: 'Luxury abayas UAE. Designer abayas Abu Dhabi. Silk abayas, lace abayas, heritage Al Talli embroidery. Bint Saeed luxury modest fashion collection.',
  url: 'https://bintsaeed.com/shop',
  numberOfItems: 50,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Luxury Abayas UAE', url: 'https://bintsaeed.com/shop' },
    { '@type': 'ListItem', position: 2, name: 'Designer Abayas Abu Dhabi', url: 'https://bintsaeed.com/shop' },
    { '@type': 'ListItem', position: 3, name: 'Luxury Abayas Dubai', url: 'https://bintsaeed.com/shop' },
    { '@type': 'ListItem', position: 4, name: 'Silk Abayas', url: 'https://bintsaeed.com/shop' },
    { '@type': 'ListItem', position: 5, name: 'Black Abaya Dubai', url: 'https://bintsaeed.com/shop' },
  ],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getServerLocale()
  const langAttr = locale === 'zh' ? 'zh-CN' : locale === 'en' ? 'en' : locale
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={langAttr} dir={dir}>
      <head>
        {/* Google Tag Manager - as high in head as possible */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PS953D4R');`,
          }}
        />
        {/* End Google Tag Manager */}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        
        {/* Google tag (gtag.js) with Consent Mode */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4C9F2RRTVJ"
          strategy="afterInteractive"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
              });
              try {
                var c = typeof localStorage !== 'undefined' && localStorage.getItem('cookieConsent');
                if (c === 'all') {
                  gtag('consent', 'update', {
                    'analytics_storage': 'granted',
                    'ad_storage': 'granted',
                    'ad_user_data': 'granted',
                    'ad_personalization': 'granted'
                  });
                }
              } catch (e) {}
              gtag('config', 'G-4C9F2RRTVJ');
            `,
          }}
        />
        
        {/* Bing Webmaster verification */}
        <meta name="msvalidate.01" content="7BA982E3BEF4E04896CC719115678C24" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
      </head>
      <body className="min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PS953D4R"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LanguageProvider initialLocale={locale}>
          <CurrencyProvider>
            <AnalyticsProvider>
              <ContentProtection />
              <AnalyticsTracker />
              <LayoutWrapper>
                {children}
              </LayoutWrapper>
              <Toaster 
                position="bottom-right"
                toastOptions={{
                  style: {
                    background:
                      'linear-gradient(135deg, rgba(59,0,20,0.96) 0%, rgba(45,20,30,0.94) 100%)',
                    color: '#f8f4f1',
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
            </AnalyticsProvider>
          </CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
