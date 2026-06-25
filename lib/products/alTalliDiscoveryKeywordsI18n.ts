import type { AppLocale } from '@/lib/i18n/routing'
import { AL_TALLI_DISCOVERY_KEYWORDS_EN } from '@/lib/seo/alTalliDiscovery'

function kw(
  en: string,
  ar: string,
  fr: string,
  it: string,
  es: string,
  ru: string,
  zh: string,
  de: string,
  nl: string,
  pt: string,
): Record<AppLocale, string> {
  return { en, ar, fr, it, es, ru, zh, de, nl, pt, id: en, ms: en }
}

type KwRow = [string, string, string, string, string, string, string, string, string, string]

const AL_TALLI_EXCLUSIVE_ROWS: KwRow[] = [
  ['what is Al Talli', 'ما هو التلي', "qu'est-ce que l'Al Talli", "che cos'è Al Talli", 'qué es Al Talli', 'что такое Al Talli', '什么是 Al Talli', 'was ist Al Talli', 'wat is Al Talli', 'o que é Al Talli'],
  ['Al Talli craft', 'حرفة التلي', 'artisanat Al Talli', 'artigianato Al Talli', 'artesanía Al Talli', 'ремесло Al Talli', 'Al Talli 工艺', 'Al-Talli-Handwerk', 'Al Talli ambacht', 'ofício Al Talli'],
  ['Al Talli UNESCO', 'التلي اليونسكو', 'Al Talli UNESCO', 'Al Talli UNESCO', 'Al Talli UNESCO', 'Al Talli ЮНЕСКО', 'Al Talli 联合国教科文组织', 'Al Talli UNESCO', 'Al Talli UNESCO', 'Al Talli UNESCO'],
  ['UNESCO Al Talli embroidery', 'تطريز التلي اليونسكو', 'broderie Al Talli UNESCO', 'ricamo Al Talli UNESCO', 'bordado Al Talli UNESCO', 'вышивка Al Talli ЮНЕСКО', '联合国教科文组织 Al Talli 刺绣', 'UNESCO Al-Talli-Stickerei', 'UNESCO Al Talli borduurwerk', 'bordado Al Talli UNESCO'],
  ['Talli embroidery', 'تطريز التلي', 'broderie Talli', 'ricamo Talli', 'bordado Talli', 'вышивка Talli', 'Talli 刺绣', 'Talli-Stickerei', 'Talli borduurwerk', 'bordado Talli'],
  ['Emirati Al Talli', 'التلي الإماراتي', 'Al Talli émirati', 'Al Talli emiratino', 'Al Talli emiratí', 'эмиратский Al Talli', '阿联酋 Al Talli', 'emiratisches Al Talli', 'Emiratisch Al Talli', 'Al Talli emirati'],
  ['traditional Al Talli', 'التلي التقليدي', 'Al Talli traditionnel', 'Al Talli tradizionale', 'Al Talli tradicional', 'традиционный Al Talli', '传统 Al Talli', 'traditionelles Al Talli', 'traditioneel Al Talli', 'Al Talli tradicional'],
  ['Al Talli UAE', 'التلي الإمارات', 'Al Talli EAU', 'Al Talli EAU', 'Al Talli EAU', 'Al Talli ОАЭ', '阿联酋 Al Talli', 'Al Talli VAE', 'Al Talli VAE', 'Al Talli EAU'],
  ['Al Talli Abu Dhabi', 'التلي أبوظبي', 'Al Talli Abou Dabi', 'Al Talli Abu Dhabi', 'Al Talli Abu Dabi', 'Al Talli Абу-Даби', '阿布扎比 Al Talli', 'Al Talli Abu Dhabi', 'Al Talli Abu Dhabi', 'Al Talli Abu Dhabi'],
  ['Al Talli fashion', 'أزياء التلي', 'mode Al Talli', 'moda Al Talli', 'moda Al Talli', 'мода Al Talli', 'Al Talli 时尚', 'Al-Talli-Mode', 'Al Talli mode', 'moda Al Talli'],
  ['Al Talli designer', 'مصمّم التلي', 'créateur Al Talli', 'designer Al Talli', 'diseñador Al Talli', 'дизайнер Al Talli', 'Al Talli 设计师', 'Al-Talli-Designer', 'Al Talli designer', 'designer Al Talli'],
  ['buy Al Talli abaya', 'شراء عباية التلي', 'acheter abaya Al Talli', 'comprare abaya Al Talli', 'comprar abaya Al Talli', 'купить абайю Al Talli', '购买 Al Talli 长袍', 'Al-Talli-Abaya kaufen', 'Al Talli abaya kopen', 'comprar abaya Al Talli'],
  ['shop Al Talli fashion', 'تسوق أزياء التلي', 'boutique mode Al Talli', 'shop moda Al Talli', 'tienda moda Al Talli', 'магазин моды Al Talli', '选购 Al Talli 时尚', 'Al-Talli-Mode shoppen', 'Al Talli mode shoppen', 'loja moda Al Talli'],
  ['luxury Al Talli abaya', 'عباية التلي الفاخرة', 'abaya de luxe Al Talli', 'abaya di lusso Al Talli', 'abaya de lujo Al Talli', 'люксовая абайя Al Talli', '奢华 Al Talli 长袍', 'Luxus-Al-Talli-Abaya', 'luxe Al Talli abaya', 'abaya de luxo Al Talli'],
  ['contemporary Al Talli', 'التلي المعاصر', 'Al Talli contemporain', 'Al Talli contemporaneo', 'Al Talli contemporáneo', 'современный Al Talli', '当代 Al Talli', 'zeitgenössisches Al Talli', 'eigentijds Al Talli', 'Al Talli contemporâneo'],
  ['Al Talli modest fashion', 'أزياء محتشمة التلي', 'mode modeste Al Talli', 'moda modesta Al Talli', 'moda modesta Al Talli', 'скромная мода Al Talli', 'Al Talli 端庄时尚', 'bescheidene Al-Talli-Mode', 'bescheiden Al Talli mode', 'moda modesta Al Talli'],
  ['Al Talli woven trim', 'تفاصيل التلي المنسوج', 'garniture tissée Al Talli', 'finitura tessuta Al Talli', 'ribete tejido Al Talli', 'тканая отделка Al Talli', 'Al Talli 编织饰边', 'gewebte Al-Talli-Verzierung', 'geweven Al Talli afwerking', 'acabamento tecido Al Talli'],
  ['metallic thread embroidery UAE', 'تطريز خيوط معدنية الإمارات', 'broderie fil métallique EAU', 'ricamo filo metallico EAU', 'bordado hilo metálico EAU', 'вышивка металлической нитью ОАЭ', '阿联酋金属线刺绣', 'Metallfaden-Stickerei VAE', 'metallic draad borduurwerk VAE', 'bordado fio metálico EAU'],
  ['Bint Saeed Al Talli', 'Bint Saeed التلي', 'Bint Saeed Al Talli', 'Bint Saeed Al Talli', 'Bint Saeed Al Talli', 'Bint Saeed Al Talli', 'Bint Saeed Al Talli', 'Bint Saeed Al Talli', 'Bint Saeed Al Talli', 'Bint Saeed Al Talli'],
  ['Covent Garden Abaya Al Talli', 'عباية Covent Garden التلي', 'Abaya Covent Garden Al Talli', 'Covent Garden Abaya Al Talli', 'Abaya Covent Garden Al Talli', 'Covent Garden Abaya Al Talli', 'Covent Garden Al Talli 长袍', 'Covent Garden Abaya Al Talli', 'Covent Garden Abaya Al Talli', 'Abaya Covent Garden Al Talli'],
]

const AL_TALLI_EXCLUSIVE_I18N = AL_TALLI_EXCLUSIVE_ROWS.map(([en, ar, fr, it, es, ru, zh, de, nl, pt]) =>
  kw(en, ar, fr, it, es, ru, zh, de, nl, pt),
)

/** Discovery keywords injected on every Al Talli heritage product PDP. */
export function getLocalizedAlTalliDiscoveryKeywords(locale: AppLocale = 'en'): string[] {
  const terms = new Set<string>(
    locale === 'en'
      ? [...AL_TALLI_DISCOVERY_KEYWORDS_EN, ...AL_TALLI_EXCLUSIVE_I18N.map((row) => row.en)]
      : AL_TALLI_EXCLUSIVE_I18N.map((row) => row[locale]),
  )
  return [...terms]
}
