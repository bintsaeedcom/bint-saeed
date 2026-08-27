import type { AppLocale } from '@/lib/i18n/routing'
import type { AlQuaaPhoneCharmId } from '@/lib/accessories/phoneCharmPdpContent'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import { isAlQuaaPhoneCharmId } from '@/lib/accessories/phoneCharmPdpContent'
import { getNaturalStoneProductDiscoveryKeywords } from '@/lib/accessories/naturalStoneProductDiscoveryI18n'
import { getListedPriceForAccessory } from '@/lib/pricing/accessoryCatalogPrices'
import { SUPPORTED_CURRENCIES, type SupportedCurrency } from '@/lib/pricing/types'
import { BRAND_NAME, LOCALE_GEO } from '@/lib/i18n/brandProperNouns'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'

type StoneKey =
  | 'fuchsia-jade'
  | 'orange-jade'
  | 'onyx'
  | 'tiger-eye'
  | 'malachite'
  | 'lapis-lazuli'
  | 'rose-quartz'

const ID_TO_STONE: Record<AlQuaaPhoneCharmId, StoneKey> = {
  'al-quaa-phone-charm-fuchsia-jade': 'fuchsia-jade',
  'al-quaa-phone-charm-orange-jade': 'orange-jade',
  'al-quaa-phone-charm-onyx': 'onyx',
  'al-quaa-phone-charm-tiger-eye': 'tiger-eye',
  'al-quaa-phone-charm-malachite': 'malachite',
  'al-quaa-phone-charm-lapis-lazuli': 'lapis-lazuli',
  'al-quaa-phone-charm-rose-quartz': 'rose-quartz',
}

const STONE_LABEL: Record<AppLocale, Record<StoneKey, string>> = {
  en: {
    'fuchsia-jade': 'Fuchsia Jade',
    'orange-jade': 'Orange Jade',
    onyx: 'Onyx',
    'tiger-eye': 'Tiger Eye',
    malachite: 'Malachite',
    'lapis-lazuli': 'Lapis Lazuli',
    'rose-quartz': 'Rose Quartz',
  },
  ar: {
    'fuchsia-jade': 'يشم فوشي',
    'orange-jade': 'يشم برتقالي',
    onyx: 'أونكس',
    'tiger-eye': 'عين النمر',
    malachite: 'ملاكيت',
    'lapis-lazuli': 'لازورد',
    'rose-quartz': 'كوارتز وردي',
  },
  fr: {
    'fuchsia-jade': 'jade fuchsia',
    'orange-jade': 'jade orange',
    onyx: 'onyx',
    'tiger-eye': 'œil de tigre',
    malachite: 'malachite',
    'lapis-lazuli': 'lapis-lazuli',
    'rose-quartz': 'quartz rose',
  },
  it: {
    'fuchsia-jade': 'giada fucsia',
    'orange-jade': 'giada arancio',
    onyx: 'onice',
    'tiger-eye': 'occhio di tigre',
    malachite: 'malachite',
    'lapis-lazuli': 'lapislazzuli',
    'rose-quartz': 'quarzo rosa',
  },
  es: {
    'fuchsia-jade': 'jade fucsia',
    'orange-jade': 'jade naranja',
    onyx: 'ónix',
    'tiger-eye': 'ojo de tigre',
    malachite: 'malaquita',
    'lapis-lazuli': 'lapislázuli',
    'rose-quartz': 'cuarzo rosa',
  },
  ru: {
    'fuchsia-jade': 'фуксиевый нефрит',
    'orange-jade': 'оранжевый нефрит',
    onyx: 'оникс',
    'tiger-eye': 'тигровый глаз',
    malachite: 'малахит',
    'lapis-lazuli': 'лазурит',
    'rose-quartz': 'розовый кварц',
  },
  zh: {
    'fuchsia-jade': '紫红玉',
    'orange-jade': '橙玉',
    onyx: '缟玛瑙',
    'tiger-eye': '虎眼石',
    malachite: '孔雀石',
    'lapis-lazuli': '青金石',
    'rose-quartz': '粉晶',
  },
  de: {
    'fuchsia-jade': 'Fuchsia-Jade',
    'orange-jade': 'Orange Jade',
    onyx: 'Onyx',
    'tiger-eye': 'Tigerauge',
    malachite: 'Malachit',
    'lapis-lazuli': 'Lapislazuli',
    'rose-quartz': 'Rosenquarz',
  },
  nl: {
    'fuchsia-jade': 'fuchsia-jade',
    'orange-jade': 'oranje jade',
    onyx: 'onyx',
    'tiger-eye': 'tijgeroog',
    malachite: 'malachiet',
    'lapis-lazuli': 'lapis lazuli',
    'rose-quartz': 'rozenkwarts',
  },
  pt: {
    'fuchsia-jade': 'jade fúcsia',
    'orange-jade': 'jade laranja',
    onyx: 'ónix',
    'tiger-eye': 'olho de tigre',
    malachite: 'malaquite',
    'lapis-lazuli': 'lápis-lazúli',
    'rose-quartz': 'quartzo rosa',
  },
  id: {
    'fuchsia-jade': 'jade fuchsia',
    'orange-jade': 'jade oranye',
    onyx: 'oniks',
    'tiger-eye': 'mata harimau',
    malachite: 'malakit',
    'lapis-lazuli': 'lapis lazuli',
    'rose-quartz': 'kuarsa mawar',
  },
  ms: {
    'fuchsia-jade': 'jed fuchsia',
    'orange-jade': 'jed oren',
    onyx: 'oniks',
    'tiger-eye': 'mata harimau',
    malachite: 'malakit',
    'lapis-lazuli': 'lapis lazuli',
    'rose-quartz': 'kuarsa mawar',
  },
}

const STONE_HOOK: Record<AppLocale, Record<StoneKey, string>> = {
  en: {
    'fuchsia-jade': 'vivid fuchsia jade natural stone phone charm',
    'orange-jade': 'warm orange jade natural stone phone charm',
    onyx: 'polished onyx natural stone phone charm',
    'tiger-eye': 'chatoyant tiger eye natural stone phone charm',
    malachite: 'banded malachite natural stone phone charm',
    'lapis-lazuli': 'ultramarine lapis lazuli natural stone phone charm',
    'rose-quartz': 'soft rose quartz natural stone phone charm',
  },
  ar: {
    'fuchsia-jade': 'تعليقة هاتف من اليشم الفوشي الطبيعي',
    'orange-jade': 'تعليقة هاتف من اليشم البرتقالي الطبيعي',
    onyx: 'تعليقة هاتف من الأونكس الطبيعي المصقول',
    'tiger-eye': 'تعليقة هاتف من عين النمر الطبيعية',
    malachite: 'تعليقة هاتف من الملاكيت الطبيعي المخطط',
    'lapis-lazuli': 'تعليقة هاتف من اللازورد الطبيعي',
    'rose-quartz': 'تعليقة هاتف من الكوارتز الوردي الطبيعي',
  },
  fr: {
    'fuchsia-jade': 'breloque téléphone en jade fuchsia naturel',
    'orange-jade': 'breloque téléphone en jade orange naturel',
    onyx: 'breloque téléphone en onyx naturel poli',
    'tiger-eye': 'breloque téléphone en œil de tigre chatoyant',
    malachite: 'breloque téléphone en malachite naturelle',
    'lapis-lazuli': 'breloque téléphone en lapis-lazuli naturel',
    'rose-quartz': 'breloque téléphone en quartz rose naturel',
  },
  it: {
    'fuchsia-jade': 'ciondolo telefono in giada fucsia naturale',
    'orange-jade': 'ciondolo telefono in giada arancio naturale',
    onyx: 'ciondolo telefono in onice naturale levigato',
    'tiger-eye': 'ciondolo telefono in occhio di tigre chatoyant',
    malachite: 'ciondolo telefono in malachite naturale',
    'lapis-lazuli': 'ciondolo telefono in lapislazzuli naturale',
    'rose-quartz': 'ciondolo telefono in quarzo rosa naturale',
  },
  es: {
    'fuchsia-jade': 'colgante móvil de jade fucsia natural',
    'orange-jade': 'colgante móvil de jade naranja natural',
    onyx: 'colgante móvil de ónix natural pulido',
    'tiger-eye': 'colgante móvil de ojo de tigre chatoyant',
    malachite: 'colgante móvil de malaquita natural',
    'lapis-lazuli': 'colgante móvil de lapislázuli natural',
    'rose-quartz': 'colgante móvil de cuarzo rosa natural',
  },
  ru: {
    'fuchsia-jade': 'подвеска для телефона из натурального фуксиевого нефрита',
    'orange-jade': 'подвеска для телефона из натурального оранжевого нефрита',
    onyx: 'подвеска для телефона из полированного натурального оникса',
    'tiger-eye': 'подвеска для телефона из переливающегося тигрового глаза',
    malachite: 'подвеска для телефона из натурального малахита',
    'lapis-lazuli': 'подвеска для телефона из натурального лазурита',
    'rose-quartz': 'подвеска для телефона из натурального розового кварца',
  },
  zh: {
    'fuchsia-jade': '天然紫红玉手机挂饰',
    'orange-jade': '天然橙玉手机挂饰',
    onyx: '抛光天然缟玛瑙手机挂饰',
    'tiger-eye': '天然虎眼石手机挂饰',
    malachite: '天然孔雀石手机挂饰',
    'lapis-lazuli': '天然青金石手机挂饰',
    'rose-quartz': '天然粉晶手机挂饰',
  },
  de: {
    'fuchsia-jade': 'Telefonanhänger aus natürlicher Fuchsia-Jade',
    'orange-jade': 'Telefonanhänger aus natürlicher Orange Jade',
    onyx: 'Telefonanhänger aus poliertem Naturonyx',
    'tiger-eye': 'Telefonanhänger aus chatoyantem Tigerauge',
    malachite: 'Telefonanhänger aus natürlichem Malachit',
    'lapis-lazuli': 'Telefonanhänger aus natürlichem Lapislazuli',
    'rose-quartz': 'Telefonanhänger aus natürlichem Rosenquarz',
  },
  nl: {
    'fuchsia-jade': 'telefoonhanger van natuurlijke fuchsia-jade',
    'orange-jade': 'telefoonhanger van natuurlijke oranje jade',
    onyx: 'telefoonhanger van gepolijste natuurlijke onyx',
    'tiger-eye': 'telefoonhanger van chatoyant tijgeroog',
    malachite: 'telefoonhanger van natuurlijk malachiet',
    'lapis-lazuli': 'telefoonhanger van natuurlijke lapis lazuli',
    'rose-quartz': 'telefoonhanger van natuurlijke rozenkwarts',
  },
  pt: {
    'fuchsia-jade': 'pingente telemóvel em jade fúcsia natural',
    'orange-jade': 'pingente telemóvel em jade laranja natural',
    onyx: 'pingente telemóvel em ónix natural polido',
    'tiger-eye': 'pingente telemóvel em olho de tigre chatoyant',
    malachite: 'pingente telemóvel em malaquite natural',
    'lapis-lazuli': 'pingente telemóvel em lápis-lazúli natural',
    'rose-quartz': 'pingente telemóvel em quartzo rosa natural',
  },
  id: {
    'fuchsia-jade': 'liontin ponsel jade fuchsia alami',
    'orange-jade': 'liontin ponsel jade oranye alami',
    onyx: 'liontin ponsel oniks alami dipoles',
    'tiger-eye': 'liontin ponsel mata harimau chatoyant',
    malachite: 'liontin ponsel malakit alami',
    'lapis-lazuli': 'liontin ponsel lapis lazuli alami',
    'rose-quartz': 'liontin ponsel kuarsa mawar alami',
  },
  ms: {
    'fuchsia-jade': 'liontin telefon jed fuchsia semula jadi',
    'orange-jade': 'liontin telefon jed oren semula jadi',
    onyx: 'liontin telefon oniks semula jadi digilap',
    'tiger-eye': 'liontin telefon mata harimau chatoyant',
    malachite: 'liontin telefon malakit semula jadi',
    'lapis-lazuli': 'liontin telefon lapis lazuli semula jadi',
    'rose-quartz': 'liontin telefon kuarsa mawar semula jadi',
  },
}

const AUDIENCE: Record<AppLocale, string> = {
  en: 'Women who love natural stones, luxury phone charms, and refined accessories; collectors of gemstone jewellery; women seeking handcrafted Abu Dhabi luxury phone accessories with Al Ain Rosette motifs; gift shoppers for daughters, sisters and friends; contemporary women styling everyday phones with jewellery-like natural stone details; GCC and international clients who favour Emirati designer accessories',
  ar: 'نساء يعشقن الأحجار الطبيعية وتعليقات الهاتف الفاخرة والإكسسوارات الراقية؛ جامعات مجوهرات الأحجار الكريمة؛ نساء يبحثن عن إكسسوارات هاتف فاخرة مصنوعة يدوياً في أبوظبي مع روزيت العين؛ مشترِيات هدايا للبنات والأخوات والصديقات؛ نساء معاصرات يُزيّن هواتفهن اليومية بتفاصيل أحجار طبيعية أشبه بالمجوهرات؛ عميلات الخليج والعالم اللواتي يفضّلن إكسسوارات المصمّم الإماراتي',
  fr: 'Femmes qui aiment les pierres naturelles, les breloques de téléphone de luxe et les accessoires raffinés ; collectionneuses de bijoux en gemmes ; femmes cherchant des accessoires téléphone artisanaux d’Abou Dabi avec motif Rosette d’Al Ain ; acheteuses de cadeaux pour filles, sœurs et amies ; femmes contemporaines habillant leur téléphone quotidien de détails pierres naturelles proches du bijou ; clientèle Golfe et internationale privilégiant les accessoires designer émiratis',
  it: 'Donne che amano pietre naturali, ciondoli telefono di lusso e accessori raffinati; collezioniste di gioielli in gemme; donne in cerca di accessori telefono artigianali di Abu Dhabi con Rosetta di Al Ain; acquirenti di regali per figlie, sorelle e amiche; donne contemporanee che abbelliscono il telefono quotidiano con dettagli in pietra naturale simili a gioielli; clienti GCC e internazionali che prediligono accessori designer emiratini',
  es: 'Mujeres que aman las piedras naturales, los colgantes de móvil de lujo y los accesorios refinados; coleccionistas de joyería en gemas; mujeres que buscan accesorios de móvil artesanales de Abu Dabi con Roseta de Al Ain; compradoras de regalos para hijas, hermanas y amigas; mujeres contemporáneas que estilizan el móvil diario con detalles de piedra natural cercanos a la joyería; clientas del Golfo e internacionales que prefieren accesorios diseñador emiratíes',
  ru: 'Женщины, любящие натуральные камни, роскошные подвески для телефона и изысканные аксессуары; коллекционерки украшений из самоцветов; женщины в поиске рукотворных люксовых аксессуаров для телефона из Абу-Даби с розеткой Al Ain; покупательницы подарков для дочерей, сестёр и подруг; современные женщины, украшающие повседневный телефон деталями из натурального камня в духе ювелирных изделий; клиентки GCC и мира, предпочитающие эмиратские дизайнерские аксессуары',
  zh: '热爱天然石、奢华手机挂饰与精致配饰的女性；宝石首饰收藏者；寻觅阿布扎比手工奢华手机配饰与 Al Ain 玫瑰花饰的女性；为女儿、姐妹与友人选购礼物的买家；以近珠宝的天然石细节装点日常手机的当代女性；偏爱阿联酋设计师配饰的海湾与国际客户',
  de: 'Frauen, die Natursteine, Luxus-Telefonanhänger und raffinierte Accessoires lieben; Sammlerinnen von Edelsteinschmuck; Frauen auf der Suche nach handgefertigten Luxus-Telefonaccessoires aus Abu Dhabi mit Al-Ain-Rosette; Geschenkkäuferinnen für Töchter, Schwestern und Freundinnen; zeitgenössische Frauen, die Alltagstelefone mit schmucknahen Natursteindetails stylen; GCC- und internationale Kundinnen, die emiratische Designer-Accessoires bevorzugen',
  nl: 'Vrouwen die houden van natuursteen, luxe telefoonhangers en verfijnde accessoires; verzamelaarsters van edelsteensieraden; vrouwen op zoek naar handgemaakte luxe telefoonaccessoires uit Abu Dhabi met Al Ain Rosette; cadeaukopers voor dochters, zussen en vriendinnen; hedendaagse vrouwen die de dagelijkse telefoon stylen met juweelachtige natuursteendetails; GCC- en internationale klanten die Emiratische designeraccessoires prefereren',
  pt: 'Mulheres que amam pedras naturais, pingentes de telemóvel de luxo e acessórios refinados; colecionadoras de joias em gemas; mulheres que procuram acessórios de telemóvel artesanais de Abu Dhabi com Roseta de Al Ain; compradoras de presentes para filhas, irmãs e amigas; mulheres contemporâneas que estilizam o telemóvel do dia a dia com detalhes em pedra natural próximos da joalharia; clientes do Golfo e internacionais que preferem acessórios designer emirati',
  id: 'Wanita yang mencintai batu alam, liontin ponsel mewah, dan aksesori halus; kolektor perhiasan batu permata; wanita mencari aksesori ponsel mewah buatan tangan Abu Dhabi dengan Rosette Al Ain; pembeli hadiah untuk putri, saudari, dan sahabat; wanita kontemporer yang menata ponsel sehari-hari dengan detail batu alam mirip perhiasan; klien GCC dan internasional yang menyukai aksesori desainer Emirati',
  ms: 'Wanita yang mencintai batu semula jadi, liontin telefon mewah, dan aksesori halus; pengumpul barang kemas batu permata; wanita mencari aksesori telefon mewah buatan tangan Abu Dhabi dengan Rosette Al Ain; pembeli hadiah untuk anak perempuan, kakak dan rakan; wanita kontemporari yang menggayakan telefon harian dengan perincian batu semula jadi mirip barang kemas; pelanggan GCC dan antarabangsa yang mengutamakan aksesori pereka Emirati',
}

const SHARED_DISCOVERY: Record<AppLocale, string[]> = {
  en: [
    'natural stone phone charm',
    'luxury phone charm',
    'gemstone phone charm',
    'handcrafted phone accessory',
    'Al Quaa phone charm',
    'Al Ain Rosette phone charm',
    'Bint Saeed phone charm',
    'Abu Dhabi luxury accessories',
    'Emirati designer phone charm',
    'buy natural stone phone charm online',
    'luxury phone accessories UAE',
    'phone jewellery charm',
    'Carnelian Al Ain Rosette',
    'gold-plated hematite beads',
    'gift phone charm',
    'GCC luxury accessories',
    'worldwide shipping phone charm',
    'natural stones lovers',
    'luxury accessories for phone',
  ],
  ar: [
    'تعليقة هاتف أحجار طبيعية',
    'تعليقة هاتف فاخرة',
    'إكسسوار هاتف فاخر',
    'تعليقة هاتف القوع',
    'تعليقة هاتف روزيت العين',
    'تعليقة هاتف Bint Saeed',
    'إكسسوارات فاخرة أبوظبي',
    'تعليقة هاتف مصمّم إماراتي',
    'شراء تعليقة هاتف أحجار طبيعية أونلاين',
    'إكسسوارات هاتف فاخرة الإمارات',
    'مجوهرات هاتف',
    'روزيت العين من العقيق',
    'خرز هيمايت مطلي بالذهب',
    'هدية تعليقة هاتف',
    'إكسسوارات فاخرة الخليج',
    'شحن عالمي تعليقة هاتف',
    'عشاق الأحجار الطبيعية',
    'إكسسوارات فاخرة للهاتف',
  ],
  fr: [
    'breloque téléphone pierres naturelles',
    'breloque téléphone luxe',
    'accessoire téléphone luxe',
    'breloque Al Quaa',
    'breloque Rosette d’Al Ain',
    'breloque Bint Saeed',
    'accessoires luxe Abou Dabi',
    'breloque designer émiratie',
    'acheter breloque pierres naturelles en ligne',
    'accessoires téléphone luxe EAU',
    'bijou pour téléphone',
    'Rosette d’Al Ain cornaline',
    'hématite plaquée or',
    'cadeau breloque téléphone',
    'accessoires luxe Golfe',
    'livraison mondiale breloque',
    'amoureuses de pierres naturelles',
    'accessoires luxe pour téléphone',
  ],
  it: [
    'ciondolo telefono pietre naturali',
    'ciondolo telefono di lusso',
    'accessorio telefono lusso',
    'ciondolo Al Quaa',
    'ciondolo Rosetta di Al Ain',
    'ciondolo Bint Saeed',
    'accessori lusso Abu Dhabi',
    'ciondolo designer emiratino',
    'compra ciondolo pietre naturali online',
    'accessori telefono lusso EAU',
    'gioiello per telefono',
    'Rosetta di Al Ain corniola',
    'ematite placcata oro',
    'regalo ciondolo telefono',
    'accessori lusso Golfo',
    'spedizione mondiale ciondolo',
    'amanti delle pietre naturali',
    'accessori di lusso per telefono',
  ],
  es: [
    'colgante móvil piedra natural',
    'colgante móvil de lujo',
    'accesorio móvil lujo',
    'colgante Al Quaa',
    'colgante Roseta de Al Ain',
    'colgante Bint Saeed',
    'accesorios lujo Abu Dabi',
    'colgante diseñador emiratí',
    'comprar colgante piedra natural online',
    'accesorios móvil lujo EAU',
    'joyería para móvil',
    'Roseta de Al Ain cornalina',
    'hematita baño de oro',
    'regalo colgante móvil',
    'accesorios lujo Golfo',
    'envío mundial colgante',
    'amantes de piedras naturales',
    'accesorios de lujo para móvil',
  ],
  ru: [
    'подвеска для телефона из натурального камня',
    'роскошная подвеска для телефона',
    'люксовый аксессуар для телефона',
    'подвеска Al Quaa',
    'подвеска розетка Al Ain',
    'подвеска Bint Saeed',
    'люксовые аксессуары Абу-Даби',
    'эмиратская дизайнерская подвеска',
    'купить подвеску из натурального камня онлайн',
    'люксовые аксессуары для телефона ОАЭ',
    'украшение для телефона',
    'розетка Al Ain сердолик',
    'позолоченный гематит',
    'подарок подвеска для телефона',
    'люксовые аксессуары Залива',
    'мировая доставка подвески',
    'любительницы натуральных камней',
    'люксовые аксессуары для телефона',
  ],
  zh: [
    '天然石手机挂饰',
    '奢华手机挂饰',
    '宝石手机挂饰',
    'Al Quaa 手机挂饰',
    'Al Ain 玫瑰花饰手机挂饰',
    'Bint Saeed 手机挂饰',
    '阿布扎比奢华配饰',
    '阿联酋设计师手机挂饰',
    '在线购买天然石手机挂饰',
    '阿联酋奢华手机配饰',
    '手机珠宝挂饰',
    '红玉髓 Al Ain 玫瑰花饰',
    '镀金赤铁矿珠',
    '手机挂饰礼物',
    '海湾奢华配饰',
    '全球配送手机挂饰',
    '天然石爱好者',
    '奢华手机配饰',
  ],
  de: [
    'Naturstein-Telefonanhänger',
    'Luxus-Telefonanhänger',
    'Edelstein-Telefonanhänger',
    'Al-Quaa-Telefonanhänger',
    'Al-Ain-Rosetten-Telefonanhänger',
    'Bint-Saeed-Telefonanhänger',
    'Luxus-Accessoires Abu Dhabi',
    'emiratischer Designer-Telefonanhänger',
    'Naturstein-Telefonanhänger online kaufen',
    'Luxus-Telefonaccessoires VAE',
    'Telefon-Schmuckanhänger',
    'Karneol Al-Ain-Rosette',
    'vergoldete Hämatitperlen',
    'Geschenk Telefonanhänger',
    'GCC Luxus-Accessoires',
    'weltweiter Versand Telefonanhänger',
    'Naturstein-Liebhaberinnen',
    'Luxus-Accessoires fürs Telefon',
  ],
  nl: [
    'natuursteen telefoonhanger',
    'luxe telefoonhanger',
    'edelsteen telefoonhanger',
    'Al Quaa telefoonhanger',
    'Al Ain Rosette telefoonhanger',
    'Bint Saeed telefoonhanger',
    'luxe accessoires Abu Dhabi',
    'Emiratisch designer telefoonhanger',
    'natuursteen telefoonhanger online kopen',
    'luxe telefoonaccessoires VAE',
    'telefoonjuweel hanger',
    'carneool Al Ain Rosette',
    'verguld hematiet kralen',
    'cadeau telefoonhanger',
    'GCC luxe accessoires',
    'wereldwijde verzending telefoonhanger',
    'natuursteen liefhebbers',
    'luxe accessoires voor telefoon',
  ],
  pt: [
    'pingente telemóvel pedra natural',
    'pingente telemóvel de luxo',
    'acessório telemóvel luxo',
    'pingente Al Quaa',
    'pingente Roseta de Al Ain',
    'pingente Bint Saeed',
    'acessórios luxo Abu Dhabi',
    'pingente designer emirati',
    'comprar pingente pedra natural online',
    'acessórios telemóvel luxo EAU',
    'joia para telemóvel',
    'Roseta de Al Ain cornalina',
    'hematite banho de ouro',
    'presente pingente telemóvel',
    'acessórios luxo Golfo',
    'envio mundial pingente',
    'amantes de pedras naturais',
    'acessórios de luxo para telemóvel',
  ],
  id: [
    'liontin ponsel batu alam',
    'liontin ponsel mewah',
    'aksesori ponsel mewah',
    'liontin Al Quaa',
    'liontin Rosette Al Ain',
    'liontin Bint Saeed',
    'aksesori mewah Abu Dhabi',
    'liontin desainer Emirati',
    'beli liontin batu alam online',
    'aksesori ponsel mewah UEA',
    'perhiasan ponsel',
    'Rosette Al Ain karnelian',
    'manik hematit berlapis emas',
    'hadiah liontin ponsel',
    'aksesori mewah GCC',
    'pengiriman dunia liontin ponsel',
    'pecinta batu alam',
    'aksesori mewah untuk ponsel',
  ],
  ms: [
    'liontin telefon batu semula jadi',
    'liontin telefon mewah',
    'aksesori telefon mewah',
    'liontin Al Quaa',
    'liontin Rosette Al Ain',
    'liontin Bint Saeed',
    'aksesori mewah Abu Dhabi',
    'liontin pereka Emirati',
    'beli liontin batu semula jadi dalam talian',
    'aksesori telefon mewah UAE',
    'barang kemas telefon',
    'Rosette Al Ain karnelian',
    'manik hematit bersalut emas',
    'hadiah liontin telefon',
    'aksesori mewah GCC',
    'penghantaran dunia liontin telefon',
    'peminat batu semula jadi',
    'aksesori mewah untuk telefon',
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

function resolvePhoneCharmId(id: string): AlQuaaPhoneCharmId | undefined {
  const canonical = resolveAccessoryId(id)
  return isAlQuaaPhoneCharmId(canonical) ? canonical : undefined
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

/** Full multi-currency price string for AI / schema helpers (all supported currencies). */
export function buildPhoneCharmAllCurrencyPriceLine(accessoryId: string): string {
  const parts: string[] = []
  for (const code of SUPPORTED_CURRENCIES) {
    const amount = getListedPriceForAccessory(accessoryId, code)
    if (amount == null) continue
    parts.push(`${amount} ${code}`)
  }
  return parts.join(', ')
}

export function getPhoneCharmLocalizedDisplayName(
  id: string,
  locale: AppLocale = 'en',
): string | undefined {
  const charmId = resolvePhoneCharmId(id)
  if (!charmId) return undefined
  const stone = ID_TO_STONE[charmId]
  const label = STONE_LABEL[locale][stone] ?? STONE_LABEL.en[stone]
  const titles: Record<AppLocale, string> = {
    en: `Al Quaa Phone Charm — ${label}`,
    ar: `تعليقة هاتف القوع — ${label}`,
    fr: `Breloque téléphone Al Quaa — ${label}`,
    it: `Ciondolo telefono Al Quaa — ${label}`,
    es: `Colgante móvil Al Quaa — ${label}`,
    ru: `Подвеска для телефона Al Quaa — ${label}`,
    zh: `Al Quaa 手机挂饰 — ${label}`,
    de: `Al Quaa Telefonanhänger — ${label}`,
    nl: `Al Quaa telefoonhanger — ${label}`,
    pt: `Pingente telemóvel Al Quaa — ${label}`,
    id: `Liontin ponsel Al Quaa — ${label}`,
    ms: `Liontin telefon Al Quaa — ${label}`,
  }
  return titles[locale] ?? titles.en
}

export function getPhoneCharmSchemaAudience(locale: AppLocale = 'en'): string {
  return AUDIENCE[locale] ?? AUDIENCE.en
}

export function getPhoneCharmMetaTitle(id: string, locale: AppLocale = 'en'): string | undefined {
  const charmId = resolvePhoneCharmId(id)
  if (!charmId) return undefined
  const stone = ID_TO_STONE[charmId]
  const label = STONE_LABEL[locale][stone]
  const titles: Record<AppLocale, string> = {
    en: `Al Quaa ${label} Phone Charm | Natural Stone Luxury | ${BRAND_NAME}`,
    ar: `تعليقة هاتف القوع — ${label} | أحجار طبيعية فاخرة | ${BRAND_NAME}`,
    fr: `Breloque téléphone Al Quaa ${label} | Pierres naturelles | ${BRAND_NAME}`,
    it: `Ciondolo telefono Al Quaa ${label} | Pietre naturali | ${BRAND_NAME}`,
    es: `Colgante móvil Al Quaa ${label} | Piedra natural | ${BRAND_NAME}`,
    ru: `Подвеска Al Quaa ${label} | Натуральный камень | ${BRAND_NAME}`,
    zh: `Al Quaa ${label}手机挂饰 | 天然石奢华 | ${BRAND_NAME}`,
    de: `Al Quaa ${label} Telefonanhänger | Naturstein | ${BRAND_NAME}`,
    nl: `Al Quaa ${label} telefoonhanger | Natuursteen | ${BRAND_NAME}`,
    pt: `Pingente Al Quaa ${label} | Pedra natural | ${BRAND_NAME}`,
    id: `Liontin Al Quaa ${label} | Batu alam | ${BRAND_NAME}`,
    ms: `Liontin Al Quaa ${label} | Batu semula jadi | ${BRAND_NAME}`,
  }
  return titles[locale] ?? titles.en
}

export function getPhoneCharmMetaDescription(id: string, locale: AppLocale = 'en'): string | undefined {
  const charmId = resolvePhoneCharmId(id)
  if (!charmId) return undefined
  const stone = ID_TO_STONE[charmId]
  const hook = STONE_HOOK[locale][stone]
  const priceLine = formatPriceList(charmId)
  const geo = LOCALE_GEO[locale].madeIn
  const bodies: Record<AppLocale, string> = {
    en: `${BRAND_NAME} ${hook} hand-assembled in ${geo} with Carnelian Al Ain Rosette and gold-plated hematite. For lovers of natural stones, luxury phone charms and refined accessories. From ${priceLine}. Worldwide shipping.`,
    ar: `${BRAND_NAME} ${hook} تُجمَّع يدوياً في ${geo} مع روزيت العين من العقيق وهيمايت مطلي بالذهب. لعاشقات الأحجار الطبيعية وتعليقات الهاتف الفاخرة والإكسسوارات الراقية. من ${priceLine}. شحن عالمي.`,
    fr: `${BRAND_NAME} ${hook}, assemblée à la main à ${geo}, avec rosette d’Al Ain en cornaline et hématite plaquée or. Pour les amoureuses de pierres naturelles, breloques téléphone de luxe et accessoires raffinés. À partir de ${priceLine}. Livraison mondiale.`,
    it: `${BRAND_NAME} ${hook}, assemblato a mano a ${geo}, con Rosetta di Al Ain in corniola ed ematite placcata oro. Per chi ama pietre naturali, ciondoli telefono di lusso e accessori raffinati. Da ${priceLine}. Spedizione mondiale.`,
    es: `${BRAND_NAME} ${hook}, ensamblado a mano en ${geo}, con Roseta de Al Ain en cornalina y hematita baño de oro. Para amantes de piedras naturales, colgantes de móvil de lujo y accesorios refinados. Desde ${priceLine}. Envío mundial.`,
    ru: `${BRAND_NAME} ${hook}, собрана вручную в ${geo}, с розеткой Al Ain из сердолика и позолоченным гематитом. Для любительниц натуральных камней, роскошных подвесок для телефона и изысканных аксессуаров. От ${priceLine}. Доставка по всему миру.`,
    zh: `${BRAND_NAME}${hook}，于${geo}手工组装，配红玉髓 Al Ain 玫瑰花饰与镀金赤铁矿。献给天然石、奢华手机挂饰与精致配饰爱好者。价格 ${priceLine}。全球配送。`,
    de: `${BRAND_NAME} ${hook}, handmontiert in ${geo}, mit Karneol-Al-Ain-Rosette und vergoldetem Hämatit. Für Liebhaberinnen von Natursteinen, Luxus-Telefonanhängern und raffinierten Accessoires. Ab ${priceLine}. Weltweiter Versand.`,
    nl: `${BRAND_NAME} ${hook}, met de hand gemonteerd in ${geo}, met carneool Al Ain Rosette en verguld hematiet. Voor liefhebbers van natuursteen, luxe telefoonhangers en verfijnde accessoires. Vanaf ${priceLine}. Wereldwijde verzending.`,
    pt: `${BRAND_NAME} ${hook}, montado à mão em ${geo}, com Roseta de Al Ain em cornalina e hematite banho de ouro. Para amantes de pedras naturais, pingentes de telemóvel de luxo e acessórios refinados. A partir de ${priceLine}. Envio mundial.`,
    id: `${BRAND_NAME} ${hook}, dirakit tangan di ${geo}, dengan Rosette Al Ain karnelian dan hematit berlapis emas. Untuk pecinta batu alam, liontin ponsel mewah, dan aksesori halus. Dari ${priceLine}. Pengiriman dunia.`,
    ms: `${BRAND_NAME} ${hook}, dipasang tangan di ${geo}, dengan Rosette Al Ain karnelian dan hematit bersalut emas. Untuk peminat batu semula jadi, liontin telefon mewah dan aksesori halus. Dari ${priceLine}. Penghantaran dunia.`,
  }
  return clipMetaDescription((bodies[locale] ?? bodies.en).replace(/\s+/g, ' ').trim(), 220)
}

export function getPhoneCharmMetaKeywords(id: string, locale: AppLocale = 'en'): string[] {
  const charmId = resolvePhoneCharmId(id)
  const expanded = getNaturalStoneProductDiscoveryKeywords('phone-strands', locale)
  if (!charmId) {
    return [...(SHARED_DISCOVERY[locale] ?? SHARED_DISCOVERY.en), ...expanded]
  }
  const stone = ID_TO_STONE[charmId]
  const label = STONE_LABEL[locale][stone]
  const shared = SHARED_DISCOVERY[locale] ?? SHARED_DISCOVERY.en
  const stoneSpecific = [
    `${label} phone charm`,
    `${label} natural stone`,
    `Al Quaa ${label}`,
    `${label} jewellery accessory`,
    `buy ${label} phone charm`,
  ]
  if (locale === 'ar') {
    return [
      ...shared,
      ...expanded,
      `تعليقة هاتف ${label}`,
      `${label} حجر طبيعي`,
      `القوع ${label}`,
    ]
  }
  return [...shared, ...expanded, ...stoneSpecific]
}

export function getPhoneCharmAiOther(
  id: string,
  locale: AppLocale = 'en',
): Record<string, string> | undefined {
  const charmId = resolvePhoneCharmId(id)
  if (!charmId) return undefined
  const stone = ID_TO_STONE[charmId]
  const label = STONE_LABEL[locale][stone]
  return {
    'ai:brand': BRAND_NAME,
    'ai:category': 'Luxury natural stone phone charms; Emirati designer accessories',
    'ai:product': `Al Quaa ${label} Phone Charm`,
    'ai:materials': `${label}, Carnelian Al Ain Rosette, gold-plated faceted hematite`,
    'ai:location': LOCALE_GEO[locale].madeIn,
    'ai:offering': 'Hand-assembled natural stone phone charms and luxury accessories',
    'ai:audience': getPhoneCharmSchemaAudience(locale),
    'ai:geo': 'UAE, GCC, Abu Dhabi, Dubai, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, United Kingdom, Europe, United States, worldwide',
    'ai:intent': 'Organic discovery for natural stone lovers, luxury phone charm shoppers, gemstone accessory collectors, gift buyers',
    'ai:prices': buildPhoneCharmAllCurrencyPriceLine(charmId),
  }
}
