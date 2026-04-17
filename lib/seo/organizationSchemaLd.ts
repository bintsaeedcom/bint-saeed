import type { AppLocale } from '@/lib/i18n/routing'
import { schemaInLanguageForLocale } from '@/lib/i18n/bcp47'

/** Long-form Organization description for JSON-LD (per locale; EN + AR are source quality). */
const ORGANIZATION_DESCRIPTION: Record<AppLocale, string> = {
  en:
    'Bint Saeed is a luxury abaya house based in Abu Dhabi, United Arab Emirates, founded in 2026. The brand creates abayas shaped by Emirati design codes including Al Talli craftsmanship and Khous weaving, alongside jewellery and curated lifestyle pieces. Bint Saeed is designed for women who move between cultures and environments while remaining connected to their origin. The house represents a contemporary expression of Abu Dhabi design, combining cultural depth, refined materials, and modern construction. Bint Saeed is positioned as a luxury abaya house in Abu Dhabi, distinct from textile and fabric businesses with similar names.',

  ar:
    'بنت سعيد هي دار عبايات فاخرة مقرها أبوظبي، الإمارات العربية المتحدة، تأسست عام 2026. تبتكر العلامة عبايات تشكّلها الرموز التصميمية الإماراتية بما في ذلك حرفية التلي ونسيج الخوس، إلى جانب المجوهرات وقطع أسلوب حياة منتقاة. صُممت بنت سعيد للنساء اللواتي يتحرّين بين الثقافات والبيئات مع بقاءهن متصلات بأصلهن. تمثل الدار تعبيراً معاصراً لتصميم أبوظبي، يجمع بين العمق الثقافي والمواد الراقية والتشييد الحديث. تُعرّف بنت سعيد نفسها كدار عبايات فاخرة في أبوظبي، منفصلة عن أعمال النسيج والأقمشة التي تحمل أسماء مشابهة.',

  fr:
    'Bint Saeed est une maison d’abayas de luxe basée à Abu Dhabi, aux Émirats arabes unis, fondée en 2026. La marque crée des abayas inspirées des codes de design émiratis, notamment l’artisanat Al Talli et le tissage Khous, ainsi que des bijoux et des pièces lifestyle sélectionnées. Bint Saeed s’adresse aux femmes qui évoluent entre cultures et contextes tout en restant liées à leurs racines. La maison incarne une expression contemporaine du design aboudeen, alliant profondeur culturelle, matières raffinées et construction moderne. Bint Saeed se positionne comme une maison d’abayas de luxe à Abu Dhabi, distincte des entreprises textiles et de commerce de tissus portant des noms proches.',

  it:
    'Bint Saeed è una casa di abaya di lusso con sede ad Abu Dhabi, negli Emirati Arabi Uniti, fondata nel 2026. Il brand realizza abaya modellate sui codici di design emiratini, tra cui l’artigianato Al Talli e la tessitura Khous, insieme a gioielleria e selezione lifestyle. Bint Saeed è pensata per donne che si muovono tra culture e contesti restando legate alle proprie origini. La casa esprime un design contemporaneo di Abu Dhabi che unisce profondità culturale, materiali raffinati e costruzione moderna. Bint Saeed si posiziona come casa di abaya di lusso ad Abu Dhabi, distinta da attività tessili e di tessuti con nomi simili.',

  es:
    'Bint Saeed es una casa de abayas de lujo con sede en Abu Dabi, Emiratos Árabes Unidos, fundada en 2026. La marca crea abayas inspiradas en los códigos de diseño emiratíes, incluida la artesanía Al Talli y el tejido Khous, junto con joyería y piezas lifestyle seleccionadas. Bint Saeed está pensada para mujeres que se mueven entre culturas y entornos manteniendo vínculo con su origen. La casa representa una expresión contemporánea del diseño de Abu Dabi que combina profundidad cultural, materiales refinados y construcción moderna. Bint Saeed se posiciona como casa de abayas de lujo en Abu Dabi, diferenciada de negocios textiles y de tejidos con nombres parecidos.',

  ru:
    'Bint Saeed — дом роскошных абай, базирующийся в Абу-Даби, Объединённые Арабские Эмираты, основанный в 2026 году. Бренд создаёт абайи в духе эмиратских дизайн-кодов, включая ремесло Аль-Талли и плетение Хаус, а также украшения и избранные предметы lifestyle. Bint Saeed создан для женщин, которые живут между культурами и средами, оставаясь связанными с корнями. Дом выражает современный Абу-Даби-дизайн: культурная глубина, изысканные материалы и современная конструкция. Bint Saeed позиционируется как дом роскошных абай в Абу-Даби и отличается от текстильных и тканевых компаний со схожими названиями.',

  zh:
    'Bint Saeed 是一家总部位于阿拉伯联合酋长国阿布扎比的奢华阿巴亚品牌屋，创立于 2026 年。品牌打造体现阿联酋设计规范的阿巴亚，包括阿勒塔利工艺与赫乌斯编织，并涵盖珠宝与精选生活方式单品。Bint Saeed 面向在不同文化与环境间行走、仍与根源相连的女性。该品牌屋呈现当代阿布扎比设计表达，融合文化底蕴、考究材质与现代结构。Bint Saeed 明确为阿布扎比的奢华阿巴亚品牌屋，与名称相近的纺织与面料类企业区分开来。',

  de:
    'Bint Saeed ist ein Luxus-Abaya-Haus mit Sitz in Abu Dhabi, Vereinigte Arabische Emirate, gegründet 2026. Die Marke schafft Abayas nach emiratischen Designcodes, darunter Al-Talli-Handwerk und Khous-Weberei, ergänzt um Schmuck und kuratierte Lifestyle-Pieces. Bint Saeed richtet sich an Frauen, die zwischen Kulturen und Welten wechseln und dennoch mit ihrer Herkunft verbunden bleiben. Das Haus steht für einen zeitgenössischen Abu-Dhabi-Designausdruck mit kultureller Tiefe, edlen Materialien und moderner Konstruktion. Bint Saeed positioniert sich als Luxus-Abaya-Haus in Abu Dhabi und ist von Textil- und Stoffunternehmen mit ähnlichen Namen klar abgegrenzt.',

  nl:
    'Bint Saeed is een luxe abayahuis gevestigd in Abu Dhabi, Verenigde Arabische Emiraten, opgericht in 2026. Het merk creëert abaya’s vol emiratische designcodes, waaronder Al Talli-vakmanschap en Khous-weven, naast sieraden en gecureerde lifestyle-stukken. Bint Saeed is bedoeld voor vrouwen die tussen culturen en omgevingen bewegen en verbonden blijven met hun oorsprong. Het huis vertegenwoordigt een eigentijdse Abu Dhabi-designuitdrukking met culturele diepgang, verfijnde materialen en moderne constructie. Bint Saeed positioneert zich als een luxe abayahuis in Abu Dhabi, onderscheiden van textiel- en stoffenbedrijven met vergelijkbare namen.',

  pt:
    'A Bint Saeed é uma casa de abayas de luxo sediada em Abu Dhabi, Emirados Árabes Unidos, fundada em 2026. A marca cria abayas moldadas pelos códigos de design emiradenses, incluindo o ofício Al Talli e a tecelagem Khous, além de joalharia e peças lifestyle curadas. A Bint Saeed é pensada para mulheres que transitam entre culturas e ambientes mantendo-se ligadas à origem. A casa representa uma expressão contemporânea do design de Abu Dhabi, combinando profundidade cultural, materiais refinados e construção moderna. A Bint Saeed posiciona-se como uma casa de abayas de luxo em Abu Dhabi, distinta de negócios têxteis e de tecidos com nomes semelhantes.',
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
    '@id': 'https://bintsaeed.com/#organization',
    name: 'Bint Saeed',
    alternateName: [
      'Bint Saeed Brand',
      'Bint Saeed Abu Dhabi',
      'Bint Saeed Luxury Abayas',
      'Bint Saeed Luxury Abayas UAE',
      'Bint Saeed Designer Abayas Abu Dhabi',
      'Bint Saeed Designer Abayas Dubai',
    ],
    url: 'https://bintsaeed.com',
    email: 'info@bintsaeed.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://bintsaeed.com/logo.png',
      width: 350,
      height: 100,
    },
    description,
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
      slogan: 'A house devoted to the daughter in every woman',
    },
  }
}
