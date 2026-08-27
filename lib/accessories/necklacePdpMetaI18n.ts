import type { AppLocale } from '@/lib/i18n/routing'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import { getNaturalStoneProductDiscoveryKeywords } from '@/lib/accessories/naturalStoneProductDiscoveryI18n'
import { getListedPriceForAccessory } from '@/lib/pricing/accessoryCatalogPrices'
import { SUPPORTED_CURRENCIES, type SupportedCurrency } from '@/lib/pricing/types'
import { BRAND_NAME, LOCALE_GEO } from '@/lib/i18n/brandProperNouns'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'

export const NECKLACE_META_IDS = [
  'al-ain-oasis-necklace-malachite',
  'al-ain-oasis-necklace-tiger-eye',
  'al-ain-oasis-necklace-onyx',
  'al-ain-oasis-necklace-rose-quartz',
  'al-ain-oasis-necklace-sunstone',
  'al-ain-oasis-necklace-lapis-lazuli',
] as const

export type NecklaceMetaId = (typeof NECKLACE_META_IDS)[number]

type StoneKey =
  | 'malachite'
  | 'tiger-eye'
  | 'onyx'
  | 'rose-quartz'
  | 'sunstone'
  | 'lapis-lazuli'

const ID_META: Record<NecklaceMetaId, { stone: StoneKey }> = {
  'al-ain-oasis-necklace-malachite': { stone: 'malachite' },
  'al-ain-oasis-necklace-tiger-eye': { stone: 'tiger-eye' },
  'al-ain-oasis-necklace-onyx': { stone: 'onyx' },
  'al-ain-oasis-necklace-rose-quartz': { stone: 'rose-quartz' },
  'al-ain-oasis-necklace-sunstone': { stone: 'sunstone' },
  'al-ain-oasis-necklace-lapis-lazuli': { stone: 'lapis-lazuli' },
}

export function isNecklacePdpId(id: string): id is NecklaceMetaId {
  return (NECKLACE_META_IDS as readonly string[]).includes(id)
}

function resolveNecklaceId(id: string): NecklaceMetaId | undefined {
  const canonical = resolveAccessoryId(id)
  return isNecklacePdpId(canonical) ? canonical : undefined
}

const STONE_LABEL: Record<AppLocale, Record<StoneKey, string>> = {
  en: {
    malachite: 'Malachite',
    'tiger-eye': 'Tiger Eye',
    onyx: 'Onyx',
    'rose-quartz': 'Rose Quartz',
    sunstone: 'Sunstone',
    'lapis-lazuli': 'Lapis Lazuli',
  },
  ar: {
    malachite: 'ملاكيت',
    'tiger-eye': 'عين النمر',
    onyx: 'أونكس',
    'rose-quartz': 'كوارتز وردي',
    sunstone: 'حجر الشمس',
    'lapis-lazuli': 'لازورد',
  },
  fr: {
    malachite: 'Malachite',
    'tiger-eye': 'Œil de tigre',
    onyx: 'Onyx',
    'rose-quartz': 'Quartz rose',
    sunstone: 'Pierre de soleil',
    'lapis-lazuli': 'Lapis-lazuli',
  },
  it: {
    malachite: 'Malachite',
    'tiger-eye': 'Occhio di tigre',
    onyx: 'Onice',
    'rose-quartz': 'Quarzo rosa',
    sunstone: 'Pietra di sole',
    'lapis-lazuli': 'Lapislazzuli',
  },
  es: {
    malachite: 'Malaquita',
    'tiger-eye': 'Ojo de tigre',
    onyx: 'Ónice',
    'rose-quartz': 'Cuarzo rosa',
    sunstone: 'Piedra de sol',
    'lapis-lazuli': 'Lapislázuli',
  },
  ru: {
    malachite: 'Малахит',
    'tiger-eye': 'Тигровый глаз',
    onyx: 'Оникс',
    'rose-quartz': 'Розовый кварц',
    sunstone: 'Солнечный камень',
    'lapis-lazuli': 'Лазурит',
  },
  zh: {
    malachite: '孔雀石',
    'tiger-eye': '虎眼石',
    onyx: '玛瑙',
    'rose-quartz': '粉晶',
    sunstone: '日光石',
    'lapis-lazuli': '青金石',
  },
  de: {
    malachite: 'Malachit',
    'tiger-eye': 'Tigerauge',
    onyx: 'Onyx',
    'rose-quartz': 'Rosenquarz',
    sunstone: 'Sonnenstein',
    'lapis-lazuli': 'Lapislazuli',
  },
  nl: {
    malachite: 'Malachiet',
    'tiger-eye': 'Tijgeroog',
    onyx: 'Onyx',
    'rose-quartz': 'Rozenkwarts',
    sunstone: 'Zonsteen',
    'lapis-lazuli': 'Lapis lazuli',
  },
  pt: {
    malachite: 'Malaquite',
    'tiger-eye': 'Olho de tigre',
    onyx: 'Ónix',
    'rose-quartz': 'Quartzo rosa',
    sunstone: 'Pedra do sol',
    'lapis-lazuli': 'Lápis-lazúli',
  },
  id: {
    malachite: 'Malakit',
    'tiger-eye': 'Mata harimau',
    onyx: 'Oniks',
    'rose-quartz': 'Kuarsa mawar',
    sunstone: 'Batu matahari',
    'lapis-lazuli': 'Lapis lazuli',
  },
  ms: {
    malachite: 'Malakit',
    'tiger-eye': 'Mata harimau',
    onyx: 'Oniks',
    'rose-quartz': 'Kuarsa mawar',
    sunstone: 'Batu matahari',
    'lapis-lazuli': 'Lapis lazuli',
  },
}

const DISPLAY_NAME: Record<AppLocale, Record<NecklaceMetaId, string>> = {
  en: {
    'al-ain-oasis-necklace-malachite': 'Al Ain Oasis Necklace - Malachite',
    'al-ain-oasis-necklace-tiger-eye': 'Al Ain Oasis Necklace - Tiger Eye',
    'al-ain-oasis-necklace-onyx': 'Al Ain Oasis Necklace - Onyx',
    'al-ain-oasis-necklace-rose-quartz': 'Al Ain Oasis Necklace - Rose Quartz',
    'al-ain-oasis-necklace-sunstone': 'Al Ain Oasis Necklace - Sunstone',
    'al-ain-oasis-necklace-lapis-lazuli': 'Al Ain Oasis Necklace - Lapis Lazuli',
  },
  ar: {
    'al-ain-oasis-necklace-malachite': 'قلادة واحة العين — ملاكيت',
    'al-ain-oasis-necklace-tiger-eye': 'قلادة واحة العين — عين النمر',
    'al-ain-oasis-necklace-onyx': 'قلادة واحة العين — أونكس',
    'al-ain-oasis-necklace-rose-quartz': 'قلادة واحة العين — كوارتز وردي',
    'al-ain-oasis-necklace-sunstone': 'قلادة واحة العين — حجر الشمس',
    'al-ain-oasis-necklace-lapis-lazuli': 'قلادة واحة العين — لازورد',
  },
  fr: {
    'al-ain-oasis-necklace-malachite': 'Collier Al Ain Oasis — Malachite',
    'al-ain-oasis-necklace-tiger-eye': 'Collier Al Ain Oasis — Œil de tigre',
    'al-ain-oasis-necklace-onyx': 'Collier Al Ain Oasis — Onyx',
    'al-ain-oasis-necklace-rose-quartz': 'Collier Al Ain Oasis — Quartz rose',
    'al-ain-oasis-necklace-sunstone': 'Collier Al Ain Oasis — Pierre de soleil',
    'al-ain-oasis-necklace-lapis-lazuli': 'Collier Al Ain Oasis — Lapis-lazuli',
  },
  it: {
    'al-ain-oasis-necklace-malachite': 'Collana Al Ain Oasis — Malachite',
    'al-ain-oasis-necklace-tiger-eye': 'Collana Al Ain Oasis — Occhio di tigre',
    'al-ain-oasis-necklace-onyx': 'Collana Al Ain Oasis — Onice',
    'al-ain-oasis-necklace-rose-quartz': 'Collana Al Ain Oasis — Quarzo rosa',
    'al-ain-oasis-necklace-sunstone': 'Collana Al Ain Oasis — Pietra di sole',
    'al-ain-oasis-necklace-lapis-lazuli': 'Collana Al Ain Oasis — Lapislazzuli',
  },
  es: {
    'al-ain-oasis-necklace-malachite': 'Collar Al Ain Oasis — Malaquita',
    'al-ain-oasis-necklace-tiger-eye': 'Collar Al Ain Oasis — Ojo de tigre',
    'al-ain-oasis-necklace-onyx': 'Collar Al Ain Oasis — Ónice',
    'al-ain-oasis-necklace-rose-quartz': 'Collar Al Ain Oasis — Cuarzo rosa',
    'al-ain-oasis-necklace-sunstone': 'Collar Al Ain Oasis — Piedra de sol',
    'al-ain-oasis-necklace-lapis-lazuli': 'Collar Al Ain Oasis — Lapislázuli',
  },
  ru: {
    'al-ain-oasis-necklace-malachite': 'Ожерелье Al Ain Oasis — Малахит',
    'al-ain-oasis-necklace-tiger-eye': 'Ожерелье Al Ain Oasis — Тигровый глаз',
    'al-ain-oasis-necklace-onyx': 'Ожерелье Al Ain Oasis — Оникс',
    'al-ain-oasis-necklace-rose-quartz': 'Ожерелье Al Ain Oasis — Розовый кварц',
    'al-ain-oasis-necklace-sunstone': 'Ожерелье Al Ain Oasis — Солнечный камень',
    'al-ain-oasis-necklace-lapis-lazuli': 'Ожерелье Al Ain Oasis — Лазурит',
  },
  zh: {
    'al-ain-oasis-necklace-malachite': 'Al Ain Oasis 孔雀石项链',
    'al-ain-oasis-necklace-tiger-eye': 'Al Ain Oasis 虎眼石项链',
    'al-ain-oasis-necklace-onyx': 'Al Ain Oasis 玛瑙项链',
    'al-ain-oasis-necklace-rose-quartz': 'Al Ain Oasis 粉晶项链',
    'al-ain-oasis-necklace-sunstone': 'Al Ain Oasis 日光石项链',
    'al-ain-oasis-necklace-lapis-lazuli': 'Al Ain Oasis 青金石项链',
  },
  de: {
    'al-ain-oasis-necklace-malachite': 'Al Ain Oasis Halskette — Malachit',
    'al-ain-oasis-necklace-tiger-eye': 'Al Ain Oasis Halskette — Tigerauge',
    'al-ain-oasis-necklace-onyx': 'Al Ain Oasis Halskette — Onyx',
    'al-ain-oasis-necklace-rose-quartz': 'Al Ain Oasis Halskette — Rosenquarz',
    'al-ain-oasis-necklace-sunstone': 'Al Ain Oasis Halskette — Sonnenstein',
    'al-ain-oasis-necklace-lapis-lazuli': 'Al Ain Oasis Halskette — Lapislazuli',
  },
  nl: {
    'al-ain-oasis-necklace-malachite': 'Al Ain Oasis ketting — Malachiet',
    'al-ain-oasis-necklace-tiger-eye': 'Al Ain Oasis ketting — Tijgeroog',
    'al-ain-oasis-necklace-onyx': 'Al Ain Oasis ketting — Onyx',
    'al-ain-oasis-necklace-rose-quartz': 'Al Ain Oasis ketting — Rozenkwarts',
    'al-ain-oasis-necklace-sunstone': 'Al Ain Oasis ketting — Zonsteen',
    'al-ain-oasis-necklace-lapis-lazuli': 'Al Ain Oasis ketting — Lapis lazuli',
  },
  pt: {
    'al-ain-oasis-necklace-malachite': 'Colar Al Ain Oasis — Malaquite',
    'al-ain-oasis-necklace-tiger-eye': 'Colar Al Ain Oasis — Olho de tigre',
    'al-ain-oasis-necklace-onyx': 'Colar Al Ain Oasis — Ónix',
    'al-ain-oasis-necklace-rose-quartz': 'Colar Al Ain Oasis — Quartzo rosa',
    'al-ain-oasis-necklace-sunstone': 'Colar Al Ain Oasis — Pedra do sol',
    'al-ain-oasis-necklace-lapis-lazuli': 'Colar Al Ain Oasis — Lápis-lazúli',
  },
  id: {
    'al-ain-oasis-necklace-malachite': 'Kalung Al Ain Oasis — Malakit',
    'al-ain-oasis-necklace-tiger-eye': 'Kalung Al Ain Oasis — Mata harimau',
    'al-ain-oasis-necklace-onyx': 'Kalung Al Ain Oasis — Oniks',
    'al-ain-oasis-necklace-rose-quartz': 'Kalung Al Ain Oasis — Kuarsa mawar',
    'al-ain-oasis-necklace-sunstone': 'Kalung Al Ain Oasis — Batu matahari',
    'al-ain-oasis-necklace-lapis-lazuli': 'Kalung Al Ain Oasis — Lapis lazuli',
  },
  ms: {
    'al-ain-oasis-necklace-malachite': 'Rantai leher Al Ain Oasis — Malakit',
    'al-ain-oasis-necklace-tiger-eye': 'Rantai leher Al Ain Oasis — Mata harimau',
    'al-ain-oasis-necklace-onyx': 'Rantai leher Al Ain Oasis — Oniks',
    'al-ain-oasis-necklace-rose-quartz': 'Rantai leher Al Ain Oasis — Kuarsa mawar',
    'al-ain-oasis-necklace-sunstone': 'Rantai leher Al Ain Oasis — Batu matahari',
    'al-ain-oasis-necklace-lapis-lazuli': 'Rantai leher Al Ain Oasis — Lapis lazuli',
  },
}

const STONE_HOOK: Record<AppLocale, Record<StoneKey, string>> = {
  en: {
    malachite: 'the finishing touch in Malachite',
    'tiger-eye': 'the finishing touch in Tiger Eye',
    onyx: 'the finishing touch in polished black Onyx',
    'rose-quartz': 'the finishing touch in soft Rose Quartz',
    sunstone: 'the finishing touch in luminous Sunstone',
    'lapis-lazuli': 'the finishing touch in royal Lapis Lazuli',
  },
  ar: {
    malachite: 'اللمسة الأخيرة بالملاكيت',
    'tiger-eye': 'اللمسة الأخيرة بعين النمر',
    onyx: 'اللمسة الأخيرة بالأونكس الأسود المصقول',
    'rose-quartz': 'اللمسة الأخيرة بالكوارتز الوردي الناعم',
    sunstone: 'اللمسة الأخيرة بحجر الشمس المضيء',
    'lapis-lazuli': 'اللمسة الأخيرة باللازورد الملكي',
  },
  fr: {
    malachite: 'la touche finale en malachite',
    'tiger-eye': 'la touche finale en œil de tigre',
    onyx: 'la touche finale en onyx noir poli',
    'rose-quartz': 'la touche finale en quartz rose délicat',
    sunstone: 'la touche finale en pierre de soleil lumineuse',
    'lapis-lazuli': 'la touche finale en lapis-lazuli royal',
  },
  it: {
    malachite: 'il tocco finale in malachite',
    'tiger-eye': 'il tocco finale in occhio di tigre',
    onyx: 'il tocco finale in onice nero lucidato',
    'rose-quartz': 'il tocco finale in quarzo rosa soft',
    sunstone: 'il tocco finale in pietra di sole luminosa',
    'lapis-lazuli': 'il tocco finale in lapislazzuli reale',
  },
  es: {
    malachite: 'el toque final en malaquita',
    'tiger-eye': 'el toque final en ojo de tigre',
    onyx: 'el toque final en ónice negro pulido',
    'rose-quartz': 'el toque final en cuarzo rosa suave',
    sunstone: 'el toque final en piedra de sol luminosa',
    'lapis-lazuli': 'el toque final en lapislázuli real',
  },
  ru: {
    malachite: 'завершающий штрих в малахите',
    'tiger-eye': 'завершающий штрих в тигровом глазе',
    onyx: 'завершающий штрих в полированном чёрном ониксе',
    'rose-quartz': 'завершающий штрих в мягком розовом кварце',
    sunstone: 'завершающий штрих в светящемся солнечном камне',
    'lapis-lazuli': 'завершающий штрих в королевском лазурите',
  },
  zh: {
    malachite: '孔雀石的收束之笔',
    'tiger-eye': '虎眼石的收束之笔',
    onyx: '抛光黑玛瑙的收束之笔',
    'rose-quartz': '柔粉粉晶的收束之笔',
    sunstone: '明亮日光石的收束之笔',
    'lapis-lazuli': '皇家青金石的收束之笔',
  },
  de: {
    malachite: 'der letzte Schliff in Malachit',
    'tiger-eye': 'der letzte Schliff in Tigerauge',
    onyx: 'der letzte Schliff in poliertem schwarzem Onyx',
    'rose-quartz': 'der letzte Schliff in weichem Rosenquarz',
    sunstone: 'der letzte Schliff in leuchtendem Sonnenstein',
    'lapis-lazuli': 'der letzte Schliff in königlichem Lapislazuli',
  },
  nl: {
    malachite: 'de finishing touch in malachiet',
    'tiger-eye': 'de finishing touch in tijgeroog',
    onyx: 'de finishing touch in gepolijste zwarte onyx',
    'rose-quartz': 'de finishing touch in zachte rozenkwarts',
    sunstone: 'de finishing touch in lichtende zonsteen',
    'lapis-lazuli': 'de finishing touch in koninklijke lapis lazuli',
  },
  pt: {
    malachite: 'o toque final em malaquite',
    'tiger-eye': 'o toque final em olho de tigre',
    onyx: 'o toque final em ónix negro polido',
    'rose-quartz': 'o toque final em quartzo rosa suave',
    sunstone: 'o toque final em pedra do sol luminosa',
    'lapis-lazuli': 'o toque final em lápis-lazúli real',
  },
  id: {
    malachite: 'sentuhan akhir dalam malakit',
    'tiger-eye': 'sentuhan akhir dalam mata harimau',
    onyx: 'sentuhan akhir dalam oniks hitam dipoles',
    'rose-quartz': 'sentuhan akhir dalam kuarsa mawar lembut',
    sunstone: 'sentuhan akhir dalam batu matahari bercahaya',
    'lapis-lazuli': 'sentuhan akhir dalam lapis lazuli royal',
  },
  ms: {
    malachite: 'sentuhan akhir dalam malakit',
    'tiger-eye': 'sentuhan akhir dalam mata harimau',
    onyx: 'sentuhan akhir dalam oniks hitam digilap',
    'rose-quartz': 'sentuhan akhir dalam kuarsa mawar lembut',
    sunstone: 'sentuhan akhir dalam batu matahari bercahaya',
    'lapis-lazuli': 'sentuhan akhir dalam lapis lazuli diraja',
  },
}

const MATERIALS_LINE: Record<AppLocale, Record<NecklaceMetaId, string>> = {
  en: {
    'al-ain-oasis-necklace-malachite':
      'Natural Malachite beads, Carnelian Al Ain Rosette, gold-plated Hematite, 18K gold-plated clasp',
    'al-ain-oasis-necklace-tiger-eye':
      'Natural Tiger Eye beads, Carnelian Al Ain Rosette, gold-plated Hematite, 18K gold-plated clasp',
    'al-ain-oasis-necklace-onyx':
      'Natural black Onyx beads, Carnelian Al Ain Rosette, gold-plated Hematite, 18K gold-plated clasp',
    'al-ain-oasis-necklace-rose-quartz':
      'Natural Rose Quartz beads, Carnelian Al Ain Rosette, gold-plated Hematite, 18K gold-plated clasp',
    'al-ain-oasis-necklace-sunstone':
      'Natural Sunstone beads, Carnelian Al Ain Rosette, gold-plated Hematite, 18K gold-plated clasp',
    'al-ain-oasis-necklace-lapis-lazuli':
      'Natural Lapis Lazuli beads, Carnelian Al Ain Rosette, gold-plated Hematite, 18K gold-plated clasp',
  },
  ar: {
    'al-ain-oasis-necklace-malachite':
      'خرز ملاكيت طبيعي، روزيت العين من العقيق، هيمايت مطلي بالذهب، إغلاق مطلي ذهب 18 قيراط',
    'al-ain-oasis-necklace-tiger-eye':
      'خرز عين النمر طبيعي، روزيت العين من العقيق، هيمايت مطلي بالذهب، إغلاق مطلي ذهب 18 قيراط',
    'al-ain-oasis-necklace-onyx':
      'خرز أونكس أسود طبيعي، روزيت العين من العقيق، هيمايت مطلي بالذهب، إغلاق مطلي ذهب 18 قيراط',
    'al-ain-oasis-necklace-rose-quartz':
      'خرز كوارتز وردي طبيعي، روزيت العين من العقيق، هيمايت مطلي بالذهب، إغلاق مطلي ذهب 18 قيراط',
    'al-ain-oasis-necklace-sunstone':
      'خرز حجر شمس طبيعي، روزيت العين من العقيق، هيمايت مطلي بالذهب، إغلاق مطلي ذهب 18 قيراط',
    'al-ain-oasis-necklace-lapis-lazuli':
      'خرز لازورد طبيعي، روزيت العين من العقيق، هيمايت مطلي بالذهب، إغلاق مطلي ذهب 18 قيراط',
  },
  fr: {
    'al-ain-oasis-necklace-malachite':
      'Perles de malachite naturelles, rosette d’Al Ain en cornaline, hématite plaquée or, fermoir plaqué or 18 carats',
    'al-ain-oasis-necklace-tiger-eye':
      'Perles d’œil de tigre naturelles, rosette d’Al Ain en cornaline, hématite plaquée or, fermoir plaqué or 18 carats',
    'al-ain-oasis-necklace-onyx':
      'Perles d’onyx noir naturelles, rosette d’Al Ain en cornaline, hématite plaquée or, fermoir plaqué or 18 carats',
    'al-ain-oasis-necklace-rose-quartz':
      'Perles de quartz rose naturelles, rosette d’Al Ain en cornaline, hématite plaquée or, fermoir plaqué or 18 carats',
    'al-ain-oasis-necklace-sunstone':
      'Perles de pierre de soleil naturelles, rosette d’Al Ain en cornaline, hématite plaquée or, fermoir plaqué or 18 carats',
    'al-ain-oasis-necklace-lapis-lazuli':
      'Perles de lapis-lazuli naturelles, rosette d’Al Ain en cornaline, hématite plaquée or, fermoir plaqué or 18 carats',
  },
  it: {
    'al-ain-oasis-necklace-malachite':
      'Perle di malachite naturali, Rosetta di Al Ain in corniola, ematite placcata oro, chiusura placcata oro 18k',
    'al-ain-oasis-necklace-tiger-eye':
      'Perle di occhio di tigre naturali, Rosetta di Al Ain in corniola, ematite placcata oro, chiusura placcata oro 18k',
    'al-ain-oasis-necklace-onyx':
      'Perle di onice nero naturali, Rosetta di Al Ain in corniola, ematite placcata oro, chiusura placcata oro 18k',
    'al-ain-oasis-necklace-rose-quartz':
      'Perle di quarzo rosa naturali, Rosetta di Al Ain in corniola, ematite placcata oro, chiusura placcata oro 18k',
    'al-ain-oasis-necklace-sunstone':
      'Perle di pietra di sole naturali, Rosetta di Al Ain in corniola, ematite placcata oro, chiusura placcata oro 18k',
    'al-ain-oasis-necklace-lapis-lazuli':
      'Perle di lapislazzuli naturali, Rosetta di Al Ain in corniola, ematite placcata oro, chiusura placcata oro 18k',
  },
  es: {
    'al-ain-oasis-necklace-malachite':
      'Cuentas de malaquita natural, Roseta de Al Ain en cornalina, hematita baño de oro, cierre baño de oro 18k',
    'al-ain-oasis-necklace-tiger-eye':
      'Cuentas de ojo de tigre natural, Roseta de Al Ain en cornalina, hematita baño de oro, cierre baño de oro 18k',
    'al-ain-oasis-necklace-onyx':
      'Cuentas de ónice negro natural, Roseta de Al Ain en cornalina, hematita baño de oro, cierre baño de oro 18k',
    'al-ain-oasis-necklace-rose-quartz':
      'Cuentas de cuarzo rosa natural, Roseta de Al Ain en cornalina, hematita baño de oro, cierre baño de oro 18k',
    'al-ain-oasis-necklace-sunstone':
      'Cuentas de piedra de sol natural, Roseta de Al Ain en cornalina, hematita baño de oro, cierre baño de oro 18k',
    'al-ain-oasis-necklace-lapis-lazuli':
      'Cuentas de lapislázuli natural, Roseta de Al Ain en cornalina, hematita baño de oro, cierre baño de oro 18k',
  },
  ru: {
    'al-ain-oasis-necklace-malachite':
      'Натуральные бусины малахита, розетка Al Ain из сердолика, позолоченный гематит, замок с покрытием 18k',
    'al-ain-oasis-necklace-tiger-eye':
      'Натуральные бусины тигрового глаза, розетка Al Ain из сердолика, позолоченный гематит, замок с покрытием 18k',
    'al-ain-oasis-necklace-onyx':
      'Натуральные бусины чёрного оникса, розетка Al Ain из сердолика, позолоченный гематит, замок с покрытием 18k',
    'al-ain-oasis-necklace-rose-quartz':
      'Натуральные бусины розового кварца, розетка Al Ain из сердолика, позолоченный гематит, замок с покрытием 18k',
    'al-ain-oasis-necklace-sunstone':
      'Натуральные бусины солнечного камня, розетка Al Ain из сердолика, позолоченный гематит, замок с покрытием 18k',
    'al-ain-oasis-necklace-lapis-lazuli':
      'Натуральные бусины лазурита, розетка Al Ain из сердолика, позолоченный гематит, замок с покрытием 18k',
  },
  zh: {
    'al-ain-oasis-necklace-malachite':
      '天然孔雀石珠、红玉髓 Al Ain 玫瑰花饰、镀金赤铁矿、18K 镀金扣环',
    'al-ain-oasis-necklace-tiger-eye':
      '天然虎眼石珠、红玉髓 Al Ain 玫瑰花饰、镀金赤铁矿、18K 镀金扣环',
    'al-ain-oasis-necklace-onyx':
      '天然黑玛瑙珠、红玉髓 Al Ain 玫瑰花饰、镀金赤铁矿、18K 镀金扣环',
    'al-ain-oasis-necklace-rose-quartz':
      '天然粉晶珠、红玉髓 Al Ain 玫瑰花饰、镀金赤铁矿、18K 镀金扣环',
    'al-ain-oasis-necklace-sunstone':
      '天然日光石珠、红玉髓 Al Ain 玫瑰花饰、镀金赤铁矿、18K 镀金扣环',
    'al-ain-oasis-necklace-lapis-lazuli':
      '天然青金石珠、红玉髓 Al Ain 玫瑰花饰、镀金赤铁矿、18K 镀金扣环',
  },
  de: {
    'al-ain-oasis-necklace-malachite':
      'Natürliche Malachitperlen, Karneol-Al-Ain-Rosette, vergoldetes Hämatit, 18K goldplattierter Verschluss',
    'al-ain-oasis-necklace-tiger-eye':
      'Natürliche Tigerauge-Perlen, Karneol-Al-Ain-Rosette, vergoldetes Hämatit, 18K goldplattierter Verschluss',
    'al-ain-oasis-necklace-onyx':
      'Natürliche schwarze Onyxperlen, Karneol-Al-Ain-Rosette, vergoldetes Hämatit, 18K goldplattierter Verschluss',
    'al-ain-oasis-necklace-rose-quartz':
      'Natürliche Rosenquarzperlen, Karneol-Al-Ain-Rosette, vergoldetes Hämatit, 18K goldplattierter Verschluss',
    'al-ain-oasis-necklace-sunstone':
      'Natürliche Sonnensteinperlen, Karneol-Al-Ain-Rosette, vergoldetes Hämatit, 18K goldplattierter Verschluss',
    'al-ain-oasis-necklace-lapis-lazuli':
      'Natürliche Lapislazuliperlen, Karneol-Al-Ain-Rosette, vergoldetes Hämatit, 18K goldplattierter Verschluss',
  },
  nl: {
    'al-ain-oasis-necklace-malachite':
      'Natuurlijke malachietkralen, carneool Al Ain Rosette, verguld hematiet, 18K verguld sluiting',
    'al-ain-oasis-necklace-tiger-eye':
      'Natuurlijke tijgeroogkralen, carneool Al Ain Rosette, verguld hematiet, 18K verguld sluiting',
    'al-ain-oasis-necklace-onyx':
      'Natuurlijke zwarte onyxkralen, carneool Al Ain Rosette, verguld hematiet, 18K verguld sluiting',
    'al-ain-oasis-necklace-rose-quartz':
      'Natuurlijke rozenkwartskralen, carneool Al Ain Rosette, verguld hematiet, 18K verguld sluiting',
    'al-ain-oasis-necklace-sunstone':
      'Natuurlijke zonsteenkralen, carneool Al Ain Rosette, verguld hematiet, 18K verguld sluiting',
    'al-ain-oasis-necklace-lapis-lazuli':
      'Natuurlijke lapis lazuli kralen, carneool Al Ain Rosette, verguld hematiet, 18K verguld sluiting',
  },
  pt: {
    'al-ain-oasis-necklace-malachite':
      'Contas de malaquite natural, Roseta de Al Ain em cornalina, hematite banho de ouro, fecho banho de ouro 18k',
    'al-ain-oasis-necklace-tiger-eye':
      'Contas de olho de tigre natural, Roseta de Al Ain em cornalina, hematite banho de ouro, fecho banho de ouro 18k',
    'al-ain-oasis-necklace-onyx':
      'Contas de ónix negro natural, Roseta de Al Ain em cornalina, hematite banho de ouro, fecho banho de ouro 18k',
    'al-ain-oasis-necklace-rose-quartz':
      'Contas de quartzo rosa natural, Roseta de Al Ain em cornalina, hematite banho de ouro, fecho banho de ouro 18k',
    'al-ain-oasis-necklace-sunstone':
      'Contas de pedra do sol natural, Roseta de Al Ain em cornalina, hematite banho de ouro, fecho banho de ouro 18k',
    'al-ain-oasis-necklace-lapis-lazuli':
      'Contas de lápis-lazúli natural, Roseta de Al Ain em cornalina, hematite banho de ouro, fecho banho de ouro 18k',
  },
  id: {
    'al-ain-oasis-necklace-malachite':
      'Manik malakit alami, Rosette Al Ain karnelian, hematit berlapis emas, kait berlapis emas 18K',
    'al-ain-oasis-necklace-tiger-eye':
      'Manik mata harimau alami, Rosette Al Ain karnelian, hematit berlapis emas, kait berlapis emas 18K',
    'al-ain-oasis-necklace-onyx':
      'Manik oniks hitam alami, Rosette Al Ain karnelian, hematit berlapis emas, kait berlapis emas 18K',
    'al-ain-oasis-necklace-rose-quartz':
      'Manik kuarsa mawar alami, Rosette Al Ain karnelian, hematit berlapis emas, kait berlapis emas 18K',
    'al-ain-oasis-necklace-sunstone':
      'Manik batu matahari alami, Rosette Al Ain karnelian, hematit berlapis emas, kait berlapis emas 18K',
    'al-ain-oasis-necklace-lapis-lazuli':
      'Manik lapis lazuli alami, Rosette Al Ain karnelian, hematit berlapis emas, kait berlapis emas 18K',
  },
  ms: {
    'al-ain-oasis-necklace-malachite':
      'Manik malakit semula jadi, Rosette Al Ain karnelian, hematit bersalut emas, kait bersalut emas 18K',
    'al-ain-oasis-necklace-tiger-eye':
      'Manik mata harimau semula jadi, Rosette Al Ain karnelian, hematit bersalut emas, kait bersalut emas 18K',
    'al-ain-oasis-necklace-onyx':
      'Manik oniks hitam semula jadi, Rosette Al Ain karnelian, hematit bersalut emas, kait bersalut emas 18K',
    'al-ain-oasis-necklace-rose-quartz':
      'Manik kuarsa mawar semula jadi, Rosette Al Ain karnelian, hematit bersalut emas, kait bersalut emas 18K',
    'al-ain-oasis-necklace-sunstone':
      'Manik batu matahari semula jadi, Rosette Al Ain karnelian, hematit bersalut emas, kait bersalut emas 18K',
    'al-ain-oasis-necklace-lapis-lazuli':
      'Manik lapis lazuli semula jadi, Rosette Al Ain karnelian, hematit bersalut emas, kait bersalut emas 18K',
  },
}

const AUDIENCE: Record<AppLocale, string> = {
  en: 'Women who love natural stone necklaces, coordinated jewellery sets and refined accessories; collectors of gemstone jewellery; women seeking hand-strung Abu Dhabi luxury necklaces with Al Ain Rosette motifs; gift shoppers for birthdays, Eid and anniversaries; contemporary women styling abayas and eveningwear with natural stone details; GCC and international clients who favour Emirati designer jewellery',
  ar: 'نساء يعشقن قلائد الأحجار الطبيعية ومجموعات المجوهرات المتناغمة والإكسسوارات الراقية؛ جامعات مجوهرات الأحجار الكريمة؛ نساء يبحثن عن قلائد فاخرة مُرصّعة يدوياً في أبوظبي مع روزيت العين؛ مشترِيات هدايا لأعياد الميلاد والعيد والذكرى السنوية؛ نساء معاصرات يُزيّن العباءات وإطلالات المساء بتفاصيل أحجار طبيعية؛ عميلات الخليج والعالم اللواتي يفضّلن مجوهرات المصمّم الإماراتي',
  fr: 'Femmes qui aiment les colliers en pierres naturelles, les parures coordonnées et les accessoires raffinés ; collectionneuses de bijoux en gemmes ; femmes cherchant des colliers artisanaux d’Abou Dabi avec motif Rosette d’Al Ain ; acheteuses de cadeaux pour anniversaires, Aïd et anniversaires de mariage ; femmes contemporaines habillant abayas et tenues du soir de détails pierres naturelles ; clientèle Golfe et internationale privilégiant la joaillerie designer émiratie',
  it: 'Donne che amano collane in pietra naturale, set di gioielli coordinati e accessori raffinati; collezioniste di gioielli in gemme; donne in cerca di collane artigianali di Abu Dhabi con Rosetta di Al Ain; acquirenti di regali per compleanni, Eid e anniversari; donne contemporanee che abbelliscono abaya e abiti da sera con dettagli in pietra naturale; clienti GCC e internazionali che prediligono gioielli designer emiratini',
  es: 'Mujeres que aman los collares de piedra natural, conjuntos de joyería coordinados y accesorios refinados; coleccionistas de joyería en gemas; mujeres que buscan collares artesanales de Abu Dabi con Roseta de Al Ain; compradoras de regalos para cumpleaños, Eid y aniversarios; mujeres contemporáneas que estilizan abayas y looks de noche con detalles de piedra natural; clientas del Golfo e internacionales que prefieren joyería diseñador emiratí',
  ru: 'Женщины, любящие ожерелья из натурального камня, согласованные ювелирные комплекты и изысканные аксессуары; коллекционерки украшений из самоцветов; женщины в поиске рукотворных люксовых ожерелий из Абу-Даби с розеткой Al Ain; покупательницы подарков на дни рождения, Ид и годовщины; современные женщины, украшающие абаи и вечерние образы деталями из натурального камня; клиентки GCC и мира, предпочитающие эмиратские дизайнерские украшения',
  zh: '热爱天然石项链、协调首饰套组与精致配饰的女性；宝石首饰收藏者；寻觅阿布扎比手工串制奢华项链与 Al Ain 玫瑰花饰的女性；为生日、开斋节与周年纪念选购礼物的买家；以天然石细节装点长袍与晚装的当代女性；偏爱阿联酋设计师珠宝的海湾与国际客户',
  de: 'Frauen, die Naturstein-Halsketten, abgestimmte Schmucksets und raffinierte Accessoires lieben; Sammlerinnen von Edelsteinschmuck; Frauen auf der Suche nach handaufgezogenen Luxus-Halsketten aus Abu Dhabi mit Al-Ain-Rosette; Geschenkkäuferinnen für Geburtstage, Eid und Jahrestage; zeitgenössische Frauen, die Abayas und Abendlooks mit Natursteindetails stylen; GCC- und internationale Kundinnen, die emiratischen Designer-Schmuck bevorzugen',
  nl: 'Vrouwen die houden van natuursteen kettingen, gecoördineerde sieradensets en verfijnde accessoires; verzamelaarsters van edelsteensieraden; vrouwen op zoek naar handgeregen luxe kettingen uit Abu Dhabi met Al Ain Rosette; cadeaukopers voor verjaardagen, Eid en jubilea; hedendaagse vrouwen die abaya’s en avondlooks stylen met natuursteendetails; GCC- en internationale klanten die Emiratische designer sieraden prefereren',
  pt: 'Mulheres que amam colares de pedra natural, conjuntos de joias coordenados e acessórios refinados; colecionadoras de joias em gemas; mulheres que procuram colares artesanais de Abu Dhabi com Roseta de Al Ain; compradoras de presentes para aniversários, Eid e aniversários de casamento; mulheres contemporâneas que estilizam abayas e looks de noite com detalhes em pedra natural; clientes do Golfo e internacionais que preferem joalharia designer emirati',
  id: 'Wanita yang mencintai kalung batu alam, set perhiasan terkoordinasi, dan aksesori halus; kolektor perhiasan batu permata; wanita mencari kalung mewah dirangkai tangan Abu Dhabi dengan Rosette Al Ain; pembeli hadiah untuk ulang tahun, Idul Fitri, dan hari jadi; wanita kontemporer yang menata abaya dan look malam dengan detail batu alam; klien GCC dan internasional yang menyukai perhiasan desainer Emirati',
  ms: 'Wanita yang mencintai rantai leher batu semula jadi, set barang kemas terkoordinasi dan aksesori halus; pengumpul barang kemas batu permata; wanita mencari rantai leher mewah dirangkai tangan Abu Dhabi dengan Rosette Al Ain; pembeli hadiah untuk hari jadi, Aidilfitri dan ulang tahun; wanita kontemporari yang menggayakan abaya dan look malam dengan perincian batu semula jadi; pelanggan GCC dan antarabangsa yang mengutamakan barang kemas pereka Emirati',
}

const SHARED_DISCOVERY: Record<AppLocale, string[]> = {
  en: [
    'natural stone necklace',
    'luxury bead necklace',
    'gemstone necklace UAE',
    'hand-strung necklace Abu Dhabi',
    'Al Ain Rosette necklace',
    'Bint Saeed necklace',
    'Emirati designer necklace',
    'Carnelian Al Ain Rosette',
    'gold-plated hematite necklace',
    'gift necklace UAE',
    'GCC luxury necklace',
    'worldwide shipping necklace',
  ],
  ar: [
    'قلادة أحجار طبيعية',
    'قلادة خرز فاخرة',
    'قلادة أحجار كريمة الإمارات',
    'قلادة مُرصّعة يدوياً أبوظبي',
    'قلادة روزيت العين',
    'قلادة Bint Saeed',
    'قلادة مصمّم إماراتي',
    'روزيت العين من العقيق',
    'قلادة هيمايت مطلي بالذهب',
    'هدية قلادة الإمارات',
    'قلادة فاخرة الخليج',
    'شحن عالمي قلادة',
  ],
  fr: [
    'collier pierres naturelles',
    'collier de perles luxe',
    'collier gemmes EAU',
    'collier enfilé à la main Abou Dabi',
    'collier Rosette d’Al Ain',
    'collier Bint Saeed',
    'collier designer émirati',
    'Rosette d’Al Ain cornaline',
    'collier hématite plaquée or',
    'cadeau collier EAU',
    'collier de luxe Golfe',
    'livraison mondiale collier',
  ],
  it: [
    'collana pietre naturali',
    'collana di perle di lusso',
    'collana gemme EAU',
    'collana infilata a mano Abu Dhabi',
    'collana Rosetta di Al Ain',
    'collana Bint Saeed',
    'collana designer emiratina',
    'Rosetta di Al Ain corniola',
    'collana ematite placcata oro',
    'regalo collana EAU',
    'collana di lusso Golfo',
    'spedizione mondiale collana',
  ],
  es: [
    'collar piedra natural',
    'collar de cuentas de lujo',
    'collar gemas EAU',
    'collar ensartado a mano Abu Dabi',
    'collar Roseta de Al Ain',
    'collar Bint Saeed',
    'collar diseñador emiratí',
    'Roseta de Al Ain cornalina',
    'collar hematita baño de oro',
    'regalo collar EAU',
    'collar de lujo Golfo',
    'envío mundial collar',
  ],
  ru: [
    'ожерелье из натурального камня',
    'роскошное бусинное ожерелье',
    'ожерелье из самоцветов ОАЭ',
    'ожерелье ручной нанизки Абу-Даби',
    'ожерелье розетка Al Ain',
    'ожерелье Bint Saeed',
    'эмиратское дизайнерское ожерелье',
    'розетка Al Ain сердолик',
    'ожерелье с позолоченным гематитом',
    'подарок ожерелье ОАЭ',
    'люксовое ожерелье Залива',
    'мировая доставка ожерелья',
  ],
  zh: [
    '天然石项链',
    '奢华串珠项链',
    '阿联酋宝石项链',
    '阿布扎比手工串制项链',
    'Al Ain 玫瑰花饰项链',
    'Bint Saeed 项链',
    '阿联酋设计师项链',
    '红玉髓 Al Ain 玫瑰花饰',
    '镀金赤铁矿项链',
    '阿联酋项链礼物',
    '海湾奢华项链',
    '全球配送项链',
  ],
  de: [
    'Naturstein-Halskette',
    'Luxus-Perlenkette',
    'Edelstein-Halskette VAE',
    'handaufgezogene Halskette Abu Dhabi',
    'Al-Ain-Rosetten-Halskette',
    'Bint-Saeed-Halskette',
    'emiratische Designer-Halskette',
    'Karneol Al-Ain-Rosette',
    'vergoldete Hämatit-Halskette',
    'Geschenk Halskette VAE',
    'GCC Luxus-Halskette',
    'weltweiter Versand Halskette',
  ],
  nl: [
    'natuursteen ketting',
    'luxe kralenketting',
    'edelsteen ketting VAE',
    'handgeregen ketting Abu Dhabi',
    'Al Ain Rosette ketting',
    'Bint Saeed ketting',
    'Emiratische designer ketting',
    'carneool Al Ain Rosette',
    'verguld hematiet ketting',
    'cadeau ketting VAE',
    'GCC luxe ketting',
    'wereldwijde verzending ketting',
  ],
  pt: [
    'colar pedra natural',
    'colar de contas de luxo',
    'colar gemas EAU',
    'colar enfiado à mão Abu Dhabi',
    'colar Roseta de Al Ain',
    'colar Bint Saeed',
    'colar designer emirati',
    'Roseta de Al Ain cornalina',
    'colar hematite banho de ouro',
    'presente colar EAU',
    'colar de luxo Golfo',
    'envio mundial colar',
  ],
  id: [
    'kalung batu alam',
    'kalung manik mewah',
    'kalung batu permata UEA',
    'kalung dirangkai tangan Abu Dhabi',
    'kalung Rosette Al Ain',
    'kalung Bint Saeed',
    'kalung desainer Emirati',
    'Rosette Al Ain karnelian',
    'kalung hematit berlapis emas',
    'hadiah kalung UEA',
    'kalung mewah GCC',
    'pengiriman dunia kalung',
  ],
  ms: [
    'rantai leher batu semula jadi',
    'rantai leher manik mewah',
    'rantai leher batu permata UAE',
    'rantai leher dirangkai tangan Abu Dhabi',
    'rantai leher Rosette Al Ain',
    'rantai leher Bint Saeed',
    'rantai leher pereka Emirati',
    'Rosette Al Ain karnelian',
    'rantai leher hematit bersalut emas',
    'hadiah rantai leher UAE',
    'rantai leher mewah GCC',
    'penghantaran dunia rantai leher',
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

export function buildNecklaceAllCurrencyPriceLine(accessoryId: string): string {
  const parts: string[] = []
  for (const code of SUPPORTED_CURRENCIES) {
    const amount = getListedPriceForAccessory(accessoryId, code)
    if (amount == null) continue
    parts.push(`${amount} ${code}`)
  }
  return parts.join(', ')
}

export function getNecklaceSchemaAudience(locale: AppLocale = 'en'): string {
  return AUDIENCE[locale] ?? AUDIENCE.en
}

export function getNecklaceLocalizedDisplayName(
  id: string,
  locale: AppLocale = 'en',
): string | undefined {
  const necklaceId = resolveNecklaceId(id)
  if (!necklaceId) return undefined
  return DISPLAY_NAME[locale][necklaceId] ?? DISPLAY_NAME.en[necklaceId]
}

export function getNecklaceMetaTitle(id: string, locale: AppLocale = 'en'): string | undefined {
  const name = getNecklaceLocalizedDisplayName(id, locale)
  if (!name) return undefined
  return `${name} | ${BRAND_NAME}`
}

export function getNecklaceMetaDescription(
  id: string,
  locale: AppLocale = 'en',
): string | undefined {
  const necklaceId = resolveNecklaceId(id)
  if (!necklaceId) return undefined
  const stone = ID_META[necklaceId].stone
  const hook = STONE_HOOK[locale][stone]
  const geo = LOCALE_GEO[locale].madeIn
  const priceLine = formatPriceList(necklaceId)
  const bodies: Record<AppLocale, string> = {
    en: `${BRAND_NAME} ${hook} — hand-strung necklace in ${geo} with Carnelian Al Ain Rosette and gold-plated Hematite. From ${priceLine}. Worldwide shipping.`,
    ar: `${BRAND_NAME} ${hook} — قلادة مُرصّعة يدوياً في ${geo} مع روزيت العين من العقيق وهيمايت مطلي بالذهب. من ${priceLine}. شحن عالمي.`,
    fr: `${BRAND_NAME} ${hook} — collier enfilé à la main à ${geo}, avec rosette d’Al Ain en cornaline et hématite plaquée or. À partir de ${priceLine}. Livraison mondiale.`,
    it: `${BRAND_NAME} ${hook} — collana infilata a mano a ${geo}, con Rosetta di Al Ain in corniola ed ematite placcata oro. Da ${priceLine}. Spedizione mondiale.`,
    es: `${BRAND_NAME} ${hook} — collar ensartado a mano en ${geo}, con Roseta de Al Ain en cornalina y hematita baño de oro. Desde ${priceLine}. Envío mundial.`,
    ru: `${BRAND_NAME} ${hook} — ожерелье ручной нанизки в ${geo}, с розеткой Al Ain из сердолика и позолоченным гематитом. От ${priceLine}. Доставка по всему миру.`,
    zh: `${BRAND_NAME}${hook}——于${geo}手工串制的项链，配红玉髓 Al Ain 玫瑰花饰与镀金赤铁矿。价格 ${priceLine}。全球配送。`,
    de: `${BRAND_NAME} ${hook} — handaufgezogene Halskette in ${geo} mit Karneol-Al-Ain-Rosette und vergoldetem Hämatit. Ab ${priceLine}. Weltweiter Versand.`,
    nl: `${BRAND_NAME} ${hook} — handgeregen ketting in ${geo} met carneool Al Ain Rosette en verguld hematiet. Vanaf ${priceLine}. Wereldwijde verzending.`,
    pt: `${BRAND_NAME} ${hook} — colar enfiado à mão em ${geo}, com Roseta de Al Ain em cornalina e hematite banho de ouro. A partir de ${priceLine}. Envio mundial.`,
    id: `${BRAND_NAME} ${hook} — kalung dirangkai tangan di ${geo}, dengan Rosette Al Ain karnelian dan hematit berlapis emas. Dari ${priceLine}. Pengiriman dunia.`,
    ms: `${BRAND_NAME} ${hook} — rantai leher dirangkai tangan di ${geo}, dengan Rosette Al Ain karnelian dan hematit bersalut emas. Dari ${priceLine}. Penghantaran dunia.`,
  }
  return clipMetaDescription((bodies[locale] ?? bodies.en).replace(/\s+/g, ' ').trim(), 200)
}

export function getNecklaceMetaKeywords(
  id: string,
  locale: AppLocale = 'en',
): string[] | undefined {
  const necklaceId = resolveNecklaceId(id)
  if (!necklaceId) return undefined
  const stone = ID_META[necklaceId].stone
  const label = STONE_LABEL[locale][stone]
  const shared = SHARED_DISCOVERY[locale] ?? SHARED_DISCOVERY.en
  const expanded = getNaturalStoneProductDiscoveryKeywords('necklaces', locale)
  const collectionKw =
    locale === 'ar' ? 'قلادة واحة العين' : 'Al Ain Oasis necklace'
  if (locale === 'ar') {
    return [...shared, ...expanded, `قلادة ${label}`, `${label} حجر طبيعي`, collectionKw]
  }
  return [
    ...shared,
    ...expanded,
    `${label} necklace`,
    `${label} natural stone`,
    collectionKw,
    `buy ${label} necklace`,
  ]
}

export function getNecklaceAiOther(
  id: string,
  locale: AppLocale = 'en',
): Record<string, string> | undefined {
  const necklaceId = resolveNecklaceId(id)
  if (!necklaceId) return undefined
  const name = DISPLAY_NAME[locale][necklaceId] ?? DISPLAY_NAME.en[necklaceId]
  const materials = MATERIALS_LINE[locale][necklaceId] ?? MATERIALS_LINE.en[necklaceId]
  return {
    'ai:brand': BRAND_NAME,
    'ai:category': 'Luxury natural stone necklaces; Emirati designer jewellery',
    'ai:product': name,
    'ai:materials': materials,
    'ai:location': LOCALE_GEO[locale].madeIn,
    'ai:offering': 'Hand-strung natural stone bead necklaces and luxury jewellery',
    'ai:audience': getNecklaceSchemaAudience(locale),
    'ai:geo':
      'UAE, GCC, Abu Dhabi, Dubai, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, United Kingdom, Europe, United States, worldwide',
    'ai:intent':
      'Organic discovery for natural stone lovers, luxury necklace shoppers, gemstone jewellery collectors, gift buyers',
    'ai:prices': buildNecklaceAllCurrencyPriceLine(necklaceId),
  }
}
