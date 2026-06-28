import type { AppLocale } from '@/lib/i18n/routing'
import { altLoc } from '@/lib/products/imageAltOverridesI18n'

type AltEntry = { filename: string; alts: Record<AppLocale, string> }

type ColorSlug = 'black' | 'dark-marroon' | 'navy-blue'

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
  'dark-marroon': altLoc(
    'Dark Maroon',
    'عنابي غامق',
    'Bordeaux foncé',
    'Bordeaux scuro',
    'Burdeos oscuro',
    'тёмный бордовый',
    '深酒红色',
    'Dunkelbordeaux',
    'Donker bordeaux',
    'Bordô escuro',
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
  en: 'Luxury designer abaya by Bint Saeed Abu Dhabi, United Arab Emirates — modest fashion for diplomats, executives, embassy receptions, business meetings, and international wardrobes in London, Paris, Riyadh, Doha, and worldwide. Made in Abu Dhabi. Worldwide shipping.',
  ar: 'عباية مصمّمة فاخرة من Bint Saeed أبوظبي، الإمارات العربية المتحدة — أزياء محتشمة للدبلوماسيات والتنفيذيات واستقبالات السفارات واجتماعات الأعمال والخزائن الدولية في لندن وباريس والرياض والدوحة وما بعدها. صُنعت في أبوظبي. شحن عالمي.',
  fr: 'Abaya de créateur de luxe par Bint Saeed Abou Dabi, Émirats arabes unis — mode modeste pour diplomates, dirigeantes, réceptions d’ambassade, réunions professionnelles et garde-robes internationales à Londres, Paris, Riyad, Doha et dans le monde. Fabriquée à Abou Dabi. Livraison mondiale.',
  it: 'Abaya designer di lusso di Bint Saeed Abu Dhabi, Emirati Arabi Uniti — modest fashion per diplomatiche, executive, ricevimenti in ambasciata, riunioni di lavoro e guardaroba internazionali a Londra, Parigi, Riyadh, Doha e nel mondo. Realizzata ad Abu Dhabi. Spedizione mondiale.',
  es: 'Abaya de diseñador de lujo de Bint Saeed Abu Dabi, Emiratos Árabes Unidos — moda modesta para diplomáticas, ejecutivas, recepciones en embajada, reuniones de negocios y armarios internacionales en Londres, París, Riad, Doha y en todo el mundo. Hecha en Abu Dabi. Envío mundial.',
  ru: 'Люксовая дизайнерская абайя от Bint Saeed Абу-Даби, ОАЭ — скромная мода для дипломатов, руководителей, приёмов в посольствах, деловых встреч и международных гардеробов в Лондоне, Париже, Эр-Рияде, Дохе и по всему миру. Сделано в Абу-Даби. Доставка по всему миру.',
  zh: 'Bint Saeed阿布扎比、阿联酋奢华设计师长袍——面向外交官、高管、使馆招待会、商务会议及伦敦、巴黎、利雅得、多哈与国际衣橱的端庄时尚。阿布扎比制造。全球配送。',
  de: 'Luxus-Designer-Abaya von Bint Saeed Abu Dhabi, VAE — bescheidene Mode für Diplomatinnen, Führungskräfte, Botschaftsempfänge, Geschäftstreffen und internationale Garderoben in London, Paris, Riad, Doha und weltweit. Hergestellt in Abu Dhabi. Weltweiter Versand.',
  nl: 'Luxe designer abaya van Bint Saeed Abu Dhabi, VAE — bescheiden mode voor diplomaten, executives, ambassaderecepties, zakelijke vergaderingen en internationale garderobes in Londen, Parijs, Riyad, Doha en wereldwijd. Gemaakt in Abu Dhabi. Wereldwijde verzending.',
  pt: 'Abaya de designer de luxo da Bint Saeed Abu Dhabi, Emirados Árabes Unidos — moda modesta para diplomatas, executivas, receções em embaixada, reuniões de negócios e guarda-roupas internacionais em Londres, Paris, Riade, Doha e no mundo. Feita em Abu Dhabi. Envio mundial.',
  id: 'Abaya desainer mewah Bint Saeed Abu Dhabi, UEA — busana modest untuk diplomat, eksekutif, resepsi kedutaan, rapat bisnis, dan lemari internasional di London, Paris, Riyadh, Doha, dan dunia. Dibuat di Abu Dhabi. Pengiriman dunia.',
  ms: 'Abaya pereka mewah Bint Saeed Abu Dhabi, UAE — fesyen sopan untuk diplomat, eksekutif, majlis kedutaan, mesyuarat perniagaan, dan almari antarabangsa di London, Paris, Riyadh, Doha, dan seluruh dunia. Dihasilkan di Abu Dhabi. Penghantaran seluruh dunia.',
} satisfies Record<AppLocale, string>

function frontAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Bint Saeed Park Lane Abaya in ${c.en}, front view. Contemporary A-line designer abaya with integrated shoulder scarf, signature gold-tone Knotted Line shoulder buttons, and wide cuffs with removable Bint Saeed emblem cufflinks. ${DISCOVERY_TAIL.en}`,
    `عباية Bint Saeed Park Lane باللون ${c.ar}، منظر أمامي. عباية مصمّمة معاصرة بقصة A-line مع وشاح كتف مدمج، وأزرار Knotted Line الذهبية المميزة عند الكتفين، وأكمام واسعة بأزرار شعار Bint Saeed القابلة للإزالة. ${DISCOVERY_TAIL.ar}`,
    `Abaya Bint Saeed Park Lane en ${c.fr}, vue de face. Abaya de créateur contemporaine A-line avec écharpe d’épaule intégrée, boutons dorés signature Knotted Line aux épaules et larges poignets avec boutons de manchette emblème Bint Saeed amovibles. ${DISCOVERY_TAIL.fr}`,
    `Bint Saeed Park Lane Abaya in ${c.it}, vista frontale. Abaya designer contemporanea A-line con sciarpa spalla integrata, bottoni dorati signature Knotted Line alle spalle e polsini ampi con gemelli emblema Bint Saeed rimovibili. ${DISCOVERY_TAIL.it}`,
    `Abaya Bint Saeed Park Lane en ${c.es}, vista frontal. Abaya de diseñador contemporánea A-line con bufanda de hombro integrada, botones dorados signature Knotted Line en los hombros y puños anchos con gemelos emblema Bint Saeed extraíbles. ${DISCOVERY_TAIL.es}`,
    `Абайя Bint Saeed Park Lane цвета ${c.ru}, вид спереди. Современная дизайнерская абайя A-line со встроенным шарфом на плече, фирменными золотистыми пуговицами Knotted Line на плечах и широкими манжетами со съёмными запонками-эмблемой Bint Saeed. ${DISCOVERY_TAIL.ru}`,
    `Bint Saeed Park Lane 长袍${c.zh}正面视图。当代A字设计师长袍，一体式肩巾、标志性Knotted Line金色肩钮与可拆卸Bint Saeed徽标袖扣宽袖口。${DISCOVERY_TAIL.zh}`,
    `Bint Saeed Park Lane Abaya in ${c.de}, Frontansicht. Zeitgenössische A-Linien-Designer-Abaya mit integriertem Schulterschal, charakteristischen goldfarbenen Knotted-Line-Schulterknöpfen und weiten Manschetten mit abnehmbaren Bint Saeed-Emblem-Manschettenknöpfen. ${DISCOVERY_TAIL.de}`,
    `Bint Saeed Park Lane abaya in ${c.nl}, vooraanzicht. Eigentijdse A-line designer abaya met geïntegreerde schoudersjaal, kenmerkende goudkleurige Knotted Line schouderknopen en brede manchetten met verwijderbare Bint Saeed embleem manchetknopen. ${DISCOVERY_TAIL.nl}`,
    `Abaya Bint Saeed Park Lane em ${c.pt}, vista frontal. Abaya de designer contemporânea A-line com lenço de ombro integrado, botões dourados signature Knotted Line nos ombros e punhos largos com abotoaduras emblema Bint Saeed removíveis. ${DISCOVERY_TAIL.pt}`,
    `Bint Saeed Park Lane Abaya ${c.id}, tampak depan. Abaya desainer A-line kontemporer dengan scarf bahu terintegrasi, kancing Knotted Line emas signature di bahu, dan cuff lebar dengan kancing manset emblem Bint Saeed yang dapat dilepas. ${DISCOVERY_TAIL.id}`,
    `Bint Saeed Park Lane Abaya ${c.ms}, pandangan hadapan. Abaya pereka A-line kontemporari dengan skarf bahu bersepadu, butang Knotted Line emas signature di bahu, dan cuff lebar dengan kancing manset emblem Bint Saeed boleh tanggal. ${DISCOVERY_TAIL.ms}`,
  )
}

function sideAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Three-quarter view of the Bint Saeed Park Lane Abaya in ${c.en} showcasing graceful A-line drape, integrated shoulder scarf movement, structured shoulders with Knotted Line buttons, and tailored crepe silhouette. ${DISCOVERY_TAIL.en}`,
    `منظر ثلاثة أرباع لعباية Bint Saeed Park Lane باللون ${c.ar} يبرز انسيابية A-line الأنيقة، وحركة وشاح الكتف المدمج، والكتفين المهيكلين بأزرار Knotted Line، وقصة الكريب المفصّلة. ${DISCOVERY_TAIL.ar}`,
    `Vue trois-quarts de l’abaya Bint Saeed Park Lane en ${c.fr} mettant en valeur la tombée A-line gracieuse, le mouvement de l’écharpe d’épaule intégrée, les épaules structurées avec boutons Knotted Line et la silhouette crepe taillée. ${DISCOVERY_TAIL.fr}`,
    `Vista tre quarti della Bint Saeed Park Lane Abaya in ${c.it} con drappeggio A-line aggraziato, movimento della sciarpa spalla integrata, spalle strutturate con bottoni Knotted Line e silhouette crepe sartoriale. ${DISCOVERY_TAIL.it}`,
    `Vista tres cuartos de la abaya Bint Saeed Park Lane en ${c.es} con caída A-line elegante, movimiento del bufanda de hombro integrado, hombros estructurados con botones Knotted Line y silueta de crepe entallada. ${DISCOVERY_TAIL.es}`,
    `Вид три четверти абайи Bint Saeed Park Lane цвета ${c.ru} с изящной драпировкой A-line, движением встроенного шарфа на плече, структурированными плечами с пуговицами Knotted Line и кроем из крепа. ${DISCOVERY_TAIL.ru}`,
    `Bint Saeed Park Lane 长袍${c.zh}四分之三视图，展现优雅A字垂坠、一体式肩巾动感、Knotted Line肩部纽扣与剪裁绉绸廓形。${DISCOVERY_TAIL.zh}`,
    `Dreiviertelansicht der Bint Saeed Park Lane Abaya in ${c.de} mit anmutigem A-Linien-Fall, Bewegung des integrierten Schulterschals, strukturierten Schultern mit Knotted-Line-Knöpfen und taillierter Krepp-Silhouette. ${DISCOVERY_TAIL.de}`,
    `Driekwartweergave van de Bint Saeed Park Lane abaya in ${c.nl} met sierlijke A-line drape, beweging van de geïntegreerde schoudersjaal, gestructureerde schouders met Knotted Line knopen en getailleerd crepe silhouet. ${DISCOVERY_TAIL.nl}`,
    `Vista de três quartos da abaya Bint Saeed Park Lane em ${c.pt} com caimento A-line gracioso, movimento do lenço de ombro integrado, ombros estruturados com botões Knotted Line e silhueta crepe estruturada. ${DISCOVERY_TAIL.pt}`,
    `Pandangan tiga perempat Bint Saeed Park Lane Abaya ${c.id} menampilkan drape A-line anggun, gerakan scarf bahu terintegrasi, bahu terstruktur dengan kancing Knotted Line, dan siluet crepe tailored. ${DISCOVERY_TAIL.id}`,
    `Pandangan tiga suku Bint Saeed Park Lane Abaya ${c.ms} mempamerkan jatuhan A-line anggun, pergerakan skarf bahu bersepadu, bahu berstruktur dengan butang Knotted Line, dan siluet crepe terjahit. ${DISCOVERY_TAIL.ms}`,
  )
}

function backAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Back view of the Bint Saeed Park Lane Abaya in ${c.en} highlighting elegant A-line silhouette, full-length flowing drape, integrated shoulder scarf, and clean architectural tailoring. ${DISCOVERY_TAIL.en}`,
    `منظر خلفي لعباية Bint Saeed Park Lane باللون ${c.ar} يبرز سيلويت A-line الأنيق، والانسياب الكامل، ووشاح الكتف المدمج، والتفصيل المعماري النظيف. ${DISCOVERY_TAIL.ar}`,
    `Vue de dos de l’abaya Bint Saeed Park Lane en ${c.fr} soulignant la silhouette A-line élégante, la tombée fluide pleine longueur, l’écharpe d’épaule intégrée et la tailleur architecturale épurée. ${DISCOVERY_TAIL.fr}`,
    `Vista posteriore della Bint Saeed Park Lane Abaya in ${c.it} con elegante silhouette A-line, caduta fluida a tutta lunghezza, sciarpa spalla integrata e sartoria architettonica pulita. ${DISCOVERY_TAIL.it}`,
    `Vista trasera de la abaya Bint Saeed Park Lane en ${c.es} con silueta A-line elegante, caída fluida de largo completo, bufanda de hombro integrada y sastrería arquitectónica limpia. ${DISCOVERY_TAIL.es}`,
    `Вид сзади абайи Bint Saeed Park Lane цвета ${c.ru} с элегантным A-line силуэтом, плавной драпировкой во всю длину, встроенным шарфом на плече и чистым архитектурным кроем. ${DISCOVERY_TAIL.ru}`,
    `Bint Saeed Park Lane 长袍${c.zh}背面视图，凸显优雅A字廓形、全长流畅垂坠、一体式肩巾与利落建筑感剪裁。${DISCOVERY_TAIL.zh}`,
    `Rückansicht der Bint Saeed Park Lane Abaya in ${c.de} mit eleganter A-Linien-Silhouette, fließendem Ganzkörperfall, integriertem Schulterschal und klarer architektonischer Schneiderkunst. ${DISCOVERY_TAIL.de}`,
    `Achteraanzicht van de Bint Saeed Park Lane abaya in ${c.nl} met elegante A-line silhouet, vloeiende drape over volledige lengte, geïntegreerde schoudersjaal en strak architecturaal tailoring. ${DISCOVERY_TAIL.nl}`,
    `Vista traseira da abaya Bint Saeed Park Lane em ${c.pt} com silhueta A-line elegante, caimento fluido de comprimento total, lenço de ombro integrado e alfaiataria arquitetónica limpa. ${DISCOVERY_TAIL.pt}`,
    `Tampak belakang Bint Saeed Park Lane Abaya ${c.id} menonjolkan siluet A-line elegan, drape mengalir penuh, scarf bahu terintegrasi, dan tailoring arsitektural bersih. ${DISCOVERY_TAIL.id}`,
    `Pandangan belakang Bint Saeed Park Lane Abaya ${c.ms} menyerlahkan siluet A-line anggun, jatuhan mengalir penuh, skarf bahu bersepadu, dan jahitan seni bina bersih. ${DISCOVERY_TAIL.ms}`,
  )
}

const BLACK_EXTRA_ALTS = altLoc(
  `Detail view of the Bint Saeed Park Lane Abaya in Deep Black — close-up of signature gold-tone Knotted Line shoulder buttons, removable Bint Saeed emblem cufflinks on wide cuffs, and integrated shoulder scarf against softly textured crepe. ${DISCOVERY_TAIL.en}`,
  `منظر تفصيلي لعباية Bint Saeed Park Lane بالأسود العميق — لقطة مقرّبة لأزرار Knotted Line الذهبية المميزة عند الكتفين، وأزرار شعار Bint Saeed القابلة للإزالة على الأكمام الواسعة، ووشاح الكتف المدمج على كريب ناعم الملمس. ${DISCOVERY_TAIL.ar}`,
  `Vue détaillée de l’abaya Bint Saeed Park Lane en Noir profond — gros plan des boutons dorés signature Knotted Line aux épaules, boutons de manchette emblème Bint Saeed amovibles sur larges poignets et écharpe d’épaule intégrée sur crepe texturé. ${DISCOVERY_TAIL.fr}`,
  `Vista dettagliata della Bint Saeed Park Lane Abaya in Nero profondo — primo piano dei bottoni dorati signature Knotted Line alle spalle, gemelli emblema Bint Saeed rimovibili su polsini ampi e sciarpa spalla integrata su crepe morbido. ${DISCOVERY_TAIL.it}`,
  `Vista detallada de la abaya Bint Saeed Park Lane en Negro profundo — primer plano de botones dorados signature Knotted Line en hombros, gemelos emblema Bint Saeed extraíbles en puños anchos y bufanda de hombro integrada sobre crepe texturizado. ${DISCOVERY_TAIL.es}`,
  `Детальный вид абайи Bint Saeed Park Lane цвета глубокий чёрный — крупный план золотистых пуговиц Knotted Line на плечах, съёмных запонок-эмблем Bint Saeed на широких манжетах и встроенного шарфа на мягком крепе. ${DISCOVERY_TAIL.ru}`,
  `Bint Saeed Park Lane深黑色细节视图——标志性Knotted Line金色肩钮、宽袖口可拆卸Bint Saeed徽标袖扣与一体式肩巾特写。${DISCOVERY_TAIL.zh}`,
  `Detailansicht der Bint Saeed Park Lane Abaya in Tiefschwarz — Nahaufnahme der goldfarbenen Knotted-Line-Schulterknöpfe, abnehmbarer Bint Saeed-Emblem-Manschettenknöpfe an weiten Manschetten und integriertem Schulterschal auf weichem Krepp. ${DISCOVERY_TAIL.de}`,
  `Detailweergave van de Bint Saeed Park Lane abaya in Diepzwart — close-up van kenmerkende goudkleurige Knotted Line schouderknopen, verwijderbare Bint Saeed embleem manchetknopen op brede manchetten en geïntegreerde schoudersjaal op zacht crepe. ${DISCOVERY_TAIL.nl}`,
  `Vista detalhada da abaya Bint Saeed Park Lane em Preto profundo — close-up dos botões dourados signature Knotted Line nos ombros, abotoaduras emblema Bint Saeed removíveis em punhos largos e lenço de ombro integrado sobre crepe macio. ${DISCOVERY_TAIL.pt}`,
  `Tampak detail Bint Saeed Park Lane Abaya Deep Black — close-up kancing Knotted Line emas signature di bahu, kancing manset emblem Bint Saeed lepas pada cuff lebar, dan scarf bahu terintegrasi pada crepe lembut. ${DISCOVERY_TAIL.id}`,
  `Pandangan terperinci Bint Saeed Park Lane Abaya Deep Black — close-up butang Knotted Line emas signature di bahu, kancing manset emblem Bint Saeed boleh tanggal pada cuff lebar, dan skarf bahu bersepadu pada crepe lembut. ${DISCOVERY_TAIL.ms}`,
)

function entry(color: ColorSlug, view: 'front' | 'side' | 'back'): AltEntry {
  const alts =
    view === 'front' ? frontAlts(color) : view === 'side' ? sideAlts(color) : backAlts(color)
  return {
    filename: `bint-saeed-parklane-abaya-${color}-${view}.webp`,
    alts,
  }
}

/** Curated PDP image alts — Park Lane Abaya (Deep Black, Dark Maroon, Navy Blue). */
export const PARK_LANE_ABAYA_IMAGE_ALT_ENTRIES: AltEntry[] = [
  entry('black', 'front'),
  entry('black', 'side'),
  entry('black', 'back'),
  { filename: 'bint-saeed-parklane-abaya-black-extra.webp', alts: BLACK_EXTRA_ALTS },
  entry('dark-marroon', 'front'),
  entry('dark-marroon', 'side'),
  entry('dark-marroon', 'back'),
  entry('navy-blue', 'front'),
  entry('navy-blue', 'side'),
  entry('navy-blue', 'back'),
]
