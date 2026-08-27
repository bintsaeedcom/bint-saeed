/**
 * Hidden discovery keywords: natural stone × product types (phone charm, bag charm,
 * keyring, necklace, earrings) + modifiers. All AppLocales.
 * Used only in meta / schema / AI tags — never as visible copy.
 */
import type { Accessory } from '@/data/accessories'
import type { AppLocale } from '@/lib/i18n/routing'

export type DiscoveryStoneId =
  | 'malachite'
  | 'lapis-lazuli'
  | 'tiger-eye'
  | 'sunstone'
  | 'onyx'
  | 'rose-quartz'
  | 'jade'
  | 'fuchsia-jade'
  | 'orange-jade'
  | 'amethyst'
  | 'blue-aventurine'
  | 'carnelian'
  | 'hematite'

const STONES: DiscoveryStoneId[] = [
  'malachite',
  'lapis-lazuli',
  'tiger-eye',
  'sunstone',
  'onyx',
  'rose-quartz',
  'jade',
  'fuchsia-jade',
  'orange-jade',
  'amethyst',
  'blue-aventurine',
  'carnelian',
  'hematite',
]

/** Luxury jewellery stone names per locale (jewellery market forms). */
const STONE_NAME: Record<AppLocale, Record<DiscoveryStoneId, string>> = {
  en: {
    malachite: 'malachite',
    'lapis-lazuli': 'lapis lazuli',
    'tiger-eye': 'tiger eye',
    sunstone: 'sunstone',
    onyx: 'onyx',
    'rose-quartz': 'rose quartz',
    jade: 'jade',
    'fuchsia-jade': 'fuchsia jade',
    'orange-jade': 'orange jade',
    amethyst: 'amethyst',
    'blue-aventurine': 'blue aventurine',
    carnelian: 'carnelian',
    hematite: 'hematite',
  },
  ar: {
    malachite: 'ملاكيت',
    'lapis-lazuli': 'لازورد',
    'tiger-eye': 'عين النمر',
    sunstone: 'حجر الشمس',
    onyx: 'أونكس',
    'rose-quartz': 'كوارتز وردي',
    jade: 'يشم',
    'fuchsia-jade': 'يشم فوشي',
    'orange-jade': 'يشم برتقالي',
    amethyst: 'جمشت',
    'blue-aventurine': 'أفنتورين أزرق',
    carnelian: 'عقيق',
    hematite: 'هيماتيت',
  },
  fr: {
    malachite: 'malachite',
    'lapis-lazuli': 'lapis-lazuli',
    'tiger-eye': 'œil de tigre',
    sunstone: 'pierre de soleil',
    onyx: 'onyx',
    'rose-quartz': 'quartz rose',
    jade: 'jade',
    'fuchsia-jade': 'jade fuchsia',
    'orange-jade': 'jade orange',
    amethyst: 'améthyste',
    'blue-aventurine': 'aventurine bleue',
    carnelian: 'cornaline',
    hematite: 'hématite',
  },
  it: {
    malachite: 'malachite',
    'lapis-lazuli': 'lapislazzuli',
    'tiger-eye': 'occhio di tigre',
    sunstone: 'pietra di sole',
    onyx: 'onice',
    'rose-quartz': 'quarzo rosa',
    jade: 'giada',
    'fuchsia-jade': 'giada fucsia',
    'orange-jade': 'giada arancio',
    amethyst: 'ametista',
    'blue-aventurine': 'aventurina blu',
    carnelian: 'corniola',
    hematite: 'ematite',
  },
  es: {
    malachite: 'malaquita',
    'lapis-lazuli': 'lapislázuli',
    'tiger-eye': 'ojo de tigre',
    sunstone: 'piedra del sol',
    onyx: 'ónix',
    'rose-quartz': 'cuarzo rosa',
    jade: 'jade',
    'fuchsia-jade': 'jade fucsia',
    'orange-jade': 'jade naranja',
    amethyst: 'amatista',
    'blue-aventurine': 'aventurina azul',
    carnelian: 'cornalina',
    hematite: 'hematita',
  },
  ru: {
    malachite: 'малахит',
    'lapis-lazuli': 'лазурит',
    'tiger-eye': 'тигровый глаз',
    sunstone: 'солнечный камень',
    onyx: 'оникс',
    'rose-quartz': 'розовый кварц',
    jade: 'нефрит',
    'fuchsia-jade': 'фуксиевый нефрит',
    'orange-jade': 'оранжевый нефрит',
    amethyst: 'аметист',
    'blue-aventurine': 'синий авантюрин',
    carnelian: 'сердолик',
    hematite: 'гематит',
  },
  zh: {
    malachite: '孔雀石',
    'lapis-lazuli': '青金石',
    'tiger-eye': '虎眼石',
    sunstone: '太阳石',
    onyx: '缟玛瑙',
    'rose-quartz': '粉晶',
    jade: '翡翠',
    'fuchsia-jade': '紫红玉',
    'orange-jade': '橙玉',
    amethyst: '紫水晶',
    'blue-aventurine': '蓝东陵石',
    carnelian: '红玉髓',
    hematite: '赤铁矿',
  },
  de: {
    malachite: 'Malachit',
    'lapis-lazuli': 'Lapislazuli',
    'tiger-eye': 'Tigerauge',
    sunstone: 'Sonnenstein',
    onyx: 'Onyx',
    'rose-quartz': 'Rosenquarz',
    jade: 'Jade',
    'fuchsia-jade': 'Fuchsia-Jade',
    'orange-jade': 'Orange Jade',
    amethyst: 'Amethyst',
    'blue-aventurine': 'blauer Aventurin',
    carnelian: 'Karneol',
    hematite: 'Hämatit',
  },
  nl: {
    malachite: 'malachiet',
    'lapis-lazuli': 'lapis lazuli',
    'tiger-eye': 'tijgeroog',
    sunstone: 'zonsteen',
    onyx: 'onyx',
    'rose-quartz': 'rozenkwarts',
    jade: 'jade',
    'fuchsia-jade': 'fuchsia-jade',
    'orange-jade': 'oranje jade',
    amethyst: 'amethist',
    'blue-aventurine': 'blauwe aventurijn',
    carnelian: 'carneool',
    hematite: 'hematiet',
  },
  pt: {
    malachite: 'malaquite',
    'lapis-lazuli': 'lápis-lazúli',
    'tiger-eye': 'olho de tigre',
    sunstone: 'pedra do sol',
    onyx: 'ónix',
    'rose-quartz': 'quartzo rosa',
    jade: 'jade',
    'fuchsia-jade': 'jade fúcsia',
    'orange-jade': 'jade laranja',
    amethyst: 'ametista',
    'blue-aventurine': 'aventurina azul',
    carnelian: 'cornalina',
    hematite: 'hematite',
  },
  id: {
    malachite: 'malakit',
    'lapis-lazuli': 'lapis lazuli',
    'tiger-eye': 'mata harimau',
    sunstone: 'batu matahari',
    onyx: 'oniks',
    'rose-quartz': 'kuarsa mawar',
    jade: 'giok',
    'fuchsia-jade': 'giok fuchsia',
    'orange-jade': 'giok oranye',
    amethyst: 'kecubung',
    'blue-aventurine': 'aventurin biru',
    carnelian: 'akik',
    hematite: 'hematit',
  },
  ms: {
    malachite: 'malakit',
    'lapis-lazuli': 'lapis lazuli',
    'tiger-eye': 'mata harimau',
    sunstone: 'batu matahari',
    onyx: 'oniks',
    'rose-quartz': 'kuarsa mawar',
    jade: 'jed',
    'fuchsia-jade': 'jed fuchsia',
    'orange-jade': 'jed oren',
    amethyst: 'kecubung',
    'blue-aventurine': 'aventurin biru',
    carnelian: 'akik',
    hematite: 'hematit',
  },
}

type ProductKind =
  | 'phoneCharm'
  | 'bagCharm'
  | 'keyring'
  | 'necklace'
  | 'earrings'
  | 'dropEarrings'
  | 'hoopEarrings'
  | 'studEarrings'
  | 'jewellery'
  | 'accessories'
  | 'flowerEarrings'
  | 'gemstoneEarrings'
  | 'gemstoneNecklace'

/** Localized product-type phrases (elegant retail terms where the market prefers them). */
const PRODUCT_TYPE: Record<AppLocale, Record<ProductKind, string>> = {
  en: {
    phoneCharm: 'phone charm',
    bagCharm: 'bag charm',
    keyring: 'keyring',
    necklace: 'necklace',
    earrings: 'earrings',
    dropEarrings: 'drop earrings',
    hoopEarrings: 'hoop earrings',
    studEarrings: 'stud earrings',
    jewellery: 'jewellery',
    accessories: 'accessories',
    flowerEarrings: 'flower stone earrings',
    gemstoneEarrings: 'gemstone earrings',
    gemstoneNecklace: 'gemstone necklace',
  },
  ar: {
    phoneCharm: 'تعليقة هاتف',
    bagCharm: 'تعليقة حقيبة',
    keyring: 'حامل مفاتيح',
    necklace: 'قلادة',
    earrings: 'أقراط',
    dropEarrings: 'أقراط متدلية',
    hoopEarrings: 'أقراط حلقية',
    studEarrings: 'أقراط مرصعة',
    jewellery: 'مجوهرات',
    accessories: 'إكسسوارات',
    flowerEarrings: 'أقراط حجر زهري',
    gemstoneEarrings: 'أقراط أحجار كريمة',
    gemstoneNecklace: 'قلادة أحجار كريمة',
  },
  fr: {
    phoneCharm: 'breloque téléphone',
    bagCharm: 'breloque sac',
    keyring: 'porte-clés',
    necklace: 'collier',
    earrings: 'boucles d’oreilles',
    dropEarrings: 'boucles pendantes',
    hoopEarrings: 'créoles',
    studEarrings: 'clous d’oreilles',
    jewellery: 'bijoux',
    accessories: 'accessoires',
    flowerEarrings: 'boucles pierre fleur',
    gemstoneEarrings: 'boucles pierres précieuses',
    gemstoneNecklace: 'collier pierres précieuses',
  },
  it: {
    phoneCharm: 'ciondolo telefono',
    bagCharm: 'ciondolo borsa',
    keyring: 'portachiavi',
    necklace: 'collana',
    earrings: 'orecchini',
    dropEarrings: 'orecchini a goccia',
    hoopEarrings: 'orecchini a cerchio',
    studEarrings: 'orecchini a lobo',
    jewellery: 'gioielli',
    accessories: 'accessori',
    flowerEarrings: 'orecchini pietra fiore',
    gemstoneEarrings: 'orecchini gemme',
    gemstoneNecklace: 'collana gemme',
  },
  es: {
    phoneCharm: 'colgante para móvil',
    bagCharm: 'colgante para bolso',
    keyring: 'llavero',
    necklace: 'collar',
    earrings: 'pendientes',
    dropEarrings: 'pendientes colgantes',
    hoopEarrings: 'aros',
    studEarrings: 'pendientes de botón',
    jewellery: 'joyería',
    accessories: 'accesorios',
    flowerEarrings: 'pendientes piedra flor',
    gemstoneEarrings: 'pendientes de gemas',
    gemstoneNecklace: 'collar de gemas',
  },
  ru: {
    phoneCharm: 'подвеска для телефона',
    bagCharm: 'подвеска для сумки',
    keyring: 'брелок',
    necklace: 'ожерелье',
    earrings: 'серьги',
    dropEarrings: 'серьги-капли',
    hoopEarrings: 'серьги-кольца',
    studEarrings: 'серьги-гвоздики',
    jewellery: 'украшения',
    accessories: 'аксессуары',
    flowerEarrings: 'серьги с цветочным камнем',
    gemstoneEarrings: 'серьги с самоцветами',
    gemstoneNecklace: 'ожерелье с самоцветами',
  },
  zh: {
    phoneCharm: '手机挂饰',
    bagCharm: '手袋挂饰',
    keyring: '钥匙扣',
    necklace: '项链',
    earrings: '耳环',
    dropEarrings: '耳坠',
    hoopEarrings: '圈形耳环',
    studEarrings: '耳钉',
    jewellery: '珠宝',
    accessories: '配饰',
    flowerEarrings: '花朵宝石耳环',
    gemstoneEarrings: '宝石耳环',
    gemstoneNecklace: '宝石项链',
  },
  de: {
    phoneCharm: 'Telefonanhänger',
    bagCharm: 'Taschenanhänger',
    keyring: 'Schlüsselanhänger',
    necklace: 'Halskette',
    earrings: 'Ohrringe',
    dropEarrings: 'Tropfenohrringe',
    hoopEarrings: 'Creolen',
    studEarrings: 'Ohrstecker',
    jewellery: 'Schmuck',
    accessories: 'Accessoires',
    flowerEarrings: 'Blumenstein-Ohrringe',
    gemstoneEarrings: 'Edelstein-Ohrringe',
    gemstoneNecklace: 'Edelstein-Halskette',
  },
  nl: {
    phoneCharm: 'telefoonhanger',
    bagCharm: 'tashanger',
    keyring: 'sleutelhanger',
    necklace: 'ketting',
    earrings: 'oorbellen',
    dropEarrings: 'druppeloorbellen',
    hoopEarrings: 'hoepeloorbellen',
    studEarrings: 'stud oorbellen',
    jewellery: 'sieraden',
    accessories: 'accessoires',
    flowerEarrings: 'bloemsteen oorbellen',
    gemstoneEarrings: 'edelsteen oorbellen',
    gemstoneNecklace: 'edelsteen ketting',
  },
  pt: {
    phoneCharm: 'pingente de telemóvel',
    bagCharm: 'pingente de mala',
    keyring: 'porta-chaves',
    necklace: 'colar',
    earrings: 'brincos',
    dropEarrings: 'brincos pendentes',
    hoopEarrings: 'argolas',
    studEarrings: 'brincos de pressão',
    jewellery: 'joias',
    accessories: 'acessórios',
    flowerEarrings: 'brincos pedra flor',
    gemstoneEarrings: 'brincos de gemas',
    gemstoneNecklace: 'colar de gemas',
  },
  id: {
    phoneCharm: 'charm ponsel',
    bagCharm: 'charm tas',
    keyring: 'gantungan kunci',
    necklace: 'kalung',
    earrings: 'anting',
    dropEarrings: 'anting jatuh',
    hoopEarrings: 'anting hoop',
    studEarrings: 'anting stud',
    jewellery: 'perhiasan',
    accessories: 'aksesoris',
    flowerEarrings: 'anting batu bunga',
    gemstoneEarrings: 'anting batu permata',
    gemstoneNecklace: 'kalung batu permata',
  },
  ms: {
    phoneCharm: 'charm telefon',
    bagCharm: 'charm beg',
    keyring: 'pemegang kunci',
    necklace: 'rantai',
    earrings: 'anting',
    dropEarrings: 'anting gantung',
    hoopEarrings: 'anting bulat',
    studEarrings: 'anting stud',
    jewellery: 'barang kemas',
    accessories: 'aksesori',
    flowerEarrings: 'anting batu bunga',
    gemstoneEarrings: 'anting batu permata',
    gemstoneNecklace: 'rantai batu permata',
  },
}

type ModifierId =
  | 'naturalStone'
  | 'exclusive'
  | 'statement'
  | 'elegant'
  | 'luxury'
  | 'gemstone'
  | 'goldPlated'
  | 'designer'

const MODIFIER: Record<AppLocale, Record<ModifierId, string>> = {
  en: {
    naturalStone: 'natural stone',
    exclusive: 'exclusive',
    statement: 'statement',
    elegant: 'elegant',
    luxury: 'luxury',
    gemstone: 'gemstone',
    goldPlated: 'gold plated',
    designer: 'designer',
  },
  ar: {
    naturalStone: 'أحجار طبيعية',
    exclusive: 'حصرية',
    statement: 'جريئة',
    elegant: 'أنيقة',
    luxury: 'فاخرة',
    gemstone: 'أحجار كريمة',
    goldPlated: 'مطلي ذهب',
    designer: 'مصمّم',
  },
  fr: {
    naturalStone: 'pierres naturelles',
    exclusive: 'exclusif',
    statement: 'statement',
    elegant: 'élégant',
    luxury: 'luxe',
    gemstone: 'pierres précieuses',
    goldPlated: 'plaqué or',
    designer: 'designer',
  },
  it: {
    naturalStone: 'pietre naturali',
    exclusive: 'esclusivo',
    statement: 'statement',
    elegant: 'elegante',
    luxury: 'lusso',
    gemstone: 'gemme',
    goldPlated: 'placcato oro',
    designer: 'designer',
  },
  es: {
    naturalStone: 'piedra natural',
    exclusive: 'exclusivo',
    statement: 'statement',
    elegant: 'elegante',
    luxury: 'lujo',
    gemstone: 'gemas',
    goldPlated: 'baño de oro',
    designer: 'diseñador',
  },
  ru: {
    naturalStone: 'натуральный камень',
    exclusive: 'эксклюзивный',
    statement: 'яркий',
    elegant: 'элегантный',
    luxury: 'роскошный',
    gemstone: 'самоцвет',
    goldPlated: 'с позолотой',
    designer: 'дизайнерский',
  },
  zh: {
    naturalStone: '天然石',
    exclusive: '独家',
    statement: '宣言式',
    elegant: '优雅',
    luxury: '奢华',
    gemstone: '宝石',
    goldPlated: '镀金',
    designer: '设计师',
  },
  de: {
    naturalStone: 'Naturstein',
    exclusive: 'exklusiv',
    statement: 'Statement',
    elegant: 'elegant',
    luxury: 'Luxus',
    gemstone: 'Edelstein',
    goldPlated: 'vergoldet',
    designer: 'Designer',
  },
  nl: {
    naturalStone: 'natuursteen',
    exclusive: 'exclusief',
    statement: 'statement',
    elegant: 'elegant',
    luxury: 'luxe',
    gemstone: 'edelsteen',
    goldPlated: 'verguld',
    designer: 'designer',
  },
  pt: {
    naturalStone: 'pedra natural',
    exclusive: 'exclusivo',
    statement: 'statement',
    elegant: 'elegante',
    luxury: 'luxo',
    gemstone: 'gemas',
    goldPlated: 'banho de ouro',
    designer: 'designer',
  },
  id: {
    naturalStone: 'batu alam',
    exclusive: 'eksklusif',
    statement: 'statement',
    elegant: 'elegan',
    luxury: 'mewah',
    gemstone: 'batu permata',
    goldPlated: 'berlapis emas',
    designer: 'desainer',
  },
  ms: {
    naturalStone: 'batu semula jadi',
    exclusive: 'eksklusif',
    statement: 'statement',
    elegant: 'elegan',
    luxury: 'mewah',
    gemstone: 'batu permata',
    goldPlated: 'bersalut emas',
    designer: 'pereka',
  },
}

function joinPhrase(locale: AppLocale, parts: string[]): string {
  if (locale === 'zh') return parts.join('')
  return parts.filter(Boolean).join(' ')
}

function phraseStoneType(locale: AppLocale, stone: DiscoveryStoneId, kind: ProductKind): string {
  const s = STONE_NAME[locale][stone]
  const t = PRODUCT_TYPE[locale][kind]
  if (locale === 'ar') return `${t} ${s}`
  if (locale === 'zh') return `${s}${t}`
  if (locale === 'fr' || locale === 'it' || locale === 'es' || locale === 'pt' || locale === 'nl' || locale === 'de') {
    // Prefer "[type] [stone]" or "[stone] [type]" — EN-style stone-first is fine for discovery
    return `${s} ${t}`
  }
  return `${s} ${t}`
}

function phraseModifierType(locale: AppLocale, mod: ModifierId, kind: ProductKind): string {
  const m = MODIFIER[locale][mod]
  const t = PRODUCT_TYPE[locale][kind]
  if (locale === 'ar') return `${t} ${m}`
  if (locale === 'zh') return `${m}${t}`
  return `${m} ${t}`
}

function phraseModifierStoneType(
  locale: AppLocale,
  mod: ModifierId,
  stone: DiscoveryStoneId,
  kind: ProductKind,
): string {
  const m = MODIFIER[locale][mod]
  const s = STONE_NAME[locale][stone]
  const t = PRODUCT_TYPE[locale][kind]
  if (locale === 'zh') return `${m}${s}${t}`
  if (locale === 'ar') return `${t} ${s} ${m}`
  return `${m} ${s} ${t}`
}

const CHARM_KINDS: ProductKind[] = ['phoneCharm', 'bagCharm', 'keyring']
const NECKLACE_KINDS: ProductKind[] = ['necklace', 'gemstoneNecklace', 'jewellery']
const EARRING_KINDS: ProductKind[] = [
  'earrings',
  'dropEarrings',
  'hoopEarrings',
  'studEarrings',
  'flowerEarrings',
  'gemstoneEarrings',
]
const ALL_PRODUCT_KINDS: ProductKind[] = [
  ...CHARM_KINDS,
  ...NECKLACE_KINDS,
  ...EARRING_KINDS,
  'accessories',
]

const CORE_MODIFIERS: ModifierId[] = [
  'naturalStone',
  'exclusive',
  'statement',
  'elegant',
  'luxury',
  'gemstone',
  'goldPlated',
  'designer',
]

/** EN spelling / spacing variants that searchers actually type. */
const EN_EXTRA_BASE = [
  'natural stone jewelry',
  'natural stone jewellery',
  'natural stone accessories',
  'natural stone phone charm',
  'natural stone bag charm',
  'natural stone keyring',
  'natural stone key ring',
  'natural stone keychain',
  'natural stone necklace',
  'natural stone earrings',
  'phonecharm',
  'phone charm',
  'bagcharm',
  'bag charm',
  'keyring',
  'key ring',
  'keychain',
  'exclusive phone charm',
  'statement phone charm',
  'exclusive bag charm',
  'statement bag charm',
  'exclusive keyring',
  'statement necklace',
  'exclusive natural stone necklace',
  'statement earrings',
  'exclusive earrings',
  'elegant earrings',
  'gold plated earrings',
  'drop earrings',
  'hoop earrings',
  'gemstone earrings',
  'gemstone necklace',
  'flower stone earrings',
  'sunstone earrings',
  'malachite earrings',
  'lapis lazuli necklace',
  'lapis lazuli phone charm',
  'tiger eye phone charm',
  'malachite phone charm',
]

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

function buildForKinds(locale: AppLocale, kinds: ProductKind[]): string[] {
  const stones = STONE_NAME[locale]
  const types = PRODUCT_TYPE[locale]
  const mods = MODIFIER[locale]
  const out: string[] = []

  for (const kind of kinds) {
    out.push(types[kind])
    out.push(joinPhrase(locale, [mods.naturalStone, types[kind]]))
    for (const mod of CORE_MODIFIERS) {
      if (mod === 'naturalStone') continue
      out.push(phraseModifierType(locale, mod, kind))
    }
    for (const stone of STONES) {
      out.push(phraseStoneType(locale, stone, kind))
      // High-intent modifiers × stone × type
      for (const mod of ['exclusive', 'statement', 'naturalStone', 'gemstone', 'luxury'] as ModifierId[]) {
        out.push(phraseModifierStoneType(locale, mod, stone, kind))
      }
    }
  }

  // Category umbrella terms
  out.push(joinPhrase(locale, [mods.naturalStone, types.jewellery]))
  out.push(joinPhrase(locale, [mods.naturalStone, types.accessories]))
  out.push(joinPhrase(locale, [mods.gemstone, types.jewellery]))

  if (locale === 'en') {
    out.push(...EN_EXTRA_BASE)
    // Extra EN stone × type without locale join quirks
    for (const stone of STONES) {
      const s = stones[stone]
      out.push(`${s} phone charm`, `${s} bag charm`, `${s} keyring`, `${s} keychain`)
      out.push(`${s} necklace`, `${s} earrings`, `${s} drop earrings`, `${s} hoop earrings`)
      out.push(`exclusive ${s} phone charm`, `statement ${s} necklace`, `exclusive ${s} earrings`)
    }
  }

  return dedupe(out)
}

export function getNaturalStoneProductDiscoveryKeywords(
  category: Accessory['category'] | 'all' = 'all',
  locale: AppLocale = 'en',
): string[] {
  if (category === 'phone-strands') {
    return buildForKinds(locale, ['phoneCharm', 'keyring', 'accessories', 'jewellery'])
  }
  if (category === 'bag-strands') {
    return buildForKinds(locale, ['bagCharm', 'keyring', 'accessories', 'jewellery'])
  }
  if (category === 'necklaces') {
    return buildForKinds(locale, NECKLACE_KINDS)
  }
  if (category === 'earrings') {
    return buildForKinds(locale, EARRING_KINDS)
  }
  if (category === 'signature-strands') {
    // Strands already have rich garment-jewellery pools; add stone jewellery umbrella only
    return buildForKinds(locale, ['jewellery', 'accessories', 'necklace'])
  }
  return buildForKinds(locale, ALL_PRODUCT_KINDS)
}

/** Flat list for accessories hub / llms — all product types. */
export function getAllNaturalStoneProductDiscoveryKeywords(locale: AppLocale = 'en'): string[] {
  return getNaturalStoneProductDiscoveryKeywords('all', locale)
}
