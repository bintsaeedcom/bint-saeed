import type { AppLocale } from '@/lib/i18n/routing'
import { LOCALE_GEO, BRAND_NAME } from '@/lib/i18n/brandProperNouns'
import type { Product } from '@/data/products'
import { getProductSlug } from '@/lib/products/links'
import { resolveProductSku } from '@/lib/products/sku'
import {
  OUR_OPTIMISED_KEYWORDS,
  NOTHING_HILL_OPTIMISED_KEYWORDS,
  MAYFAIR_OPTIMISED_KEYWORDS,
} from './optimisedKeywords'
import { SCHEMA_AUGMENT_ROWS } from './schemaAugmentKeywordsI18n'
import { indonesiaKeywordFromEn } from '@/lib/i18n/indonesiaKeywordFromEn'
import { malaysiaKeywordFromEn } from '@/lib/i18n/malaysiaKeywordFromEn'

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
  id?: string,
  ms?: string,
): Record<AppLocale, string> {
  return { en, ar, fr, it, es, ru, zh, de, nl, pt, id: id ?? indonesiaKeywordFromEn(en), ms: ms ?? malaysiaKeywordFromEn(en) }
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


const GCC_UAE_ROWS: KwRow[] = [
  ['Luxury Kaftan UAE', 'قفطان فاخر الإمارات', 'Caftan de luxe EAU', 'Kaftan di lusso EAU', 'Caftán de lujo EAU', 'Роскошный кафтан ОАЭ', '奢华长袍阿联酋', 'Luxus-Kaftan VAE', 'Luxe kaftan VAE', 'Kaftan de luxo EAU'],
  ['Designer Kaftan Abu Dhabi', 'قفطان مصمّم أبوظبي', 'Caftan designer Abou Dabi', 'Kaftan designer Abu Dhabi', 'Caftán de diseñador Abu Dabi', 'Дизайнерский кафтан Абу-Даби', '设计师长袍阿布扎比', 'Designer-Kaftan Abu Dhabi', 'Designer kaftan Abu Dhabi', 'Kaftan de designer Abu Dhabi'],
  ['Bint Saeed Abu Dhabi', 'Bint Saeed أبوظبي', 'Bint Saeed Abou Dabi', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dabi', 'Bint Saeed Абу-Даби', 'Bint Saeed 阿布扎比', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dhabi'],
  ['Eid Kaftan', 'قفطان العيد', 'Caftan Aïd', 'Kaftan Eid', 'Caftán Eid', 'Кафтан на Ид', '开斋节长袍', 'Eid-Kaftan', 'Eid kaftan', 'Kaftan Eid'],
  ['Made in Abu Dhabi', 'صُنع في أبوظبي', 'Fabriqué à Abou Dabi', 'Prodotto a Abu Dhabi', 'Hecho en Abu Dabi', 'Сделано в Абу-Даби', '阿布扎比制造', 'Hergestellt in Abu Dhabi', 'Gemaakt in Abu Dhabi', 'Feito em Abu Dhabi'],
  ['Luxury Occasion Wear UAE', 'أزياء فاخرة للمناسبات الإمارات', 'Tenue de cérémonie de luxe EAU', 'Abbigliamento da cerimonia di lusso EAU', 'Ropa de ocasión de lujo EAU', 'Роскошная одежда для особых случаев ОАЭ', '奢华场合着装阿联酋', 'Luxuriöse Anlassmode VAE', 'Luxe gelegenheidskleding VAE', 'Vestuário de ocasião de luxo EAU'],
]

const EUROPEAN_ROWS: KwRow[] = [
  ['Luxury Chiffon Kaftan', 'قفطان شيفون فاخر', 'Caftan en mousseline de luxe', 'Kaftan in chiffon di lusso', 'Caftán de chiffon de lujo', 'Роскошный шифоновый кафтан', '奢华雪纺长袍', 'Luxus-Chiffon-Kaftan', 'Luxe chiffon kaftan', 'Kaftan de chiffon de luxo'],
  ['Elegant Occasion Wear', 'أزياء أنيقة للمناسبات', 'Tenue de cérémonie élégante', 'Abbigliamento da cerimonia elegante', 'Ropa de ocasión elegante', 'Элегантная одежда для особых случаев', '优雅场合着装', 'Elegante Anlassmode', 'Elegante gelegenheidskleding', 'Vestuário de ocasião elegante'],
  ['Wedding Guest Outfit', 'إطلالة ضيفة زفاف', 'Tenue d\'invitée de mariage', 'Outfit ospite di nozze', 'Look de invitada de boda', 'Образ гостьи свадьбы', '婚礼宾客造型', 'Hochzeitsgast-Outfit', 'Bruiloftsgast-outfit', 'Look de convidada de casamento'],
  ['Luxury Resort Wear', 'أزياء منتجعات فاخرة', 'Tenue resort de luxe', 'Resort wear di lusso', 'Ropa resort de lujo', 'Роскошная курортная одежда', '奢华度假装', 'Luxus-Resortwear', 'Luxe resort wear', 'Vestuário resort de luxo'],
  ['Evening Occasion Wear', 'أزياء مسائية للمناسبات', 'Tenue de soirée de cérémonie', 'Abbigliamento serale da cerimonia', 'Ropa de noche para ocasiones', 'Вечерняя одежда для особых случаев', '晚宴场合着装', 'Abendliche Anlassmode', 'Avondelijke gelegenheidskleding', 'Vestuário de noite para ocasiões'],
  ['Elegant Women\'s Occasion Dress', 'فستان نسائي أنيق للمناسبات', 'Robe de cérémonie féminine élégante', 'Abito da cerimonia femminile elegante', 'Vestido femenino elegante para ocasiones', 'Элегантное женское платье для особых случаев', '优雅女士场合连衣裙', 'Elegantes Damen-Anlasskleid', 'Elegante damesgelegenheidsjurk', 'Vestido feminino elegante para ocasiões'],
  ['Luxury Holiday Wardrobe', 'خزانة عطلات فاخرة', 'Garde-robe de vacances de luxe', 'Guardaroba vacanze di lusso', 'Armario vacacional de lujo', 'Роскошный праздничный гардероб', '奢华假日衣橱', 'Luxuriöse Urlaubsgarderobe', 'Luxe vakantiegarderobe', 'Guarda-roupa de férias de luxo'],
  ['Destination Wedding Guest Outfit', 'إطلالة ضيفة زفاف في وجهة سفر', 'Tenue d\'invitée pour mariage à destination', 'Outfit ospite per matrimonio in destinazione', 'Look de invitada en boda destino', 'Образ гостьи свадьбы в путешествии', '目的地婚礼宾客造型', 'Destination-Hochzeitsgast-Outfit', 'Destination bruiloftsgast-outfit', 'Look de convidada em casamento destino'],
  ['Contemporary Occasion Wear', 'أزياء معاصرة للمناسبات', 'Tenue de cérémonie contemporaine', 'Abbigliamento da cerimonia contemporaneo', 'Ropa de ocasión contemporánea', 'Современная одежда для особых случаев', '当代场合着装', 'Zeitgenössische Anlassmode', 'Eigentijdse gelegenheidskleding', 'Vestuário de ocasião contemporâneo'],
  ['Luxury Women\'s Fashion', 'أزياء نسائية فاخرة', 'Mode féminine de luxe', 'Moda femminile di lusso', 'Moda femenina de lujo', 'Роскошная женская мода', '奢华女装', 'Luxuriöse Damenmode', 'Luxe damesmode', 'Moda feminina de luxo'],
]

const BRAND_GEO_ROWS: KwRow[] = [
  ['Bint Saeed Abu Dhabi', 'Bint Saeed أبوظبي', 'Bint Saeed Abou Dabi', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dabi', 'Bint Saeed Абу-Даби', 'Bint Saeed 阿布扎比', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dhabi'],
  ['Bint Saeed Kaftan', 'قفطان Bint Saeed', 'Caftan Bint Saeed', 'Kaftan Bint Saeed', 'Caftán Bint Saeed', 'Кафтан Bint Saeed', 'Bint Saeed 长袍', 'Bint Saeed Kaftan', 'Bint Saeed kaftan', 'Kaftan Bint Saeed'],
  ['Bint Saeed United Arab Emirates', 'Bint Saeed الإمارات العربية المتحدة', 'Bint Saeed Émirats arabes unis', 'Bint Saeed Emirati Arabi Uniti', 'Bint Saeed Emiratos Árabes Unidos', 'Bint Saeed Объединённые Арабские Эмираты', 'Bint Saeed 阿拉伯联合酋长国', 'Bint Saeed Vereinigte Arabische Emirate', 'Bint Saeed Verenigde Arabische Emiraten', 'Bint Saeed Emirados Árabes Unidos'],
  ['Abu Dhabi Fashion Brand', 'علامة أزياء أبوظبي', 'Marque de mode Abou Dabi', 'Brand di moda Abu Dhabi', 'Marca de moda Abu Dabi', 'Модный бренд Абу-Даби', '阿布扎比时尚品牌', 'Modebrand Abu Dhabi', 'Modebrand Abu Dhabi', 'Marca de moda Abu Dhabi'],
  ['Luxury Fashion Abu Dhabi', 'أزياء فاخرة أبوظبي', 'Mode de luxe Abou Dabi', 'Moda di lusso Abu Dhabi', 'Moda de lujo Abu Dabi', 'Роскошная мода Абу-Даби', '阿布扎比奢华时尚', 'Luxusmode Abu Dhabi', 'Luxemode Abu Dhabi', 'Moda de luxo Abu Dhabi'],
  ['Designer Kaftan United Arab Emirates', 'قفطان مصمّم الإمارات', 'Caftan designer Émirats arabes unis', 'Kaftan designer Emirati Arabi Uniti', 'Caftán de diseñador Emiratos Árabes Unidos', 'Дизайнерский кафтан ОАЭ', '设计师长袍阿联酋', 'Designer-Kaftan Vereinigte Arabische Emirate', 'Designer kaftan Verenigde Arabische Emiraten', 'Kaftan de designer Emirados Árabes Unidos'],
  ['Made in Abu Dhabi', 'صُنع في أبوظبي', 'Fabriqué à Abou Dabi', 'Prodotto a Abu Dhabi', 'Hecho en Abu Dabi', 'Сделано в Абу-Даби', '阿布扎比制造', 'Hergestellt in Abu Dhabi', 'Gemaakt in Abu Dhabi', 'Feito em Abu Dhabi'],
  ['Contemporary Fashion Abu Dhabi', 'أزياء معاصرة أبوظبي', 'Mode contemporaine Abou Dabi', 'Moda contemporanea Abu Dhabi', 'Moda contemporánea Abu Dabi', 'Современная мода Абу-Даби', '阿布扎比当代时尚', 'Zeitgenössische Mode Abu Dhabi', 'Eigentijdse mode Abu Dhabi', 'Moda contemporânea Abu Dhabi'],
  ['Women\'s Luxury Clothing UAE', 'ملابس نسائية فاخرة الإمارات', 'Vêtements de luxe pour femmes EAU', 'Abbigliamento di lusso femminile EAU', 'Ropa de lujo femenina EAU', 'Роскошная женская одежда ОАЭ', '奢华女装阿联酋', 'Luxuriöse Damenbekleidung VAE', 'Luxe dameskleding VAE', 'Vestuário feminino de luxo EAU'],
  ['Abu Dhabi Occasion Wear', 'أزياء مناسبات أبوظبي', 'Tenue de cérémonie Abou Dabi', 'Abbigliamento da cerimonia Abu Dhabi', 'Ropa de ocasión Abu Dabi', 'Одежда для особых случаев Абу-Даби', '阿布扎比场合着装', 'Anlassmode Abu Dhabi', 'Gelegenheidskleding Abu Dhabi', 'Vestuário de ocasião Abu Dhabi'],
]

const OCCASION_ROWS: KwRow[] = [
  ['Wedding Guest Kaftan', 'قفطان ضيفة زفاف', 'Caftan invitée de mariage', 'Kaftan ospite di nozze', 'Caftán invitada de boda', 'Кафтан для гостьи свадьбы', '婚礼宾客长袍', 'Hochzeitsgast-Kaftan', 'Bruiloftsgast kaftan', 'Kaftan convidada de casamento'],
  ['Eid Kaftan', 'قفطان العيد', 'Caftan Aïd', 'Kaftan Eid', 'Caftán Eid', 'Кафтан на Ид', '开斋节长袍', 'Eid-Kaftan', 'Eid kaftan', 'Kaftan Eid'],
  ['Engagement Celebration Outfit', 'إطلالة احتفال خطوبة', 'Tenue de fiançailles', 'Outfit per festa di fidanzamento', 'Look de celebración de compromiso', 'Образ для помолвки', '订婚庆典造型', 'Verlobungsfeier-Outfit', 'Verlovingsviering outfit', 'Look de celebração de noivado'],
  ['Formal Dinner Outfit', 'إطلالة عشاء رسمي', 'Tenue de dîner formel', 'Outfit per cena formale', 'Look de cena formal', 'Образ для формального ужина', '正式晚宴造型', 'Formelles Dinner-Outfit', 'Formeel diner outfit', 'Look de jantar formal'],
  ['Destination Event Outfit', 'إطلالة مناسبة في وجهة سفر', 'Tenue pour événement en destination', 'Outfit per evento in destinazione', 'Look para evento en destino', 'Образ для мероприятия в путешествии', '目的地活动造型', 'Destination-Event-Outfit', 'Destination event outfit', 'Look para evento em destino'],
  ['Luxury Travel Wardrobe', 'خزانة سفر فاخرة', 'Garde-robe de voyage de luxe', 'Guardaroba da viaggio di lusso', 'Armario de viaje de lujo', 'Роскошный дорожный гардероб', '奢华旅行衣橱', 'Luxuriöse Reisegarderobe', 'Luxe reisgarderobe', 'Guarda-roupa de viagem de luxo'],
  ['Special Occasion Kaftan', 'قفطان مناسبات خاصة', 'Caftan occasion spéciale', 'Kaftan per occasione speciale', 'Caftán para ocasión especial', 'Кафтан для особого случая', '特殊场合长袍', 'Kaftan für besondere Anlässe', 'Speciale gelegenheid kaftan', 'Kaftan para ocasião especial'],
  ['Evening Occasion Wear', 'أزياء مسائية للمناسبات', 'Tenue de soirée de cérémonie', 'Abbigliamento serale da cerimonia', 'Ropa de noche para ocasiones', 'Вечерняя одежда для особых случаев', '晚宴场合着装', 'Abendliche Anlassmode', 'Avondelijke gelegenheidskleding', 'Vestuário de noite para ocasiões'],
  ['Elegant Daytime Dressing', 'أناقة نهارية راقية', 'Élégance de jour', 'Eleganza diurna', 'Elegancia diurna', 'Элегантный дневной стиль', '优雅日间穿搭', 'Elegantes Tagesstyling', 'Elegante dagelijkse stijl', 'Elegância diurna'],
  ['Celebration Wear', 'أزياء الاحتفالات', 'Tenue de célébration', 'Abbigliamento da celebrazione', 'Ropa de celebración', 'Праздничная одежда', '庆典着装', 'Festtagsmode', 'Vieringskleding', 'Vestuário de celebração'],
]

const DISCOVERY_ROWS: KwRow[] = [
  ['exclusive kaftan', 'قفطان حصري', 'caftan exclusif', 'kaftan esclusivo', 'caftán exclusivo', 'эксклюзивный кафтан', '独家长袍', 'exklusiver Kaftan', 'exclusieve kaftan', 'kaftan exclusivo'],
  ['exclusive brand', 'علامة حصرية', 'marque exclusive', 'brand esclusivo', 'marca exclusiva', 'эксклюзивный бренд', '独家品牌', 'exklusive Marke', 'exclusief merk', 'marca exclusiva'],
  ['Emirati designer', 'مصمّم إماراتي', 'designer émirati', 'designer emiratino', 'diseñador emiratí', 'эмиратский дизайнер', '阿联酋设计师', 'emiratischer Designer', 'Emiratisch designer', 'designer emirati'],
  ['daily kaftan', 'قفطان يومي', 'caftan quotidien', 'kaftan quotidiano', 'caftán diario', 'повседневный кафтан', '日常长袍', 'Alltags-Kaftan', 'dagelijkse kaftan', 'kaftan diário'],
  ['colored kaftan', 'قفطان ملوّن', 'caftan coloré', 'kaftan colorato', 'caftán de color', 'цветной кафтан', '彩色长袍', 'farbiger Kaftan', 'gekleurde kaftan', 'kaftan colorido'],
  ['chiffon kaftan', 'قفطان شيفون', 'caftan en mousseline', 'kaftan in chiffon', 'caftán de chiffon', 'шифоновый кафтан', '雪纺长袍', 'Chiffon-Kaftan', 'chiffon kaftan', 'kaftan de chiffon'],
  ['special kaftan', 'قفطان مميز', 'caftan spécial', 'kaftan speciale', 'caftán especial', 'особенный кафтан', '特别款长袍', 'besonderer Kaftan', 'bijzondere kaftan', 'kaftan especial'],
  ['Emirati brand', 'علامة إماراتية', 'marque émiratie', 'brand emiratino', 'marca emiratí', 'эмиратский бренд', '阿联酋品牌', 'emiratische Marke', 'Emiratisch merk', 'marca emirati'],
  ['best UAE brands', 'أفضل علامات الإمارات', 'meilleures marques EAU', 'migliori brand EAU', 'mejores marcas EAU', 'лучшие бренды ОАЭ', '阿联酋最佳品牌', 'beste VAE-Marken', 'beste VAE-merken', 'melhores marcas EAU'],
  ['UAE brands', 'علامات الإمارات', 'marques EAU', 'brand EAU', 'marcas EAU', 'бренды ОАЭ', '阿联酋品牌', 'VAE-Marken', 'VAE-merken', 'marcas EAU'],
  ['Middle Eastern brands', 'علامات الشرق الأوسط', 'marques du Moyen-Orient', 'brand del Medio Oriente', 'marcas de Oriente Medio', 'бренды Ближнего Востока', '中东品牌', 'Marken aus dem Nahen Osten', 'Midden-Oosterse merken', 'marcas do Médio Oriente'],
  ['GCC brands', 'علامات دول الخليج', 'marques du CCG', 'brand GCC', 'marcas GCC', 'бренды GCC', 'GCC品牌', 'GCC-Marken', 'GCC-merken', 'marcas GCC'],
  ['Saudi kaftan', 'قفطان سعودي', 'caftan saoudien', 'kaftan saudita', 'caftán saudí', 'саудовский кафтан', '沙特长袍', 'saudischer Kaftan', 'Saoedische kaftan', 'kaftan saudita'],
  ['long dress', 'فستان طويل', 'robe longue', 'abito lungo', 'vestido largo', 'длинное платье', '长裙', 'langes Kleid', 'lange jurk', 'vestido comprido'],
  ['evening wear', 'أزياء مسائية', 'tenue de soirée', 'abbigliamento serale', 'ropa de noche', 'вечерняя одежда', '晚装', 'Abendmode', 'avondkleding', 'vestuário de noite'],
  ['flowy dress', 'فستان انسيابي', 'robe fluide', 'abito fluente', 'vestido fluido', 'струящееся платье', '飘逸连衣裙', 'fließendes Kleid', 'vloeiende jurk', 'vestido fluido'],
  ['wedding dress', 'فستان زفاف', 'robe de mariée', 'abito da sposa', 'vestido de novia', 'свадебное платье', '婚纱', 'Brautkleid', 'bruidsjurk', 'vestido de noiva'],
  ['traditional clothes', 'ملابس تقليدية', 'vêtements traditionnels', 'abbigliamento tradizionale', 'ropa tradicional', 'традиционная одежда', '传统服饰', 'traditionelle Kleidung', 'traditionele kleding', 'roupa tradicional'],
  ['gewaad', 'ثوب تقليدي', 'robe traditionnelle', 'abito tradizionale', 'vestido tradicional', 'традиционное платье', '传统长袍', 'traditionelles Gewand', 'gewaad', 'vestido tradicional'],
  ['tuniek', 'تونيك', 'tunique', 'tunica', 'túnica', 'туника', '束腰长袍', 'Tunika', 'tuniek', 'túnica'],
  ['tunic', 'تونيك', 'tunique', 'tunica', 'túnica', 'туника', '束腰外衣', 'Tunika', 'tuniek', 'túnica'],
  ['wedding guest', 'ضيفة زفاف', 'invitée de mariage', 'ospite di nozze', 'invitada de boda', 'гостья свадьбы', '婚礼宾客', 'Hochzeitsgast', 'bruiloftsgast', 'convidada de casamento'],
  ['made to measure', 'حسب المقاس', 'sur mesure', 'su misura', 'a medida', 'пошив на заказ', '量身定制', 'Maßanfertigung', 'op maat gemaakt', 'feito à medida'],
  ['made to order', 'حسب الطلب', 'sur commande', 'su ordinazione', 'bajo pedido', 'на заказ', '定制订购', 'auf Bestellung', 'op bestelling', 'sob encomenda'],
  ['plus size dress', 'فستان مقاسات كبيرة', 'robe grande taille', 'abito taglie forti', 'vestido talla grande', 'платье больших размеров', '大码连衣裙', 'Plus-Size-Kleid', 'plus size jurk', 'vestido plus size'],
  ['plus size kaftan', 'قفطان مقاسات كبيرة', 'caftan grande taille', 'kaftan taglie forti', 'caftán talla grande', 'кафтан больших размеров', '大码长袍', 'Plus-Size-Kaftan', 'plus size kaftan', 'kaftan plus size'],
  ['plus size long dress', 'فستان طويل مقاسات كبيرة', 'robe longue grande taille', 'abito lungo taglie forti', 'vestido largo talla grande', 'длинное платье больших размеров', '大码长裙', 'langes Plus-Size-Kleid', 'lange plus size jurk', 'vestido comprido plus size'],
  ['plus size wedding guest', 'ضيفة زفاف مقاسات كبيرة', 'invitée de mariage grande taille', 'ospite di nozze taglie forti', 'invitada de boda talla grande', 'гостья свадьбы plus size', '大码婚礼宾客', 'Plus-Size-Hochzeitsgast', 'plus size bruiloftsgast', 'convidada de casamento plus size'],
  ['plus size party dress', 'فستان حفلات مقاسات كبيرة', 'robe de fête grande taille', 'abito da festa taglie forti', 'vestido de fiesta talla grande', 'праздничное платье больших размеров', '大码派对连衣裙', 'Plus-Size-Partykleid', 'plus size feestjurk', 'vestido de festa plus size'],
  ['party dress', 'فستان حفلات', 'robe de fête', 'abito da festa', 'vestido de fiesta', 'праздничное платье', '派对连衣裙', 'Partykleid', 'feestjurk', 'vestido de festa'],
  ['afternoon tea outfit', 'إطلالة شاي بعد الظهر', 'tenue pour le thé', 'outfit per il tè pomeridiano', 'look de té de tarde', 'образ для послеобеденного чая', '下午茶造型', 'Afternoon-Tea-Outfit', 'high tea outfit', 'look de chá da tarde'],
  ['flowy outfit', 'إطلالة انسيابية', 'tenue fluide', 'outfit fluente', 'look fluido', 'струящийся образ', '飘逸造型', 'fließendes Outfit', 'vloeiende outfit', 'look fluido'],
  ['flowy kaftan', 'قفطان انسيابي', 'caftan fluide', 'kaftan fluente', 'caftán fluido', 'струящийся кафтан', '飘逸长袍', 'fließender Kaftan', 'vloeiende kaftan', 'kaftan fluido'],
  ['summer kaftan', 'قفطان صيفي', 'caftan d\'été', 'kaftan estivo', 'caftán de verano', 'летний кафтан', '夏季长袍', 'Sommer-Kaftan', 'zomerkaftan', 'kaftan de verão'],
  ['winter kaftan', 'قفطان شتوي', 'caftan d\'hiver', 'kaftan invernale', 'caftán de invierno', 'зимний кафтан', '冬季长袍', 'Winter-Kaftan', 'winterkaftan', 'kaftan de inverno'],
  ['Dutch designer', 'مصمّم هولندي', 'designer néerlandais', 'designer olandese', 'diseñador holandés', 'голландский дизайнер', '荷兰设计师', 'niederländischer Designer', 'Nederlands designer', 'designer holandês'],
  ['Abu Dhabi dress', 'فستان أبوظبي', 'robe Abou Dabi', 'abito Abu Dhabi', 'vestido Abu Dabi', 'платье Абу-Даби', '阿布扎比连衣裙', 'Abu-Dhabi-Kleid', 'Abu Dhabi jurk', 'vestido Abu Dhabi'],
  ['UAE dress', 'فستان الإمارات', 'robe EAU', 'abito EAU', 'vestido EAU', 'платье ОАЭ', '阿联酋连衣裙', 'VAE-Kleid', 'VAE-jurk', 'vestido EAU'],
  ['Abu Dhabi kaftan', 'قفطان أبوظبي', 'caftan Abou Dabi', 'kaftan Abu Dhabi', 'caftán Abu Dabi', 'кафтан Абу-Даби', '阿布扎比长袍', 'Abu-Dhabi-Kaftan', 'Abu Dhabi kaftan', 'kaftan Abu Dhabi'],
  ['best brands Abu Dhabi', 'أفضل العلامات أبوظبي', 'meilleures marques Abou Dabi', 'migliori brand Abu Dhabi', 'mejores marcas Abu Dabi', 'лучшие бренды Абу-Даби', '阿布扎比最佳品牌', 'beste Marken Abu Dhabi', 'beste merken Abu Dhabi', 'melhores marcas Abu Dhabi'],
  ['top 10 GCC brands', 'أفضل 10 علامات خليجية', 'top 10 marques CCG', 'top 10 brand GCC', 'top 10 marcas GCC', 'топ-10 брендов GCC', 'GCC十大品牌', 'Top-10-GCC-Marken', 'top 10 GCC-merken', 'top 10 marcas GCC'],
  ['gold accent kaftan', 'قفطان بلمسات ذهبية', 'caftan aux accents dorés', 'kaftan con dettagli dorati', 'caftán con acentos dorados', 'кафтан с золотыми акцентами', '金色点缀长袍', 'Kaftan mit Goldakzenten', 'kaftan met goudaccenten', 'kaftan com detalhes dourados'],
  ['gold kaftan', 'قفطان ذهبي', 'caftan doré', 'kaftan dorato', 'caftán dorado', 'золотой кафтан', '金色长袍', 'goldener Kaftan', 'gouden kaftan', 'kaftan dourado'],
  ['gold logo', 'شعار ذهبي', 'logo doré', 'logo dorato', 'logo dorado', 'золотой логотип', '金色标志', 'goldenes Logo', 'gouden logo', 'logo dourado'],
  ['long dress national dress', 'فستان طويل زي وطني', 'robe longue tenue nationale', 'abito lungo abito nazionale', 'vestido largo traje nacional', 'длинное национальное платье', '长款民族服饰', 'langes nationales Kleid', 'lange nationale jurk', 'vestido comprido traje nacional'],
  ['UAE national dress', 'الزي الوطني الإماراتي', 'tenue nationale EAU', 'abito nazionale EAU', 'traje nacional EAU', 'национальный костюм ОАЭ', '阿联酋民族服饰', 'nationale Tracht VAE', 'VAE nationale kleding', 'traje nacional EAU'],
  ['Emirati heritage', 'التراث الإماراتي', 'patrimoine émirati', 'eredità emiratina', 'patrimonio emiratí', 'эмиратское наследие', '阿联酋传承', 'emiratisches Erbe', 'Emirati erfgoed', 'património emirati'],
  ['UAE heritage', 'تراث الإمارات', 'patrimoine EAU', 'eredità EAU', 'patrimonio EAU', 'наследие ОАЭ', '阿联酋传承', 'VAE-Erbe', 'VAE-erfgoed', 'património EAU'],
  ['Abu Dhabi culture', 'ثقافة أبوظبي', 'culture Abou Dabi', 'cultura Abu Dhabi', 'cultura Abu Dabi', 'культура Абу-Даби', '阿布扎比文化', 'Kultur Abu Dhabi', 'Abu Dhabi cultuur', 'cultura Abu Dhabi'],
  ['exclusive dress', 'فستان حصري', 'robe exclusive', 'abito esclusivo', 'vestido exclusivo', 'эксклюзивное платье', '独家连衣裙', 'exklusives Kleid', 'exclusieve jurk', 'vestido exclusivo'],
  ['designer dress', 'فستان مصمّم', 'robe designer', 'abito designer', 'vestido de diseñador', 'дизайнерское платье', '设计师连衣裙', 'Designer-Kleid', 'designer jurk', 'vestido de designer'],
  ['designer brand', 'علامة مصمّمة', 'marque designer', 'brand designer', 'marca de diseñador', 'дизайнерский бренд', '设计师品牌', 'Designer-Marke', 'designermerk', 'marca de designer'],
  ['exclusive designer', 'مصمّم حصري', 'designer exclusif', 'designer esclusivo', 'diseñador exclusivo', 'эксклюзивный дизайнер', '独家设计师', 'exklusiver Designer', 'exclusief designer', 'designer exclusivo'],
  ['GCC design', 'تصميم خليجي', 'design CCG', 'design GCC', 'diseño GCC', 'дизайн GCC', 'GCC设计', 'GCC-Design', 'GCC-design', 'design GCC'],
  ['GCC designer', 'مصمّم خليجي', 'designer CCG', 'designer GCC', 'diseñador GCC', 'дизайнер GCC', 'GCC设计师', 'GCC-Designer', 'GCC-designer', 'designer GCC'],
  ['contemporary brand', 'علامة معاصرة', 'marque contemporaine', 'brand contemporaneo', 'marca contemporánea', 'современный бренд', '当代品牌', 'zeitgenössische Marke', 'eigentijds merk', 'marca contemporânea'],
  ['UK kaftan', 'قفطان بريطاني', 'caftan UK', 'kaftan UK', 'caftán UK', 'кафтан UK', '英国长袍', 'UK-Kaftan', 'UK kaftan', 'kaftan UK'],
  ['European kaftan', 'قفطان أوروبي', 'caftan européen', 'kaftan europeo', 'caftán europeo', 'европейский кафтан', '欧洲长袍', 'europäischer Kaftan', 'Europese kaftan', 'kaftan europeu'],
  ['designer kaftan', 'قفطان مصمّم', 'caftan designer', 'kaftan designer', 'caftán de diseñador', 'дизайнерский кафтан', '设计师长袍', 'Designer-Kaftan', 'designer kaftan', 'kaftan de designer'],
  ['unique kaftan', 'قفطان فريد', 'caftan unique', 'kaftan unico', 'caftán único', 'уникальный кафтан', '独特长袍', 'einzigartiger Kaftan', 'unieke kaftan', 'kaftan único'],
  ['kaftan trends', 'اتجاهات القفطان', 'tendances caftan', 'tendenze kaftan', 'tendencias caftán', 'тренды кафтана', '长袍趋势', 'Kaftan-Trends', 'kaftan trends', 'tendências kaftan'],
  ['kaftan 2026', 'قفطان 2026', 'caftan 2026', 'kaftan 2026', 'caftán 2026', 'кафтан 2026', '2026长袍', 'Kaftan 2026', 'kaftan 2026', 'kaftan 2026'],
  ['fashion trends', 'اتجاهات الموضة', 'tendances mode', 'tendenze moda', 'tendencias de moda', 'модные тренды', '时尚趋势', 'Modetrends', 'modetrends', 'tendências de moda'],
  ['2026 fashion trends', 'اتجاهات الموضة 2026', 'tendances mode 2026', 'tendenze moda 2026', 'tendencias de moda 2026', 'модные тренды 2026', '2026时尚趋势', 'Modetrends 2026', 'modetrends 2026', 'tendências de moda 2026'],
  ['UAE fashion', 'أزياء الإمارات', 'mode EAU', 'moda EAU', 'moda EAU', 'мода ОАЭ', '阿联酋时尚', 'VAE-Mode', 'VAE-mode', 'moda EAU'],
  ['Abu Dhabi fashion', 'أزياء أبوظبي', 'mode Abou Dabi', 'moda Abu Dhabi', 'moda Abu Dabi', 'мода Абу-Даби', '阿布扎比时尚', 'Mode Abu Dhabi', 'mode Abu Dhabi', 'moda Abu Dhabi'],
  ['UAE fashion house', 'دار أزياء إماراتية', 'maison de mode EAU', 'casa di moda EAU', 'casa de moda EAU', 'дом моды ОАЭ', '阿联酋时尚品牌屋', 'Modehaus VAE', 'modehuis VAE', 'casa de moda EAU'],
  ['Abu Dhabi fashion house', 'دار أزياء أبوظبي', 'maison de mode Abou Dabi', 'casa di moda Abu Dhabi', 'casa de moda Abu Dabi', 'дом моды Абу-Даби', '阿布扎比时尚品牌屋', 'Modehaus Abu Dhabi', 'modehuis Abu Dhabi', 'casa de moda Abu Dhabi'],
  ['exclusive designs', 'تصاميم حصرية', 'créations exclusives', 'design esclusivi', 'diseños exclusivos', 'эксклюзивные дизайны', '独家设计', 'exklusive Designs', 'exclusieve designs', 'designs exclusivos'],
  ['Mayfair Kaftan', 'قفطان Mayfair', 'Caftan Mayfair', 'Kaftan Mayfair', 'Caftán Mayfair', 'Кафтан Mayfair', 'Mayfair 长袍', 'Mayfair Kaftan', 'Mayfair kaftan', 'Kaftan Mayfair'],
  ['Nothing Hill Kaftan', 'قفطان Nothing Hill', 'Caftan Nothing Hill', 'Kaftan Nothing Hill', 'Caftán Nothing Hill', 'Кафтан Nothing Hill', 'Nothing Hill 长袍', 'Nothing Hill Kaftan', 'Nothing Hill kaftan', 'Kaftan Nothing Hill'],
  ['travel kaftan', 'قفطان سفر', 'caftan de voyage', 'kaftan da viaggio', 'caftán de viaje', 'дорожный кафтан', '旅行长袍', 'Reise-Kaftan', 'reiskaftan', 'kaftan de viagem'],
  ['dinner dress', 'فستان عشاء', 'robe de dîner', 'abito da cena', 'vestido de cena', 'платье для ужина', '晚宴连衣裙', 'Abendkleid', 'dinerjurk', 'vestido de jantar'],
  ['afternoon tea dress', 'فستان شاي بعد الظهر', 'robe pour le thé', 'abito per il tè pomeridiano', 'vestido de té de tarde', 'платье для послеобеденного чая', '下午茶连衣裙', 'Afternoon-Tea-Kleid', 'high tea jurk', 'vestido de chá da tarde'],
  ['birthday dress', 'فستان عيد ميلاد', 'robe d\'anniversaire', 'abito di compleanno', 'vestido de cumpleaños', 'платье на день рождения', '生日连衣裙', 'Geburtstagskleid', 'verjaardagsjurk', 'vestido de aniversário'],
  ['birthday kaftan', 'قفطان عيد ميلاد', 'caftan d\'anniversaire', 'kaftan di compleanno', 'caftán de cumpleaños', 'кафтан на день рождения', '生日长袍', 'Geburtstags-Kaftan', 'verjaardagskaftan', 'kaftan de aniversário'],
  ['Dubai kaftan', 'قفطان دبي', 'caftan Dubai', 'kaftan Dubai', 'caftán Dubai', 'кафтан Dubai', '迪拜长袍', 'Dubai-Kaftan', 'Dubai kaftan', 'kaftan Dubai'],
  ['Dubai dress', 'فستان دبي', 'robe Dubai', 'abito Dubai', 'vestido Dubai', 'платье Dubai', '迪拜连衣裙', 'Dubai-Kleid', 'Dubai jurk', 'vestido Dubai'],
  ['Dubai brand', 'علامة دبي', 'marque Dubai', 'brand Dubai', 'marca Dubai', 'бренд Dubai', '迪拜品牌', 'Dubai-Marke', 'Dubai-merk', 'marca Dubai'],
  ['Dubai designer', 'مصمّم دبي', 'designer Dubai', 'designer Dubai', 'diseñador Dubai', 'дизайнер Dubai', '迪拜设计师', 'Dubai-Designer', 'Dubai-designer', 'designer Dubai'],
  ['UAE design', 'تصميم إماراتي', 'design EAU', 'design EAU', 'diseño EAU', 'дизайн ОАЭ', '阿联酋设计', 'VAE-Design', 'VAE-design', 'design EAU'],
  ['afternoon tea kaftan', 'قفطان شاي بعد الظهر', 'caftan pour le thé', 'kaftan per il tè pomeridiano', 'caftán de té de tarde', 'кафтан для послеобеденного чая', '下午茶长袍', 'Afternoon-Tea-Kaftan', 'high tea kaftan', 'kaftan de chá da tarde'],
  ['dinner kaftan', 'قفطان عشاء', 'caftan de dîner', 'kaftan da cena', 'caftán de cena', 'кафтан для ужина', '晚宴长袍', 'Abend-Kaftan', 'dinerkaftan', 'kaftan de jantar'],
  ['elegant kaftan', 'قفطان أنيق', 'caftan élégant', 'kaftan elegante', 'caftán elegante', 'элегантный кафтан', '优雅长袍', 'eleganter Kaftan', 'elegante kaftan', 'kaftan elegante'],
  ['elegant dress', 'فستان أنيق', 'robe élégante', 'abito elegante', 'vestido elegante', 'элегантное платье', '优雅连衣裙', 'elegantes Kleid', 'elegante jurk', 'vestido elegante'],
  ['classy kaftan', 'قفطان راقٍ', 'caftan chic', 'kaftan di classe', 'caftán con clase', 'стильный кафтан', '精致长袍', 'stilvoller Kaftan', 'stijlvolle kaftan', 'kaftan elegante'],
  ['classy dress', 'فستان راقٍ', 'robe chic', 'abito di classe', 'vestido con clase', 'стильное платье', '精致连衣裙', 'stilvolles Kleid', 'stijlvolle jurk', 'vestido elegante'],
  ['kaftan outfit', 'إطلالة قفطان', 'tenue caftan', 'outfit kaftan', 'look caftán', 'образ с кафтаном', '长袍造型', 'Kaftan-Outfit', 'kaftan outfit', 'look kaftan'],
  ['outfit of the day', 'إطلالة اليوم', 'tenue du jour', 'outfit del giorno', 'look del día', 'образ дня', '今日穿搭', 'Outfit des Tages', 'outfit van de dag', 'look do dia'],
  ['New Year\'s kaftan', 'قفطان رأس السنة', 'caftan du Nouvel An', 'kaftan di Capodanno', 'caftán de Año Nuevo', 'новогодний кафтан', '新年长袍', 'Neujahrs-Kaftan', 'oudjaarskaftan', 'kaftan de Ano Novo'],
  ['Christmas kaftan', 'قفطان عيد الميلاد', 'caftan de Noël', 'kaftan di Natale', 'caftán de Navidad', 'рождественский кафтан', '圣诞长袍', 'Weihnachts-Kaftan', 'kerstkaftan', 'kaftan de Natal'],
  ['New Year\'s dress', 'فستان رأس السنة', 'robe du Nouvel An', 'abito di Capodanno', 'vestido de Año Nuevo', 'новогоднее платье', '新年连衣裙', 'Neujahrs-Kleid', 'oudjaarsjurk', 'vestido de Ano Novo'],
  ['Christmas dress', 'فستان عيد الميلاد', 'robe de Noël', 'abito di Natale', 'vestido de Navidad', 'рождественское платье', '圣诞连衣裙', 'Weihnachtskleid', 'kerstjurk', 'vestido de Natal'],
  ['Eid 2027 kaftan', 'قفطان عيد 2027', 'caftan Aïd 2027', 'kaftan Eid 2027', 'caftán Eid 2027', 'кафтан Ид 2027', '2027开斋节长袍', 'Eid 2027 Kaftan', 'Eid 2027 kaftan', 'kaftan Eid 2027'],
  ['Eid 2027 dress', 'فستان عيد 2027', 'robe Aïd 2027', 'abito Eid 2027', 'vestido Eid 2027', 'платье Ид 2027', '2027开斋节连衣裙', 'Eid 2027 Kleid', 'Eid 2027 jurk', 'vestido Eid 2027'],
  ['style trends', 'اتجاهات الأناقة', 'tendances de style', 'tendenze di stile', 'tendencias de estilo', 'тренды стиля', '风格趋势', 'Stil-Trends', 'stijltrends', 'tendências de estilo'],
  ['European style', 'أناقة أوروبية', 'style européen', 'stile europeo', 'estilo europeo', 'европейский стиль', '欧洲风格', 'europäischer Stil', 'Europese stijl', 'estilo europeu'],
  ['European elegance', 'أناقة أوروبية راقية', 'élégance européenne', 'eleganza europea', 'elegancia europea', 'европейская элегантность', '欧洲优雅', 'europäische Eleganz', 'Europese elegantie', 'elegância europeia'],
  ['quiet luxury brands', 'علامات الهدوء الفاخر', 'marques quiet luxury', 'brand quiet luxury', 'marcas quiet luxury', 'бренды quiet luxury', '静奢品牌', 'Quiet-Luxury-Marken', 'quiet luxury merken', 'marcas quiet luxury'],
  ['quiet luxury', 'الفخامة الهادئة', 'quiet luxury', 'quiet luxury', 'quiet luxury', 'quiet luxury', '静奢', 'Quiet Luxury', 'quiet luxury', 'quiet luxury'],
  ['luxury UAE brands', 'علامات فاخرة إماراتية', 'marques de luxe EAU', 'brand di lusso EAU', 'marcas de lujo EAU', 'роскошные бренды ОАЭ', '阿联酋奢侈品牌', 'Luxusmarken VAE', 'luxe VAE-merken', 'marcas de luxo EAU'],
  ['contemporary premium UAE brands', 'علامات معاصرة راقية إماراتية', 'marques contemporaines premium EAU', 'brand contemporanei premium EAU', 'marcas contemporáneas premium EAU', 'современные премиальные бренды ОАЭ', '阿联酋当代高端品牌', 'zeitgenössische Premiummarken VAE', 'eigentijdse premium VAE-merken', 'marcas contemporâneas premium EAU'],
  ['Eid dress', 'فستان العيد', 'robe Aïd', 'abito Eid', 'vestido Eid', 'платье на Ид', '开斋节连衣裙', 'Eid-Kleid', 'Eid jurk', 'vestido Eid'],
  ['holiday kaftan', 'قفطان العطلات', 'caftan de vacances', 'kaftan festivo', 'caftán festivo', 'праздничный кафтан', '假日长袍', 'Festtags-Kaftan', 'feestdagen kaftan', 'kaftan festivo'],
  ['vacation kaftan', 'قفطان إجازة', 'caftan de vacances', 'kaftan vacanza', 'caftán de vacaciones', 'курортный кафтан', '度假长袍', 'Urlaubs-Kaftan', 'vakantiekaftan', 'kaftan de férias'],
  ['holiday dress', 'فستان العطلات', 'robe de vacances', 'abito festivo', 'vestido festivo', 'праздничное платье', '假日连衣裙', 'Festtagskleid', 'feestdagen jurk', 'vestido festivo'],
  ['vacation dress', 'فستان إجازة', 'robe de vacances', 'abito vacanza', 'vestido de vacaciones', 'курортное платье', '度假连衣裙', 'Urlaubskleid', 'vakantiejurk', 'vestido de férias'],
  ['expensive kaftan', 'قفطان فاخر السعر', 'caftan haut de gamme', 'kaftan di pregio', 'caftán de lujo', 'дорогой кафтан', '高端长袍', 'teurer Kaftan', 'dure kaftan', 'kaftan caro'],
  ['Made in Abu Dhabi United Arab Emirates', 'صُنع في أبوظبي، الإمارات العربية المتحدة', 'Fabriqué à Abou Dabi, Émirats arabes unis', 'Prodotto a Abu Dhabi, Emirati Arabi Uniti', 'Hecho en Abu Dabi, Emiratos Árabes Unidos', 'Сделано в Абу-Даби, Объединённые Арабские Эмираты', '阿布扎比，阿拉伯联合酋长国制造', 'Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate', 'Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten', 'Feito em Abu Dhabi, Emirados Árabes Unidos'],
  ['affordable kaftans', 'قفاطين بأسعار مناسبة', 'caftans abordables', 'kaftan accessibili', 'caftanes asequibles', 'доступные кафтаны', '平价长袍', 'erschwingliche Kaftane', 'betaalbare kaftans', 'kaftans acessíveis'],
  ['affordable dress', 'فستان بسعر مناسب', 'robe abordable', 'abito accessibile', 'vestido asequible', 'доступное платье', '平价连衣裙', 'erschwingliches Kleid', 'betaalbare jurk', 'vestido acessível'],
  ['glamorous kaftan', 'قفطان ساحر', 'caftan glamour', 'kaftan glamour', 'caftán glamuroso', 'гламурный кафтан', '魅力长袍', 'glamouröser Kaftan', 'glamoureuze kaftan', 'kaftan glamoroso'],
  ['glamorous dress', 'فستان ساحر', 'robe glamour', 'abito glamour', 'vestido glamuroso', 'гламурное платье', '魅力连衣裙', 'glamouröses Kleid', 'glamoureuze jurk', 'vestido glamoroso'],
  ['plus size styles', 'مقاسات كبيرة', 'styles grande taille', 'stili taglie forti', 'estilos talla grande', 'стили plus size', '大码款式', 'Plus-Size-Stile', 'plus size stijlen', 'estilos plus size'],
]

const NOTHING_HILL_ROWS: KwRow[] = [
  ['Peach Pink Chiffon Kaftan', 'قفطان شيفون وردي خوخي', 'Caftan en mousseline rose pêche', 'Kaftan in chiffon pesca rosa', 'Caftán de chiffon rosa melocotón', 'Персиково-розовый шифоновый кафтан', '蜜桃粉雪纺长袍', 'Pfirsichrosa Chiffon-Kaftan', 'Perzikroze chiffon kaftan', 'Kaftan de chiffon rosa pêssego'],
  ['Luxury Kaftan UAE', 'قفطان فاخر الإمارات', 'Caftan de luxe EAU', 'Kaftan di lusso EAU', 'Caftán de lujo EAU', 'Роскошный кафтан ОАЭ', '奢华长袍阿联酋', 'Luxus-Kaftan VAE', 'Luxe kaftan VAE', 'Kaftan de luxo EAU'],
  ['Designer Kaftan Abu Dhabi', 'قفطان مصمّم أبوظبي', 'Caftan designer Abou Dabi', 'Kaftan designer Abu Dhabi', 'Caftán de diseñador Abu Dabi', 'Дизайнерский кафтан Абу-Даби', '设计师长袍阿布扎比', 'Designer-Kaftan Abu Dhabi', 'Designer kaftan Abu Dhabi', 'Kaftan de designer Abu Dhabi'],
  ['Bateau Neckline Kaftan', 'قفطان بخط عنق باتو', 'Caftan encolure bateau', 'Kaftan scollo a barca', 'Caftán escote barco', 'Кафтан с вырезом лодочкой', '船型领长袍', 'Kaftan mit Bateau-Ausschnitt', 'Bateau-hals kaftan', 'Kaftan decote barco'],
  ['Women\'s Occasion Kaftan', 'قفطان نسائي للمناسبات', 'Caftan de cérémonie femme', 'Kaftan da cerimonia donna', 'Caftán de ocasión femenino', 'Женский кафтан для особых случаев', '女士场合长袍', 'Damen-Anlass-Kaftan', 'Dames gelegenheidskaftan', 'Kaftan de ocasião feminino'],
  ['Bint Saeed Abu Dhabi', 'Bint Saeed أبوظبي', 'Bint Saeed Abou Dabi', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dabi', 'Bint Saeed Абу-Даби', 'Bint Saeed 阿布扎比', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dhabi'],
  ['Luxury Chiffon Kaftan', 'قفطان شيفون فاخر', 'Caftan en mousseline de luxe', 'Kaftan in chiffon di lusso', 'Caftán de chiffon de lujo', 'Роскошный шифоновый кафтан', '奢华雪纺长袍', 'Luxus-Chiffon-Kaftan', 'Luxe chiffon kaftan', 'Kaftan de chiffon de luxo'],
  ['Eid Kaftan', 'قفطان العيد', 'Caftan Aïd', 'Kaftan Eid', 'Caftán Eid', 'Кафтан на Ид', '开斋节长袍', 'Eid-Kaftan', 'Eid kaftan', 'Kaftan Eid'],
  ['Wedding Guest Kaftan', 'قفطان ضيفة زفاف', 'Caftan invitée de mariage', 'Kaftan ospite di nozze', 'Caftán invitada de boda', 'Кафтан для гостьи свадьбы', '婚礼宾客长袍', 'Hochzeitsgast-Kaftan', 'Bruiloftsgast kaftan', 'Kaftan convidada de casamento'],
  ['Made in Abu Dhabi United Arab Emirates', 'صُنع في أبوظبي، الإمارات العربية المتحدة', 'Fabriqué à Abou Dabi, Émirats arabes unis', 'Prodotto a Abu Dhabi, Emirati Arabi Uniti', 'Hecho en Abu Dabi, Emiratos Árabes Unidos', 'Сделано в Абу-Даби, Объединённые Арабские Эмираты', '阿布扎比，阿拉伯联合酋长国制造', 'Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate', 'Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten', 'Feito em Abu Dhabi, Emirados Árabes Unidos'],
  ['Nothing Hill Kaftan', 'قفطان Nothing Hill', 'Caftan Nothing Hill', 'Kaftan Nothing Hill', 'Caftán Nothing Hill', 'Кафтан Nothing Hill', 'Nothing Hill 长袍', 'Nothing Hill Kaftan', 'Nothing Hill kaftan', 'Kaftan Nothing Hill'],
  ['BS-KF-002-PPK', 'BS-KF-002-PPK', 'BS-KF-002-PPK', 'BS-KF-002-PPK', 'BS-KF-002-PPK', 'BS-KF-002-PPK', 'BS-KF-002-PPK', 'BS-KF-002-PPK', 'BS-KF-002-PPK', 'BS-KF-002-PPK'],
]

const MAYFAIR_ROWS: KwRow[] = [
  ['Deep Maroon Chiffon Kaftan', 'قفطان شيفون عنابي غامق', 'Caftan en mousseline bordeaux profond', 'Kaftan in chiffon bordeaux intenso', 'Caftán de chiffon granate profundo', 'Тёмно-бордовый шифоновый кафтан', '深酒红雪纺长袍', 'Tiefes Bordeaux Chiffon-Kaftan', 'Diep bordeaux chiffon kaftan', 'Kaftan de chiffon bordô profundo'],
  ['Deep Maroon Crepe Chiffon Kaftan', 'قفطان كريب شيفون عنابي غامق', 'Caftan crêpe mousseline bordeaux profond', 'Kaftan crepe chiffon bordeaux intenso', 'Caftán crepe chiffon granate profundo', 'Тёмно-бордовый креп-шифоновый кафтан', '深酒红绉雪纺长袍', 'Tiefes Bordeaux Krepp-Chiffon-Kaftan', 'Diep bordeaux crêpe chiffon kaftan', 'Kaftan crepe chiffon bordô profundo'],
  ['Luxury Kaftan UAE', 'قفطان فاخر الإمارات', 'Caftan de luxe EAU', 'Kaftan di lusso EAU', 'Caftán de lujo EAU', 'Роскошный кафтан ОАЭ', '奢华长袍阿联酋', 'Luxus-Kaftan VAE', 'Luxe kaftan VAE', 'Kaftan de luxo EAU'],
  ['Designer Kaftan Abu Dhabi', 'قفطان مصمّم أبوظبي', 'Caftan designer Abou Dabi', 'Kaftan designer Abu Dhabi', 'Caftán de diseñador Abu Dabi', 'Дизайнерский кафтан Абу-Даби', '设计师长袍阿布扎比', 'Designer-Kaftan Abu Dhabi', 'Designer kaftan Abu Dhabi', 'Kaftan de designer Abu Dhabi'],
  ['V-Neckline Kaftan', 'قفطان بخط عنق V', 'Caftan encolure en V', 'Kaftan scollo a V', 'Caftán escote en V', 'Кафтан с V-образным вырезом', 'V领长袍', 'Kaftan mit V-Ausschnitt', 'V-hals kaftan', 'Kaftan decote em V'],
  ['Women\'s Occasion Kaftan', 'قفطان نسائي للمناسبات', 'Caftan de cérémonie femme', 'Kaftan da cerimonia donna', 'Caftán de ocasión femenino', 'Женский кафтан для особых случаев', '女士场合长袍', 'Damen-Anlass-Kaftan', 'Dames gelegenheidskaftan', 'Kaftan de ocasião feminino'],
  ['Bint Saeed Abu Dhabi', 'Bint Saeed أبوظبي', 'Bint Saeed Abou Dabi', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dabi', 'Bint Saeed Абу-Даби', 'Bint Saeed 阿布扎比', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dhabi'],
  ['Luxury Chiffon Kaftan', 'قفطان شيفون فاخر', 'Caftan en mousseline de luxe', 'Kaftan in chiffon di lusso', 'Caftán de chiffon de lujo', 'Роскошный шифоновый кафтан', '奢华雪纺长袍', 'Luxus-Chiffon-Kaftan', 'Luxe chiffon kaftan', 'Kaftan de chiffon de luxo'],
  ['Eid Kaftan', 'قفطان العيد', 'Caftan Aïd', 'Kaftan Eid', 'Caftán Eid', 'Кафтан на Ид', '开斋节长袍', 'Eid-Kaftan', 'Eid kaftan', 'Kaftan Eid'],
  ['Wedding Guest Kaftan', 'قفطان ضيفة زفاف', 'Caftan invitée de mariage', 'Kaftan ospite di nozze', 'Caftán invitada de boda', 'Кафтан для гостьи свадьбы', '婚礼宾客长袍', 'Hochzeitsgast-Kaftan', 'Bruiloftsgast kaftan', 'Kaftan convidada de casamento'],
  ['Made in Abu Dhabi United Arab Emirates', 'صُنع في أبوظبي، الإمارات العربية المتحدة', 'Fabriqué à Abou Dabi, Émirats arabes unis', 'Prodotto a Abu Dhabi, Emirati Arabi Uniti', 'Hecho en Abu Dabi, Emiratos Árabes Unidos', 'Сделано в Абу-Даби, Объединённые Арабские Эмираты', '阿布扎比，阿拉伯联合酋长国制造', 'Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate', 'Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten', 'Feito em Abu Dhabi, Emirados Árabes Unidos'],
  ['Mayfair Kaftan', 'قفطان Mayfair', 'Caftan Mayfair', 'Kaftan Mayfair', 'Caftán Mayfair', 'Кафтан Mayfair', 'Mayfair 长袍', 'Mayfair Kaftan', 'Mayfair kaftan', 'Kaftan Mayfair'],
  ['BS-KF-001-DMN', 'BS-KF-001-DMN', 'BS-KF-001-DMN', 'BS-KF-001-DMN', 'BS-KF-001-DMN', 'BS-KF-001-DMN', 'BS-KF-001-DMN', 'BS-KF-001-DMN', 'BS-KF-001-DMN', 'BS-KF-001-DMN'],
]

const PRODUCT_TYPE_LABELS: Record<string, Record<AppLocale, string>> = {
  Abayas: kw('abaya', 'عباية', 'abaya', 'abaya', 'abaya', 'абайя', '阿巴亚', 'Abaya', 'abaya', 'abaya'),
  Kaftans: kw('kaftan', 'قفطان', 'caftan', 'kaftan', 'caftán', 'кафтан', '长袍', 'Kaftan', 'kaftan', 'kaftan'),
  Dresses: kw('dress', 'فستان', 'robe', 'abito', 'vestido', 'платье', '连衣裙', 'Kleid', 'jurk', 'vestido'),
  Sets: kw('set', 'طقم', 'ensemble', 'set', 'conjunto', 'комплект', '套装', 'Set', 'set', 'conjunto'),
}

const VARIANT_PHRASES = {
  luxury: kw('Luxury', 'فاخر', 'Luxe', 'Lusso', 'Lujo', 'Роскошный', '奢华', 'Luxus', 'Luxe', 'Luxo'),
  designer: kw('Designer', 'مصمّم', 'Designer', 'Designer', 'Diseñador', 'Дизайнерский', '设计师', 'Designer', 'Designer', 'Designer'),
  specialOccasion: kw('Special Occasion', 'مناسبات خاصة', 'Occasion spéciale', 'Occasione speciale', 'Ocasión especial', 'Особый случай', '特殊场合', 'Besonderer Anlass', 'Speciale gelegenheid', 'Ocasião especial'),
  weddingGuest: kw('Wedding Guest', 'ضيفة زفاف', 'Invitée de mariage', 'Ospite di nozze', 'Invitada de boda', 'Гостья свадьбы', '婚礼宾客', 'Hochzeitsgast', 'Bruiloftsgast', 'Convidada de casamento'),
  evening: kw('Evening', 'مسائي', 'Soirée', 'Serale', 'Noche', 'Вечерний', '晚宴', 'Abend', 'Avond', 'Noite'),
  madeIn: kw('Made in', 'صُنع في', 'Fabriqué à', 'Prodotto a', 'Hecho en', 'Сделано в', '产地', 'Hergestellt in', 'Gemaakt in', 'Feito em'),
}

function productTypeLabel(category: Product['category'], locale: AppLocale): string {
  return PRODUCT_TYPE_LABELS[category]?.[locale] ?? PRODUCT_TYPE_LABELS.Abayas[locale]
}

const GCC_UAE_I18N = rowsToKw(GCC_UAE_ROWS)
const EUROPEAN_I18N = rowsToKw(EUROPEAN_ROWS)
const BRAND_GEO_I18N = rowsToKw(BRAND_GEO_ROWS)
const OCCASION_I18N = rowsToKw(OCCASION_ROWS)
const DISCOVERY_I18N = rowsToKw(DISCOVERY_ROWS)
const NOTHING_HILL_I18N = rowsToKw(NOTHING_HILL_ROWS)
const MAYFAIR_I18N = rowsToKw(MAYFAIR_ROWS)
const SCHEMA_AUGMENT_I18N = rowsToKw(SCHEMA_AUGMENT_ROWS)

const ALL_SHARED_POOLS: Record<AppLocale, string>[][] = [
  GCC_UAE_I18N,
  EUROPEAN_I18N,
  BRAND_GEO_I18N,
  OCCASION_I18N,
  DISCOVERY_I18N,
  SCHEMA_AUGMENT_I18N,
]

/** Flat deduplicated list of all shared keyword pools for a locale. */
export function getLocalisedOptimisedKeywordPools(locale: AppLocale): string[] {
  const terms = new Set<string>()
  for (const pool of ALL_SHARED_POOLS) {
    for (const row of pool) {
      terms.add(row[locale])
    }
  }
  return [...terms]
}

/** Slug-specific schema keywords (Nothing Hill, Mayfair). */
export function getSlugSpecificKeywords(slug: string, locale: AppLocale): string[] {
  const key = slug.toLowerCase()
  if (key === 'nothing-hill-kaftan') return pickLocale(NOTHING_HILL_I18N, locale)
  if (key === 'mayfair-kaftan') return pickLocale(MAYFAIR_I18N, locale)
  return []
}

/** Localized product-specific keyword variants (name, slug, colour, SKU kept as-is). */
export function buildProductKeywordVariants(
  product: Pick<Product, 'name' | 'category' | 'slug'>,
  color: string,
  sku: string | undefined,
  locale: AppLocale,
): string[] {
  const type = productTypeLabel(product.category, locale)
  const slug = getProductSlug(product)
  const geo = LOCALE_GEO[locale]
  const p = VARIANT_PHRASES

  return [
    product.name,
    slug,
    sku ?? '',
    color,
    `${color} ${type}`,
    `${p.luxury[locale]} ${type} ${geo.countryShort}`,
    `${p.designer[locale]} ${type} ${geo.city}`,
    `${BRAND_NAME} ${type}`,
    `${product.name} ${type}`,
    `${p.specialOccasion[locale]} ${type}`,
    `${p.weddingGuest[locale]} ${type}`,
    `${p.evening[locale]} ${type}`,
    `${p.madeIn[locale]} ${geo.city} ${type}`,
    sku ? `${product.name} ${sku}` : '',
  ].filter(Boolean)
}

/** Build deduplicated localized schema keyword string for JSON-LD Product.keywords. */
export function buildLocalisedOptimisedSchemaKeywords(
  product: Pick<Product, 'name' | 'category' | 'colors' | 'slug'>,
  colorName?: string,
  locale: AppLocale = 'en',
): string {
  const slug = getProductSlug(product).toLowerCase()
  const color = colorName?.trim() || product.colors[0]?.name || ''
  const sku = resolveProductSku(product, color)

  const terms = new Set<string>([
    BRAND_NAME,
    ...getLocalisedOptimisedKeywordPools(locale),
    ...getSlugSpecificKeywords(slug, locale),
    ...buildProductKeywordVariants(product, color, sku, locale),
  ])

  return [...terms]
    .map((t) => t.trim())
    .filter(Boolean)
    .join(', ')
}
