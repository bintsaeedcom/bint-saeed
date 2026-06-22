import type { AppLocale } from '@/lib/i18n/routing'
import { schemaInLanguageForLocale } from '@/lib/i18n/bcp47'
import { getBrandTagline } from '@/lib/brand/brandPositioning'

/** Long-form Organization description for JSON-LD (per locale). */
const ORGANIZATION_DESCRIPTION: Record<AppLocale, string> = {
  en:
    'Bint Saeed is a contemporary house from Abu Dhabi, United Arab Emirates, devoted to evolving lifestyles. Founded in 2026, the house creates abayas, kaftans, dresses, jewellery and lifestyle pieces shaped by Emirati design codes including Al Talli craftsmanship and Khous weaving. Designed for contemporary women who move between cultures and environments while remaining connected to their origin. Bint Saeed represents a contemporary expression of Abu Dhabi design, combining cultural depth, refined materials, and modern construction.',

  ar:
    'Bint Saeed دار معاصرة من أبوظبي، الإمارات العربية المتحدة، مكرّسة لأسلوب حياة يتطوّر. تأسست عام 2026 وتبتكر عباءات وقفاطين وفساتين ومجوهرات وقطع أسلوب حياة مستندة إلى الرموز التصميمية الإماراتية بما في ذلك حرفية التلي ونسيج الخوص. صُممت للمرأة المعاصرة التي تتحرّك بين الثقافات والبيئات مع بقاءها متصلة بأصلها. تمثّل Bint Saeed تعبيراً معاصراً عن تصميم أبوظبي، يجمع بين العمق الثقافي والمواد الراقية والبناء الحديث.',

  fr:
    'Bint Saeed est une maison contemporaine basée à Abou Dabi, aux Émirats arabes unis, au service de modes de vie en évolution. Fondée en 2026, elle crée des abayas, des caftans, des robes, des bijoux et des pièces lifestyle façonnées par les codes de design émiratis, notamment l’artisanat Al Talli et le tissage Khous. Pensée pour les femmes contemporaines qui évoluent entre cultures et environnements tout en restant connectées à leur origine. Bint Saeed incarne une expression contemporaine du design d’Abou Dabi, alliant profondeur culturelle, matières raffinées et construction moderne.',

  it:
    'Bint Saeed è una casa contemporanea con sede ad Abu Dhabi, negli Emirati Arabi Uniti, dedicata a stili di vita in evoluzione. Fondata nel 2026, crea abaya, kaftan, abiti, gioielli e pezzi lifestyle modellati sui codici di design emiratini, tra cui l’artigianato Al Talli e la tessitura Khous. Pensata per donne contemporanee che si muovono tra culture e contesti restando legate alle proprie origini. Bint Saeed esprime un linguaggio di design contemporaneo di Abu Dhabi, unendo profondità culturale, materiali raffinati e costruzione moderna.',

  es:
    'Bint Saeed es una casa contemporánea con sede en Abu Dabi, Emiratos Árabes Unidos, dedicada a estilos de vida en evolución. Fundada en 2026, crea abayas, caftanes, vestidos, joyas y piezas lifestyle moldeadas por códigos de diseño emiratíes, incluida la artesanía Al Talli y el tejido Khous. Diseñada para mujeres contemporáneas que se mueven entre culturas y entornos manteniendo vínculo con su origen. Bint Saeed representa una expresión contemporánea del diseño de Abu Dabi, combinando profundidad cultural, materiales refinados y construcción moderna.',

  ru:
    'Bint Saeed — современный дом из Абу-Даби, Объединённые Арабские Эмираты, посвящённый меняющемуся образу жизни. Основан в 2026 году и создаёт абайи, кафтаны, платья, украшения и lifestyle-вещи в духе эмиратских дизайн-кодов, включая ремесло Al Talli и плетение Khous. Создан для современных женщин, которые живут между культурами и средами, оставаясь связанными с корнями. Bint Saeed выражает современный дизайн-язык Абу-Даби, сочетая культурную глубину, изысканные материалы и современную конструкцию.',

  zh:
    'Bint Saeed 是一家源自阿布扎比、阿拉伯联合酋长国的当代品牌屋，致力于不断演进的生活方式。创立于 2026 年，打造体现阿联酋设计规范的阿巴亚、长袍、连衣裙、珠宝与生活方式单品，涵盖 Al Talli 工艺与 Khous 编织传统。面向在不同文化与环境间行走、仍与根源相连的现代女性。Bint Saeed 呈现阿布扎比当代设计表达，融合文化底蕴、考究材质与现代结构。',

  de:
    'Bint Saeed ist ein zeitgenössisches Haus aus Abu Dhabi, Vereinigte Arabische Emirate, dem sich wandelnden Lebensstil gewidmet. 2026 gegründet, schafft es Abayas, Kaftane, Kleider, Schmuck und Lifestyle-Pieces nach emiratischen Designcodes — darunter Al-Talli-Handwerk und Khous-Weberei. Gedacht für zeitgenössische Frauen, die zwischen Kulturen und Welten wechseln und dennoch mit ihrer Herkunft verbunden bleiben. Bint Saeed steht für einen zeitgenössischen Designausdruck Abu Dhabis mit kultureller Tiefe, edlen Materialien und moderner Konstruktion.',

  nl:
    'Bint Saeed is een eigentijds huis uit Abu Dhabi, Verenigde Arabische Emiraten, toegewijd aan veranderende levensstijlen. Opgericht in 2026 creëert het abaya’s, kaftans, jurken, sieraden en lifestyle-stukken vol emiratische designcodes, waaronder Al Talli-vakmanschap en Khous-weeftechnieken. Bedoeld voor hedendaagse vrouwen die tussen culturen en omgevingen bewegen en verbonden blijven met hun oorsprong. Bint Saeed vertegenwoordigt een eigentijdse designuitdrukking van Abu Dhabi, met culturele diepgang, verfijnde materialen en moderne constructie.',

  pt:
    'A Bint Saeed é uma casa contemporânea sediada em Abu Dhabi, Emirados Árabes Unidos, dedicada a estilos de vida em evolução. Fundada em 2026, cria abayas, kaftans, vestidos, joias e peças lifestyle moldadas pelos códigos de design emiradenses, incluindo o ofício Al Talli e a tecelagem Khous. Pensada para mulheres contemporâneas que transitam entre culturas e ambientes mantendo-se ligadas à origem. A Bint Saeed representa uma expressão contemporânea do design de Abu Dhabi, combinando profundidade cultural, materiais refinados e construção moderna.',
}

const SAME_AS = [
  'https://www.instagram.com/bintsaeed_brand/',
  'https://www.tiktok.com/@bintsaeed_brand',
  'https://www.snapchat.com/add/bintsaeed_brand',
  'https://x.com/bintsaeed_brand',
  'https://www.pinterest.com/bintsaeed_brand/',
] as const

/** Organization JSON-LD aligned with homepage locale for description disambiguation. */
export function buildOrganizationJsonLd(locale: AppLocale) {
  const description = ORGANIZATION_DESCRIPTION[locale]

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.bintsaeed.com/#organization',
    name: 'Bint Saeed',
    alternateName: [
      'Bint Saeed Brand',
      'Bint Saeed Abu Dhabi',
      'Bint Saeed Contemporary House',
      'Bint Saeed Luxury Abayas',
      'Bint Saeed Luxury Abayas UAE',
      'Bint Saeed Designer Abayas Abu Dhabi',
      'Bint Saeed Designer Abayas Dubai',
    ],
    url: 'https://www.bintsaeed.com',
    email: 'info@bintsaeed.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.bintsaeed.com/og-image.png',
      width: 1200,
      height: 630,
    },
    description,
    slogan: getBrandTagline(locale),
    inLanguage: schemaInLanguageForLocale(locale),
    /** Abu Dhabi, UAE — explicit place for entity clarity (AI + Google). */
    location: {
      '@type': 'Place',
      name: 'Abu Dhabi, UAE',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Abu Dhabi',
        addressRegion: 'Abu Dhabi',
        addressCountry: 'AE',
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Category',
        value: 'Luxury abaya house',
      },
    ],
    foundingDate: '2026',
    knowsAbout: [
      'Luxury abaya house',
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
    founders: [
      {
        '@type': 'Person',
        name: 'Bint Saeed',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Abu Dhabi',
      addressLocality: 'Abu Dhabi',
      addressRegion: 'Abu Dhabi',
      addressCountry: 'AE',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'info@bintsaeed.com',
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
      },
      {
        '@type': 'ContactPoint',
        email: 'legal@bintsaeed.com',
        contactType: 'legal',
      },
    ],
    sameAs: [...SAME_AS],
    brand: {
      '@type': 'Brand',
      name: 'Bint Saeed',
      slogan: getBrandTagline(locale),
    },
  }
}
