import type { AppLocale } from '@/lib/i18n/routing'
import { getLocalizedGrosvenorSetExclusiveKeywords } from '@/lib/products/grosvenorSetSchemaKeywordsI18n'
import {
  GROSVENOR_SET_SLUG,
  getLocalizedGrosvenorSetSchemaFacts,
  getLocalizedGrosvenorSetSchemaFaq,
} from '@/lib/products/grosvenorSetSchemaLocalePacks'

export { GROSVENOR_SET_SLUG } from '@/lib/products/grosvenorSetSchemaLocalePacks'

export const GROSVENOR_SET_SCHEMA_AUDIENCE: Record<AppLocale, string> = {
  en: 'Women seeking designer sets, luxury coordinate sets, blouse and skirt sets, satin evening sets, maxi skirt sets, two-piece modest sets, Knotted Line sets, formal occasionwear, and contemporary modest fashion with understated Emirati elegance. Women who value signature Knotted Line cuff buttons, satin drape, gold waist trim, coordinated evening proportion, and meaningful design created in Abu Dhabi. Women in the GCC, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and international wardrobes across Abu Dhabi, London, Paris, Milan, Riyadh, Doha, and beyond; women dressing for weddings, galas, Eid gatherings, and embassy receptions; women who wear the blouse and skirt together or separately; and women requesting different blouse and skirt sizes. Men seeking meaningful luxury gifts for their wife, daughter, mother, fiancée, girlfriend, or sister.',
  ar: 'النساء الباحثات عن أطقم مصمّمة فاخرة، بلوزة وتنورة، طقم ساتان مسائي، تنورة ماكسي، أطقم محتشمة ثنائية، أطقم Knotted Line، ومناسبات رسمية بأناقة إماراتية رصينة. من يقدّرن أزرار Knotted Line عند الأكمام، انسيابية الساتان، حاشية الخصر الذهبية، وتفصيل أبوظبي. نساء الخليج والإمارات وخزائن دولية؛ من يرتدين القطع معاً أو منفصلة؛ من يطلبن مقاسات مختلفة. الرجال الباحثون عن هدايا فاخرة.',
  fr: 'Femmes en quête de sets de créateur, de luxe, blouse et jupe, set satin du soir, jupe maxi, sets modestes deux pièces, sets Knotted Line, tenues de soirée — mode modeste contemporaine à l’élégance émiratie discrète. Boutons Knotted Line aux poignets, tombée satin, galon doré à la taille, tailleur Abou Dabi. Femmes du Golfe, EAU, Londres, Paris, Milan, Riyad ; mariages, galas, réceptions. Hommes en quête de cadeaux de luxe.',
  it: 'Donne in cerca di set designer, di lusso, blusa e gonna, set satin serale, gonna maxi, set modesti due pezzi, set Knotted Line, occasionwear formale — modest fashion contemporanea con eleganza emiratina sobria. Bottoni Knotted Line ai polsi, drappeggio satin, finitura dorata in vita, sartoria Abu Dhabi. Donne del Golfo, EAU, Londra, Parigi, Milano, Riyadh. Uomini in cerca di regali di lusso.',
  es: 'Mujeres que buscan sets de diseñador, de lujo, blusa y falda, set de satén nocturno, falda maxi, sets modestos de dos piezas, sets Knotted Line, ropa de ocasión formal — moda modesta contemporánea con elegancia emiratí discreta. Botones Knotted Line en los puños, caída de satén, trim dorado en la cintura, sastrería Abu Dabi. Mujeres del Golfo, EAU, Londres, París, Milán, Riad. Hombres en busca de regalos de lujo.',
  ru: 'Женщины, ищущие дизайнерские люксовые комплекты, блузу и юбку, атласный вечерний комплект, юбку макси, скромные двухчастные комплекты, Knotted Line, формальный occasionwear — скромную моду с сдержанной эмиратской элегантностью. Пуговицы Knotted Line на манжетах, драпировка атласа, золотистая отделка на талии, крой из Абу-Даби. Женщины стран Залива, ОАЭ, Лондон, Париж, Милан, Эр-Рияд. Мужчины, ищущие роскошные подарки.',
  zh: '寻求设计师奢华套装、衬衫半裙套装、缎面晚宴套装、及地长裙套装、端庄两件套、Knotted Line 套装及正式场合装与含蓄阿联酋优雅的当代端庄时尚的女性；重视 Knotted Line 袖扣、缎面垂坠、金色调腰饰、阿布扎比剪裁；海湾、伦敦、巴黎、米兰、利雅得及国际衣橱；婚礼、晚宴、开斋与使馆场合；可整套或分开穿着。寻找奢华礼品的男性。',
  de: 'Frauen, die Designer-Luxus-Sets, Bluse-Rock-Sets, Satin-Abend-Sets, Maxirock-Sets, bescheidene Zweiteiler, Knotted-Line-Sets und formelle Anlässe mit zurückhaltender emiratischer Eleganz suchen. Knotted-Line-Manschettenknöpfe, Satin-Fall, goldene Taillenverzierung, Schneiderkunst aus Abu Dhabi. Frauen im Golf, VAE, London, Paris, Mailand, Riad. Männer, die Luxusgeschenke suchen.',
  nl: 'Vrouwen die designer luxe sets, blouse-rok sets, satijnen avondsets, maxirok sets, bescheiden tweedelige sets, Knotted Line sets en formele gelegenheden met ingetogen Emiratische elegantie zoeken. Knotted Line manchetknopen, satijnen drape, gouden tailletrim, tailoring Abu Dhabi. Vrouwen in de Golf, VAE, Londen, Parijs, Milaan, Riyad. Mannen die luxe cadeaus zoeken.',
  pt: 'Mulheres que procuram sets de designer de luxo, blusa e saia, set de cetim noturno, saia maxi, sets modestos de duas peças, sets Knotted Line e ocasiões formais com elegância emirati discreta. Botões Knotted Line nos punhos, caimento em cetim, acabamento dourado na cintura, alfaiataria Abu Dhabi. Mulheres do Golfo, EAU, Londres, Paris, Milão, Riade. Homens à procura de presentes de luxo.',
  id: 'Wanita yang mencari set desainer mewah, blus dan rok, set satin malam, rok maxi, set modest dua potong, set Knotted Line, dan occasionwear formal dengan elegansi Emirati understated. Kancing Knotted Line di manset, drape satin, trim pinggang emas, tailoring Abu Dhabi. Wanita GCC, UEA, London, Paris, Milan, Riyadh. Pria mencari hadiah mewah.',
  ms: 'Wanita yang mencari set pereka mewah, blouse dan skirt, set satin malam, skirt maxi, set sopan dua potong, set Knotted Line, dan occasionwear formal dengan keanggunan Emirati understated. Butang Knotted Line di manset, jatuhan satin, trim pinggang emas, jahitan Abu Dhabi. Wanita GCC, UAE, London, Paris, Milan, Riyadh. Lelaki mencari hadiah mewah.',
}

export function isGrosvenorSetSlug(slug: string): boolean {
  return slug.toLowerCase() === GROSVENOR_SET_SLUG
}

export function getGrosvenorSetSchemaAudience(locale: AppLocale = 'en'): string {
  return GROSVENOR_SET_SCHEMA_AUDIENCE[locale] ?? GROSVENOR_SET_SCHEMA_AUDIENCE.en
}

export function getGrosvenorSetSchemaKeywords(
  locale: AppLocale = 'en',
  colorName?: string,
): string {
  return getLocalizedGrosvenorSetExclusiveKeywords(locale, colorName).join(', ')
}

export {
  getLocalizedGrosvenorSetSchemaFacts,
  getLocalizedGrosvenorSetSchemaFaq,
} from '@/lib/products/grosvenorSetSchemaLocalePacks'

export type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
