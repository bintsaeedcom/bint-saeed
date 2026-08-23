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
  en: 'Discover Al Talli, the traditional Emirati craft woven with metallic threads by generations of women, and how its heritage continues in contemporary fashion.',
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

const FAQ_DEFINITION: Record<AppLocale, { q: string; a: string }> = {
  en: {
    q: 'What is Al Talli?',
    a: 'Al Talli is a traditional Emirati decorative craft of hand-worked bands in metallic and coloured thread, historically used to adorn women’s clothing in the United Arab Emirates. Passed between generations of women, it remains a recognisable expression of Emirati craftsmanship and was inscribed on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity in 2022.',
  },
  ar: {
    q: 'ما هو التلي؟',
    a: 'التلي حرفة زخرفية إماراتية تقليدية من أشرطة دقيقة بخيوط معدنية وملونة، استُخدمت تاريخياً لتزيين ملابس النساء في الإمارات. توارثتها أجيال من النساء، وفي عام 2022 أُدرجت مهاراته على قائمة اليونسكو للتراث الثقافي غير المادي.',
  },
  fr: {
    q: 'Qu’est-ce que l’Al Talli ?',
    a: 'L’Al Talli est un artisanat décoratif émirati traditionnel de bandes de fils métalliques et colorés, historiquement utilisé pour orner les vêtements féminins aux Émirats arabes unis. Inscrit en 2022 sur la Liste représentative du patrimoine culturel immatériel de l’humanité de l’UNESCO.',
  },
  it: {
    q: 'Che cos’è Al Talli?',
    a: 'Al Talli è un artigianato decorativo emiratino tradizionale di bande in filo metallico e colorato, storicamente usato per adornare gli abiti femminili negli Emirati Arabi Uniti. Iscritto nel 2022 nella Lista rappresentativa del patrimonio culturale immateriale dell’UNESCO.',
  },
  es: {
    q: '¿Qué es Al Talli?',
    a: 'Al Talli es un oficio decorativo emiratí tradicional de bandas de hilo metálico y de color, históricamente usado para adornar la ropa femenina en los Emiratos Árabes Unidos. Inscrito en 2022 en la Lista Representativa del Patrimonio Cultural Inmaterial de la UNESCO.',
  },
  ru: {
    q: 'Что такое Al Talli?',
    a: 'Al Talli — традиционное эмиратское декоративное ремесло: ручные ленты из металлических и цветных нитей, исторически украшавшие женскую одежду в ОАЭ. В 2022 году внесено в Репрезентативный список нематериального культурного наследия ЮНЕСКО.',
  },
  zh: {
    q: '什么是 Al Talli？',
    a: 'Al Talli 是阿联酋传统装饰工艺，以金属线与彩色线手工织成饰带，历史上用于点缀女性服饰。2022年列入联合国教科文组织人类非物质文化遗产代表作名录。',
  },
  de: {
    q: 'Was ist Al Talli?',
    a: 'Al Talli ist ein traditionelles emiratisches Dekorhandwerk aus handgearbeiteten Bändern aus metallischen und farbigen Fäden, historisch zur Verzierung von Frauenkleidung in den VAE. 2022 in die Repräsentative Liste des immateriellen Kulturerbes der UNESCO aufgenommen.',
  },
  nl: {
    q: 'Wat is Al Talli?',
    a: 'Al Talli is een traditioneel Emiratisch decoratief ambacht van handgewerkte banden in metallische en gekleurde draad, historisch gebruikt om dameskleding in de VAE te sieren. In 2022 opgenomen op de representatieve lijst van immaterieel erfgoed van UNESCO.',
  },
  pt: {
    q: 'O que é Al Talli?',
    a: 'Al Talli é um ofício decorativo emirati tradicional de faixas em fio metálico e colorido, historicamente usadas para adornar o vestuário feminino nos Emirados Árabes Unidos. Inscrito em 2022 na Lista Representativa do Património Cultural Imaterial da UNESCO.',
  },
  id: {
    q: 'Apa itu Al Talli?',
    a: 'Al Talli adalah kerajinan dekoratif tradisional Emirat berupa pita benang metalik dan berwarna, historis digunakan untuk menghias pakaian wanita di UEA. Pada 2022 masuk Daftar Representatif Warisan Budaya Takbenda UNESCO.',
  },
  ms: {
    q: 'Apakah Al Talli?',
    a: 'Al Talli ialah kraf hiasan tradisional Emirati berupa jalur benang logam dan berwarna, historinya digunakan untuk menghias pakaian wanita di UAE. Pada 2022 disenaraikan dalam Senarai Wakil Warisan Budaya Tidak Ketara UNESCO.',
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
    {
      question: (FAQ_DEFINITION[locale] ?? FAQ_DEFINITION.en).q,
      answer: (FAQ_DEFINITION[locale] ?? FAQ_DEFINITION.en).a,
    },
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

  const today = new Date().toISOString().slice(0, 10)

  const heroImage = {
    '@type': 'ImageObject' as const,
    '@id': `${imageUrl}#image`,
    url: imageUrl,
    contentUrl: imageUrl,
    name: 'Al Talli embroidery abaya detail — Emirati UNESCO heritage craft | Bint Saeed Abu Dhabi',
    caption:
      'Navy Bint Saeed abaya detail with gold Al Talli metallic embroidery — Emirati heritage craft, Abu Dhabi',
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
    '@type': ['WebPage', 'Article'] as const,
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: locale === 'ar' ? 'التلي | Bint Saeed' : 'Al Talli Embroidery | UNESCO Emirati Heritage | Bint Saeed',
    headline: locale === 'ar' ? 'التلي: حرفة إماراتية نسجتها الأجيال' : 'Al Talli: The Emirati Craft Woven Through Generations',
    alternativeHeadline: locale === 'ar' ? 'ما هو التلي؟' : 'What is Al Talli?',
    description: PAGE_DESCRIPTION[locale] ?? PAGE_DESCRIPTION.en,
    abstract: PAGE_DESCRIPTION[locale] ?? PAGE_DESCRIPTION.en,
    keywords,
    inLanguage: lang,
    datePublished: '2026-08-23',
    dateModified: today,
    isAccessibleForFree: true,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      name: 'Bint Saeed',
      url: SITE,
    },
    about: definedTerm,
    mentions: [
      definedTerm,
      {
        '@type': 'TouristDestination',
        name: 'Abu Dhabi',
        description:
          'Capital of the United Arab Emirates and a destination for Emirati heritage crafts, including living Al Talli practice at cultural sites such as Qasr Al Hosn and the House of Artisans.',
        containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' },
        touristType: ['Cultural tourism', 'Heritage travellers'],
      },
      {
        '@type': 'TouristAttraction',
        name: 'Qasr Al Hosn',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Abu Dhabi',
          addressCountry: 'AE',
        },
      },
      {
        '@type': 'TouristAttraction',
        name: 'House of Artisans',
        description: 'Abu Dhabi cultural institution sharing traditional Emirati crafts including Al Talli.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Abu Dhabi',
          addressCountry: 'AE',
        },
      },
      {
        '@type': 'DefinedTerm',
        name: 'Middle Eastern crafts',
        alternateName: ['Middle Eastern heritage', 'Middle East crafts', 'Gulf heritage crafts'],
        description:
          'Traditional craft practices of the Middle East, including Emirati Al Talli embroidery from the United Arab Emirates.',
        url: pageUrl,
      },
      {
        '@type': 'Organization',
        name: 'UNESCO',
        sameAs: 'https://www.unesco.org/',
      },
    ],
    mainEntity: definedTerm,
    primaryImageOfPage: heroImage,
    image: heroImage,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [
        '#al-talli-definition',
        '#al-talli-unesco',
        '#al-talli-abu-dhabi',
        '[data-ai-summary] h2',
        '[data-ai-summary] p',
        'h1',
      ],
    },
    citation: `${SITE}/llms/al-talli.txt`,
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
    author: {
      '@type': 'Organization',
      name: 'Bint Saeed',
      url: SITE,
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
      {
        '@type': 'ReadAction',
        name: 'Al Talli AI citation brief',
        target: `${SITE}/llms/al-talli.txt`,
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
