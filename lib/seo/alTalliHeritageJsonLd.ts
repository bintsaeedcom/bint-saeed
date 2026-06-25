import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'
import { schemaInLanguageForLocale } from '@/lib/i18n/bcp47'
import { getAlTalliHeritageFaqItem } from '@/lib/products/alTalliHeritageFaqI18n'
import {
  AL_TALLI_FEATURED_PRODUCTS,
  alTalliHeritagePageUrl,
  alTalliPrimaryImageUrl,
  buildAlTalliDefinedTermNode,
} from '@/lib/seo/alTalliDiscovery'
import { getLocalizedAlTalliDiscoveryKeywords } from '@/lib/products/alTalliDiscoveryKeywordsI18n'

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

const PAGE_DESCRIPTION: Record<AppLocale, string> = {
  en: 'What is Al Talli? Discover UNESCO-listed Emirati embroidery — its history, technique, and how Bint Saeed brings Al Talli to contemporary abayas and dresses made in Abu Dhabi. Shop designer Al Talli fashion.',
  ar: 'ما هو التلي؟ اكتشفي تطريز التلي الإماراتي المدرج في اليونسكو — تاريخه وتقنيته وكيف تعيد Bint Saeed إحياء التلي في عبايات وفساتين معاصرة من أبوظبي.',
  fr: 'Qu’est-ce que l’Al Talli ? Découvrez la broderie émiratie inscrite à l’UNESCO et les abayas contemporaines Bint Saeed à Abu Dhabi.',
  it: 'Che cos’è Al Talli? Scopri il ricamo emiratino UNESCO e le abaya contemporanee Bint Saeed ad Abu Dhabi.',
  es: '¿Qué es Al Talli? Descubre el bordado emiratí de la UNESCO y las abayas contemporáneas Bint Saeed en Abu Dabi.',
  ru: 'Что такое Al Talli? Узнайте об эмиратской вышивке ЮНЕСКО и современных абайях Bint Saeed из Абу-Даби.',
  zh: '什么是 Al Talli？了解联合国教科文组织阿联酋刺绣与 Bint Saeed 阿布扎比当代长袍。',
  de: 'Was ist Al Talli? UNESCO-emiratische Stickerei und zeitgenössische Abayas von Bint Saeed aus Abu Dhabi.',
  nl: 'Wat is Al Talli? UNESCO Emiratisch borduurwerk en eigentijdse abaya’s van Bint Saeed uit Abu Dhabi.',
  pt: 'O que é Al Talli? Bordado emirati UNESCO e abayas contemporâneas Bint Saeed em Abu Dhabi.',
  id: 'Apa itu Al Talli? Sulaman Emirati UNESCO dan abaya kontemporer Bint Saeed dari Abu Dhabi.',
  ms: 'Apakah Al Talli? Sulaman Emirati UNESCO dan abaya kontemporari Bint Saeed dari Abu Dhabi.',
}

const FAQ_COMMERCE: Record<AppLocale, { q: string; a: string }> = {
  en: {
    q: 'Where can I buy Al Talli fashion and abayas?',
    a: 'Shop Al Talli designs at Bint Saeed Abu Dhabi — including the Covent Garden Abaya with wide Al Talli woven cuffs, the Hampstead Dress, and the Soho Set. Each piece features authentic Al Talli heritage craftsmanship reimagined for contemporary wardrobes worldwide.',
  },
  ar: {
    q: 'أين أشتري أزياء وعبايات التلي؟',
    a: 'تسوقي تصاميم التلي من Bint Saeed أبوظبي — بما فيها عباية Covent Garden بأساور التلي المنسوج، وفستان Hampstead، ومجموعة Soho.',
  },
  fr: {
    q: 'Où acheter des abayas et mode Al Talli ?',
    a: 'Découvrez les créations Al Talli de Bint Saeed à Abu Dhabi — Abaya Covent Garden, robe Hampstead et Soho Set.',
  },
  it: {
    q: 'Dove acquistare abaya e moda Al Talli?',
    a: 'Acquista i design Al Talli di Bint Saeed ad Abu Dhabi — Covent Garden Abaya, Hampstead Dress e Soho Set.',
  },
  es: {
    q: '¿Dónde comprar abayas y moda Al Talli?',
    a: 'Compra diseños Al Talli de Bint Saeed en Abu Dabi — Covent Garden Abaya, Hampstead Dress y Soho Set.',
  },
  ru: {
    q: 'Где купить абайи и моду Al Talli?',
    a: 'Коллекции Al Talli от Bint Saeed в Абу-Даби — Covent Garden Abaya, Hampstead Dress и Soho Set.',
  },
  zh: {
    q: '在哪里购买 Al Talli 时尚与长袍？',
    a: '在阿布扎比 Bint Saeed 选购 Al Talli 设计 — Covent Garden 长袍、Hampstead 连衣裙与 Soho 套装。',
  },
  de: {
    q: 'Wo kann ich Al-Talli-Mode und Abayas kaufen?',
    a: 'Al-Talli-Designs von Bint Saeed in Abu Dhabi — Covent Garden Abaya, Hampstead Dress und Soho Set.',
  },
  nl: {
    q: 'Waar koop ik Al Talli mode en abaya’s?',
    a: 'Al Talli-designs van Bint Saeed in Abu Dhabi — Covent Garden Abaya, Hampstead Dress en Soho Set.',
  },
  pt: {
    q: 'Onde comprar moda e abayas Al Talli?',
    a: 'Designs Al Talli da Bint Saeed em Abu Dhabi — Covent Garden Abaya, Hampstead Dress e Soho Set.',
  },
  id: {
    q: 'Di mana membeli fashion dan abaya Al Talli?',
    a: 'Desain Al Talli Bint Saeed Abu Dhabi — Covent Garden Abaya, Hampstead Dress, dan Soho Set.',
  },
  ms: {
    q: 'Di mana membeli fesyen dan abaya Al Talli?',
    a: 'Reka bentuk Al Talli Bint Saeed Abu Dhabi — Covent Garden Abaya, Hampstead Dress, dan Soho Set.',
  },
}

const FAQ_UNESCO: Record<AppLocale, { q: string; a: string }> = {
  en: {
    q: 'Is Al Talli UNESCO heritage?',
    a: 'Yes. In 2022, Al Talli was inscribed on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity as a treasured Emirati embroidery tradition of the United Arab Emirates.',
  },
  ar: {
    q: 'هل التلي تراث اليونسكو؟',
    a: 'نعم. في عام 2022، أُدرج التلي في القائمة التمثيلية للتراث الثقافي غير المادي للبشرية لدى اليونسكو كتقليد تطريز إماراتي عريق.',
  },
  fr: {
    q: 'Al Talli est-il un patrimoine UNESCO ?',
    a: 'Oui. En 2022, l’Al Talli a été inscrit sur la liste représentative du patrimoine culturel immatériel de l’humanité de l’UNESCO.',
  },
  it: {
    q: 'Al Talli è patrimonio UNESCO?',
    a: 'Sì. Nel 2022 Al Talli è stato iscritto nella lista rappresentativa del patrimonio culturale immateriale dell’umanità UNESCO.',
  },
  es: {
    q: '¿Es Al Talli patrimonio de la UNESCO?',
    a: 'Sí. En 2022, Al Talli fue inscrito en la Lista Representativa del Patrimonio Cultural Inmaterial de la Humanidad de la UNESCO.',
  },
  ru: {
    q: 'Является ли Al Talli наследием ЮНЕСКО?',
    a: 'Да. В 2022 году Al Talli внесён в Репрезентативный список нематериального культурного наследия человечества ЮНЕСКО.',
  },
  zh: {
    q: 'Al Talli 是否为联合国教科文组织遗产？',
    a: '是的。2022年，Al Talli 列入联合国教科文组织人类非物质文化遗产代表作名录。',
  },
  de: {
    q: 'Ist Al Talli UNESCO-Erbe?',
    a: 'Ja. 2022 wurde Al Talli in die Repräsentative Liste des immateriellen Kulturerbes der Menschheit der UNESCO aufgenommen.',
  },
  nl: {
    q: 'Is Al Talli UNESCO-erfgoed?',
    a: 'Ja. In 2022 werd Al Talli opgenomen op de representatieve lijst van immaterieel cultureel erfgoed van de mensheid van UNESCO.',
  },
  pt: {
    q: 'Al Talli é património UNESCO?',
    a: 'Sim. Em 2022, Al Talli foi inscrito na Lista Representativa do Património Cultural Imaterial da Humanidade da UNESCO.',
  },
  id: {
    q: 'Apakah Al Talli warisan UNESCO?',
    a: 'Ya. Pada 2022, Al Talli terdaftar dalam Daftar Perwakilan Warisan Budaya Takbenda Manusia UNESCO.',
  },
  ms: {
    q: 'Adakah Al Talli warisan UNESCO?',
    a: 'Ya. Pada 2022, Al Talli disenaraikan dalam Senarai Wakil Warisan Budaya Tidak Ketara Manusia UNESCO.',
  },
}

function productUrl(locale: AppLocale, path: string): string {
  return `${SITE}${localizedPath(locale, path)}`
}

/** Canonical JSON-LD for `/heritage/al-talli` — targets informational + commercial Al Talli queries. */
export function buildAlTalliHeritageJsonLd(locale: AppLocale = 'en') {
  const pageUrl = alTalliHeritagePageUrl(locale)
  const lang = schemaInLanguageForLocale(locale)
  const imageUrl = alTalliPrimaryImageUrl()
  const definedTerm = buildAlTalliDefinedTermNode(locale)
  const keywords = getLocalizedAlTalliDiscoveryKeywords(locale).join(', ')
  const faqItems = [
    getAlTalliHeritageFaqItem(locale),
    {
      question: (FAQ_UNESCO[locale] ?? FAQ_UNESCO.en).q,
      answer: (FAQ_UNESCO[locale] ?? FAQ_UNESCO.en).a,
    },
    {
      question: (FAQ_COMMERCE[locale] ?? FAQ_COMMERCE.en).q,
      answer: (FAQ_COMMERCE[locale] ?? FAQ_COMMERCE.en).a,
    },
  ]

  const heroImage = {
    '@type': 'ImageObject' as const,
    '@id': `${imageUrl}#image`,
    url: imageUrl,
    contentUrl: imageUrl,
    name: 'Al Talli — Emirati heritage embroidery by Bint Saeed Abu Dhabi',
    caption: 'Traditional Al Talli trim celebrating Emirati UNESCO heritage craftsmanship',
    representativeOfPage: true,
  }

  const featuredItemList = {
    '@type': 'ItemList' as const,
    '@id': `${pageUrl}#al-talli-collection`,
    name: 'Bint Saeed Al Talli Collection',
    description: 'Designer abayas and dresses featuring authentic Al Talli heritage trim — made in Abu Dhabi, UAE.',
    itemListElement: AL_TALLI_FEATURED_PRODUCTS.map((item, index) => ({
      '@type': 'ListItem' as const,
      position: index + 1,
      item: {
        '@type': 'Product' as const,
        name: item.name,
        description: item.description,
        url: productUrl(locale, item.path),
        brand: { '@type': 'Brand', name: 'Bint Saeed' },
        category: 'Al Talli fashion',
        countryOfOrigin: { '@type': 'Country', name: 'United Arab Emirates' },
      },
    })),
  }

  const webpage = {
    '@type': 'WebPage' as const,
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: locale === 'ar' ? 'التلي | Bint Saeed' : 'Al Talli Embroidery | UNESCO Emirati Heritage | Bint Saeed',
    description: PAGE_DESCRIPTION[locale] ?? PAGE_DESCRIPTION.en,
    keywords,
    inLanguage: lang,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      name: 'Bint Saeed',
      url: SITE,
    },
    about: definedTerm,
    mainEntity: definedTerm,
    primaryImageOfPage: heroImage,
    image: heroImage,
    publisher: {
      '@type': 'Organization',
      name: 'Bint Saeed',
      url: SITE,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Abu Dhabi',
        addressCountry: 'AE',
      },
    },
    hasPart: featuredItemList,
    potentialAction: [
      {
        '@type': 'ViewAction',
        name: 'Shop Al Talli Collection',
        target: productUrl(locale, '/shop/covent-garden-abaya'),
      },
      {
        '@type': 'ReadAction',
        name: 'Explore The Codes — Al Talli House Code',
        target: productUrl(locale, '/the-codes'),
      },
    ],
  }

  const faqPage = {
    '@type': 'FAQPage' as const,
    '@id': `${pageUrl}#faq`,
    url: `${pageUrl}#faq`,
    inLanguage: lang,
    isPartOf: { '@id': `${pageUrl}#webpage` },
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const breadcrumb = {
    '@type': 'BreadcrumbList' as const,
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: productUrl(locale, '/home') },
      { '@type': 'ListItem', position: 2, name: 'Heritage', item: productUrl(locale, '/heritage') },
      { '@type': 'ListItem', position: 3, name: 'Al Talli', item: pageUrl },
    ],
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [webpage, definedTerm, featuredItemList, faqPage, breadcrumb],
  }
}
