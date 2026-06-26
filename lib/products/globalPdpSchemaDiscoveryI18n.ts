import type { AppLocale } from '@/lib/i18n/routing'
import { getGlobalSchemaKeywordExpansion } from '@/lib/seo/schemaKeywordExpansion'

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

/** Worldwide discovery + conversion terms injected on every catalogue PDP. */
const GLOBAL_PDP_ROWS: KwRow[] = [
  ['Bint Saeed', 'Bint Saeed', 'Bint Saeed', 'Bint Saeed', 'Bint Saeed', 'Bint Saeed', 'Bint Saeed', 'Bint Saeed', 'Bint Saeed', 'Bint Saeed'],
  ['Bint Saeed Abu Dhabi', 'Bint Saeed أبوظبي', 'Bint Saeed Abou Dabi', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dabi', 'Bint Saeed Абу-Даби', 'Bint Saeed阿布扎比', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dhabi'],
  ['Bint Saeed UAE', 'Bint Saeed الإمارات', 'Bint Saeed EAU', 'Bint Saeed EAU', 'Bint Saeed EAU', 'Bint Saeed ОАЭ', 'Bint Saeed阿联酋', 'Bint Saeed VAE', 'Bint Saeed VAE', 'Bint Saeed EAU'],
  ['Emirati designer brand', 'علامة مصمّم إماراتية', 'marque designer émiratie', 'brand designer emiratino', 'marca diseñador emiratí', 'эмиратский дизайнерский бренд', '阿联酋设计师品牌', 'emiratische Designer-Marke', 'Emiratisch designer merk', 'marca designer emirati'],
  ['Abu Dhabi fashion house', 'دار أزياء أبوظبي', 'maison de mode Abou Dabi', 'casa di moda Abu Dhabi', 'casa de moda Abu Dabi', 'модный дом Абу-Даби', '阿布扎比时尚品牌屋', 'Modehaus Abu Dhabi', 'modehuis Abu Dhabi', 'casa de moda Abu Dhabi'],
  ['made in Abu Dhabi', 'صُنع في أبوظبي', 'fabriqué à Abou Dabi', 'prodotto ad Abu Dhabi', 'hecho en Abu Dabi', 'сделано в Абу-Даби', '阿布扎比制造', 'hergestellt in Abu Dhabi', 'gemaakt in Abu Dhabi', 'feito em Abu Dhabi'],
  ['United Arab Emirates fashion', 'أزياء الإمارات', 'mode Émirats arabes unis', 'moda Emirati Arabi Uniti', 'moda Emiratos Árabes Unidos', 'мода ОАЭ', '阿联酋时尚', 'Mode VAE', 'mode VAE', 'moda EAU'],
  ['GCC fashion', 'أزياء الخليج', 'mode Golfe', 'moda Golfo', 'moda Golfo', 'мода GCC', '海湾时尚', 'GCC-Mode', 'GCC mode', 'moda Golfo'],
  ['Gulf wardrobe', 'خزانة الخليج', 'garde-robe du Golfe', 'guardaroba del Golfo', 'armario del Golfo', 'гардероб Залива', '海湾衣橱', 'Golf-Garderobe', 'Golf-garderobe', 'guarda-roupa do Golfo'],
  ['international modest fashion', 'أزياء محتشمة دولية', 'mode modeste internationale', 'moda modesta internazionale', 'moda modesta internacional', 'международная скромная мода', '国际端庄时尚', 'internationale bescheidene Mode', 'internationale bescheiden mode', 'moda modesta internacional'],
  ['luxury modest fashion worldwide', 'أزياء محتشمة فاخرة عالمياً', 'mode modeste de luxe mondiale', 'moda modesta di lusso mondiale', 'moda modesta de lujo mundial', 'роскошная скромная мода мира', '全球奢华端庄时尚', 'weltweite Luxus-bescheidene Mode', 'wereldwijde luxe bescheiden mode', 'moda modesta de luxo mundial'],
  ['Emirati heritage fashion', 'أزياء التراث الإماراتي', 'mode patrimoniale émiratie', 'moda heritage emiratina', 'moda patrimonial emiratí', 'эмиратская наследие моды', '阿联酋传承时尚', 'emiratische Heritage-Mode', 'Emiratisch erfgoed mode', 'moda patrimonial emirati'],
  ['shop online UAE', 'تسوق أونلاين الإمارات', 'acheter en ligne EAU', 'acquista online EAU', 'comprar online EAU', 'купить онлайн ОАЭ', '阿联酋网购', 'online shoppen VAE', 'online shoppen VAE', 'comprar online EAU'],
  ['buy luxury abaya online', 'شراء عباية فاخرة أونلاين', 'acheter abaya de luxe en ligne', 'comprare abaya di lusso online', 'comprar abaya de lujo online', 'купить люксовую абайю онлайн', '在线购买奢华长袍', 'Luxus-Abaya online kaufen', 'luxe abaya online kopen', 'comprar abaya de luxo online'],
  ['luxury gift for wife', 'هدية فاخرة للزوجة', 'cadeau de luxe épouse', 'regalo di lusso moglie', 'regalo de lujo esposa', 'роскошный подарок жене', '赠妻奢华礼', 'Luxusgeschenk Ehefrau', 'luxe cadeau echtgenote', 'presente de luxo esposa'],
  ['luxury gift for mother', 'هدية فاخرة للأم', 'cadeau de luxe mère', 'regalo di lusso madre', 'regalo de lujo madre', 'роскошный подарок матери', '赠母奢华礼', 'Luxusgeschenk Mutter', 'luxe cadeau moeder', 'presente de luxo mãe'],
  ['London modest fashion', 'أزياء محتشمة لندن', 'mode modeste Londres', 'moda modesta Londra', 'moda modesta Londres', 'скромная мода Лондон', '伦敦端庄时尚', 'bescheidene Mode London', 'bescheiden mode Londen', 'moda modesta Londres'],
  ['Paris modest fashion', 'أزياء محتشمة باريس', 'mode modeste Paris', 'moda modesta Parigi', 'moda modesta París', 'скромная мода Париж', '巴黎端庄时尚', 'bescheidene Mode Paris', 'bescheiden mode Parijs', 'moda modesta Paris'],
  ['Toronto abaya', 'عباية تورنتو', 'abaya Toronto', 'abaya Toronto', 'abaya Toronto', 'абайя Торонто', '多伦多长袍', 'Abaya Toronto', 'abaya Toronto', 'abaya Toronto'],
  ['New York modest fashion', 'أزياء محتشمة نيويورك', 'mode modeste New York', 'moda modesta New York', 'moda modesta Nueva York', 'скромная мода Нью-Йорк', '纽约端庄时尚', 'bescheidene Mode New York', 'bescheiden mode New York', 'moda modesta Nova Iorque'],
  ['Singapore modest fashion', 'أزياء محتشمة سنغافورة', 'mode modeste Singapour', 'moda modesta Singapore', 'moda modesta Singapur', 'скромная мода Сингапур', '新加坡端庄时尚', 'bescheidene Mode Singapur', 'bescheiden mode Singapore', 'moda modesta Singapura'],
  ['Sydney modest fashion', 'أزياء محتشمة سيدني', 'mode modeste Sydney', 'moda modesta Sydney', 'moda modesta Sídney', 'скромная мода Сидней', '悉尼端庄时尚', 'bescheidene Mode Sydney', 'bescheiden mode Sydney', 'moda modesta Sydney'],
  ['European occasion wear', 'أزياء مناسبات أوروبية', 'tenue de cérémonie européenne', 'abbigliamento da cerimonia europeo', 'ropa de ocasión europea', 'европейская одежда для особых случаев', '欧洲场合着装', 'europäische Anlassmode', 'Europese gelegenheidskleding', 'vestuário de ocasião europeu'],
  ['expatriates in the GCC', 'مغتربون في الخليج', 'expatriés dans le Golfe', 'expat nel Golfo', 'expatriados en el Golfo', 'экспаты в странах Залива', '海湾外籍人士', 'Expats im Golf', 'expats in de Golf', 'expatriados no Golfo'],
  ['women in the UAE', 'النساء في الإمارات', 'femmes aux EAU', 'donne negli EAU', 'mujeres en los EAU', 'женщины в ОАЭ', '阿联酋女性', 'Frauen in den VAE', 'vrouwen in de VAE', 'mulheres nos EAU'],
  ['Saudi Arabia abaya', 'عباية السعودية', 'abaya Arabie saoudite', 'abaya Arabia Saudita', 'abaya Arabia Saudí', 'абайя Саудовская Аравия', '沙特长袍', 'Abaya Saudi-Arabien', 'abaya Saoedi-Arabië', 'abaya Arábia Saudita'],
  ['Qatar luxury fashion', 'أزياء فاخرة قطر', 'mode de luxe Qatar', 'moda di lusso Qatar', 'moda de lujo Qatar', 'люксовая мода Катар', '卡塔尔奢华时尚', 'Luxusmode Katar', 'luxe mode Qatar', 'moda de luxo Qatar'],
  ['Kuwait designer abaya', 'عباية مصمّم الكويت', 'abaya designer Koweït', 'abaya designer Kuwait', 'abaya diseñador Kuwait', 'дизайнерская абайя Кувейт', '科威特设计师长袍', 'Designer-Abaya Kuwait', 'designer abaya Koeweit', 'abaya designer Kuwait'],
  ['Brunei modest fashion', 'أزياء محتشمة بروناي', 'mode modeste Brunei', 'moda modesta Brunei', 'moda modesta Brunéi', 'скромная мода Бруней', '文莱端庄时尚', 'bescheidene Mode Brunei', 'bescheiden mode Brunei', 'moda modesta Brunei'],
  ['Malaysia modest fashion', 'أزياء محتشمة ماليزيا', 'mode modeste Malaisie', 'moda modesta Malesia', 'moda modesta Malasia', 'скромная мода Малайзия', '马来西亚端庄时尚', 'bescheidene Mode Malaysia', 'bescheiden mode Maleisië', 'moda modesta Malásia'],
  ['Indonesia modest fashion', 'أزياء محتشمة إندونيسيا', 'mode modeste Indonésie', 'moda modesta Indonesia', 'moda modesta Indonesia', 'скромная мода Индонезия', '印尼端庄时尚', 'bescheidene Mode Indonesien', 'bescheiden mode Indonesië', 'moda modesta Indonésia'],
  ['best designer abaya UAE', 'أفضل عباية مصمّم الإمارات', 'meilleure abaya designer EAU', 'migliore abaya designer EAU', 'mejor abaya diseñador EAU', 'лучшая дизайнерская абайя ОАЭ', '阿联酋最佳设计师长袍', 'beste Designer-Abaya VAE', 'beste designer abaya VAE', 'melhor abaya designer EAU'],
  ['premium Emirati brand', 'علامة إماراتية راقية', 'marque émiratie premium', 'brand emiratino premium', 'marca emiratí premium', 'премиальный эмиратский бренд', '高端阿联酋品牌', 'Premium-Emirati-Marke', 'premium Emirati merk', 'marca emirati premium'],
  ['contemporary Emirati design', 'تصميم إماراتي معاصر', 'design émirati contemporain', 'design emiratino contemporaneo', 'diseño emiratí contemporáneo', 'современный эмиратский дизайн', '当代阿联酋设计', 'zeitgenössisches emiratisches Design', 'eigentijds Emiratisch design', 'design emirati contemporâneo'],
  ['worldwide shipping', 'شحن عالمي', 'livraison mondiale', 'spedizione mondiale', 'envío mundial', 'доставка по всему миру', '全球配送', 'weltweiter Versand', 'wereldwijde verzending', 'envio mundial'],
  ['showcase Emirati heritage', 'إبراز التراث الإماراتي', 'mettre en valeur le patrimoine émirati', 'mostrare il patrimonio emiratino', 'mostrar el patrimonio emiratí', 'демонстрация эмиратского наследия', '展示阿联酋传承', 'emiratisches Erbe zeigen', 'Emiratisch erfgoed tonen', 'mostrar património emirati'],
]

const GLOBAL_PDP_I18N = GLOBAL_PDP_ROWS.map(([en, ar, fr, it, es, ru, zh, de, nl, pt]) =>
  kw(en, ar, fr, it, es, ru, zh, de, nl, pt),
)

/** Universal PDP schema keywords — global reach and conversion intent. */
export function getGlobalPdpSchemaDiscoveryKeywords(locale: AppLocale = 'en'): string[] {
  const base =
    locale === 'en'
      ? [...GLOBAL_PDP_ROWS.map((row) => row[0])]
      : GLOBAL_PDP_I18N.map((row) => row[locale])
  const expansion = getGlobalSchemaKeywordExpansion(locale)
  return [...new Set([...base, ...expansion])]
}
