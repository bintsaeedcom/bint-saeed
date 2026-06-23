import type { AppLocale } from '@/lib/i18n/routing'
import { LOCALE_GEO } from '@/lib/i18n/brandProperNouns'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { getLocalizedAbayaSchemaKeywordTerms } from '@/lib/products/abayaSchemaKeywordsI18n'
import { getSharedAbayaSchemaAudience } from '@/lib/products/abayaSchemaShared'
import { getLocalizedKensingtonExclusiveKeywords } from '@/lib/products/kensingtonSchemaKeywordsI18n'

export const KENSINGTON_SLUG = 'kensington-abaya'

const KENSINGTON_MATERIAL =
  'Outer: 80% Polyester, 20% Viscose; lining: 70% Polyester, 30% Viscose'

const KENSINGTON_AUDIENCE_EN =
  `${getSharedAbayaSchemaAudience('en').slice(0, -1)}, long blazer silhouettes, and blazer-inspired abayas.`

const KENSINGTON_AUDIENCE_ID =
  `${getSharedAbayaSchemaAudience('id').slice(0, -1)}, siluet blazer panjang, dan abaya terinspirasi blazer.`

const KENSINGTON_AUDIENCE_MS =
  `${getSharedAbayaSchemaAudience('ms').slice(0, -1)}, siluet blazer panjang, dan abaya terinspirasi blazer.`

const KENSINGTON_FACTS_EN: Omit<ProductSchemaFacts, 'faq' | 'madeIn'> = {
  productType: 'Structured black abaya inspired by tailored outerwear',
  productCategory: 'Abaya, Outerwear, Jacket, Blazer, Long Blazer, Blazer Abaya',
  neckline: 'Round neckline',
  fit: 'Structured yet fluid fit with a clean elongated silhouette, light shoulder padding, and blazer-inspired proportions.',
  maximumGarmentLength: '138 cm / 54.5 inches',
  modelHeight: '155 cm / 61 inches',
  modelWears: 'XS',
  closure: 'Front snap-button closure',
  pockets: 'Two hidden side pockets',
  personalisation:
    'Optional personalisation on a hidden interior label with a name, date, or meaningful message.',
  lining: 'Fully lined with soft crepe lining for comfort and ease of wear.',
  trim: 'Bint Saeed signature woven braid inspired by traditional Al Khous palm frond weaving, interpreted through subtle black glitter organza weave detailing.',
  stylingDetail:
    'Structured Deep Black abaya with round neckline, light shoulder padding, front snap-button closure, Al Khous-inspired woven trim across the chest and sleeves, two hidden side pockets, soft crepe lining, and optional hidden interior personalisation label.',
  care: 'Professional dry clean only.',
  material: KENSINGTON_MATERIAL,
  suitableFor:
    'Everyday elegance, business settings, dinners, gatherings, travel, cultural events, weddings, Eid gatherings, celebrations, special occasions, and international occasionwear.',
}

const KENSINGTON_FACTS_ID: Omit<ProductSchemaFacts, 'faq' | 'madeIn'> = {
  productType: 'Abaya hitam terstruktur terinspirasi pakaian luar yang dijahit dengan sempurna',
  productCategory: 'Abaya, Pakaian Luar, Jaket, Blazer, Blazer Panjang, Abaya Blazer',
  neckline: 'Leher bulat',
  fit: 'Potongan terstruktur namun mengalir dengan siluet memanjang yang bersih, bantalan bahu ringan, dan proporsi terinspirasi blazer.',
  maximumGarmentLength: '138 cm / 54,5 inci',
  modelHeight: '155 cm / 61 inci',
  modelWears: 'XS',
  closure: 'Penutup kancing snap depan',
  pockets: 'Dua saku samping tersembunyi',
  personalisation:
    'Personalisasi opsional pada label interior tersembunyi dengan nama, tanggal, atau pesan bermakna.',
  lining: 'Berlapis penuh dengan lapisan kain krep lembut untuk kenyamanan dan kemudahan pemakaian.',
  trim: 'Kepang tenun khas Bint Saeed terinspirasi anyaman pelepah palem Al Khous tradisional, diinterpretasikan melalui detail tenun organza glitter hitam yang halus.',
  stylingDetail:
    'Abaya Hitam Dalam yang terstruktur dengan leher bulat, bantalan bahu ringan, penutup kancing snap depan, trim tenun terinspirasi Al Khous di dada dan lengan, dua saku samping tersembunyi, lapisan kain krep lembut, dan label personalisasi interior tersembunyi opsional.',
  care: 'Hanya cuci kering profesional.',
  material: KENSINGTON_MATERIAL,
  suitableFor:
    'Keanggunan sehari-hari, suasana bisnis, makan malam, pertemuan, perjalanan, acara budaya, pernikahan, pertemuan Idulfitri, perayaan, acara khusus, dan busana acara internasional.',
}

const KENSINGTON_FACTS_MS: Omit<ProductSchemaFacts, 'faq' | 'madeIn'> = {
  productType: 'Abaya hitam berstruktur terinspirasi pakaian luar yang dijahit dengan teliti',
  productCategory: 'Abaya, Pakaian Luar, Jaket, Blazer, Blazer Panjang, Abaya Blazer',
  neckline: 'Leher bulat',
  fit: 'Potongan berstruktur namun mengalir dengan siluet memanjang yang bersih, padding bahu ringan, dan perkadaran terinspirasi blazer.',
  maximumGarmentLength: '138 cm / 54.5 inci',
  modelHeight: '155 cm / 61 inci',
  modelWears: 'XS',
  closure: 'Penutup butang snap depan',
  pockets: 'Dua poket sisi tersembunyi',
  personalisation:
    'Personalisasi pilihan pada label dalaman tersembunyi dengan nama, tarikh, atau mesej bermakna.',
  lining: 'Berlapis penuh dengan lapisan kain krep lembut untuk keselesaan dan kemudahan pemakaian.',
  trim: 'Kepang tenunan khas Bint Saeed terinspirasi tenunan pelepah palem Al Khous tradisional, ditafsirkan melalui perincian tenunan organza glitter hitam yang halus.',
  stylingDetail:
    'Abaya Hitam Dalam yang berstruktur dengan leher bulat, padding bahu ringan, penutup butang snap depan, trim tenunan terinspirasi Al Khous di dada dan lengan, dua poket sisi tersembunyi, lapisan kain krep lembut, dan label personalisasi dalaman tersembunyi pilihan.',
  care: 'Basuh kering profesional sahaja.',
  material: KENSINGTON_MATERIAL,
  suitableFor:
    'Keanggunan harian, suasana perniagaan, majlis makan malam, pertemuan, perjalanan, acara budaya, perkahwinan, perhimpunan Aidilfitri, perayaan, majlis istimewa, dan busana acara antarabangsa.',
}

const KENSINGTON_FAQ_EN: ProductFaqItem[] = [
  {
    question: 'What makes the Kensington Abaya different from other black abayas?',
    answer:
      'Rather than relying on embellishment, the Kensington Abaya creates distinction through structure, proportion, and thoughtful detailing. Inspired by tailored outerwear and finished with Al Khous-inspired woven trims, hidden pockets, and a soft crepe lining, it is designed for women seeking elegance that feels confident, versatile, and enduring.',
  },
  {
    question: 'Why was the Kensington Abaya inspired by the structure of a blazer?',
    answer:
      'The woman of today moves between responsibilities, professions, travel, family life, and occasions with greater fluidity than ever before. Inspired by the confidence and structure of a well-cut blazer, the Kensington Abaya was designed to offer a silhouette that feels composed, polished, and adaptable while preserving the ease and elegance of traditional dressing.',
  },
  {
    question: 'Why can the Kensington Abaya be worn internationally?',
    answer:
      'The Kensington Abaya was designed for women whose lives move between different cities, cultures, and occasions. Its clean silhouette and understated detailing allow it to transition naturally between everyday wear, business settings, dinners, travel, and special occasions while maintaining the same sense of elegance and confidence.',
  },
  {
    question: 'Can the Kensington Abaya be personalised?',
    answer:
      'Yes. Like all Bint Saeed abayas, the Kensington Abaya can be personalised with a hidden interior label featuring a name, date, or meaningful message. Discreetly placed inside the garment, it creates a more personal connection to the piece and makes it especially meaningful for gifting, celebrations, and personal milestones.',
  },
  {
    question: 'What is Al Khous and how is it reflected in the Kensington Abaya?',
    answer:
      'Al Khous is the traditional Emirati art of weaving palm fronds, a craft passed down through generations. The Kensington Abaya draws inspiration from this heritage through signature woven detailing across the chest and cuffs, interpreted through a contemporary black glitter organza weave.',
  },
]

const KENSINGTON_FAQ_ID: ProductFaqItem[] = [
  {
    question: 'Apa yang membedakan Abaya Kensington dari abaya hitam lainnya?',
    answer:
      'Alih-alih mengandalkan hiasan, Abaya Kensington menciptakan perbedaan melalui struktur, proporsi, dan detail yang cermat. Terinspirasi pakaian luar yang dijahit rapi dan diselesaikan dengan trim tenun terinspirasi Al Khous, saku tersembunyi, dan lapisan kain krep lembut, abaya ini dirancang untuk wanita yang mencari keanggunan yang terasa percaya diri, serba guna, dan abadi.',
  },
  {
    question: 'Mengapa Abaya Kensington terinspirasi dari struktur blazer?',
    answer:
      'Wanita masa kini bergerak antara tanggung jawab, profesi, perjalanan, kehidupan keluarga, dan acara dengan lebih luwes dari sebelumnya. Terinspirasi dari kepercayaan diri dan struktur blazer yang terpotong sempurna, Abaya Kensington dirancang untuk menawarkan siluet yang terasa tenang, rapi, dan mudah beradaptasi, sekaligus mempertahankan kemudahan dan keanggunan berpakaian tradisional.',
  },
  {
    question: 'Mengapa Abaya Kensington bisa dikenakan secara internasional?',
    answer:
      'Abaya Kensington dirancang untuk wanita yang kehidupannya bergerak antar kota, budaya, dan acara yang berbeda. Siluet bersihnya dan detail yang tidak berlebihan memungkinkannya beralih secara alami antara pemakaian sehari-hari, suasana bisnis, makan malam, perjalanan, dan acara khusus, sambil tetap mempertahankan rasa keanggunan dan kepercayaan diri yang sama.',
  },
  {
    question: 'Apakah Abaya Kensington bisa dipersonalisasi?',
    answer:
      'Ya. Seperti semua abaya Bint Saeed, Abaya Kensington dapat dipersonalisasi dengan label interior tersembunyi yang menampilkan nama, tanggal, atau pesan bermakna. Ditempatkan secara diam-diam di dalam pakaian, label ini menciptakan koneksi yang lebih personal dengan busana tersebut dan membuatnya sangat berarti sebagai hadiah, untuk perayaan, dan pencapaian pribadi.',
  },
  {
    question: 'Apa itu Al Khous dan bagaimana tercermin pada Abaya Kensington?',
    answer:
      'Al Khous adalah seni tradisional Emirati dalam menganyam pelepah palem, sebuah kerajinan yang diwariskan turun-temurun. Abaya Kensington mengambil inspirasi dari warisan ini melalui detail tenun khas di dada dan manset, diinterpretasikan melalui tenun organza glitter hitam kontemporer.',
  },
]

const KENSINGTON_FAQ_MS: ProductFaqItem[] = [
  {
    question: 'Apakah yang membezakan Abaya Kensington daripada abaya hitam yang lain?',
    answer:
      'Berbeza daripada mengandalkan hiasan, Abaya Kensington mencipta perbezaan melalui struktur, perkadaran, dan perincian yang teliti. Terinspirasi pakaian luar yang dijahit rapi dan diselesaikan dengan trim tenunan terinspirasi Al Khous, poket tersembunyi, dan lapisan kain krep lembut, ia direka untuk wanita yang mencari keanggunan yang terasa yakin, serba guna, dan abadi.',
  },
  {
    question: 'Mengapakah Abaya Kensington terinspirasi daripada struktur blazer?',
    answer:
      'Wanita masa kini bergerak antara tanggungjawab, profesion, perjalanan, kehidupan keluarga, dan majlis dengan lebih mudah daripada sebelumnya. Terinspirasi daripada keyakinan dan struktur blazer yang dijahit dengan baik, Abaya Kensington direka untuk menawarkan siluet yang terasa tenang, kemas, dan mudah disesuaikan sambil mengekalkan kemudahan dan keanggunan pemakaian tradisional.',
  },
  {
    question: 'Mengapakah Abaya Kensington boleh dipakai secara antarabangsa?',
    answer:
      'Abaya Kensington direka untuk wanita yang kehidupannya bergerak antara bandar, budaya, dan majlis yang berbeza. Siluet bersihnya dan perincian yang sederhana membolehkannya beralih secara semula jadi antara pemakaian harian, suasana perniagaan, majlis makan malam, perjalanan, dan majlis istimewa sambil mengekalkan rasa keanggunan dan keyakinan yang sama.',
  },
  {
    question: 'Bolehkah Abaya Kensington diperibadikan?',
    answer:
      'Ya. Seperti semua abaya Bint Saeed, Abaya Kensington boleh diperibadikan dengan label dalaman tersembunyi yang menampilkan nama, tarikh, atau mesej bermakna. Ditempatkan secara diskrit di dalam pakaian, ia mewujudkan hubungan yang lebih peribadi dengan busana tersebut dan menjadikannya sangat bermakna untuk hadiah, perayaan, dan pencapaian peribadi.',
  },
  {
    question: 'Apakah Al Khous dan bagaimana ia tercermin pada Abaya Kensington?',
    answer:
      'Al Khous ialah seni tradisional Emirati dalam menenun pelepah palem, sebuah kraftangan yang diwarisi turun-temurun. Abaya Kensington mengambil inspirasi daripada warisan ini melalui perincian tenunan khas di dada dan manset, ditafsirkan melalui tenunan organza glitter hitam kontemporari.',
  },
]

export function isKensingtonSlug(slug: string): boolean {
  return slug.toLowerCase() === KENSINGTON_SLUG
}

export function getKensingtonSchemaAudience(locale: AppLocale = 'en'): string {
  if (locale === 'id') return KENSINGTON_AUDIENCE_ID
  if (locale === 'ms') return KENSINGTON_AUDIENCE_MS
  return KENSINGTON_AUDIENCE_EN
}

export function getKensingtonSchemaKeywords(
  locale: AppLocale = 'en',
  colorName?: string,
): string {
  const terms = new Set<string>([
    ...getLocalizedKensingtonExclusiveKeywords(locale, colorName),
    ...getLocalizedAbayaSchemaKeywordTerms(locale),
  ])
  return [...terms].join(', ')
}

export function getLocalizedKensingtonSchemaFacts(
  slug: string,
  locale: AppLocale = 'en',
): ProductSchemaFacts | null {
  if (!isKensingtonSlug(slug)) return null
  if (locale === 'id') {
    return {
      madeIn: LOCALE_GEO.id.madeIn,
      ...KENSINGTON_FACTS_ID,
      faq: KENSINGTON_FAQ_ID,
    }
  }
  if (locale === 'ms') {
    return {
      madeIn: LOCALE_GEO.ms.madeIn,
      ...KENSINGTON_FACTS_MS,
      faq: KENSINGTON_FAQ_MS,
    }
  }
  return {
    madeIn: LOCALE_GEO.en.madeIn,
    ...KENSINGTON_FACTS_EN,
    faq: KENSINGTON_FAQ_EN,
  }
}

export function getLocalizedKensingtonFaq(slug: string, locale: AppLocale = 'en'): ProductFaqItem[] {
  if (!isKensingtonSlug(slug)) return []
  if (locale === 'id') return KENSINGTON_FAQ_ID
  if (locale === 'ms') return KENSINGTON_FAQ_MS
  return KENSINGTON_FAQ_EN
}

/** Shared PDP + schema FAQ source of truth. */
export function getKensingtonPdpFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  if (locale === 'id') return KENSINGTON_FAQ_ID
  if (locale === 'ms') return KENSINGTON_FAQ_MS
  return KENSINGTON_FAQ_EN
}

export { KENSINGTON_MATERIAL }
