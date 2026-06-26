import type { AppLocale } from '@/lib/i18n/routing'
import { getLocalizedHydeParkSetExclusiveKeywords } from '@/lib/products/hydeParkSetSchemaKeywordsI18n'
import {
  HYDE_PARK_SET_SLUG,
  getLocalizedHydeParkSetSchemaFacts,
  getLocalizedHydeParkSetSchemaFaq,
} from '@/lib/products/hydeParkSetSchemaLocalePacks'

export { HYDE_PARK_SET_SLUG } from '@/lib/products/hydeParkSetSchemaLocalePacks'

export const HYDE_PARK_SET_SCHEMA_AUDIENCE: Record<AppLocale, string> = {
  en: 'Women seeking designer sets, luxury coordinate sets, shirt and trouser sets, oversized shirt and palazzo trouser sets, two-piece modest sets, Knotted Line sets, premium travelwear, day-to-evening sets, and contemporary modest fashion with understated Emirati elegance. Women who value signature Knotted Line buttons, breathable relaxed silhouettes, functional pockets, versatile styling, machine-washable premium crepe, and meaningful design created in Abu Dhabi. Women in the GCC, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and international wardrobes across Abu Dhabi, Portofino, London, Rabat, Singapore, Miami, Los Angeles, Brunei, Paris, Milan, Toronto, and beyond; business travellers, creatives, and women building versatile wardrobes; women who wear the shirt and trousers together or separately; and women requesting different shirt and trouser sizes. Men seeking meaningful luxury gifts for their wife, daughter, mother, fiancée, girlfriend, or sister.',
  ar: 'النساء الباحثات عن أطقم مصمّمة فاخرة، قميص وبنطال، قميص واسع وبنطال بالازو، أطقم محتشمة ثنائية، أطقم Knotted Line، أزياء سفر فاخرة، وأزياء محتشمة معاصرة بأناقة إماراتية رصينة. من يقدّرن أزرار Knotted Line، سيلويت مريح قابل للتنفس، جيوب وظيفية، كريب فاخر قابل للغسل، وتفصيل أبوظبي. نساء الخليج والإمارات وخزائن دولية في أبوظبي وبورتوفينو ولندن والرباط وسنغافورة وميامي ولوس أنجلوس وبروناي؛ المسافرات؛ من يرتدين القطع معاً أو منفصلة؛ من يطلبن مقاسات مختلفة. الرجال الباحثون عن هدايا فاخرة.',
  fr: 'Femmes en quête de sets de créateur, de luxe, chemise et pantalon, chemise oversize et palazzo, sets modestes deux pièces, sets Knotted Line, premium travelwear — mode modeste contemporaine à l’élégance émiratie discrète. Boutons Knotted Line, silhouette décontractée respirante, poches fonctionnelles, crêpe premium lavable, tailleur Abou Dabi. Femmes du Golfe, EAU, Abou Dabi, Portofino, Londres, Rabat, Singapour, Miami, Los Angeles, Brunei ; voyageuses ; pièces portées ensemble ou séparément. Hommes en quête de cadeaux de luxe.',
  it: 'Donne in cerca di set designer, di lusso, camicia e pantaloni, camicia oversize e palazzo, set modesti due pezzi, set Knotted Line, premium travelwear — modest fashion contemporanea con eleganza emiratina sobria. Bottoni Knotted Line, silhouette rilassata traspirante, tasche funzionali, crepe premium lavabile, sartoria Abu Dhabi. Donne del Golfo, EAU, Abu Dhabi, Portofino, Londra, Rabat, Singapore, Miami, Los Angeles, Brunei; viaggiatrici; capi indossati insieme o separatamente. Uomini in cerca di regali di lusso.',
  es: 'Mujeres que buscan sets de diseñador, de lujo, camisa y pantalón, camisa oversize y palazzo, sets modestos de dos piezas, sets Knotted Line, premium travelwear — moda modesta contemporánea con elegancia emiratí discreta. Botones Knotted Line, silueta relajada transpirable, bolsillos funcionales, crepe premium lavable, sastrería Abu Dabi. Mujeres del Golfo, EAU, Abu Dabi, Portofino, Londres, Rabat, Singapur, Miami, Los Ángeles, Brunéi; viajeras; piezas usadas juntas o por separado. Hombres en busca de regalos de lujo.',
  ru: 'Женщины, ищущие дизайнерские люксовые комплекты, рубашку и брюки, оверсайз рубашку и palazzo, скромные двухчастные комплекты, Knotted Line, premium travelwear — скромную моду с сдержанной эмиратской элегантностью. Пуговицы Knotted Line, дышащий расслабленный силуэт, функциональные карманы, стираемый креп, крой из Абу-Даби. Женщины стран Залива, ОАЭ, Абу-Даби, Портофино, Лондон, Рабат, Сингапур, Майами, Лос-Анджелес, Бруней; путешественницы; вещи вместе или отдельно. Мужчины, ищущие роскошные подарки.',
  zh: '寻求设计师奢华套装、衬衫长裤套装、宽松衬衫阔腿裤套装、端庄两件套、Knotted Line 套装、高端旅行装及含蓄阿联酋优雅的当代端庄时尚的女性；重视 Knotted Line 纽扣、透气宽松廓形、实用口袋、可机洗高端绉绸、阿布扎比剪裁；海湾、阿布扎比、波托菲诺、伦敦、拉巴特、新加坡、迈阿密、洛杉矶、文莱及国际衣橱；可整套或分开穿着；可请求不同尺码。寻找奢华礼品的男性。',
  de: 'Frauen, die Designer-Luxus-Sets, Hemd-Hosen-Sets, Oversize-Hemd- und Palazzo-Sets, bescheidene Zweiteiler, Knotted-Line-Sets, Premium-Reisemode und zeitgenössische bescheidene Mode mit zurückhaltender emiratischer Eleganz suchen. Knotted-Line-Knöpfe, atmungsaktive Silhouette, funktionale Taschen, waschbarer Premium-Krepp, Schneiderkunst aus Abu Dhabi. Frauen im Golf, VAE, Abu Dhabi, Portofino, London, Rabat, Singapur, Miami, Los Angeles, Brunei; Reisende; zusammen oder getrennt tragbar. Männer, die Luxusgeschenke suchen.',
  nl: 'Vrouwen die designer luxe sets, overhemd-broek sets, oversized overhemd en palazzo sets, bescheiden tweedelige sets, Knotted Line sets, premium travelwear en eigentijdse bescheiden mode met ingetogen Emiratische elegantie zoeken. Knotted Line knopen, ademend silhouet, functionele zakken, wasbaar premium crêpe, tailoring Abu Dhabi. Vrouwen in de Golf, VAE, Abu Dhabi, Portofino, Londen, Rabat, Singapore, Miami, Los Angeles, Brunei; reizigers; samen of apart te dragen. Mannen die luxe cadeaus zoeken.',
  pt: 'Mulheres que procuram sets de designer de luxo, camisa e calças, camisa oversize e palazzo, sets modestos de duas peças, sets Knotted Line, premium travelwear — moda modesta contemporânea com elegância emirati discreta. Botões Knotted Line, silhueta relaxada respirável, bolsos funcionais, crepe premium lavável, alfaiataria Abu Dhabi. Mulheres do Golfo, EAU, Abu Dhabi, Portofino, Londres, Rabat, Singapura, Miami, Los Angeles, Brunei; viajantes; peças usadas juntas ou separadamente. Homens à procura de presentes de luxo.',
  id: 'Wanita yang mencari set desainer mewah, kemeja dan celana, kemeja oversize dan palazzo, set modest dua potong, set Knotted Line, premium travelwear — busana modest kontemporer dengan elegansi Emirati understated. Kancing Knotted Line, siluet santai breathable, saku fungsional, krepe premium washable, tailoring Abu Dhabi. Wanita GCC, UEA, Abu Dhabi, Portofino, London, Rabat, Singapore, Miami, Los Angeles, Brunei; pelancong; dipakai bersama atau terpisah. Pria mencari hadiah mewah.',
  ms: 'Wanita yang mencari set pereka mewah, kemeja dan seluar, kemeja oversize dan palazzo, set sopan dua potong, set Knotted Line, premium travelwear — fesyen sopan kontemporari dengan keanggunan Emirati understated. Butang Knotted Line, siluet santai bernafas, poket fungsian, krepe premium boleh dibasuh, jahitan Abu Dhabi. Wanita GCC, UAE, Abu Dhabi, Portofino, London, Rabat, Singapore, Miami, Los Angeles, Brunei; pengembara; dipakai bersama atau berasingan. Lelaki mencari hadiah mewah.',
}

export function isHydeParkSetSlug(slug: string): boolean {
  return slug.toLowerCase() === HYDE_PARK_SET_SLUG
}

export function getHydeParkSetSchemaAudience(locale: AppLocale = 'en'): string {
  return HYDE_PARK_SET_SCHEMA_AUDIENCE[locale] ?? HYDE_PARK_SET_SCHEMA_AUDIENCE.en
}

export function getHydeParkSetSchemaKeywords(
  locale: AppLocale = 'en',
  colorName?: string,
): string {
  return getLocalizedHydeParkSetExclusiveKeywords(locale, colorName).join(', ')
}

export {
  getLocalizedHydeParkSetSchemaFacts,
  getLocalizedHydeParkSetSchemaFaq,
} from '@/lib/products/hydeParkSetSchemaLocalePacks'

export type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
