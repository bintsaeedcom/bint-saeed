import type { StrandsPageCopy } from '@/lib/i18n/strandsPageCopyI18n'
import {
  shopAllStrandsCta as buildShopAllStrandsCta,
  shopStrandsCta as buildShopStrandsCta,
} from '@/lib/i18n/strandsBrandLock'

const COLORS = [
  '#1a1a1a',
  '#8B6914',
  '#E8833A',
  '#C2185B',
  '#7BA7C2',
  '#E8B4B8',
  '#2E7D32',
  '#1A237E',
  '#7B1FA2',
  '#4CAF82',
] as const

const NOTES_ES: Record<string, string> = {
  'Onyx Strands':
    'Negro profundo con superficie de alto brillo. Una piedra clásica, presente en Brasil e India. La que lleva cada abaya Marylebone a su llegada.',
  'Tiger Eye Strands':
    'Marrón dorado cálido con un brillo natural que se mueve con la luz. Procedente de Sudáfrica. Ninguna pieza la captura del mismo modo.',
  'Al Ain Oasis Sunstone Strands':
    'Piedra de sol melocotón-naranja cálida, acabado liso y luminoso. Un tono natural vivo, suave en la luz.',
  'Fuchsia Jade Strands':
    'Jade natural en un rosa saturado y profundo. Un color inusual — poco frecuente a esta intensidad.',
  'Blue Aventurine Strands':
    'Un azul frío y polvoriento con un sutil destello interno. Procedente de India y Chile. Discreta a distancia, detallada de cerca.',
  'Al Ain Oasis Rose Quartz Strands':
    'Rosa pálido, semitranslúcido. La luz lo atraviesa en lugar de reflejarse. Presente en Brasil y Madagascar.',
  'Al Ain Oasis Malachite Strands':
    'Verde profundo con bandas naturales — ningún patrón se repite. Procedente de África Central.',
  'Al Ain Oasis Lapis Lazuli Strands':
    'Azul profundo moteado de oro natural, procedente de Afganistán. Usado en joyería y arte durante milenios.',
  'Amethyst Hearts Strands':
    'Cuarzo violeta tallado en corazones y pulido a facetas. Presente en Brasil y Zambia.',
  'Jade Hearts Strands':
    'Jade verde fresco, formado a mano en corazones. Cada uno ligeramente distinto. Cada uno único.',
  'Natural Jade Strands':
    'Jade natural genuino sin teñir, verde suave. Cuentas redondas pulidas, de calma mineral.',
}

export const STRANDS_ES: StrandsPageCopy = {
  heroEyebrow: 'EL STRAND ABAYA · BINT SAEED',
  heroHeadline: 'Tu abaya nunca estuvo terminada. Hasta ahora.',
  heroSubline1:
    'La primera casa de abayas con Strands de piedras naturales intercambiables. Se llevan en el puño. Se cambian a voluntad.',
  heroSubline2: 'Piedra natural. Hecho a mano en Abu Dhabi. Para la abaya Marylebone.',
  ctaShopStrands: buildShopStrandsCta('es', 'upper'),
  ctaSeeMarylebone: 'VER LA MARYLEBONE',
  marquee: 'PIEDRA NATURAL · BINT SAEED · ABAYA STRANDS · ABU DHABI · HECHO BAJO ENCARGO ·',
  conceptLabel: 'EL CONCEPTO',
  conceptHeadingLine1: 'Una abaya.',
  conceptHeadingLine2: 'Muchos acentos.',
  conceptP1:
    'El strand abaya Bint Saeed es un detalle de piedra natural que se lleva en el puño de la abaya Marylebone. Hecho a mano en Abu Dhabi. Hecho para cambiarse.',
  conceptP2:
    'Cada abaya Marylebone llega con un strand de ónix estándar. Elige otra piedra para otro día. Combínala con tu bolso, tu look, tu ocasión. La abaya permanece. Tú decides lo que expresa.',
  conceptStoneList:
    'Ónix · Ojo de tigre · Piedra de sol · Jade fucsia · Aventurina azul · Cuarzo rosa · Malaquita · Lapislázuli · Amatista · Jade',
  conceptExploreStones: 'Explorar todas las piedras →',
  conceptMarylebonePrompt: '¿Aún no tienes la abaya Marylebone?',
  conceptMaryleboneLink: 'Ver la abaya Marylebone →',
  howItWorksLabel: 'CÓMO FUNCIONA',
  howItWorksHeading: 'Tres pasos.',
  steps: [
    {
      numeral: 'I',
      title: 'ELIGE LA PIEDRA',
      body: 'Elige un strand de piedra natural por color, superficie y carácter.',
    },
    {
      numeral: 'II',
      title: 'LLÉVALO A TU MODO',
      body: 'La abaya Marylebone está diseñada para recibirlo. No hace falta nada más.',
    },
    {
      numeral: 'III',
      title: 'CÁMBIALO CUANDO QUIERAS',
      body: 'Alterna piedras según la ocasión. La abaya permanece.',
    },
  ],
  collectionLabel: 'LA COLECCIÓN',
  collectionHeading: 'Elige por color y carácter.',
  collectionIntro: 'Cada piedra es natural. Ninguna es idéntica.',
  shopAllStrandsCta: buildShopAllStrandsCta('es', 'title'),
  discoverAllStrandsCta: 'Descubrir todos los Strands',
  stoneVisualNotes: NOTES_ES,
  stoneVisualFallback: 'Piedra natural elegida por color, superficie y textura visual.',
  limitedEdition: 'Edición limitada',
  limitedEditionShort: 'Limitada',
  viewStrandCta: 'Elegir esta piedra',
  viewStrandGridCta: 'Ver el strand',
  carouselPrevAria: 'Piedras anteriores',
  carouselNextAria: 'Piedras siguientes',
  carouselSwipeHint: 'Desliza las piedras de arriba o arrastra esta barra',
  carouselPositionAria: 'Posición del carrusel de piedras',
  shopCollectionLabel: 'COMPRAR LA COLECCIÓN',
  shopCollectionHeading: 'Todos los strands de piedra natural',
  shopCollectionIntro:
    'Diez strands intercambiables para la abaya Marylebone — elige por color, superficie y carácter. Cada strand tiene su propia página de producto.',
  alsoInPrefix: 'También en',
  alsoInLink: 'Accesorios — Abaya Strands',
  anchorLabel: 'LA PIEZA ANCLA',
  anchorHeading: 'La abaya Marylebone.',
  anchorBody: (price) =>
    `El strand cae desde un puño especialmente construido — un detalle exclusivo de la Marylebone. Hecho bajo encargo en Abu Dhabi, desde ${price}.`,
  anchorCta: 'VER LA MARYLEBONE',
  conceptStoneSwatches: [
    { name: 'Ónix', color: COLORS[0] },
    { name: 'Ojo de tigre', color: COLORS[1] },
    { name: 'Piedra de sol', color: COLORS[2] },
    { name: 'Jade fucsia', color: COLORS[3] },
    { name: 'Aventurina azul', color: COLORS[4] },
    { name: 'Cuarzo rosa', color: COLORS[5] },
    { name: 'Malaquita', color: COLORS[6] },
    { name: 'Lapislázuli', color: COLORS[7] },
    { name: 'Amatista', color: COLORS[8] },
    { name: 'Jade', color: COLORS[9] },
  ],
}

const NOTES_RU: Record<string, string> = {
  'Onyx Strands':
    'Глубокий чёрный с высокоглянцевой поверхностью. Классический камень, добываемый в Бразилии и Индии. Именно он сопровождает каждую абайю Marylebone при получении.',
  'Tiger Eye Strands':
    'Тёплый золотисто-коричневый с естественным переливающимся блеском. Из Южной Африки. Ни один экземпляр не ловит свет одинаково.',
  'Al Ain Oasis Sunstone Strands':
    'Тёплый персиково-оранжевый солнечный камень с гладкой, светоносной поверхностью. Живой природный тон с мягкой теплотой на свету.',
  'Fuchsia Jade Strands':
    'Натуральный нефрит насыщенного глубокого розового. Необычный цвет — редко встречается в такой интенсивности.',
  'Blue Aventurine Strands':
    'Холодный пыльно-голубой с тонким внутренним мерцанием. Из Индии и Чили. Сдержанный издалека, детальный вблизи.',
  'Al Ain Oasis Rose Quartz Strands':
    'Бледно-розовый, полупрозрачный. Свет проходит сквозь него, а не отражается. Из Бразилии и Мадагаскара.',
  'Al Ain Oasis Malachite Strands':
    'Глубокий зелёный с природными полосами — ни один узор не повторяется. Из Центральной Африки.',
  'Al Ain Oasis Lapis Lazuli Strands':
    'Глубокий синий с природными золотыми вкраплениями, из Афганистана. Используют в ювелирном искусстве тысячелетиями.',
  'Amethyst Hearts Strands':
    'Фиолетовый кварц, выточенный в форме сердец и отполированный гранями. Из Бразилии и Замбии.',
  'Jade Hearts Strands':
    'Прохладный зелёный нефрит, вручную оформленный в сердца. Каждый немного иной. Каждый создан однажды.',
  'Natural Jade Strands':
    'Настоящий некрашеный натуральный нефрит мягкого приглушённого зелёного. Круглые полированные бусины — тихая минеральная ясность.',
}

export const STRANDS_RU: StrandsPageCopy = {
  heroEyebrow: 'ABAYA STRAND · BINT SAEED',
  heroHeadline: 'Ваша абайя никогда не была завершена. До сих пор.',
  heroSubline1:
    'Первый дом абайи со сменными Strands из натурального камня. На манжете. Меняются по желанию.',
  heroSubline2: 'Натуральный камень. Ручная работа в Abu Dhabi. Для абайи Marylebone.',
  ctaShopStrands: buildShopStrandsCta('ru', 'upper'),
  ctaSeeMarylebone: 'СМОТРЕТЬ MARYLEBONE',
  marquee: 'НАТУРАЛЬНЫЙ КАМЕНЬ · BINT SAEED · ABAYA STRANDS · ABU DHABI · НА ЗАКАЗ ·',
  conceptLabel: 'КОНЦЕПЦИЯ',
  conceptHeadingLine1: 'Одна абайя.',
  conceptHeadingLine2: 'Много акцентов.',
  conceptP1:
    'Abaya Strand от Bint Saeed — деталь из натурального камня на манжете абайи Marylebone. Ручная работа в Abu Dhabi. Создана, чтобы меняться.',
  conceptP2:
    'Каждая абайя Marylebone приходит со стандартным Strand из оникса. Выберите другой камень для другого дня. Сочетайте с сумкой, образом, случаем. Абайя остаётся. Вы решаете, что она говорит.',
  conceptStoneList:
    'Оникс · Тигровый глаз · Солнечный камень · Фуксия-нефрит · Синий авантюрин · Розовый кварц · Малахит · Лазурит · Аметист · Нефрит',
  conceptExploreStones: 'Смотреть все камни →',
  conceptMarylebonePrompt: 'Ещё нет абайи Marylebone?',
  conceptMaryleboneLink: 'Смотреть абайю Marylebone →',
  howItWorksLabel: 'КАК ЭТО РАБОТАЕТ',
  howItWorksHeading: 'Три шага.',
  steps: [
    {
      numeral: 'I',
      title: 'ВЫБЕРИТЕ КАМЕНЬ',
      body: 'Выберите Strand из натурального камня по цвету, поверхности и характеру.',
    },
    {
      numeral: 'II',
      title: 'НОСИТЕ ПО-СВОЕМУ',
      body: 'Абайя Marylebone создана, чтобы его держать. Больше ничего не нужно.',
    },
    {
      numeral: 'III',
      title: 'МЕНЯЙТЕ, КОГДА ХОТИТЕ',
      body: 'Чередуйте камни по случаю. Абайя остаётся.',
    },
  ],
  collectionLabel: 'КОЛЛЕКЦИЯ',
  collectionHeading: 'Выбирайте по цвету и характеру.',
  collectionIntro: 'Каждый камень натуральный. Ни один не повторяется.',
  shopAllStrandsCta: buildShopAllStrandsCta('ru', 'title'),
  discoverAllStrandsCta: 'Открыть все Strands',
  stoneVisualNotes: NOTES_RU,
  stoneVisualFallback: 'Натуральный камень, выбранный по цвету, поверхности и визуальной фактуре.',
  limitedEdition: 'Ограниченный выпуск',
  limitedEditionShort: 'Limited',
  viewStrandCta: 'Выбрать этот камень',
  viewStrandGridCta: 'Смотреть Strand',
  carouselPrevAria: 'Предыдущие камни',
  carouselNextAria: 'Следующие камни',
  carouselSwipeHint: 'Проведите по камням выше или потяните эту полосу',
  carouselPositionAria: 'Положение карусели камней',
  shopCollectionLabel: 'КУПИТЬ КОЛЛЕКЦИЮ',
  shopCollectionHeading: 'Все Strands из натурального камня',
  shopCollectionIntro:
    'Десять сменных каменных Strands для абайи Marylebone — выбирайте по цвету, поверхности и характеру. У каждого Strand своя страница товара.',
  alsoInPrefix: 'Также в',
  alsoInLink: 'Аксессуары — Abaya Strands',
  anchorLabel: 'ЯКОРНАЯ ВЕЩЬ',
  anchorHeading: 'Абайя Marylebone.',
  anchorBody: (price) =>
    `Strand спускается со специально сконструированной манжеты — деталь, свойственная только Marylebone. На заказ в Abu Dhabi, от ${price}.`,
  anchorCta: 'СМОТРЕТЬ MARYLEBONE',
  conceptStoneSwatches: [
    { name: 'Оникс', color: COLORS[0] },
    { name: 'Тигровый глаз', color: COLORS[1] },
    { name: 'Солнечный камень', color: COLORS[2] },
    { name: 'Фуксия-нефрит', color: COLORS[3] },
    { name: 'Синий авантюрин', color: COLORS[4] },
    { name: 'Розовый кварц', color: COLORS[5] },
    { name: 'Малахит', color: COLORS[6] },
    { name: 'Лазурит', color: COLORS[7] },
    { name: 'Аметист', color: COLORS[8] },
    { name: 'Нефрит', color: COLORS[9] },
  ],
}

const NOTES_ZH: Record<string, string> = {
  'Onyx Strands':
    '深黑，高光表面。经典石材，见于巴西与印度。每件 Marylebone Abaya 送达时佩戴的正是此石。',
  'Tiger Eye Strands':
    '暖金棕，随光线流转的天然光泽。产自南非。无一枚捕捉光线的方式相同。',
  'Al Ain Oasis Sunstone Strands':
    '暖桃橙太阳石，表面光滑而含光。鲜明的天然色调，光下带柔和暖意。',
  'Fuchsia Jade Strands':
    '天然玉石，饱和深玫红。少见之色——如此浓烈并不常见。',
  'Blue Aventurine Strands':
    '冷调灰蓝，内含细微闪光。产自印度与智利。远观克制，近观有层次。',
  'Al Ain Oasis Rose Quartz Strands':
    '淡粉，半透明。光线穿过其中，而非反射其上。见于巴西与马达加斯加。',
  'Al Ain Oasis Malachite Strands':
    '深绿，带天然条纹——无一纹样重复。产自中非。',
  'Al Ain Oasis Lapis Lazuli Strands':
    '深蓝，点缀天然金色，产自阿富汗。数千年来用于珠宝与艺术。',
  'Amethyst Hearts Strands':
    '紫色石英，雕成心形并抛光至多面。见于巴西与赞比亚。',
  'Jade Hearts Strands':
    '冷调绿玉，手工塑成心形。每一枚略有不同。每一枚只此一次。',
  'Natural Jade Strands':
    '真正未染色的天然玉石，柔和哑光绿。圆润抛光珠粒，带矿物般的静气。',
}

export const STRANDS_ZH: StrandsPageCopy = {
  heroEyebrow: 'ABAYA STRAND · BINT SAEED',
  heroHeadline: '您的长袍从未真正完成。直到现在。',
  heroSubline1: '首个提供可更换天然石 Strands 的长袍品牌。佩于袖口。随心更换。',
  heroSubline2: '天然石。阿布扎比手工制作。专为 Marylebone Abaya。',
  ctaShopStrands: buildShopStrandsCta('zh', 'upper'),
  ctaSeeMarylebone: '查看 MARYLEBONE',
  marquee: '天然石 · BINT SAEED · ABAYA STRANDS · 阿布扎比 · 按订单制作 ·',
  conceptLabel: '理念',
  conceptHeadingLine1: '一件长袍。',
  conceptHeadingLine2: '多重点缀。',
  conceptP1:
    'Bint Saeed 的 abaya Strand，是佩于 Marylebone Abaya 袖口的天然石细节。阿布扎比手工制作。为更换而生。',
  conceptP2:
    '每件 Marylebone Abaya 送达时配有标准缟玛瑙 Strand。另选一石，对应另一日。与手袋、造型、场合相配。长袍不变。由您决定它所言。',
  conceptStoneList:
    '缟玛瑙 · 虎眼石 · 太阳石 · 紫红玉 · 蓝东陵石 · 粉水晶 · 孔雀石 · 青金石 · 紫水晶 · 玉',
  conceptExploreStones: '探索全部石材 →',
  conceptMarylebonePrompt: '尚未拥有 Marylebone Abaya？',
  conceptMaryleboneLink: '查看 Marylebone Abaya →',
  howItWorksLabel: '如何佩戴',
  howItWorksHeading: '三步。',
  steps: [
    {
      numeral: 'I',
      title: '选择石材',
      body: '按色彩、表面与气质选择天然石 Strand。',
    },
    {
      numeral: 'II',
      title: '按您的方式佩戴',
      body: 'Marylebone Abaya 专为承接它而设计。无需更多。',
    },
    {
      numeral: 'III',
      title: '随心更换',
      body: '按场合轮换石材。长袍不变。',
    },
  ],
  collectionLabel: '系列',
  collectionHeading: '按色彩与气质选择。',
  collectionIntro: '每一枚石材皆为天然。无一相同。',
  shopAllStrandsCta: buildShopAllStrandsCta('zh', 'title'),
  discoverAllStrandsCta: '探索全部 Strands',
  stoneVisualNotes: NOTES_ZH,
  stoneVisualFallback: '按色彩、表面与视觉质感精选的天然石。',
  limitedEdition: '限量版',
  limitedEditionShort: '限量',
  viewStrandCta: '选择此石',
  viewStrandGridCta: '查看 Strand',
  carouselPrevAria: '上一组石材',
  carouselNextAria: '下一组石材',
  carouselSwipeHint: '滑动上方石材或拖动此条',
  carouselPositionAria: '石材轮播位置',
  shopCollectionLabel: '选购系列',
  shopCollectionHeading: '全部天然石 Strands',
  shopCollectionIntro:
    '十款可更换石材 Strand，专为 Marylebone Abaya — 按色彩、表面与气质选择。每款 Strand 均有独立产品页。',
  alsoInPrefix: '亦见于',
  alsoInLink: '配饰 — Abaya Strands',
  anchorLabel: '核心单品',
  anchorHeading: 'Marylebone Abaya。',
  anchorBody: (price) =>
    `Strand 自特制袖口垂落 — 仅见于 Marylebone 的细节。阿布扎比按订单制作，起价 ${price}。`,
  anchorCta: '查看 MARYLEBONE',
  conceptStoneSwatches: [
    { name: '缟玛瑙', color: COLORS[0] },
    { name: '虎眼石', color: COLORS[1] },
    { name: '太阳石', color: COLORS[2] },
    { name: '紫红玉', color: COLORS[3] },
    { name: '蓝东陵石', color: COLORS[4] },
    { name: '粉水晶', color: COLORS[5] },
    { name: '孔雀石', color: COLORS[6] },
    { name: '青金石', color: COLORS[7] },
    { name: '紫水晶', color: COLORS[8] },
    { name: '玉', color: COLORS[9] },
  ],
}

const NOTES_ID: Record<string, string> = {
  'Onyx Strands':
    'Hitam pekat dengan permukaan mengkilap tinggi. Batu klasik, ditemukan di Brasil dan India. Batu yang dikenakan setiap Marylebone Abaya saat tiba.',
  'Tiger Eye Strands':
    'Cokelat keemasan hangat dengan kilau alami yang bergerak bersama cahaya. Dari Afrika Selatan. Tidak ada dua potongan yang menangkap cahaya sama.',
  'Al Ain Oasis Sunstone Strands':
    'Batu matahari peach-oranye hangat dengan hasil akhir halus dan bercahaya. Nada alami yang hidup, lembut dalam cahaya.',
  'Fuchsia Jade Strands':
    'Giok alami dalam merah muda saturasi dalam. Warna yang jarang — tidak umum pada intensitas ini.',
  'Blue Aventurine Strands':
    'Biru dingin berdebu dengan kilau internal halus. Dari India dan Chili. Tenang dari kejauhan, terperinci dari dekat.',
  'Al Ain Oasis Rose Quartz Strands':
    'Merah muda pucat, semi-tembus cahaya. Cahaya melewatinya, bukan memantul darinya. Ditemukan di Brasil dan Madagaskar.',
  'Al Ain Oasis Malachite Strands':
    'Hijau pekat dengan pita alami — tidak ada dua pola yang sama. Dari Afrika Tengah.',
  'Al Ain Oasis Lapis Lazuli Strands':
    'Biru pekat berbintik emas alami, dari Afghanistan. Digunakan dalam perhiasan dan seni selama ribuan tahun.',
  'Amethyst Hearts Strands':
    'Kuarsa ungu dibentuk menjadi hati dan dipoles berfaset. Ditemukan di Brasil dan Zambia.',
  'Jade Hearts Strands':
    'Giok hijau dingin, dibentuk tangan menjadi hati. Masing-masing sedikit berbeda. Masing-masing dibuat sekali.',
  'Natural Jade Strands':
    'Giok alami asli tanpa pewarna, hijau lembut. Manik bulat dipoles dengan ketenangan mineral.',
}

export const STRANDS_ID: StrandsPageCopy = {
  heroEyebrow: 'ABAYA STRAND · BINT SAEED',
  heroHeadline: 'Abaya Anda belum pernah selesai. Sampai sekarang.',
  heroSubline1:
    'Rumah abaya pertama dengan Strands batu alam yang dapat diganti. Dipakai di manset. Diganti sesuai pilihan.',
  heroSubline2: 'Batu alam. Buatan tangan di Abu Dhabi. Untuk Marylebone Abaya.',
  ctaShopStrands: buildShopStrandsCta('id', 'upper'),
  ctaSeeMarylebone: 'LIHAT MARYLEBONE',
  marquee: 'BATU ALAM · BINT SAEED · ABAYA STRANDS · ABU DHABI · DIBUAT SESUAI PESANAN ·',
  conceptLabel: 'KONSEP',
  conceptHeadingLine1: 'Satu abaya.',
  conceptHeadingLine2: 'Banyak aksen.',
  conceptP1:
    'Abaya Strand Bint Saeed adalah detail batu alam yang dikenakan di manset Marylebone Abaya. Buatan tangan di Abu Dhabi. Dibuat untuk diganti.',
  conceptP2:
    'Setiap Marylebone Abaya tiba dengan Strand oniks standar. Pilih batu lain untuk hari lain. Sesuaikan dengan tas, penampilan, atau acara Anda. Abaya tetap sama. Anda yang menentukan maknanya.',
  conceptStoneList:
    'Oniks · Mata harimau · Batu matahari · Giok fuksia · Aventurin biru · Kuarsa merah muda · Malakit · Lapis lazuli · Ametis · Giok',
  conceptExploreStones: 'Jelajahi semua batu →',
  conceptMarylebonePrompt: 'Belum memiliki Marylebone Abaya?',
  conceptMaryleboneLink: 'Lihat Marylebone Abaya →',
  howItWorksLabel: 'CARA KERJANYA',
  howItWorksHeading: 'Tiga langkah.',
  steps: [
    {
      numeral: 'I',
      title: 'PILIH BATU',
      body: 'Pilih Strand batu alam menurut warna, permukaan, dan karakter.',
    },
    {
      numeral: 'II',
      title: 'KENAKAN SESUAI GAYA ANDA',
      body: 'Marylebone Abaya dirancang untuk menampungnya. Tidak perlu lebih.',
    },
    {
      numeral: 'III',
      title: 'GANTI KAPAN ANDA MAU',
      body: 'Gilir batu antar acara. Abaya tetap sama.',
    },
  ],
  collectionLabel: 'KOLEKSI',
  collectionHeading: 'Pilih menurut warna dan karakter.',
  collectionIntro: 'Setiap batu alami. Tidak ada dua yang identik.',
  shopAllStrandsCta: buildShopAllStrandsCta('id', 'title'),
  discoverAllStrandsCta: 'Temukan semua Strands',
  stoneVisualNotes: NOTES_ID,
  stoneVisualFallback: 'Batu alam dipilih untuk warna, permukaan, dan tekstur visual.',
  limitedEdition: 'Edisi terbatas',
  limitedEditionShort: 'Terbatas',
  viewStrandCta: 'Pilih batu ini',
  viewStrandGridCta: 'Lihat Strand',
  carouselPrevAria: 'Batu sebelumnya',
  carouselNextAria: 'Batu berikutnya',
  carouselSwipeHint: 'Geser batu di atas atau tarik bilah ini',
  carouselPositionAria: 'Posisi karusel batu',
  shopCollectionLabel: 'BELANJA KOLEKSI',
  shopCollectionHeading: 'Semua Strand batu alam',
  shopCollectionIntro:
    'Sepuluh Strand batu yang dapat diganti untuk Marylebone Abaya — pilih menurut warna, permukaan, dan karakter. Setiap Strand memiliki halaman produk sendiri.',
  alsoInPrefix: 'Juga di',
  alsoInLink: 'Aksesori — Abaya Strands',
  anchorLabel: 'POTONGAN UTAMA',
  anchorHeading: 'Marylebone Abaya.',
  anchorBody: (price) =>
    `Strand menjuntai dari manset yang dibangun khusus — detail yang hanya ada pada Marylebone. Dibuat sesuai pesanan di Abu Dhabi, mulai ${price}.`,
  anchorCta: 'LIHAT MARYLEBONE',
  conceptStoneSwatches: [
    { name: 'Oniks', color: COLORS[0] },
    { name: 'Mata harimau', color: COLORS[1] },
    { name: 'Batu matahari', color: COLORS[2] },
    { name: 'Giok fuksia', color: COLORS[3] },
    { name: 'Aventurin biru', color: COLORS[4] },
    { name: 'Kuarsa merah muda', color: COLORS[5] },
    { name: 'Malakit', color: COLORS[6] },
    { name: 'Lapis lazuli', color: COLORS[7] },
    { name: 'Ametis', color: COLORS[8] },
    { name: 'Giok', color: COLORS[9] },
  ],
}

const NOTES_MS: Record<string, string> = {
  'Onyx Strands':
    'Hitam pekat dengan permukaan berkilat tinggi. Batu klasik, ditemui di Brazil dan India. Batu yang dipakai setiap Marylebone Abaya apabila tiba.',
  'Tiger Eye Strands':
    'Coklat keemasan hangat dengan kilauan semula jadi yang bergerak bersama cahaya. Dari Afrika Selatan. Tiada dua kepingan menangkap cahaya sama.',
  'Al Ain Oasis Sunstone Strands':
    'Batu matahari peach-oren hangat dengan kemasan licin dan bercahaya. Nada semula jadi yang hidup, lembut dalam cahaya.',
  'Fuchsia Jade Strands':
    'Giok semula jadi dalam merah jambu saturasi dalam. Warna luar biasa — jarang ditemui pada keamatan ini.',
  'Blue Aventurine Strands':
    'Biru sejuk berdebu dengan kilauan dalaman halus. Dari India dan Chile. Tenang dari jauh, terperinci dari dekat.',
  'Al Ain Oasis Rose Quartz Strands':
    'Merah jambu pucat, separa lut cahaya. Cahaya melaluinya, bukan memantul darinya. Ditemui di Brazil dan Madagascar.',
  'Al Ain Oasis Malachite Strands':
    'Hijau pekat dengan jalur semula jadi — tiada dua corak yang sama. Dari Afrika Tengah.',
  'Al Ain Oasis Lapis Lazuli Strands':
    'Biru pekat bertitik emas semula jadi, dari Afghanistan. Digunakan dalam barang kemas dan seni selama beribu tahun.',
  'Amethyst Hearts Strands':
    'Kuarsa ungu dibentuk menjadi hati dan digilap berfaset. Ditemui di Brazil dan Zambia.',
  'Jade Hearts Strands':
    'Giok hijau sejuk, dibentuk tangan menjadi hati. Setiap satu sedikit berbeza. Setiap satu dibuat sekali.',
  'Natural Jade Strands':
    'Giok semula jadi tulen tanpa pewarna, hijau lembut. Manik bulat digilap dengan ketenangan mineral.',
}

export const STRANDS_MS: StrandsPageCopy = {
  heroEyebrow: 'ABAYA STRAND · BINT SAEED',
  heroHeadline: 'Abaya anda tidak pernah selesai. Sehingga kini.',
  heroSubline1:
    'Rumah abaya pertama dengan Strands batu semula jadi yang boleh ditukar. Dipakai pada manset. Ditukar mengikut pilihan.',
  heroSubline2: 'Batu semula jadi. Buatan tangan di Abu Dhabi. Untuk Marylebone Abaya.',
  ctaShopStrands: buildShopStrandsCta('ms', 'upper'),
  ctaSeeMarylebone: 'LIHAT MARYLEBONE',
  marquee: 'BATU SEMULA JADI · BINT SAEED · ABAYA STRANDS · ABU DHABI · DIBUAT MENGIKUT PESANAN ·',
  conceptLabel: 'KONSEP',
  conceptHeadingLine1: 'Satu abaya.',
  conceptHeadingLine2: 'Banyak aksen.',
  conceptP1:
    'Abaya Strand Bint Saeed ialah perincian batu semula jadi yang dipakai pada manset Marylebone Abaya. Buatan tangan di Abu Dhabi. Dibuat untuk ditukar.',
  conceptP2:
    'Setiap Marylebone Abaya tiba dengan Strand oniks standard. Pilih batu lain untuk hari lain. Padankan dengan beg, penampilan atau majlis anda. Abaya kekal sama. Anda yang menentukan maksudnya.',
  conceptStoneList:
    'Oniks · Mata harimau · Batu matahari · Giok fuksia · Aventurin biru · Kuarsa merah jambu · Malakit · Lapis lazuli · Ametis · Giok',
  conceptExploreStones: 'Terokai semua batu →',
  conceptMarylebonePrompt: 'Belum mempunyai Marylebone Abaya?',
  conceptMaryleboneLink: 'Lihat Marylebone Abaya →',
  howItWorksLabel: 'CARA IA BERFUNGSI',
  howItWorksHeading: 'Tiga langkah.',
  steps: [
    {
      numeral: 'I',
      title: 'PILIH BATU',
      body: 'Pilih Strand batu semula jadi mengikut warna, permukaan dan watak.',
    },
    {
      numeral: 'II',
      title: 'PAKAI MENGIKUT GAYA ANDA',
      body: 'Marylebone Abaya direka untuk menampungnya. Tiada lagi yang diperlukan.',
    },
    {
      numeral: 'III',
      title: 'TUKAR BILA ANDA MAHU',
      body: 'Tukar batu antara majlis. Abaya kekal sama.',
    },
  ],
  collectionLabel: 'KOLEKSI',
  collectionHeading: 'Pilih mengikut warna dan watak.',
  collectionIntro: 'Setiap batu semula jadi. Tiada dua yang sama.',
  shopAllStrandsCta: buildShopAllStrandsCta('ms', 'title'),
  discoverAllStrandsCta: 'Temui semua Strands',
  stoneVisualNotes: NOTES_MS,
  stoneVisualFallback: 'Batu semula jadi dipilih untuk warna, permukaan dan tekstur visual.',
  limitedEdition: 'Edisi terhad',
  limitedEditionShort: 'Terhad',
  viewStrandCta: 'Pilih batu ini',
  viewStrandGridCta: 'Lihat Strand',
  carouselPrevAria: 'Batu sebelumnya',
  carouselNextAria: 'Batu seterusnya',
  carouselSwipeHint: 'Leret batu di atas atau seret bar ini',
  carouselPositionAria: 'Kedudukan karusel batu',
  shopCollectionLabel: 'BELI KOLEKSI',
  shopCollectionHeading: 'Semua Strand batu semula jadi',
  shopCollectionIntro:
    'Sepuluh Strand batu yang boleh ditukar untuk Marylebone Abaya — pilih mengikut warna, permukaan dan watak. Setiap Strand mempunyai halaman produk sendiri.',
  alsoInPrefix: 'Juga dalam',
  alsoInLink: 'Aksesori — Abaya Strands',
  anchorLabel: 'POTONGAN UTAMA',
  anchorHeading: 'Marylebone Abaya.',
  anchorBody: (price) =>
    `Strand tergantung dari manset yang dibina khas — perincian yang hanya ada pada Marylebone. Dibuat mengikut pesanan di Abu Dhabi, dari ${price}.`,
  anchorCta: 'LIHAT MARYLEBONE',
  conceptStoneSwatches: [
    { name: 'Oniks', color: COLORS[0] },
    { name: 'Mata harimau', color: COLORS[1] },
    { name: 'Batu matahari', color: COLORS[2] },
    { name: 'Giok fuksia', color: COLORS[3] },
    { name: 'Aventurin biru', color: COLORS[4] },
    { name: 'Kuarsa merah jambu', color: COLORS[5] },
    { name: 'Malakit', color: COLORS[6] },
    { name: 'Lapis lazuli', color: COLORS[7] },
    { name: 'Ametis', color: COLORS[8] },
    { name: 'Giok', color: COLORS[9] },
  ],
}
