import type { AppLocale } from '@/lib/i18n/routing'
import {
  getLocalizedSohoSetExclusiveKeywords,
} from '@/lib/products/sohoSetSchemaKeywordsI18n'
import {
  SOHO_SET_SLUG,
  getLocalizedSohoSetSchemaFacts,
  getLocalizedSohoSetSchemaFaq,
} from '@/lib/products/sohoSetSchemaLocalePacks'

export { SOHO_SET_SLUG } from '@/lib/products/sohoSetSchemaLocalePacks'

export const SOHO_SET_SCHEMA_AUDIENCE: Record<AppLocale, string> = {
  en: 'Women seeking designer sets, luxury coordinate sets, shirt and trouser sets, oversized shirt and palazzo trouser sets, two-piece modest sets, Al Talli sets, heritage sets, Knotted Line sets, luxury travelwear, day-to-evening sets, and contemporary modest fashion that showcases Emirati craftsmanship to the world. Women who value UNESCO-recognised Al Talli heritage, signature Knotted Line buttons, breathable premium crepe, versatile styling, and meaningful design created in Abu Dhabi. Women in the GCC, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and international wardrobes across London, Paris, Milan, New York, Toronto, Singapore, and beyond; Emirati women; expatriates in the Gulf; business travellers, creatives, and women building versatile wardrobes; women who wear the shirt and trousers together or separately; and women requesting different shirt and trouser sizes. Men seeking meaningful luxury gifts for their wife, daughter, mother, fiancée, girlfriend, or sister.',
  ar: 'النساء الباحثات عن أطقم مصمّمة، فاخرة، قميص وبنطال، قميص واسع وبنطال بالازو، أطقم محتشمة ثنائية، أطقم التلي، أطقم تراثية، أزياء سفر فاخرة، وأزياء محتشمة معاصرة تعرض الحرفية الإماراتية. من يقدّرن التلي المعترف به من اليونسكو، أزرار Knotted Line، كريب فاخر قابل للتنفس، وتفصيل أبوظبي. نساء الخليج والإمارات والسعودية وقطر والكويت والبحرين وعُمان وخزائن دولية في لندن وباريس وميلانو ونيويورك وتورنتو؛ المسافرات؛ من يرتدين القطع معاً أو منفصلة؛ من يطلبن مقاسات مختلفة. الرجال الباحثون عن هدايا فاخرة.',
  fr: 'Femmes en quête de sets de créateur, de luxe, chemise et pantalon, chemise oversize et palazzo, sets modestes deux pièces, sets Al Talli, patrimoniaux, travelwear de luxe, jour-soir — mode modeste contemporaine présentant l’artisanat émirati. Patrimoine Al Talli UNESCO, Knotted Line, crêpe premium respirant, tailleur Abou Dabi. Femmes du Golfe, EAU, Londres, Paris, Milan, New York, Toronto ; voyageuses ; pièces portées ensemble ou séparément. Hommes en quête de cadeaux de luxe.',
  it: 'Donne in cerca di set designer, di lusso, camicia e pantaloni, camicia oversize e palazzo, set modesti due pezzi, set Al Talli, patrimoniali, luxury travelwear — modest fashion contemporanea che mostra l’artigianato emiratino. Patrimonio Al Talli UNESCO, Knotted Line, crepe premium traspirante, sartoria Abu Dhabi. Donne del Golfo, EAU, Londra, Parigi, Milano, New York; viaggiatrici; capi indossati insieme o separatamente. Uomini in cerca di regali di lusso.',
  es: 'Mujeres que buscan sets de diseñador, de lujo, camisa y pantalón, camisa oversize y palazzo, sets modestos de dos piezas, sets Al Talli, patrimoniales, travelwear de lujo — moda modesta contemporánea que muestra la artesanía emiratí. Patrimonio Al Talli UNESCO, Knotted Line, crepe premium transpirable, sastrería Abu Dabi. Mujeres del Golfo, EAU, Londres, París, Milán, Nueva York; viajeras; piezas usadas juntas o por separado. Hombres en busca de regalos de lujo.',
  ru: 'Женщины, ищущие дизайнерские, люксовые комплекты, рубашку и брюки, оверсайз рубашку и palazzo, скромные двухчастные комплекты, Al Talli, наследие, luxury travelwear — скромную моду, демонстрирующую эмиратское мастерство. Наследие Al Talli ЮНЕСКО, Knotted Line, дышащий креп, крой из Абу-Даби. Женщины стран Залива, ОАЭ, Лондона, Парижа, Милана, Нью-Йорка; путешественницы; вещи вместе или отдельно. Мужчины, ищущие роскошные подарки.',
  zh: '寻求设计师套装、奢华套装、衬衫长裤套装、宽松衬衫阔腿裤套装、端庄两件套、Al Talli 套装、传承套装、奢华旅行装、日夜套装及展示阿联酋工艺的当代端庄时尚的女性；重视联合国教科文组织 Al Talli 遗产、Knotted Line 纽扣、透气高端绉绸、阿布扎比剪裁；海湾、伦敦、巴黎、米兰、纽约、多伦多衣橱；可整套或分开穿着；可请求不同尺码。寻找奢华礼品的男性。',
  de: 'Frauen, die Designer-Sets, Luxus-Koordinaten-Sets, Hemd-Hosen-Sets, Oversize-Hemd- und Palazzo-Sets, bescheidene Zweiteiler, Al-Talli-Sets, Heritage-Sets, Luxus-Reisemode und zeitgenössische bescheidene Mode suchen, die emiratisches Handwerk zeigt — UNESCO-Al-Talli, Knotted Line, atmungsaktiver Premium-Krepp, Schneiderkunst aus Abu Dhabi. Frauen im Golf, VAE, London, Paris, Mailand, New York; Reisende; zusammen oder getrennt tragbar. Männer, die Luxusgeschenke suchen.',
  nl: 'Vrouwen die designer sets, luxe coördinatiesets, overhemd-broek sets, oversized overhemd en palazzo sets, bescheiden tweedelige sets, Al Talli sets, erfgoedsets, luxe travelwear en eigentijdse bescheiden mode zoeken die Emiratisch vakmanschap toont — UNESCO Al Talli, Knotted Line, ademend premium crêpe, tailoring Abu Dhabi. Vrouwen in de Golf, VAE, Londen, Parijs, Milan, New York; reizigers; samen of apart te dragen. Mannen die luxe cadeaus zoeken.',
  pt: 'Mulheres que procuram sets de designer, luxo, camisa e calças, camisa oversize e palazzo, sets modestos de duas peças, sets Al Talli, património, travelwear de luxo — moda modesta contemporânea que mostra o artesanato emirati. Património Al Talli UNESCO, Knotted Line, crepe premium respirável, alfaiataria Abu Dhabi. Mulheres do Golfo, EAU, Londres, Paris, Milão, Nova Iorque; viajantes; peças usadas juntas ou separadamente. Homens à procura de presentes de luxo.',
  id: 'Wanita yang mencari set desainer, mewah, kemeja dan celana, kemeja oversize dan palazzo, set modest dua potong, set Al Talli, warisan, luxury travelwear — busana modest kontemporer yang memamerkan kerajinan Emirati. Warisan Al Talli UNESCO, Knotted Line, krepe premium breathable, tailoring Abu Dhabi. Wanita GCC, UEA, London, Paris, Milan, New York; pelancong; dipakai bersama atau terpisah. Pria mencari hadiah mewah.',
  ms: 'Wanita yang mencari set pereka, mewah, kemeja dan seluar, kemeja oversize dan palazzo, set sopan dua potong, set Al Talli, warisan, luxury travelwear — fesyen sopan kontemporari yang mempamerkan kraf Emirati. Warisan Al Talli UNESCO, Knotted Line, krepe premium bernafas, jahitan Abu Dhabi. Wanita GCC, UAE, London, Paris, Milan, New York; pengembara; dipakai bersama atau berasingan. Lelaki mencari hadiah mewah.',
}

export function isSohoSetSlug(slug: string): boolean {
  return slug.toLowerCase() === SOHO_SET_SLUG
}

export function getSohoSetSchemaAudience(locale: AppLocale = 'en'): string {
  return SOHO_SET_SCHEMA_AUDIENCE[locale] ?? SOHO_SET_SCHEMA_AUDIENCE.en
}

export function getSohoSetSchemaKeywords(
  locale: AppLocale = 'en',
  colorName?: string,
): string {
  return getLocalizedSohoSetExclusiveKeywords(locale, colorName).join(', ')
}

export {
  getLocalizedSohoSetSchemaFacts,
  getLocalizedSohoSetSchemaFaq,
} from '@/lib/products/sohoSetSchemaLocalePacks'

export type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'

export {
  getSohoSetPageSeo,
  getSohoSetMetaKeywords,
  getSohoSetMetaKeywordTerms,
} from '@/lib/products/sohoSetPageSeoI18n'
