/**
 * Hidden discovery keywords for luxury abayas — style, geo, travel, editorial search intents.
 * Meta / schema / AI only — never visible site copy.
 * EN is source of truth; locales use native luxury retail phrasing.
 */
import type { AppLocale } from '@/lib/i18n/routing'

const ABAYA: Record<AppLocale, string> = {
  en: 'abaya',
  ar: 'عباية',
  fr: 'abaya',
  it: 'abaya',
  es: 'abaya',
  ru: 'абайя',
  zh: '阿巴亚',
  de: 'Abaya',
  nl: 'abaya',
  pt: 'abaya',
  id: 'abaya',
  ms: 'abaya',
}

const ABAYAS: Record<AppLocale, string> = {
  en: 'abayas',
  ar: 'عبايات',
  fr: 'abayas',
  it: 'abaya',
  es: 'abayas',
  ru: 'абайи',
  zh: '阿巴亚',
  de: 'Abayas',
  nl: 'abaya’s',
  pt: 'abayas',
  id: 'abaya',
  ms: 'abaya',
}

type StyleId =
  | 'quietLuxury'
  | 'highEnd'
  | 'luxury'
  | 'minimal'
  | 'elegant'
  | 'international'
  | 'italian'
  | 'spanish'
  | 'french'
  | 'contemporary'
  | 'designer'
  | 'premium'
  | 'modest'
  | 'evening'
  | 'travel'
  | 'exclusive'
  | 'statement'
  | 'refined'
  | 'couture'
  | 'blackTie'

const STYLE: Record<AppLocale, Record<StyleId, string>> = {
  en: {
    quietLuxury: 'quiet luxury',
    highEnd: 'high end',
    luxury: 'luxury',
    minimal: 'minimal',
    elegant: 'elegant',
    international: 'international',
    italian: 'italian',
    spanish: 'spanish',
    french: 'french',
    contemporary: 'contemporary',
    designer: 'designer',
    premium: 'premium',
    modest: 'modest',
    evening: 'evening',
    travel: 'travel',
    exclusive: 'exclusive',
    statement: 'statement',
    refined: 'refined',
    couture: 'couture',
    blackTie: 'black tie',
  },
  ar: {
    quietLuxury: 'فخامة هادئة',
    highEnd: 'راقية',
    luxury: 'فاخرة',
    minimal: 'مينيمال',
    elegant: 'أنيقة',
    international: 'عالمية',
    italian: 'إيطالية',
    spanish: 'إسبانية',
    french: 'فرنسية',
    contemporary: 'معاصرة',
    designer: 'مصمّمة',
    premium: 'بريميوم',
    modest: 'محتشمة',
    evening: 'مسائية',
    travel: 'سفر',
    exclusive: 'حصرية',
    statement: 'جريئة',
    refined: 'راقية',
    couture: 'هوت كوتور',
    blackTie: 'سهرة رسمية',
  },
  fr: {
    quietLuxury: 'luxe discret',
    highEnd: 'haut de gamme',
    luxury: 'luxe',
    minimal: 'minimal',
    elegant: 'élégante',
    international: 'internationale',
    italian: 'italienne',
    spanish: 'espagnole',
    french: 'française',
    contemporary: 'contemporaine',
    designer: 'designer',
    premium: 'premium',
    modest: 'modeste',
    evening: 'soirée',
    travel: 'voyage',
    exclusive: 'exclusive',
    statement: 'statement',
    refined: 'raffinée',
    couture: 'couture',
    blackTie: 'tenue de soirée',
  },
  it: {
    quietLuxury: 'lusso discreto',
    highEnd: 'di alta gamma',
    luxury: 'di lusso',
    minimal: 'minimal',
    elegant: 'elegante',
    international: 'internazionale',
    italian: 'italiana',
    spanish: 'spagnola',
    french: 'francese',
    contemporary: 'contemporanea',
    designer: 'designer',
    premium: 'premium',
    modest: 'modesta',
    evening: 'da sera',
    travel: 'da viaggio',
    exclusive: 'esclusiva',
    statement: 'statement',
    refined: 'raffinata',
    couture: 'couture',
    blackTie: 'black tie',
  },
  es: {
    quietLuxury: 'lujo silencioso',
    highEnd: 'alta gama',
    luxury: 'de lujo',
    minimal: 'minimal',
    elegant: 'elegante',
    international: 'internacional',
    italian: 'italiana',
    spanish: 'española',
    french: 'francesa',
    contemporary: 'contemporánea',
    designer: 'de diseñador',
    premium: 'premium',
    modest: 'modesta',
    evening: 'de noche',
    travel: 'de viaje',
    exclusive: 'exclusiva',
    statement: 'statement',
    refined: 'refinada',
    couture: 'couture',
    blackTie: 'etiqueta',
  },
  ru: {
    quietLuxury: 'тихая роскошь',
    highEnd: 'премиальная',
    luxury: 'роскошная',
    minimal: 'минималистичная',
    elegant: 'элегантная',
    international: 'международная',
    italian: 'итальянская',
    spanish: 'испанская',
    french: 'французская',
    contemporary: 'современная',
    designer: 'дизайнерская',
    premium: 'премиум',
    modest: 'скромная',
    evening: 'вечерняя',
    travel: 'для путешествий',
    exclusive: 'эксклюзивная',
    statement: 'яркая',
    refined: 'изысканная',
    couture: 'от-кутюр',
    blackTie: 'чёрный галстук',
  },
  zh: {
    quietLuxury: '静奢',
    highEnd: '高端',
    luxury: '奢华',
    minimal: '极简',
    elegant: '优雅',
    international: '国际',
    italian: '意式',
    spanish: '西式',
    french: '法式',
    contemporary: '当代',
    designer: '设计师',
    premium: '高级',
    modest: '端庄',
    evening: '晚装',
    travel: '旅行',
    exclusive: '独家',
    statement: '宣言式',
    refined: '精致',
    couture: '高级定制',
    blackTie: '正式晚装',
  },
  de: {
    quietLuxury: 'Quiet Luxury',
    highEnd: 'High-End',
    luxury: 'Luxus',
    minimal: 'minimal',
    elegant: 'elegant',
    international: 'international',
    italian: 'italienisch',
    spanish: 'spanisch',
    french: 'französisch',
    contemporary: 'zeitgenössisch',
    designer: 'Designer',
    premium: 'Premium',
    modest: 'bescheiden',
    evening: 'Abend',
    travel: 'Reise',
    exclusive: 'exklusiv',
    statement: 'Statement',
    refined: 'raffiniert',
    couture: 'Couture',
    blackTie: 'Black Tie',
  },
  nl: {
    quietLuxury: 'stille luxe',
    highEnd: 'high-end',
    luxury: 'luxe',
    minimal: 'minimaal',
    elegant: 'elegant',
    international: 'internationaal',
    italian: 'Italiaans',
    spanish: 'Spaans',
    french: 'Frans',
    contemporary: 'eigentijds',
    designer: 'designer',
    premium: 'premium',
    modest: 'bescheiden',
    evening: 'avond',
    travel: 'reis',
    exclusive: 'exclusief',
    statement: 'statement',
    refined: 'verfijnd',
    couture: 'couture',
    blackTie: 'black tie',
  },
  pt: {
    quietLuxury: 'luxo discreto',
    highEnd: 'alta gama',
    luxury: 'de luxo',
    minimal: 'minimal',
    elegant: 'elegante',
    international: 'internacional',
    italian: 'italiana',
    spanish: 'espanhola',
    french: 'francesa',
    contemporary: 'contemporânea',
    designer: 'de designer',
    premium: 'premium',
    modest: 'modesta',
    evening: 'de noite',
    travel: 'de viagem',
    exclusive: 'exclusiva',
    statement: 'statement',
    refined: 'refinada',
    couture: 'couture',
    blackTie: 'black tie',
  },
  id: {
    quietLuxury: 'kemewahan tenang',
    highEnd: 'kelas atas',
    luxury: 'mewah',
    minimal: 'minimal',
    elegant: 'elegan',
    international: 'internasional',
    italian: 'Italia',
    spanish: 'Spanyol',
    french: 'Prancis',
    contemporary: 'kontemporer',
    designer: 'desainer',
    premium: 'premium',
    modest: 'sederhana',
    evening: 'malam',
    travel: 'perjalanan',
    exclusive: 'eksklusif',
    statement: 'statement',
    refined: 'halus',
    couture: 'couture',
    blackTie: 'black tie',
  },
  ms: {
    quietLuxury: 'kemewahan tenang',
    highEnd: 'kelas tinggi',
    luxury: 'mewah',
    minimal: 'minimal',
    elegant: 'elegan',
    international: 'antarabangsa',
    italian: 'Itali',
    spanish: 'Sepanyol',
    french: 'Perancis',
    contemporary: 'kontemporari',
    designer: 'pereka',
    premium: 'premium',
    modest: 'sederhana',
    evening: 'malam',
    travel: 'perjalanan',
    exclusive: 'eksklusif',
    statement: 'statement',
    refined: 'halus',
    couture: 'couture',
    blackTie: 'black tie',
  },
}

type GeoId =
  | 'uae'
  | 'dubai'
  | 'abuDhabi'
  | 'qatar'
  | 'doha'
  | 'saudi'
  | 'riyadh'
  | 'kuwait'
  | 'bahrain'
  | 'oman'
  | 'gcc'
  | 'middleEast'
  | 'london'
  | 'paris'
  | 'milan'
  | 'madrid'
  | 'rome'
  | 'newYork'
  | 'europe'

const GEO: Record<AppLocale, Record<GeoId, string>> = {
  en: {
    uae: 'UAE',
    dubai: 'Dubai',
    abuDhabi: 'Abu Dhabi',
    qatar: 'Qatar',
    doha: 'Doha',
    saudi: 'Saudi Arabia',
    riyadh: 'Riyadh',
    kuwait: 'Kuwait',
    bahrain: 'Bahrain',
    oman: 'Oman',
    gcc: 'GCC',
    middleEast: 'Middle East',
    london: 'London',
    paris: 'Paris',
    milan: 'Milan',
    madrid: 'Madrid',
    rome: 'Rome',
    newYork: 'New York',
    europe: 'Europe',
  },
  ar: {
    uae: 'الإمارات',
    dubai: 'دبي',
    abuDhabi: 'أبوظبي',
    qatar: 'قطر',
    doha: 'الدوحة',
    saudi: 'السعودية',
    riyadh: 'الرياض',
    kuwait: 'الكويت',
    bahrain: 'البحرين',
    oman: 'عمان',
    gcc: 'الخليج',
    middleEast: 'الشرق الأوسط',
    london: 'لندن',
    paris: 'باريس',
    milan: 'ميلانو',
    madrid: 'مدريد',
    rome: 'روما',
    newYork: 'نيويورك',
    europe: 'أوروبا',
  },
  fr: {
    uae: 'EAU',
    dubai: 'Dubaï',
    abuDhabi: 'Abou Dabi',
    qatar: 'Qatar',
    doha: 'Doha',
    saudi: 'Arabie saoudite',
    riyadh: 'Riyad',
    kuwait: 'Koweït',
    bahrain: 'Bahreïn',
    oman: 'Oman',
    gcc: 'CCG',
    middleEast: 'Moyen-Orient',
    london: 'Londres',
    paris: 'Paris',
    milan: 'Milan',
    madrid: 'Madrid',
    rome: 'Rome',
    newYork: 'New York',
    europe: 'Europe',
  },
  it: {
    uae: 'EAU',
    dubai: 'Dubai',
    abuDhabi: 'Abu Dhabi',
    qatar: 'Qatar',
    doha: 'Doha',
    saudi: 'Arabia Saudita',
    riyadh: 'Riad',
    kuwait: 'Kuwait',
    bahrain: 'Bahrain',
    oman: 'Oman',
    gcc: 'GCC',
    middleEast: 'Medio Oriente',
    london: 'Londra',
    paris: 'Parigi',
    milan: 'Milano',
    madrid: 'Madrid',
    rome: 'Roma',
    newYork: 'New York',
    europe: 'Europa',
  },
  es: {
    uae: 'EAU',
    dubai: 'Dubái',
    abuDhabi: 'Abu Dabi',
    qatar: 'Qatar',
    doha: 'Doha',
    saudi: 'Arabia Saudí',
    riyadh: 'Riad',
    kuwait: 'Kuwait',
    bahrain: 'Baréin',
    oman: 'Omán',
    gcc: 'CCG',
    middleEast: 'Oriente Medio',
    london: 'Londres',
    paris: 'París',
    milan: 'Milán',
    madrid: 'Madrid',
    rome: 'Roma',
    newYork: 'Nueva York',
    europe: 'Europa',
  },
  ru: {
    uae: 'ОАЭ',
    dubai: 'Дубай',
    abuDhabi: 'Абу-Даби',
    qatar: 'Катар',
    doha: 'Доха',
    saudi: 'Саудовская Аравия',
    riyadh: 'Эр-Рияд',
    kuwait: 'Кувейт',
    bahrain: 'Бахрейн',
    oman: 'Оман',
    gcc: 'ССАГПЗ',
    middleEast: 'Ближний Восток',
    london: 'Лондон',
    paris: 'Париж',
    milan: 'Милан',
    madrid: 'Мадрид',
    rome: 'Рим',
    newYork: 'Нью-Йорк',
    europe: 'Европа',
  },
  zh: {
    uae: '阿联酋',
    dubai: '迪拜',
    abuDhabi: '阿布扎比',
    qatar: '卡塔尔',
    doha: '多哈',
    saudi: '沙特',
    riyadh: '利雅得',
    kuwait: '科威特',
    bahrain: '巴林',
    oman: '阿曼',
    gcc: '海湾',
    middleEast: '中东',
    london: '伦敦',
    paris: '巴黎',
    milan: '米兰',
    madrid: '马德里',
    rome: '罗马',
    newYork: '纽约',
    europe: '欧洲',
  },
  de: {
    uae: 'VAE',
    dubai: 'Dubai',
    abuDhabi: 'Abu Dhabi',
    qatar: 'Katar',
    doha: 'Doha',
    saudi: 'Saudi-Arabien',
    riyadh: 'Riad',
    kuwait: 'Kuwait',
    bahrain: 'Bahrain',
    oman: 'Oman',
    gcc: 'GCC',
    middleEast: 'Naher Osten',
    london: 'London',
    paris: 'Paris',
    milan: 'Mailand',
    madrid: 'Madrid',
    rome: 'Rom',
    newYork: 'New York',
    europe: 'Europa',
  },
  nl: {
    uae: 'VAE',
    dubai: 'Dubai',
    abuDhabi: 'Abu Dhabi',
    qatar: 'Qatar',
    doha: 'Doha',
    saudi: 'Saoedi-Arabië',
    riyadh: 'Riyad',
    kuwait: 'Koeweit',
    bahrain: 'Bahrein',
    oman: 'Oman',
    gcc: 'GCC',
    middleEast: 'Midden-Oosten',
    london: 'Londen',
    paris: 'Parijs',
    milan: 'Milaan',
    madrid: 'Madrid',
    rome: 'Rome',
    newYork: 'New York',
    europe: 'Europa',
  },
  pt: {
    uae: 'EAU',
    dubai: 'Dubai',
    abuDhabi: 'Abu Dhabi',
    qatar: 'Catar',
    doha: 'Doha',
    saudi: 'Arábia Saudita',
    riyadh: 'Riade',
    kuwait: 'Kuwait',
    bahrain: 'Bahrein',
    oman: 'Omã',
    gcc: 'CCG',
    middleEast: 'Médio Oriente',
    london: 'Londres',
    paris: 'Paris',
    milan: 'Milão',
    madrid: 'Madrid',
    rome: 'Roma',
    newYork: 'Nova Iorque',
    europe: 'Europa',
  },
  id: {
    uae: 'UEA',
    dubai: 'Dubai',
    abuDhabi: 'Abu Dhabi',
    qatar: 'Qatar',
    doha: 'Doha',
    saudi: 'Arab Saudi',
    riyadh: 'Riyadh',
    kuwait: 'Kuwait',
    bahrain: 'Bahrain',
    oman: 'Oman',
    gcc: 'GCC',
    middleEast: 'Timur Tengah',
    london: 'London',
    paris: 'Paris',
    milan: 'Milan',
    madrid: 'Madrid',
    rome: 'Roma',
    newYork: 'New York',
    europe: 'Eropa',
  },
  ms: {
    uae: 'UAE',
    dubai: 'Dubai',
    abuDhabi: 'Abu Dhabi',
    qatar: 'Qatar',
    doha: 'Doha',
    saudi: 'Arab Saudi',
    riyadh: 'Riyadh',
    kuwait: 'Kuwait',
    bahrain: 'Bahrain',
    oman: 'Oman',
    gcc: 'GCC',
    middleEast: 'Timur Tengah',
    london: 'London',
    paris: 'Paris',
    milan: 'Milan',
    madrid: 'Madrid',
    rome: 'Rom',
    newYork: 'New York',
    europe: 'Eropah',
  },
}

/** Editorial / magazine search intents — discovery only; not a claim of coverage. */
const EDITORIAL_EN = [
  'marie claire abaya',
  'marie claire abayas',
  'vogue abaya',
  'vogue abayas',
  'harpers bazaar abaya',
  "harper's bazaar abaya",
  'elle abaya',
  'elle abayas',
  'vogue middle east abaya',
  'marie claire middle east abaya',
  'fashion magazine abaya',
  'editorial abaya',
  'runway abaya',
]

const TRAVEL_ROWS: Record<AppLocale, string[]> = {
  en: [
    'abayas for the Middle East',
    'abaya for Middle East travel',
    'what to wear in the Middle East',
    'what to wear to the Middle East',
    'what to wear in UAE',
    'what to wear in Dubai',
    'what to wear in Abu Dhabi',
    'what to wear in Qatar',
    'what to wear in Doha',
    'clothing for Middle East travel',
    'dress code Middle East women',
    'women travelling to the Middle East',
    'outfit for Middle East trip',
    'modest dress for Middle East visitors',
    'luxury travel abaya',
    'airport to dinner abaya',
  ],
  ar: [
    'عبايات للشرق الأوسط',
    'عباية للسفر إلى الشرق الأوسط',
    'ماذا ترتدي في الشرق الأوسط',
    'ماذا ترتدي في الإمارات',
    'ماذا ترتدي في دبي',
    'ماذا ترتدي في أبوظبي',
    'ماذا ترتدي في قطر',
    'ملابس لسفر الشرق الأوسط',
    'قواعد اللباس نساء الشرق الأوسط',
    'عباية سفر فاخرة',
  ],
  fr: [
    'abayas pour le Moyen-Orient',
    'abaya voyage Moyen-Orient',
    'que porter au Moyen-Orient',
    'que porter aux EAU',
    'que porter à Dubaï',
    'que porter à Abou Dabi',
    'que porter au Qatar',
    'tenue voyage Moyen-Orient',
    'code vestimentaire Moyen-Orient femmes',
    'abaya de voyage de luxe',
  ],
  it: [
    'abaya per il Medio Oriente',
    'abaya viaggio Medio Oriente',
    'cosa indossare in Medio Oriente',
    'cosa indossare negli Emirati',
    'cosa indossare a Dubai',
    'cosa indossare a Abu Dhabi',
    'cosa indossare in Qatar',
    'abbigliamento viaggio Medio Oriente',
    'dress code Medio Oriente donne',
    'abaya da viaggio di lusso',
  ],
  es: [
    'abayas para Oriente Medio',
    'abaya viaje Oriente Medio',
    'qué llevar en Oriente Medio',
    'qué llevar en EAU',
    'qué llevar en Dubái',
    'qué llevar en Abu Dabi',
    'qué llevar en Qatar',
    'ropa viaje Oriente Medio',
    'código de vestimenta Oriente Medio mujeres',
    'abaya de viaje de lujo',
  ],
  ru: [
    'абайи для Ближнего Востока',
    'абайя для поездки на Ближний Восток',
    'что надеть на Ближнем Востоке',
    'что надеть в ОАЭ',
    'что надеть в Дубае',
    'что надеть в Абу-Даби',
    'что надеть в Катаре',
    'одежда для путешествия на Ближний Восток',
    'дресс-код Ближний Восток женщины',
    'роскошная абайя для путешествий',
  ],
  zh: [
    '中东阿巴亚',
    '中东旅行阿巴亚',
    '中东穿什么',
    '阿联酋穿什么',
    '迪拜穿什么',
    '阿布扎比穿什么',
    '卡塔尔穿什么',
    '中东旅行着装',
    '中东女性着装规范',
    '奢华旅行阿巴亚',
  ],
  de: [
    'Abayas für den Nahen Osten',
    'Abaya Nahost-Reise',
    'was tragen im Nahen Osten',
    'was tragen in den VAE',
    'was tragen in Dubai',
    'was tragen in Abu Dhabi',
    'was tragen in Katar',
    'Kleidung Nahost-Reise',
    'Dresscode Naher Osten Frauen',
    'Luxus-Reise-Abaya',
  ],
  nl: [
    'abaya’s voor het Midden-Oosten',
    'abaya Midden-Oosten reis',
    'wat te dragen in het Midden-Oosten',
    'wat te dragen in de VAE',
    'wat te dragen in Dubai',
    'wat te dragen in Abu Dhabi',
    'wat te dragen in Qatar',
    'kleding Midden-Oosten reis',
    'kledingvoorschrift Midden-Oosten vrouwen',
    'luxe reis abaya',
  ],
  pt: [
    'abayas para o Médio Oriente',
    'abaya viagem Médio Oriente',
    'o que vestir no Médio Oriente',
    'o que vestir nos EAU',
    'o que vestir em Dubai',
    'o que vestir em Abu Dhabi',
    'o que vestir no Catar',
    'roupa viagem Médio Oriente',
    'código de vestimenta Médio Oriente mulheres',
    'abaya de viagem de luxo',
  ],
  id: [
    'abaya untuk Timur Tengah',
    'abaya perjalanan Timur Tengah',
    'apa yang dikenakan di Timur Tengah',
    'apa yang dikenakan di UEA',
    'apa yang dikenakan di Dubai',
    'apa yang dikenakan di Abu Dhabi',
    'apa yang dikenakan di Qatar',
    'pakaian perjalanan Timur Tengah',
    'kode busana Timur Tengah wanita',
    'abaya perjalanan mewah',
  ],
  ms: [
    'abaya untuk Timur Tengah',
    'abaya perjalanan Timur Tengah',
    'apa yang dipakai di Timur Tengah',
    'apa yang dipakai di UAE',
    'apa yang dipakai di Dubai',
    'apa yang dipakai di Abu Dhabi',
    'apa yang dipakai di Qatar',
    'pakaian perjalanan Timur Tengah',
    'kod pakaian Timur Tengah wanita',
    'abaya perjalanan mewah',
  ],
}

const STYLE_IDS = Object.keys(STYLE.en) as StyleId[]
const GEO_IDS = Object.keys(GEO.en) as GeoId[]

function joinPhrase(locale: AppLocale, parts: string[]): string {
  if (locale === 'zh') return parts.filter(Boolean).join('')
  return parts.filter(Boolean).join(' ')
}

function phraseStyleAbaya(locale: AppLocale, style: StyleId, plural = false): string {
  const s = STYLE[locale][style]
  const noun = plural ? ABAYAS[locale] : ABAYA[locale]
  if (locale === 'ar') return `${noun} ${s}`
  if (locale === 'zh') return `${s}${noun}`
  return `${s} ${noun}`
}

function phraseGeoAbaya(locale: AppLocale, geo: GeoId, plural = false): string {
  const g = GEO[locale][geo]
  const noun = plural ? ABAYAS[locale] : ABAYA[locale]
  if (locale === 'ar') return `${noun} ${g}`
  if (locale === 'zh') return `${g}${noun}`
  return `${noun} ${g}`
}

function phraseStyleGeoAbaya(locale: AppLocale, style: StyleId, geo: GeoId): string {
  const s = STYLE[locale][style]
  const g = GEO[locale][geo]
  const noun = ABAYA[locale]
  if (locale === 'ar') return `${noun} ${s} ${g}`
  if (locale === 'zh') return `${s}${g}${noun}`
  return `${s} ${noun} ${g}`
}

function dedupe(terms: string[]): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  for (const term of terms) {
    const t = term.trim().replace(/\s+/g, ' ')
    if (!t) continue
    const key = t.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    out.push(t)
  }
  return out
}

const HIGH_INTENT_STYLES: StyleId[] = [
  'quietLuxury',
  'highEnd',
  'luxury',
  'minimal',
  'elegant',
  'international',
  'italian',
  'spanish',
  'french',
  'designer',
  'contemporary',
  'premium',
  'exclusive',
]

const HIGH_INTENT_GEOS: GeoId[] = [
  'uae',
  'dubai',
  'abuDhabi',
  'qatar',
  'doha',
  'saudi',
  'riyadh',
  'kuwait',
  'gcc',
  'middleEast',
  'london',
  'paris',
  'milan',
  'madrid',
  'europe',
]

/** Flat discovery list — all locales. */
export function getAbayaProductDiscoveryKeywords(locale: AppLocale = 'en'): string[] {
  const out: string[] = []
  const abaya = ABAYA[locale]
  const abayas = ABAYAS[locale]

  out.push(abaya, abayas)
  out.push(joinPhrase(locale, [STYLE[locale].luxury, abaya]))
  out.push(joinPhrase(locale, [STYLE[locale].luxury, abayas]))

  for (const style of STYLE_IDS) {
    out.push(phraseStyleAbaya(locale, style, false))
    out.push(phraseStyleAbaya(locale, style, true))
  }

  for (const geo of GEO_IDS) {
    out.push(phraseGeoAbaya(locale, geo, false))
    out.push(phraseGeoAbaya(locale, geo, true))
  }

  for (const style of HIGH_INTENT_STYLES) {
    for (const geo of HIGH_INTENT_GEOS) {
      out.push(phraseStyleGeoAbaya(locale, style, geo))
    }
  }

  out.push(...(TRAVEL_ROWS[locale] ?? TRAVEL_ROWS.en))

  if (locale === 'en') {
    out.push(
      ...EDITORIAL_EN,
      'quiet luxury abaya',
      'quiet-luxury abaya',
      'high-end abaya',
      'high end abayas',
      'minimalist abaya',
      'minimal black abaya',
      'elegant black abaya',
      'italian style abaya',
      'spanish style abaya',
      'french style abaya',
      'european abaya',
      'european luxury abaya',
      'international designer abaya',
      'buy luxury abaya online',
      'best luxury abaya brand',
      'Emirati luxury abaya',
      'Abu Dhabi luxury abaya brand',
      'Bint Saeed abaya',
      'Bint Saeed luxury abaya',
    )
  } else {
    // Localized soft editorial discovery (magazine + abaya) without false “featured in” claims
    const mag = {
      ar: ['مارى كلير عباية', 'فوغ عباية', 'إل عباية'],
      fr: ['marie claire abaya', 'vogue abaya', 'elle abaya'],
      it: ['marie claire abaya', 'vogue abaya', 'elle abaya'],
      es: ['marie claire abaya', 'vogue abaya', 'elle abaya'],
      ru: ['marie claire абайя', 'vogue абайя', 'elle абайя'],
      zh: ['嘉人阿巴亚', 'Vogue阿巴亚', 'ELLE阿巴亚'],
      de: ['Marie Claire Abaya', 'Vogue Abaya', 'Elle Abaya'],
      nl: ['marie claire abaya', 'vogue abaya', 'elle abaya'],
      pt: ['marie claire abaya', 'vogue abaya', 'elle abaya'],
      id: ['marie claire abaya', 'vogue abaya', 'elle abaya'],
      ms: ['marie claire abaya', 'vogue abaya', 'elle abaya'],
    } as const
    out.push(...(mag[locale as Exclude<AppLocale, 'en'>] ?? []))
  }

  return dedupe(out)
}
