import type { AppLocale } from '@/lib/i18n/routing'

function altLoc(
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

type AltEntry = { filename: string; alts: Record<AppLocale, string> }

/** Curated PDP image alts — Covent Garden Abaya (Burgundy). Each alt describes what is visually unique. */
export const COVENT_GARDEN_ABAYA_IMAGE_ALT_ENTRIES: AltEntry[] = [
  {
    filename: 'bint-saeed-covent-garden-abaya-burgundy-front.webp',
    alts: altLoc(
      'Bint Saeed Covent Garden Abaya in Burgundy featuring Al Talli woven cuffs, elegant A-line silhouette, signature gold-tone shoulder buttons, and contemporary Emirati design by Bint Saeed, Abu Dhabi, United Arab Emirates.',
      'عباية Bint Saeed Covent Garden باللون Burgundy بأساور التلي المنسوجة، سيلويت A-line أنيق، أزرار كتف ذهبية مميزة، وتصميم إماراتي معاصر من Bint Saeed أبوظبي، الإمارات العربية المتحدة.',
      'Abaya Bint Saeed Covent Garden en Burgundy avec poignets tissés Al Talli, silhouette A-line élégante, boutons d’épaule dorés signature et design émirati contemporain par Bint Saeed, Abou Dabi, Émirats arabes unis.',
      'Bint Saeed Covent Garden Abaya in Burgundy con polsini in Al Talli tessuto, elegante silhouette A-line, bottoni dorati signature sulle spalle e design emiratino contemporaneo di Bint Saeed, Abu Dhabi, Emirati Arabi Uniti.',
      'Abaya Bint Saeed Covent Garden en Burgundy con puños tejidos Al Talli, silueta A-line elegante, botones dorados signature en los hombros y diseño emiratí contemporáneo de Bint Saeed, Abu Dabi, Emiratos Árabes Unidos.',
      'Абая Bint Saeed Covent Garden цвета Burgundy с манжетами из тканого Al Talli, элегантным A-line силуэтом, фирменными золотистыми пуговицами на плечах и современным эмиратским дизайном от Bint Saeed, Абу-Даби, ОАЭ.',
      'Bint Saeed Covent Garden Abaya酒红色正面视图，Al Talli编织袖口、优雅A字廓形与标志性金色肩扣，阿联酋阿布扎比Bint Saeed当代阿联酋设计。',
      'Bint Saeed Covent Garden Abaya in Burgundy mit Al-Talli-Webmanschetten, eleganter A-Linien-Silhouette, charakteristischen goldfarbenen Schulterknöpfen und zeitgenössischem emiratischem Design von Bint Saeed, Abu Dhabi, Vereinigte Arabische Emirate.',
      'Bint Saeed Covent Garden abaya in Burgundy met geweven Al Talli-manchetten, elegante A-line silhouet, kenmerkende goudkleurige schouderknopen en eigentijds Emiratisch design door Bint Saeed, Abu Dhabi, Verenigde Arabische Emiraten.',
      'Abaya Bint Saeed Covent Garden em Burgundy com punhos em Al Talli tecido, silhueta A-line elegante, botões dourados signature nos ombros e design emirati contemporâneo da Bint Saeed, Abu Dhabi, Emirados Árabes Unidos.',
    ),
  },
  {
    filename: 'bint-saeed-covent-garden-abaya-burgundy-side.webp',
    alts: altLoc(
      'Three-quarter view of the Bint Saeed Covent Garden Abaya in Burgundy highlighting the flowing A-line silhouette, Al Talli woven trim, signature Knotted Line shoulder buttons, and refined contemporary tailoring inspired by Emirati heritage.',
      'منظر ثلاثة أرباع لعباية Bint Saeed Covent Garden باللون Burgundy يبرز السيلويت A-line الانسيابي، تفاصيل التلي المنسوج، أزرار Knotted Line المميزة على الكتف، والتفصيل المعاصر الراقي المستوحى من التراث الإماراتي.',
      'Vue trois-quarts de l’abaya Bint Saeed Covent Garden en Burgundy mettant en valeur la silhouette A-line fluide, la garniture tissée Al Talli, les boutons d’épaule Knotted Line signature et la tailleur contemporaine raffinée inspirée du patrimoine émirati.',
      'Vista tre quarti della Bint Saeed Covent Garden Abaya in Burgundy con silhouette A-line fluida, finitura in Al Talli tessuto, bottoni Knotted Line signature sulle spalle e sartoria contemporanea raffinata ispirata al patrimonio emiratino.',
      'Vista tres cuartos de la abaya Bint Saeed Covent Garden en Burgundy con silueta A-line fluida, ribete tejido Al Talli, botones Knotted Line signature en el hombro y sastrería contemporánea refinada inspirada en el patrimonio emiratí.',
      'Вид три четверти абайи Bint Saeed Covent Garden цвета Burgundy с плавным A-line силуэтом, отделкой из тканого Al Talli, фирменными пуговицами Knotted Line на плечах и утончённым современным кроем, вдохновлённым эмиратским наследием.',
      'Bint Saeed Covent Garden Abaya酒红色四分之三视图，展现流畅A字廓形、Al Talli编织饰边、Knotted Line肩扣与受阿联酋传承启发的精致当代剪裁。',
      'Dreiviertelansicht der Bint Saeed Covent Garden Abaya in Burgundy mit fließender A-Linien-Silhouette, Al-Talli-Webverzierung, charakteristischen Knotted-Line-Schulterknöpfen und raffinierter zeitgenössischer Schneiderkunst inspiriert vom emiratischen Erbe.',
      'Driekwartweergave van de Bint Saeed Covent Garden abaya in Burgundy met vloeiend A-line silhouet, geweven Al Talli-afwerking, kenmerkende Knotted Line-schouderknopen en verfijnd eigentijds tailoring geïnspireerd op Emiratisch erfgoed.',
      'Vista de três quartos da abaya Bint Saeed Covent Garden em Burgundy com silhueta A-line fluida, acabamento em Al Talli tecido, botões Knotted Line signature no ombro e alfaiataria contemporânea refinada inspirada no património emirati.',
    ),
  },
  {
    filename: 'bint-saeed-covent-garden-abaya-burgundy-back.webp',
    alts: altLoc(
      'Back view of the Bint Saeed Covent Garden Abaya in Burgundy showcasing its elegant A-line silhouette, flowing drape, and contemporary designer craftsmanship by Bint Saeed, Abu Dhabi, United Arab Emirates.',
      'منظر خلفي لعباية Bint Saeed Covent Garden باللون Burgundy يبرز السيلويت A-line الأنيق، الانسياب الرشيق، والحرفية المصمّمة المعاصرة من Bint Saeed أبوظبي، الإمارات العربية المتحدة.',
      'Vue de dos de l’abaya Bint Saeed Covent Garden en Burgundy soulignant sa silhouette A-line élégante, sa tombée fluide et l’artisanat de créateur contemporain par Bint Saeed, Abou Dabi, Émirats arabes unis.',
      'Vista posteriore della Bint Saeed Covent Garden Abaya in Burgundy con elegante silhouette A-line, caduta fluida e artigianato designer contemporaneo di Bint Saeed, Abu Dhabi, Emirati Arabi Uniti.',
      'Vista trasera de la abaya Bint Saeed Covent Garden en Burgundy con silueta A-line elegante, caída fluida y artesanía de diseñador contemporánea de Bint Saeed, Abu Dabi, Emiratos Árabes Unidos.',
      'Вид сзади абайи Bint Saeed Covent Garden цвета Burgundy с элегантным A-line силуэтом, плавной драпировкой и современным дизайнерским мастерством от Bint Saeed, Абу-Даби, ОАЭ.',
      'Bint Saeed Covent Garden Abaya酒红色背面视图，展现优雅A字廓形、流畅垂坠与阿布扎比Bint Saeed当代设计师工艺。',
      'Rückansicht der Bint Saeed Covent Garden Abaya in Burgundy mit eleganter A-Linien-Silhouette, fließendem Fall und zeitgenössischem Designer-Handwerk von Bint Saeed, Abu Dhabi, Vereinigte Arabische Emirate.',
      'Achteraanzicht van de Bint Saeed Covent Garden abaya in Burgundy met elegante A-line silhouet, vloeiende drape en eigentijds designer vakmanschap door Bint Saeed, Abu Dhabi, Verenigde Arabische Emiraten.',
      'Vista traseira da abaya Bint Saeed Covent Garden em Burgundy com silhueta A-line elegante, caimento fluido e artesanato de designer contemporâneo da Bint Saeed, Abu Dhabi, Emirados Árabes Unidos.',
    ),
  },
  {
    filename: 'bint-saeed-covent-garden-abaya-burgundy-close-up-signature-emblem.jpg',
    alts: altLoc(
      'Close-up of the detachable statement sash on the Bint Saeed Covent Garden Abaya featuring the signature gold-tone emblem pin, Al Talli woven trim, and rich burgundy crepe fabric inspired by Emirati craftsmanship.',
      'لقطة مقرّبة للوشاح القابل للفصل على عباية Bint Saeed Covent Garden تبرز دبوس الشعار الذهبي المميز، تفاصيل التلي المنسوج، وقماش الكريب العنابي الغني المستوحى من الحرفية الإماراتية.',
      'Gros plan de l’écharpe statement amovible de l’abaya Bint Saeed Covent Garden avec l’épingle emblème dorée signature, la garniture tissée Al Talli et le riche crêpe bordeaux inspiré de l’artisanat émirati.',
      'Primo piano della fascia statement removibile sulla Bint Saeed Covent Garden Abaya con spilla emblema dorata signature, finitura in Al Talli tessuto e ricco crepe bordeaux ispirato all’artigianato emiratino.',
      'Primer plano del fajín statement desmontable de la abaya Bint Saeed Covent Garden con pin de emblema dorado signature, ribete tejido Al Talli y rico crepé burdeos inspirado en la artesanía emiratí.',
      'Крупный план съёмной statement-ленты на абайе Bint Saeed Covent Garden с фирменной золотистой булавкой-эмблемой, отделкой из тканого Al Talli и насыщенным бордовым крепом, вдохновлённым эмиратским ремеслом.',
      'Bint Saeed Covent Garden Abaya可拆卸statement饰带特写，标志性金色徽章胸针、Al Talli编织饰边与受阿联酋工艺启发的浓郁酒红色绉绸面料。',
      'Nahaufnahme des abnehmbaren Statement-Schals an der Bint Saeed Covent Garden Abaya mit charakteristischer goldfarbener Emblempin, Al-Talli-Webverzierung und reichem burgunderfarbenem Kreppstoff inspiriert von emiratischem Handwerk.',
      'Close-up van de afneembare statement-sjaal op de Bint Saeed Covent Garden abaya met kenmerkende goudkleurige emblempin, geweven Al Talli-afwerking en rijk bordeaux crepe-stof geïnspireerd op Emiratisch vakmanschap.',
      'Close-up da faixa statement destacável na abaya Bint Saeed Covent Garden com alfinete de emblema dourado signature, acabamento em Al Talli tecido e rico crepe bordô inspirado no artesanato emirati.',
    ),
  },
]
