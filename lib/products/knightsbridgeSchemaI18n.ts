import type { AppLocale } from '@/lib/i18n/routing'
import { LOCALE_GEO } from '@/lib/i18n/brandProperNouns'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { getSharedAbayaSchemaAudience } from '@/lib/products/abayaSchemaShared'

export const KNIGHTSBRIDGE_ABAYA_SLUG = 'knightsbridge-abaya-jacket'

const KNIGHTSBRIDGE_MATERIAL =
  'Outer: 60% Polyester, 40% Cotton. Inner dress: 100% Polyester.'

const KNIGHTSBRIDGE_AUDIENCE_EXTENSION_EN =
  ', jacket abayas, relaxed jacket abayas, modest outerwear, contemporary outerwear, everyday luxury, travel wardrobes, elegant daily dressing, and women who prefer setting trends rather than following them'

const KNIGHTSBRIDGE_AUDIENCE_EN = `${getSharedAbayaSchemaAudience('en').slice(0, -1)}${KNIGHTSBRIDGE_AUDIENCE_EXTENSION_EN}.`

const KNIGHTSBRIDGE_AUDIENCE_ID = `${getSharedAbayaSchemaAudience('id').slice(0, -1)}, abaya jaket, abaya jaket santai, pakaian luar sopan, pakaian luar kontemporer, kemewahan sehari-hari, garderobe perjalanan, penampilan harian yang elegan, dan wanita yang lebih suka menetapkan tren daripada mengikutinya.`

const KNIGHTSBRIDGE_AUDIENCE_MS = `${getSharedAbayaSchemaAudience('ms').slice(0, -1)}, abaya jaket, abaya jaket santai, pakaian luar sopan, pakaian luar kontemporari, kemewahan harian, almari perjalanan, pemakaian harian yang anggun, dan wanita yang lebih suka menetapkan trend daripada mengikutinya.`

const KNIGHTSBRIDGE_AUDIENCE_AR = `${getSharedAbayaSchemaAudience('ar').slice(0, -1)}، عبايات جاكيت، عبايات جاكيت مريحة، ملابس خارجية محتشمة، ملابس خارجية معاصرة، فخامة يومية، خزائن السفر، أناقة الملبس اليومي، والنساء اللواتي يفضلن وضع الاتجاهات بدلاً من اتباعها.`

const KNIGHTSBRIDGE_AUDIENCE_FR = `${getSharedAbayaSchemaAudience('fr').slice(0, -1)}, abayas vestes, abayas vestes décontractées, vêtements d'extérieur modestes, vêtements d'extérieur contemporains, luxe au quotidien, garde-robes de voyage, élégance vestimentaire quotidienne, et les femmes qui préfèrent imposer les tendances plutôt que les suivre.`

const KNIGHTSBRIDGE_AUDIENCE: Record<AppLocale, string> = {
  en: KNIGHTSBRIDGE_AUDIENCE_EN,
  ar: KNIGHTSBRIDGE_AUDIENCE_AR,
  fr: KNIGHTSBRIDGE_AUDIENCE_FR,
  it: `${getSharedAbayaSchemaAudience('it').slice(0, -1)}, abaya giacca, abaya giacca rilassate, capospalla modesti, capospalla contemporanei, lusso quotidiano, guardaroba da viaggio, eleganza quotidiana, e donne che preferiscono dettare le tendenze piuttosto che seguirle.`,
  es: `${getSharedAbayaSchemaAudience('es').slice(0, -1)}, abayas chaqueta, abayas chaqueta relajadas, ropa exterior modesta, ropa exterior contemporánea, lujo cotidiano, guardarropas de viaje, elegancia diaria, y mujeres que prefieren marcar tendencias en lugar de seguirlas.`,
  ru: `${getSharedAbayaSchemaAudience('ru').slice(0, -1)}, жакет-абайи, расслабленные жакет-абайи, скромная верхняя одежда, современная верхняя одежда, повседневная роскошь, дорожный гардероб, элегантный повседневный стиль, и женщины, которые предпочитают задавать тренды, а не следовать им.`,
  zh: `${getSharedAbayaSchemaAudience('zh').slice(0, -1)}、夹克式阿巴亚、宽松夹克式阿巴亚、端庄外套、现代外套、日常奢华、旅行衣橱、优雅日常装扮，以及更愿引领潮流而非追随潮流的女性。`,
  de: `${getSharedAbayaSchemaAudience('de').slice(0, -1)}, Jacket-Abayas, entspannte Jacket-Abayas, bescheidene Oberbekleidung, zeitgenössische Oberbekleidung, Alltagsluxus, Reisegarderoben, elegante Alltagskleidung und Frauen, die lieber Trends setzen als ihnen folgen.`,
  nl: `${getSharedAbayaSchemaAudience('nl').slice(0, -1)}, jacket abayas, relaxed jacket abayas, bescheiden outerwear, eigentijdse outerwear, alledaags luxe, reisgarderobes, elegante dagelijkse uitstraling, en vrouwen die liever trends zetten dan volgen.`,
  pt: `${getSharedAbayaSchemaAudience('pt').slice(0, -1)}, abayas casaco, abayas casaco descontraídas, roupa exterior modesta, roupa exterior contemporânea, luxo quotidiano, roupeiros de viagem, elegância diária, e mulheres que preferem definir tendências em vez de segui-las.`,
  id: KNIGHTSBRIDGE_AUDIENCE_ID,
  ms: KNIGHTSBRIDGE_AUDIENCE_MS,
}

const KNIGHTSBRIDGE_FACTS_EN: Omit<ProductSchemaFacts, 'faq' | 'madeIn'> = {
  productType: 'Relaxed jacket abaya inspired by contemporary outerwear',
  productCategory: 'Abaya, Jacket Abaya, Outerwear, Long Jacket, Modest Outerwear',
  fit: 'Relaxed fit with a jacket-inspired silhouette designed for layering.',
  maximumGarmentLength: '143 cm / 56.3 inches',
  modelHeight: '160 cm / 63 inches',
  modelWears: 'XS',
  closure: 'Concealed front button closure',
  pockets: 'Two chest pockets and two hidden side pockets',
  personalisation:
    'Optional personalisation on a hidden interior label with a name, date, or meaningful message.',
  lining: 'Attached inner dress in 100% Polyester',
  innerDress: 'Attached inner dress in 100% Polyester',
  trim:
    'Khous-inspired woven detailing on the chest pockets and cuffs, derived from the traditional Emirati art of palm frond weaving; Bint Saeed signature gold-tone Knotted Lines of Lineage buttons on the chest pockets and cuffs.',
  stylingDetail:
    'Relaxed jacket abaya with pointed collar, concealed front button closure, chest pockets, hidden side pockets, Khous-inspired woven detailing, buttoned cuffs, shoulder tab detailing, attached inner dress, and signature gold-tone buttons.',
  care: 'Professional dry clean only.',
  material: KNIGHTSBRIDGE_MATERIAL,
  suitableFor:
    'Everyday luxury, daily dressing, travel, coffee outings, work, meetings, city life, weekend dressing, modest outerwear, elegant casual wear, and life between the Gulf, Europe, and beyond.',
}

const KNIGHTSBRIDGE_FACTS_ID: Omit<ProductSchemaFacts, 'faq' | 'madeIn'> = {
  productType: 'Abaya jaket santai terinspirasi pakaian luar kontemporer',
  productCategory: 'Abaya, Abaya Jaket, Pakaian Luar, Jaket Panjang, Pakaian Luar Sopan',
  fit: 'Potongan santai dengan siluet terinspirasi jaket yang dirancang untuk layering.',
  maximumGarmentLength: '143 cm / 56,3 inci',
  modelHeight: '160 cm / 63 inci',
  modelWears: 'XS',
  closure: 'Penutup kancing depan tersembunyi',
  pockets: 'Dua saku dada dan dua saku samping tersembunyi',
  personalisation:
    'Personalisasi opsional pada label interior tersembunyi dengan nama, tanggal, atau pesan bermakna.',
  lining: 'Gaun dalam terpasang 100% Polyester',
  innerDress: 'Gaun dalam terpasang 100% Polyester',
  trim:
    'Detail tenun terinspirasi Khous pada saku dada dan manset, berasal dari seni tradisional Emirati anyaman pelepah palem; kancing emas khas Bint Saeed Knotted Lines of Lineage pada saku dada dan manset.',
  stylingDetail:
    'Abaya jaket santai dengan kerah runcing, penutup kancing depan tersembunyi, saku dada, saku samping tersembunyi, detail tenun terinspirasi Khous, manset berkancing, detail tab bahu, gaun dalam terpasang, dan kancing emas khas.',
  care: 'Pembersihan kering profesional saja.',
  material: 'Luar: 60% Polyester, 40% Katun. Gaun dalam: 100% Polyester.',
  suitableFor:
    'Kemewahan sehari-hari, berpakaian harian, perjalanan, kopi, kerja, rapat, kehidupan kota, akhir pekan, pakaian luar sopan, kasual elegan, dan kehidupan antara Teluk, Eropa, dan seterusnya.',
}

const KNIGHTSBRIDGE_FACTS_MS: Omit<ProductSchemaFacts, 'faq' | 'madeIn'> = {
  productType: 'Abaya jaket santai terinspirasi pakaian luar kontemporari',
  productCategory: 'Abaya, Abaya Jaket, Pakaian Luar, Jaket Panjang, Pakaian Luar Sopan',
  fit: 'Potongan santai dengan siluet berinspirasi jaket yang direka untuk pelapisan.',
  maximumGarmentLength: '143 cm / 56.3 inci',
  modelHeight: '160 cm / 63 inci',
  modelWears: 'XS',
  closure: 'Penutup butang hadapan tersembunyi',
  pockets: 'Dua poket dada dan dua poket sisi tersembunyi',
  personalisation:
    'Pemperibadian pilihan pada label dalaman tersembunyi dengan nama, tarikh, atau mesej bermakna.',
  lining: 'Gaun dalaman terpasang 100% Polyester',
  innerDress: 'Gaun dalaman terpasang 100% Polyester',
  trim:
    'Perincian tenunan terinspirasi Khous pada poket dada dan manset, daripada seni tradisional Emirati menenun pelepah palma; butang emas khas Bint Saeed Knotted Lines of Lineage pada poket dada dan manset.',
  stylingDetail:
    'Abaya jaket santai dengan kolar runcing, penutup butang hadapan tersembunyi, poket dada, poket sisi tersembunyi, perincian tenunan terinspirasi Khous, manset berbutang, perincian tab bahu, gaun dalaman terpasang, dan butang emas khas.',
  care: 'Pembersihan kering profesional sahaja.',
  material: 'Luar: 60% Polyester, 40% Kapas. Gaun dalaman: 100% Polyester.',
  suitableFor:
    'Kemewahan harian, pemakaian setiap hari, perjalanan, kopi, kerja, mesyuarat, kehidupan bandar, hujung minggu, pakaian luar sopan, kasual elegan, dan kehidupan antara Teluk, Eropah, dan seterusnya.',
}

const KNIGHTSBRIDGE_FAQ_EN: ProductFaqItem[] = [
  {
    question: 'What makes the Khous Jacket Abaya different from other abayas?',
    answer:
      'The Khous Jacket Abaya sits between an abaya and a jacket, combining the ease of traditional dressing with the confidence of contemporary outerwear. Its relaxed silhouette, structured shoulders, four functional pockets, and signature detailing create a piece designed for everyday life rather than occasional wear.',
  },
  {
    question: 'How can the Khous Jacket Abaya be styled?',
    answer:
      'Designed for versatility, it can be worn over dresses, tailoring, knitwear, tracksuits, and everyday attire. Whether paired with sneakers, flats, or heels, it adapts naturally to travel, work, coffee outings, and daily life.',
  },
  {
    question: 'Why was the Khous Jacket Abaya designed with a jacket-inspired silhouette?',
    answer:
      'The Khous Jacket Abaya was created for women who move between different roles, cities, and environments throughout their day. Inspired by the versatility of outerwear, it offers a silhouette that feels confident, practical, and effortless while maintaining the elegance of an abaya.',
  },
  {
    question: 'What is Al Khous and how is it reflected in the Khous Jacket Abaya?',
    answer:
      'Al Khous is the traditional Emirati art of weaving palm fronds, a craft passed down through generations. The Khous Jacket Abaya draws inspiration from this heritage through textured detailing across the chest pockets and cuffs, reinterpreted through contemporary design.',
  },
  {
    question: 'Can the Khous Jacket Abaya be personalised?',
    answer:
      'Yes. Like all Bint Saeed abayas, the Khous Jacket Abaya can be personalised with a hidden interior label featuring a name, date, or meaningful message, making it especially meaningful for gifting, celebrations, and personal milestones.',
  },
]

const KNIGHTSBRIDGE_FAQ_ID: ProductFaqItem[] = [
  {
    question: 'Apa yang membuat Abaya Jaket Khous berbeda dari abaya lainnya?',
    answer:
      'Abaya Jaket Khous berada di antara abaya dan jaket, menggabungkan kemudahan berpakaian tradisional dengan kepercayaan diri pakaian luar kontemporer. Siluet santainya, bahu terstruktur, empat saku fungsional, dan detail khas menciptakan karya yang dirancang untuk kehidupan sehari-hari, bukan pemakaian sesekali.',
  },
  {
    question: 'Bagaimana Abaya Jaket Khous dapat distyling?',
    answer:
      'Dirancang untuk serbaguna, dapat dikenakan di atas gaun, tailoring, knitwear, tracksuit, dan pakaian sehari-hari. Baik dipadukan dengan sneakers, flats, atau heels, ia beradaptasi secara alami untuk perjalanan, kerja, kopi, dan kehidupan harian.',
  },
  {
    question: 'Mengapa Abaya Jaket Khous dirancang dengan siluet terinspirasi jaket?',
    answer:
      'Abaya Jaket Khous diciptakan untuk wanita yang bergerak antara peran, kota, dan lingkungan yang berbeda sepanjang hari. Terinspirasi serbagunanya pakaian luar, ia menawarkan siluet yang terasa percaya diri, praktis, dan effortless sambil mempertahankan keanggunan abaya.',
  },
  {
    question: 'Apa itu Al Khous dan bagaimana tercermin pada Abaya Jaket Khous?',
    answer:
      'Al Khous adalah seni tradisional Emirati menganyam pelepah palem, kerajinan yang diwariskan lintas generasi. Abaya Jaket Khous mengambil inspirasi dari warisan ini melalui detail bertekstur di saku dada dan manset, diinterpretasikan melalui desain kontemporer.',
  },
  {
    question: 'Apakah Abaya Jaket Khous dapat dipersonalisasi?',
    answer:
      'Ya. Seperti semua abaya Bint Saeed, Abaya Jaket Khous dapat dipersonalisasi dengan label interior tersembunyi berisi nama, tanggal, atau pesan bermakna, sangat berarti untuk hadiah, perayaan, dan pencapaian pribadi.',
  },
]

const KNIGHTSBRIDGE_FAQ_MS: ProductFaqItem[] = [
  {
    question: 'Apakah yang membezakan Abaya Jaket Khous daripada abaya lain?',
    answer:
      'Abaya Jaket Khous berada di antara abaya dan jaket, menggabungkan kemudahan pemakaian tradisional dengan keyakinan pakaian luar kontemporari. Siluet santainya, bahu berstruktur, empat poket fungsional, dan perincian khas mewujudkan sekeping yang direka untuk kehidupan harian, bukan pemakaian sekali-sekala.',
  },
  {
    question: 'Bagaimanakah Abaya Jaket Khous boleh digayakan?',
    answer:
      'Direka untuk serba guna, ia boleh dipakai di atas gaun, tailoring, knitwear, tracksuit, dan pakaian harian. Sama ada digandingkan dengan sneakers, flats, atau heels, ia menyesuaikan diri secara semula jadi untuk perjalanan, kerja, kopi, dan kehidupan harian.',
  },
  {
    question: 'Mengapakah Abaya Jaket Khous direka dengan siluet berinspirasi jaket?',
    answer:
      'Abaya Jaket Khous dicipta untuk wanita yang bergerak antara peranan, bandar, dan persekitaran yang berbeza sepanjang hari. Terinspirasi serba gunanya pakaian luar, ia menawarkan siluet yang terasa yakin, praktikal, dan effortless sambil mengekalkan keanggunan abaya.',
  },
  {
    question: 'Apakah Al Khous dan bagaimana ia tercermin pada Abaya Jaket Khous?',
    answer:
      'Al Khous ialah seni tradisional Emirati dalam menenun pelepah palma, kraftangan yang diwarisi turun-temurun. Abaya Jaket Khous mengambil inspirasi daripada warisan ini melalui perincian bertekstur di poket dada dan manset, ditafsirkan melalui reka bentuk kontemporari.',
  },
  {
    question: 'Bolehkah Abaya Jaket Khous diperibadikan?',
    answer:
      'Ya. Seperti semua abaya Bint Saeed, Abaya Jaket Khous boleh diperibadikan dengan label dalaman tersembunyi yang menampilkan nama, tarikh, atau mesej bermakna, menjadikannya sangat bermakna untuk hadiah, perayaan, dan pencapaian peribadi.',
  },
]

export function isKnightsbridgeAbayaSlug(slug: string): boolean {
  return slug.toLowerCase() === KNIGHTSBRIDGE_ABAYA_SLUG
}

export function getKnightsbridgeSchemaAudience(locale: AppLocale = 'en'): string {
  return KNIGHTSBRIDGE_AUDIENCE[locale] ?? KNIGHTSBRIDGE_AUDIENCE_EN
}

export function getLocalizedKnightsbridgeSchemaFacts(
  slug: string,
  locale: AppLocale = 'en',
): ProductSchemaFacts | null {
  if (!isKnightsbridgeAbayaSlug(slug)) return null
  if (locale === 'id') {
    return {
      madeIn: LOCALE_GEO.id.madeIn,
      ...KNIGHTSBRIDGE_FACTS_ID,
      faq: KNIGHTSBRIDGE_FAQ_ID,
    }
  }
  if (locale === 'ms') {
    return {
      madeIn: LOCALE_GEO.ms.madeIn,
      ...KNIGHTSBRIDGE_FACTS_MS,
      faq: KNIGHTSBRIDGE_FAQ_MS,
    }
  }
  return {
    madeIn: LOCALE_GEO.en.madeIn,
    ...KNIGHTSBRIDGE_FACTS_EN,
    faq: KNIGHTSBRIDGE_FAQ_EN,
  }
}

export function getLocalizedKnightsbridgeFaq(slug: string, locale: AppLocale = 'en'): ProductFaqItem[] {
  if (!isKnightsbridgeAbayaSlug(slug)) return []
  if (locale === 'id') return KNIGHTSBRIDGE_FAQ_ID
  if (locale === 'ms') return KNIGHTSBRIDGE_FAQ_MS
  return KNIGHTSBRIDGE_FAQ_EN
}

/** Shared PDP + schema FAQ source of truth. */
export function getKnightsbridgePdpFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  if (locale === 'id') return KNIGHTSBRIDGE_FAQ_ID
  if (locale === 'ms') return KNIGHTSBRIDGE_FAQ_MS
  return KNIGHTSBRIDGE_FAQ_EN
}

export { KNIGHTSBRIDGE_MATERIAL }
