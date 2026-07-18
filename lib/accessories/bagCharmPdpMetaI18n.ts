import type { AppLocale } from '@/lib/i18n/routing'
import type { AlAinOasisBagCharmId } from '@/lib/accessories/bagCharmPdpContent'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import { isAlAinOasisBagCharmId } from '@/lib/accessories/bagCharmPdpContent'
import { getListedPriceForAccessory } from '@/lib/pricing/accessoryCatalogPrices'
import { SUPPORTED_CURRENCIES, type SupportedCurrency } from '@/lib/pricing/types'
import { BRAND_NAME, LOCALE_GEO } from '@/lib/i18n/brandProperNouns'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'

type OasisKey = 'oasis-i' | 'oasis-ii'

const ID_TO_OASIS: Record<AlAinOasisBagCharmId, OasisKey> = {
  'al-ain-oasis-i-bag-charm-fuchsia-jade': 'oasis-i',
  'al-ain-oasis-ii-bag-charm-fuchsia-jade': 'oasis-ii',
}

const OASIS_LABEL: Record<AppLocale, Record<OasisKey, string>> = {
  en: { 'oasis-i': 'Al Ain Oasis I', 'oasis-ii': 'Al Ain Oasis II' },
  ar: { 'oasis-i': 'واحة العين الأولى', 'oasis-ii': 'واحة العين الثانية' },
  fr: { 'oasis-i': 'Al Ain Oasis I', 'oasis-ii': 'Al Ain Oasis II' },
  it: { 'oasis-i': 'Al Ain Oasis I', 'oasis-ii': 'Al Ain Oasis II' },
  es: { 'oasis-i': 'Al Ain Oasis I', 'oasis-ii': 'Al Ain Oasis II' },
  ru: { 'oasis-i': 'Al Ain Oasis I', 'oasis-ii': 'Al Ain Oasis II' },
  zh: { 'oasis-i': 'Al Ain Oasis I', 'oasis-ii': 'Al Ain Oasis II' },
  de: { 'oasis-i': 'Al Ain Oasis I', 'oasis-ii': 'Al Ain Oasis II' },
  nl: { 'oasis-i': 'Al Ain Oasis I', 'oasis-ii': 'Al Ain Oasis II' },
  pt: { 'oasis-i': 'Al Ain Oasis I', 'oasis-ii': 'Al Ain Oasis II' },
  id: { 'oasis-i': 'Al Ain Oasis I', 'oasis-ii': 'Al Ain Oasis II' },
  ms: { 'oasis-i': 'Al Ain Oasis I', 'oasis-ii': 'Al Ain Oasis II' },
}

const OASIS_HOOK: Record<AppLocale, Record<OasisKey, string>> = {
  en: {
    'oasis-i': 'two-strand Fuchsia Jade natural stone bag charm',
    'oasis-ii': 'three-strand Fuchsia Jade natural stone bag charm',
  },
  ar: {
    'oasis-i': 'تعليقة حقيبة من اليشم الفوشي بخيطين متدفقين',
    'oasis-ii': 'تعليقة حقيبة من اليشم الفوشي بثلاثة خيوط متدفقة',
  },
  fr: {
    'oasis-i': 'breloque de sac en jade fuchsia à deux brins',
    'oasis-ii': 'breloque de sac en jade fuchsia à trois brins',
  },
  it: {
    'oasis-i': 'ciondolo borsa in giada fucsia a due fili',
    'oasis-ii': 'ciondolo borsa in giada fucsia a tre fili',
  },
  es: {
    'oasis-i': 'colgante de bolso de jade fucsia de dos hebras',
    'oasis-ii': 'colgante de bolso de jade fucsia de tres hebras',
  },
  ru: {
    'oasis-i': 'подвеска для сумки из фуксиевого нефрита на двух нитях',
    'oasis-ii': 'подвеска для сумки из фуксиевого нефрита на трёх нитях',
  },
  zh: {
    'oasis-i': '双股紫红玉天然石手袋挂饰',
    'oasis-ii': '三股紫红玉天然石手袋挂饰',
  },
  de: {
    'oasis-i': 'zweisträngiger Fuchsia-Jade Naturstein-Taschenanhänger',
    'oasis-ii': 'dreisträngiger Fuchsia-Jade Naturstein-Taschenanhänger',
  },
  nl: {
    'oasis-i': 'twee-streng fuchsia-jade natuursteen tashanger',
    'oasis-ii': 'drie-streng fuchsia-jade natuursteen tashanger',
  },
  pt: {
    'oasis-i': 'pingente de mala em jade fúcsia de duas correntes',
    'oasis-ii': 'pingente de mala em jade fúcsia de três correntes',
  },
  id: {
    'oasis-i': 'liontin tas jade fuchsia dua untaian',
    'oasis-ii': 'liontin tas jade fuchsia tiga untaian',
  },
  ms: {
    'oasis-i': 'liontin beg jed fuchsia dua untai',
    'oasis-ii': 'liontin beg jed fuchsia tiga untai',
  },
}

const AUDIENCE: Record<AppLocale, string> = {
  en: 'Women who love natural stones, luxury bag charms, and refined handbag accessories; collectors of gemstone jewellery; women seeking handcrafted Abu Dhabi luxury bag accessories with Carnelian Al Ain Rosette motifs; gift shoppers for daughters, sisters and friends; contemporary women personalising handbags and evening bags with jewellery-like natural stone details; GCC and international clients who favour Emirati designer accessories',
  ar: 'نساء يعشقن الأحجار الطبيعية وتعليقات الحقائب الفاخرة وإكسسوارات الحقائب الراقية؛ جامعات مجوهرات الأحجار الكريمة؛ نساء يبحثن عن إكسسوارات حقائب فاخرة مصنوعة يدوياً في أبوظبي مع روزيت العين من العقيق؛ مشترِيات هدايا للبنات والأخوات والصديقات؛ نساء معاصرات يُضفن طابعاً شخصياً على حقائبهن بتفاصيل أحجار طبيعية أشبه بالمجوهرات؛ عميلات الخليج والعالم اللواتي يفضّلن إكسسوارات المصمّم الإماراتي',
  fr: 'Femmes qui aiment les pierres naturelles, les breloques de sac de luxe et les accessoires de sac raffinés ; collectionneuses de bijoux en gemmes ; femmes cherchant des accessoires de sac artisanaux d’Abou Dabi avec motif Rosette d’Al Ain en cornaline ; acheteuses de cadeaux pour filles, sœurs et amies ; femmes contemporaines personnalisant sacs et pochettes avec des détails pierres naturelles proches du bijou ; clientèle Golfe et internationale privilégiant les accessoires designer émiratis',
  it: 'Donne che amano pietre naturali, ciondoli borsa di lusso e accessori borsa raffinati; collezioniste di gioielli in gemme; donne in cerca di accessori borsa artigianali di Abu Dhabi con Rosetta di Al Ain in corniola; acquirenti di regali per figlie, sorelle e amiche; donne contemporanee che personalizzano borse e clutch con dettagli in pietra naturale simili a gioielli; clienti GCC e internazionali che prediligono accessori designer emiratini',
  es: 'Mujeres que aman las piedras naturales, los colgantes de bolso de lujo y los accesorios de bolso refinados; coleccionistas de joyería en gemas; mujeres que buscan accesorios de bolso artesanales de Abu Dabi con Roseta de Al Ain en cornalina; compradoras de regalos para hijas, hermanas y amigas; mujeres contemporáneas que personalizan bolsos y clutches con detalles de piedra natural cercanos a la joyería; clientas del Golfo e internacionales que prefieren accesorios diseñador emiratíes',
  ru: 'Женщины, любящие натуральные камни, роскошные подвески для сумок и изысканные аксессуары для сумок; коллекционерки украшений из самоцветов; женщины в поиске рукотворных люксовых аксессуаров для сумок из Абу-Даби с сердоликовой розеткой Al Ain; покупательницы подарков для дочерей, сестёр и подруг; современные женщины, персонализирующие сумки деталями из натурального камня в духе ювелирных изделий; клиентки GCC и мира, предпочитающие эмиратские дизайнерские аксессуары',
  zh: '热爱天然石、奢华手袋挂饰与精致手袋配饰的女性；宝石首饰收藏者；寻觅阿布扎比手工奢华手袋配饰与红玉髓 Al Ain 玫瑰花饰的女性；为女儿、姐妹与友人选购礼物的买家；以近珠宝的天然石细节装点手袋与晚宴包的当代女性；偏爱阿联酋设计师配饰的海湾与国际客户',
  de: 'Frauen, die Natursteine, Luxus-Taschenanhänger und raffinierte Handtaschen-Accessoires lieben; Sammlerinnen von Edelsteinschmuck; Frauen auf der Suche nach handgefertigten Luxus-Taschenaccessoires aus Abu Dhabi mit Karneol-Al-Ain-Rosette; Geschenkkäuferinnen für Töchter, Schwestern und Freundinnen; zeitgenössische Frauen, die Handtaschen und Abendtaschen mit schmucknahen Natursteindetails personalisieren; GCC- und internationale Kundinnen, die emiratische Designer-Accessoires bevorzugen',
  nl: 'Vrouwen die houden van natuursteen, luxe tashangers en verfijnde handtasaccessoires; verzamelaarsters van edelsteensieraden; vrouwen op zoek naar handgemaakte luxe tasaccessoires uit Abu Dhabi met carneool Al Ain Rosette; cadeaukopers voor dochters, zussen en vriendinnen; hedendaagse vrouwen die handtassen en avondtassen personaliseren met juweelachtige natuursteendetails; GCC- en internationale klanten die Emiratische designeraccessoires prefereren',
  pt: 'Mulheres que amam pedras naturais, pingentes de mala de luxo e acessórios de mala refinados; colecionadoras de joias em gemas; mulheres que procuram acessórios de mala artesanais de Abu Dhabi com Roseta de Al Ain em cornalina; compradoras de presentes para filhas, irmãs e amigas; mulheres contemporâneas que personalizam malas e clutches com detalhes em pedra natural próximos da joalharia; clientes do Golfo e internacionais que preferem acessórios designer emirati',
  id: 'Wanita yang mencintai batu alam, liontin tas mewah, dan aksesori tas halus; kolektor perhiasan batu permata; wanita mencari aksesori tas mewah buatan tangan Abu Dhabi dengan Rosette Al Ain karnelian; pembeli hadiah untuk putri, saudari, dan sahabat; wanita kontemporer yang mempersonalisasi tas dengan detail batu alam mirip perhiasan; klien GCC dan internasional yang menyukai aksesori desainer Emirati',
  ms: 'Wanita yang mencintai batu semula jadi, liontin beg mewah, dan aksesori beg halus; pengumpul barang kemas batu permata; wanita mencari aksesori beg mewah buatan tangan Abu Dhabi dengan Rosette Al Ain karnelian; pembeli hadiah untuk anak perempuan, kakak dan rakan; wanita kontemporari yang memperibadikan beg dengan perincian batu semula jadi mirip barang kemas; pelanggan GCC dan antarabangsa yang mengutamakan aksesori pereka Emirati',
}

const SHARED_DISCOVERY: Record<AppLocale, string[]> = {
  en: [
    'natural stone bag charm',
    'luxury bag charm',
    'gemstone bag charm',
    'handcrafted bag accessory',
    'Al Ain Oasis bag charm',
    'Al Ain Rosette bag charm',
    'Bint Saeed bag charm',
    'Abu Dhabi luxury accessories',
    'Emirati designer bag charm',
    'buy natural stone bag charm online',
    'luxury handbag accessories UAE',
    'Fuchsia Jade bag charm',
    'Carnelian Al Ain Rosette',
    'gold-plated hematite beads',
    'gift bag charm',
    'GCC luxury accessories',
    'worldwide shipping bag charm',
    'natural stones lovers',
    'luxury accessories for handbags',
    'keyring natural stone charm',
  ],
  ar: [
    'تعليقة حقيبة أحجار طبيعية',
    'تعليقة حقيبة فاخرة',
    'إكسسوار حقيبة فاخر',
    'تعليقة حقيبة واحة العين',
    'تعليقة حقيبة روزيت العين',
    'تعليقة حقيبة Bint Saeed',
    'إكسسوارات فاخرة أبوظبي',
    'تعليقة حقيبة مصمّم إماراتي',
    'شراء تعليقة حقيبة أحجار طبيعية أونلاين',
    'إكسسوارات حقائب فاخرة الإمارات',
    'تعليقة حقيبة يشم فوشي',
    'روزيت العين من العقيق',
    'خرز هيمايت مطلي بالذهب',
    'هدية تعليقة حقيبة',
    'إكسسوارات فاخرة الخليج',
    'شحن عالمي تعليقة حقيبة',
    'عشاق الأحجار الطبيعية',
    'إكسسوارات فاخرة للحقائب',
  ],
  fr: [
    'breloque sac pierres naturelles',
    'breloque sac luxe',
    'accessoire sac luxe',
    'breloque Al Ain Oasis',
    'breloque Rosette d’Al Ain',
    'breloque Bint Saeed',
    'accessoires luxe Abou Dabi',
    'breloque designer émiratie',
    'acheter breloque sac pierres naturelles en ligne',
    'accessoires sac à main luxe EAU',
    'breloque jade fuchsia',
    'Rosette d’Al Ain cornaline',
    'hématite plaquée or',
    'cadeau breloque sac',
    'accessoires luxe Golfe',
    'livraison mondiale breloque sac',
    'amoureuses de pierres naturelles',
    'accessoires luxe pour sacs',
  ],
  it: [
    'ciondolo borsa pietre naturali',
    'ciondolo borsa di lusso',
    'accessorio borsa lusso',
    'ciondolo Al Ain Oasis',
    'ciondolo Rosetta di Al Ain',
    'ciondolo Bint Saeed',
    'accessori lusso Abu Dhabi',
    'ciondolo designer emiratino',
    'compra ciondolo borsa pietre naturali online',
    'accessori borsa lusso EAU',
    'ciondolo giada fucsia',
    'Rosetta di Al Ain corniola',
    'ematite placcata oro',
    'regalo ciondolo borsa',
    'accessori lusso Golfo',
    'spedizione mondiale ciondolo borsa',
    'amanti delle pietre naturali',
    'accessori di lusso per borse',
  ],
  es: [
    'colgante bolso piedra natural',
    'colgante bolso de lujo',
    'accesorio bolso lujo',
    'colgante Al Ain Oasis',
    'colgante Roseta de Al Ain',
    'colgante Bint Saeed',
    'accesorios lujo Abu Dabi',
    'colgante diseñador emiratí',
    'comprar colgante bolso piedra natural online',
    'accesorios bolso lujo EAU',
    'colgante jade fucsia',
    'Roseta de Al Ain cornalina',
    'hematita baño de oro',
    'regalo colgante bolso',
    'accesorios lujo Golfo',
    'envío mundial colgante bolso',
    'amantes de piedras naturales',
    'accesorios de lujo para bolsos',
  ],
  ru: [
    'подвеска для сумки из натурального камня',
    'роскошная подвеска для сумки',
    'люксовый аксессуар для сумки',
    'подвеска Al Ain Oasis',
    'подвеска розетка Al Ain',
    'подвеска Bint Saeed',
    'люксовые аксессуары Абу-Даби',
    'эмиратская дизайнерская подвеска для сумки',
    'купить подвеску для сумки из натурального камня онлайн',
    'люксовые аксессуары для сумок ОАЭ',
    'подвеска фуксиевый нефрит',
    'розетка Al Ain сердолик',
    'позолоченный гематит',
    'подарок подвеска для сумки',
    'люксовые аксессуары Залива',
    'мировая доставка подвески для сумки',
    'любительницы натуральных камней',
    'люксовые аксессуары для сумок',
  ],
  zh: [
    '天然石手袋挂饰',
    '奢华手袋挂饰',
    '宝石手袋挂饰',
    'Al Ain Oasis 手袋挂饰',
    'Al Ain 玫瑰花饰手袋挂饰',
    'Bint Saeed 手袋挂饰',
    '阿布扎比奢华配饰',
    '阿联酋设计师手袋挂饰',
    '在线购买天然石手袋挂饰',
    '阿联酋奢华手袋配饰',
    '紫红玉手袋挂饰',
    '红玉髓 Al Ain 玫瑰花饰',
    '镀金赤铁矿珠',
    '手袋挂饰礼物',
    '海湾奢华配饰',
    '全球配送手袋挂饰',
    '天然石爱好者',
    '奢华手袋配饰',
  ],
  de: [
    'Naturstein-Taschenanhänger',
    'Luxus-Taschenanhänger',
    'Edelstein-Taschenanhänger',
    'Al-Ain-Oasis-Taschenanhänger',
    'Al-Ain-Rosetten-Taschenanhänger',
    'Bint-Saeed-Taschenanhänger',
    'Luxus-Accessoires Abu Dhabi',
    'emiratischer Designer-Taschenanhänger',
    'Naturstein-Taschenanhänger online kaufen',
    'Luxus-Handtaschenaccessoires VAE',
    'Fuchsia-Jade-Taschenanhänger',
    'Karneol Al-Ain-Rosette',
    'vergoldete Hämatitperlen',
    'Geschenk Taschenanhänger',
    'GCC Luxus-Accessoires',
    'weltweiter Versand Taschenanhänger',
    'Naturstein-Liebhaberinnen',
    'Luxus-Accessoires für Handtaschen',
  ],
  nl: [
    'natuursteen tashanger',
    'luxe tashanger',
    'edelsteen tashanger',
    'Al Ain Oasis tashanger',
    'Al Ain Rosette tashanger',
    'Bint Saeed tashanger',
    'luxe accessoires Abu Dhabi',
    'Emiratisch designer tashanger',
    'natuursteen tashanger online kopen',
    'luxe handtasaccessoires VAE',
    'fuchsia-jade tashanger',
    'carneool Al Ain Rosette',
    'verguld hematiet kralen',
    'cadeau tashanger',
    'GCC luxe accessoires',
    'wereldwijde verzending tashanger',
    'natuursteen liefhebbers',
    'luxe accessoires voor handtassen',
  ],
  pt: [
    'pingente mala pedra natural',
    'pingente mala de luxo',
    'acessório mala luxo',
    'pingente Al Ain Oasis',
    'pingente Roseta de Al Ain',
    'pingente Bint Saeed',
    'acessórios luxo Abu Dhabi',
    'pingente designer emirati',
    'comprar pingente mala pedra natural online',
    'acessórios mala luxo EAU',
    'pingente jade fúcsia',
    'Roseta de Al Ain cornalina',
    'hematite banho de ouro',
    'presente pingente mala',
    'acessórios luxo Golfo',
    'envio mundial pingente mala',
    'amantes de pedras naturais',
    'acessórios de luxo para malas',
  ],
  id: [
    'liontin tas batu alam',
    'liontin tas mewah',
    'aksesori tas mewah',
    'liontin Al Ain Oasis',
    'liontin Rosette Al Ain',
    'liontin Bint Saeed',
    'aksesori mewah Abu Dhabi',
    'liontin desainer Emirati',
    'beli liontin tas batu alam online',
    'aksesori tas mewah UEA',
    'liontin jade fuchsia',
    'Rosette Al Ain karnelian',
    'manik hematit berlapis emas',
    'hadiah liontin tas',
    'aksesori mewah GCC',
    'pengiriman dunia liontin tas',
    'pecinta batu alam',
    'aksesori mewah untuk tas',
  ],
  ms: [
    'liontin beg batu semula jadi',
    'liontin beg mewah',
    'aksesori beg mewah',
    'liontin Al Ain Oasis',
    'liontin Rosette Al Ain',
    'liontin Bint Saeed',
    'aksesori mewah Abu Dhabi',
    'liontin pereka Emirati',
    'beli liontin beg batu semula jadi dalam talian',
    'aksesori beg mewah UAE',
    'liontin jed fuchsia',
    'Rosette Al Ain karnelian',
    'manik hematit bersalut emas',
    'hadiah liontin beg',
    'aksesori mewah GCC',
    'penghantaran dunia liontin beg',
    'peminat batu semula jadi',
    'aksesori mewah untuk beg',
  ],
}

const PRICE_CURRENCIES_FOR_META: SupportedCurrency[] = [
  'AED',
  'EUR',
  'USD',
  'GBP',
  'SAR',
  'QAR',
]

function resolveBagCharmId(id: string): AlAinOasisBagCharmId | undefined {
  const canonical = resolveAccessoryId(id)
  return isAlAinOasisBagCharmId(canonical) ? canonical : undefined
}

function formatPriceList(accessoryId: string): string {
  const parts: string[] = []
  for (const code of PRICE_CURRENCIES_FOR_META) {
    const amount = getListedPriceForAccessory(accessoryId, code)
    if (amount == null) continue
    parts.push(`${amount} ${code}`)
  }
  return parts.join(' · ')
}

export function buildBagCharmAllCurrencyPriceLine(accessoryId: string): string {
  const parts: string[] = []
  for (const code of SUPPORTED_CURRENCIES) {
    const amount = getListedPriceForAccessory(accessoryId, code)
    if (amount == null) continue
    parts.push(`${amount} ${code}`)
  }
  return parts.join(', ')
}

export function getBagCharmLocalizedDisplayName(
  id: string,
  locale: AppLocale = 'en',
): string | undefined {
  const charmId = resolveBagCharmId(id)
  if (!charmId) return undefined
  const oasis = ID_TO_OASIS[charmId]
  const label = OASIS_LABEL[locale][oasis] ?? OASIS_LABEL.en[oasis]
  const stone: Record<AppLocale, string> = {
    en: 'Fuchsia Jade',
    ar: 'يشم فوشي',
    fr: 'Jade fuchsia',
    it: 'Giada fucsia',
    es: 'Jade fucsia',
    ru: 'фуксиевый нефрит',
    zh: '紫红玉',
    de: 'Fuchsia-Jade',
    nl: 'Fuchsia-jade',
    pt: 'Jade fúcsia',
    id: 'Jade fuchsia',
    ms: 'Jed fuchsia',
  }
  const stoneLabel = stone[locale] ?? stone.en
  const titles: Record<AppLocale, string> = {
    en: `${label} Bag Charm — ${stoneLabel}`,
    ar: `تعليقة حقيبة ${label} — ${stoneLabel}`,
    fr: `Charm sac ${label} — ${stoneLabel}`,
    it: `Charm per borsa ${label} — ${stoneLabel}`,
    es: `Charm para bolso ${label} — ${stoneLabel}`,
    ru: `Шарм для сумки ${label} — ${stoneLabel}`,
    zh: `${label}包饰 — ${stoneLabel}`,
    de: `${label} Taschenanhänger — ${stoneLabel}`,
    nl: `${label} tashanger — ${stoneLabel}`,
    pt: `Charm para mala ${label} — ${stoneLabel}`,
    id: `Charm tas ${label} — ${stoneLabel}`,
    ms: `Charm beg ${label} — ${stoneLabel}`,
  }
  return titles[locale] ?? titles.en
}

export function getBagCharmSchemaAudience(locale: AppLocale = 'en'): string {
  return AUDIENCE[locale] ?? AUDIENCE.en
}

export function getBagCharmMetaTitle(id: string, locale: AppLocale = 'en'): string | undefined {
  const charmId = resolveBagCharmId(id)
  if (!charmId) return undefined
  const oasis = ID_TO_OASIS[charmId]
  const label = OASIS_LABEL[locale][oasis]
  const titles: Record<AppLocale, string> = {
    en: `${label} Bag Charm | Fuchsia Jade Natural Stone | ${BRAND_NAME}`,
    ar: `تعليقة حقيبة ${label} | يشم فوشي أحجار طبيعية | ${BRAND_NAME}`,
    fr: `Breloque de sac ${label} | Jade fuchsia | ${BRAND_NAME}`,
    it: `Ciondolo borsa ${label} | Giada fucsia | ${BRAND_NAME}`,
    es: `Colgante bolso ${label} | Jade fucsia | ${BRAND_NAME}`,
    ru: `Подвеска для сумки ${label} | Фуксиевый нефрит | ${BRAND_NAME}`,
    zh: `${label}手袋挂饰 | 紫红玉天然石 | ${BRAND_NAME}`,
    de: `${label} Taschenanhänger | Fuchsia-Jade | ${BRAND_NAME}`,
    nl: `${label} tashanger | Fuchsia-jade | ${BRAND_NAME}`,
    pt: `Pingente mala ${label} | Jade fúcsia | ${BRAND_NAME}`,
    id: `Liontin tas ${label} | Jade fuchsia | ${BRAND_NAME}`,
    ms: `Liontin beg ${label} | Jed fuchsia | ${BRAND_NAME}`,
  }
  return titles[locale] ?? titles.en
}

export function getBagCharmMetaDescription(id: string, locale: AppLocale = 'en'): string | undefined {
  const charmId = resolveBagCharmId(id)
  if (!charmId) return undefined
  const oasis = ID_TO_OASIS[charmId]
  const hook = OASIS_HOOK[locale][oasis]
  const priceLine = formatPriceList(charmId)
  const geo = LOCALE_GEO[locale].madeIn
  const bodies: Record<AppLocale, string> = {
    en: `${BRAND_NAME} ${hook} hand-assembled in ${geo} with Carnelian Al Ain Rosette and gold-plated hematite. For lovers of natural stones, luxury bag charms and refined handbag accessories. From ${priceLine}. Worldwide shipping.`,
    ar: `${BRAND_NAME} ${hook} تُجمَّع يدوياً في ${geo} مع روزيت العين من العقيق وهيمايت مطلي بالذهب. لعاشقات الأحجار الطبيعية وتعليقات الحقائب الفاخرة وإكسسوارات الحقائب الراقية. من ${priceLine}. شحن عالمي.`,
    fr: `${BRAND_NAME} ${hook}, assemblée à la main à ${geo}, avec rosette d’Al Ain en cornaline et hématite plaquée or. Pour les amoureuses de pierres naturelles, breloques de sac de luxe et accessoires de sac raffinés. À partir de ${priceLine}. Livraison mondiale.`,
    it: `${BRAND_NAME} ${hook}, assemblato a mano a ${geo}, con Rosetta di Al Ain in corniola ed ematite placcata oro. Per chi ama pietre naturali, ciondoli borsa di lusso e accessori borsa raffinati. Da ${priceLine}. Spedizione mondiale.`,
    es: `${BRAND_NAME} ${hook}, ensamblado a mano en ${geo}, con Roseta de Al Ain en cornalina y hematita baño de oro. Para amantes de piedras naturales, colgantes de bolso de lujo y accesorios de bolso refinados. Desde ${priceLine}. Envío mundial.`,
    ru: `${BRAND_NAME} ${hook}, собрана вручную в ${geo}, с сердоликовой розеткой Al Ain и позолоченным гематитом. Для любительниц натуральных камней, роскошных подвесок для сумок и изысканных аксессуаров. От ${priceLine}. Доставка по всему миру.`,
    zh: `${BRAND_NAME}${hook}，于${geo}手工组装，配红玉髓 Al Ain 玫瑰花饰与镀金赤铁矿。献给天然石、奢华手袋挂饰与精致手袋配饰爱好者。价格 ${priceLine}。全球配送。`,
    de: `${BRAND_NAME} ${hook}, handmontiert in ${geo}, mit Karneol-Al-Ain-Rosette und vergoldetem Hämatit. Für Liebhaberinnen von Natursteinen, Luxus-Taschenanhängern und raffinierten Handtaschen-Accessoires. Ab ${priceLine}. Weltweiter Versand.`,
    nl: `${BRAND_NAME} ${hook}, met de hand gemonteerd in ${geo}, met carneool Al Ain Rosette en verguld hematiet. Voor liefhebbers van natuursteen, luxe tashangers en verfijnde handtasaccessoires. Vanaf ${priceLine}. Wereldwijde verzending.`,
    pt: `${BRAND_NAME} ${hook}, montado à mão em ${geo}, com Roseta de Al Ain em cornalina e hematite banho de ouro. Para amantes de pedras naturais, pingentes de mala de luxo e acessórios de mala refinados. A partir de ${priceLine}. Envio mundial.`,
    id: `${BRAND_NAME} ${hook}, dirakit tangan di ${geo}, dengan Rosette Al Ain karnelian dan hematit berlapis emas. Untuk pecinta batu alam, liontin tas mewah, dan aksesori tas halus. Dari ${priceLine}. Pengiriman dunia.`,
    ms: `${BRAND_NAME} ${hook}, dipasang tangan di ${geo}, dengan Rosette Al Ain karnelian dan hematit bersalut emas. Untuk peminat batu semula jadi, liontin beg mewah dan aksesori beg halus. Dari ${priceLine}. Penghantaran dunia.`,
  }
  return clipMetaDescription((bodies[locale] ?? bodies.en).replace(/\s+/g, ' ').trim(), 220)
}

export function getBagCharmMetaKeywords(id: string, locale: AppLocale = 'en'): string[] {
  const charmId = resolveBagCharmId(id)
  if (!charmId) return SHARED_DISCOVERY[locale] ?? SHARED_DISCOVERY.en
  const oasis = ID_TO_OASIS[charmId]
  const label = OASIS_LABEL[locale][oasis]
  const shared = SHARED_DISCOVERY[locale] ?? SHARED_DISCOVERY.en
  const strandHint = oasis === 'oasis-i' ? 'two strand bag charm' : 'three strand bag charm'
  return [...shared, `${label} bag charm`, `${label} Fuchsia Jade`, strandHint, `buy ${label}`]
}

export function getBagCharmAiOther(
  id: string,
  locale: AppLocale = 'en',
): Record<string, string> | undefined {
  const charmId = resolveBagCharmId(id)
  if (!charmId) return undefined
  const oasis = ID_TO_OASIS[charmId]
  const label = OASIS_LABEL[locale][oasis]
  const strands = oasis === 'oasis-i' ? '2 cascading strands' : '3 cascading strands'
  return {
    'ai:brand': BRAND_NAME,
    'ai:category': 'Luxury natural stone bag charms; Emirati designer handbag accessories',
    'ai:product': `${label} Bag Charm — Fuchsia Jade`,
    'ai:materials': `Fuchsia Jade, Carnelian Al Ain Rosette, gold-plated faceted hematite; ${strands}`,
    'ai:location': LOCALE_GEO[locale].madeIn,
    'ai:offering': 'Hand-assembled natural stone bag charms and luxury handbag accessories',
    'ai:audience': getBagCharmSchemaAudience(locale),
    'ai:geo': 'UAE, GCC, Abu Dhabi, Dubai, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, United Kingdom, Europe, United States, worldwide',
    'ai:intent': 'Organic discovery for natural stone lovers, luxury bag charm shoppers, gemstone accessory collectors, gift buyers, handbag personalisation',
    'ai:prices': buildBagCharmAllCurrencyPriceLine(charmId),
  }
}
