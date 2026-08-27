import type { AppLocale } from '@/lib/i18n/routing'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import { getNaturalStoneProductDiscoveryKeywords } from '@/lib/accessories/naturalStoneProductDiscoveryI18n'
import { getListedPriceForAccessory } from '@/lib/pricing/accessoryCatalogPrices'
import { SUPPORTED_CURRENCIES, type SupportedCurrency } from '@/lib/pricing/types'
import { BRAND_NAME, LOCALE_GEO } from '@/lib/i18n/brandProperNouns'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'

export const EARRING_META_IDS = [
  'al-ain-oasis-earrings-malachite',
  'al-ain-oasis-earrings-orange-jade',
  'al-quaa-earrings-rose-quartz',
  'al-quaa-earrings-lapis-lazuli',
] as const

export type EarringMetaId = (typeof EARRING_META_IDS)[number]

type CollectionKey = 'oasis' | 'quaa'
type StoneKey = 'malachite' | 'orange-jade' | 'rose-quartz' | 'lapis-lazuli'

const ID_META: Record<EarringMetaId, { collection: CollectionKey; stone: StoneKey }> = {
  'al-ain-oasis-earrings-malachite': { collection: 'oasis', stone: 'malachite' },
  'al-ain-oasis-earrings-orange-jade': { collection: 'oasis', stone: 'orange-jade' },
  'al-quaa-earrings-rose-quartz': { collection: 'quaa', stone: 'rose-quartz' },
  'al-quaa-earrings-lapis-lazuli': { collection: 'quaa', stone: 'lapis-lazuli' },
}

function isEarringMetaId(id: string): id is EarringMetaId {
  return (EARRING_META_IDS as readonly string[]).includes(id)
}

function resolveEarringId(id: string): EarringMetaId | undefined {
  const canonical = resolveAccessoryId(id)
  return isEarringMetaId(canonical) ? canonical : undefined
}

const STONE_LABEL: Record<AppLocale, Record<StoneKey, string>> = {
  en: {
    malachite: 'Malachite',
    'orange-jade': 'Orange Jade',
    'rose-quartz': 'Rose Quartz',
    'lapis-lazuli': 'Lapis Lazuli',
  },
  ar: {
    malachite: 'ملاكيت',
    'orange-jade': 'يشم برتقالي',
    'rose-quartz': 'كوارتز وردي',
    'lapis-lazuli': 'لازورد',
  },
  fr: {
    malachite: 'Malachite',
    'orange-jade': 'Jade orange',
    'rose-quartz': 'Quartz rose',
    'lapis-lazuli': 'Lapis-lazuli',
  },
  it: {
    malachite: 'Malachite',
    'orange-jade': 'Giada arancio',
    'rose-quartz': 'Quarzo rosa',
    'lapis-lazuli': 'Lapislazzuli',
  },
  es: {
    malachite: 'Malaquita',
    'orange-jade': 'Jade naranja',
    'rose-quartz': 'Cuarzo rosa',
    'lapis-lazuli': 'Lapislázuli',
  },
  ru: {
    malachite: 'Малахит',
    'orange-jade': 'Оранжевый нефрит',
    'rose-quartz': 'Розовый кварц',
    'lapis-lazuli': 'Лазурит',
  },
  zh: {
    malachite: '孔雀石',
    'orange-jade': '橙玉',
    'rose-quartz': '粉晶',
    'lapis-lazuli': '青金石',
  },
  de: {
    malachite: 'Malachit',
    'orange-jade': 'Orange Jade',
    'rose-quartz': 'Rosenquarz',
    'lapis-lazuli': 'Lapislazuli',
  },
  nl: {
    malachite: 'Malachiet',
    'orange-jade': 'Oranje jade',
    'rose-quartz': 'Rozenkwarts',
    'lapis-lazuli': 'Lapis lazuli',
  },
  pt: {
    malachite: 'Malaquite',
    'orange-jade': 'Jade laranja',
    'rose-quartz': 'Quartzo rosa',
    'lapis-lazuli': 'Lápis-lazúli',
  },
  id: {
    malachite: 'Malakit',
    'orange-jade': 'Jade oranye',
    'rose-quartz': 'Kuarsa mawar',
    'lapis-lazuli': 'Lapis lazuli',
  },
  ms: {
    malachite: 'Malakit',
    'orange-jade': 'Jed oren',
    'rose-quartz': 'Kuarsa mawar',
    'lapis-lazuli': 'Lapis lazuli',
  },
}

const DISPLAY_NAME: Record<AppLocale, Record<EarringMetaId, string>> = {
  en: {
    'al-ain-oasis-earrings-malachite': 'Al Ain Oasis Earrings - Malachite',
    'al-ain-oasis-earrings-orange-jade': 'Al Ain Oasis Earrings - Orange Jade',
    'al-quaa-earrings-rose-quartz': 'Al Quaa Earrings - Rose Quartz',
    'al-quaa-earrings-lapis-lazuli': 'Al Quaa Earrings - Lapis Lazuli',
  },
  ar: {
    'al-ain-oasis-earrings-malachite': 'أقراط واحة العين — ملاكيت',
    'al-ain-oasis-earrings-orange-jade': 'أقراط واحة العين — يشم برتقالي',
    'al-quaa-earrings-rose-quartz': 'أقراط القوع — كوارتز وردي',
    'al-quaa-earrings-lapis-lazuli': 'أقراط القوع — لازورد',
  },
  fr: {
    'al-ain-oasis-earrings-malachite': 'Boucles d’oreilles Al Ain Oasis — Malachite',
    'al-ain-oasis-earrings-orange-jade': 'Boucles d’oreilles Al Ain Oasis — Jade orange',
    'al-quaa-earrings-rose-quartz': 'Boucles d’oreilles Al Quaa — Quartz rose',
    'al-quaa-earrings-lapis-lazuli': 'Boucles d’oreilles Al Quaa — Lapis-lazuli',
  },
  it: {
    'al-ain-oasis-earrings-malachite': 'Orecchini Al Ain Oasis — Malachite',
    'al-ain-oasis-earrings-orange-jade': 'Orecchini Al Ain Oasis — Giada arancio',
    'al-quaa-earrings-rose-quartz': 'Orecchini Al Quaa — Quarzo rosa',
    'al-quaa-earrings-lapis-lazuli': 'Orecchini Al Quaa — Lapislazzuli',
  },
  es: {
    'al-ain-oasis-earrings-malachite': 'Pendientes Al Ain Oasis — Malaquita',
    'al-ain-oasis-earrings-orange-jade': 'Pendientes Al Ain Oasis — Jade naranja',
    'al-quaa-earrings-rose-quartz': 'Pendientes Al Quaa — Cuarzo rosa',
    'al-quaa-earrings-lapis-lazuli': 'Pendientes Al Quaa — Lapislázuli',
  },
  ru: {
    'al-ain-oasis-earrings-malachite': 'Серьги Al Ain Oasis — Малахит',
    'al-ain-oasis-earrings-orange-jade': 'Серьги Al Ain Oasis — Оранжевый нефрит',
    'al-quaa-earrings-rose-quartz': 'Серьги Al Quaa — Розовый кварц',
    'al-quaa-earrings-lapis-lazuli': 'Серьги Al Quaa — Лазурит',
  },
  zh: {
    'al-ain-oasis-earrings-malachite': 'Al Ain Oasis 孔雀石耳环',
    'al-ain-oasis-earrings-orange-jade': 'Al Ain Oasis 橙玉耳环',
    'al-quaa-earrings-rose-quartz': 'Al Quaa 粉晶耳环',
    'al-quaa-earrings-lapis-lazuli': 'Al Quaa 青金石耳环',
  },
  de: {
    'al-ain-oasis-earrings-malachite': 'Al Ain Oasis Ohrringe — Malachit',
    'al-ain-oasis-earrings-orange-jade': 'Al Ain Oasis Ohrringe — Orange Jade',
    'al-quaa-earrings-rose-quartz': 'Al Quaa Ohrringe — Rosenquarz',
    'al-quaa-earrings-lapis-lazuli': 'Al Quaa Ohrringe — Lapislazuli',
  },
  nl: {
    'al-ain-oasis-earrings-malachite': 'Al Ain Oasis oorbellen — Malachiet',
    'al-ain-oasis-earrings-orange-jade': 'Al Ain Oasis oorbellen — Oranje jade',
    'al-quaa-earrings-rose-quartz': 'Al Quaa oorbellen — Rozenkwarts',
    'al-quaa-earrings-lapis-lazuli': 'Al Quaa oorbellen — Lapis lazuli',
  },
  pt: {
    'al-ain-oasis-earrings-malachite': 'Brincos Al Ain Oasis — Malaquite',
    'al-ain-oasis-earrings-orange-jade': 'Brincos Al Ain Oasis — Jade laranja',
    'al-quaa-earrings-rose-quartz': 'Brincos Al Quaa — Quartzo rosa',
    'al-quaa-earrings-lapis-lazuli': 'Brincos Al Quaa — Lápis-lazúli',
  },
  id: {
    'al-ain-oasis-earrings-malachite': 'Anting Al Ain Oasis — Malakit',
    'al-ain-oasis-earrings-orange-jade': 'Anting Al Ain Oasis — Jade oranye',
    'al-quaa-earrings-rose-quartz': 'Anting Al Quaa — Kuarsa mawar',
    'al-quaa-earrings-lapis-lazuli': 'Anting Al Quaa — Lapis lazuli',
  },
  ms: {
    'al-ain-oasis-earrings-malachite': 'Anting Al Ain Oasis — Malakit',
    'al-ain-oasis-earrings-orange-jade': 'Anting Al Ain Oasis — Jed oren',
    'al-quaa-earrings-rose-quartz': 'Anting Al Quaa — Kuarsa mawar',
    'al-quaa-earrings-lapis-lazuli': 'Anting Al Quaa — Lapis lazuli',
  },
}

const STONE_HOOK: Record<AppLocale, Record<StoneKey, string>> = {
  en: {
    malachite: 'the finishing touch in Malachite and Sunstone',
    'orange-jade': 'the finishing touch in Orange Coloured Jade and Sunstone',
    'rose-quartz': 'the finishing touch in soft Rose Quartz',
    'lapis-lazuli': 'the finishing touch in royal Lapis Lazuli',
  },
  ar: {
    malachite: 'اللمسة الأخيرة بالملاكيت وحجر الشمس',
    'orange-jade': 'اللمسة الأخيرة باليشم برتقالي اللون وحجر الشمس',
    'rose-quartz': 'اللمسة الأخيرة بالكوارتز الوردي الناعم',
    'lapis-lazuli': 'اللمسة الأخيرة باللازورد الملكي',
  },
  fr: {
    malachite: 'la touche finale en malachite et pierre de soleil',
    'orange-jade': 'la touche finale en jade orange et pierre de soleil',
    'rose-quartz': 'la touche finale en quartz rose délicat',
    'lapis-lazuli': 'la touche finale en lapis-lazuli royal',
  },
  it: {
    malachite: 'il tocco finale in malachite e pietra di sole',
    'orange-jade': 'il tocco finale in giada arancio e pietra di sole',
    'rose-quartz': 'il tocco finale in quarzo rosa soft',
    'lapis-lazuli': 'il tocco finale in lapislazzuli reale',
  },
  es: {
    malachite: 'el toque final en malaquita y piedra de sol',
    'orange-jade': 'el toque final en jade naranja y piedra de sol',
    'rose-quartz': 'el toque final en cuarzo rosa suave',
    'lapis-lazuli': 'el toque final en lapislázuli real',
  },
  ru: {
    malachite: 'завершающий штрих в малахите и солнечном камне',
    'orange-jade': 'завершающий штрих в оранжевом нефрите и солнечном камне',
    'rose-quartz': 'завершающий штрих в мягком розовом кварце',
    'lapis-lazuli': 'завершающий штрих в королевском лазурите',
  },
  zh: {
    malachite: '孔雀石与日光石的收束之笔',
    'orange-jade': '橙玉与日光石的收束之笔',
    'rose-quartz': '柔粉粉晶的收束之笔',
    'lapis-lazuli': '皇家青金石的收束之笔',
  },
  de: {
    malachite: 'der letzte Schliff in Malachit und Sonnenstein',
    'orange-jade': 'der letzte Schliff in orangefarbener Jade und Sonnenstein',
    'rose-quartz': 'der letzte Schliff in weichem Rosenquarz',
    'lapis-lazuli': 'der letzte Schliff in königlichem Lapislazuli',
  },
  nl: {
    malachite: 'de finishing touch in malachiet en zonsteen',
    'orange-jade': 'de finishing touch in oranje jade en zonsteen',
    'rose-quartz': 'de finishing touch in zachte rozenkwarts',
    'lapis-lazuli': 'de finishing touch in koninklijke lapis lazuli',
  },
  pt: {
    malachite: 'o toque final em malaquite e pedra do sol',
    'orange-jade': 'o toque final em jade laranja e pedra do sol',
    'rose-quartz': 'o toque final em quartzo rosa suave',
    'lapis-lazuli': 'o toque final em lápis-lazúli real',
  },
  id: {
    malachite: 'sentuhan akhir dalam malakit dan batu matahari',
    'orange-jade': 'sentuhan akhir dalam jade oranye dan batu matahari',
    'rose-quartz': 'sentuhan akhir dalam kuarsa mawar lembut',
    'lapis-lazuli': 'sentuhan akhir dalam lapis lazuli royal',
  },
  ms: {
    malachite: 'sentuhan akhir dalam malakit dan batu matahari',
    'orange-jade': 'sentuhan akhir dalam jed oren dan batu matahari',
    'rose-quartz': 'sentuhan akhir dalam kuarsa mawar lembut',
    'lapis-lazuli': 'sentuhan akhir dalam lapis lazuli diraja',
  },
}

const MATERIALS_LINE: Record<AppLocale, Record<EarringMetaId, string>> = {
  en: {
    'al-ain-oasis-earrings-malachite':
      'Malachite, Sunstone, Carnelian Al Ain Rosette, gold-plated Hematite, 14k gold-plated nickel-free copper, pavé zirconia leverback',
    'al-ain-oasis-earrings-orange-jade':
      'Orange Coloured Jade, Sunstone, Carnelian Al Ain Rosette, gold-plated Hematite, 14k gold-plated nickel-free copper, pavé zirconia leverback',
    'al-quaa-earrings-rose-quartz':
      'Rose Quartz, Carnelian Al Ain Rosette, gold-plated Hematite, 18k gold-plated brass, pear-cut pink zirconia stud',
    'al-quaa-earrings-lapis-lazuli':
      'Lapis Lazuli with pyrite inclusions, Carnelian Al Ain Rosette, gold-plated Hematite, 18k gold-plated brass, pear-cut clear zirconia stud',
  },
  ar: {
    'al-ain-oasis-earrings-malachite':
      'ملاكيت، حجر شمس، روزيت العين من العقيق، هيمايت مطلي بالذهب، نحاس خالٍ من النيكل مطلي ذهب 14 قيراط، إغلاق رافعة مرصّع بالزركونيا',
    'al-ain-oasis-earrings-orange-jade':
      'يشم برتقالي اللون، حجر شمس، روزيت العين من العقيق، هيمايت مطلي بالذهب، نحاس خالٍ من النيكل مطلي ذهب 14 قيراط، إغلاق رافعة مرصّع بالزركونيا',
    'al-quaa-earrings-rose-quartz':
      'كوارتز وردي، روزيت العين من العقيق، هيمايت مطلي بالذهب، نحاس مطلي ذهب 18 قيراط، مسمار زركونيا وردية بقطع كمّثري',
    'al-quaa-earrings-lapis-lazuli':
      'لازورد بتضمينات البيريت، روزيت العين من العقيق، هيمايت مطلي بالذهب، نحاس مطلي ذهب 18 قيراط، مسمار زركونيا شفافة بقطع كمّثري',
  },
  fr: {
    'al-ain-oasis-earrings-malachite':
      'Malachite, pierre de soleil, rosette d’Al Ain en cornaline, hématite plaquée or, cuivre sans nickel plaqué or 14 carats, fermoir leverback pavé de zirconia',
    'al-ain-oasis-earrings-orange-jade':
      'Jade orange, pierre de soleil, rosette d’Al Ain en cornaline, hématite plaquée or, cuivre sans nickel plaqué or 14 carats, fermoir leverback pavé de zirconia',
    'al-quaa-earrings-rose-quartz':
      'Quartz rose, rosette d’Al Ain en cornaline, hématite plaquée or, laiton plaqué or 18 carats, clou en zirconia rose taille poire',
    'al-quaa-earrings-lapis-lazuli':
      'Lapis-lazuli à inclusions de pyrite, rosette d’Al Ain en cornaline, hématite plaquée or, laiton plaqué or 18 carats, clou en zirconia transparente taille poire',
  },
  it: {
    'al-ain-oasis-earrings-malachite':
      'Malachite, pietra di sole, Rosetta di Al Ain in corniola, ematite placcata oro, rame nickel-free placcato oro 14k, chiusura leverback pavé di zirconia',
    'al-ain-oasis-earrings-orange-jade':
      'Giada arancio, pietra di sole, Rosetta di Al Ain in corniola, ematite placcata oro, rame nickel-free placcato oro 14k, chiusura leverback pavé di zirconia',
    'al-quaa-earrings-rose-quartz':
      'Quarzo rosa, Rosetta di Al Ain in corniola, ematite placcata oro, ottone placcato oro 18k, perno in zirconia rosa taglio a pera',
    'al-quaa-earrings-lapis-lazuli':
      'Lapislazzuli con inclusioni di pirite, Rosetta di Al Ain in corniola, ematite placcata oro, ottone placcato oro 18k, perno in zirconia trasparente taglio a pera',
  },
  es: {
    'al-ain-oasis-earrings-malachite':
      'Malaquita, piedra de sol, Roseta de Al Ain en cornalina, hematita baño de oro, cobre libre de níquel baño de oro 14k, cierre leverback pavé de zirconia',
    'al-ain-oasis-earrings-orange-jade':
      'Jade naranja, piedra de sol, Roseta de Al Ain en cornalina, hematita baño de oro, cobre libre de níquel baño de oro 14k, cierre leverback pavé de zirconia',
    'al-quaa-earrings-rose-quartz':
      'Cuarzo rosa, Roseta de Al Ain en cornalina, hematita baño de oro, latón baño de oro 18k, pendiente en zirconia rosa talla pera',
    'al-quaa-earrings-lapis-lazuli':
      'Lapislázuli con inclusiones de pirita, Roseta de Al Ain en cornalina, hematita baño de oro, latón baño de oro 18k, pendiente en zirconia transparente talla pera',
  },
  ru: {
    'al-ain-oasis-earrings-malachite':
      'Малахит, солнечный камень, розетка Al Ain из сердолика, позолоченный гематит, никель-фри медь с покрытием 14k, рычажный замок с паве из циркония',
    'al-ain-oasis-earrings-orange-jade':
      'Оранжевый нефрит, солнечный камень, розетка Al Ain из сердолика, позолоченный гематит, никель-фри медь с покрытием 14k, рычажный замок с паве из циркония',
    'al-quaa-earrings-rose-quartz':
      'Розовый кварц, розетка Al Ain из сердолика, позолоченный гематит, латунь с покрытием 18k, штифт из розового циркония грушевидной огранки',
    'al-quaa-earrings-lapis-lazuli':
      'Лазурит с вкраплениями пирита, розетка Al Ain из сердолика, позолоченный гематит, латунь с покрытием 18k, штифт из прозрачного циркония грушевидной огранки',
  },
  zh: {
    'al-ain-oasis-earrings-malachite':
      '孔雀石、日光石、红玉髓 Al Ain 玫瑰花饰、镀金赤铁矿、14k 镀金无镍铜、密镶锆石杠杆扣',
    'al-ain-oasis-earrings-orange-jade':
      '橙玉、日光石、红玉髓 Al Ain 玫瑰花饰、镀金赤铁矿、14k 镀金无镍铜、密镶锆石杠杆扣',
    'al-quaa-earrings-rose-quartz':
      '粉晶、红玉髓 Al Ain 玫瑰花饰、镀金赤铁矿、18k 镀金黄铜、梨形粉锆石耳钉',
    'al-quaa-earrings-lapis-lazuli':
      '含黄铁矿包裹体的青金石、红玉髓 Al Ain 玫瑰花饰、镀金赤铁矿、18k 镀金黄铜、梨形透明锆石耳钉',
  },
  de: {
    'al-ain-oasis-earrings-malachite':
      'Malachit, Sonnenstein, Karneol-Al-Ain-Rosette, vergoldetes Hämatit, 14k goldplattiertes nickelfreies Kupfer, Pavé-Zirkonia-Leverback',
    'al-ain-oasis-earrings-orange-jade':
      'Orange Jade, Sonnenstein, Karneol-Al-Ain-Rosette, vergoldetes Hämatit, 14k goldplattiertes nickelfreies Kupfer, Pavé-Zirkonia-Leverback',
    'al-quaa-earrings-rose-quartz':
      'Rosenquarz, Karneol-Al-Ain-Rosette, vergoldetes Hämatit, 18k goldplattiertes Messing, birnenförmiger rosa Zirkonia-Stecker',
    'al-quaa-earrings-lapis-lazuli':
      'Lapislazuli mit Pyriteinschlüssen, Karneol-Al-Ain-Rosette, vergoldetes Hämatit, 18k goldplattiertes Messing, birnenförmiger klarer Zirkonia-Stecker',
  },
  nl: {
    'al-ain-oasis-earrings-malachite':
      'Malachiet, zonsteen, carneool Al Ain Rosette, verguld hematiet, 14k verguld nikkelvrij koper, pavé-zirconia leverback',
    'al-ain-oasis-earrings-orange-jade':
      'Oranje jade, zonsteen, carneool Al Ain Rosette, verguld hematiet, 14k verguld nikkelvrij koper, pavé-zirconia leverback',
    'al-quaa-earrings-rose-quartz':
      'Rozenkwarts, carneool Al Ain Rosette, verguld hematiet, 18k verguld messing, peer-cut roze zirconia stud',
    'al-quaa-earrings-lapis-lazuli':
      'Lapis lazuli met pyrietinclusies, carneool Al Ain Rosette, verguld hematiet, 18k verguld messing, peer-cut heldere zirconia stud',
  },
  pt: {
    'al-ain-oasis-earrings-malachite':
      'Malaquite, pedra do sol, Roseta de Al Ain em cornalina, hematite banho de ouro, cobre sem níquel banho de ouro 14k, fecho leverback pavé de zirconia',
    'al-ain-oasis-earrings-orange-jade':
      'Jade laranja, pedra do sol, Roseta de Al Ain em cornalina, hematite banho de ouro, cobre sem níquel banho de ouro 14k, fecho leverback pavé de zirconia',
    'al-quaa-earrings-rose-quartz':
      'Quartzo rosa, Roseta de Al Ain em cornalina, hematite banho de ouro, latão banho de ouro 18k, pino em zirconia rosa corte pêra',
    'al-quaa-earrings-lapis-lazuli':
      'Lápis-lazúli com inclusões de pirite, Roseta de Al Ain em cornalina, hematite banho de ouro, latão banho de ouro 18k, pino em zirconia transparente corte pêra',
  },
  id: {
    'al-ain-oasis-earrings-malachite':
      'Malakit, batu matahari, Rosette Al Ain karnelian, hematit berlapis emas, tembaga bebas nikel berlapis emas 14k, tuas leverback pavé zirconia',
    'al-ain-oasis-earrings-orange-jade':
      'Jade oranye, batu matahari, Rosette Al Ain karnelian, hematit berlapis emas, tembaga bebas nikel berlapis emas 14k, tuas leverback pavé zirconia',
    'al-quaa-earrings-rose-quartz':
      'Kuarsa mawar, Rosette Al Ain karnelian, hematit berlapis emas, kuningan berlapis emas 18k, stud zirconia merah muda potongan pir',
    'al-quaa-earrings-lapis-lazuli':
      'Lapis lazuli dengan inklusi pirit, Rosette Al Ain karnelian, hematit berlapis emas, kuningan berlapis emas 18k, stud zirconia bening potongan pir',
  },
  ms: {
    'al-ain-oasis-earrings-malachite':
      'Malakit, batu matahari, Rosette Al Ain karnelian, hematit bersalut emas, tembaga bebas nikel bersalut emas 14k, tuas leverback pavé zirconia',
    'al-ain-oasis-earrings-orange-jade':
      'Jed oren, batu matahari, Rosette Al Ain karnelian, hematit bersalut emas, tembaga bebas nikel bersalut emas 14k, tuas leverback pavé zirconia',
    'al-quaa-earrings-rose-quartz':
      'Kuarsa mawar, Rosette Al Ain karnelian, hematit bersalut emas, loyang bersalut emas 18k, stud zirconia merah jambu potongan pir',
    'al-quaa-earrings-lapis-lazuli':
      'Lapis lazuli dengan inklusi pirit, Rosette Al Ain karnelian, hematit bersalut emas, loyang bersalut emas 18k, stud zirconia jernih potongan pir',
  },
}

const AUDIENCE: Record<AppLocale, string> = {
  en: 'Women who love natural stone earrings, coordinated jewellery sets and refined accessories; collectors of gemstone jewellery; women seeking hand-assembled Abu Dhabi luxury earrings with Al Ain Rosette motifs; gift shoppers for birthdays, Eid and anniversaries; contemporary women styling abayas and eveningwear with natural stone details; GCC and international clients who favour Emirati designer jewellery',
  ar: 'نساء يعشقن أقراط الأحجار الطبيعية ومجموعات المجوهرات المتناغمة والإكسسوارات الراقية؛ جامعات مجوهرات الأحجار الكريمة؛ نساء يبحثن عن أقراط فاخرة مُجمَّعة يدوياً في أبوظبي مع روزيت العين؛ مشترِيات هدايا لأعياد الميلاد والعيد والذكرى السنوية؛ نساء معاصرات يُزيّن العباءات وإطلالات المساء بتفاصيل أحجار طبيعية؛ عميلات الخليج والعالم اللواتي يفضّلن مجوهرات المصمّم الإماراتي',
  fr: 'Femmes qui aiment les boucles d’oreilles en pierres naturelles, les parures coordonnées et les accessoires raffinés ; collectionneuses de bijoux en gemmes ; femmes cherchant des boucles d’oreilles artisanales d’Abou Dabi avec motif Rosette d’Al Ain ; acheteuses de cadeaux pour anniversaires, Aïd et anniversaires de mariage ; femmes contemporaines habillant abayas et tenues du soir de détails pierres naturelles ; clientèle Golfe et internationale privilégiant la joaillerie designer émiratie',
  it: 'Donne che amano orecchini in pietra naturale, set di gioielli coordinati e accessori raffinati; collezioniste di gioielli in gemme; donne in cerca di orecchini artigianali di Abu Dhabi con Rosetta di Al Ain; acquirenti di regali per compleanni, Eid e anniversari; donne contemporanee che abbelliscono abaya e abiti da sera con dettagli in pietra naturale; clienti GCC e internazionali che prediligono gioielli designer emiratini',
  es: 'Mujeres que aman los pendientes de piedra natural, conjuntos de joyería coordinados y accesorios refinados; coleccionistas de joyería en gemas; mujeres que buscan pendientes artesanales de Abu Dabi con Roseta de Al Ain; compradoras de regalos para cumpleaños, Eid y aniversarios; mujeres contemporáneas que estilizan abayas y looks de noche con detalles de piedra natural; clientas del Golfo e internacionales que prefieren joyería diseñador emiratí',
  ru: 'Женщины, любящие серьги из натурального камня, согласованные ювелирные комплекты и изысканные аксессуары; коллекционерки украшений из самоцветов; женщины в поиске рукотворных люксовых серёг из Абу-Даби с розеткой Al Ain; покупательницы подарков на дни рождения, Ид и годовщины; современные женщины, украшающие абаи и вечерние образы деталями из натурального камня; клиентки GCC и мира, предпочитающие эмиратские дизайнерские украшения',
  zh: '热爱天然石耳环、协调首饰套组与精致配饰的女性；宝石首饰收藏者；寻觅阿布扎比手工奢华耳环与 Al Ain 玫瑰花饰的女性；为生日、开斋节与周年纪念选购礼物的买家；以天然石细节装点长袍与晚装的当代女性；偏爱阿联酋设计师珠宝的海湾与国际客户',
  de: 'Frauen, die Naturstein-Ohrringe, abgestimmte Schmucksets und raffinierte Accessoires lieben; Sammlerinnen von Edelsteinschmuck; Frauen auf der Suche nach handmontierten Luxus-Ohrringen aus Abu Dhabi mit Al-Ain-Rosette; Geschenkkäuferinnen für Geburtstage, Eid und Jahrestage; zeitgenössische Frauen, die Abayas und Abendlooks mit Natursteindetails stylen; GCC- und internationale Kundinnen, die emiratischen Designer-Schmuck bevorzugen',
  nl: 'Vrouwen die houden van natuursteen oorbellen, gecoördineerde sieradensets en verfijnde accessoires; verzamelaarsters van edelsteensieraden; vrouwen op zoek naar handgemonteerde luxe oorbellen uit Abu Dhabi met Al Ain Rosette; cadeaukopers voor verjaardagen, Eid en jubilea; hedendaagse vrouwen die abaya’s en avondlooks stylen met natuursteendetails; GCC- en internationale klanten die Emiratische designer sieraden prefereren',
  pt: 'Mulheres que amam brincos de pedra natural, conjuntos de joias coordenados e acessórios refinados; colecionadoras de joias em gemas; mulheres que procuram brincos artesanais de Abu Dhabi com Roseta de Al Ain; compradoras de presentes para aniversários, Eid e aniversários de casamento; mulheres contemporâneas que estilizam abayas e looks de noite com detalhes em pedra natural; clientes do Golfo e internacionais que preferem joalharia designer emirati',
  id: 'Wanita yang mencintai anting batu alam, set perhiasan terkoordinasi, dan aksesori halus; kolektor perhiasan batu permata; wanita mencari anting mewah dirakit tangan Abu Dhabi dengan Rosette Al Ain; pembeli hadiah untuk ulang tahun, Idul Fitri, dan hari jadi; wanita kontemporer yang menata abaya dan look malam dengan detail batu alam; klien GCC dan internasional yang menyukai perhiasan desainer Emirati',
  ms: 'Wanita yang mencintai anting batu semula jadi, set barang kemas terkoordinasi dan aksesori halus; pengumpul barang kemas batu permata; wanita mencari anting mewah dipasang tangan Abu Dhabi dengan Rosette Al Ain; pembeli hadiah untuk hari jadi, Aidilfitri dan ulang tahun; wanita kontemporari yang menggayakan abaya dan look malam dengan perincian batu semula jadi; pelanggan GCC dan antarabangsa yang mengutamakan barang kemas pereka Emirati',
}

const SHARED_DISCOVERY: Record<AppLocale, string[]> = {
  en: [
    'natural stone earrings',
    'luxury drop earrings',
    'gemstone earrings UAE',
    'hand-assembled earrings Abu Dhabi',
    'Al Ain Rosette earrings',
    'Bint Saeed earrings',
    'Emirati designer earrings',
    'Carnelian Al Ain Rosette',
    'gold-plated hematite earrings',
    'gift earrings UAE',
    'GCC luxury earrings',
    'worldwide shipping earrings',
  ],
  ar: [
    'أقراط أحجار طبيعية',
    'أقراط متدلية فاخرة',
    'أقراط أحجار كريمة الإمارات',
    'أقراط مُجمَّعة يدوياً أبوظبي',
    'أقراط روزيت العين',
    'أقراط Bint Saeed',
    'أقراط مصمّم إماراتي',
    'روزيت العين من العقيق',
    'أقراط هيمايت مطلي بالذهب',
    'هدية أقراط الإمارات',
    'أقراط فاخرة الخليج',
    'شحن عالمي أقراط',
  ],
  fr: [
    'boucles d’oreilles pierres naturelles',
    'boucles d’oreilles pendantes luxe',
    'boucles gemmes EAU',
    'boucles assemblées à la main Abou Dabi',
    'boucles Rosette d’Al Ain',
    'boucles Bint Saeed',
    'boucles designer émiraties',
    'Rosette d’Al Ain cornaline',
    'boucles hématite plaquée or',
    'cadeau boucles d’oreilles EAU',
    'boucles de luxe Golfe',
    'livraison mondiale boucles',
  ],
  it: [
    'orecchini pietre naturali',
    'orecchini pendenti di lusso',
    'orecchini gemme EAU',
    'orecchini assemblati a mano Abu Dhabi',
    'orecchini Rosetta di Al Ain',
    'orecchini Bint Saeed',
    'orecchini designer emiratini',
    'Rosetta di Al Ain corniola',
    'orecchini ematite placcata oro',
    'regalo orecchini EAU',
    'orecchini di lusso Golfo',
    'spedizione mondiale orecchini',
  ],
  es: [
    'pendientes piedra natural',
    'pendientes largos de lujo',
    'pendientes gemas EAU',
    'pendientes ensamblados a mano Abu Dabi',
    'pendientes Roseta de Al Ain',
    'pendientes Bint Saeed',
    'pendientes diseñador emiratíes',
    'Roseta de Al Ain cornalina',
    'pendientes hematita baño de oro',
    'regalo pendientes EAU',
    'pendientes de lujo Golfo',
    'envío mundial pendientes',
  ],
  ru: [
    'серьги из натурального камня',
    'роскошные серьги-капли',
    'серьги из самоцветов ОАЭ',
    'серьги ручной сборки Абу-Даби',
    'серьги розетка Al Ain',
    'серьги Bint Saeed',
    'эмиратские дизайнерские серьги',
    'розетка Al Ain сердолик',
    'серьги с позолоченным гематитом',
    'подарок серьги ОАЭ',
    'люксовые серьги Залива',
    'мировая доставка серёг',
  ],
  zh: [
    '天然石耳环',
    '奢华垂坠耳环',
    '阿联酋宝石耳环',
    '阿布扎比手工组装耳环',
    'Al Ain 玫瑰花饰耳环',
    'Bint Saeed 耳环',
    '阿联酋设计师耳环',
    '红玉髓 Al Ain 玫瑰花饰',
    '镀金赤铁矿耳环',
    '阿联酋耳环礼物',
    '海湾奢华耳环',
    '全球配送耳环',
  ],
  de: [
    'Naturstein-Ohrringe',
    'Luxus-Tropfenohrringe',
    'Edelstein-Ohrringe VAE',
    'handmontierte Ohrringe Abu Dhabi',
    'Al-Ain-Rosetten-Ohrringe',
    'Bint-Saeed-Ohrringe',
    'emiratische Designer-Ohrringe',
    'Karneol Al-Ain-Rosette',
    'vergoldete Hämatit-Ohrringe',
    'Geschenk Ohrringe VAE',
    'GCC Luxus-Ohrringe',
    'weltweiter Versand Ohrringe',
  ],
  nl: [
    'natuursteen oorbellen',
    'luxe druppeloorbellen',
    'edelsteen oorbellen VAE',
    'handgemonteerde oorbellen Abu Dhabi',
    'Al Ain Rosette oorbellen',
    'Bint Saeed oorbellen',
    'Emiratische designer oorbellen',
    'carneool Al Ain Rosette',
    'verguld hematiet oorbellen',
    'cadeau oorbellen VAE',
    'GCC luxe oorbellen',
    'wereldwijde verzending oorbellen',
  ],
  pt: [
    'brincos pedra natural',
    'brincos pendentes de luxo',
    'brincos gemas EAU',
    'brincos montados à mão Abu Dhabi',
    'brincos Roseta de Al Ain',
    'brincos Bint Saeed',
    'brincos designer emirati',
    'Roseta de Al Ain cornalina',
    'brincos hematite banho de ouro',
    'presente brincos EAU',
    'brincos de luxo Golfo',
    'envio mundial brincos',
  ],
  id: [
    'anting batu alam',
    'anting drop mewah',
    'anting batu permata UEA',
    'anting dirakit tangan Abu Dhabi',
    'anting Rosette Al Ain',
    'anting Bint Saeed',
    'anting desainer Emirati',
    'Rosette Al Ain karnelian',
    'anting hematit berlapis emas',
    'hadiah anting UEA',
    'anting mewah GCC',
    'pengiriman dunia anting',
  ],
  ms: [
    'anting batu semula jadi',
    'anting drop mewah',
    'anting batu permata UAE',
    'anting dipasang tangan Abu Dhabi',
    'anting Rosette Al Ain',
    'anting Bint Saeed',
    'anting pereka Emirati',
    'Rosette Al Ain karnelian',
    'anting hematit bersalut emas',
    'hadiah anting UAE',
    'anting mewah GCC',
    'penghantaran dunia anting',
  ],
}

const PRICE_CURRENCIES_FOR_META: SupportedCurrency[] = [
  'AED',
  'EUR',
  'USD',
  'GBP',
  'SAR',
  'QAR',
]

function formatPriceList(accessoryId: string): string {
  const parts: string[] = []
  for (const code of PRICE_CURRENCIES_FOR_META) {
    const amount = getListedPriceForAccessory(accessoryId, code)
    if (amount == null) continue
    parts.push(`${amount} ${code}`)
  }
  return parts.join(' · ')
}

export function buildEarringAllCurrencyPriceLine(accessoryId: string): string {
  const parts: string[] = []
  for (const code of SUPPORTED_CURRENCIES) {
    const amount = getListedPriceForAccessory(accessoryId, code)
    if (amount == null) continue
    parts.push(`${amount} ${code}`)
  }
  return parts.join(', ')
}

export function getEarringSchemaAudience(locale: AppLocale = 'en'): string {
  return AUDIENCE[locale] ?? AUDIENCE.en
}

export function getEarringLocalizedDisplayName(
  id: string,
  locale: AppLocale = 'en',
): string | undefined {
  const earringId = resolveEarringId(id)
  if (!earringId) return undefined
  return DISPLAY_NAME[locale][earringId] ?? DISPLAY_NAME.en[earringId]
}

export function getEarringMetaTitle(id: string, locale: AppLocale = 'en'): string | undefined {
  const name = getEarringLocalizedDisplayName(id, locale)
  if (!name) return undefined
  return `${name} | ${BRAND_NAME}`
}

export function getEarringMetaDescription(
  id: string,
  locale: AppLocale = 'en',
): string | undefined {
  const earringId = resolveEarringId(id)
  if (!earringId) return undefined
  const stone = ID_META[earringId].stone
  const hook = STONE_HOOK[locale][stone]
  const geo = LOCALE_GEO[locale].madeIn
  const priceLine = formatPriceList(earringId)
  const bodies: Record<AppLocale, string> = {
    en: `${BRAND_NAME} ${hook} — hand-assembled drop earrings in ${geo} with Carnelian Al Ain Rosette and gold-plated Hematite. From ${priceLine}. Worldwide shipping.`,
    ar: `${BRAND_NAME} ${hook} — أقراط متدلية مُجمَّعة يدوياً في ${geo} مع روزيت العين من العقيق وهيمايت مطلي بالذهب. من ${priceLine}. شحن عالمي.`,
    fr: `${BRAND_NAME} ${hook} — boucles d’oreilles pendantes assemblées à la main à ${geo}, avec rosette d’Al Ain en cornaline et hématite plaquée or. À partir de ${priceLine}. Livraison mondiale.`,
    it: `${BRAND_NAME} ${hook} — orecchini pendenti assemblati a mano a ${geo}, con Rosetta di Al Ain in corniola ed ematite placcata oro. Da ${priceLine}. Spedizione mondiale.`,
    es: `${BRAND_NAME} ${hook} — pendientes largos ensamblados a mano en ${geo}, con Roseta de Al Ain en cornalina y hematita baño de oro. Desde ${priceLine}. Envío mundial.`,
    ru: `${BRAND_NAME} ${hook} — серьги-капли ручной сборки в ${geo}, с розеткой Al Ain из сердолика и позолоченным гематитом. От ${priceLine}. Доставка по всему миру.`,
    zh: `${BRAND_NAME}${hook}——于${geo}手工组装的垂坠耳环，配红玉髓 Al Ain 玫瑰花饰与镀金赤铁矿。价格 ${priceLine}。全球配送。`,
    de: `${BRAND_NAME} ${hook} — handmontierte Tropfenohrringe in ${geo} mit Karneol-Al-Ain-Rosette und vergoldetem Hämatit. Ab ${priceLine}. Weltweiter Versand.`,
    nl: `${BRAND_NAME} ${hook} — handgemonteerde druppeloorbellen in ${geo} met carneool Al Ain Rosette en verguld hematiet. Vanaf ${priceLine}. Wereldwijde verzending.`,
    pt: `${BRAND_NAME} ${hook} — brincos pendentes montados à mão em ${geo}, com Roseta de Al Ain em cornalina e hematite banho de ouro. A partir de ${priceLine}. Envio mundial.`,
    id: `${BRAND_NAME} ${hook} — anting drop dirakit tangan di ${geo}, dengan Rosette Al Ain karnelian dan hematit berlapis emas. Dari ${priceLine}. Pengiriman dunia.`,
    ms: `${BRAND_NAME} ${hook} — anting drop dipasang tangan di ${geo}, dengan Rosette Al Ain karnelian dan hematit bersalut emas. Dari ${priceLine}. Penghantaran dunia.`,
  }
  return clipMetaDescription((bodies[locale] ?? bodies.en).replace(/\s+/g, ' ').trim(), 200)
}

export function getEarringMetaKeywords(
  id: string,
  locale: AppLocale = 'en',
): string[] | undefined {
  const earringId = resolveEarringId(id)
  if (!earringId) return undefined
  const stone = ID_META[earringId].stone
  const label = STONE_LABEL[locale][stone]
  const shared = SHARED_DISCOVERY[locale] ?? SHARED_DISCOVERY.en
  const expanded = getNaturalStoneProductDiscoveryKeywords('earrings', locale)
  const collection = ID_META[earringId].collection
  const collectionKw =
    collection === 'oasis'
      ? locale === 'ar'
        ? 'أقراط واحة العين'
        : 'Al Ain Oasis earrings'
      : locale === 'ar'
        ? 'أقراط القوع'
        : 'Al Quaa earrings'
  if (locale === 'ar') {
    return [...shared, ...expanded, `أقراط ${label}`, `${label} حجر طبيعي`, collectionKw]
  }
  return [
    ...shared,
    ...expanded,
    `${label} earrings`,
    `${label} natural stone`,
    collectionKw,
    `buy ${label} earrings`,
  ]
}

export function getEarringAiOther(
  id: string,
  locale: AppLocale = 'en',
): Record<string, string> | undefined {
  const earringId = resolveEarringId(id)
  if (!earringId) return undefined
  const name = DISPLAY_NAME[locale][earringId] ?? DISPLAY_NAME.en[earringId]
  const materials = MATERIALS_LINE[locale][earringId] ?? MATERIALS_LINE.en[earringId]
  return {
    'ai:brand': BRAND_NAME,
    'ai:category': 'Luxury natural stone earrings; Emirati designer jewellery',
    'ai:product': name,
    'ai:materials': materials,
    'ai:location': LOCALE_GEO[locale].madeIn,
    'ai:offering': 'Hand-assembled natural stone drop earrings and luxury jewellery',
    'ai:audience': getEarringSchemaAudience(locale),
    'ai:geo':
      'UAE, GCC, Abu Dhabi, Dubai, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, United Kingdom, Europe, United States, worldwide',
    'ai:intent':
      'Organic discovery for natural stone lovers, luxury earring shoppers, gemstone jewellery collectors, gift buyers',
    'ai:prices': buildEarringAllCurrencyPriceLine(earringId),
  }
}
