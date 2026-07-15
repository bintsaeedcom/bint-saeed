import type { AppLocale } from '@/lib/i18n/routing'
import { altLoc } from '@/lib/products/imageAltOverridesI18n'

type AltEntry = { filename: string; alts: Record<AppLocale, string> }

type ColorSlug = 'black' | 'burgundy' | 'navy-blue'

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
    'Hitam pekat',
    'Hitam pekat',
  ),
  burgundy: altLoc(
    'Burgundy',
    'Burgundy',
    'Burgundy',
    'Burgundy',
    'Burgundy',
    'бордовый',
    '酒红色',
    'Burgundy',
    'Burgundy',
    'Burgundy',
    'Burgundy',
    'Burgundy',
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
    'Biru navy',
    'Biru laut',
  ),
}

const DISCOVERY_TAIL = {
  en: 'Fully lined premium crepe maxi dress with elegant draped neckline, softly sculpted silhouette, hidden side seam pockets, and signature woven Al Talli waist trim — UNESCO-recognised Emirati heritage craft reinterpreted in Abu Dhabi. Designed to wear alone or beneath an abaya. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
  ar: 'فستان ماكسي كريب فاخر مبطّن بالكامل بخط عنق متدلٍّ أنيق، وسيلويت منحوت بلطف، وجيوب جانبية مخفية، وتفاصيل التلي المنسوجة المميزة عند الخصر — حرفية تراث إماراتية معترف بها من اليونسكو أُعيد تفسيرها في أبوظبي. يُرتدى وحده أو تحت العباءة. صُنع في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
  fr: 'Robe maxi en crêpe premium entièrement doublée, encolure drapée élégante, silhouette délicatement sculptée, poches latérales dissimulées et garniture Al Talli tissée signature à la taille — artisanat patrimonial émirati reconnu par l’UNESCO, réinterprété à Abou Dabi. À porter seule ou sous une abaya. Fabriquée à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
  it: 'Abito maxi in crepe premium completamente foderato, scollo drappeggiato elegante, silhouette delicatamente scolpita, tasche laterali nascoste e trim Al Talli tessuto signature in vita — artigianato patrimoniale emiratino riconosciuto dall’UNESCO, reinterpretato ad Abu Dhabi. Da indossare da solo o sotto abaya. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
  es: 'Vestido maxi de crepé premium totalmente forrado, escote drapeado elegante, silueta suavemente esculpida, bolsillos laterales ocultos y ribete Al Talli tejido signature en la cintura — artesanía patrimonial emiratí reconocida por la UNESCO, reinterpretada en Abu Dabi. Para llevar solo o bajo abaya. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
  ru: 'Макси-платье из премиального крепа на полной подкладке с элегантным драпированным вырезом, мягко скульптурным силуэтом, скрытыми боковыми карманами и фирменной тканой отделкой Al Talli на талии — эмиратское наследие, признанное ЮНЕСКО, переосмысленное в Абу-Даби. Носится самостоятельно или под абайей. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.',
  zh: '全里衬高端绉绸长裙，优雅垂坠领口、柔和雕塑廓形、隐藏侧缝口袋与标志性 Al Talli 腰部织饰——联合国教科文组织认可的阿联酋传承工艺，于阿布扎比重释。可单穿或叠穿于长袍之下。阿联酋阿布扎比制造。全球配送。',
  de: 'Vollgefüttertes Premium-Krepp-Maxikleid mit elegant drapiertem Ausschnitt, sanft skulpturierter Silhouette, versteckten Seitennahttaschen und charakteristischem gewebtem Al-Talli-Taillenbesatz — von der UNESCO anerkanntes emiratisches Erbe, in Abu Dhabi neu interpretiert. Allein oder unter einer Abaya zu tragen. Hergestellt in Abu Dhabi, VAE. Weltweiter Versand.',
  nl: 'Volledig gevoerde premium crêpe maxi-jurk met elegant gedrapeerde halslijn, zacht gebeeldhouwd silhouet, verborgen zijnaadzakken en kenmerkende geweven Al Talli tailletrim — door UNESCO erkend Emiratisch erfgoed, herinterpreteerd in Abu Dhabi. Solo of onder een abaya te dragen. Gemaakt in Abu Dhabi, VAE. Wereldwijde verzending.',
  pt: 'Vestido maxi em crepe premium totalmente forrado, decote drapeado elegante, silhueta suavemente esculpida, bolsos laterais ocultos e acabamento Al Talli tecido signature na cintura — património emirati reconhecido pela UNESCO, reinterpretado em Abu Dhabi. Para usar sozinho ou sob abaya. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
  id: 'Gaun maxi krepe premium berlapis penuh dengan garis leher drape elegan, siluet lembut terbentuk, saku sisi tersembunyi, dan trim Al Talli tenun signature di pinggang — warisan Emirati diakui UNESCO, ditafsir ulang di Abu Dhabi. Dipakai sendiri atau di bawah abaya. Dibuat di Abu Dhabi, UEA. Pengiriman dunia.',
  ms: 'Gaun maxi krepe premium berlapik penuh dengan garis leher drape anggun, siluet lembut terbentuk, poket sisi tersembunyi, dan hiasan Al Talli tenunan signature di pinggang — warisan Emirati diiktiraf UNESCO, ditafsir semula di Abu Dhabi. Dipakai sendiri atau di bawah abaya. Dihasilkan di Abu Dhabi, UAE. Penghantaran seluruh dunia.',
} satisfies Record<AppLocale, string>

function frontAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Bint Saeed Hampstead Dress in ${c.en}, front view. Tailored fitted maxi dress with an elegant draped neckline, softly flared hem, and signature woven Al Talli trim at the waist. ${DISCOVERY_TAIL.en}`,
    `فستان Hampstead من Bint Saeed باللون ${c.ar}، منظر أمامي. فستان ماكسي مفصّل بخط عنق متدلٍّ أنيق، واتساع رشيق عند الذيل، وتفاصيل التلي المنسوجة المميزة عند الخصر. ${DISCOVERY_TAIL.ar}`,
    `Robe Hampstead Bint Saeed en ${c.fr}, vue de face. Robe maxi ajustée à encolure drapée élégante, léger évasé et garniture Al Talli tissée signature à la taille. ${DISCOVERY_TAIL.fr}`,
    `Hampstead Dress di Bint Saeed in ${c.it}, vista frontale. Abito maxi sartoriale con scollo drappeggiato elegante, orlo leggermente svasato e trim Al Talli tessuto signature in vita. ${DISCOVERY_TAIL.it}`,
    `Hampstead Dress de Bint Saeed en ${c.es}, vista frontal. Vestido maxi de sastrería con escote drapeado elegante, bajo ligeramente acampanado y ribete Al Talli tejido signature en la cintura. ${DISCOVERY_TAIL.es}`,
    `Платье Hampstead от Bint Saeed цвета ${c.ru}, вид спереди. Приталенное макси-платье с элегантным драпированным вырезом, лёгким клёшем и фирменной тканой отделкой Al Talli на талии. ${DISCOVERY_TAIL.ru}`,
    `Bint Saeed Hampstead Dress${c.zh}正面视图。修身长裙，优雅垂坠领口、轻盈伞摆与标志性 Al Talli 腰部织饰。${DISCOVERY_TAIL.zh}`,
    `Bint Saeed Hampstead Dress in ${c.de}, Frontansicht. Tailliertes Maxikleid mit elegant drapiertem Ausschnitt, leicht ausgestelltem Saum und charakteristischem gewebtem Al-Talli-Taillenbesatz. ${DISCOVERY_TAIL.de}`,
    `Bint Saeed Hampstead Dress in ${c.nl}, vooraanzicht. Getailleerde maxi-jurk met elegant gedrapeerde halslijn, licht uitlopende zoom en kenmerkende geweven Al Talli tailletrim. ${DISCOVERY_TAIL.nl}`,
    `Hampstead Dress da Bint Saeed em ${c.pt}, vista frontal. Vestido maxi de alfaiataria com decote drapeado elegante, baixo ligeiramente evasé e acabamento Al Talli tecido signature na cintura. ${DISCOVERY_TAIL.pt}`,
    `Bint Saeed Hampstead Dress ${c.id}, tampak depan. Gaun maxi tailored dengan garis leher drape elegan, hem flare lembut, dan trim Al Talli tenun signature di pinggang. ${DISCOVERY_TAIL.id}`,
    `Bint Saeed Hampstead Dress ${c.ms}, pandangan hadapan. Gaun maxi terjahit dengan garis leher drape anggun, hem flare lembut, dan hiasan Al Talli tenunan signature di pinggang. ${DISCOVERY_TAIL.ms}`,
  )
}

function sideAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Side view of the Bint Saeed Hampstead Dress in ${c.en} showcasing a softly sculpted silhouette, gentle flare, and graceful movement through premium crepe. ${DISCOVERY_TAIL.en}`,
    `منظر جانبي لفستان Hampstead من Bint Saeed باللون ${c.ar} يبرز سيلويتاً منحوتاً بلطف، واتساعاً رشيقاً، وحركة أنيقة عبر الكريب الفاخر. ${DISCOVERY_TAIL.ar}`,
    `Vue de profil de la robe Hampstead Bint Saeed en ${c.fr} mettant en valeur une silhouette délicatement sculptée, un léger évasé et un mouvement gracieux dans le crêpe premium. ${DISCOVERY_TAIL.fr}`,
    `Vista laterale dell’Hampstead Dress di Bint Saeed in ${c.it} con silhouette delicatamente scolpita, leggero svasato e movimento aggraziato nel crepe premium. ${DISCOVERY_TAIL.it}`,
    `Vista lateral del Hampstead Dress de Bint Saeed en ${c.es} con silueta suavemente esculpida, leve acampanado y movimiento elegante en crepé premium. ${DISCOVERY_TAIL.es}`,
    `Вид сбоку платья Hampstead от Bint Saeed цвета ${c.ru} с мягко скульптурным силуэтом, лёгким клёшем и грациозным движением премиального крепа. ${DISCOVERY_TAIL.ru}`,
    `Bint Saeed Hampstead Dress${c.zh}侧面视图，展现柔和雕塑廓形、轻盈伞摆与高端绉绸的优雅动感。${DISCOVERY_TAIL.zh}`,
    `Seitenansicht des Bint Saeed Hampstead Dress in ${c.de} mit sanft skulpturierter Silhouette, leichtem Schwung und anmutiger Bewegung im Premium-Krepp. ${DISCOVERY_TAIL.de}`,
    `Zijaanzicht van de Bint Saeed Hampstead Dress in ${c.nl} met zacht gebeeldhouwd silhouet, lichte flare en sierlijke beweging in premium crêpe. ${DISCOVERY_TAIL.nl}`,
    `Vista lateral do Hampstead Dress da Bint Saeed em ${c.pt} com silhueta suavemente esculpida, leve evasé e movimento gracioso no crepe premium. ${DISCOVERY_TAIL.pt}`,
    `Tampak samping Bint Saeed Hampstead Dress ${c.id} menampilkan siluet lembut terbentuk, flare ringan, dan gerakan anggun melalui krepe premium. ${DISCOVERY_TAIL.id}`,
    `Pandangan sisi Bint Saeed Hampstead Dress ${c.ms} mempamerkan siluet lembut terbentuk, flare ringan, dan gerakan anggun melalui krepe premium. ${DISCOVERY_TAIL.ms}`,
  )
}

function backAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Back view of the Bint Saeed Hampstead Dress in ${c.en} highlighting structured shoulders, a clean architectural line, and the flowing maxi length of refined Abu Dhabi tailoring. ${DISCOVERY_TAIL.en}`,
    `منظر خلفي لفستان Hampstead من Bint Saeed باللون ${c.ar} يبرز أكتافاً مُهيكَلة، وخطاً معمارياً نظيفاً، وطول الماكسي الانسيابي بتفصيل أبوظبي الراقي. ${DISCOVERY_TAIL.ar}`,
    `Vue de dos de la robe Hampstead Bint Saeed en ${c.fr} soulignant des épaules structurées, une ligne architecturale épurée et la longueur maxi fluide d’une tailleur raffinée d’Abou Dabi. ${DISCOVERY_TAIL.fr}`,
    `Vista posteriore dell’Hampstead Dress di Bint Saeed in ${c.it} con spalle strutturate, linea architettonica pulita e lunghezza maxi fluida della sartoria raffinata di Abu Dhabi. ${DISCOVERY_TAIL.it}`,
    `Vista trasera del Hampstead Dress de Bint Saeed en ${c.es} con hombros estructurados, línea arquitectónica limpia y largo maxi fluido de la sastrería refinada de Abu Dabi. ${DISCOVERY_TAIL.es}`,
    `Вид сзади платья Hampstead от Bint Saeed цвета ${c.ru} со структурированными плечами, чистой архитектурной линией и струящейся макси-длиной утончённого кроя из Абу-Даби. ${DISCOVERY_TAIL.ru}`,
    `Bint Saeed Hampstead Dress${c.zh}背面视图，凸显结构感肩线、利落建筑感线条与阿布扎比精致剪裁的流畅长裙长度。${DISCOVERY_TAIL.zh}`,
    `Rückansicht des Bint Saeed Hampstead Dress in ${c.de} mit strukturierten Schultern, klarer architektonischer Linie und fließender Maxilänge raffinierter Abu-Dhabi-Schneiderkunst. ${DISCOVERY_TAIL.de}`,
    `Achteraanzicht van de Bint Saeed Hampstead Dress in ${c.nl} met gestructureerde schouders, strakke architecturale lijn en vloeiende maxi-lengte van verfijnd Abu Dhabi vakmanschap. ${DISCOVERY_TAIL.nl}`,
    `Vista traseira do Hampstead Dress da Bint Saeed em ${c.pt} com ombros estruturados, linha arquitetónica limpa e comprimento maxi fluido da alfaiataria refinada de Abu Dhabi. ${DISCOVERY_TAIL.pt}`,
    `Tampak belakang Bint Saeed Hampstead Dress ${c.id} menonjolkan bahu terstruktur, garis arsitektural bersih, dan panjang maxi mengalir dari tailoring Abu Dhabi yang halus. ${DISCOVERY_TAIL.id}`,
    `Pandangan belakang Bint Saeed Hampstead Dress ${c.ms} menyerlahkan bahu berstruktur, garisan seni bina bersih, dan panjang maxi mengalir dari jahitan Abu Dhabi yang halus. ${DISCOVERY_TAIL.ms}`,
  )
}

const AL_TALLI_DETAIL_ALTS = altLoc(
  'Close-up of the signature woven Al Talli waist trim on the Bint Saeed Hampstead Dress in Deep Black — UNESCO-recognised Emirati embroidery craft reinterpreted through contemporary design in Abu Dhabi, United Arab Emirates.',
  'لقطة مقرّبة لتفاصيل التلي المنسوجة المميزة عند خصر فستان Hampstead من Bint Saeed بالأسود العميق — حرفية تطريز إماراتية معترف بها من اليونسكو أُعيد تفسيرها عبر تصميم معاصر في أبوظبي، الإمارات العربية المتحدة.',
  'Gros plan de la garniture Al Talli tissée signature à la taille de la robe Hampstead Bint Saeed en noir profond — artisanat de broderie émirati reconnu par l’UNESCO, réinterprété par un design contemporain à Abou Dabi, Émirats arabes unis.',
  'Primo piano del trim Al Talli tessuto signature in vita dell’Hampstead Dress di Bint Saeed in nero profondo — artigianato di ricamo emiratino riconosciuto dall’UNESCO, reinterpretato attraverso un design contemporaneo ad Abu Dhabi, Emirati Arabi Uniti.',
  'Primer plano del ribete Al Talli tejido signature en la cintura del Hampstead Dress de Bint Saeed en negro profundo — artesanía de bordado emiratí reconocida por la UNESCO, reinterpretada mediante diseño contemporáneo en Abu Dabi, Emiratos Árabes Unidos.',
  'Крупный план фирменной тканой отделки Al Talli на талии платья Hampstead от Bint Saeed глубокого чёрного — эмиратское вышивальное ремесло, признанное ЮНЕСКО, переосмысленное в современном дизайне в Абу-Даби, ОАЭ.',
  'Bint Saeed Hampstead Dress深黑色腰部标志性 Al Talli 织饰特写——联合国教科文组织认可的阿联酋刺绣工艺，以当代设计于阿布扎比重释。',
  'Nahaufnahme des charakteristischen gewebten Al-Talli-Taillenbesatzes am Bint Saeed Hampstead Dress in Tiefschwarz — von der UNESCO anerkanntes emiratisches Stickhandwerk, neu interpretiert durch zeitgenössisches Design in Abu Dhabi, VAE.',
  'Close-up van de kenmerkende geweven Al Talli tailletrim op de Bint Saeed Hampstead Dress in diepzwart — door UNESCO erkend Emiratisch borduurambacht, herinterpreteerd via eigentijds design in Abu Dhabi, VAE.',
  'Close-up do acabamento Al Talli tecido signature na cintura do Hampstead Dress da Bint Saeed em preto profundo — artesanato de bordado emirati reconhecido pela UNESCO, reinterpretado através de design contemporâneo em Abu Dhabi, Emirados Árabes Unidos.',
  'Close-up trim Al Talli tenun signature di pinggang Bint Saeed Hampstead Dress hitam pekat — kerajinan sulaman Emirati diakui UNESCO, ditafsir ulang melalui desain kontemporer di Abu Dhabi, UEA.',
  'Close-up hiasan Al Talli tenunan signature di pinggang Bint Saeed Hampstead Dress hitam pekat — kraftangan sulaman Emirati diiktiraf UNESCO, ditafsir semula melalui reka bentuk kontemporari di Abu Dhabi, UAE.',
)

const LABEL_DETAIL_ALTS = altLoc(
  'Detail shot of the Bint Saeed woven label inside the Hampstead Dress in Deep Black — Emirati luxury fashion house mark from Abu Dhabi, United Arab Emirates, on a fully lined premium crepe maxi dress.',
  'لقطة تفصيلية لعلامة Bint Saeed المنسوجة داخل فستان Hampstead بالأسود العميق — علامة دار أزياء فاخرة إماراتية من أبوظبي، الإمارات العربية المتحدة، على فستان ماكسي كريب فاخر مبطّن بالكامل.',
  'Détail de l’étiquette tissée Bint Saeed à l’intérieur de la robe Hampstead en noir profond — marque de maison de mode de luxe émiratie d’Abou Dabi, Émirats arabes unis, sur une robe maxi en crêpe premium entièrement doublée.',
  'Dettaglio dell’etichetta tessuta Bint Saeed all’interno dell’Hampstead Dress in nero profondo — marchio di maison di moda di lusso emiratina di Abu Dhabi, Emirati Arabi Uniti, su un abito maxi in crepe premium completamente foderato.',
  'Detalle de la etiqueta tejida Bint Saeed en el interior del Hampstead Dress en negro profundo — marca de casa de moda de lujo emiratí de Abu Dabi, Emiratos Árabes Unidos, en un vestido maxi de crepé premium totalmente forrado.',
  'Деталь тканого ярлыка Bint Saeed внутри платья Hampstead глубокого чёрного — знак эмиратского люксового дома моды из Абу-Даби, ОАЭ, на макси-платье из премиального крепа на полной подкладке.',
  'Bint Saeed Hampstead Dress深黑色内标织标特写——阿联酋阿布扎比奢华时装屋标识，见于全里衬高端绉绸长裙。',
  'Detailaufnahme des gewebten Bint-Saeed-Labels im Inneren des Hampstead Dress in Tiefschwarz — Markenzeichen des emiratischen Luxusmodehauses aus Abu Dhabi, VAE, an einem vollgefütterten Premium-Krepp-Maxikleid.',
  'Detailshot van het geweven Bint Saeed-label in de Hampstead Dress in diepzwart — merk van het Emiratische luxemodehuis uit Abu Dhabi, VAE, op een volledig gevoerde premium crêpe maxi-jurk.',
  'Detalhe da etiqueta tecida Bint Saeed no interior do Hampstead Dress em preto profundo — marca da casa de moda de luxo emirati de Abu Dhabi, Emirados Árabes Unidos, num vestido maxi em crepe premium totalmente forrado.',
  'Detail shot label tenun Bint Saeed di dalam Hampstead Dress hitam pekat — tanda rumah mode mewah Emirati dari Abu Dhabi, UEA, pada gaun maxi krepe premium berlapis penuh.',
  'Detail shot label tenunan Bint Saeed di dalam Hampstead Dress hitam pekat — tanda rumah fesyen mewah Emirati dari Abu Dhabi, UAE, pada gaun maxi krepe premium berlapik penuh.',
)

function entry(color: ColorSlug, view: 'front' | 'side' | 'back'): AltEntry {
  const alts =
    view === 'front' ? frontAlts(color) : view === 'side' ? sideAlts(color) : backAlts(color)
  return {
    filename: `bint-saeed-hampstead-dress-${color}-${view}.webp`,
    alts,
  }
}

/** Curated PDP image alts — Hampstead Dress (Deep Black, Burgundy, Navy Blue + detail shots). */
export const HAMPSTEAD_DRESS_IMAGE_ALT_ENTRIES: AltEntry[] = [
  entry('black', 'front'),
  entry('black', 'side'),
  entry('black', 'back'),
  {
    filename: 'bint-saeed-hampstead-dress-black-front-al-talli-detail-shot.webp',
    alts: AL_TALLI_DETAIL_ALTS,
  },
  {
    filename: 'bint-saeed-hampstead-dress-black-bint-saeed-label-detail-shot.webp',
    alts: LABEL_DETAIL_ALTS,
  },
  entry('burgundy', 'front'),
  entry('burgundy', 'side'),
  entry('burgundy', 'back'),
  entry('navy-blue', 'front'),
  entry('navy-blue', 'side'),
  entry('navy-blue', 'back'),
]
