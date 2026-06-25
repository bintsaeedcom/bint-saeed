import type { AppLocale } from '@/lib/i18n/routing'
import {
  getLocalizedCoventGardenAbayaExclusiveKeywords,
} from '@/lib/products/coventGardenAbayaSchemaKeywordsI18n'
import {
  COVENT_GARDEN_ABAYA_SLUG,
  getLocalizedCoventGardenAbayaSchemaFacts,
  getLocalizedCoventGardenAbayaSchemaFaq,
} from '@/lib/products/coventGardenAbayaSchemaLocalePacks'

export { COVENT_GARDEN_ABAYA_SLUG } from '@/lib/products/coventGardenAbayaSchemaLocalePacks'

export const COVENT_GARDEN_ABAYA_SCHEMA_AUDIENCE: Record<AppLocale, string> = {
  en: 'Women seeking designer abayas, luxury abayas, premium abayas, A-line abayas, formal abayas, wedding abayas, occasion abayas, open-front abayas, Al Talli abayas, heritage abayas, Emirati abayas, and contemporary modest fashion that showcases Emirati craftsmanship to the world. Women who value UNESCO-recognised Al Talli heritage, signature Knotted Line detailing, detachable statement sashes, refined tailoring, and meaningful design created in Abu Dhabi. Women in the GCC, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, Brunei, and international wardrobes across London, Paris, Toronto, New York, and beyond; Emirati women; expatriates in the Gulf; business women, diplomats, creatives, and occasionwear buyers; women pairing the abaya with the Covent Garden Dress or Hampstead Dress; and women who want abayas that carry Emirati heritage with contemporary global elegance. Men seeking meaningful luxury gifts for their wife, daughter, mother, fiancée, girlfriend, or sister.',
  ar: 'النساء الباحثات عن عبايات مصمّمة، فاخرة، راقية، بقصة A-line، رسمية، للأعراس والمناسبات، مفتوحة الأمام، بتفاصيل التلي، تراثية، إماراتية، وأزياء محتشمة معاصرة تعرض الحرفية الإماراتية للعالم. من يقدّرن التلي المعترف به من اليونسكو، تفاصيل Knotted Line، الأوشحة القابلة للفصل، والتفصيل الراقي من أبوظبي. نساء الخليج والإمارات والسعودية وقطر والكويت والبحرين وعُمان وبروناي وخزائن دولية في لندن وباريس وتورنتو ونيويورك؛ المغتربات؛ سيدات الأعمال والدبلوماسيات والمبدعات؛ من يُنسّقون مع فستان Covent Garden أو Hampstead. الرجال الباحثون عن هدايا فاخرة.',
  fr: 'Femmes en quête d’abayas de créateur, de luxe, premium, A-line, formelles, de mariage, de cérémonie, ouvertes devant, Al Talli, patrimoniales et émiraties — mode modeste contemporaine qui présente l’artisanat émirati au monde. Patrimoine Al Talli UNESCO, Knotted Line, écharpes amovibles, tailleur raffiné créé à Abou Dabi. Femmes du Golfe, des EAU, Brunei, Londres, Paris, Toronto, New York ; expatriées, femmes d’affaires ; association avec la robe Covent Garden ou Hampstead. Hommes en quête de cadeaux de luxe.',
  it: 'Donne in cerca di abaya designer, di lusso, premium, A-line, formali, da matrimonio, da cerimonia, frontali aperte, Al Talli, patrimoniali ed emiratine — modest fashion contemporanea che mostra l’artigianato emiratino al mondo. Patrimonio Al Talli UNESCO, Knotted Line, fasce removibili, sartoria raffinata da Abu Dhabi. Donne del Golfo, EAU, Brunei, Londra, Parigi, Toronto; expat, donne d’affari; abbinamento con Covent Garden Dress o Hampstead Dress. Uomini in cerca di regali di lusso.',
  es: 'Mujeres que buscan abayas de diseñador, de lujo, premium, A-line, formales, de boda, de ocasión, de frente abierto, Al Talli, patrimoniales y emiratíes — moda modesta contemporánea que muestra la artesanía emiratí al mundo. Patrimonio Al Talli UNESCO, Knotted Line, fajines desmontables, sastrería refinada de Abu Dabi. Mujeres del Golfo, EAU, Brunei, Londres, París, Toronto; expatriadas, mujeres de negocios; combinación con Covent Garden Dress o Hampstead Dress. Hombres en busca de regalos de lujo.',
  ru: 'Женщины, ищущие дизайнерские, люксовые, премиальные абайи A-line, свадебные, формальные, с открытым передом, Al Talli, наследие ОАЭ — скромную моду, демонстрирующую эмиратское мастерство миру. Наследие Al Talli ЮНЕСКО, Knotted Line, съёмные ленты, крой из Абу-Даби. Женщины стран Залива, ОАЭ, Брунея, Лондона, Парижа, Торонто; экспаты, деловые женщины; сочетание с платьями Covent Garden и Hampstead. Мужчины, ищущие роскошные подарки.',
  zh: '寻求设计师长袍、奢华长袍、A字长袍、婚礼与正式场合长袍、Al Talli传承长袍、阿联酋长袍及当代端庄时尚、向世界展示阿联酋工艺的女性；重视联合国教科文组织Al Talli遗产、Knotted Line细节、可拆卸饰带、阿布扎比精致剪裁；海湾、文莱、伦敦、巴黎、多伦多及国际衣橱；搭配Covent Garden或Hampstead连衣裙。寻找奢华礼品的男性。',
  de: 'Frauen, die Designer-, Luxus-, Premium-, A-Linien-, Hochzeits- und Anlass-Abayas, Al-Talli-Erbe-Abayas und zeitgenössische bescheidene Mode suchen, die emiratisches Handwerk der Welt zeigt — UNESCO-Al-Talli, Knotted Line, abnehmbare Schals, Schneiderkunst aus Abu Dhabi. Frauen im Golf, in den VAE, Brunei, London, Paris, Toronto; Expats, Geschäftsfrauen; Kombination mit Covent Garden- oder Hampstead-Kleid. Männer, die Luxusgeschenke suchen.',
  nl: 'Vrouwen die designer-, luxe-, premium-, A-line-, bruilofts- en gelegenheidsabaya’s, Al Talli-erfenisabaya’s en eigentijdse bescheiden mode zoeken die Emiratisch vakmanschap aan de wereld toont — UNESCO Al Talli, Knotted Line, afneembare sjaals, tailoring uit Abu Dhabi. Vrouwen in de Golf, VAE, Brunei, Londen, Parijs, Toronto; expats, zakenvrouwen; combineren met Covent Garden- of Hampstead-jurk. Mannen die luxe cadeaus zoeken.',
  pt: 'Mulheres que procuram abayas de designer, luxo, premium, A-line, formais, de casamento, de ocasião, de frente aberta, Al Talli, património e emiratias — moda modesta contemporânea que mostra o artesanato emirati ao mundo. Património Al Talli UNESCO, Knotted Line, faixas destacáveis, alfaiataria de Abu Dhabi. Mulheres do Golfo, EAU, Brunei, Londres, Paris, Toronto; expatriadas, mulheres de negócios; combinar com Covent Garden Dress ou Hampstead Dress. Homens à procura de presentes de luxo.',
  id: 'Wanita yang mencari abaya desainer, mewah, premium, A-line, formal, pernikahan, Al Talli, warisan Emirati, dan busana modest kontemporer yang memamerkan kerajinan Emirati ke dunia — warisan Al Talli UNESCO, Knotted Line, sash lepas, tailoring Abu Dhabi. Wanita GCC, UEA, Brunei, London, Paris, Toronto; ekspatriat, wanita karier; padukan dengan Covent Garden Dress atau Hampstead Dress. Pria mencari hadiah mewah.',
  ms: 'Wanita yang mencari abaya pereka, mewah, premium, A-line, formal, perkahwinan, Al Talli, warisan Emirati, dan fesyen sopan kontemporari yang mempamerkan kraf Emirati kepada dunia — warisan Al Talli UNESCO, Knotted Line, sash boleh tanggal, jahitan Abu Dhabi. Wanita GCC, UAE, Brunei, London, Paris, Toronto; ekspatriat, wanita profesional; gabung dengan Covent Garden Dress atau Hampstead Dress. Lelaki mencari hadiah mewah.',
}

export function isCoventGardenAbayaSlug(slug: string): boolean {
  return slug.toLowerCase() === COVENT_GARDEN_ABAYA_SLUG
}

export function getCoventGardenAbayaSchemaAudience(locale: AppLocale = 'en'): string {
  return COVENT_GARDEN_ABAYA_SCHEMA_AUDIENCE[locale] ?? COVENT_GARDEN_ABAYA_SCHEMA_AUDIENCE.en
}

export function getCoventGardenAbayaSchemaKeywords(
  locale: AppLocale = 'en',
  colorName?: string,
): string {
  return getLocalizedCoventGardenAbayaExclusiveKeywords(locale, colorName).join(', ')
}

export {
  getLocalizedCoventGardenAbayaSchemaFacts,
  getLocalizedCoventGardenAbayaSchemaFaq,
} from '@/lib/products/coventGardenAbayaSchemaLocalePacks'

export type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
