import type { AppLocale } from '@/lib/i18n/routing'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'

/**
 * Hidden discovery layer for natural-stone accessories.
 * Birthstone months, zodiac links and symbolic meanings are for meta keywords,
 * ai:* tags and JSON-LD only — never rendered in visible PDP copy.
 *
 * Fully localized for every AppLocale. EN remains the source of associations;
 * other locales use native luxury jewellery terminology for local search.
 */

export type NaturalStoneKey =
  | 'malachite'
  | 'rose-quartz'
  | 'lapis-lazuli'
  | 'onyx'
  | 'tiger-eye'
  | 'sunstone'
  | 'jade'
  | 'orange-jade'
  | 'fuchsia-jade'
  | 'amethyst'
  | 'carnelian'
  | 'blue-aventurine'
  | 'hematite'

type BirthMonthKey =
  | 'January'
  | 'February'
  | 'March'
  | 'July'
  | 'August'
  | 'September'
  | 'November'
  | 'December'

type ZodiacKey =
  | 'Aries'
  | 'Taurus'
  | 'Gemini'
  | 'Leo'
  | 'Virgo'
  | 'Libra'
  | 'Scorpio'
  | 'Sagittarius'
  | 'Capricorn'
  | 'Aquarius'
  | 'Pisces'

type MeaningKey =
  | 'calmness'
  | 'clarity'
  | 'emotional balance'
  | 'tranquility'
  | 'wisdom'
  | 'love'
  | 'compassion'
  | 'emotional healing'
  | 'harmony'
  | 'truth'
  | 'transformation'
  | 'protection'
  | 'balance'
  | 'abundance'
  | 'strength'
  | 'grounding'
  | 'courage'
  | 'confidence'
  | 'joy'
  | 'vitality'
  | 'leadership'
  | 'optimism'
  | 'prosperity'
  | 'creativity'
  | 'opportunity'
  | 'warmth'
  | 'renewal'
  | 'focus'
  | 'serenity'
  | 'motivation'

type StoneAssociation = {
  birthMonths: BirthMonthKey[]
  zodiac: ZodiacKey[]
  meanings: MeaningKey[]
}

/** Canonical EN associations — source of truth for all locales. */
const STONE_ASSOCIATIONS: Record<NaturalStoneKey, StoneAssociation> = {
  amethyst: {
    birthMonths: ['February'],
    zodiac: ['Aquarius', 'Pisces'],
    meanings: ['calmness', 'clarity', 'emotional balance', 'tranquility', 'wisdom'],
  },
  'rose-quartz': {
    birthMonths: ['January'],
    zodiac: ['Taurus', 'Libra', 'Pisces'],
    meanings: ['love', 'compassion', 'emotional healing', 'harmony'],
  },
  'lapis-lazuli': {
    birthMonths: ['September', 'December'],
    zodiac: ['Sagittarius', 'Libra'],
    meanings: ['wisdom', 'truth', 'clarity'],
  },
  malachite: {
    birthMonths: [],
    zodiac: ['Scorpio', 'Capricorn', 'Sagittarius'],
    meanings: ['transformation', 'protection', 'balance', 'abundance'],
  },
  onyx: {
    birthMonths: ['July'],
    zodiac: ['Capricorn', 'Leo'],
    meanings: ['strength', 'grounding', 'protection'],
  },
  'tiger-eye': {
    birthMonths: ['November'],
    zodiac: ['Leo', 'Gemini', 'Capricorn'],
    meanings: ['courage', 'clarity', 'confidence'],
  },
  sunstone: {
    birthMonths: [],
    zodiac: ['Leo', 'Libra'],
    meanings: ['joy', 'vitality', 'leadership', 'optimism'],
  },
  jade: {
    birthMonths: ['March'],
    zodiac: ['Libra', 'Taurus', 'Pisces'],
    meanings: ['prosperity', 'harmony', 'abundance'],
  },
  'orange-jade': {
    birthMonths: ['March'],
    zodiac: ['Libra', 'Leo'],
    meanings: ['prosperity', 'harmony', 'abundance', 'vitality', 'warmth'],
  },
  'fuchsia-jade': {
    birthMonths: ['March'],
    zodiac: ['Libra', 'Pisces'],
    meanings: ['prosperity', 'harmony', 'abundance', 'joy'],
  },
  carnelian: {
    birthMonths: ['July', 'August'],
    zodiac: ['Aries', 'Virgo', 'Leo'],
    meanings: ['vitality', 'courage', 'creativity'],
  },
  'blue-aventurine': {
    birthMonths: [],
    zodiac: ['Aries', 'Leo'],
    meanings: ['opportunity', 'leadership', 'prosperity'],
  },
  hematite: {
    birthMonths: [],
    zodiac: ['Aries', 'Aquarius'],
    meanings: ['grounding', 'protection'],
  },
}

const STONE_LABEL: Record<AppLocale, Record<NaturalStoneKey, string>> = {
  en: {
    malachite: 'Malachite',
    'rose-quartz': 'Rose Quartz',
    'lapis-lazuli': 'Lapis Lazuli',
    onyx: 'Onyx',
    'tiger-eye': 'Tiger Eye',
    sunstone: 'Sunstone',
    jade: 'Jade',
    'orange-jade': 'Orange Jade',
    'fuchsia-jade': 'Fuchsia Jade',
    amethyst: 'Amethyst',
    carnelian: 'Carnelian',
    'blue-aventurine': 'Blue Aventurine',
    hematite: 'Hematite',
  },
  ar: {
    malachite: 'الملاكيت',
    'rose-quartz': 'الكوارتز الوردي',
    'lapis-lazuli': 'اللازورد',
    onyx: 'العقيق الأسود',
    'tiger-eye': 'عين النمر',
    sunstone: 'حجر الشمس',
    jade: 'اليشم',
    'orange-jade': 'اليشم البرتقالي',
    'fuchsia-jade': 'اليشم الفوشيا',
    amethyst: 'الجمشت',
    carnelian: 'العقيق الأحمر',
    'blue-aventurine': 'الأفنتورين الأزرق',
    hematite: 'الهيماتيت',
  },
  fr: {
    malachite: 'Malachite',
    'rose-quartz': 'Quartz rose',
    'lapis-lazuli': 'Lapis-lazuli',
    onyx: 'Onyx',
    'tiger-eye': 'Œil de tigre',
    sunstone: 'Pierre de soleil',
    jade: 'Jade',
    'orange-jade': 'Jade orange',
    'fuchsia-jade': 'Jade fuchsia',
    amethyst: 'Améthyste',
    carnelian: 'Cornaline',
    'blue-aventurine': 'Aventurine bleue',
    hematite: 'Hématite',
  },
  it: {
    malachite: 'Malachite',
    'rose-quartz': 'Quarzo rosa',
    'lapis-lazuli': 'Lapislazzuli',
    onyx: 'Onice',
    'tiger-eye': 'Occhio di tigre',
    sunstone: 'Pietra di sole',
    jade: 'Giada',
    'orange-jade': 'Giada arancio',
    'fuchsia-jade': 'Giada fucsia',
    amethyst: 'Ametista',
    carnelian: 'Corniola',
    'blue-aventurine': 'Avventurina blu',
    hematite: 'Ematite',
  },
  es: {
    malachite: 'Malaquita',
    'rose-quartz': 'Cuarzo rosa',
    'lapis-lazuli': 'Lapislázuli',
    onyx: 'Ónice',
    'tiger-eye': 'Ojo de tigre',
    sunstone: 'Piedra del sol',
    jade: 'Jade',
    'orange-jade': 'Jade naranja',
    'fuchsia-jade': 'Jade fucsia',
    amethyst: 'Amatista',
    carnelian: 'Cornalina',
    'blue-aventurine': 'Aventurina azul',
    hematite: 'Hematita',
  },
  ru: {
    malachite: 'Малахит',
    'rose-quartz': 'Розовый кварц',
    'lapis-lazuli': 'Лазурит',
    onyx: 'Оникс',
    'tiger-eye': 'Тигровый глаз',
    sunstone: 'Солнечный камень',
    jade: 'Нефрит',
    'orange-jade': 'Оранжевый нефрит',
    'fuchsia-jade': 'Фуксиевый нефрит',
    amethyst: 'Аметист',
    carnelian: 'Сердолик',
    'blue-aventurine': 'Голубой авантюрин',
    hematite: 'Гематит',
  },
  zh: {
    malachite: '孔雀石',
    'rose-quartz': '粉水晶',
    'lapis-lazuli': '青金石',
    onyx: '玛瑙',
    'tiger-eye': '虎眼石',
    sunstone: '太阳石',
    jade: '翡翠',
    'orange-jade': '橙翡翠',
    'fuchsia-jade': '桃红翡翠',
    amethyst: '紫水晶',
    carnelian: '红玛瑙',
    'blue-aventurine': '蓝东陵石',
    hematite: '赤铁矿',
  },
  de: {
    malachite: 'Malachit',
    'rose-quartz': 'Rosenquarz',
    'lapis-lazuli': 'Lapislazuli',
    onyx: 'Onyx',
    'tiger-eye': 'Tigerauge',
    sunstone: 'Sonnenstein',
    jade: 'Jade',
    'orange-jade': 'Oranger Jade',
    'fuchsia-jade': 'Fuchsienjade',
    amethyst: 'Amethyst',
    carnelian: 'Karneol',
    'blue-aventurine': 'Blauer Aventurin',
    hematite: 'Hämatit',
  },
  nl: {
    malachite: 'Malachiet',
    'rose-quartz': 'Rozenkwarts',
    'lapis-lazuli': 'Lapis lazuli',
    onyx: 'Onyx',
    'tiger-eye': 'Tijgeroog',
    sunstone: 'Zonnesteen',
    jade: 'Jade',
    'orange-jade': 'Oranje jade',
    'fuchsia-jade': 'Fuchsia jade',
    amethyst: 'Amethist',
    carnelian: 'Carneool',
    'blue-aventurine': 'Blauwe aventurijn',
    hematite: 'Hematiet',
  },
  pt: {
    malachite: 'Malaquita',
    'rose-quartz': 'Quartzo rosa',
    'lapis-lazuli': 'Lápis-lazúli',
    onyx: 'Ônix',
    'tiger-eye': 'Olho de tigre',
    sunstone: 'Pedra do sol',
    jade: 'Jade',
    'orange-jade': 'Jade laranja',
    'fuchsia-jade': 'Jade fúcsia',
    amethyst: 'Ametista',
    carnelian: 'Cornalina',
    'blue-aventurine': 'Aventurina azul',
    hematite: 'Hematita',
  },
  id: {
    malachite: 'Malasit',
    'rose-quartz': 'Kuarsa mawar',
    'lapis-lazuli': 'Lapis lazuli',
    onyx: 'Oniks',
    'tiger-eye': 'Mata harimau',
    sunstone: 'Batu matahari',
    jade: 'Giok',
    'orange-jade': 'Giok oranye',
    'fuchsia-jade': 'Giok fuksia',
    amethyst: 'Amethyst',
    carnelian: 'Karnelian',
    'blue-aventurine': 'Aventurin biru',
    hematite: 'Hematit',
  },
  ms: {
    malachite: 'Malakit',
    'rose-quartz': 'Kuaza mawar',
    'lapis-lazuli': 'Lapis lazuli',
    onyx: 'Oniks',
    'tiger-eye': 'Mata harimau',
    sunstone: 'Batu matahari',
    jade: 'Giok',
    'orange-jade': 'Giok oren',
    'fuchsia-jade': 'Giok fuksia',
    amethyst: 'Amethyst',
    carnelian: 'Karnelian',
    'blue-aventurine': 'Aventurin biru',
    hematite: 'Hematit',
  },
}

const MONTH_LABEL: Record<AppLocale, Record<BirthMonthKey, string>> = {
  en: {
    January: 'January',
    February: 'February',
    March: 'March',
    July: 'July',
    August: 'August',
    September: 'September',
    November: 'November',
    December: 'December',
  },
  ar: {
    January: 'يناير',
    February: 'فبراير',
    March: 'مارس',
    July: 'يوليو',
    August: 'أغسطس',
    September: 'سبتمبر',
    November: 'نوفمبر',
    December: 'ديسمبر',
  },
  fr: {
    January: 'janvier',
    February: 'février',
    March: 'mars',
    July: 'juillet',
    August: 'août',
    September: 'septembre',
    November: 'novembre',
    December: 'décembre',
  },
  it: {
    January: 'gennaio',
    February: 'febbraio',
    March: 'marzo',
    July: 'luglio',
    August: 'agosto',
    September: 'settembre',
    November: 'novembre',
    December: 'dicembre',
  },
  es: {
    January: 'enero',
    February: 'febrero',
    March: 'marzo',
    July: 'julio',
    August: 'agosto',
    September: 'septiembre',
    November: 'noviembre',
    December: 'diciembre',
  },
  ru: {
    January: 'январь',
    February: 'февраль',
    March: 'март',
    July: 'июль',
    August: 'август',
    September: 'сентябрь',
    November: 'ноябрь',
    December: 'декабрь',
  },
  zh: {
    January: '一月',
    February: '二月',
    March: '三月',
    July: '七月',
    August: '八月',
    September: '九月',
    November: '十一月',
    December: '十二月',
  },
  de: {
    January: 'Januar',
    February: 'Februar',
    March: 'März',
    July: 'Juli',
    August: 'August',
    September: 'September',
    November: 'November',
    December: 'Dezember',
  },
  nl: {
    January: 'januari',
    February: 'februari',
    March: 'maart',
    July: 'juli',
    August: 'augustus',
    September: 'september',
    November: 'november',
    December: 'december',
  },
  pt: {
    January: 'janeiro',
    February: 'fevereiro',
    March: 'março',
    July: 'julho',
    August: 'agosto',
    September: 'setembro',
    November: 'novembro',
    December: 'dezembro',
  },
  id: {
    January: 'Januari',
    February: 'Februari',
    March: 'Maret',
    July: 'Juli',
    August: 'Agustus',
    September: 'September',
    November: 'November',
    December: 'Desember',
  },
  ms: {
    January: 'Januari',
    February: 'Februari',
    March: 'Mac',
    July: 'Julai',
    August: 'Ogos',
    September: 'September',
    November: 'November',
    December: 'Disember',
  },
}

const ZODIAC_LABEL: Record<AppLocale, Record<ZodiacKey, string>> = {
  en: {
    Aries: 'Aries',
    Taurus: 'Taurus',
    Gemini: 'Gemini',
    Leo: 'Leo',
    Virgo: 'Virgo',
    Libra: 'Libra',
    Scorpio: 'Scorpio',
    Sagittarius: 'Sagittarius',
    Capricorn: 'Capricorn',
    Aquarius: 'Aquarius',
    Pisces: 'Pisces',
  },
  ar: {
    Aries: 'الحمل',
    Taurus: 'الثور',
    Gemini: 'الجوزاء',
    Leo: 'الأسد',
    Virgo: 'العذراء',
    Libra: 'الميزان',
    Scorpio: 'العقرب',
    Sagittarius: 'القوس',
    Capricorn: 'الجدي',
    Aquarius: 'الدلو',
    Pisces: 'الحوت',
  },
  fr: {
    Aries: 'Bélier',
    Taurus: 'Taureau',
    Gemini: 'Gémeaux',
    Leo: 'Lion',
    Virgo: 'Vierge',
    Libra: 'Balance',
    Scorpio: 'Scorpion',
    Sagittarius: 'Sagittaire',
    Capricorn: 'Capricorne',
    Aquarius: 'Verseau',
    Pisces: 'Poissons',
  },
  it: {
    Aries: 'Ariete',
    Taurus: 'Toro',
    Gemini: 'Gemelli',
    Leo: 'Leone',
    Virgo: 'Vergine',
    Libra: 'Bilancia',
    Scorpio: 'Scorpione',
    Sagittarius: 'Sagittario',
    Capricorn: 'Capricorno',
    Aquarius: 'Acquario',
    Pisces: 'Pesci',
  },
  es: {
    Aries: 'Aries',
    Taurus: 'Tauro',
    Gemini: 'Géminis',
    Leo: 'Leo',
    Virgo: 'Virgo',
    Libra: 'Libra',
    Scorpio: 'Escorpio',
    Sagittarius: 'Sagitario',
    Capricorn: 'Capricornio',
    Aquarius: 'Acuario',
    Pisces: 'Piscis',
  },
  ru: {
    Aries: 'Овен',
    Taurus: 'Телец',
    Gemini: 'Близнецы',
    Leo: 'Лев',
    Virgo: 'Дева',
    Libra: 'Весы',
    Scorpio: 'Скорпион',
    Sagittarius: 'Стрелец',
    Capricorn: 'Козерог',
    Aquarius: 'Водолей',
    Pisces: 'Рыбы',
  },
  zh: {
    Aries: '白羊座',
    Taurus: '金牛座',
    Gemini: '双子座',
    Leo: '狮子座',
    Virgo: '处女座',
    Libra: '天秤座',
    Scorpio: '天蝎座',
    Sagittarius: '射手座',
    Capricorn: '摩羯座',
    Aquarius: '水瓶座',
    Pisces: '双鱼座',
  },
  de: {
    Aries: 'Widder',
    Taurus: 'Stier',
    Gemini: 'Zwillinge',
    Leo: 'Löwe',
    Virgo: 'Jungfrau',
    Libra: 'Waage',
    Scorpio: 'Skorpion',
    Sagittarius: 'Schütze',
    Capricorn: 'Steinbock',
    Aquarius: 'Wassermann',
    Pisces: 'Fische',
  },
  nl: {
    Aries: 'Ram',
    Taurus: 'Stier',
    Gemini: 'Tweelingen',
    Leo: 'Leeuw',
    Virgo: 'Maagd',
    Libra: 'Weegschaal',
    Scorpio: 'Schorpioen',
    Sagittarius: 'Boogschutter',
    Capricorn: 'Steenbok',
    Aquarius: 'Waterman',
    Pisces: 'Vissen',
  },
  pt: {
    Aries: 'Áries',
    Taurus: 'Touro',
    Gemini: 'Gêmeos',
    Leo: 'Leão',
    Virgo: 'Virgem',
    Libra: 'Libra',
    Scorpio: 'Escorpião',
    Sagittarius: 'Sagitário',
    Capricorn: 'Capricórnio',
    Aquarius: 'Aquário',
    Pisces: 'Peixes',
  },
  id: {
    Aries: 'Aries',
    Taurus: 'Taurus',
    Gemini: 'Gemini',
    Leo: 'Leo',
    Virgo: 'Virgo',
    Libra: 'Libra',
    Scorpio: 'Scorpio',
    Sagittarius: 'Sagittarius',
    Capricorn: 'Capricorn',
    Aquarius: 'Aquarius',
    Pisces: 'Pisces',
  },
  ms: {
    Aries: 'Aries',
    Taurus: 'Taurus',
    Gemini: 'Gemini',
    Leo: 'Leo',
    Virgo: 'Virgo',
    Libra: 'Libra',
    Scorpio: 'Scorpio',
    Sagittarius: 'Sagittarius',
    Capricorn: 'Capricorn',
    Aquarius: 'Aquarius',
    Pisces: 'Pisces',
  },
}

const MEANING_LABEL: Record<AppLocale, Record<MeaningKey, string>> = {
  en: {
    calmness: 'calmness',
    clarity: 'clarity',
    'emotional balance': 'emotional balance',
    tranquility: 'tranquility',
    wisdom: 'wisdom',
    love: 'love',
    compassion: 'compassion',
    'emotional healing': 'emotional healing',
    harmony: 'harmony',
    truth: 'truth',
    transformation: 'transformation',
    protection: 'protection',
    balance: 'balance',
    abundance: 'abundance',
    strength: 'strength',
    grounding: 'grounding',
    courage: 'courage',
    confidence: 'confidence',
    joy: 'joy',
    vitality: 'vitality',
    leadership: 'leadership',
    optimism: 'optimism',
    prosperity: 'prosperity',
    creativity: 'creativity',
    opportunity: 'opportunity',
    warmth: 'warmth',
    renewal: 'renewal',
    focus: 'focus',
    serenity: 'serenity',
    motivation: 'motivation',
  },
  ar: {
    calmness: 'الهدوء',
    clarity: 'الصفاء',
    'emotional balance': 'التوازن العاطفي',
    tranquility: 'السكينة',
    wisdom: 'الحكمة',
    love: 'الحب',
    compassion: 'التعاطف',
    'emotional healing': 'الشفاء العاطفي',
    harmony: 'الانسجام',
    truth: 'الحقيقة',
    transformation: 'التحوّل',
    protection: 'الحماية',
    balance: 'التوازن',
    abundance: 'الوفرة',
    strength: 'القوة',
    grounding: 'الترسّخ',
    courage: 'الشجاعة',
    confidence: 'الثقة',
    joy: 'الفرح',
    vitality: 'الحيوية',
    leadership: 'القيادة',
    optimism: 'التفاؤل',
    prosperity: 'الازدهار',
    creativity: 'الإبداع',
    opportunity: 'الفرصة',
    warmth: 'الدفء',
    renewal: 'التجدّد',
    focus: 'التركيز',
    serenity: 'السكينة',
    motivation: 'الدافع',
  },
  fr: {
    calmness: 'calme',
    clarity: 'clarté',
    'emotional balance': 'équilibre émotionnel',
    tranquility: 'tranquillité',
    wisdom: 'sagesse',
    love: 'amour',
    compassion: 'compassion',
    'emotional healing': 'apaisement émotionnel',
    harmony: 'harmonie',
    truth: 'vérité',
    transformation: 'transformation',
    protection: 'protection',
    balance: 'équilibre',
    abundance: 'abondance',
    strength: 'force',
    grounding: 'ancrage',
    courage: 'courage',
    confidence: 'confiance',
    joy: 'joie',
    vitality: 'vitalité',
    leadership: 'leadership',
    optimism: 'optimisme',
    prosperity: 'prospérité',
    creativity: 'créativité',
    opportunity: 'opportunité',
    warmth: 'chaleur',
    renewal: 'renouveau',
    focus: 'concentration',
    serenity: 'sérénité',
    motivation: 'motivation',
  },
  it: {
    calmness: 'calma',
    clarity: 'chiarezza',
    'emotional balance': 'equilibrio emotivo',
    tranquility: 'tranquillità',
    wisdom: 'saggezza',
    love: 'amore',
    compassion: 'compassione',
    'emotional healing': 'guarigione emotiva',
    harmony: 'armonia',
    truth: 'verità',
    transformation: 'trasformazione',
    protection: 'protezione',
    balance: 'equilibrio',
    abundance: 'abbondanza',
    strength: 'forza',
    grounding: 'radicamento',
    courage: 'coraggio',
    confidence: 'fiducia',
    joy: 'gioia',
    vitality: 'vitalità',
    leadership: 'leadership',
    optimism: 'ottimismo',
    prosperity: 'prosperità',
    creativity: 'creatività',
    opportunity: 'opportunità',
    warmth: 'calore',
    renewal: 'rinnovamento',
    focus: 'concentrazione',
    serenity: 'serenità',
    motivation: 'motivazione',
  },
  es: {
    calmness: 'calma',
    clarity: 'claridad',
    'emotional balance': 'equilibrio emocional',
    tranquility: 'tranquilidad',
    wisdom: 'sabiduría',
    love: 'amor',
    compassion: 'compasión',
    'emotional healing': 'sanación emocional',
    harmony: 'armonía',
    truth: 'verdad',
    transformation: 'transformación',
    protection: 'protección',
    balance: 'equilibrio',
    abundance: 'abundancia',
    strength: 'fuerza',
    grounding: 'enraizamiento',
    courage: 'coraje',
    confidence: 'confianza',
    joy: 'alegría',
    vitality: 'vitalidad',
    leadership: 'liderazgo',
    optimism: 'optimismo',
    prosperity: 'prosperidad',
    creativity: 'creatividad',
    opportunity: 'oportunidad',
    warmth: 'calidez',
    renewal: 'renovación',
    focus: 'enfoque',
    serenity: 'serenidad',
    motivation: 'motivación',
  },
  ru: {
    calmness: 'спокойствие',
    clarity: 'ясность',
    'emotional balance': 'эмоциональное равновесие',
    tranquility: 'безмятежность',
    wisdom: 'мудрость',
    love: 'любовь',
    compassion: 'сострадание',
    'emotional healing': 'эмоциональное исцеление',
    harmony: 'гармония',
    truth: 'истина',
    transformation: 'преображение',
    protection: 'защита',
    balance: 'баланс',
    abundance: 'изобилие',
    strength: 'сила',
    grounding: 'заземление',
    courage: 'мужество',
    confidence: 'уверенность',
    joy: 'радость',
    vitality: 'жизненная сила',
    leadership: 'лидерство',
    optimism: 'оптимизм',
    prosperity: 'процветание',
    creativity: 'творчество',
    opportunity: 'возможность',
    warmth: 'тепло',
    renewal: 'обновление',
    focus: 'средоточенность',
    serenity: 'безмятежность',
    motivation: 'мотивация',
  },
  zh: {
    calmness: '平静',
    clarity: '清明',
    'emotional balance': '情绪平衡',
    tranquility: '安宁',
    wisdom: '智慧',
    love: '爱',
    compassion: '慈悲',
    'emotional healing': '情感疗愈',
    harmony: '和谐',
    truth: '真理',
    transformation: '转化',
    protection: '守护',
    balance: '平衡',
    abundance: '丰盛',
    strength: '力量',
    grounding: '稳固',
    courage: '勇气',
    confidence: '自信',
    joy: '喜悦',
    vitality: '活力',
    leadership: '领导力',
    optimism: '乐观',
    prosperity: '繁荣',
    creativity: '创造力',
    opportunity: '机遇',
    warmth: '温暖',
    renewal: '更新',
    focus: '专注',
    serenity: '宁静',
    motivation: '动力',
  },
  de: {
    calmness: 'Ruhe',
    clarity: 'Klarheit',
    'emotional balance': 'emotionales Gleichgewicht',
    tranquility: 'Gelassenheit',
    wisdom: 'Weisheit',
    love: 'Liebe',
    compassion: 'Mitgefühl',
    'emotional healing': 'emotionale Heilung',
    harmony: 'Harmonie',
    truth: 'Wahrheit',
    transformation: 'Verwandlung',
    protection: 'Schutz',
    balance: 'Balance',
    abundance: 'Fülle',
    strength: 'Stärke',
    grounding: 'Erdung',
    courage: 'Mut',
    confidence: 'Selbstvertrauen',
    joy: 'Freude',
    vitality: 'Vitalität',
    leadership: 'Führungskraft',
    optimism: 'Optimismus',
    prosperity: 'Wohlstand',
    creativity: 'Kreativität',
    opportunity: 'Gelegenheit',
    warmth: 'Wärme',
    renewal: 'Erneuerung',
    focus: 'Fokus',
    serenity: 'Serenität',
    motivation: 'Motivation',
  },
  nl: {
    calmness: 'kalmte',
    clarity: 'helderheid',
    'emotional balance': 'emotioneel evenwicht',
    tranquility: 'rust',
    wisdom: 'wijsheid',
    love: 'liefde',
    compassion: 'mededogen',
    'emotional healing': 'emotionele heling',
    harmony: 'harmonie',
    truth: 'waarheid',
    transformation: 'transformatie',
    protection: 'bescherming',
    balance: 'balans',
    abundance: 'overvloed',
    strength: 'kracht',
    grounding: 'aarding',
    courage: 'moed',
    confidence: 'zelfvertrouwen',
    joy: 'vreugde',
    vitality: 'vitaliteit',
    leadership: 'leiderschap',
    optimism: 'optimisme',
    prosperity: 'voorspoed',
    creativity: 'creativiteit',
    opportunity: 'kans',
    warmth: 'warmte',
    renewal: 'vernieuwing',
    focus: 'focus',
    serenity: 'sereniteit',
    motivation: 'motivatie',
  },
  pt: {
    calmness: 'calma',
    clarity: 'clareza',
    'emotional balance': 'equilíbrio emocional',
    tranquility: 'tranquilidade',
    wisdom: 'sabedoria',
    love: 'amor',
    compassion: 'compaixão',
    'emotional healing': 'cura emocional',
    harmony: 'harmonia',
    truth: 'verdade',
    transformation: 'transformação',
    protection: 'proteção',
    balance: 'equilíbrio',
    abundance: 'abundância',
    strength: 'força',
    grounding: 'ancoragem',
    courage: 'coragem',
    confidence: 'confiança',
    joy: 'alegria',
    vitality: 'vitalidade',
    leadership: 'liderança',
    optimism: 'otimismo',
    prosperity: 'prosperidade',
    creativity: 'criatividade',
    opportunity: 'oportunidade',
    warmth: 'calor',
    renewal: 'renovação',
    focus: 'foco',
    serenity: 'serenidade',
    motivation: 'motivação',
  },
  id: {
    calmness: 'ketenangan',
    clarity: 'kejernihan',
    'emotional balance': 'keseimbangan emosional',
    tranquility: 'kedamaian',
    wisdom: 'kebijaksanaan',
    love: 'cinta',
    compassion: 'welas asih',
    'emotional healing': 'penyembuhan emosional',
    harmony: 'harmoni',
    truth: 'kebenaran',
    transformation: 'transformasi',
    protection: 'perlindungan',
    balance: 'keseimbangan',
    abundance: 'kelimpahan',
    strength: 'kekuatan',
    grounding: 'penenangan',
    courage: 'keberanian',
    confidence: 'kepercayaan diri',
    joy: 'sukacita',
    vitality: 'vitalitas',
    leadership: 'kepemimpinan',
    optimism: 'optimisme',
    prosperity: 'kemakmuran',
    creativity: 'kreativitas',
    opportunity: 'peluang',
    warmth: 'kehangatan',
    renewal: 'pembaruan',
    focus: 'fokus',
    serenity: 'ketenteraman',
    motivation: 'motivasi',
  },
  ms: {
    calmness: 'ketenangan',
    clarity: 'kejelasan',
    'emotional balance': 'keseimbangan emosi',
    tranquility: 'kedamaian',
    wisdom: 'kebijaksanaan',
    love: 'kasih',
    compassion: 'belas kasihan',
    'emotional healing': 'penyembuhan emosi',
    harmony: 'harmoni',
    truth: 'kebenaran',
    transformation: 'transformasi',
    protection: 'perlindungan',
    balance: 'keseimbangan',
    abundance: 'kelimpahan',
    strength: 'kekuatan',
    grounding: 'penenangan',
    courage: 'keberanian',
    confidence: 'keyakinan',
    joy: 'kegembiraan',
    vitality: 'daya hidup',
    leadership: 'kepimpinan',
    optimism: 'optimisme',
    prosperity: 'kemakmuran',
    creativity: 'kreativiti',
    opportunity: 'peluang',
    warmth: 'kehangatan',
    renewal: 'pembaharuan',
    focus: 'fokus',
    serenity: 'ketenteraman',
    motivation: 'motivasi',
  },
}

type LocaleCopy = {
  sharedKeywords: string[]
  /** Stone-specific discovery phrases (native). */
  stoneKeywords: Partial<Record<NaturalStoneKey, string[]>>
  propertyNames: {
    gemstoneSymbolism: string
    stoneMeanings: string
    birthstoneMonths: string
    zodiacAssociations: string
    audienceIntent: string
  }
  audienceIntentValue: string
  aiIntent: string
  aiBirthMonthsFallback: string
  joinAnd: string
  summaryMonth: (months: string) => string
  summaryZodiac: (zodiac: string) => string
  summaryMeaning: (meanings: string) => string
  aiBirthstoneWithMonths: (labels: string, months: string) => string
  aiBirthstoneSymbolic: (labels: string) => string
  kwMonthBirthstone: (month: string) => string
  kwMonthBirthstoneJewellery: (month: string) => string
  kwStoneMonthBirthstone: (stone: string, month: string) => string
  kwGiftForMonth: (month: string) => string
  kwSignBirthstoneJewellery: (sign: string) => string
  kwStoneSignStone: (stone: string, sign: string) => string
  kwStoneMeaning: (stone: string, meaning: string) => string
  kwMeaningStoneJewellery: (meaning: string) => string
}

const LOCALE_COPY: Record<AppLocale, LocaleCopy> = {
  en: {
    sharedKeywords: [
      'birthstone jewellery',
      'natural stone meaning jewellery',
      'gemstone symbolism jewellery',
      'zodiac stone jewellery',
      'birthstone gift jewellery',
      'meaningful natural stone gift',
    ],
    stoneKeywords: {
      amethyst: [
        'February birthstone',
        'amethyst birthstone',
        'amethyst birthstone gift',
        'amethyst for calmness and clarity',
        'purple birthstone jewellery',
      ],
      'rose-quartz': [
        'rose quartz birthstone jewellery',
        'rose quartz love stone',
        'stone of love jewellery',
        'rose quartz gift for her',
      ],
      'lapis-lazuli': [
        'December birthstone lapis lazuli',
        'September birthstone lapis lazuli',
        'lapis lazuli wisdom stone',
        'royal blue birthstone jewellery',
      ],
      malachite: [
        'malachite protection stone',
        'malachite transformation jewellery',
        'malachite abundance jewellery',
        'Scorpio stone malachite',
      ],
      onyx: [
        'onyx birthstone jewellery',
        'onyx protection stone',
        'onyx strength jewellery',
        'black onyx grounding stone',
      ],
      'tiger-eye': [
        'tiger eye courage stone',
        'tiger eye confidence jewellery',
        'Leo stone tiger eye',
        'November tiger eye jewellery',
      ],
      sunstone: [
        'sunstone vitality jewellery',
        'sunstone joy stone',
        'sunstone leadership stone',
        'Leo stone sunstone',
      ],
      jade: [
        'jade prosperity stone',
        'jade abundance jewellery',
        'jade harmony stone',
        'March jade birthstone alternative',
      ],
      'orange-jade': [
        'orange jade vitality jewellery',
        'orange jade prosperity stone',
        'orange jade abundance gift',
      ],
      'fuchsia-jade': [
        'fuchsia jade jewellery meaning',
        'pink jade prosperity stone',
        'fuchsia jade abundance jewellery',
      ],
      carnelian: [
        'carnelian birthstone jewellery',
        'July carnelian birthstone',
        'carnelian vitality stone',
        'Al Ain Rosette carnelian meaning',
      ],
      'blue-aventurine': [
        'blue aventurine opportunity stone',
        'blue aventurine leadership jewellery',
        'aventurine prosperity jewellery',
      ],
      hematite: ['hematite grounding stone', 'hematite protection jewellery'],
    },
    propertyNames: {
      gemstoneSymbolism: 'Gemstone symbolism',
      stoneMeanings: 'Stone meanings',
      birthstoneMonths: 'Birthstone months',
      zodiacAssociations: 'Zodiac associations',
      audienceIntent: 'Audience intent',
    },
    audienceIntentValue:
      'Birthstone jewellery shoppers, zodiac gemstone buyers, meaningful natural stone gift seekers, collectors drawn to gemstone symbolism and personal stone associations',
    aiIntent:
      'Organic discovery for birthstone shoppers, zodiac stone buyers, meaningful gemstone gift seekers, February amethyst buyers, December lapis buyers, rose quartz love-stone shoppers, jade prosperity jewellery collectors',
    aiBirthMonthsFallback: 'symbolic / zodiac associations',
    joinAnd: ' and ',
    summaryMonth: (m) => ` Associated with ${m} birthstone traditions.`,
    summaryZodiac: (z) => ` Linked in gemstone lore with ${z}.`,
    summaryMeaning: (meanings) => ` Traditionally associated with ${meanings}.`,
    aiBirthstoneWithMonths: (labels, months) => `${labels} — birthstone traditions: ${months}`,
    aiBirthstoneSymbolic: (labels) =>
      `${labels} — symbolic gemstone jewellery (zodiac and meaning associations)`,
    kwMonthBirthstone: (month) => `${month} birthstone`,
    kwMonthBirthstoneJewellery: (month) => `${month} birthstone jewellery`,
    kwStoneMonthBirthstone: (stone, month) => `${stone} ${month} birthstone`,
    kwGiftForMonth: (month) => `gift for ${month} birthday`,
    kwSignBirthstoneJewellery: (sign) => `${sign} birthstone jewellery`,
    kwStoneSignStone: (stone, sign) => `${stone} ${sign} stone`,
    kwStoneMeaning: (stone, meaning) => `${stone} ${meaning}`,
    kwMeaningStoneJewellery: (meaning) => `${meaning} stone jewellery`,
  },
  ar: {
    sharedKeywords: [
      'مجوهرات حجر الميلاد',
      'معنى الأحجار الطبيعية',
      'رمزية الأحجار الكريمة',
      'حجر البرج الفلكي',
      'هدية حجر الميلاد',
      'هدية حجر طبيعي ذات معنى',
    ],
    stoneKeywords: {
      amethyst: ['حجر ميلاد فبراير', 'جمشت حجر الميلاد', 'جمشت للهدوء والصفاء', 'مجوهرات حجر ميلاد أرجواني'],
      'rose-quartz': ['كوارتز وردي حجر الحب', 'مجوهرات الكوارتز الوردي', 'هدية كوارتز وردي'],
      'lapis-lazuli': ['حجر ميلاد ديسمبر لازورد', 'حجر ميلاد سبتمبر لازورد', 'لازورد حجر الحكمة'],
      malachite: ['ملاكيت حجر الحماية', 'ملاكيت التحوّل', 'ملاكيت الوفرة'],
      onyx: ['عقيق أسود حجر الحماية', 'عقيق أسود للقوة', 'مجوهرات الأونيكس'],
      'tiger-eye': ['عين النمر للشجاعة', 'عين النمر للثقة', 'حجر عين النمر'],
      sunstone: ['حجر الشمس للحيوية', 'حجر الشمس للفرح', 'حجر الشمس للقيادة'],
      jade: ['يشم الازدهار', 'يشم الانسجام', 'يشم الوفرة'],
      'orange-jade': ['يشم برتقالي للحيوية', 'يشم برتقالي للازدهار'],
      'fuchsia-jade': ['يشم فوشيا للانسجام', 'يشم وردي للازدهار'],
      carnelian: ['عقيق أحمر حجر الميلاد', 'عقيق أحمر للحيوية', 'معنى عقيق روزيت العين'],
      'blue-aventurine': ['أفنتورين أزرق للفرصة', 'أفنتورين أزرق للقيادة'],
    },
    propertyNames: {
      gemstoneSymbolism: 'رمزية الحجر الكريم',
      stoneMeanings: 'معاني الحجر',
      birthstoneMonths: 'أشهر حجر الميلاد',
      zodiacAssociations: 'ارتباطات الأبراج',
      audienceIntent: 'نية الجمهور',
    },
    audienceIntentValue:
      'مقتنيات مجوهرات حجر الميلاد، مشترو أحجار الأبراج، الباحثون عن هدايا الأحجار الطبيعية ذات المعنى، وجامعو رمزية الأحجار الكريمة',
    aiIntent:
      'اكتشاف عضوي لمشتري أحجار الميلاد وأحجار الأبراج وهدايا الأحجار الكريمة ذات المعنى، ومقتنيات الجمشت واللازورد والكوارتز الوردي واليشم',
    aiBirthMonthsFallback: 'ارتباطات رمزية / أبراج',
    joinAnd: ' و',
    summaryMonth: (m) => ` مرتبط بتقاليد حجر الميلاد لـ${m}.`,
    summaryZodiac: (z) => ` يرتبط في تراث الأحجار بـ${z}.`,
    summaryMeaning: (meanings) => ` يُرتبط تقليديًا بـ${meanings}.`,
    aiBirthstoneWithMonths: (labels, months) => `${labels} — تقاليد حجر الميلاد: ${months}`,
    aiBirthstoneSymbolic: (labels) => `${labels} — مجوهرات أحجار رمزية (أبراج ومعانٍ)`,
    kwMonthBirthstone: (month) => `حجر ميلاد ${month}`,
    kwMonthBirthstoneJewellery: (month) => `مجوهرات حجر ميلاد ${month}`,
    kwStoneMonthBirthstone: (stone, month) => `${stone} حجر ميلاد ${month}`,
    kwGiftForMonth: (month) => `هدية عيد ميلاد ${month}`,
    kwSignBirthstoneJewellery: (sign) => `مجوهرات حجر برج ${sign}`,
    kwStoneSignStone: (stone, sign) => `${stone} حجر ${sign}`,
    kwStoneMeaning: (stone, meaning) => `${stone} ${meaning}`,
    kwMeaningStoneJewellery: (meaning) => `مجوهرات حجر ${meaning}`,
  },
  fr: {
    sharedKeywords: [
      'bijoux pierre de naissance',
      'signification pierre naturelle',
      'symbolisme gemmes',
      'pierre du zodiaque',
      'cadeau pierre de naissance',
      'cadeau pierre naturelle significatif',
    ],
    stoneKeywords: {
      amethyst: ['pierre de naissance février', 'améthyste pierre de naissance', 'améthyste calme et clarté'],
      'rose-quartz': ['quartz rose pierre d’amour', 'bijoux quartz rose', 'cadeau quartz rose'],
      'lapis-lazuli': ['pierre de naissance décembre lapis', 'lapis-lazuli sagesse', 'bijoux lapis-lazuli'],
      malachite: ['malachite protection', 'malachite transformation', 'malachite abondance'],
      onyx: ['onyx force', 'onyx protection', 'bijoux onyx noir'],
      'tiger-eye': ['œil de tigre courage', 'œil de tigre confiance', 'pierre œil de tigre'],
      sunstone: ['pierre de soleil vitalité', 'pierre de soleil joie', 'pierre de soleil leadership'],
      jade: ['jade prospérité', 'jade harmonie', 'jade abondance'],
      'orange-jade': ['jade orange vitalité', 'jade orange prospérité'],
      'fuchsia-jade': ['jade fuchsia harmonie', 'jade rose prospérité'],
      carnelian: ['cornaline pierre de naissance', 'cornaline vitalité', 'cornaline Rosette d’Al Ain'],
      'blue-aventurine': ['aventurine bleue opportunité', 'aventurine bleue leadership'],
    },
    propertyNames: {
      gemstoneSymbolism: 'Symbolisme de la gemme',
      stoneMeanings: 'Significations de la pierre',
      birthstoneMonths: 'Mois de pierre de naissance',
      zodiacAssociations: 'Associations zodiacales',
      audienceIntent: 'Intention d’audience',
    },
    audienceIntentValue:
      'Acheteuses de bijoux pierre de naissance, amateurs de gemmes zodiacales, chercheuses de cadeaux en pierre naturelle, collectionneuses sensibles au symbolisme des gemmes',
    aiIntent:
      'Découverte organique pour les acheteuses de pierres de naissance, de pierres du zodiaque et de cadeaux gemmes significatifs — améthyste, lapis, quartz rose, jade',
    aiBirthMonthsFallback: 'associations symboliques / zodiacales',
    joinAnd: ' et ',
    summaryMonth: (m) => ` Associée aux traditions de pierre de naissance de ${m}.`,
    summaryZodiac: (z) => ` Liée, dans le langage des gemmes, à ${z}.`,
    summaryMeaning: (meanings) => ` Traditionnellement associée à ${meanings}.`,
    aiBirthstoneWithMonths: (labels, months) =>
      `${labels} — traditions de pierre de naissance : ${months}`,
    aiBirthstoneSymbolic: (labels) =>
      `${labels} — bijou gemme symbolique (associations zodiacales et de sens)`,
    kwMonthBirthstone: (month) => `pierre de naissance ${month}`,
    kwMonthBirthstoneJewellery: (month) => `bijoux pierre de naissance ${month}`,
    kwStoneMonthBirthstone: (stone, month) => `${stone} pierre de naissance ${month}`,
    kwGiftForMonth: (month) => `cadeau anniversaire ${month}`,
    kwSignBirthstoneJewellery: (sign) => `bijoux pierre ${sign}`,
    kwStoneSignStone: (stone, sign) => `${stone} pierre ${sign}`,
    kwStoneMeaning: (stone, meaning) => `${stone} ${meaning}`,
    kwMeaningStoneJewellery: (meaning) => `bijoux pierre ${meaning}`,
  },
  it: {
    sharedKeywords: [
      'gioielli pietra portafortuna',
      'significato pietra naturale',
      'simbolismo gemme',
      'pietra dello zodiaco',
      'regalo pietra del mese',
      'regalo pietra naturale significativo',
    ],
    stoneKeywords: {
      amethyst: ['pietra di febbraio ametista', 'ametista calma e chiarezza', 'gioielli ametista'],
      'rose-quartz': ['quarzo rosa pietra dell’amore', 'gioielli quarzo rosa', 'regalo quarzo rosa'],
      'lapis-lazuli': ['lapislazzuli saggezza', 'pietra di dicembre lapislazzuli', 'gioielli lapislazzuli'],
      malachite: ['malachite protezione', 'malachite trasformazione', 'malachite abbondanza'],
      onyx: ['onice forza', 'onice protezione', 'gioielli onice nero'],
      'tiger-eye': ['occhio di tigre coraggio', 'occhio di tigre fiducia', 'pietra occhio di tigre'],
      sunstone: ['pietra di sole vitalità', 'pietra di sole gioia', 'pietra di sole leadership'],
      jade: ['giada prosperità', 'giada armonia', 'giada abbondanza'],
      'orange-jade': ['giada arancio vitalità', 'giada arancio prosperità'],
      'fuchsia-jade': ['giada fucsia armonia', 'giada rosa prosperità'],
      carnelian: ['corniola pietra del mese', 'corniola vitalità', 'corniola Rosette d’Al Ain'],
      'blue-aventurine': ['avventurina blu opportunità', 'avventurina blu leadership'],
    },
    propertyNames: {
      gemstoneSymbolism: 'Simbolismo della gemma',
      stoneMeanings: 'Significati della pietra',
      birthstoneMonths: 'Mesi della pietra portafortuna',
      zodiacAssociations: 'Associazioni zodiacali',
      audienceIntent: 'Intento del pubblico',
    },
    audienceIntentValue:
      'Acquirenti di gioielli pietra del mese, appassionate di gemme zodiacali, cercatrici di regali in pietra naturale, collezioniste attratte dal simbolismo delle gemme',
    aiIntent:
      'Scoperta organica per chi cerca pietre del mese, pietre zodiacali e regali gemma significativi — ametista, lapislazzuli, quarzo rosa, giada',
    aiBirthMonthsFallback: 'associazioni simboliche / zodiacali',
    joinAnd: ' e ',
    summaryMonth: (m) => ` Associata alle tradizioni della pietra portafortuna di ${m}.`,
    summaryZodiac: (z) => ` Collegata, nel linguaggio delle gemme, a ${z}.`,
    summaryMeaning: (meanings) => ` Tradizionalmente associata a ${meanings}.`,
    aiBirthstoneWithMonths: (labels, months) =>
      `${labels} — tradizioni pietra portafortuna: ${months}`,
    aiBirthstoneSymbolic: (labels) =>
      `${labels} — gioiello gemma simbolico (associazioni zodiacali e di significato)`,
    kwMonthBirthstone: (month) => `pietra portafortuna ${month}`,
    kwMonthBirthstoneJewellery: (month) => `gioielli pietra ${month}`,
    kwStoneMonthBirthstone: (stone, month) => `${stone} pietra di ${month}`,
    kwGiftForMonth: (month) => `regalo compleanno ${month}`,
    kwSignBirthstoneJewellery: (sign) => `gioielli pietra ${sign}`,
    kwStoneSignStone: (stone, sign) => `${stone} pietra ${sign}`,
    kwStoneMeaning: (stone, meaning) => `${stone} ${meaning}`,
    kwMeaningStoneJewellery: (meaning) => `gioielli pietra ${meaning}`,
  },
  es: {
    sharedKeywords: [
      'joyería piedra de nacimiento',
      'significado piedra natural',
      'simbolismo de gemas',
      'piedra del zodiaco',
      'regalo piedra de nacimiento',
      'regalo piedra natural significativo',
    ],
    stoneKeywords: {
      amethyst: ['piedra de febrero amatista', 'amatista calma y claridad', 'joyería amatista'],
      'rose-quartz': ['cuarzo rosa piedra del amor', 'joyería cuarzo rosa', 'regalo cuarzo rosa'],
      'lapis-lazuli': ['lapislázuli sabiduría', 'piedra de diciembre lapislázuli', 'joyería lapislázuli'],
      malachite: ['malaquita protección', 'malaquita transformación', 'malaquita abundancia'],
      onyx: ['ónice fuerza', 'ónice protección', 'joyería ónice negro'],
      'tiger-eye': ['ojo de tigre coraje', 'ojo de tigre confianza', 'piedra ojo de tigre'],
      sunstone: ['piedra del sol vitalidad', 'piedra del sol alegría', 'piedra del sol liderazgo'],
      jade: ['jade prosperidad', 'jade armonía', 'jade abundancia'],
      'orange-jade': ['jade naranja vitalidad', 'jade naranja prosperidad'],
      'fuchsia-jade': ['jade fucsia armonía', 'jade rosa prosperidad'],
      carnelian: ['cornalina piedra de nacimiento', 'cornalina vitalidad', 'cornalina Rosette d’Al Ain'],
      'blue-aventurine': ['aventurina azul oportunidad', 'aventurina azul liderazgo'],
    },
    propertyNames: {
      gemstoneSymbolism: 'Simbolismo de la gema',
      stoneMeanings: 'Significados de la piedra',
      birthstoneMonths: 'Meses de piedra de nacimiento',
      zodiacAssociations: 'Asociaciones zodiacales',
      audienceIntent: 'Intención de audiencia',
    },
    audienceIntentValue:
      'Compradoras de joyería piedra de nacimiento, aficionadas a gemas zodiacales, buscadoras de regalos en piedra natural, coleccionistas atraídas por el simbolismo de las gemas',
    aiIntent:
      'Descubrimiento orgánico para compradoras de piedras de nacimiento, piedras zodiacales y regalos de gema significativos — amatista, lapislázuli, cuarzo rosa, jade',
    aiBirthMonthsFallback: 'asociaciones simbólicas / zodiacales',
    joinAnd: ' y ',
    summaryMonth: (m) => ` Asociada a las tradiciones de piedra de nacimiento de ${m}.`,
    summaryZodiac: (z) => ` Vinculada, en el lenguaje de las gemas, a ${z}.`,
    summaryMeaning: (meanings) => ` Tradicionalmente asociada con ${meanings}.`,
    aiBirthstoneWithMonths: (labels, months) =>
      `${labels} — tradiciones de piedra de nacimiento: ${months}`,
    aiBirthstoneSymbolic: (labels) =>
      `${labels} — joyería gema simbólica (asociaciones zodiacales y de significado)`,
    kwMonthBirthstone: (month) => `piedra de nacimiento ${month}`,
    kwMonthBirthstoneJewellery: (month) => `joyería piedra de nacimiento ${month}`,
    kwStoneMonthBirthstone: (stone, month) => `${stone} piedra de ${month}`,
    kwGiftForMonth: (month) => `regalo cumpleaños ${month}`,
    kwSignBirthstoneJewellery: (sign) => `joyería piedra ${sign}`,
    kwStoneSignStone: (stone, sign) => `${stone} piedra ${sign}`,
    kwStoneMeaning: (stone, meaning) => `${stone} ${meaning}`,
    kwMeaningStoneJewellery: (meaning) => `joyería piedra ${meaning}`,
  },
  ru: {
    sharedKeywords: [
      'украшения камень рождения',
      'значение натурального камня',
      'символика драгоценных камней',
      'камень знака зодиака',
      'подарок камень рождения',
      'осмысленный подарок из натурального камня',
    ],
    stoneKeywords: {
      amethyst: ['камень февраля аметист', 'аметист спокойствие и ясность', 'украшения аметист'],
      'rose-quartz': ['розовый кварц камень любви', 'украшения розовый кварц', 'подарок розовый кварц'],
      'lapis-lazuli': ['лазурит мудрость', 'камень декабря лазурит', 'украшения лазурит'],
      malachite: ['малахит защита', 'малахит преображение', 'малахит изобилие'],
      onyx: ['оникс сила', 'оникс защита', 'украшения чёрный оникс'],
      'tiger-eye': ['тигровый глаз мужество', 'тигровый глаз уверенность', 'камень тигровый глаз'],
      sunstone: ['солнечный камень жизненная сила', 'солнечный камень радость', 'солнечный камень лидерство'],
      jade: ['нефрит процветание', 'нефрит гармония', 'нефрит изобилие'],
      'orange-jade': ['оранжевый нефрит жизненная сила', 'оранжевый нефрит процветание'],
      'fuchsia-jade': ['фуксиевый нефрит гармония', 'розовый нефрит процветание'],
      carnelian: ['сердолик камень рождения', 'сердолик жизненная сила', 'сердолик Al Ain Rosette'],
      'blue-aventurine': ['голубой авантюрин возможность', 'голубой авантюрин лидерство'],
    },
    propertyNames: {
      gemstoneSymbolism: 'Символика камня',
      stoneMeanings: 'Значения камня',
      birthstoneMonths: 'Месяцы камня рождения',
      zodiacAssociations: 'Ассоциации со знаками зодиака',
      audienceIntent: 'Намерение аудитории',
    },
    audienceIntentValue:
      'Покупательницы украшений с камнем рождения, любительницы зодиакальных камней, искательницы осмысленных подарков из натурального камня, коллекционерки символики камней',
    aiIntent:
      'Органический поиск для покупательниц камней рождения, зодиакальных камней и осмысленных подарков — аметист, лазурит, розовый кварц, нефрит',
    aiBirthMonthsFallback: 'символические / зодиакальные ассоциации',
    joinAnd: ' и ',
    summaryMonth: (m) => ` Связан с традициями камня рождения месяца: ${m}.`,
    summaryZodiac: (z) => ` В языке камней связывается с ${z}.`,
    summaryMeaning: (meanings) => ` Традиционно ассоциируется с ${meanings}.`,
    aiBirthstoneWithMonths: (labels, months) => `${labels} — традиции камня рождения: ${months}`,
    aiBirthstoneSymbolic: (labels) =>
      `${labels} — символическое украшение из камня (зодиак и значения)`,
    kwMonthBirthstone: (month) => `камень рождения ${month}`,
    kwMonthBirthstoneJewellery: (month) => `украшения камень рождения ${month}`,
    kwStoneMonthBirthstone: (stone, month) => `${stone} камень ${month}`,
    kwGiftForMonth: (month) => `подарок на день рождения ${month}`,
    kwSignBirthstoneJewellery: (sign) => `украшения камень ${sign}`,
    kwStoneSignStone: (stone, sign) => `${stone} камень ${sign}`,
    kwStoneMeaning: (stone, meaning) => `${stone} ${meaning}`,
    kwMeaningStoneJewellery: (meaning) => `украшения камень ${meaning}`,
  },
  zh: {
    sharedKeywords: [
      '诞生石珠宝',
      '天然石寓意',
      '宝石象征意义',
      '星座宝石',
      '诞生石礼物',
      '有意义的天然石礼物',
    ],
    stoneKeywords: {
      amethyst: ['二月诞生石紫水晶', '紫水晶平静与清明', '紫水晶珠宝'],
      'rose-quartz': ['粉水晶爱情石', '粉水晶珠宝', '粉水晶礼物'],
      'lapis-lazuli': ['十二月诞生石青金石', '青金石智慧', '青金石珠宝'],
      malachite: ['孔雀石守护', '孔雀石转化', '孔雀石丰盛'],
      onyx: ['玛瑙力量', '玛瑙守护', '黑玛瑙珠宝'],
      'tiger-eye': ['虎眼石勇气', '虎眼石自信', '虎眼石'],
      sunstone: ['太阳石活力', '太阳石喜悦', '太阳石领导力'],
      jade: ['翡翠繁荣', '翡翠和谐', '翡翠丰盛'],
      'orange-jade': ['橙翡翠活力', '橙翡翠繁荣'],
      'fuchsia-jade': ['桃红翡翠和谐', '粉翡翠繁荣'],
      carnelian: ['红玛瑙诞生石', '红玛瑙活力', 'Al Ain Rosette 红玛瑙寓意'],
      'blue-aventurine': ['蓝东陵石机遇', '蓝东陵石领导力'],
    },
    propertyNames: {
      gemstoneSymbolism: '宝石象征',
      stoneMeanings: '宝石寓意',
      birthstoneMonths: '诞生石月份',
      zodiacAssociations: '星座关联',
      audienceIntent: '受众意图',
    },
    audienceIntentValue:
      '诞生石珠宝买家、星座宝石爱好者、天然石礼物寻觅者，以及被宝石象征与个人石缘吸引的收藏者',
    aiIntent:
      '面向诞生石、星座石与有意义宝石礼物的有机发现——紫水晶、青金石、粉水晶、翡翠',
    aiBirthMonthsFallback: '象征 / 星座关联',
    joinAnd: '与',
    summaryMonth: (m) => ` 与${m}诞生石传统相关。`,
    summaryZodiac: (z) => ` 在宝石传说中与${z}相连。`,
    summaryMeaning: (meanings) => ` 传统上与${meanings}相关。`,
    aiBirthstoneWithMonths: (labels, months) => `${labels} — 诞生石传统：${months}`,
    aiBirthstoneSymbolic: (labels) => `${labels} — 象征性宝石珠宝（星座与寓意关联）`,
    kwMonthBirthstone: (month) => `${month}诞生石`,
    kwMonthBirthstoneJewellery: (month) => `${month}诞生石珠宝`,
    kwStoneMonthBirthstone: (stone, month) => `${stone}${month}诞生石`,
    kwGiftForMonth: (month) => `${month}生日礼物`,
    kwSignBirthstoneJewellery: (sign) => `${sign}诞生石珠宝`,
    kwStoneSignStone: (stone, sign) => `${stone}${sign}石`,
    kwStoneMeaning: (stone, meaning) => `${stone}${meaning}`,
    kwMeaningStoneJewellery: (meaning) => `${meaning}宝石珠宝`,
  },
  de: {
    sharedKeywords: [
      'Geburtsstein Schmuck',
      'Bedeutung Naturstein',
      'Edelstein Symbolik',
      'Sternzeichen Stein',
      'Geburtsstein Geschenk',
      'bedeutungsvolles Naturstein Geschenk',
    ],
    stoneKeywords: {
      amethyst: ['Februar Geburtsstein Amethyst', 'Amethyst Ruhe und Klarheit', 'Amethyst Schmuck'],
      'rose-quartz': ['Rosenquarz Liebesstein', 'Rosenquarz Schmuck', 'Rosenquarz Geschenk'],
      'lapis-lazuli': ['Dezember Geburtsstein Lapislazuli', 'Lapislazuli Weisheit', 'Lapislazuli Schmuck'],
      malachite: ['Malachit Schutz', 'Malachit Verwandlung', 'Malachit Fülle'],
      onyx: ['Onyx Stärke', 'Onyx Schutz', 'schwarzer Onyx Schmuck'],
      'tiger-eye': ['Tigerauge Mut', 'Tigerauge Selbstvertrauen', 'Tigerauge Stein'],
      sunstone: ['Sonnenstein Vitalität', 'Sonnenstein Freude', 'Sonnenstein Führungskraft'],
      jade: ['Jade Wohlstand', 'Jade Harmonie', 'Jade Fülle'],
      'orange-jade': ['oranger Jade Vitalität', 'oranger Jade Wohlstand'],
      'fuchsia-jade': ['Fuchsienjade Harmonie', 'rosa Jade Wohlstand'],
      carnelian: ['Karneol Geburtsstein', 'Karneol Vitalität', 'Karneol Al Ain Rosette'],
      'blue-aventurine': ['blauer Aventurin Gelegenheit', 'blauer Aventurin Führungskraft'],
    },
    propertyNames: {
      gemstoneSymbolism: 'Edelstein-Symbolik',
      stoneMeanings: 'Steinbedeutungen',
      birthstoneMonths: 'Geburtsstein-Monate',
      zodiacAssociations: 'Sternzeichen-Assoziationen',
      audienceIntent: 'Publikumsintention',
    },
    audienceIntentValue:
      'Käuferinnen von Geburtsstein-Schmuck, Sternzeichen-Edelstein-Interessierte, Suchende nach bedeutungsvollen Naturstein-Geschenken, Sammlerinnen von Edelstein-Symbolik',
    aiIntent:
      'Organische Entdeckung für Geburtsstein-, Sternzeichen- und bedeutungsvolle Edelstein-Geschenke — Amethyst, Lapislazuli, Rosenquarz, Jade',
    aiBirthMonthsFallback: 'symbolische / Sternzeichen-Assoziationen',
    joinAnd: ' und ',
    summaryMonth: (m) => ` Verbunden mit den Geburtsstein-Traditionen von ${m}.`,
    summaryZodiac: (z) => ` In der Edelstein-Überlieferung mit ${z} verknüpft.`,
    summaryMeaning: (meanings) => ` Traditionell assoziiert mit ${meanings}.`,
    aiBirthstoneWithMonths: (labels, months) => `${labels} — Geburtsstein-Traditionen: ${months}`,
    aiBirthstoneSymbolic: (labels) =>
      `${labels} — symbolischer Edelsteinschmuck (Sternzeichen- und Bedeutungsassoziationen)`,
    kwMonthBirthstone: (month) => `Geburtsstein ${month}`,
    kwMonthBirthstoneJewellery: (month) => `Geburtsstein Schmuck ${month}`,
    kwStoneMonthBirthstone: (stone, month) => `${stone} Geburtsstein ${month}`,
    kwGiftForMonth: (month) => `Geschenk Geburtstag ${month}`,
    kwSignBirthstoneJewellery: (sign) => `Sternzeichen Schmuck ${sign}`,
    kwStoneSignStone: (stone, sign) => `${stone} ${sign} Stein`,
    kwStoneMeaning: (stone, meaning) => `${stone} ${meaning}`,
    kwMeaningStoneJewellery: (meaning) => `${meaning} Stein Schmuck`,
  },
  nl: {
    sharedKeywords: [
      'geboortesteen sieraden',
      'betekenis natuursteen',
      'edelsteen symboliek',
      'sterrenbeeld steen',
      'geboortesteen cadeau',
      'betekenisvol natuursteen cadeau',
    ],
    stoneKeywords: {
      amethyst: ['februari geboortesteen amethist', 'amethist kalmte en helderheid', 'amethist sieraden'],
      'rose-quartz': ['rozenkwarts steen van liefde', 'rozenkwarts sieraden', 'rozenkwarts cadeau'],
      'lapis-lazuli': ['december geboortesteen lapis', 'lapis lazuli wijsheid', 'lapis lazuli sieraden'],
      malachite: ['malachiet bescherming', 'malachiet transformatie', 'malachiet overvloed'],
      onyx: ['onyx kracht', 'onyx bescherming', 'zwarte onyx sieraden'],
      'tiger-eye': ['tijgeroog moed', 'tijgeroog zelfvertrouwen', 'tijgeroog steen'],
      sunstone: ['zonnesteen vitaliteit', 'zonnesteen vreugde', 'zonnesteen leiderschap'],
      jade: ['jade voorspoed', 'jade harmonie', 'jade overvloed'],
      'orange-jade': ['oranje jade vitaliteit', 'oranje jade voorspoed'],
      'fuchsia-jade': ['fuchsia jade harmonie', 'roze jade voorspoed'],
      carnelian: ['carneool geboortesteen', 'carneool vitaliteit', 'carneool Al Ain Rosette'],
      'blue-aventurine': ['blauwe aventurijn kans', 'blauwe aventurijn leiderschap'],
    },
    propertyNames: {
      gemstoneSymbolism: 'Edelsteensymboliek',
      stoneMeanings: 'Steenbetekenissen',
      birthstoneMonths: 'Geboortesteenmaanden',
      zodiacAssociations: 'Sterrenbeeldassociaties',
      audienceIntent: 'Publieksintentie',
    },
    audienceIntentValue:
      'Kopers van geboortesteensieraden, liefhebbers van sterrenbeeldstenen, zoekers naar betekenisvolle natuursteencadeaus, verzamelaars van edelsteensymboliek',
    aiIntent:
      'Organische ontdekking voor geboortesteen-, sterrenbeeld- en betekenisvolle edelsteencadeaus — amethist, lapis, rozenkwarts, jade',
    aiBirthMonthsFallback: 'symbolische / sterrenbeeldassociaties',
    joinAnd: ' en ',
    summaryMonth: (m) => ` Verbonden met de geboortesteentradities van ${m}.`,
    summaryZodiac: (z) => ` In edelsteenlore verbonden met ${z}.`,
    summaryMeaning: (meanings) => ` Traditioneel geassocieerd met ${meanings}.`,
    aiBirthstoneWithMonths: (labels, months) => `${labels} — geboortesteentradities: ${months}`,
    aiBirthstoneSymbolic: (labels) =>
      `${labels} — symbolische edelsteensieraden (sterrenbeeld- en betekenisassociaties)`,
    kwMonthBirthstone: (month) => `geboortesteen ${month}`,
    kwMonthBirthstoneJewellery: (month) => `geboortesteen sieraden ${month}`,
    kwStoneMonthBirthstone: (stone, month) => `${stone} geboortesteen ${month}`,
    kwGiftForMonth: (month) => `cadeau verjaardag ${month}`,
    kwSignBirthstoneJewellery: (sign) => `sterrenbeeld sieraden ${sign}`,
    kwStoneSignStone: (stone, sign) => `${stone} ${sign} steen`,
    kwStoneMeaning: (stone, meaning) => `${stone} ${meaning}`,
    kwMeaningStoneJewellery: (meaning) => `${meaning} steen sieraden`,
  },
  pt: {
    sharedKeywords: [
      'joias pedra de nascimento',
      'significado pedra natural',
      'simbolismo de gemas',
      'pedra do zodíaco',
      'presente pedra de nascimento',
      'presente pedra natural significativo',
    ],
    stoneKeywords: {
      amethyst: ['pedra de fevereiro ametista', 'ametista calma e clareza', 'joias ametista'],
      'rose-quartz': ['quartzo rosa pedra do amor', 'joias quartzo rosa', 'presente quartzo rosa'],
      'lapis-lazuli': ['lápis-lazúli sabedoria', 'pedra de dezembro lápis-lazúli', 'joias lápis-lazúli'],
      malachite: ['malaquita proteção', 'malaquita transformação', 'malaquita abundância'],
      onyx: ['ônix força', 'ônix proteção', 'joias ônix negro'],
      'tiger-eye': ['olho de tigre coragem', 'olho de tigre confiança', 'pedra olho de tigre'],
      sunstone: ['pedra do sol vitalidade', 'pedra do sol alegria', 'pedra do sol liderança'],
      jade: ['jade prosperidade', 'jade harmonia', 'jade abundância'],
      'orange-jade': ['jade laranja vitalidade', 'jade laranja prosperidade'],
      'fuchsia-jade': ['jade fúcsia harmonia', 'jade rosa prosperidade'],
      carnelian: ['cornalina pedra de nascimento', 'cornalina vitalidade', 'cornalina Al Ain Rosette'],
      'blue-aventurine': ['aventurina azul oportunidade', 'aventurina azul liderança'],
    },
    propertyNames: {
      gemstoneSymbolism: 'Simbolismo da gema',
      stoneMeanings: 'Significados da pedra',
      birthstoneMonths: 'Meses da pedra de nascimento',
      zodiacAssociations: 'Associações zodiacais',
      audienceIntent: 'Intenção do público',
    },
    audienceIntentValue:
      'Compradoras de joias pedra de nascimento, aficionadas por gemas zodiacais, buscadoras de presentes em pedra natural, colecionadoras atraídas pelo simbolismo das gemas',
    aiIntent:
      'Descoberta orgânica para compradoras de pedras de nascimento, pedras zodiacais e presentes de gema significativos — ametista, lápis-lazúli, quartzo rosa, jade',
    aiBirthMonthsFallback: 'associações simbólicas / zodiacais',
    joinAnd: ' e ',
    summaryMonth: (m) => ` Associada às tradições de pedra de nascimento de ${m}.`,
    summaryZodiac: (z) => ` Ligada, na linguagem das gemas, a ${z}.`,
    summaryMeaning: (meanings) => ` Tradicionalmente associada a ${meanings}.`,
    aiBirthstoneWithMonths: (labels, months) =>
      `${labels} — tradições de pedra de nascimento: ${months}`,
    aiBirthstoneSymbolic: (labels) =>
      `${labels} — joia gema simbólica (associações zodiacais e de significado)`,
    kwMonthBirthstone: (month) => `pedra de nascimento ${month}`,
    kwMonthBirthstoneJewellery: (month) => `joias pedra de nascimento ${month}`,
    kwStoneMonthBirthstone: (stone, month) => `${stone} pedra de ${month}`,
    kwGiftForMonth: (month) => `presente aniversário ${month}`,
    kwSignBirthstoneJewellery: (sign) => `joias pedra ${sign}`,
    kwStoneSignStone: (stone, sign) => `${stone} pedra ${sign}`,
    kwStoneMeaning: (stone, meaning) => `${stone} ${meaning}`,
    kwMeaningStoneJewellery: (meaning) => `joias pedra ${meaning}`,
  },
  id: {
    sharedKeywords: [
      'perhiasan batu kelahiran',
      'makna batu alam',
      'simbolisme batu permata',
      'batu zodiak',
      'hadiah batu kelahiran',
      'hadiah batu alam bermakna',
    ],
    stoneKeywords: {
      amethyst: ['batu kelahiran Februari amethyst', 'amethyst ketenangan dan kejernihan', 'perhiasan amethyst'],
      'rose-quartz': ['kuarsa mawar batu cinta', 'perhiasan kuarsa mawar', 'hadiah kuarsa mawar'],
      'lapis-lazuli': ['lapis lazuli kebijaksanaan', 'batu Desember lapis lazuli', 'perhiasan lapis lazuli'],
      malachite: ['malasit perlindungan', 'malasit transformasi', 'malasit kelimpahan'],
      onyx: ['oniks kekuatan', 'oniks perlindungan', 'perhiasan oniks hitam'],
      'tiger-eye': ['mata harimau keberanian', 'mata harimau kepercayaan diri', 'batu mata harimau'],
      sunstone: ['batu matahari vitalitas', 'batu matahari sukacita', 'batu matahari kepemimpinan'],
      jade: ['giok kemakmuran', 'giok harmoni', 'giok kelimpahan'],
      'orange-jade': ['giok oranye vitalitas', 'giok oranye kemakmuran'],
      'fuchsia-jade': ['giok fuksia harmoni', 'giok merah muda kemakmuran'],
      carnelian: ['karnelian batu kelahiran', 'karnelian vitalitas', 'karnelian Al Ain Rosette'],
      'blue-aventurine': ['aventurin biru peluang', 'aventurin biru kepemimpinan'],
    },
    propertyNames: {
      gemstoneSymbolism: 'Simbolisme batu permata',
      stoneMeanings: 'Makna batu',
      birthstoneMonths: 'Bulan batu kelahiran',
      zodiacAssociations: 'Asosiasi zodiak',
      audienceIntent: 'Niat audiens',
    },
    audienceIntentValue:
      'Pembeli perhiasan batu kelahiran, penggemar batu zodiak, pencari hadiah batu alam bermakna, kolektor yang tertarik pada simbolisme batu permata',
    aiIntent:
      'Penemuan organik untuk pembeli batu kelahiran, batu zodiak, dan hadiah batu permata bermakna — amethyst, lapis lazuli, kuarsa mawar, giok',
    aiBirthMonthsFallback: 'asosiasi simbolik / zodiak',
    joinAnd: ' dan ',
    summaryMonth: (m) => ` Dikaitkan dengan tradisi batu kelahiran ${m}.`,
    summaryZodiac: (z) => ` Dalam lore batu permata dihubungkan dengan ${z}.`,
    summaryMeaning: (meanings) => ` Secara tradisional dikaitkan dengan ${meanings}.`,
    aiBirthstoneWithMonths: (labels, months) => `${labels} — tradisi batu kelahiran: ${months}`,
    aiBirthstoneSymbolic: (labels) =>
      `${labels} — perhiasan batu permata simbolik (asosiasi zodiak dan makna)`,
    kwMonthBirthstone: (month) => `batu kelahiran ${month}`,
    kwMonthBirthstoneJewellery: (month) => `perhiasan batu kelahiran ${month}`,
    kwStoneMonthBirthstone: (stone, month) => `${stone} batu kelahiran ${month}`,
    kwGiftForMonth: (month) => `hadiah ulang tahun ${month}`,
    kwSignBirthstoneJewellery: (sign) => `perhiasan batu ${sign}`,
    kwStoneSignStone: (stone, sign) => `${stone} batu ${sign}`,
    kwStoneMeaning: (stone, meaning) => `${stone} ${meaning}`,
    kwMeaningStoneJewellery: (meaning) => `perhiasan batu ${meaning}`,
  },
  ms: {
    sharedKeywords: [
      'perhiasan batu kelahiran',
      'makna batu semula jadi',
      'simbolisme batu permata',
      'batu zodiak',
      'hadiah batu kelahiran',
      'hadiah batu semula jadi bermakna',
    ],
    stoneKeywords: {
      amethyst: ['batu kelahiran Februari amethyst', 'amethyst ketenangan dan kejelasan', 'perhiasan amethyst'],
      'rose-quartz': ['kuaza mawar batu kasih', 'perhiasan kuaza mawar', 'hadiah kuaza mawar'],
      'lapis-lazuli': ['lapis lazuli kebijaksanaan', 'batu Disember lapis lazuli', 'perhiasan lapis lazuli'],
      malachite: ['malakit perlindungan', 'malakit transformasi', 'malakit kelimpahan'],
      onyx: ['oniks kekuatan', 'oniks perlindungan', 'perhiasan oniks hitam'],
      'tiger-eye': ['mata harimau keberanian', 'mata harimau keyakinan', 'batu mata harimau'],
      sunstone: ['batu matahari daya hidup', 'batu matahari kegembiraan', 'batu matahari kepimpinan'],
      jade: ['giok kemakmuran', 'giok harmoni', 'giok kelimpahan'],
      'orange-jade': ['giok oren daya hidup', 'giok oren kemakmuran'],
      'fuchsia-jade': ['giok fuksia harmoni', 'giok merah jambu kemakmuran'],
      carnelian: ['karnelian batu kelahiran', 'karnelian daya hidup', 'karnelian Al Ain Rosette'],
      'blue-aventurine': ['aventurin biru peluang', 'aventurin biru kepimpinan'],
    },
    propertyNames: {
      gemstoneSymbolism: 'Simbolisme batu permata',
      stoneMeanings: 'Makna batu',
      birthstoneMonths: 'Bulan batu kelahiran',
      zodiacAssociations: 'Persatuan zodiak',
      audienceIntent: 'Niat khalayak',
    },
    audienceIntentValue:
      'Pembeli perhiasan batu kelahiran, peminat batu zodiak, pencari hadiah batu semula jadi bermakna, pengumpul yang tertarik kepada simbolisme batu permata',
    aiIntent:
      'Penemuan organik untuk pembeli batu kelahiran, batu zodiak dan hadiah batu permata bermakna — amethyst, lapis lazuli, kuaza mawar, giok',
    aiBirthMonthsFallback: 'persatuan simbolik / zodiak',
    joinAnd: ' dan ',
    summaryMonth: (m) => ` Dikaitkan dengan tradisi batu kelahiran ${m}.`,
    summaryZodiac: (z) => ` Dalam lore batu permata dikaitkan dengan ${z}.`,
    summaryMeaning: (meanings) => ` Secara tradisional dikaitkan dengan ${meanings}.`,
    aiBirthstoneWithMonths: (labels, months) => `${labels} — tradisi batu kelahiran: ${months}`,
    aiBirthstoneSymbolic: (labels) =>
      `${labels} — perhiasan batu permata simbolik (persatuan zodiak dan makna)`,
    kwMonthBirthstone: (month) => `batu kelahiran ${month}`,
    kwMonthBirthstoneJewellery: (month) => `perhiasan batu kelahiran ${month}`,
    kwStoneMonthBirthstone: (stone, month) => `${stone} batu kelahiran ${month}`,
    kwGiftForMonth: (month) => `hadiah hari lahir ${month}`,
    kwSignBirthstoneJewellery: (sign) => `perhiasan batu ${sign}`,
    kwStoneSignStone: (stone, sign) => `${stone} batu ${sign}`,
    kwStoneMeaning: (stone, meaning) => `${stone} ${meaning}`,
    kwMeaningStoneJewellery: (meaning) => `perhiasan batu ${meaning}`,
  },
}

/** Modest EN anchors for non-English locales (international SEO). */
const EN_ANCHOR_MAX = 6

function englishAnchorsForStones(stones: NaturalStoneKey[]): string[] {
  const out: string[] = ['birthstone']
  for (const stone of stones) {
    out.push(STONE_LABEL.en[stone])
    out.push(`${STONE_LABEL.en[stone]} birthstone`)
  }
  return Array.from(new Set(out)).slice(0, EN_ANCHOR_MAX)
}

function joinList(items: string[], locale: AppLocale): string {
  const copy = LOCALE_COPY[locale]
  if (items.length <= 1) return items[0] ?? ''
  if (items.length === 2) return `${items[0]}${copy.joinAnd}${items[1]}`
  return `${items.slice(0, -1).join(', ')}${copy.joinAnd}${items[items.length - 1]}`
}

function localizeMonths(keys: BirthMonthKey[], locale: AppLocale): string[] {
  return keys.map((k) => MONTH_LABEL[locale][k])
}

function localizeZodiac(keys: ZodiacKey[], locale: AppLocale): string[] {
  return keys.map((k) => ZODIAC_LABEL[locale][k])
}

function localizeMeanings(keys: MeaningKey[], locale: AppLocale): string[] {
  return keys.map((k) => MEANING_LABEL[locale][k])
}

function stoneLabel(stone: NaturalStoneKey, locale: AppLocale): string {
  return STONE_LABEL[locale][stone]
}

/** Resolve primary catalogue stones from an accessory id (order = prominence). */
export function resolveNaturalStonesFromAccessoryId(id: string): NaturalStoneKey[] {
  const canonical = resolveAccessoryId(id).toLowerCase()
  const found: NaturalStoneKey[] = []
  const push = (stone: NaturalStoneKey) => {
    if (!found.includes(stone)) found.push(stone)
  }

  if (canonical.includes('amethyst')) push('amethyst')
  if (canonical.includes('rose-quartz') || canonical.includes('rose_quartz')) push('rose-quartz')
  if (canonical.includes('lapis')) push('lapis-lazuli')
  if (canonical.includes('malachite')) push('malachite')
  if (canonical.includes('tiger-eye') || canonical.includes('tiger_eye')) push('tiger-eye')
  if (canonical.includes('sunstone')) push('sunstone')
  if (canonical.includes('onyx')) push('onyx')
  if (canonical.includes('fuchsia-jade') || canonical.includes('pink-jade')) push('fuchsia-jade')
  if (canonical.includes('orange-jade')) push('orange-jade')
  if (canonical.includes('jade-hearts') || canonical.includes('green-jade') || canonical === 'signature-strand-jade')
    push('jade')
  if (canonical.includes('blue-aventurine')) push('blue-aventurine')
  // Carnelian Al Ain Rosette appears across jewellery lines
  if (
    canonical.includes('al-ain') ||
    canonical.includes('al-quaa') ||
    canonical.includes('rosette') ||
    canonical.includes('signature-strand')
  ) {
    push('carnelian')
  }
  if (
    canonical.includes('earrings') ||
    canonical.includes('necklace') ||
    canonical.includes('phone-charm') ||
    canonical.includes('bag-charm') ||
    canonical.includes('signature-strand')
  ) {
    push('hematite')
  }

  return found
}

export function isNaturalStoneAccessoryId(id: string): boolean {
  return (
    resolveNaturalStonesFromAccessoryId(id).some((s) => s !== 'hematite' && s !== 'carnelian') ||
    resolveNaturalStonesFromAccessoryId(id).includes('carnelian')
  )
}

function primaryStones(id: string): NaturalStoneKey[] {
  return resolveNaturalStonesFromAccessoryId(id).filter((s) => s !== 'hematite')
}

/** Localized discovery keywords for schema + meta (primary stones first, skip hematite noise). */
export function getNaturalStoneBirthstoneKeywords(
  id: string,
  locale: AppLocale = 'en',
): string[] {
  const stones = primaryStones(id)
  if (!stones.length) return []

  const copy = LOCALE_COPY[locale]
  const out: string[] = [...copy.sharedKeywords]

  for (const stone of stones) {
    const assoc = STONE_ASSOCIATIONS[stone]
    const label = stoneLabel(stone, locale)
    const months = localizeMonths(assoc.birthMonths, locale)
    const zodiac = localizeZodiac(assoc.zodiac, locale)
    const meanings = localizeMeanings(assoc.meanings, locale)

    const stoneKw = copy.stoneKeywords[stone]
    if (stoneKw) out.push(...stoneKw)

    for (const month of months) {
      out.push(
        copy.kwMonthBirthstone(month),
        copy.kwMonthBirthstoneJewellery(month),
        copy.kwStoneMonthBirthstone(label, month),
        copy.kwGiftForMonth(month),
      )
    }
    for (const sign of zodiac) {
      out.push(copy.kwSignBirthstoneJewellery(sign), copy.kwStoneSignStone(label, sign))
    }
    for (const meaning of meanings.slice(0, 4)) {
      out.push(copy.kwStoneMeaning(label, meaning), copy.kwMeaningStoneJewellery(meaning))
    }
  }

  if (locale !== 'en') {
    out.push(...englishAnchorsForStones(stones))
  }

  return Array.from(new Set(out.map((k) => k.trim()).filter(Boolean)))
}

/**
 * Compact localized summary for ai:* / JSON-LD — not shown on page.
 * Tone: editorial symbolism, no medical claims.
 */
export function getNaturalStoneBirthstoneSummary(
  id: string,
  locale: AppLocale = 'en',
): string | undefined {
  const stones = primaryStones(id)
  if (!stones.length) return undefined

  const copy = LOCALE_COPY[locale]
  const parts = stones.map((stone) => {
    const assoc = STONE_ASSOCIATIONS[stone]
    const label = stoneLabel(stone, locale)
    const months = localizeMonths(assoc.birthMonths, locale)
    const zodiac = localizeZodiac(assoc.zodiac, locale)
    const meanings = localizeMeanings(assoc.meanings.slice(0, 4), locale)
    const monthBit = months.length ? copy.summaryMonth(joinList(months, locale)) : ''
    const zodiacBit = zodiac.length ? copy.summaryZodiac(zodiac.join(', ')) : ''
    const meaningBit = copy.summaryMeaning(meanings.join(', '))
    return `${label}:${monthBit}${zodiacBit}${meaningBit}`
  })

  return parts.join(' ').replace(/\s+/g, ' ').trim()
}

/** @deprecated Prefer getNaturalStoneBirthstoneSummary(id, 'en') */
export function getNaturalStoneBirthstoneSummaryEn(id: string): string | undefined {
  return getNaturalStoneBirthstoneSummary(id, 'en')
}

/** Hidden ai:* fields merged into product meta `other`. */
export function getNaturalStoneBirthstoneAiOther(
  id: string,
  locale: AppLocale = 'en',
): Record<string, string> | undefined {
  const stones = primaryStones(id)
  if (!stones.length) return undefined

  const copy = LOCALE_COPY[locale]
  const labels = stones.map((s) => stoneLabel(s, locale)).join(', ')
  const months = Array.from(
    new Set(stones.flatMap((s) => localizeMonths(STONE_ASSOCIATIONS[s].birthMonths, locale))),
  )
  const zodiac = Array.from(
    new Set(stones.flatMap((s) => localizeZodiac(STONE_ASSOCIATIONS[s].zodiac, locale))),
  )
  const meanings = Array.from(
    new Set(stones.flatMap((s) => localizeMeanings(STONE_ASSOCIATIONS[s].meanings, locale))),
  ).slice(0, 8)
  const summary = getNaturalStoneBirthstoneSummary(id, locale)

  return {
    'ai:birthstone': months.length
      ? copy.aiBirthstoneWithMonths(labels, months.join(', '))
      : copy.aiBirthstoneSymbolic(labels),
    'ai:birth-months': months.join(', ') || copy.aiBirthMonthsFallback,
    'ai:zodiac': zodiac.join(', '),
    'ai:stone-meanings': meanings.join(', '),
    'ai:stone-symbolism': summary ?? '',
    'ai:intent-birthstone': copy.aiIntent,
  }
}

/** JSON-LD additionalProperty rows (hidden from on-page UI). */
export function buildNaturalStoneBirthstoneAdditionalProperties(
  id: string,
  locale: AppLocale = 'en',
): Record<string, unknown>[] {
  const stones = primaryStones(id)
  if (!stones.length) return []

  const copy = LOCALE_COPY[locale]
  const months = Array.from(
    new Set(stones.flatMap((s) => localizeMonths(STONE_ASSOCIATIONS[s].birthMonths, locale))),
  )
  const zodiac = Array.from(
    new Set(stones.flatMap((s) => localizeZodiac(STONE_ASSOCIATIONS[s].zodiac, locale))),
  )
  const meanings = Array.from(
    new Set(stones.flatMap((s) => localizeMeanings(STONE_ASSOCIATIONS[s].meanings, locale))),
  ).slice(0, 8)
  const summary = getNaturalStoneBirthstoneSummary(id, locale)
  const labels = stones.map((s) => stoneLabel(s, locale)).join(', ')

  const props: Record<string, unknown>[] = [
    {
      '@type': 'PropertyValue',
      name: copy.propertyNames.gemstoneSymbolism,
      value: summary ?? labels,
    },
    {
      '@type': 'PropertyValue',
      name: copy.propertyNames.stoneMeanings,
      value: meanings.join(', '),
    },
  ]

  if (months.length) {
    props.push({
      '@type': 'PropertyValue',
      name: copy.propertyNames.birthstoneMonths,
      value: months.join(', '),
    })
  }

  if (zodiac.length) {
    props.push({
      '@type': 'PropertyValue',
      name: copy.propertyNames.zodiacAssociations,
      value: zodiac.join(', '),
    })
  }

  props.push({
    '@type': 'PropertyValue',
    name: copy.propertyNames.audienceIntent,
    value: copy.audienceIntentValue,
  })

  return props
}

/** Merge helper for existing keyword arrays. */
export function mergeNaturalStoneBirthstoneKeywords(
  id: string,
  existing?: string[] | null,
  locale: AppLocale = 'en',
): string[] {
  return Array.from(
    new Set(
      [...(existing ?? []), ...getNaturalStoneBirthstoneKeywords(id, locale)].filter(Boolean),
    ),
  )
}

/** Merge helper for ai:other maps. */
export function mergeNaturalStoneBirthstoneAiOther(
  id: string,
  locale: AppLocale,
  existing?: Record<string, string> | null,
): Record<string, string> | undefined {
  const birth = getNaturalStoneBirthstoneAiOther(id, locale)
  if (!existing && !birth) return undefined
  return { ...(existing ?? {}), ...(birth ?? {}) }
}
