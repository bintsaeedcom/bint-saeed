import type { AppLocale } from '@/lib/i18n/routing'
import { LOCALE_GEO } from '@/lib/i18n/brandProperNouns'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { getLocalizedAbayaSchemaKeywordTerms } from '@/lib/products/abayaSchemaKeywordsI18n'
import { getSharedAbayaSchemaAudience } from '@/lib/products/abayaSchemaShared'
import { getLocalizedBelgraviaExclusiveKeywords } from '@/lib/products/belgraviaSchemaKeywordsI18n'

export const BELGRAVIA_SLUG = 'belgravia-abaya'

const BELGRAVIA_MATERIAL =
  'Outer: Light crepe blend (80% polyester, 20% viscose); lining (70% polyester, 30% viscose)'

const BELGRAVIA_AUDIENCE_EN =
  `${getSharedAbayaSchemaAudience('en').slice(0, -1)}, Bisht-inspired abayas, elegant occasion wear, cultural craftsmanship, international occasion wear, and destination dressing across the Gulf, Europe, and beyond.`

const BELGRAVIA_AUDIENCE_ID =
  `${getSharedAbayaSchemaAudience('id').slice(0, -1)}, abaya terinspirasi Bisht, busana acara yang elegan, kerajinan budaya, busana acara internasional, dan penampilan destinasi di seluruh Teluk, Eropa, dan seterusnya.`

const BELGRAVIA_AUDIENCE_MS =
  `${getSharedAbayaSchemaAudience('ms').slice(0, -1)}, abaya terinspirasi Bisht, pakaian majlis yang anggun, kraftangan budaya, pakaian majlis antarabangsa, dan pemakaian destinasi di seluruh Teluk, Eropah, dan seterusnya.`

const BELGRAVIA_FACTS_EN: Omit<ProductSchemaFacts, 'faq' | 'madeIn'> = {
  productType: 'Bisht-inspired abaya',
  productCategory: 'Abaya, Outerwear, Cape, Vest, Jacket',
  neckline: 'Open-front Bisht-inspired abaya',
  fit: 'Relaxed Bisht-inspired silhouette with a flowing fit, designed for graceful movement, elegant layering, and everyday comfort.',
  maximumGarmentLength: '138 cm / 54.5 inches',
  modelHeight: '155 cm / 61 inches',
  closure: 'Open-front construction. Optional concealed snap-button closure available upon request.',
  pockets: 'Hidden side pockets',
  lining: 'Fully lined for comfort and a refined finish.',
  personalisation: 'Personalisation available inside the hidden pocket with a name, date, or meaningful message.',
  trim: 'Handwoven trim inspired by Al Khous / Khous, the traditional Emirati art of palm frond weaving.',
  stylingDetail:
    'Bisht-inspired abaya silhouette with handwoven Khous-inspired trim, clean finishing, hidden pockets, full lining, and optional concealed snap-button closure.',
  care: 'Professional dry clean only.',
  material: BELGRAVIA_MATERIAL,
  suitableFor:
    'Luxury travel, everyday elegance, gatherings, dinners, weddings, engagement celebrations, Eid gatherings, cultural occasions, destination events, international occasion wear, and contemporary daily dressing across the Gulf, Europe, and beyond.',
}

const BELGRAVIA_FACTS_ID: Omit<ProductSchemaFacts, 'faq' | 'madeIn'> = {
  productType: 'Abaya terinspirasi Bisht',
  productCategory: 'Abaya, Pakaian Luar, Jubah, Rompi, Jaket',
  neckline: 'Abaya depan terbuka terinspirasi Bisht',
  fit: 'Siluet santai terinspirasi Bisht dengan potongan mengalir, dirancang untuk gerakan yang anggun, lapisan yang elegan, dan kenyamanan sehari-hari.',
  maximumGarmentLength: '138 cm / 54,5 inci',
  modelHeight: '155 cm / 61 inci',
  closure: 'Konstruksi depan terbuka. Pilihan penutup kancing snap tersembunyi tersedia atas permintaan.',
  pockets: 'Saku samping tersembunyi',
  lining: 'Berlapis penuh untuk kenyamanan dan tampilan yang rapi.',
  personalisation: 'Personalisasi tersedia di dalam saku tersembunyi dengan nama, tanggal, atau pesan bermakna.',
  trim: 'Trim tenun tangan terinspirasi Al Khous / Khous, seni tradisional Emirati dalam menganyam pelepah palem.',
  stylingDetail:
    'Siluet abaya terinspirasi Bisht dengan trim tenun tangan terinspirasi Khous, penyelesaian bersih, saku tersembunyi, lapisan penuh, dan pilihan penutup kancing snap tersembunyi.',
  care: 'Hanya cuci kering profesional.',
  material: BELGRAVIA_MATERIAL,
  suitableFor:
    'Perjalanan mewah, keanggunan sehari-hari, pertemuan, makan malam, pernikahan, perayaan pertunangan, pertemuan Idulfitri, acara budaya, acara destinasi, busana acara internasional, dan penampilan harian kontemporer di seluruh Teluk, Eropa, dan seterusnya.',
}

const BELGRAVIA_FACTS_MS: Omit<ProductSchemaFacts, 'faq' | 'madeIn'> = {
  productType: 'Abaya terinspirasi Bisht',
  productCategory: 'Abaya, Pakaian Luar, Jubah, Vest, Jaket',
  neckline: 'Abaya depan terbuka terinspirasi Bisht',
  fit: 'Siluet santai terinspirasi Bisht dengan potongan mengalir, direka untuk pergerakan yang anggun, lapisan yang elegan, dan keselesaan harian.',
  maximumGarmentLength: '138 cm / 54.5 inci',
  modelHeight: '155 cm / 61 inci',
  closure: 'Rekaan depan terbuka. Pilihan penutup butang snap tersembunyi tersedia atas permintaan.',
  pockets: 'Poket sisi tersembunyi',
  lining: 'Berlapis penuh untuk keselesaan dan kemasan yang halus.',
  personalisation: 'Personalisasi tersedia di dalam poket tersembunyi dengan nama, tarikh, atau mesej bermakna.',
  trim: 'Trim tenunan tangan terinspirasi Al Khous / Khous, seni tradisional Emirati dalam menenun pelepah palem.',
  stylingDetail:
    'Siluet abaya terinspirasi Bisht dengan trim tenunan tangan terinspirasi Khous, kemasan bersih, poket tersembunyi, lapisan penuh, dan pilihan penutup butang snap tersembunyi.',
  care: 'Basuh kering profesional sahaja.',
  material: BELGRAVIA_MATERIAL,
  suitableFor:
    'Perjalanan mewah, keanggunan harian, pertemuan, majlis makan malam, perkahwinan, perayaan pertunangan, perhimpunan Aidilfitri, acara budaya, acara destinasi, pakaian majlis antarabangsa, dan pemakaian harian kontemporari di seluruh Teluk, Eropah, dan seterusnya.',
}

const BELGRAVIA_FAQ_EN: ProductFaqItem[] = [
  {
    question: 'Can the Belgravia Abaya be worn outside the Middle East?',
    answer:
      'Absolutely. While rooted in Emirati craftsmanship, the Belgravia Abaya was created for women who move between cultures, cities, and occasions. Its timeless Bisht-inspired silhouette allows it to be worn for a dinner in London, an event in Paris, a summer gathering in Cannes, a celebration in Riyadh, or everyday life in the Gulf.',
  },
  {
    question: 'Can the Belgravia Abaya be personalised?',
    answer:
      'Yes. Like all Bint Saeed abayas, the Belgravia Abaya can be personalised with a name, date, or meaningful message placed discreetly inside the hidden pocket, creating a private detail that remains close to the wearer.',
  },
  {
    question: 'What is Al Khous and how is it reflected in the Belgravia Abaya?',
    answer:
      'Al Khous is a traditional Emirati craft based on weaving palm fronds into decorative and functional forms. The handwoven trim of the Belgravia Abaya draws inspiration from this heritage, translating elements of palm frond weaving into a contemporary luxury abaya while celebrating a tradition passed down through generations.',
  },
  {
    question: 'What makes the Belgravia Abaya different from other abayas?',
    answer:
      'The Belgravia Abaya is distinguished by its handwoven trim inspired by Al Khous palm frond weaving, its relaxed Bisht-inspired silhouette, hidden pockets, full lining, and optional concealed snap-button closure. Designed and made in Abu Dhabi, United Arab Emirates, it combines cultural craftsmanship with timeless elegance, creating a piece that feels relevant in the Gulf, Europe, and beyond.',
  },
  {
    question: 'Why is the Belgravia Abaya inspired by the Bisht?',
    answer:
      'The Bisht is one of the most recognisable garments of the Arabian Peninsula and has long been associated with dignity, occasion, and craftsmanship. The Belgravia Abaya reinterprets elements of this silhouette through a contemporary lens, creating an open-front abaya that honours its inspiration while remaining relevant to the way women dress today.',
  },
  {
    question:
      'Is the Belgravia Abaya suitable for daily wear, dinners, weddings, and special occasions?',
    answer:
      'Yes. The Belgravia Abaya is designed for everyday elegance, dinners, gatherings, weddings, engagement celebrations, Eid gatherings, cultural occasions, destination events, and special occasions. Its flowing Bisht-inspired silhouette and handwoven trim allow it to move naturally between daily GCC life, international travel, and elevated events.',
  },
]

const BELGRAVIA_FAQ_MS: ProductFaqItem[] = [
  {
    question: 'Bolehkah Abaya Belgravia dipakai di luar Timur Tengah?',
    answer:
      'Sudah tentu. Berpunca daripada kraftangan Emirati, Abaya Belgravia direka untuk wanita yang bergerak antara budaya, bandar, dan majlis. Siluet terinspirasi Bisht yang abadi membolehkannya dipakai untuk majlis malam di London, acara di Paris, sambutan di Riyadh, atau kehidupan harian di Teluk.',
  },
  {
    question: 'Bolehkah Abaya Belgravia diperibadikan?',
    answer:
      'Ya. Seperti semua abaya Bint Saeed, Abaya Belgravia boleh diperibadikan dengan nama, tarikh, atau mesej bermakna di dalam poket tersembunyi — butiran peribadi yang kekal dekat dengan pemakainya.',
  },
  {
    question: 'Apakah Al Khous dan bagaimana ia tercermin pada Abaya Belgravia?',
    answer:
      'Al Khous ialah kraftangan tradisional Emirati berdasarkan tenunan pelepah palem. Hiasan tenunan tangan Abaya Belgravia terinspirasi warisan ini, menterjemahkan elemen tenunan pelepah palem ke dalam abaya mewah kontemporari sambil meraikan tradisi yang diwarisi merentasi generasi.',
  },
  {
    question: 'Apakah yang membezakan Abaya Belgravia daripada abaya lain?',
    answer:
      'Abaya Belgravia dibezakan oleh hiasan tenunan tangan terinspirasi tenunan Al Khous, siluet terinspirasi Bisht yang santai, poket tersembunyi, lapisan penuh, dan pilihan penutup butang snap tersembunyi. Direka dan dihasilkan di Abu Dhabi, Emiriah Arab Bersatu, menggabungkan kraftangan budaya dengan keanggunan abadi.',
  },
  {
    question: 'Mengapakah Abaya Belgravia terinspirasi Bisht?',
    answer:
      'Bisht ialah salah satu pakaian paling dikenali di Semenanjung Arab, lama dikaitkan dengan maruah, majlis, dan kraftangan. Abaya Belgravia mentafsirkan semula elemen siluet ini melalui lensa kontemporari — abaya depan terbuka yang menghormati inspirasinya sambil kekal relevan bagi cara berpakaian wanita hari ini.',
  },
  {
    question:
      'Adakah Abaya Belgravia sesuai untuk pemakaian harian, majlis makan malam, perkahwinan, dan acara khas?',
    answer:
      'Ya. Abaya Belgravia direka untuk keanggunan harian, majlis makan malam, pertemuan, perkahwinan, sambutan pertunangan, perhimpunan Aidilfitri, acara budaya, acara destinasi, dan majlis istimewa. Siluet mengalir terinspirasi Bisht dan hiasan tenunan tangan membolehkannya bergerak antara kehidupan GCC, perjalanan antarabangsa, dan acara formal.',
  },
]

const BELGRAVIA_FAQ_ID: ProductFaqItem[] = [
  {
    question: 'Apakah Abaya Belgravia bisa dikenakan di luar Timur Tengah?',
    answer:
      'Tentu. Berakar pada kerajinan Emirati, Abaya Belgravia dirancang untuk wanita yang bergerak antar budaya, kota, dan acara. Siluet terinspirasi Bisht yang abadi memungkinkannya dikenakan untuk makan malam di London, acara di Paris, perayaan di Riyadh, atau kehidupan sehari-hari di Teluk.',
  },
  {
    question: 'Apakah Abaya Belgravia bisa dipersonalisasi?',
    answer:
      'Ya. Seperti semua abaya Bint Saeed, Abaya Belgravia dapat dipersonalisasi dengan nama, tanggal, atau pesan bermakna di dalam saku tersembunyi — detail privat yang tetap dekat dengan pemakainya.',
  },
  {
    question: 'Apa itu Al Khous dan bagaimana tercermin pada Abaya Belgravia?',
    answer:
      'Al Khous adalah kerajinan tradisional Emirati berbasis tenun pelepah palem. Trim tenun tangan Abaya Belgravia terinspirasi warisan ini, menerjemahkan elemen tenun pelepah palem ke abaya mewah kontemporer sambil merayakan tradisi yang diwariskan lintas generasi.',
  },
  {
    question: 'Apa yang membedakan Abaya Belgravia dari abaya lainnya?',
    answer:
      'Abaya Belgravia dibedakan oleh trim tenun tangan terinspirasi tenun Al Khous, siluet terinspirasi Bisht yang santai, saku tersembunyi, lining penuh, dan opsi kancing snap tersembunyi. Dirancang dan dibuat di Abu Dhabi, Uni Emirat Arab, menggabungkan kerajinan budaya dengan keanggunan abadi.',
  },
  {
    question: 'Mengapa Abaya Belgravia terinspirasi Bisht?',
    answer:
      'Bisht adalah salah satu garment paling dikenal di Semenanjung Arabia, lama dikaitkan dengan martabat, acara, dan kerajinan. Abaya Belgravia menafsirkan ulang elemen siluet ini melalui lensa kontemporer — abaya depan terbuka yang menghormati inspirasinya sambil relevan bagi cara berpakaian wanita hari ini.',
  },
  {
    question:
      'Apakah Abaya Belgravia cocok untuk pemakaian harian, makan malam, pernikahan, dan acara khusus?',
    answer:
      'Ya. Abaya Belgravia dirancang untuk keanggunan sehari-hari, makan malam, pertemuan, pernikahan, perayaan tunangan, pertemuan Idulfitri, acara budaya, acara destinasi, dan acara khusus. Siluet mengalir terinspirasi Bisht dan trim tenun tangan memungkinkannya bergerak antara kehidupan GCC, perjalanan internasional, dan acara formal.',
  },
]

export function isBelgraviaSlug(slug: string): boolean {
  return slug.toLowerCase() === BELGRAVIA_SLUG
}

export function getBelgraviaSchemaAudience(locale: AppLocale = 'en'): string {
  if (locale === 'id') return BELGRAVIA_AUDIENCE_ID
  if (locale === 'ms') return BELGRAVIA_AUDIENCE_MS
  return BELGRAVIA_AUDIENCE_EN
}

export function getBelgraviaSchemaKeywords(
  locale: AppLocale = 'en',
  colorName?: string,
): string {
  const terms = new Set<string>([
    ...getLocalizedBelgraviaExclusiveKeywords(locale, colorName),
    ...getLocalizedAbayaSchemaKeywordTerms(locale),
  ])
  return [...terms].join(', ')
}

export { getLocalizedBelgraviaExclusiveKeywords } from '@/lib/products/belgraviaSchemaKeywordsI18n'
export { getLocalizedAbayaSchemaKeywordTerms } from '@/lib/products/abayaSchemaKeywordsI18n'

export function getLocalizedBelgraviaSchemaFacts(
  slug: string,
  locale: AppLocale = 'en',
): ProductSchemaFacts | null {
  if (!isBelgraviaSlug(slug)) return null
  if (locale === 'id') {
    return {
      madeIn: LOCALE_GEO.id.madeIn,
      ...BELGRAVIA_FACTS_ID,
      faq: BELGRAVIA_FAQ_ID,
    }
  }
  if (locale === 'ms') {
    return {
      madeIn: LOCALE_GEO.ms.madeIn,
      ...BELGRAVIA_FACTS_MS,
      faq: BELGRAVIA_FAQ_MS,
    }
  }
  return {
    madeIn: LOCALE_GEO.en.madeIn,
    ...BELGRAVIA_FACTS_EN,
    faq: BELGRAVIA_FAQ_EN,
  }
}

export function getLocalizedBelgraviaFaq(slug: string, locale: AppLocale = 'en'): ProductFaqItem[] {
  if (!isBelgraviaSlug(slug)) return []
  if (locale === 'id') return BELGRAVIA_FAQ_ID
  if (locale === 'ms') return BELGRAVIA_FAQ_MS
  return BELGRAVIA_FAQ_EN
}

/** Shared PDP + schema FAQ source of truth. */
export function getBelgraviaPdpFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  if (locale === 'id') return BELGRAVIA_FAQ_ID
  if (locale === 'ms') return BELGRAVIA_FAQ_MS
  return BELGRAVIA_FAQ_EN
}

export { BELGRAVIA_MATERIAL }
