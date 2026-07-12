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
  id?: string,
  ms?: string,
): Record<AppLocale, string> {
  return { en, ar, fr, it, es, ru, zh, de, nl, pt, id: id ?? en, ms: ms ?? en }
}

type KwRow = [string, string, string, string, string, string, string, string, string, string]

/** Worldwide discovery: abaya jewellery, garment jewellery, signature strands, conversion intent. */
const SHARED_STRAND_KEYWORD_ROWS: KwRow[] = [
  ['Signature Strands', 'ستراندات التوقيع', 'Signature Strands', 'Signature Strands', 'Signature Strands', 'Signature Strands', 'Signature Strands', 'Signature Strands', 'Signature Strands', 'Signature Strands'],
  ['Bint Saeed Signature Strands', 'ستراندات التوقيع Bint Saeed', 'Signature Strands Bint Saeed', 'Signature Strands Bint Saeed', 'Signature Strands Bint Saeed', 'Signature Strands Bint Saeed', 'Bint Saeed Signature Strands', 'Bint Saeed Signature Strands', 'Bint Saeed Signature Strands', 'Signature Strands Bint Saeed'],
  ['abaya jewellery', 'مجوهرات العباءة', 'bijoux abaya', 'gioielli abaya', 'joyería abaya', 'украшения для абайи', '长袍珠宝', 'Abaya-Schmuck', 'abaya sieraden', 'joias abaya'],
  ['abaya strand jewellery', 'مجوهرات سلسلة العباءة', 'bijoux fil abaya', 'gioielli filo abaya', 'joyería hilo abaya', 'украшения-нити для абайи', '长袍链饰珠宝', 'Abaya-Strang-Schmuck', 'abaya streng sieraden', 'joias fio abaya'],
  ['garment jewellery', 'مجوهرات الملابس', 'bijoux pour vêtements', 'gioielli per capi', 'joyería para prendas', 'украшения для одежды', '服装珠宝', 'Kleidungsschmuck', 'kleding sieraden', 'joias para vestuário'],
  ['garment adornment', 'زينة الملابس', 'ornement de vêtement', 'ornamento per capo', 'adorno de prenda', 'украшение для одежды', '服装装饰', 'Kleidungsverzierung', 'kledingversiering', 'adorno de vestuário'],
  ['detachable garment jewellery', 'مجوهرات ملابس قابلة للفصل', 'bijoux vêtement amovible', 'gioielli capo staccabili', 'joyería prenda desmontable', 'съёмные украшения для одежды', '可拆卸服装珠宝', 'abnehmbarer Kleidungsschmuck', 'afneembare kleding sieraden', 'joias vestuário destacável'],
  ['interchangeable abaya jewellery', 'مجوهرات عباءة قابلة للتبديل', 'bijoux abaya interchangeables', 'gioielli abaya intercambiabili', 'joyería abaya intercambiable', 'сменные украшения для абайи', '可更换长袍珠宝', 'austauschbarer Abaya-Schmuck', 'verwisselbare abaya sieraden', 'joias abaya intercambiáveis'],
  ['natural stone garment jewellery', 'مجوهرات ملابس أحجار طبيعية', 'bijoux vêtement pierres naturelles', 'gioielli capo pietre naturali', 'joyería prenda piedra natural', 'украшения для одежды из натуральных камней', '天然石服装珠宝', 'Naturstein-Kleidungsschmuck', 'natuursteen kleding sieraden', 'joias vestuário pedra natural'],
  ['natural stone abaya strand', 'سلسلة عباءة أحجار طبيعية', 'fil abaya pierres naturelles', 'filo abaya pietre naturali', 'hilo abaya piedra natural', 'нить для абайи из натуральных камней', '天然石长袍链饰', 'Naturstein-Abaya-Strang', 'natuursteen abaya streng', 'fio abaya pedra natural'],
  ['interchangeable abaya strand', 'سلسلة عباءة قابلة للتبديل', 'fil abaya interchangeable', 'filo abaya intercambiabile', 'hilo abaya intercambiable', 'сменная нить для абайи', '可更换长袍链饰', 'austauschbarer Abaya-Strang', 'verwisselbare abaya streng', 'fio abaya intercambiável'],
  ['clip-on abaya strand', 'سلسلة عباءة بحلقة تعليق', 'fil abaya à clip', 'filo abaya con clip', 'hilo abaya con clip', 'нить для абайи на зажиме', '夹扣长袍链饰', 'Abaya-Strang mit Clip', 'abaya streng met clip', 'fio abaya com clip'],
  ['Marylebone Abaya strand', 'سلسلة عباءة ماريلبون', 'fil abaya Marylebone', 'filo abaya Marylebone', 'hilo abaya Marylebone', 'нить Marylebone Abaya', 'Marylebone长袍链饰', 'Marylebone-Abaya-Strang', 'Marylebone abaya streng', 'fio abaya Marylebone'],
  ['cuff strand abaya', 'سلسلة كُم العباءة', 'fil de manchette abaya', 'filo polsino abaya', 'hilo puño abaya', 'нить на манжете абайи', '长袍袖口链饰', 'Abaya-Manschetten-Strang', 'manchet abaya streng', 'fio punho abaya'],
  ['Al Ain rosette strand', 'سلسلة وردة القوع', 'fil rosette Al Ain', 'filo rosetta Al Ain', 'hilo rosetón Al Ain', 'нить Al Ain rosette', 'Al Ain玫瑰花链饰', 'Al Ain Rosetten-Strang', 'Al Ain rozet streng', 'fio roseta Al Ain'],
  ['hand-strung gemstone strand', 'سلسلة أحجار كريمة مطرّزة يدوياً', 'fil pierres précieuses enfilé à la main', 'filo gemme infilato a mano', 'hilo gemas ensartado a mano', 'нить из натуральных камней ручной работы', '手工串珠宝石链饰', 'handgefädelter Edelstein-Strang', 'handgeregen edelsteen streng', 'fio gemas enfiado à mão'],
  ['18K gold plated clip strand', 'سلسلة بمشبك مطلي ذهب 18 قيراط', 'fil clip plaqué or 18 carats', 'filo clip placcato oro 18K', 'hilo clip baño oro 18K', 'нить с зажимом с позолотой 18K', '18K镀金夹扣链饰', '18K vergoldeter Clip-Strang', '18K vergulde clip streng', 'fio clip banhado a ouro 18K'],
  ['modest fashion jewellery', 'مجوهرات أزياء محتشمة', 'bijoux mode modeste', 'gioielli moda modesta', 'joyería moda modesta', 'украшения скромной моды', '端庄时尚珠宝', 'bescheidener Mode-Schmuck', 'bescheiden mode sieraden', 'joias moda modesta'],
  ['luxury abaya accessory', 'إكسسوار عباءة فاخر', 'accessoire abaya de luxe', 'accessorio abaya di lusso', 'accesorio abaya de lujo', 'роскошный аксессуар для абайи', '奢华长袍配饰', 'Luxus-Abaya-Accessoire', 'luxe abaya accessoire', 'acessório abaya de luxo'],
  ['Abu Dhabi handcrafted strand', 'سلسلة مصنوعة يدوياً أبوظبي', 'fil artisanal Abou Dabi', 'filo artigianale Abu Dhabi', 'hilo artesanal Abu Dabi', 'нить ручной работы Абу-Даби', '阿布扎比手工链饰', 'handgefertigter Strang Abu Dhabi', 'handgemaakte streng Abu Dhabi', 'fio artesanal Abu Dhabi'],
  ['Emirati designer abaya jewellery', 'مجوهرات عباءة مصمّم إماراتية', 'bijoux abaya designer émirati', 'gioielli abaya designer emiratino', 'joyería abaya diseñador emiratí', 'дизайнерские украшения для абайи ОАЭ', '阿联酋设计师长袍珠宝', 'emiratischer Designer-Abaya-Schmuck', 'Emiratisch designer abaya sieraden', 'joias abaya designer emirati'],
  ['buy abaya strand online', 'شراء سلسلة عباءة أونلاين', 'acheter fil abaya en ligne', 'acquista filo abaya online', 'comprar hilo abaya online', 'купить нить для абайи онлайн', '在线购买长袍链饰', 'Abaya-Strang online kaufen', 'abaya streng online kopen', 'comprar fio abaya online'],
  ['buy garment jewellery online', 'شراء مجوهرات ملابس أونلاين', 'acheter bijoux vêtement en ligne', 'acquista gioielli capo online', 'comprar joyería prenda online', 'купить украшения для одежды онлайн', '在线购买服装珠宝', 'Kleidungsschmuck online kaufen', 'kleding sieraden online kopen', 'comprar joias vestuário online'],
  ['luxury gift abaya jewellery', 'هدية مجوهرات عباءة فاخرة', 'cadeau bijoux abaya de luxe', 'regalo gioielli abaya di lusso', 'regalo joyería abaya de lujo', 'роскошный подарок — украшения для абайи', '奢华长袍珠宝礼', 'Luxusgeschenk Abaya-Schmuck', 'luxe cadeau abaya sieraden', 'presente joias abaya de luxo'],
  ['international shipping jewellery', 'شحن مجوهرات دولي', 'livraison bijoux internationale', 'spedizione gioielli internazionale', 'envío joyería internacional', 'международная доставка украшений', '国际珠宝配送', 'internationaler Schmuckversand', 'internationale sieradenverzending', 'envio internacional joias'],
  ['worldwide shipping abaya accessories', 'شحن إكسسوارات عباءة عالمي', 'livraison accessoires abaya mondiale', 'spedizione accessori abaya mondiale', 'envío accesorios abaya mundial', 'доставка аксессуаров для абайи по всему миру', '全球长袍配饰配送', 'weltweiter Versand Abaya-Accessoires', 'wereldwijde verzending abaya accessoires', 'envio mundial acessórios abaya'],
  ['Dubai abaya jewellery', 'مجوهرات عباءة دبي', 'bijoux abaya Dubaï', 'gioielli abaya Dubai', 'joyería abaya Dubái', 'украшения для абайи Дубай', '迪拜长袍珠宝', 'Abaya-Schmuck Dubai', 'abaya sieraden Dubai', 'joias abaya Dubai'],
  ['Saudi Arabia abaya jewellery', 'مجوهرات عباءة السعودية', 'bijoux abaya Arabie saoudite', 'gioielli abaya Arabia Saudita', 'joyería abaya Arabia Saudí', 'украшения для абайи Саудовская Аравия', '沙特长袍珠宝', 'Abaya-Schmuck Saudi-Arabien', 'abaya sieraden Saoedi-Arabië', 'joias abaya Arábia Saudita'],
  ['Qatar luxury abaya accessories', 'إكسسوارات عباءة فاخرة قطر', 'accessoires abaya luxe Qatar', 'accessori abaya lusso Qatar', 'accesorios abaya lujo Qatar', 'люксовые аксессуары для абайи Катар', '卡塔尔奢华长袍配饰', 'Luxus-Abaya-Accessoires Katar', 'luxe abaya accessoires Qatar', 'acessórios abaya luxo Qatar'],
  ['Kuwait designer abaya jewellery', 'مجوهرات عباءة مصمّم الكويت', 'bijoux abaya designer Koweït', 'gioielli abaya designer Kuwait', 'joyería abaya diseñador Kuwait', 'дизайнерские украшения для абайи Кувейт', '科威特设计师长袍珠宝', 'Designer-Abaya-Schmuck Kuwait', 'designer abaya sieraden Koeweit', 'joias abaya designer Kuwait'],
  ['London modest fashion jewellery', 'مجوهرات أزياء محتشمة لندن', 'bijoux mode modeste Londres', 'gioielli moda modesta Londra', 'joyería moda modesta Londres', 'украшения скромной моды Лондон', '伦敦端庄时尚珠宝', 'bescheidener Mode-Schmuck London', 'bescheiden mode sieraden Londen', 'joias moda modesta Londres'],
  ['Paris modest fashion jewellery', 'مجوهرات أزياء محتشمة باريس', 'bijoux mode modeste Paris', 'gioielli moda modesta Parigi', 'joyería moda modesta París', 'украшения скромной моды Париж', '巴黎端庄时尚珠宝', 'bescheidener Mode-Schmuck Paris', 'bescheiden mode sieraden Parijs', 'joias moda modesta Paris'],
  ['New York modest fashion jewellery', 'مجوهرات أزياء محتشمة نيويورك', 'bijoux mode modeste New York', 'gioielli moda modesta New York', 'joyería moda modesta Nueva York', 'украшения скромной моды Нью-Йорк', '纽约端庄时尚珠宝', 'bescheidener Mode-Schmuck New York', 'bescheiden mode sieraden New York', 'joias moda modesta Nova Iorque'],
  ['Singapore modest fashion jewellery', 'مجوهرات أزياء محتشمة سنغافورة', 'bijoux mode modeste Singapour', 'gioielli moda modesta Singapore', 'joyería moda modesta Singapur', 'украшения скромной моды Сингапур', '新加坡端庄时尚珠宝', 'bescheidener Mode-Schmuck Singapur', 'bescheiden mode sieraden Singapore', 'joias moda modesta Singapura'],
  ['Malaysia modest fashion jewellery', 'مجوهرات أزياء محتشمة ماليزيا', 'bijoux mode modeste Malaisie', 'gioielli moda modesta Malesia', 'joyería moda modesta Malasia', 'украшения скромной моды Малайзия', '马来西亚端庄时尚珠宝', 'bescheidener Mode-Schmuck Malaysia', 'bescheiden mode sieraden Maleisië', 'joias moda modesta Malásia'],
  ['Indonesia modest fashion jewellery', 'مجوهرات أزياء محتشمة إندونيسيا', 'bijoux mode modeste Indonésie', 'gioielli moda modesta Indonesia', 'joyería moda modesta Indonesia', 'украшения скромной моды Индонезия', '印尼端庄时尚珠宝', 'bescheidener Mode-Schmuck Indonesien', 'bescheiden mode sieraden Indonesië', 'joias moda modesta Indonésia'],
  ['Australia luxury modest fashion', 'أزياء محتشمة فاخرة أستراليا', 'mode modeste de luxe Australie', 'moda modesta di lusso Australia', 'moda modesta de lujo Australia', 'роскошная скромная мода Австралия', '澳大利亚奢华端庄时尚', 'Luxus-bescheidene Mode Australien', 'luxe bescheiden mode Australië', 'moda modesta de luxo Austrália'],
  ['Canada modest fashion jewellery', 'مجوهرات أزياء محتشمة كندا', 'bijoux mode modeste Canada', 'gioielli moda modesta Canada', 'joyería moda modesta Canadá', 'украшения скромной моды Канада', '加拿大端庄时尚珠宝', 'bescheidener Mode-Schmuck Kanada', 'bescheiden mode sieraden Canada', 'joias moda modesta Canadá'],
  ['USA modest fashion jewellery', 'مجوهرات أزياء محتشمة أمريكا', 'bijoux mode modeste États-Unis', 'gioielli moda modesta USA', 'joyería moda modesta EE. UU.', 'украшения скромной моды США', '美国端庄时尚珠宝', 'bescheidener Mode-Schmuck USA', 'bescheiden mode sieraden VS', 'joias moda modesta EUA'],
  ['pairs with Al Ain necklace', 'يُنسّق مع قلادة القوع', 's\'associe au collier Al Ain', 'si abbina alla collana Al Ain', 'combina con collar Al Ain', 'сочетается с ожерельем Al Ain', '搭配Al Ain项链', 'passt zu Al-Ain-Halskette', 'combineert met Al Ain ketting', 'combina com colar Al Ain'],
  ['coordinated stone jewellery set', 'طقم مجوهرات أحجار منسّق', 'ensemble bijoux pierres coordonné', 'set gioielli pietre coordinato', 'conjunto joyería piedras coordinado', 'координированный комплект каменных украшений', '协调石饰套装', 'koordiniertes Steinschmuck-Set', 'gecoördineerd stenen sieradenset', 'conjunto joias pedras coordenado'],
  ['first abaya brand interchangeable strands', 'أول علامة عباءة بسلاسل قابلة للتبديل', 'première marque abaya fils interchangeables', 'primo brand abaya fili intercambiabili', 'primera marca abaya hilos intercambiables', 'первая марка абай с сменными нитями', '首个可更换链饰长袍品牌', 'erste Abaya-Marke mit austauschbaren Strängen', 'eerste abaya merk met verwisselbare strengen', 'primeira marca abaya fios intercambiáveis'],
  ['personalise abaya without new garment', 'تخصيص العباءة دون شراء قطعة جديدة', 'personnaliser abaya sans nouvelle pièce', 'personalizzare abaya senza nuovo capo', 'personalizar abaya sin prenda nueva', 'персонализировать абайю без новой вещи', '无需新衣即可个性化长袍', 'Abaya personalisieren ohne neues Kleidungsstück', 'abaya personaliseren zonder nieuw kledingstuk', 'personalizar abaya sem nova peça'],
]

const SHARED_STRAND_I18N = SHARED_STRAND_KEYWORD_ROWS.map(([en, ar, fr, it, es, ru, zh, de, nl, pt]) =>
  kw(en, ar, fr, it, es, ru, zh, de, nl, pt),
)

function rowsForLocale(rows: KwRow[], locale: AppLocale): string[] {
  const enTerms = rows.map((row) => row[0])
  if (locale === 'en') return enTerms
  // Keep English discovery terms and add native translations — never drop EN tags.
  return [...enTerms, ...SHARED_STRAND_I18N.map((row) => row[locale])]
}

/** Shared signature-strand schema keywords — garment jewellery, abaya jewellery, worldwide geo. */
export function getSignatureStrandSharedKeywords(locale: AppLocale = 'en'): string[] {
  return rowsForLocale(SHARED_STRAND_KEYWORD_ROWS, locale)
}

/** Stone-specific keyword variants appended per PDP (display name + common search aliases). */
export function buildSignatureStrandStoneKeywords(
  displayName: string,
  stoneAliases: string[] = [],
): string[] {
  const base = displayName.trim()
  const variants = [
    base,
    `${base} abaya jewellery`,
    `${base} garment jewellery`,
    `${base} abaya strand`,
    `${base} signature strand`,
    `${base} natural stone strand`,
    `buy ${base} online`,
    `${base} UAE`,
    `${base} worldwide shipping`,
    ...stoneAliases,
  ]
  return variants.filter(Boolean)
}
