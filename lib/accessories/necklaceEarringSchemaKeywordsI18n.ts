import type { AppLocale } from '@/lib/i18n/routing'

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

/** Worldwide natural stone jewellery discovery — necklaces, earrings, Al Ain Rosette, conversion intent. */
const SHARED_NECKLACE_EARRING_KEYWORD_ROWS: KwRow[] = [
  ['natural stone jewellery', 'مجوهرات أحجار طبيعية', 'bijoux pierres naturelles', 'gioielli pietre naturali', 'joyería piedras naturales', 'украшения из натуральных камней', '天然石珠宝', 'Natursteinschmuck', 'natuursteen sieraden', 'joias pedras naturais'],
  ['natural gemstone jewellery', 'مجوهرات أحجار كريمة طبيعية', 'bijoux gemmes naturelles', 'gioielli gemme naturali', 'joyería gemas naturales', 'украшения из натуральных драгоценных камней', '天然宝石珠宝', 'Natur-Edelsteinschmuck', 'natuurlijke edelsteen sieraden', 'joias gemas naturais'],
  ['hand-strung gemstone necklace', 'قلادة أحجار كريمة مطرّزة يدوياً', 'collier pierres précieuses enfilé à la main', 'collana gemme infilata a mano', 'collar gemas ensartado a mano', 'ожерелье из натуральных камней ручной работы', '手工串珠宝石项链', 'handgefädelte Edelsteinkette', 'handgeregen edelsteen ketting', 'colar gemas enfiado à mão'],
  ['natural stone bead necklace', 'قلادة خرز أحجار طبيعية', 'collier perles pierres naturelles', 'collana perle pietre naturali', 'collar cuentas piedra natural', 'ожерелье из бусин натуральных камней', '天然石珠项链', 'Natursteinperlen-Halskette', 'natuursteen kralen ketting', 'colar contas pedra natural'],
  ['luxury stone bead necklace', 'قلادة خرز أحجار فاخرة', 'collier perles pierres de luxe', 'collana perle pietre di lusso', 'collar cuentas piedra de lujo', 'роскошное ожерелье из каменных бусин', '奢华石珠项链', 'Luxus-Steinperlen-Halskette', 'luxe stenen kralen ketting', 'colar contas pedra de luxo'],
  ['Al Ain Rosette necklace', 'قلادة روزيت القوع', 'collier rosette Al Ain', 'collana rosetta Al Ain', 'collar rosetón Al Ain', 'ожерелье Al Ain Rosette', 'Al Ain Rosette项链', 'Al-Ain-Rosette-Halskette', 'Al Ain rozet ketting', 'colar roseta Al Ain'],
  ['Al Ain Rosette jewellery', 'مجوهرات روزيت القوع', 'bijoux rosette Al Ain', 'gioielli rosetta Al Ain', 'joyería rosetón Al Ain', 'украшения Al Ain Rosette', 'Al Ain Rosette珠宝', 'Al-Ain-Rosette-Schmuck', 'Al Ain rozet sieraden', 'joias roseta Al Ain'],
  ['Bint Saeed Al Ain jewellery', 'مجوهرات القوع Bint Saeed', 'bijoux Al Ain Bint Saeed', 'gioielli Al Ain Bint Saeed', 'joyería Al Ain Bint Saeed', 'украшения Al Ain Bint Saeed', 'Bint Saeed Al Ain珠宝', 'Bint Saeed Al-Ain-Schmuck', 'Bint Saeed Al Ain sieraden', 'joias Al Ain Bint Saeed'],
  ['House Code jewellery', 'مجوهرات رمز الدار', 'bijoux code de la Maison', 'gioielli codice della Maison', 'joyería código de la Casa', 'украшения House Code', '品牌符号珠宝', 'House-Code-Schmuck', 'House Code sieraden', 'joias código da Casa'],
  ['Carnelian rosette necklace', 'قلادة وردة عقيق', 'collier rosette cornaline', 'collana rosetta corniola', 'collar roseta cornalina', 'ожерелье с розеткой из сердолика', '红玉髓玫瑰花项链', 'Karneol-Rosetten-Halskette', 'karneool rozet ketting', 'colar roseta cornalina'],
  ['gold-plated hematite necklace', 'قلادة هيمايت مطلي بالذهب', 'collier hématite plaqué or', 'collana ematite placcata oro', 'collar hematita baño oro', 'ожерелье с гематитом в позолоте', '镀金赤铁矿项链', 'vergoldete Hämatit-Halskette', 'verguld hematiet ketting', 'colar hematita banhado a ouro'],
  ['convertible layered necklace', 'قلادة قابلة للتحويل بطبقات', 'collier superposable convertible', 'collana stratificata convertibile', 'collar en capas convertible', 'многослойное трансформируемое ожерелье', '可转换叠戴项链', 'wandelbare geschichtete Halskette', 'convertibele gelaagde ketting', 'colar em camadas conversível'],
  ['long necklace doubled around neck', 'قلادة طويلة مضاعفة حول العنق', 'collier long doublé autour du cou', 'collana lunga doppia al collo', 'collar largo doblado al cuello', 'длинное ожерелье в два оборота', '绕颈双圈长项链', 'lange Halskette doppelt um den Hals', 'lange ketting dubbel om de hals', 'colar longo dobrado no pescoço'],
  ['18K gold-plated clasp necklace', 'قلادة بإغلاق مطلي ذهب 18 قيراط', 'collier fermoir plaqué or 18 carats', 'collana chiusura placcata oro 18K', 'collar cierre baño oro 18K', 'ожерелье с застёжкой с позолотой 18K', '18K镀金扣项链', 'Halskette mit 18K-Vergoldung', 'ketting met 18K vergulde sluiting', 'colar com fecho banhado a ouro 18K'],
  ['signature extension chain necklace', 'قلادة بسلسلة تمديد توقيعية', 'collier chaîne rallonge signature', 'collana catena estensione signature', 'collar cadena extensión firma', 'ожерелье с удлинительной цепочкой', '标志性延长链项链', 'Halskette mit Verlängerungskette', 'ketting met signature verlengketting', 'colar corrente extensão assinatura'],
  ['coordinated natural stone jewellery set', 'طقم مجوهرات أحجار طبيعية منسّق', 'ensemble bijoux pierres naturelles coordonné', 'set gioielli pietre naturali coordinato', 'conjunto joyería piedras naturales coordinado', 'координированный набор украшений из натуральных камней', '协调天然石珠宝套装', 'koordiniertes Natursteinschmuck-Set', 'gecoördineerd natuursteen sieradenset', 'conjunto joias pedras naturais coordenado'],
  ['pairs with Signature Strand', 'يتناسق مع Signature Strand', 's\'associe aux Signature Strands', 'si abbina ai Signature Strands', 'combina con Signature Strands', 'сочетается с Signature Strands', '搭配Signature Strands', 'passt zu Signature Strands', 'combineert met Signature Strands', 'combina com Signature Strands'],
  ['pairs with Al Ain Rosette Earrings', 'يتناسق مع أقراط روزيت القوع', 's\'associe aux boucles Al Ain Rosette', 'si abbina agli orecchini Al Ain Rosette', 'combina con pendientes Al Ain Rosette', 'сочетается с серьгами Al Ain Rosette', '搭配Al Ain Rosette耳环', 'passt zu Al-Ain-Rosette-Ohrringen', 'combineert met Al Ain Rosette oorbellen', 'combina com brincos Al Ain Rosette'],
  ['abaya jewellery necklace', 'قلادة مجوهرات العباءة', 'collier bijoux abaya', 'collana gioielli abaya', 'collar joyería abaya', 'ожерелье — украшение для абайи', '长袍珠宝项链', 'Abaya-Schmuck-Halskette', 'abaya sieraden ketting', 'colar joias abaya'],
  ['modest fashion stone necklace', 'قلادة أحجار أزياء محتشمة', 'collier pierres mode modeste', 'collana pietre moda modesta', 'collar piedras moda modesta', 'ожерелье из камней скромной моды', '端庄时尚石饰项链', 'bescheidene Mode-Steinkette', 'bescheiden mode stenen ketting', 'colar pedras moda modesta'],
  ['Emirati designer stone jewellery', 'مجوهرات أحجار مصمّم إماراتية', 'bijoux pierres designer émirati', 'gioielli pietre designer emiratino', 'joyería piedras diseñador emiratí', 'дизайнерские каменные украшения ОАЭ', '阿联酋设计师石饰珠宝', 'emiratischer Designer-Steinschmuck', 'Emiratisch designer stenen sieraden', 'joias pedras designer emirati'],
  ['Abu Dhabi handcrafted jewellery', 'مجوهرات مصنوعة يدوياً أبوظبي', 'bijoux artisanaux Abou Dabi', 'gioielli artigianali Abu Dhabi', 'joyería artesanal Abu Dabi', 'украшения ручной работы Абу-Даби', '阿布扎比手工珠宝', 'handgefertigter Schmuck Abu Dhabi', 'handgemaakt sieraden Abu Dhabi', 'joias artesanais Abu Dhabi'],
  ['buy natural stone necklace online', 'شراء قلادة أحجار طبيعية أونلاين', 'acheter collier pierres naturelles en ligne', 'acquista collana pietre naturali online', 'comprar collar piedras naturales online', 'купить ожерелье из натуральных камней онлайн', '在线购买天然石项链', 'Natursteinkette online kaufen', 'natuursteen ketting online kopen', 'comprar colar pedras naturais online'],
  ['luxury gemstone necklace gift', 'هدية قلادة أحجار كريمة فاخرة', 'cadeau collier gemmes de luxe', 'regalo collana gemme di lusso', 'regalo collar gemas de lujo', 'роскошный подарок — ожерелье из камней', '奢华宝石项链礼', 'Luxus-Edelsteinkette Geschenk', 'luxe edelsteen ketting cadeau', 'presente colar gemas de luxo'],
  ['GCC natural stone jewellery', 'مجوهرات أحجار طبيعية الخليج', 'bijoux pierres naturelles Golfe', 'gioielli pietre naturali Golfo', 'joyería piedras naturales Golfo', 'украшения из натуральных камней GCC', '海湾天然石珠宝', 'GCC Natursteinschmuck', 'GCC natuursteen sieraden', 'joias pedras naturais Golfo'],
  ['UAE luxury gemstone necklace', 'قلادة أحجار كريمة فاخرة الإمارات', 'collier gemmes de luxe EAU', 'collana gemme di lusso EAU', 'collar gemas de lujo EAU', 'роскошное ожерелье из камней ОАЭ', '阿联酋奢华宝石项链', 'Luxus-Edelsteinkette VAE', 'luxe edelsteen ketting VAE', 'colar gemas de luxo EAU'],
  ['Dubai designer stone necklace', 'قلادة أحجار مصمّم دبي', 'collier pierres designer Dubaï', 'collana pietre designer Dubai', 'collar piedras diseñador Dubái', 'дизайнерское каменное ожерелье Дубай', '迪拜设计师石项链', 'Designer-Steinkette Dubai', 'designer stenen ketting Dubai', 'colar pedras designer Dubai'],
  ['Saudi Arabia stone jewellery', 'مجوهرات أحجار السعودية', 'bijoux pierres Arabie saoudite', 'gioielli pietre Arabia Saudita', 'joyería piedras Arabia Saudí', 'каменные украшения Саудовская Аравия', '沙特石饰珠宝', 'Steinschmuck Saudi-Arabien', 'stenen sieraden Saoedi-Arabië', 'joias pedras Arábia Saudita'],
  ['Qatar luxury stone necklace', 'قلادة أحجار فاخرة قطر', 'collier pierres de luxe Qatar', 'collana pietre di lusso Qatar', 'collar piedras de lujo Qatar', 'роскошное каменное ожерелье Катар', '卡塔尔奢华石项链', 'Luxus-Steinkette Katar', 'luxe stenen ketting Qatar', 'colar pedras de luxo Qatar'],
  ['Kuwait designer jewellery', 'مجوهرات مصمّم الكويت', 'bijoux designer Koweït', 'gioielli designer Kuwait', 'joyería diseñador Kuwait', 'дизайнерские украшения Кувейт', '科威特设计师珠宝', 'Designer-Schmuck Kuwait', 'designer sieraden Koeweit', 'joias designer Kuwait'],
  ['London modest stone jewellery', 'مجوهرات أحجار محتشمة لندن', 'bijoux pierres modestes Londres', 'gioielli pietre modesti Londra', 'joyería piedras modesta Londres', 'скромные каменные украшения Лондон', '伦敦端庄石饰珠宝', 'bescheidener Steinschmuck London', 'bescheiden stenen sieraden Londen', 'joias pedras modestas Londres'],
  ['international shipping stone jewellery', 'شحن مجوهرات أحجار دولي', 'livraison bijoux pierres internationale', 'spedizione gioielli pietre internazionale', 'envío joyería piedras internacional', 'международная доставка каменных украшений', '国际石饰珠宝配送', 'internationaler Steinschmuckversand', 'internationale stenen sieradenverzending', 'envio internacional joias pedras'],
  ['worldwide shipping gemstone necklace', 'شحن قلادة أحجار كريمة عالمي', 'livraison collier gemmes mondiale', 'spedizione collana gemme mondiale', 'envío collar gemas mundial', 'доставка ожерелий из камней по всему миру', '全球宝石项链配送', 'weltweiter Versand Edelsteinkette', 'wereldwijde verzending edelsteen ketting', 'envio mundial colar gemas'],
  ['unique natural gemstone necklace', 'قلادة أحجار كريمة طبيعية فريدة', 'collier gemmes naturelles unique', 'collana gemme naturali unica', 'collar gemas naturales único', 'уникальное ожерелье из натуральных камней', '独特天然宝石项链', 'einzigartige Natur-Edelsteinkette', 'unieke natuurlijke edelsteen ketting', 'colar gemas naturais único'],
  ['collectible gemstone necklace', 'قلادة أحجار كريمة للجمع', 'collier gemmes de collection', 'collana gemme da collezione', 'collar gemas de colección', 'коллекционное ожерелье из камней', '收藏级宝石项链', 'Sammler-Edelsteinkette', 'verzamel edelsteen ketting', 'colar gemas de coleção'],
  ['designer natural stone earrings', 'أقراط أحجار طبيعية مصمّمة', 'boucles pierres naturelles designer', 'orecchini pietre naturali designer', 'pendientes piedras naturales diseñador', 'дизайнерские серьги из натуральных камней', '设计师天然石耳环', 'Designer-Naturstein-Ohrringe', 'designer natuursteen oorbellen', 'brincos pedras naturais designer'],
  ['pearl drop earrings UAE', 'أقراط لؤلؤ متدلية الإمارات', 'boucles perles tombantes EAU', 'orecchini perle a goccia EAU', 'pendientes perla colgante EAU', 'серьги с жемчужными каплями ОАЭ', '阿联酋珍珠吊坠耳环', 'Perlen-Tropfen-Ohrringe VAE', 'parel druppel oorbellen VAE', 'brincos pérola pendente EAU'],
  ['geometric stud earrings modest fashion', 'أقراط مرصعة هندسية أزياء محتشمة', 'clous géométriques mode modeste', 'orecchini geometrici moda modesta', 'pendientes geométricos moda modesta', 'геометрические серьги-гвоздики скромной моды', '端庄几何耳钉', 'geometrische Ohrstecker bescheidene Mode', 'geometrische stud oorbellen bescheiden mode', 'brincos geométricos moda modesta'],
  ['gold hoop earrings evening UAE', 'أقراط حلقية ذهبية مسائية الإمارات', 'créoles dorées soirée EAU', 'cerchi dorati sera EAU', 'aros dorados noche EAU', 'вечерние золотые серьги-кольца ОАЭ', '阿联酋晚宴金圈耳环', 'goldene Abend-Creolen VAE', 'gouden avond hoepel oorbellen VAE', 'argolas douradas noite EAU'],
  ['Marylebone Abaya jewellery styling', 'تنسيق مجوهرات عباءة ماريلبون', 'style bijoux abaya Marylebone', 'styling gioielli abaya Marylebone', 'estilo joyería abaya Marylebone', 'стилизация Marylebone Abaya с украшениями', 'Marylebone长袍珠宝造型', 'Marylebone-Abaya-Schmuck-Styling', 'Marylebone abaya sieraden styling', 'styling joias abaya Marylebone'],
]

const SHARED_NECKLACE_EARRING_I18N = SHARED_NECKLACE_EARRING_KEYWORD_ROWS.map(
  ([en, ar, fr, it, es, ru, zh, de, nl, pt]) => kw(en, ar, fr, it, es, ru, zh, de, nl, pt),
)

function rowsForLocale(rows: KwRow[], locale: AppLocale): string[] {
  if (locale === 'en') return rows.map((row) => row[0])
  return SHARED_NECKLACE_EARRING_I18N.map((row) => row[locale])
}

/** Shared Al Ain necklace and earring schema keywords — natural stone jewellery discovery. */
export function getNecklaceEarringSharedSchemaKeywords(locale: AppLocale = 'en'): string[] {
  return rowsForLocale(SHARED_NECKLACE_EARRING_KEYWORD_ROWS, locale)
}

const NECKLACE_STONE_ALIASES: Record<string, string[]> = {
  malachite: [
    'malachite necklace',
    'malachite bead necklace',
    'green malachite jewellery',
    'malachite gemstone necklace UAE',
    'buy malachite necklace online',
    'malachite natural stone necklace gift',
  ],
  'rose-quartz': [
    'rose quartz necklace',
    'pink quartz bead necklace',
    'blush rose quartz jewellery',
    'romantic stone necklace UAE',
    'buy rose quartz necklace online',
    'rose quartz natural stone necklace gift',
  ],
  'lapis-lazuli': [
    'lapis lazuli necklace',
    'royal blue lapis necklace',
    'lapis lazuli pyrite necklace',
    'blue gemstone necklace UAE',
    'buy lapis lazuli necklace online',
    'lapis lazuli natural stone necklace gift',
  ],
  sunstone: [
    'sunstone necklace',
    'peach sunstone bead necklace',
    'aventurescence sunstone jewellery',
    'warm sunstone necklace UAE',
    'buy sunstone necklace online',
    'sunstone natural stone necklace gift',
  ],
  'tiger-eye': [
    'tiger eye necklace',
    'chatoyant tiger eye jewellery',
    'golden brown tiger eye necklace',
    'tiger eye bead necklace UAE',
    'buy tiger eye necklace online',
    'tiger eye natural stone necklace gift',
  ],
  onyx: [
    'onyx necklace',
    'black onyx bead necklace',
    'black onyx jewellery UAE',
    'evening onyx stone necklace',
    'buy onyx necklace online',
    'onyx natural stone necklace gift',
  ],
}

const EARRING_PRODUCT_ALIASES: Record<string, string[]> = {
  'al-ain-oasis-earrings-malachite': [
    'malachite earrings',
    'Al Ain Oasis earrings',
    'natural malachite earrings UAE',
    'pairs with malachite necklace',
  ],
  'al-quaa-earrings-rose-quartz': [
    'rose quartz earrings',
    'Al Quaa earrings',
    'blush stone earrings UAE',
    'pairs with rose quartz necklace',
  ],
  'al-ain-oasis-earrings-orange-jade': [
    'orange jade earrings',
    'Al Ain Oasis earrings',
    'orange coloured jade earrings UAE',
    'pairs with Al Ain Oasis necklace',
  ],
  'al-quaa-earrings-lapis-lazuli': [
    'lapis lazuli earrings',
    'Al Quaa earrings',
    'blue stone earrings UAE',
    'pairs with lapis lazuli necklace',
  ],
}

function necklaceVariantKey(accessoryId: string): string | undefined {
  if (!accessoryId.startsWith('al-ain-oasis-necklace-')) return undefined
  return accessoryId.slice('al-ain-oasis-necklace-'.length)
}

/** Product-specific keyword variants for schema (display name + search aliases). */
export function buildNecklaceEarringProductSchemaKeywords(
  accessoryId: string,
  displayName: string,
): string[] {
  const base = displayName.trim()
  const variants = [
    base,
    `${base} Bint Saeed`,
    `${base} natural stone jewellery`,
    `${base} hand-strung necklace`,
    `${base} Al Ain Rosette`,
    `${base} Signature Strand set`,
    `buy ${base} online`,
    `${base} UAE`,
    `${base} worldwide shipping`,
    `${base} gift box`,
  ]

  const stoneKey = necklaceVariantKey(accessoryId)
  if (stoneKey && NECKLACE_STONE_ALIASES[stoneKey]) {
    variants.push(...NECKLACE_STONE_ALIASES[stoneKey])
  }

  const earringAliases = EARRING_PRODUCT_ALIASES[accessoryId]
  if (earringAliases) {
    variants.push(...earringAliases)
  }

  return variants.filter(Boolean)
}
