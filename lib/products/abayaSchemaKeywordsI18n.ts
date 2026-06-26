import type { AppLocale } from '@/lib/i18n/routing'
import { BRAND_NAME } from '@/lib/i18n/brandProperNouns'
import type { Product } from '@/data/products'
import { resolveProductSku } from '@/lib/products/sku'
import { SHARED_ABAYA_KEYWORDS_ID } from '@/lib/products/abayaSchemaKeywordsId'
import { SHARED_ABAYA_KEYWORDS_MS } from '@/lib/products/abayaSchemaKeywordsMs'

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

function rowsToKw(rows: KwRow[]): Record<AppLocale, string>[] {
  return rows.map(([en, ar, fr, it, es, ru, zh, de, nl, pt]) =>
    kw(en, ar, fr, it, es, ru, zh, de, nl, pt),
  )
}

function pickLocale(rows: Record<AppLocale, string>[], locale: AppLocale): string[] {
  return rows.map((r) => r[locale])
}

const ABAYA_TYPE: Record<AppLocale, string> = {
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
const LUXURY_WORD: Record<AppLocale, string> = {
  en: 'luxury',
  ar: 'فاخر',
  fr: 'luxe',
  it: 'lusso',
  es: 'lujo',
  ru: 'роскошный',
  zh: '奢华',
  de: 'Luxus',
  nl: 'luxe',
  pt: 'luxo',
  id: 'mewah',
  ms: 'mewah',
}

const SHARED_ABAYA_KEYWORD_ROWS: KwRow[] = [
  ['Luxury Abaya', 'عباية فاخرة', 'Abaya de luxe', 'Abaya di lusso', 'Abaya de lujo', 'Роскошная абайя', '奢华阿巴亚', 'Luxus-Abaya', 'Luxe abaya', 'Abaya de luxo'],
  ['Designer Abaya', 'عباية مصمّمة', 'Abaya designer', 'Abaya designer', 'Abaya de diseñador', 'Дизайнерская абайя', '设计师阿巴亚', 'Designer-Abaya', 'Designer abaya', 'Abaya de designer'],
  ['Luxury Designer Abaya', 'عباية مصمّمة فاخرة', 'Abaya designer de luxe', 'Abaya designer di lusso', 'Abaya de diseñador de lujo', 'Роскошная дизайнерская абайя', '奢华设计师阿巴亚', 'Luxus-Designer-Abaya', 'Luxe designer abaya', 'Abaya de designer de luxo'],
  ['Handmade Abaya', 'عباية يدوية', 'Abaya faite main', 'Abaya fatta a mano', 'Abaya hecha a mano', 'Абайя ручной работы', '手工阿巴亚', 'Handgefertigte Abaya', 'Handgemaakte abaya', 'Abaya artesanal'],
  ['Handcrafted Abaya', 'عباية مصنوعة يدوياً', 'Abaya artisanale', 'Abaya artigianale', 'Abaya artesanal', 'Абайя ручной работы', '手工阿巴亚', 'Handgefertigte Abaya', 'Handgemaakte abaya', 'Abaya artesanal'],
  ['Premium Abaya', 'عباية راقية', 'Abaya premium', 'Abaya premium', 'Abaya premium', 'Премиальная абайя', '高端阿巴亚', 'Premium-Abaya', 'Premium abaya', 'Abaya premium'],
  ['Luxury Black Abaya', 'عباية سوداء فاخرة', 'Abaya noire de luxe', 'Abaya nera di lusso', 'Abaya negra de lujo', 'Роскошная чёрная абайя', '奢华黑色阿巴亚', 'Luxus-Schwarz-Abaya', 'Luxe zwarte abaya', 'Abaya preta de luxo'],
  ['Luxury Navy Abaya', 'عباية كحلية فاخرة', 'Abaya marine de luxe', 'Abaya blu navy di lusso', 'Abaya azul marino de lujo', 'Роскошная тёмно-синяя абайя', '奢华藏青阿巴亚', 'Luxus-Marine-Abaya', 'Luxe marineblauwe abaya', 'Abaya azul-marinho de luxo'],
  ['Contemporary Abaya', 'عباية معاصرة', 'Abaya contemporaine', 'Abaya contemporanea', 'Abaya contemporánea', 'Современная абайя', '当代阿巴亚', 'Zeitgenössische Abaya', 'Eigentijdse abaya', 'Abaya contemporânea'],
  ['Modern Abaya', 'عباية عصرية', 'Abaya moderne', 'Abaya moderna', 'Abaya moderna', 'Современная абайя', '现代阿巴亚', 'Moderne Abaya', 'Moderne abaya', 'Abaya moderna'],
  ['Luxury Outerwear', 'ملابس خارجية فاخرة', "Vêtements d\\'extérieur de luxe", 'Capospalla di lusso', 'Ropa exterior de lujo', 'Роскошная верхняя одежда', '奢华外套', 'Luxus-Oberbekleidung', 'Luxe outerwear', 'Roupa exterior de luxo'],
  ['Abaya Jacket', 'جاكيت عباية', 'Veste abaya', 'Giacca abaya', 'Chaqueta abaya', 'Жакет-абайя', '阿巴亚夹克', 'Abaya-Jacke', 'Abaya jas', 'Casaco abaya'],
  ['Abaya Cape', 'كاب عباية', 'Cape abaya', 'Mantella abaya', 'Capa abaya', 'Накидка-абайя', '阿巴亚斗篷', 'Abaya-Cape', 'Abaya cape', 'Capa abaya'],
  ['Abaya Vest', 'فيست عباية', 'Gilet abaya', 'Gilet abaya', 'Chaleco abaya', 'Жилет-абайя', '阿巴亚马甲', 'Abaya-Weste', 'Abaya vest', 'Colete abaya'],
  ['Bisht Abaya', 'عباية بشت', 'Abaya Bisht', 'Abaya Bisht', 'Abaya Bisht', 'Абайя Bisht', 'Bisht 阿巴亚', 'Bisht-Abaya', 'Bisht abaya', 'Abaya Bisht'],
  ['Bisht Inspired Abaya', 'عباية مستوحاة من البشت', 'Abaya inspirée du Bisht', 'Abaya ispirata al Bisht', 'Abaya inspirada en el Bisht', 'Абайя в стиле Bisht', 'Bisht 灵感阿巴亚', 'Bisht-inspirierte Abaya', 'Bisht-geïnspireerde abaya', 'Abaya inspirada no Bisht'],
  ['Bisht-inspired Abaya', 'عباية مستوحاة من البشت', 'Abaya inspirée du Bisht', 'Abaya ispirata al Bisht', 'Abaya inspirada en el Bisht', 'Абайя в стиле Bisht', 'Bisht 灵感阿巴亚', 'Bisht-inspirierte Abaya', 'Bisht-geïnspireerde abaya', 'Abaya inspirada no Bisht'],
  ['Luxury Bisht Abaya', 'عباية بشت فاخرة', 'Abaya Bisht de luxe', 'Abaya Bisht di lusso', 'Abaya Bisht de lujo', 'Роскошная абайя Bisht', '奢华 Bisht 阿巴亚', 'Luxus-Bisht-Abaya', 'Luxe Bisht abaya', 'Abaya Bisht de luxo'],
  ['Open Front Abaya', 'عباية مفتوحة الأمام', 'Abaya ouverte devant', 'Abaya apertura frontale', 'Abaya de frente abierto', 'Абайя с открытым передом', '开襟阿巴亚', 'Abaya mit offener Front', 'Open front abaya', 'Abaya de frente aberto'],
  ['Elegant Abaya', 'عباية أنيقة', 'Abaya élégante', 'Abaya elegante', 'Abaya elegante', 'Элегантная абайя', '优雅阿巴亚', 'Elegante Abaya', 'Elegante abaya', 'Abaya elegante'],
  ['Wedding Abaya', 'عباية زفاف', 'Abaya de mariage', 'Abaya da matrimonio', 'Abaya de boda', 'Свадебная абайя', '婚礼阿巴亚', 'Hochzeits-Abaya', 'Bruiloftsabaya', 'Abaya de casamento'],
  ['Occasion Abaya', 'عباية للمناسبات', 'Abaya de cérémonie', 'Abaya da cerimonia', 'Abaya de ocasión', 'Абайя для особых случаев', '场合阿巴亚', 'Anlass-Abaya', 'Gelegenheidsabaya', 'Abaya de ocasião'],
  ['Eid Abaya', 'عباية العيد', 'Abaya Aïd', 'Abaya Eid', 'Abaya Eid', 'Абайя на Ид', '开斋节阿巴亚', 'Eid-Abaya', 'Eid abaya', 'Abaya Eid'],
  ['Travel Abaya', 'عباية سفر', 'Abaya de voyage', 'Abaya da viaggio', 'Abaya de viaje', 'Дорожная абайя', '旅行阿巴亚', 'Reise-Abaya', 'Reisabaya', 'Abaya de viagem'],
  ['Luxury Travel Wardrobe', 'خزانة سفر فاخرة', 'Garde-robe de voyage de luxe', 'Guardaroba da viaggio di lusso', 'Armario de viaje de lujo', 'Роскошный дорожный гардероб', '奢华旅行衣橱', 'Luxuriöse Reisegarderobe', 'Luxe reisgarderobe', 'Guarda-roupa de viagem de luxo'],
  ['Designer Abaya UAE', 'عباية مصمّمة الإمارات', 'Abaya designer EAU', 'Abaya designer EAU', 'Abaya de diseñador EAU', 'Дизайнерская абайя ОАЭ', '设计师阿巴亚阿联酋', 'Designer-Abaya VAE', 'Designer abaya VAE', 'Abaya de designer EAU'],
  ['Luxury Abaya UAE', 'عباية فاخرة الإمارات', 'Abaya de luxe EAU', 'Abaya di lusso EAU', 'Abaya de lujo EAU', 'Роскошная абайя ОАЭ', '奢华阿巴亚阿联酋', 'Luxus-Abaya VAE', 'Luxe abaya VAE', 'Abaya de luxo EAU'],
  ['Abu Dhabi Abaya', 'عباية أبوظبي', 'Abaya Abou Dabi', 'Abaya Abu Dhabi', 'Abaya Abu Dabi', 'Абайя Абу-Даби', '阿布扎比阿巴亚', 'Abu-Dhabi-Abaya', 'Abu Dhabi abaya', 'Abaya Abu Dhabi'],
  ['Made in Abu Dhabi', 'صُنع في أبوظبي', 'Fabriqué à Abou Dabi', 'Prodotto a Abu Dhabi', 'Hecho en Abu Dabi', 'Сделано в Абу-Даби', '阿布扎比制造', 'Hergestellt in Abu Dhabi', 'Gemaakt in Abu Dhabi', 'Feito em Abu Dhabi'],
  ['United Arab Emirates abaya', 'عباية الإمارات العربية المتحدة', 'Abaya Émirats arabes unis', 'Abaya Emirati Arabi Uniti', 'Abaya Emiratos Árabes Unidos', 'Абайя Объединённых Арабских Эмиратов', '阿拉伯联合酋长国阿巴亚', 'Abaya Vereinigte Arabische Emirate', 'Abaya Verenigde Arabische Emiraten', 'Abaya Emirados Árabes Unidos'],
  ['United Arab Emirates Fashion', 'أزياء الإمارات العربية المتحدة', 'Mode Émirats arabes unis', 'Moda Emirati Arabi Uniti', 'Moda Emiratos Árabes Unidos', 'Мода Объединённых Арабских Эмиратов', '阿拉伯联合酋长国时尚', 'Mode Vereinigte Arabische Emirate', 'Mode Verenigde Arabische Emiraten', 'Moda Emirados Árabes Unidos'],
  ['UAE Fashion Brand', 'علامة أزياء الإمارات', 'Marque de mode EAU', 'Brand di moda EAU', 'Marca de moda EAU', 'Модный бренд ОАЭ', '阿联酋时尚品牌', 'Modebrand VAE', 'Modebrand VAE', 'Marca de moda EAU'],
  ['Luxury Gulf Fashion', 'أزياء خليجية فاخرة', 'Mode du Golfe de luxe', 'Moda del Golfo di lusso', 'Moda del Golfo de lujo', 'Роскошная мода Персидского залива', '奢华海湾时尚', 'Luxus-Golf-Mode', 'Luxe Golf mode', 'Moda do Golfo de luxo'],
  ['Emirati Craftsmanship', 'حرفية إماراتية', 'Savoir-faire émirati', 'Artigianato emiratino', 'Artesanía emiratí', 'Эмиратское мастерство', '阿联酋工艺', 'Emiratische Handwerkskunst', 'Emiratisch vakmanschap', 'Artesanato emirati'],
  ['Khous Weaving', 'نسيج الخوص', 'Tissage Khous', 'Tessitura Khous', 'Tejido Khous', 'Плетение Khous', 'Khous 编织', 'Khous-Weberei', 'Khous weven', 'Tecelagem Khous'],
  ['Al Khous', 'الخوص', 'Al Khous', 'Al Khous', 'Al Khous', 'Al Khous', 'Al Khous', 'Al Khous', 'Al Khous', 'Al Khous'],
  ['Al Khous weaving', 'نسيج الخوص', 'Tissage Al Khous', 'Tessitura Al Khous', 'Tejido Al Khous', 'Плетение Al Khous', 'Al Khous 编织', 'Al Khous-Weberei', 'Al Khous weven', 'Tecelagem Al Khous'],
  ['Khous abaya', 'عباية الخوص', 'Abaya Khous', 'Abaya Khous', 'Abaya Khous', 'Абайя Khous', 'Khous 阿巴亚', 'Khous-Abaya', 'Khous abaya', 'Abaya Khous'],
  ['Palm Frond Weaving', 'نسيج سعف النخيل', 'Tissage de palmes', 'Tessitura di fronde di palma', 'Tejido de hojas de palma', 'Плетение из пальмовых листьев', '棕榈叶编织', 'Palmwedel-Weberei', 'Palmblad weven', 'Tecelagem de folhas de palmeira'],
  ['Handwoven Trim', 'حافة منسوجة يدوياً', 'Galon tissé à la main', 'Bordo tessuto a mano', 'Borde tejido a mano', 'Ручная отделка', '手工编织饰边', 'Handgewebte Verzierung', 'Handgeweven afwerking', 'Acabamento tecido à mão'],
  ['handwoven trim abaya', 'عباية بحافة منسوجة يدوياً', 'Abaya à galon tissé à la main', 'Abaya con bordo tessuto a mano', 'Abaya con borde tejido a mano', 'Абайя с ручной отделкой', '手工饰边阿巴亚', 'Abaya mit handgewebter Verzierung', 'Abaya met handgeweven afwerking', 'Abaya com acabamento tecido à mão'],
  ['Cultural Craftsmanship', 'حرفية ثقافية', 'Savoir-faire culturel', 'Artigianato culturale', 'Artesanía cultural', 'Культурное мастерство', '文化传承工艺', 'Kulturelle Handwerkskunst', 'Cultureel vakmanschap', 'Artesanato cultural'],
  ['Personalised Abaya', 'عباية مخصّصة', 'Abaya personnalisée', 'Abaya personalizzata', 'Abaya personalizada', 'Персонализированная абайя', '定制阿巴亚', 'Personalisierte Abaya', 'Gepersonaliseerde abaya', 'Abaya personalizada'],
  ['Custom Abaya', 'عباية حسب الطلب', 'Abaya sur mesure', 'Abaya su misura', 'Abaya a medida', 'Абайя на заказ', '定制阿巴亚', 'Maßanfertigung Abaya', 'Abaya op maat', 'Abaya sob medida'],
  ['Luxury Modest Wear', 'ملابس محتشمة فاخرة', 'Tenue modeste de luxe', 'Abbigliamento modesto di lusso', 'Ropa modesta de lujo', 'Роскошная скромная одежда', '奢华端庄服饰', 'Luxuriöse bescheidene Mode', 'Luxe bescheiden kleding', 'Vestuário modesto de luxo'],
  ['Luxury Modest Fashion', 'أزياء محتشمة فاخرة', 'Mode modeste de luxe', 'Moda modesta di lusso', 'Moda modesta de lujo', 'Роскошная скромная мода', '奢华端庄时尚', 'Luxus-Modest-Fashion', 'Luxe bescheiden mode', 'Moda modesta de luxo'],
  ["Luxury Women\\'s Outerwear", 'ملابس خارجية نسائية فاخرة', "Vêtements d\\'extérieur féminins de luxe", 'Capospalla femminili di lusso', 'Ropa exterior femenina de lujo', 'Роскошная женская верхняя одежда', '奢华女士外套', 'Luxuriöse Damen-Oberbekleidung', 'Luxe dames outerwear', 'Roupa exterior feminina de luxo'],
  ["Women\\'s Luxury Fashion", 'أزياء نسائية فاخرة', 'Mode féminine de luxe', 'Moda femminile di lusso', 'Moda femenina de lujo', 'Роскошная женская мода', '奢华女装', 'Luxuriöse Damenmode', 'Luxe damesmode', 'Moda feminina de luxo'],
  ['Timeless Abaya', 'عباية خالدة', 'Abaya intemporelle', 'Abaya senza tempo', 'Abaya atemporal', 'Вневременная абайя', '经典阿巴亚', 'Zeitlose Abaya', 'Tijdloze abaya', 'Abaya atemporal'],
  ['Contemporary Luxury Fashion', 'أزياء فاخرة معاصرة', 'Mode de luxe contemporaine', 'Moda di lusso contemporanea', 'Moda de lujo contemporánea', 'Современная роскошная мода', '当代奢华时尚', 'Zeitgenössische Luxusmode', 'Eigentijdse luxe mode', 'Moda de luxo contemporânea'],
  ['modest fashion', 'أزياء محتشمة', 'Mode modeste', 'Moda modesta', 'Moda modesta', 'Скромная мода', '端庄时尚', 'bescheidene Mode', 'bescheiden mode', 'moda modesta'],
  ['abaya in Abu Dhabi', 'عباية في أبوظبي', 'abaya à Abou Dabi', 'abaya a Abu Dhabi', 'abaya en Abu Dabi', 'абайя в Абу-Даби', '阿布扎比阿巴亚', 'Abaya in Abu Dhabi', 'abaya in Abu Dhabi', 'abaya em Abu Dhabi'],
  ['abaya in UAE', 'عباية في الإمارات', 'abaya aux EAU', 'abaya negli EAU', 'abaya en EAU', 'абайя в ОАЭ', '阿联酋阿巴亚', 'Abaya in VAE', 'abaya in VAE', 'abaya nos EAU'],
  ['abaya from Abu Dhabi', 'عباية من أبوظبي', "abaya d\\'Abou Dabi", 'abaya da Abu Dhabi', 'abaya de Abu Dabi', 'абайя из Абу-Даби', '来自阿布扎比的阿巴亚', 'Abaya aus Abu Dhabi', 'abaya uit Abu Dhabi', 'abaya de Abu Dhabi'],
  ['abaya from UAE', 'عباية من الإمارات', 'abaya des EAU', 'abaya dagli EAU', 'abaya de EAU', 'абайя из ОАЭ', '来自阿联酋的阿巴亚', 'Abaya aus VAE', 'abaya uit VAE', 'abaya dos EAU'],
  ['abaya from Dubai', 'عباية من دبي', 'abaya de Dubai', 'abaya da Dubai', 'abaya de Dubai', 'абайя из Dubai', '来自迪拜的阿巴亚', 'Abaya aus Dubai', 'abaya uit Dubai', 'abaya de Dubai'],
  ['abaya in Dubai', 'عباية في دبي', 'abaya à Dubai', 'abaya a Dubai', 'abaya en Dubai', 'абайя в Dubai', '迪拜阿巴亚', 'Abaya in Dubai', 'abaya in Dubai', 'abaya em Dubai'],
  ['nice abaya', 'عباية جميلة', 'belle abaya', 'bella abaya', 'bonita abaya', 'красивая абайя', '好看的阿巴亚', 'schöne Abaya', 'mooie abaya', 'bonita abaya'],
  ['trendy abayas', 'عبايات عصرية', 'abayas tendance', 'abaya di tendenza', 'abayas de moda', 'модные абай', '潮流阿巴亚', 'trendige Abayas', 'trendy abayas', 'abayas da moda'],
  ['abayat', 'عبايات', 'abayat', 'abayat', 'abayat', 'абайат', '阿巴亚特', 'abayat', 'abayat', 'abayat'],
  ['abayas', 'عبايات', 'abayas', 'abaya', 'abayas', 'абай', '阿巴亚', 'Abayas', 'abayas', 'abayas'],
  ['classy abaya', 'عباية راقية', 'abaya chic', 'abaya di classe', 'abaya con clase', 'стильная абайя', '精致阿巴亚', 'stilvolle Abaya', 'stijlvolle abaya', 'abaya elegante'],
  ['oversized abaya', 'عباية واسعة', 'abaya oversize', 'abaya oversize', 'abaya oversize', 'оверсайз абайя', '宽松阿巴亚', 'Oversize-Abaya', 'oversized abaya', 'abaya oversized'],
  ['daily abaya', 'عباية يومية', 'abaya quotidienne', 'abaya quotidiana', 'abaya diaria', 'повседневная абайя', '日常阿巴亚', 'Alltags-Abaya', 'dagelijkse abaya', 'abaya diária'],
  ['beautiful abaya', 'عباية جميلة', 'belle abaya', 'bella abaya', 'hermosa abaya', 'красивая абайя', '美丽阿巴亚', 'schöne Abaya', 'mooie abaya', 'linda abaya'],
  ['heritage abaya', 'عباية تراثية', 'abaya patrimoniale', 'abaya heritage', 'abaya patrimonial', 'абайя наследия', '传承阿巴亚', 'Heritage-Abaya', 'erfgoed abaya', 'abaya patrimonial'],
  ['Abu Dhabi culture', 'ثقافة أبوظبي', 'Culture Abou Dabi', 'Cultura Abu Dhabi', 'Cultura Abu Dabi', 'Культура Абу-Даби', '阿布扎比文化', 'Kultur Abu Dhabi', 'Abu Dhabi cultuur', 'Cultura Abu Dhabi'],
  ['Dubai culture', 'ثقافة دبي', 'Culture Dubai', 'Cultura Dubai', 'Cultura Dubai', 'Культура Dubai', '迪拜文化', 'Kultur Dubai', 'Dubai cultuur', 'Cultura Dubai'],
  ['abaya awards', 'جوائز العباية', 'prix abaya', 'premi abaya', 'premios abaya', 'награды абай', '阿巴亚奖项', 'Abaya-Auszeichnungen', 'abaya awards', 'prémios abaya'],
  ['heritage design', 'تصميم تراثي', 'design patrimonial', 'design heritage', 'diseño patrimonial', 'дизайн наследия', '传承设计', 'Heritage-Design', 'erfgoed design', 'design patrimonial'],
  ['unique abaya', 'عباية فريدة', 'abaya unique', 'abaya unica', 'abaya única', 'уникальная абайя', '独特阿巴亚', 'einzigartige Abaya', 'unieke abaya', 'abaya única'],
  ['special abaya', 'عباية مميزة', 'abaya spéciale', 'abaya speciale', 'abaya especial', 'особенная абайя', '特别款阿巴亚', 'besondere Abaya', 'bijzondere abaya', 'abaya especial'],
  ['niche abaya brand', 'علامة عباية متخصصة', 'marque abaya de niche', 'brand abaya di nicchia', 'marca abaya de nicho', 'нишевый бренд абай', '小众阿巴亚品牌', 'Nischen-Abaya-Marke', 'niche abaya merk', 'marca abaya de nicho'],
  ['new abaya brand', 'علامة عباية جديدة', 'nouvelle marque abaya', 'nuovo brand abaya', 'nueva marca abaya', 'новый бренд абай', '新阿巴亚品牌', 'neue Abaya-Marke', 'nieuw abaya merk', 'nova marca abaya'],
  ['navy blue abaya', 'عباية كحلية', 'abaya bleu marine', 'abaya blu navy', 'abaya azul marino', 'тёмно-синяя абайя', '藏青色阿巴亚', 'marineblaue Abaya', 'marineblauwe abaya', 'abaya azul-marinho'],
  ['black abaya', 'عباية سوداء', 'abaya noire', 'abaya nera', 'abaya negra', 'чёрная абайя', '黑色阿巴亚', 'schwarze Abaya', 'zwarte abaya', 'abaya preta'],
  ['cape', 'كاب', 'cape', 'mantella', 'capa', 'накидка', '斗篷', 'Cape', 'cape', 'capa'],
  ['jacket', 'جاكيت', 'veste', 'giacca', 'chaqueta', 'жакет', '夹克', 'Jacke', 'jas', 'casaco'],
  ['luxury cape', 'كاب فاخر', 'cape de luxe', 'mantella di lusso', 'capa de lujo', 'роскошная накидка', '奢华斗篷', 'Luxus-Cape', 'luxe cape', 'capa de luxo'],
  ['heritage cape', 'كاب تراثي', 'cape patrimoniale', 'mantella heritage', 'capa patrimonial', 'накидка наследия', '传承斗篷', 'Heritage-Cape', 'erfgoed cape', 'capa patrimonial'],
  ['UAE cape', 'كاب الإمارات', 'cape EAU', 'mantella EAU', 'capa EAU', 'накидка ОАЭ', '阿联酋斗篷', 'VAE-Cape', 'VAE cape', 'capa EAU'],
  ['Abu Dhabi cape', 'كاب أبوظبي', 'cape Abou Dabi', 'mantella Abu Dhabi', 'capa Abu Dabi', 'накидка Абу-Даби', '阿布扎比斗篷', 'Abu-Dhabi-Cape', 'Abu Dhabi cape', 'capa Abu Dhabi'],
  ['cultural heritage', 'تراث ثقافي', 'patrimoine culturel', 'patrimonio culturale', 'patrimonio cultural', 'культурное наследие', '文化遗产', 'kulturelles Erbe', 'cultureel erfgoed', 'património cultural'],
  ['abaya design', 'تصميم العباية', 'design abaya', 'design abaya', 'diseño abaya', 'дизайн абай', '阿巴亚设计', 'Abaya-Design', 'abaya design', 'design abaya'],
  ['Abu Dhabi heritage', 'تراث أبوظبي', 'Patrimoine Abou Dabi', 'Eredità Abu Dhabi', 'Patrimonio Abu Dabi', 'Наследие Абу-Даби', '阿布扎比传承', 'Erbe Abu Dhabi', 'Abu Dhabi erfgoed', 'Património Abu Dhabi'],
  ['international abaya', 'عباية عالمية', 'abaya internationale', 'abaya internazionale', 'abaya internacional', 'международная абайя', '国际阿巴亚', 'internationale Abaya', 'internationale abaya', 'abaya internacional'],
  ['luxury Gulf fashion', 'أزياء خليجية فاخرة', 'mode du Golfe de luxe', 'moda del Golfo di lusso', 'moda del Golfo de lujo', 'роскошная мода Персидского залива', '奢华海湾时尚', 'Luxus-Golf-Mode', 'luxe Golf mode', 'moda do Golfo de luxo'],
  ['long blazer', 'بليزر طويل', 'blazer long', 'blazer lungo', 'blazer largo', 'длинный блейзер', '长款西装', 'langer Blazer', 'lange blazer', 'blazer comprido'],
  ["women's long blazer", 'بليزر طويل نسائي', 'blazer long femme', 'blazer lungo donna', 'blazer largo mujer', 'женский длинный блейзер', '女士长款西装', 'langer Damenblazer', 'lange damesblazer', 'blazer comprido feminino'],
  ['structured long blazer', 'بليزر طويل منظّم', 'blazer long structuré', 'blazer lungo strutturato', 'blazer largo estructurado', 'структурированный длинный блейзер', '结构化长款西装', 'strukturierter langer Blazer', 'gestructureerde lange blazer', 'blazer comprido estruturado'],
  ['modest long blazer', 'بليزر طويل محتشم', 'blazer long modeste', 'blazer lungo modesto', 'blazer largo modesto', 'скромный длинный блейзер', '端庄长款西装', 'bescheidener langer Blazer', 'bescheiden lange blazer', 'blazer comprido modesto'],
  ['luxury long blazer', 'بليزر طويل فاخر', 'blazer long de luxe', 'blazer lungo di lusso', 'blazer largo de lujo', 'роскошный длинный блейзер', '奢华长款西装', 'luxuriöser langer Blazer', 'luxe lange blazer', 'blazer comprido de luxo'],
  ['contemporary blazer abaya', 'عباية بليزر معاصرة', 'abaya blazer contemporaine', 'abaya blazer contemporanea', 'abaya blazer contemporánea', 'современная абайя-блейзер', '当代西装阿巴亚', 'zeitgenössische Blazer-Abaya', 'eigentijdse blazer abaya', 'abaya blazer contemporânea'],
  ['black abaya for dinners', 'عباية سوداء للعشاء', 'abaya noire pour dîners', 'abaya nera per cene', 'abaya negra para cenas', 'чёрная абайя для ужинов', '晚宴黑色阿巴亚', 'schwarze Abaya für Abendessen', 'zwarte abaya voor diners', 'abaya preta para jantares'],
  ['black abaya for work', 'عباية سوداء للعمل', 'abaya noire pour le travail', 'abaya nera per il lavoro', 'abaya negra para el trabajo', 'чёрная абайя для работы', '通勤黑色阿巴亚', 'schwarze Abaya für die Arbeit', 'zwarte abaya voor werk', 'abaya preta para trabalho'],
  ['black abaya for business', 'عباية سوداء للأعمال', 'abaya noire business', 'abaya nera business', 'abaya negra de negocios', 'деловая чёрная абайя', '商务黑色阿巴亚', 'schwarze Business-Abaya', 'zwarte business abaya', 'abaya preta business'],
  ['GCC business women fashion', 'أزياء سيدات الأعمال في الخليج', 'mode femmes d’affaires GCC', 'moda donne business GCC', 'moda mujeres de negocios GCC', 'мода деловых женщин GCC', '海湾职业女性时尚', 'GCC-Business-Frauenmode', 'GCC business women mode', 'moda mulheres de negócios GCC'],
  ['expat fashion GCC', 'أزياء المغتربين في الخليج', 'mode expat GCC', 'moda expat GCC', 'moda expat GCC', 'мода экспатов GCC', '海湾外籍人士时尚', 'Expat-Mode GCC', 'expat mode GCC', 'moda expat GCC'],
  ['modest fashion GCC', 'أزياء محتشمة الخليج', 'mode modeste GCC', 'moda modesta GCC', 'moda modesta GCC', 'скромная мода GCC', '海湾端庄时尚', 'bescheidene Mode GCC', 'bescheiden mode GCC', 'moda modesta GCC'],
  ['black abaya for travel', 'عباية سوداء للسفر', 'abaya noire de voyage', 'abaya nera da viaggio', 'abaya negra de viaje', 'чёрная дорожная абайя', '旅行黑色阿巴亚', 'schwarze Reise-Abaya', 'zwarte reisabaya', 'abaya preta de viagem'],
  ['high end abaya', 'عباية فاخرة راقية', 'abaya haut de gamme', 'abaya di alta gamma', 'abaya de alta gama', 'люксовая абайя', '高端长袍', 'High-End-Abaya', 'high end abaya', 'abaya de alta gama'],
  ['most beautiful abaya', 'أجمل عباية', 'plus belle abaya', 'abaya più bella', 'abaya más bella', 'самая красивая абайя', '最美长袍', 'schönste Abaya', 'mooiste abaya', 'abaya mais bela'],
  ['abaya trends', 'اتجاهات العباية', 'tendances abaya', 'tendenze abaya', 'tendencias abaya', 'тренды абай', '长袍趋势', 'Abaya-Trends', 'abaya trends', 'tendências abaya'],
  ['abaya in all colors', 'عباية بجميع الألوان', 'abaya toutes couleurs', 'abaya tutti i colori', 'abaya todos los colores', 'абайя всех цветов', '全色长袍', 'Abaya alle Farben', 'abaya alle kleuren', 'abaya todas as cores'],
  ['cotton abaya', 'عباية قطنية', 'abaya coton', 'abaya cotone', 'abaya algodón', 'хлопковая абайя', '棉质长袍', 'Baumwoll-Abaya', 'katoenen abaya', 'abaya algodão'],
  ['open abaya', 'عباية مفتوحة', 'abaya ouverte', 'abaya aperta', 'abaya abierta', 'открытая абайя', '开襟长袍', 'offene Abaya', 'open abaya', 'abaya aberta'],
  ['closed abaya', 'عباية مغلقة', 'abaya fermée', 'abaya chiusa', 'abaya cerrada', 'закрытая абайя', '闭合长袍', 'geschlossene Abaya', 'gesloten abaya', 'abaya fechada'],
  ['abaya cuff', 'أسورة العباية', 'manchette abaya', 'polsino abaya', 'puño abaya', 'манжет абайи', '长袍袖口', 'Abaya-Manschette', 'abaya manchet', 'punho abaya'],
  ['A-line abaya', 'عباية A-line', 'abaya A-line', 'abaya A-line', 'abaya A-line', 'абайя A-line', 'A字长袍', 'A-Linien-Abaya', 'A-lijn abaya', 'abaya A-line'],
  ['wide abaya', 'عباية واسعة', 'abaya large', 'abaya ampia', 'abaya ancha', 'широкая абайя', '宽版长袍', 'weite Abaya', 'wijde abaya', 'abaya larga'],
  ['straight abaya', 'عباية مستقيمة', 'abaya droite', 'abaya dritta', 'abaya recta', 'прямая абайя', '直筒长袍', 'gerade Abaya', 'rechte abaya', 'abaya reta'],
  ['sexy abaya', 'عباية أنيقة جذابة', 'abaya sensuelle', 'abaya sensuale', 'abaya sensual', 'соблазнительная абайя', '魅力长袍', 'sinnliche Abaya', 'sexy abaya', 'abaya sensual'],
  ['new abaya', 'عباية جديدة', 'nouvelle abaya', 'nuova abaya', 'abaya nueva', 'новая абайя', '新款长袍', 'neue Abaya', 'nieuwe abaya', 'abaya nova'],
  ['new collection', 'مجموعة جديدة', 'nouvelle collection', 'nuova collezione', 'nueva colección', 'новая коллекция', '新系列', 'neue Kollektion', 'nieuwe collectie', 'nova coleção'],
  ['fashion collection', 'مجموعة أزياء', 'collection mode', 'collezione moda', 'colección moda', 'модная коллекция', '时尚系列', 'Modekollektion', 'modecollectie', 'coleção moda'],
  ['Dutch designer', 'مصمم هولندي', 'créateur néerlandais', 'designer olandese', 'diseñador holandés', 'голландский дизайнер', '荷兰设计师', 'niederländischer Designer', 'Nederlandse designer', 'designer holandês'],
  ['Paris Fashion Week', 'أسبوع الموضة باريس', 'Semaine de la mode Paris', 'Settimana della moda Parigi', 'Semana de la moda París', 'Неделя моды Париж', '巴黎时装周', 'Paris Fashion Week', 'Paris Fashion Week', 'Semana de moda Paris'],
  ['Milan Fashion Week', 'أسبوع الموضة ميلانو', 'Semaine de la mode Milan', 'Settimana della moda Milano', 'Semana de la moda Milán', 'Неделя моды Милан', '米兰时装周', 'Mailand Fashion Week', 'Milaan Fashion Week', 'Semana de moda Milão'],
  ['London Fashion Week', 'أسبوع الموضة لندن', 'Semaine de la mode Londres', 'Settimana della moda Londra', 'Semana de la moda Londres', 'Неделя моды Лондон', '伦敦时装周', 'London Fashion Week', 'Londen Fashion Week', 'Semana de moda Londres'],
  ['New York Fashion Week', 'أسبوع الموضة نيويورك', 'Semaine de la mode New York', 'Settimana della moda New York', 'Semana de la moda Nueva York', 'Неделя моды Нью-Йорк', '纽约时装周', 'New York Fashion Week', 'New York Fashion Week', 'Semana de moda Nova Iorque'],
  ['Dubai Fashion Week', 'أسبوع الموضة دبي', 'Semaine de la mode Dubaï', 'Settimana della moda Dubai', 'Semana de la moda Dubái', 'Неделя моды Дубай', '迪拜时装周', 'Dubai Fashion Week', 'Dubai Fashion Week', 'Semana de moda Dubai'],
]
const SHARED_ABAYA_KEYWORD_I18N = rowsToKw(SHARED_ABAYA_KEYWORD_ROWS)

/** Flat deduplicated list of shared abaya schema keywords for a locale. */
export function getLocalizedAbayaSchemaKeywordTerms(locale: AppLocale): string[] {
  if (locale === 'id') return [...SHARED_ABAYA_KEYWORDS_ID]
  if (locale === 'ms') return [...SHARED_ABAYA_KEYWORDS_MS]
  const terms = new Set<string>()
  for (const row of SHARED_ABAYA_KEYWORD_I18N) {
    terms.add(row[locale])
  }
  return [...terms]
}

/** Product-specific abaya schema keyword variants. */
export function buildAbayaProductKeywordVariants(
  product: Pick<Product, 'name' | 'slug' | 'colors' | 'category'>,
  colorName: string | undefined,
  locale: AppLocale,
): string[] {
  const color = colorName?.trim() || product.colors[0]?.name || ''
  const sku = resolveProductSku(product, color)
  const type = ABAYA_TYPE[locale]

  return [
    product.name,
    `${BRAND_NAME} ${product.name}`,
    `${product.name} ${type}`,
    color ? `${color} ${type}` : '',
    sku ?? '',
    `${BRAND_NAME} ${type}`,
    `${LUXURY_WORD[locale]} ${product.name}`,
  ].filter(Boolean)
}
