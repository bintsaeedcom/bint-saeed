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
  ['UAE heritage', 'تراث الإمارات', 'patrimoine des EAU', 'patrimonio degli EAU', 'patrimonio de EAU', 'наследие ОАЭ', '阿联酋遗产', 'Erbe der VAE', 'erfgoed van de VAE', 'património dos EAU'],
  ['UAE cultural heritage', 'التراث الثقافي للإمارات', 'patrimoine culturel des EAU', 'patrimonio culturale degli EAU', 'patrimonio cultural de EAU', 'культурное наследие ОАЭ', '阿联酋文化遗产', 'kulturelles Erbe der VAE', 'cultureel erfgoed VAE', 'património cultural dos EAU'],
  ['Abu Dhabi heritage', 'تراث أبوظبي', 'patrimoine d’Abou Dabi', 'patrimonio di Abu Dhabi', 'patrimonio de Abu Dabi', 'наследие Абу-Даби', '阿布扎比遗产', 'Erbe von Abu Dhabi', 'erfgoed van Abu Dhabi', 'património de Abu Dhabi'],
  ['Emirati heritage', 'التراث الإماراتي', 'patrimoine émirati', 'patrimonio emiratino', 'patrimonio emiratí', 'эмиратское наследие', '阿联酋文化传承', 'emiratisches Erbe', 'Emiratisch erfgoed', 'património emirati'],
  ['Middle Eastern fashion', 'أزياء الشرق الأوسط', 'mode moyen-orientale', 'moda mediorientale', 'moda de Oriente Medio', 'ближневосточная мода', '中东时尚', 'nahöstliche Mode', 'Midden-Oosterse mode', 'moda do Médio Oriente'],
  ['Middle East fashion', 'موضة الشرق الأوسط', 'mode du Moyen-Orient', 'moda del Medio Oriente', 'moda de Oriente Medio', 'мода Ближнего Востока', '中东时装', 'Mode des Nahen Ostens', 'mode uit het Midden-Oosten', 'moda do Médio Oriente'],
  ['Middle Eastern crafts', 'حرف الشرق الأوسط', 'artisanat du Moyen-Orient', 'artigianato del Medio Oriente', 'artesanía de Oriente Medio', 'ближневосточные ремёсла', '中东工艺', 'nahöstliches Handwerk', 'Midden-Oosterse ambachten', 'artesanato do Médio Oriente'],
  ['Middle Eastern heritage', 'تراث الشرق الأوسط', 'patrimoine du Moyen-Orient', 'patrimonio del Medio Oriente', 'patrimonio de Oriente Medio', 'ближневосточное наследие', '中东遗产', 'nahöstliches Erbe', 'Midden-Oosters erfgoed', 'património do Médio Oriente'],
  ['Middle East heritage', 'تراث الشرق الأوسط', 'héritage du Moyen-Orient', 'heritage del Medio Oriente', 'herencia de Oriente Medio', 'наследие Ближнего Востока', '中东文化传承', 'Erbe des Nahen Ostens', 'erfgoed van het Midden-Oosten', 'herança do Médio Oriente'],
  ['Middle Eastern traditional crafts', 'الحرف التقليدية في الشرق الأوسط', 'artisanat traditionnel du Moyen-Orient', 'artigianato tradizionale del Medio Oriente', 'artesanía tradicional de Oriente Medio', 'традиционные ремёсла Ближнего Востока', '中东传统工艺', 'traditionelles nahöstliches Handwerk', 'traditionele Midden-Oosterse ambachten', 'artesanato tradicional do Médio Oriente'],
  ['visit Abu Dhabi', 'زيارة أبوظبي', 'visiter Abou Dabi', 'visitare Abu Dhabi', 'visitar Abu Dabi', 'посетить Абу-Даби', '游览阿布扎比', 'Abu Dhabi besuchen', 'Abu Dhabi bezoeken', 'visitar Abu Dhabi'],
  ['things to do in Abu Dhabi', 'ماذا تفعل في أبوظبي', 'que faire à Abou Dabi', 'cose da fare ad Abu Dhabi', 'qué hacer en Abu Dabi', 'что делать в Абу-Даби', '阿布扎比景点体验', 'Sehenswürdigkeiten Abu Dhabi', 'dingen om te doen in Abu Dhabi', 'o que fazer em Abu Dhabi'],
  ['Abu Dhabi culture', 'ثقافة أبوظبي', 'culture d’Abou Dabi', 'cultura di Abu Dhabi', 'cultura de Abu Dabi', 'культура Абу-Даби', '阿布扎比文化', 'Kultur in Abu Dhabi', 'cultuur in Abu Dhabi', 'cultura de Abu Dhabi'],
  ['Abu Dhabi crafts', 'حرف أبوظبي', 'artisanat d’Abou Dabi', 'artigianato di Abu Dhabi', 'artesanía de Abu Dabi', 'ремёсла Абу-Даби', '阿布扎比工艺', 'Handwerk in Abu Dhabi', 'ambachten in Abu Dhabi', 'artesanato de Abu Dhabi'],
  ['Abu Dhabi traditional crafts', 'الحرف التقليدية في أبوظبي', 'artisanat traditionnel d’Abou Dabi', 'artigianato tradizionale di Abu Dhabi', 'artesanía tradicional de Abu Dabi', 'традиционные ремёсла Абу-Даби', '阿布扎比传统工艺', 'traditionelles Handwerk Abu Dhabi', 'traditionele ambachten Abu Dhabi', 'artesanato tradicional de Abu Dhabi'],
  ['Abu Dhabi cultural attractions', 'معالم أبوظبي الثقافية', 'attractions culturelles d’Abou Dabi', 'attrazioni culturali di Abu Dhabi', 'atracciones culturales de Abu Dabi', 'культурные достопримечательности Абу-Даби', '阿布扎比文化景点', 'kulturelle Attraktionen Abu Dhabi', 'culturele attracties Abu Dhabi', 'atrações culturais de Abu Dhabi'],
  ['House of Artisans Abu Dhabi', 'بيت الحرفيين أبوظبي', 'House of Artisans Abou Dabi', 'House of Artisans Abu Dhabi', 'House of Artisans Abu Dabi', 'House of Artisans Абу-Даби', '阿布扎比 House of Artisans', 'House of Artisans Abu Dhabi', 'House of Artisans Abu Dhabi', 'House of Artisans Abu Dhabi'],
  ['Qasr Al Hosn', 'قصر الحصن', 'Qasr Al Hosn', 'Qasr Al Hosn', 'Qasr Al Hosn', 'Qasr Al Hosn', 'Qasr Al Hosn', 'Qasr Al Hosn', 'Qasr Al Hosn', 'Qasr Al Hosn'],
  ['cultural experiences Abu Dhabi', 'تجارب ثقافية في أبوظبي', 'expériences culturelles à Abou Dabi', 'esperienze culturali ad Abu Dhabi', 'experiencias culturales en Abu Dabi', 'культурные впечатления в Абу-Даби', '阿布扎比文化体验', 'kulturelle Erlebnisse Abu Dhabi', 'culturele ervaringen Abu Dhabi', 'experiências culturais em Abu Dhabi'],
  ['UNESCO heritage Al Talli', 'تراث اليونسكو التلي', 'patrimoine UNESCO Al Talli', 'patrimonio UNESCO Al Talli', 'patrimonio UNESCO Al Talli', 'наследие ЮНЕСКО Al Talli', '联合国教科文组织遗产 Al Talli', 'UNESCO-Erbe Al Talli', 'UNESCO-erfgoed Al Talli', 'património UNESCO Al Talli'],
  ['cultural heritage of UAE', 'التراث الثقافي لدولة الإمارات', 'patrimoine culturel des Émirats', 'patrimonio culturale degli Emirati', 'patrimonio cultural de los Emiratos', 'культурное наследие Эмиратов', '阿联酋的文化遗产', 'kulturelles Erbe der Emirate', 'cultureel erfgoed van de Emiraten', 'património cultural dos Emirados'],
  ['what to see in Abu Dhabi', 'ماذا تشاهد في أبوظبي', 'que voir à Abou Dabi', 'cosa vedere ad Abu Dhabi', 'qué ver en Abu Dabi', 'что посмотреть в Абу-Даби', '阿布扎比看什么', 'Sehenswürdigkeiten in Abu Dhabi', 'wat te zien in Abu Dhabi', 'o que ver em Abu Dhabi'],
  ['Middle East crafts', 'حرف الشرق الأوسط', 'artisanats du Moyen-Orient', 'mestieri del Medio Oriente', 'oficios de Oriente Medio', 'ремёсла Ближнего Востока', '中东手工艺', 'Handwerke des Nahen Ostens', 'ambachten uit het Midden-Oosten', 'ofícios do Médio Oriente'],
  ['Gulf heritage crafts', 'حرف تراث الخليج', 'artisanat patrimonial du Golfe', 'artigianato patrimoniale del Golfo', 'artesanía patrimonial del Golfo', 'ремёсла наследия Персидского залива', '海湾传承工艺', 'Golf-Erbe-Handwerk', 'Golf-erfgoedambachten', 'artesanato patrimonial do Golfo'],
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
