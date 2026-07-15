import type { AppLocale } from '@/lib/i18n/routing'
import { altLoc } from '@/lib/products/imageAltOverridesI18n'

type AltEntry = {
  filename: string
  alts: Record<AppLocale, string>
  titles?: Record<AppLocale, string>
}

type ColorSlug = 'black' | 'navy-blue'

const COLOR_LABEL: Record<ColorSlug, Record<AppLocale, string>> = {
  black: altLoc(
    'Deep Black',
    'أسود عميق',
    'Noir profond',
    'Nero profondo',
    'Negro profundo',
    'глубокий чёрный',
    '深黑色',
    'Tiefschwarz',
    'Diepzwart',
    'Preto profundo',
  ),
  'navy-blue': altLoc(
    'Navy Blue',
    'كحلي',
    'Bleu marine',
    'Blu navy',
    'Azul marino',
    'тёмно-синий',
    '海军蓝',
    'Marineblau',
    'Marineblauw',
    'Azul-marinho',
  ),
}

const DISCOVERY_TAIL = {
  en: 'Luxury designer abaya with natural stone jewellery by Bint Saeed Abu Dhabi, United Arab Emirates — graceful A-line abaya with removable Onyx Strands and interchangeable Signature Strands for fashion enthusiasts, fashion editors, curators, cultural heritage audiences, diplomats, gallery openings, and international wardrobes in London, Paris, Riyadh, Doha, and worldwide. Made in Abu Dhabi. Worldwide shipping.',
  ar: 'عباية مصمّمة فاخرة بمجوهرات أحجار طبيعية من Bint Saeed أبوظبي، الإمارات العربية المتحدة — عباية A-line أنيقة بخيوط عقيق قابلة للإزالة وخيوط توقيع قابلة للتبديل لعشاق الأزياء ومحررات الموضة ومنسقات الأزياء وجماهير التراث الثقافي والدبلوماسيات وافتتاحات المعارض والخزائن الدولية في لندن وباريس والرياض والدوحة وما بعدها. صُنعت في أبوظبي. شحن عالمي.',
  fr: 'Abaya de créateur de luxe avec bijoux en pierres naturelles par Bint Saeed Abou Dabi, Émirats arabes unis — abaya A-line gracieuse avec fils Onyx amovibles et Signature Strands interchangeables pour passionnées de mode, rédactrices mode, conservatrices, publics du patrimoine culturel, diplomates, vernissages et garde-robes internationales à Londres, Paris, Riyad, Doha et dans le monde. Fabriquée à Abou Dabi. Livraison mondiale.',
  it: 'Abaya designer di lusso con gioielli in pietre naturali di Bint Saeed Abu Dhabi, Emirati Arabi Uniti — abaya A-line aggraziata con fili Onyx rimovibili e Signature Strands intercambiabili per appassionate di moda, editor di moda, curatrici, pubblici del patrimonio culturale, diplomatiche, inaugurazioni di gallerie e guardaroba internazionali a Londra, Parigi, Riyadh, Doha e nel mondo. Realizzata ad Abu Dhabi. Spedizione mondiale.',
  es: 'Abaya de diseñador de lujo con joyería de piedras naturales de Bint Saeed Abu Dabi, Emiratos Árabes Unidos — abaya A-line elegante con hebras Onyx extraíbles y Signature Strands intercambiables para entusiastas de la moda, editoras, curatoras, públicos del patrimonio cultural, diplomáticas, inauguraciones de galerías y armarios internacionales en Londres, París, Riad, Doha y en todo el mundo. Hecha en Abu Dabi. Envío mundial.',
  ru: 'Люксовая дизайнерская абайя с украшениями из натурального камня от Bint Saeed Абу-Даби, ОАЭ — изящная абайя A-line со съёмными нитями оникса и сменными Signature Strands для энтузиасток моды, редакторов моды, кураторов, аудиторий культурного наследия, дипломаток, открытий галерей и международных гардеробов в Лондоне, Париже, Эр-Рияде, Дохе и по всему миру. Сделано в Абу-Даби. Доставка по всему миру.',
  zh: 'Bint Saeed阿布扎比、阿联酋天然宝石珠宝奢华设计师长袍——优雅A字长袍，可拆卸玛瑙串与可互换Signature Strands，面向时尚爱好者、时尚编辑、策展人、文化遗产受众、外交官、画廊开幕及伦敦、巴黎、利雅得、多哈与国际衣橱。阿布扎比制造。全球配送。',
  de: 'Luxus-Designer-Abaya mit Naturstein-Schmuck von Bint Saeed Abu Dhabi, VAE — anmutige A-Linien-Abaya mit abnehmbaren Onyx-Strängen und austauschbaren Signature Strands für Mode-Enthusiastinnen, Mode-Redakteurinnen, Kuratorinnen, Kulturerbe-Publikum, Diplomatinnen, Galerie-Eröffnungen und internationale Garderoben in London, Paris, Riad, Doha und weltweit. Hergestellt in Abu Dhabi. Weltweiter Versand.',
  nl: 'Luxe designer abaya met natuursteen sieraden van Bint Saeed Abu Dhabi, VAE — sierlijke A-line abaya met verwijderbare Onyx Strands en verwisselbare Signature Strands voor modeliefhebbers, moderedacteuren, curatoren, cultureel-erfgoedpubliek, diplomaten, galerie-openingen en internationale garderobes in Londen, Parijs, Riyad, Doha en wereldwijd. Gemaakt in Abu Dhabi. Wereldwijde verzending.',
  pt: 'Abaya de designer de luxo com joias de pedras naturais da Bint Saeed Abu Dhabi, Emirados Árabes Unidos — abaya A-line graciosa com fios Onyx removíveis e Signature Strands intercambiáveis para entusiastas de moda, editoras, curadoras, públicos de património cultural, diplomatas, inaugurações de galerias e guarda-roupas internacionais em Londres, Paris, Riade, Doha e no mundo. Feita em Abu Dhabi. Envio mundial.',
  id: 'Abaya desainer mewah dengan perhiasan batu alam Bint Saeed Abu Dhabi, UEA — abaya A-line anggun dengan Onyx Strands lepas dan Signature Strands dapat dipertukarkan untuk penggemar fashion, editor fashion, kurator, audiens warisan budaya, diplomat, pembukaan galeri, dan lemari internasional di London, Paris, Riyadh, Doha, dan dunia. Dibuat di Abu Dhabi. Pengiriman dunia.',
  ms: 'Abaya pereka mewah dengan barang kemas batu semula jadi Bint Saeed Abu Dhabi, UAE — abaya A-line anggun dengan Onyx Strands boleh tanggal dan Signature Strands boleh ditukar untuk peminat fesyen, editor fesyen, kurator, khalayak warisan budaya, diplomat, pembukaan galeri, dan almari antarabangsa di London, Paris, Riyadh, Doha, dan seluruh dunia. Dihasilkan di Abu Dhabi. Penghantaran seluruh dunia.',
} satisfies Record<AppLocale, string>

function frontAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Bint Saeed Marylebone Abaya in ${c.en}, front view. Graceful A-line designer abaya with removable genuine natural Onyx Strands on wide cuffs, gold-plated hematite spacer beads, signature gold-tone Knotted Line strand details, hidden side seam pockets, and softly textured crepe — the abaya with natural stone jewellery for your wardrobe. ${DISCOVERY_TAIL.en}`,
    `عباية Bint Saeed Marylebone باللون ${c.ar}، منظر أمامي. عباية مصمّمة A-line أنيقة بخيوط عقيق طبيعية أصلية قابلة للإزالة على أكمام واسعة، وخرز هيماتيت مطلي بالذهب بين الأحجار، وتفاصيل Knotted Line الذهبية المميزة، وجيوب جانبية مخفية، وكريب ناعم الملمس — العباية بمجوهرات الأحجار الطبيعية لخزانتك. ${DISCOVERY_TAIL.ar}`,
    `Abaya Bint Saeed Marylebone en ${c.fr}, vue de face. Abaya de créateur A-line gracieuse avec fils Onyx naturels amovibles sur larges poignets, perles hématite dorées entre les pierres, détails de fils Knotted Line dorés signature, poches latérales cachées et crepe finement texturé — l’abaya bijoux en pierres naturelles pour votre garde-robe. ${DISCOVERY_TAIL.fr}`,
    `Bint Saeed Marylebone Abaya in ${c.it}, vista frontale. Abaya designer A-line aggraziata con fili Onyx naturali rimovibili su polsini ampi, perle di ematite placcate oro tra le pietre, dettagli fili Knotted Line dorati signature, tasche laterali nascoste e crepe dalla grana raffinata — l’abaya gioielli in pietre naturali per il guardaroba. ${DISCOVERY_TAIL.it}`,
    `Abaya Bint Saeed Marylebone en ${c.es}, vista frontal. Abaya de diseñador A-line elegante con hebras Onyx naturales extraíbles en puños anchos, cuentas de hematita chapadas en oro entre las piedras, detalles de hebras Knotted Line dorados signature, bolsillos laterales ocultos y crepe de textura suave — la abaya con joyería de piedras naturales para tu armario. ${DISCOVERY_TAIL.es}`,
    `Абайя Bint Saeed Marylebone цвета ${c.ru}, вид спереди. Изящная дизайнерская абайя A-line со съёмными нитями из натурального оникса на широких манжетах, золочёными гематитовыми бусинами между камнями, фирменными золотистыми деталями нитей Knotted Line, скрытыми боковыми карманами и мягким крепом — абайя с украшениями из натурального камня для гардероба. ${DISCOVERY_TAIL.ru}`,
    `Bint Saeed Marylebone 长袍${c.zh}正面视图。优雅A字设计师长袍，宽袖口可拆卸天然玛瑙串、金镀赤铁矿隔珠、标志性Knotted Line金饰串珠细节、隐藏侧缝口袋与细腻绉绸——为衣橱而生的天然宝石珠宝长袍。${DISCOVERY_TAIL.zh}`,
    `Bint Saeed Marylebone Abaya in ${c.de}, Frontansicht. Anmutige A-Linien-Designer-Abaya mit abnehmbaren echten Natur-Onyx-Strängen an weiten Manschetten, vergoldeten Hämatit-Zwischenperlen, charakteristischen goldfarbenen Knotted-Line-Strangdetails, versteckten Seitennahttaschen und weichem Krepp — die Abaya mit Naturstein-Schmuck für die Garderobe. ${DISCOVERY_TAIL.de}`,
    `Bint Saeed Marylebone abaya in ${c.nl}, vooraanzicht. Sierlijke A-line designer abaya met verwijderbare echte natuurlijke Onyx Strands op brede manchetten, vergulde hematiet tussenparels, kenmerkende goudkleurige Knotted Line stranddetails, verborgen zijnaadzakken en zacht gestructureerd crepe — de abaya met natuursteen sieraden voor de garderobe. ${DISCOVERY_TAIL.nl}`,
    `Abaya Bint Saeed Marylebone em ${c.pt}, vista frontal. Abaya de designer A-line graciosa com fios Onyx naturais removíveis em punhos largos, contas de hematite banhadas a ouro entre as pedras, detalhes de fios Knotted Line dourados signature, bolsos laterais ocultos e crepe de textura suave — a abaya com joias de pedras naturais para o guarda-roupa. ${DISCOVERY_TAIL.pt}`,
    `Bint Saeed Marylebone Abaya ${c.id}, tampak depan. Abaya desainer A-line anggun dengan Onyx Strands alami asli yang dapat dilepas pada cuff lebar, manik hematit berlapis emas di antara batu, detail strand Knotted Line emas signature, saku sisi tersembunyi, dan crepe bertekstur halus — abaya perhiasan batu alam untuk lemari Anda. ${DISCOVERY_TAIL.id}`,
    `Bint Saeed Marylebone Abaya ${c.ms}, pandangan hadapan. Abaya pereka A-line anggun dengan Onyx Strands semula jadi tulen boleh tanggal pada cuff lebar, manik hematit bersalut emas di antara batu, butiran strand Knotted Line emas signature, poket sisi tersembunyi, dan crepe bertekstur halus — abaya barang kemas batu semula jadi untuk almari anda. ${DISCOVERY_TAIL.ms}`,
  )
}

function sideAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Three-quarter view of the Bint Saeed Marylebone Abaya in ${c.en} showcasing graceful A-line drape, removable Onyx Strands with gold-plated hematite beads on wide interchangeable cuffs, and softly textured crepe silhouette. ${DISCOVERY_TAIL.en}`,
    `منظر ثلاثة أرباع لعباية Bint Saeed Marylebone باللون ${c.ar} يبرز انسيابية A-line الأنيقة، وخيوط العقيق القابلة للإزالة مع خرز الهيماتيت المطلي بالذهب على أكمام واسعة قابلة للتبديل، وقصة الكريب الناعمة. ${DISCOVERY_TAIL.ar}`,
    `Vue trois-quarts de l’abaya Bint Saeed Marylebone en ${c.fr} mettant en valeur la tombée A-line gracieuse, les fils Onyx amovibles avec perles hématite dorées sur larges poignets interchangeables, et la silhouette en crepe finement texturé. ${DISCOVERY_TAIL.fr}`,
    `Vista tre quarti della Bint Saeed Marylebone Abaya in ${c.it} con drappeggio A-line aggraziato, fili Onyx rimovibili con perle di ematite placcate oro su polsini ampi intercambiabili e silhouette in crepe morbido. ${DISCOVERY_TAIL.it}`,
    `Vista tres cuartos de la abaya Bint Saeed Marylebone en ${c.es} con caída A-line elegante, hebras Onyx extraíbles con cuentas de hematita chapadas en oro en puños anchos intercambiables y silueta de crepe suave. ${DISCOVERY_TAIL.es}`,
    `Вид три четверти абайи Bint Saeed Marylebone цвета ${c.ru} с изящной драпировкой A-line, съёмными нитями оникса с золочёными гематитовыми бусинами на широких сменных манжетах и силуэтом из мягкого крепа. ${DISCOVERY_TAIL.ru}`,
    `Bint Saeed Marylebone 长袍${c.zh}四分之三视图，展现优雅A字垂坠、宽袖口可拆卸玛瑙串与金镀赤铁矿珠及柔软绉绸廓形。${DISCOVERY_TAIL.zh}`,
    `Dreiviertelansicht der Bint Saeed Marylebone Abaya in ${c.de} mit anmutigem A-Linien-Fall, abnehmbaren Onyx-Strängen mit vergoldeten Hämatitperlen an weiten austauschbaren Manschetten und weicher Krepp-Silhouette. ${DISCOVERY_TAIL.de}`,
    `Driekwartweergave van de Bint Saeed Marylebone abaya in ${c.nl} met sierlijke A-line drape, verwijderbare Onyx Strands met vergulde hematietparels op brede verwisselbare manchetten en zacht crepe silhouet. ${DISCOVERY_TAIL.nl}`,
    `Vista de três quartos da abaya Bint Saeed Marylebone em ${c.pt} com caimento A-line gracioso, fios Onyx removíveis com contas de hematite banhadas a ouro em punhos largos intercambiáveis e silhueta crepe suave. ${DISCOVERY_TAIL.pt}`,
    `Pandangan tiga perempat Bint Saeed Marylebone Abaya ${c.id} menampilkan drape A-line anggun, Onyx Strands lepas dengan manik hematit berlapis emas pada cuff lebar yang dapat dipertukarkan, dan siluet crepe lembut. ${DISCOVERY_TAIL.id}`,
    `Pandangan tiga suku Bint Saeed Marylebone Abaya ${c.ms} mempamerkan jatuhan A-line anggun, Onyx Strands boleh tanggal dengan manik hematit bersalut emas pada cuff lebar boleh ditukar, dan siluet crepe lembut. ${DISCOVERY_TAIL.ms}`,
  )
}

function backAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Back view of the Bint Saeed Marylebone Abaya in ${c.en} highlighting elegant A-line silhouette, full-length flowing crepe drape, refined Abu Dhabi tailoring, and clean architectural lines. ${DISCOVERY_TAIL.en}`,
    `منظر خلفي لعباية Bint Saeed Marylebone باللون ${c.ar} يبرز سيلويت A-line الأنيق، وانسياب الكريب الكامل، وتفصيل أبوظبي الراقي، والخطوط المعمارية النظيفة. ${DISCOVERY_TAIL.ar}`,
    `Vue de dos de l’abaya Bint Saeed Marylebone en ${c.fr} soulignant la silhouette A-line élégante, la tombée fluide en crepe pleine longueur, la tailleur raffinée d’Abou Dabi et des lignes architecturales épurées. ${DISCOVERY_TAIL.fr}`,
    `Vista posteriore della Bint Saeed Marylebone Abaya in ${c.it} con elegante silhouette A-line, caduta fluida in crepe a tutta lunghezza, sartoria raffinata di Abu Dhabi e linee architettoniche pulite. ${DISCOVERY_TAIL.it}`,
    `Vista trasera de la abaya Bint Saeed Marylebone en ${c.es} con silueta A-line elegante, caída fluida de crepe de largo completo, sastrería refinada de Abu Dabi y líneas arquitectónicas limpias. ${DISCOVERY_TAIL.es}`,
    `Вид сзади абайи Bint Saeed Marylebone цвета ${c.ru} с элегантным A-line силуэтом, плавной драпировкой крепа во всю длину, утончённым кроем из Абу-Даби и чистыми архитектурными линиями. ${DISCOVERY_TAIL.ru}`,
    `Bint Saeed Marylebone 长袍${c.zh}背面视图，凸显优雅A字廓形、全长流畅绉绸垂坠、阿布扎比精致剪裁与利落建筑感线条。${DISCOVERY_TAIL.zh}`,
    `Rückansicht der Bint Saeed Marylebone Abaya in ${c.de} mit eleganter A-Linien-Silhouette, fließendem Ganzkörper-Kreppfall, raffinierter Abu-Dhabi-Schneiderkunst und klaren architektonischen Linien. ${DISCOVERY_TAIL.de}`,
    `Achteraanzicht van de Bint Saeed Marylebone abaya in ${c.nl} met elegant A-line silhouet, vloeiende crepe drape over volledige lengte, verfijnd Abu Dhabi vakmanschap en strakke architecturale lijnen. ${DISCOVERY_TAIL.nl}`,
    `Vista traseira da abaya Bint Saeed Marylebone em ${c.pt} com silhueta A-line elegante, caimento fluido de crepe de comprimento total, alfaiataria refinada de Abu Dhabi e linhas arquitetónicas limpas. ${DISCOVERY_TAIL.pt}`,
    `Tampak belakang Bint Saeed Marylebone Abaya ${c.id} menonjolkan siluet A-line elegan, drape crepe mengalir penuh, tailoring Abu Dhabi yang halus, dan garis arsitektural bersih. ${DISCOVERY_TAIL.id}`,
    `Pandangan belakang Bint Saeed Marylebone Abaya ${c.ms} menyerlahkan siluet A-line anggun, jatuhan crepe mengalir penuh, jahitan Abu Dhabi yang halus, dan garisan seni bina bersih. ${DISCOVERY_TAIL.ms}`,
  )
}

function entry(color: ColorSlug, view: 'front' | 'side' | 'back'): AltEntry {
  const alts =
    view === 'front' ? frontAlts(color) : view === 'side' ? sideAlts(color) : backAlts(color)
  return {
    filename: `bint-saeed-marylebone-abaya-${color}-${view}.webp`,
    alts,
  }
}

const ARM_STRAND_ALTS = altLoc(
  `Lifestyle detail of the Bint Saeed Marylebone Abaya with Jade Hearts Signature Strand draped over the wide sleeve and sage green handbag — detachable natural jade stone jewellery styled as an arm and bag accent on a designer abaya with natural stone jewellery. ${DISCOVERY_TAIL.en}`,
  `تفاصيل حياتية لعباية Bint Saeed Marylebone مع خيط Jade Hearts Signature Strand على الكم الواسع وحقيبة خضراء — مجوهرات يشم طبيعية قابلة للإزالة كزينة ذراع وحقيبة على عباية مصمّمة بمجوهرات الأحجار الطبيعية. ${DISCOVERY_TAIL.ar}`,
  `Détail lifestyle de l’abaya Bint Saeed Marylebone avec le Jade Hearts Signature Strand drapé sur la large manche et un sac vert sauge — bijou en jade naturel amovible porté en accent de bras et de sac sur une abaya de créateur aux pierres naturelles. ${DISCOVERY_TAIL.fr}`,
  `Dettaglio lifestyle della Bint Saeed Marylebone Abaya con Jade Hearts Signature Strand drappeggiato sulla manica ampia e su una borsa verde salvia — gioiello in giada naturale rimovibile come accento su braccio e borsetta su abaya designer con pietre naturali. ${DISCOVERY_TAIL.it}`,
  `Detalle lifestyle de la abaya Bint Saeed Marylebone con Jade Hearts Signature Strand drapado sobre la manga ancha y un bolso verde salvia — joyería de jade natural extraíble como acento de brazo y bolso en una abaya de diseñador con piedras naturales. ${DISCOVERY_TAIL.es}`,
  `Lifestyle-деталь абайи Bint Saeed Marylebone с Jade Hearts Signature Strand на широком рукаве и сумке цвета шалфея — съёмное украшение из натурального нефрита как акцент на руке и сумке на дизайнерской абайе с природным камнем. ${DISCOVERY_TAIL.ru}`,
  `Bint Saeed Marylebone长袍生活方式细节：Jade Hearts Signature Strand垂饰宽袖与鼠尾草绿手袋——可拆卸天然翡翠宝石珠宝，作为袖臂与手袋点缀，搭配天然宝石珠宝设计师长袍。${DISCOVERY_TAIL.zh}`,
  `Lifestyle-Detail der Bint Saeed Marylebone Abaya mit Jade Hearts Signature Strand über dem weiten Ärmel und einer salbeigrünen Handtasche — abnehmbarer Naturjade-Schmuck als Arm- und Taschenakzent an einer Designer-Abaya mit Naturstein-Schmuck. ${DISCOVERY_TAIL.de}`,
  `Lifestyle-detail van de Bint Saeed Marylebone abaya met Jade Hearts Signature Strand over de wijde mouw en sagegroene handtas — verwijderbare natuurlijke jade sieraden als arm- en tasaccent op een designer abaya met natuursteen. ${DISCOVERY_TAIL.nl}`,
  `Detalhe lifestyle da abaya Bint Saeed Marylebone com Jade Hearts Signature Strand sobre a manga larga e bolsa verde sálvia — joia de jade natural removível como acento de braço e bolsa numa abaya de designer com pedras naturais. ${DISCOVERY_TAIL.pt}`,
  `Detail lifestyle Bint Saeed Marylebone Abaya dengan Jade Hearts Signature Strand di atas lengan lebar dan tas hijau sage — perhiasan jade alam lepas sebagai aksen lengan dan tas pada abaya desainer dengan batu alam. ${DISCOVERY_TAIL.id}`,
  `Butiran gaya hidup Bint Saeed Marylebone Abaya dengan Jade Hearts Signature Strand di atas lengan lebar dan beg hijau sage — barang kemas jade semula jadi boleh tanggal sebagai aksen lengan dan beg pada abaya pereka dengan batu semula jadi. ${DISCOVERY_TAIL.ms}`,
)

const ARM_STRAND_TITLES = altLoc(
  'Marylebone Abaya with Jade Hearts Strand Lifestyle | Bint Saeed Abu Dhabi Natural Stone Jewellery',
  'عباية Marylebone مع خيط Jade Hearts | مجوهرات أحجار طبيعية Bint Saeed أبوظبي',
  'Abaya Marylebone et Jade Hearts Strand lifestyle | Bijoux pierres naturelles Bint Saeed Abou Dabi',
  'Marylebone Abaya con Jade Hearts Strand lifestyle | Gioielli pietre naturali Bint Saeed Abu Dhabi',
  'Abaya Marylebone con Jade Hearts Strand lifestyle | Joyería piedras naturales Bint Saeed Abu Dabi',
  'Абайя Marylebone с Jade Hearts Strand lifestyle | Украшения из натурального камня Bint Saeed Абу-Даби',
  'Marylebone长袍与Jade Hearts串珠生活方式 | Bint Saeed阿布扎比天然宝石珠宝',
  'Marylebone Abaya mit Jade Hearts Strand Lifestyle | Naturstein-Schmuck Bint Saeed Abu Dhabi',
  'Marylebone abaya met Jade Hearts Strand lifestyle | Natuursteen sieraden Bint Saeed Abu Dhabi',
  'Abaya Marylebone com Jade Hearts Strand lifestyle | Joias pedras naturais Bint Saeed Abu Dhabi',
  'Marylebone Abaya dengan Jade Hearts Strand lifestyle | Perhiasan batu alam Bint Saeed Abu Dhabi',
  'Marylebone Abaya dengan Jade Hearts Strand gaya hidup | Barang kemas batu semula jadi Bint Saeed Abu Dhabi',
)

const JADE_HEART_TRAY_ALTS = altLoc(
  `Bint Saeed Jade Hearts Signature Strand for the Marylebone Abaya — pair of detachable natural jade heart stone jewellery strands with gold-tone Knotted Line hardware presented in a burgundy velvet tray. Interchangeable natural stone jewellery for Bint Saeed designer garments. ${DISCOVERY_TAIL.en}`,
  `خيط Bint Saeed Jade Hearts Signature Strand لعباية Marylebone — زوج من خيوط يشم قلبية طبيعية قابلة للإزالة بتفاصيل Knotted Line ذهبية في صينية مخمل عنابي. مجوهرات أحجار طبيعية قابلة للتبديل لقطع Bint Saeed. ${DISCOVERY_TAIL.ar}`,
  `Jade Hearts Signature Strand Bint Saeed pour l’abaya Marylebone — paire de fils démontables en jade naturel en forme de cœur avec finitions Knotted Line dorées dans un plateau de velours bordeaux. Bijoux en pierres naturelles interchangeables pour les créations Bint Saeed. ${DISCOVERY_TAIL.fr}`,
  `Jade Hearts Signature Strand Bint Saeed per la Marylebone Abaya — coppia di fili rimovibili in giada naturale a cuore con hardware Knotted Line dorato in vassoio di velluto bordeaux. Gioielli in pietre naturali intercambiabili per i capi designer Bint Saeed. ${DISCOVERY_TAIL.it}`,
  `Jade Hearts Signature Strand Bint Saeed para la abaya Marylebone — par de hebras extraíbles de jade natural en forma de corazón con herrajes Knotted Line dorados en bandeja de terciopelo burdeos. Joyería de piedras naturales intercambiable para las prendas Bint Saeed. ${DISCOVERY_TAIL.es}`,
  `Jade Hearts Signature Strand Bint Saeed для абайи Marylebone — пара съёмных нитей из натурального нефрита в форме сердца с золотистой фурнитурой Knotted Line в бархатном бордовом лотке. Сменные украшения из натурального камня для дизайнерских вещей Bint Saeed. ${DISCOVERY_TAIL.ru}`,
  `Bint Saeed Jade Hearts Signature Strand配Marylebone长袍——一对可拆卸天然翡翠心形宝石串，金色Knotted Line件，置于酒红丝绒托盘。为Bint Saeed设计师成衣而制的可互换天然宝石珠宝。${DISCOVERY_TAIL.zh}`,
  `Bint Saeed Jade Hearts Signature Strand für die Marylebone Abaya — Paar abnehmbarer Naturjade-Herz-Stränge mit goldfarbenem Knotted-Line-Beschlag in burgunderfarbenem Samttablett. Austauschbarer Naturstein-Schmuck für Bint Saeed Designer-Teile. ${DISCOVERY_TAIL.de}`,
  `Bint Saeed Jade Hearts Signature Strand voor de Marylebone abaya — paar verwijderbare natuurlijke jade-hartstrengen met goudkleurig Knotted Line beslag in bordeauxfluweel tray. Verwisselbare natuursteen sieraden voor Bint Saeed designerstukken. ${DISCOVERY_TAIL.nl}`,
  `Jade Hearts Signature Strand Bint Saeed para a abaya Marylebone — par de fios removíveis de jade natural em forma de coração com ferragens Knotted Line douradas em tabuleiro de veludo bordô. Joias de pedras naturais intercambiáveis para as peças Bint Saeed. ${DISCOVERY_TAIL.pt}`,
  `Jade Hearts Signature Strand Bint Saeed untuk Marylebone Abaya — sepasang strand hati jade alam lepas dengan perangkat Knotted Line emas di nampan beludru burgundy. Perhiasan batu alam dapat dipertukarkan untuk garment desainer Bint Saeed. ${DISCOVERY_TAIL.id}`,
  `Jade Hearts Signature Strand Bint Saeed untuk Marylebone Abaya — pasangan strand hati jade semula jadi boleh tanggal dengan perkakasan Knotted Line emas dalam dulang beludru burgundy. Barang kemas batu semula jadi boleh ditukar untuk garment pereka Bint Saeed. ${DISCOVERY_TAIL.ms}`,
)

const JADE_HEART_TRAY_TITLES = altLoc(
  'Jade Hearts Signature Strand | Marylebone Abaya Natural Stone Jewellery Bint Saeed Abu Dhabi',
  'خيط Jade Hearts Signature Strand | مجوهرات Marylebone Bint Saeed أبوظبي',
  'Jade Hearts Signature Strand | Bijoux pierres naturelles abaya Marylebone Bint Saeed Abou Dabi',
  'Jade Hearts Signature Strand | Gioielli pietre naturali Marylebone Abaya Bint Saeed Abu Dhabi',
  'Jade Hearts Signature Strand | Joyería piedras naturales abaya Marylebone Bint Saeed Abu Dabi',
  'Jade Hearts Signature Strand | Украшения Marylebone Abaya Bint Saeed Абу-Даби',
  'Jade Hearts Signature Strand | Marylebone长袍天然宝石珠宝 Bint Saeed阿布扎比',
  'Jade Hearts Signature Strand | Naturstein-Schmuck Marylebone Abaya Bint Saeed Abu Dhabi',
  'Jade Hearts Signature Strand | Natuursteen sieraden Marylebone abaya Bint Saeed Abu Dhabi',
  'Jade Hearts Signature Strand | Joias pedras naturais abaya Marylebone Bint Saeed Abu Dhabi',
  'Jade Hearts Signature Strand | Perhiasan batu alam Marylebone Abaya Bint Saeed Abu Dhabi',
  'Jade Hearts Signature Strand | Barang kemas batu semula jadi Marylebone Abaya Bint Saeed Abu Dhabi',
)

const CARNELIAN_BOX_ALTS = altLoc(
  `Bint Saeed Signature Strands gift presentation for the Marylebone Abaya — translucent carnelian natural stone strands with gold-tone Knotted Line ends in a branded Bint Saeed Abu Dhabi box on stone with silk. Detachable natural stone jewellery for designer abayas. ${DISCOVERY_TAIL.en}`,
  `تقديم هدية Signature Strands من Bint Saeed لعباية Marylebone — خيوط عقيقٍ برتقالي طبيعية شفافة بنهايات Knotted Line ذهبية في علبة Bint Saeed أبوظبي على حجر وحرير. مجوهرات أحجار طبيعية قابلة للإزالة للعبايات المصمّمة. ${DISCOVERY_TAIL.ar}`,
  `Présentation cadeau Signature Strands Bint Saeed pour l’abaya Marylebone — fils en cornaline naturelle translucide à embouts Knotted Line dorés dans un écrin Bint Saeed Abou Dabi sur pierre et soie. Bijoux en pierres naturelles amovibles pour abayas de créateur. ${DISCOVERY_TAIL.fr}`,
  `Confezione regalo Signature Strands Bint Saeed per la Marylebone Abaya — fili in corniola naturale translucida con estremità Knotted Line dorate in scatola Bint Saeed Abu Dhabi su pietra e seta. Gioielli in pietre naturali rimovibili per abaya designer. ${DISCOVERY_TAIL.it}`,
  `Presentación de regalo Signature Strands Bint Saeed para la abaya Marylebone — hebras de cornalina natural translúcida con extremos Knotted Line dorados en caja Bint Saeed Abu Dabi sobre piedra y seda. Joyería de piedras naturales extraíble para abayas de diseñador. ${DISCOVERY_TAIL.es}`,
  `Подарочная подача Signature Strands Bint Saeed для абайи Marylebone — нити из полупрозрачного натурального сердолика с золотистыми окончаниями Knotted Line в коробке Bint Saeed Абу-Даби на камне и шёлке. Съёмные украшения из натурального камня для дизайнерских абай. ${DISCOVERY_TAIL.ru}`,
  `Bint Saeed Signature Strands礼盒呈现配Marylebone长袍——半透明天然红玉髓串，金色Knotted Line末端，置于印有Bint Saeed阿布扎比的礼盒，石面与丝绸背景。设计师长袍可拆卸天然宝石珠宝。${DISCOVERY_TAIL.zh}`,
  `Bint Saeed Signature Strands Geschenkpräsentation für die Marylebone Abaya — transluzente Carneol-Naturstein-Stränge mit goldfarbenen Knotted-Line-Enden in einer Bint Saeed Abu Dhabi-Schachtel auf Stein mit Seide. Abnehmbarer Naturstein-Schmuck für Designer-Abayas. ${DISCOVERY_TAIL.de}`,
  `Bint Saeed Signature Strands cadeaupresentatie voor de Marylebone abaya — doorschijnende carneool natuursteenstrengen met goudkleurige Knotted Line uiteinden in een Bint Saeed Abu Dhabi doos op steen met zijde. Verwijderbare natuursteen sieraden voor designer abayas. ${DISCOVERY_TAIL.nl}`,
  `Apresentação de oferta Signature Strands Bint Saeed para a abaya Marylebone — fios de cornalina natural translúcida com pontas Knotted Line douradas em caixa Bint Saeed Abu Dhabi sobre pedra e seda. Joias de pedras naturais removíveis para abayas de designer. ${DISCOVERY_TAIL.pt}`,
  `Presentasi hadiah Signature Strands Bint Saeed untuk Marylebone Abaya — strand batu carnelian alam tembus dengan ujung Knotted Line emas dalam kotak bermerek Bint Saeed Abu Dhabi di atas batu dengan sutra. Perhiasan batu alam lepas untuk abaya desainer. ${DISCOVERY_TAIL.id}`,
  `Persembahan hadiah Signature Strands Bint Saeed untuk Marylebone Abaya — strand batu karnelian semula jadi lut cahaya dengan hujung Knotted Line emas dalam kotak berjenama Bint Saeed Abu Dhabi di atas batu dengan sutera. Barang kemas batu semula jadi boleh tanggal untuk abaya pereka. ${DISCOVERY_TAIL.ms}`,
)

const CARNELIAN_BOX_TITLES = altLoc(
  'Signature Strands Carnelian Gift Box | Marylebone Abaya Jewellery Bint Saeed Abu Dhabi',
  'علبة Signature Strands عقيق | مجوهرات عباية Marylebone Bint Saeed أبوظبي',
  'Coffret Signature Strands cornaline | Bijoux abaya Marylebone Bint Saeed Abou Dabi',
  'Cofanetto Signature Strands corniola | Gioielli Marylebone Abaya Bint Saeed Abu Dhabi',
  'Caja Signature Strands cornalina | Joyería abaya Marylebone Bint Saeed Abu Dabi',
  'Подарочная коробка Signature Strands сердолик | Украшения Marylebone Bint Saeed Абу-Даби',
  'Signature Strands红玉髓礼盒 | Marylebone长袍珠宝 Bint Saeed阿布扎比',
  'Signature Strands Carneol-Geschenkbox | Marylebone-Abaya-Schmuck Bint Saeed Abu Dhabi',
  'Signature Strands carneool cadeaudoos | Marylebone abaya sieraden Bint Saeed Abu Dhabi',
  'Caixa Signature Strands cornalina | Joias abaya Marylebone Bint Saeed Abu Dhabi',
  'Kotak hadiah Signature Strands carnelian | Perhiasan Marylebone Abaya Bint Saeed Abu Dhabi',
  'Kotak hadiah Signature Strands karnelian | Barang kemas Marylebone Abaya Bint Saeed Abu Dhabi',
)

const MALACHITE_BOX_ALTS = altLoc(
  `Bint Saeed Signature Strands gift box for the Marylebone Abaya — green malachite beads with carved carnelian clover stones and gold-tone Knotted Line ends in a branded sliding drawer box on travertine with silk. Detachable natural stone jewellery for luxury Emirati abayas. ${DISCOVERY_TAIL.en}`,
  `علبة هدية Signature Strands من Bint Saeed لعباية Marylebone — خرز ملاكيت أخضر مع أحجار عقيق برتقالي منقوشة على شكل برسيم ونهايات Knotted Line ذهبية في درج منزلق بعلامة Bint Saeed على حجر وترافرتين وحرير. مجوهرات أحجار طبيعية قابلة للإزالة للعبايات الإماراتية الفاخرة. ${DISCOVERY_TAIL.ar}`,
  `Coffret Signature Strands Bint Saeed pour l’abaya Marylebone — perles de malachite verte avec pierres de cornaline sculptées en trèfle et embouts Knotted Line dorés dans un écrin tiroir estampillé, sur travertin et soie. Bijoux en pierres naturelles amovibles pour abayas émiraties de luxe. ${DISCOVERY_TAIL.fr}`,
  `Cofanetto Signature Strands Bint Saeed per la Marylebone Abaya — perle di malachite verde con pietre di corniola intagliate a trifoglio e estremità Knotted Line dorate in scatola a cassetto firmata su travertino e seta. Gioielli in pietre naturali rimovibili per abaya emiratine di lusso. ${DISCOVERY_TAIL.it}`,
  `Caja Signature Strands Bint Saeed para la abaya Marylebone — cuentas de malaquita verde con piedras de cornalina talladas en trébol y extremos Knotted Line dorados en caja cajón de marca sobre travertino y seda. Joyería de piedras naturales extraíble para abayas emiratíes de lujo. ${DISCOVERY_TAIL.es}`,
  `Подарочная коробка Signature Strands Bint Saeed для абайи Marylebone — зелёные бусины малахита с резными клеверными сердоликами и золотистыми окончаниями Knotted Line в фирменном выдвижном футляре на травертине с шёлком. Съёмные украшения из натурального камня для люксовых эмиратских абай. ${DISCOVERY_TAIL.ru}`,
  `Bint Saeed Signature Strands礼盒配Marylebone长袍——绿色孔雀石珠与雕刻红玉髓四叶草石、金色Knotted Line末端，品牌推拉盒置于洞石与丝绸上。奢华阿联酋长袍可拆卸天然宝石珠宝。${DISCOVERY_TAIL.zh}`,
  `Bint Saeed Signature Strands Geschenkbox für die Marylebone Abaya — grüne Malachitperlen mit geschnitzten Carneol-Kleeblattsteinen und goldfarbenen Knotted-Line-Enden in einer Marken-Schubladenbox auf Travertin mit Seide. Abnehmbarer Naturstein-Schmuck für luxuriöse emiratische Abayas. ${DISCOVERY_TAIL.de}`,
  `Bint Saeed Signature Strands cadeaudoos voor de Marylebone abaya — groene malachietparels met gesneden carneool klavertjes en goudkleurige Knotted Line uiteinden in een merkenschuifdoos op travertijn met zijde. Verwijderbare natuursteen sieraden voor luxe Emiratische abayas. ${DISCOVERY_TAIL.nl}`,
  `Caixa Signature Strands Bint Saeed para a abaya Marylebone — contas de malaquite verde com pedras de cornalina esculpidas em trevo e pontas Knotted Line douradas em caixa de gaveta da marca sobre travertino e seda. Joias de pedras naturais removíveis para abayas emirati de luxo. ${DISCOVERY_TAIL.pt}`,
  `Kotak hadiah Signature Strands Bint Saeed untuk Marylebone Abaya — manik malakit hijau dengan batu carnelian clover ukiran dan ujung Knotted Line emas dalam kotak laci bermerek di atas travertine dengan sutra. Perhiasan batu alam lepas untuk abaya Emirat mewah. ${DISCOVERY_TAIL.id}`,
  `Kotak hadiah Signature Strands Bint Saeed untuk Marylebone Abaya — manik malakit hijau dengan batu karnelian clover ukiran dan hujung Knotted Line emas dalam kotak laci berjenama di atas travertine dengan sutera. Barang kemas batu semula jadi boleh tanggal untuk abaya Emirati mewah. ${DISCOVERY_TAIL.ms}`,
)

const MALACHITE_BOX_TITLES = altLoc(
  'Signature Strands Malachite & Carnelian Gift Box | Marylebone Abaya Bint Saeed Abu Dhabi',
  'علبة Signature Strands ملاكيت وعقيق | عباية Marylebone Bint Saeed أبوظبي',
  'Coffret Signature Strands malachite et cornaline | Abaya Marylebone Bint Saeed Abou Dabi',
  'Cofanetto Signature Strands malachite e corniola | Marylebone Abaya Bint Saeed Abu Dhabi',
  'Caja Signature Strands malaquita y cornalina | Abaya Marylebone Bint Saeed Abu Dabi',
  'Коробка Signature Strands малахит и сердолик | Абайя Marylebone Bint Saeed Абу-Даби',
  'Signature Strands孔雀石与红玉髓礼盒 | Marylebone长袍 Bint Saeed阿布扎比',
  'Signature Strands Malachit & Carneol-Geschenkbox | Marylebone Abaya Bint Saeed Abu Dhabi',
  'Signature Strands malachiet & carneool cadeaudoos | Marylebone abaya Bint Saeed Abu Dhabi',
  'Caixa Signature Strands malaquite e cornalina | Abaya Marylebone Bint Saeed Abu Dhabi',
  'Kotak Signature Strands malakit & carnelian | Marylebone Abaya Bint Saeed Abu Dhabi',
  'Kotak Signature Strands malakit & karnelian | Marylebone Abaya Bint Saeed Abu Dhabi',
)

/** Curated PDP image alts + titles — Marylebone Abaya (Deep Black, Navy Blue). */
export const MARYLEBONE_ABAYA_IMAGE_ALT_ENTRIES: AltEntry[] = [
  entry('black', 'front'),
  entry('black', 'side'),
  entry('black', 'back'),
  entry('navy-blue', 'front'),
  entry('navy-blue', 'side'),
  entry('navy-blue', 'back'),
  {
    filename: 'bint-saeed-marylebone-abaya-lifestyle-jade-heart-strand-on-arm.webp',
    alts: ARM_STRAND_ALTS,
    titles: ARM_STRAND_TITLES,
  },
  {
    filename: 'bint-saeed-marylebone-abaya-jade-heart-strand-lifestyle.webp',
    alts: JADE_HEART_TRAY_ALTS,
    titles: JADE_HEART_TRAY_TITLES,
  },
  {
    filename: 'bint-saeed-marylebone-abaya-signature-strands-gift-box-carnelian-lifestyle.webp',
    alts: CARNELIAN_BOX_ALTS,
    titles: CARNELIAN_BOX_TITLES,
  },
  {
    filename: 'bint-saeed-marylebone-abaya-signature-strands-gift-box-malachite-carnelian-lifestyle.webp',
    alts: MALACHITE_BOX_ALTS,
    titles: MALACHITE_BOX_TITLES,
  },
]
