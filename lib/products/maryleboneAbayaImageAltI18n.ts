import type { AppLocale } from '@/lib/i18n/routing'
import { altLoc } from '@/lib/products/imageAltOverridesI18n'

type AltEntry = { filename: string; alts: Record<AppLocale, string> }

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

/** Curated PDP image alts — Marylebone Abaya (Deep Black, Navy Blue). */
export const MARYLEBONE_ABAYA_IMAGE_ALT_ENTRIES: AltEntry[] = [
  entry('black', 'front'),
  entry('black', 'side'),
  entry('black', 'back'),
  entry('navy-blue', 'front'),
  entry('navy-blue', 'side'),
  entry('navy-blue', 'back'),
]
