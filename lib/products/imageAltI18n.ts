import type { AppLocale } from '@/lib/i18n/routing'
import { BRAND_NAME, LOCALE_GEO, madeInForLocale } from '@/lib/i18n/brandProperNouns'
import type { HeritageCraft } from '@/lib/products/heritageSeo'
import { altLoc } from '@/lib/products/imageAltOverridesI18n'

/** Closing brand + geo phrase appended when an alt string does not already include it. */
export const BRAND_GEO_ALT_PHRASE: Record<AppLocale, string> = altLoc(
  'Bint Saeed Abu Dhabi, United Arab Emirates',
  'Bint Saeed أبوظبي، الإمارات العربية المتحدة',
  'Bint Saeed Abou Dabi, Émirats arabes unis',
  'Bint Saeed Abu Dhabi, Emirati Arabi Uniti',
  'Bint Saeed Abu Dabi, Emiratos Árabes Unidos',
  'Bint Saeed Абу-Даби, Объединённые Арабские Эмираты',
  'Bint Saeed 阿布扎比，阿拉伯联合酋长国',
  'Bint Saeed Abu Dhabi, Vereinigte Arabische Emirate',
  'Bint Saeed Abu Dhabi, Verenigde Arabische Emiraten',
  'Bint Saeed Abu Dhabi, Emirados Árabes Unidos',
)

const ALL_BRAND_GEO_PHRASES = Object.values(BRAND_GEO_ALT_PHRASE)

export function brandGeoAltPhraseForLocale(locale: AppLocale = 'en'): string {
  return BRAND_GEO_ALT_PHRASE[locale]
}

function altIncludesBrandGeo(alt: string): boolean {
  const lower = alt.toLowerCase()
  return ALL_BRAND_GEO_PHRASES.some((phrase) => lower.includes(phrase.toLowerCase()))
}

/** Ensures every alt string ends with the locale-appropriate brand + geo phrase exactly once. */
export function withLocalizedBrandAlt(alt: string, locale: AppLocale = 'en'): string {
  const trimmed = alt.trim()
  const phrase = brandGeoAltPhraseForLocale(locale)
  if (!trimmed) return phrase
  if (altIncludesBrandGeo(trimmed)) return trimmed
  const base = trimmed.replace(/\.+$/, '')
  return `${base}. ${phrase}.`
}

const VIEW_LABELS: Record<string, Record<AppLocale, string>> = {
  front: altLoc('front view', 'منظر أمامي', 'vue de face', 'vista frontale', 'vista frontal', 'вид спереди', '正面视图', 'Frontansicht', 'vooraanzicht', 'vista frontal'),
  side: altLoc('side view', 'منظر جانبي', 'vue de profil', 'vista laterale', 'vista lateral', 'вид сбоку', '侧面视图', 'Seitenansicht', 'zijaanzicht', 'vista lateral'),
  back: altLoc('back view', 'منظر خلفي', 'vue de dos', 'vista posteriore', 'vista trasera', 'вид сзади', '背面视图', 'Rückansicht', 'achteraanzicht', 'vista traseira'),
  'three-quarter': altLoc('three-quarter view', 'منظر ثلاثة أرباع', 'vue trois-quarts', 'vista tre quarti', 'vista tres cuartos', 'вид три четверти', '四分之三视图', 'Dreiviertelansicht', 'driekwartweergave', 'vista três quartos'),
  lifestyle: altLoc('lifestyle view', 'منظر لِلحياة اليومية', 'vue lifestyle', 'vista lifestyle', 'vista lifestyle', 'lifestyle-кадр', '生活方式视图', 'Lifestyle-Ansicht', 'lifestyle-weergave', 'vista lifestyle'),
  'lifestyle 2': altLoc('lifestyle view', 'منظر لِلحياة اليومية', 'vue lifestyle', 'vista lifestyle', 'vista lifestyle', 'lifestyle-кадр', '生活方式视图', 'Lifestyle-Ansicht', 'lifestyle-weergave', 'vista lifestyle'),
  'close-up': altLoc('close-up view', 'منظر مقرّب', 'vue rapprochée', 'vista ravvicinata', 'vista de primer plano', 'крупный план', '特写视图', 'Nahaufnahme', 'close-up', 'vista em close-up'),
  'cuff close-up': altLoc('cuff close-up view', 'منظر مقرّب للكم', 'vue rapprochée du poignet', 'vista ravvicinata del polsino', 'vista de primer plano del puño', 'крупный план манжеты', '袖口特写视图', 'Nahaufnahme der Manschette', 'close-up van de mouw', 'vista em close-up da manga'),
  detail: altLoc('detail view', 'منظر تفصيلي', 'vue détail', 'vista dettaglio', 'vista de detalle', 'детальный вид', '细节视图', 'Detailansicht', 'detailweergave', 'vista de detalhe'),
  extra: altLoc('extra view', 'منظر إضافي', 'vue supplémentaire', 'vista aggiuntiva', 'vista adicional', 'дополнительный вид', '附加视图', 'Zusatzansicht', 'extra weergave', 'vista adicional'),
}

const PRODUCT_TYPE_LABELS: Record<string, Record<AppLocale, string>> = {
  abaya: altLoc('abaya', 'عباءة', 'abaya', 'abaya', 'abaya', 'абая', '长袍', 'Abaya', 'abaya', 'abaya'),
  kaftan: altLoc('kaftan', 'قفطان', 'kaftan', 'kaftan', 'caftán', 'кафтан', '长袍', 'Kaftan', 'kaftan', 'kaftan'),
  dress: altLoc('dress', 'فستان', 'robe', 'abito', 'vestido', 'платье', '连衣裙', 'Kleid', 'jurk', 'vestido'),
  set: altLoc('set', 'طقم', 'ensemble', 'set', 'conjunto', 'комплект', '套装', 'Set', 'set', 'conjunto'),
  piece: altLoc('piece', 'قطعة', 'pièce', 'pezzo', 'pieza', 'изделие', '单品', 'Stück', 'stuk', 'peça'),
}

const LUXURY_LABEL: Record<AppLocale, string> = altLoc(
  'luxury',
  'فاخرة',
  'de luxe',
  'di lusso',
  'de lujo',
  'роскошная',
  '奢华',
  'Luxus-',
  'luxe',
  'de luxo',
)

const COLOR_NAME_I18N: Record<string, Record<AppLocale, string>> = {
  'Deep Black': altLoc('Deep Black', 'الأسود العميق', 'noir profond', 'nero profondo', 'negro profundo', 'глубокий чёрный', '深黑色', 'tiefes Schwarz', 'diep zwart', 'preto profundo'),
  'Navy Blue': altLoc('Navy Blue', 'الأزرق الكحلي', 'bleu marine', 'blu navy', 'azul marino', 'тёмно-синий', '海军蓝', 'Marineblau', 'marineblauw', 'azul-marinho'),
  'Deep Maroon': altLoc('Deep Maroon', 'العنابي الغامق', 'bordeaux profond', 'bordeaux profondo', 'burdeos profundo', 'глубокий бордовый', '深酒红', 'tiefes Bordeaux', 'diep bordeauxrood', 'bordeaux profundo'),
  'Peach Pink': altLoc('Peach Pink', 'الوردي الخوخي', 'rose pêche', 'rosa pesca', 'rosa melocotón', 'персиково-розовый', '蜜桃粉', 'pfirsichrosa', 'perzikroze', 'rosa pêssego'),
  'Navy Grey': altLoc('Navy Grey', 'الرمادي الداكن', 'gris marine', 'grigio navy', 'gris marino', 'тёмно-серый', '海军灰', 'Marinegrau', 'marinegrijs', 'cinza-marinho'),
  Burgundy: altLoc('Burgundy', 'عنابي', 'bordeaux', 'bordeaux', 'burdeos', 'бордовый', '酒红', 'Bordeaux', 'bordeaux', 'bordeaux'),
  Black: altLoc('Black', 'أسود', 'noir', 'nero', 'negro', 'чёрный', '黑色', 'Schwarz', 'zwart', 'preto'),
}

const KAFTAN_FALLBACK_SUFFIX: Record<AppLocale, string> = altLoc(
  ', crepe chiffon with scarf detail, made in Abu Dhabi',
  '، شيفون كريب مع وشاح مرفق، صُنع في أبوظبي',
  ', mousseline crêpe avec écharpe intégrée, fabriqué à Abou Dabi',
  ', chiffon crepe con sciarpa integrata, prodotto ad Abu Dhabi',
  ', chiffon crepe con bufanda integrada, hecho en Abu Dabi',
  ', креп-шифон с прикреплённым шарфом, сделано в Абу-Даби',
  '，绉雪纺配围巾细节，阿布扎比制造',
  ', Krepp-Chiffon mit Schaldetail, hergestellt in Abu Dhabi',
  ', crêpe chiffon met sjaaldetail, gemaakt in Abu Dhabi',
  ', chiffon crepe com lenço integrado, feito em Abu Dhabi',
)

const DEFAULT_FALLBACK_SUFFIX: Record<AppLocale, string> = altLoc(
  ', made in Abu Dhabi',
  '، صُنع في أبوظبي',
  ', fabriqué à Abou Dabi',
  ', prodotto ad Abu Dhabi',
  ', hecho en Abu Dabi',
  ', сделано в Абу-Даби',
  '，阿布扎比制造',
  ', hergestellt in Abu Dhabi',
  ', gemaakt in Abu Dhabi',
  ', feito em Abu Dhabi',
)

const HERITAGE_ALT_PHRASES: Record<HeritageCraft, { standard: Record<AppLocale, string>; detail: Record<AppLocale, string> }> = {
  khous: {
    standard: altLoc(
      'handwoven trim inspired by the Emirati tradition of Khous weaving, made in Abu Dhabi',
      'زخرفة منسوجة يدوياً مستوحاة من تقاليد الحياكة الإماراتية الخوص، صُنعت في أبوظبي',
      'garniture tissée à la main inspirée de la tradition émiratie du tissage Khous, fabriquée à Abou Dabi',
      'finitura tessuta a mano ispirata alla tradizione emiratina della tessitura Khous, realizzata ad Abu Dhabi',
      'ribete tejido a mano inspirado en la tradición emiratí del tejido Khous, hecho en Abu Dabi',
      'ручная отделка, вдохновлённая эмиратской традицией плетения Khous, сделано в Абу-Даби',
      '手工编织饰边，灵感源自阿联酋Khous编织传统，阿布扎比制造',
      'handgewebte Verzierung inspiriert von der emiratischen Khous-Webtradition, hergestellt in Abu Dhabi',
      'handgeweven afwerking geïnspireerd op de Emiratische Khous-weeftraditie, gemaakt in Abu Dhabi',
      'acabamento tecido à mão inspirado na tradição emirati de tecelagem Khous, feito em Abu Dhabi',
      'trim tenun tangan terinspirasi tradisi tenun Khous Emirati, dibuat di Abu Dhabi',
    ),
    detail: altLoc(
      'handwoven trim detail inspired by the Emirati tradition of Khous weaving, made in Abu Dhabi',
      'تفاصيل زخرفة منسوجة يدوياً مستوحاة من تقاليد الحياكة الإماراتية الخوص، صُنعت في أبوظبي',
      'détail de garniture tissée à la main inspirée de la tradition émiratie du tissage Khous, fabriquée à Abou Dabi',
      'dettaglio di finitura tessuta a mano ispirata alla tradizione emiratina della tessitura Khous, realizzata ad Abu Dhabi',
      'detalle de ribete tejido a mano inspirado en la tradición emiratí del tejido Khous, hecho en Abu Dabi',
      'деталь ручной отделки, вдохновлённой эмиратской традицией плетения Khous, сделано в Абу-Даби',
      '手工编织饰边细节，灵感源自阿联酋Khous编织传统，阿布扎比制造',
      'Detail einer handgewebten Verzierung inspiriert von der emiratischen Khous-Webtradition, hergestellt in Abu Dhabi',
      'detail van handgeweven afwerking geïnspireerd op de Emiratische Khous-weeftraditie, gemaakt in Abu Dhabi',
      'detalhe de acabamento tecido à mão inspirado na tradição emirati de tecelagem Khous, feito em Abu Dhabi',
      'detail trim tenun tangan terinspirasi tradisi tenun Khous Emirati, dibuat di Abu Dhabi',
    ),
  },
  'al-talli': {
    standard: altLoc(
      'traditional Al Talli trim celebrating Emirati heritage, made in Abu Dhabi',
      'زخرفة التلي التراثية تحتفي بالإرث الإماراتي، صُنعت في أبوظبي',
      'garniture Al Talli traditionnelle célébrant l’héritage émirati, fabriquée à Abou Dabi',
      'finitura Al Talli tradizionale che celebra il patrimonio emiratino, realizzata ad Abu Dhabi',
      'ribete Al Talli tradicional que celebra el patrimonio emiratí, hecho en Abu Dabi',
      'традиционная отделка Al Talli, прославляющая эмиратское наследие, сделано в Абу-Даби',
      '传统Al Talli饰边，致敬阿联酋传承，阿布扎比制造',
      'traditionelle Al-Talli-Verzierung als Hommage an das emiratische Erbe, hergestellt in Abu Dhabi',
      'traditionele Al Talli-afwerking ter ere van het Emiratische erfgoed, gemaakt in Abu Dhabi',
      'acabamento Al Talli tradicional que celebra o património emirati, feito em Abu Dhabi',
      'trim Al Talli tradisional yang merayakan warisan Emirati, dibuat di Abu Dhabi',
    ),
    detail: altLoc(
      'detail of traditional Al Talli trim, Emirati heritage embroidery, made in Abu Dhabi',
      'تفاصيل زخرفة التلي التراثية، تطريز إرث إماراتي، صُنعت في أبوظبي',
      'détail de garniture Al Talli traditionnelle, broderie patrimoniale émiratie, fabriquée à Abou Dabi',
      'dettaglio di finitura Al Talli tradizionale, ricamo del patrimonio emiratino, realizzata ad Abu Dhabi',
      'detalle de ribete Al Talli tradicional, bordado del patrimonio emiratí, hecho en Abu Dabi',
      'деталь традиционной отделки Al Talli, вышивка эмиратского наследия, сделано в Абу-Даби',
      '传统Al Talli饰边细节，阿联酋传承刺绣，阿布扎比制造',
      'Detail einer traditionellen Al-Talli-Verzierung, emiratische Heritage-Stickerei, hergestellt in Abu Dhabi',
      'detail van traditionele Al Talli-afwerking, Emiratisch erfgoed borduurwerk, gemaakt in Abu Dhabi',
      'detalhe de acabamento Al Talli tradicional, bordado do património emirati, feito em Abu Dhabi',
      'detail trim Al Talli tradisional, bordir warisan Emirati, dibuat di Abu Dhabi',
    ),
  },
}

const DETAIL_ANGLES = new Set(['detail', 'extra', 'close-up', 'cuff close-up'])

export function localizedColorName(color: string, locale: AppLocale = 'en'): string {
  return COLOR_NAME_I18N[color]?.[locale] ?? color
}

export function localizedViewLabel(angle: string, locale: AppLocale = 'en'): string {
  return VIEW_LABELS[angle]?.[locale] ?? VIEW_LABELS.front[locale]
}

export function localizedProductTypeLabel(typeKey: string, locale: AppLocale = 'en'): string {
  return PRODUCT_TYPE_LABELS[typeKey]?.[locale] ?? typeKey
}

export function getLocalizedHeritageAltPhrase(
  craft: HeritageCraft,
  angle: string,
  locale: AppLocale = 'en',
): string {
  const bucket = DETAIL_ANGLES.has(angle.toLowerCase()) ? 'detail' : 'standard'
  return HERITAGE_ALT_PHRASES[craft][bucket][locale]
}

export function buildAutoGeneratedProductImageAlt(input: {
  productName: string
  category: string
  color: string
  angle: string
  locale?: AppLocale
  heritageCraft?: HeritageCraft | null
}): string {
  const locale = input.locale ?? 'en'
  const typeKey = productTypeKeyFromCategory(input.category)
  const typeLabel = localizedProductTypeLabel(typeKey, locale)
  const colorLabel = localizedColorName(input.color, locale)
  const viewLabel = localizedViewLabel(input.angle, locale)
  const luxury = LUXURY_LABEL[locale]

  let subject: string
  if (locale === 'ar') {
    subject = `${input.productName} ${typeLabel} ${luxury} باللون ${colorLabel}، ${viewLabel}`
  } else if (locale === 'zh') {
    subject = `${input.productName}奢华${typeLabel}，${colorLabel}，${viewLabel}`
  } else if (locale === 'ru') {
    subject = `${luxury} ${typeLabel} ${input.productName} цвета ${colorLabel}, ${viewLabel}`
  } else if (locale === 'de') {
    subject = `${luxury}${typeLabel} ${input.productName} in ${colorLabel}, ${viewLabel}`
  } else if (locale === 'id') {
    subject = `${input.productName}, ${typeLabel} ${luxury} dalam ${colorLabel}, ${viewLabel}`
  } else if (locale === 'fr' || locale === 'it' || locale === 'es' || locale === 'pt') {
    subject = `${input.productName}, ${typeLabel} ${luxury} en ${colorLabel}, ${viewLabel}`
  } else {
    subject = `${input.productName} ${luxury} ${typeLabel} in ${colorLabel}, ${viewLabel}`
  }

  let heritage = ''
  if (input.heritageCraft) {
    heritage = `, ${getLocalizedHeritageAltPhrase(input.heritageCraft, input.angle, locale)}`
  } else if (input.category === 'Kaftans') {
    heritage = KAFTAN_FALLBACK_SUFFIX[locale]
  } else {
    heritage = DEFAULT_FALLBACK_SUFFIX[locale]
  }

  return withLocalizedBrandAlt(`${subject}${heritage}`, locale)
}

function productTypeKeyFromCategory(category: string): string {
  if (category === 'Abayas') return 'abaya'
  if (category === 'Kaftans') return 'kaftan'
  if (category === 'Dresses') return 'dress'
  if (category === 'Sets') return 'set'
  return 'piece'
}

/** Cart / generic line fallback when no catalogue image match exists. */
export function buildCartLineFallbackAlt(
  name: string,
  color: string,
  locale: AppLocale = 'en',
): string {
  if (locale === 'ar') {
    return withLocalizedBrandAlt(`${name} باللون ${localizedColorName(color, locale)}`, locale)
  }
  return withLocalizedBrandAlt(`${name} in ${localizedColorName(color, locale)}`, locale)
}

export { madeInForLocale, LOCALE_GEO, BRAND_NAME }
