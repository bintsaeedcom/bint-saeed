import type { AppLocale } from '@/lib/i18n/routing'

export type CartEmptyDiscoverCopy = {
  eyebrow: string
  title: string
  description: string
  discoverAccessories: string
  accessoriesHint: string
  exploreCollection: string
  collectionHint: string
  discoverStrands: string
  strandsHint: string
  personalise: string
  personaliseHint: string
}

const COPY: Record<AppLocale, CartEmptyDiscoverCopy> = {
  en: {
    eyebrow: 'Your selection awaits',
    title: 'Your Bag is Empty',
    description:
      'Your next Bint Saeed piece may already be waiting.',
    discoverAccessories: 'Discover Accessories',
    accessoriesHint: 'Necklaces, earrings & finishing pieces',
    exploreCollection: 'Explore the Collection',
    collectionHint: 'Abayas, kaftans & eveningwear',
    discoverStrands: 'Discover Strands',
    strandsHint: 'Interchangeable natural stone for the cuff',
    personalise: 'Make It Yours',
    personaliseHint: 'Private labels & personalisation',
  },
  ar: {
    eyebrow: 'اختيارك بانتظارك',
    title: 'السلة فارغة',
    description:
      'قطعتك التالية من Bint Saeed قد تكون بانتظارك الآن.',
    discoverAccessories: 'اكتشفي الإكسسوارات',
    accessoriesHint: 'قلائد وأقراط وقطع تُكمل الإطلالة',
    exploreCollection: 'استكشفي المجموعة',
    collectionHint: 'عبايات وكافتانات وأزياء سهرة',
    discoverStrands: 'اكتشفي Strands',
    strandsHint: 'أحجار طبيعية قابلة للتبديل للكم',
    personalise: 'اجعليها لك',
    personaliseHint: 'ملصقات خاصة وتخصيص',
  },
  fr: {
    eyebrow: 'Votre selection vous attend',
    title: 'Votre panier est vide',
    description:
      'Votre prochaine piece Bint Saeed vous attend peut-etre deja.',
    discoverAccessories: 'Decouvrir les accessoires',
    accessoriesHint: 'Colliers, boucles d’oreilles et pieces de finition',
    exploreCollection: 'Explorer la collection',
    collectionHint: 'Abayas, kaftans et tenues du soir',
    discoverStrands: 'Decouvrir Strands',
    strandsHint: 'Pierres naturelles interchangeables au poignet',
    personalise: 'Faites-la vôtre',
    personaliseHint: 'Etiquettes privees et personnalisation',
  },
  de: {
    eyebrow: 'Ihre Auswahl wartet',
    title: 'Ihre Tasche ist leer',
    description:
      'Beginnen Sie mit einem Kapitel — Schmuck fur den letzten Schliff, die volle Kollektion, Strands am Manschettenabschluss oder ein Stuck mit Ihrem Namen.',
    discoverAccessories: 'Accessoires entdecken',
    accessoriesHint: 'Halsketten, Ohrringe und finishing pieces',
    exploreCollection: 'Kollektion erkunden',
    collectionHint: 'Abayas, Kaftane und Abendmode',
    discoverStrands: 'Strands entdecken',
    strandsHint: 'Austauschbare Natursteine fur den Manschettenabschluss',
    personalise: 'Machen Sie es zu Ihrem',
    personaliseHint: 'Private Labels und Personalisierung',
  },
  it: {
    eyebrow: 'La tua selezione ti aspetta',
    title: 'La tua borsa e vuota',
    description:
      'Inizia da un capitolo — gioielli per completare il look, la collezione completa, Strands per il polsino, o un pezzo con il tuo nome.',
    discoverAccessories: 'Scopri gli accessori',
    accessoriesHint: 'Collane, orecchini e pezzi di finitura',
    exploreCollection: 'Esplora la collezione',
    collectionHint: 'Abaya, kaftan e abiti da sera',
    discoverStrands: 'Scopri Strands',
    strandsHint: 'Pietre naturali intercambiabili per il polsino',
    personalise: 'Rendila tua',
    personaliseHint: 'Etichette private e personalizzazione',
  },
  es: {
    eyebrow: 'Tu seleccion te espera',
    title: 'Tu bolsa esta vacia',
    description:
      'Empieza por un capitulo — joyeria para completar el look, la coleccion completa, Strands para el puno, o una pieza con tu nombre.',
    discoverAccessories: 'Descubrir accesorios',
    accessoriesHint: 'Collares, pendientes y piezas de acabado',
    exploreCollection: 'Explorar la coleccion',
    collectionHint: 'Abayas, caftanes y eveningwear',
    discoverStrands: 'Descubrir Strands',
    strandsHint: 'Piedras naturales intercambiables para el puno',
    personalise: 'Hazla tuya',
    personaliseHint: 'Etiquetas privadas y personalizacion',
  },
  ru: {
    eyebrow: 'Ваш выбор ждёт вас',
    title: 'Ваша корзина пуста',
    description:
      'Начните с главы — украшения для завершения образа, полная коллекция, Strands для манжеты или изделие с вашим именем.',
    discoverAccessories: 'Открыть аксессуары',
    accessoriesHint: 'Колье, серьги и завершающие детали',
    exploreCollection: 'Смотреть коллекцию',
    collectionHint: 'Абайи, кафтаны и вечерние образы',
    discoverStrands: 'Открыть Strands',
    strandsHint: 'Сменные натуральные камни для манжеты',
    personalise: 'Сделайте своей',
    personaliseHint: 'Личные бирки и персонализация',
  },
  zh: {
    eyebrow: '您的选择在此等候',
    title: '您的购物袋为空',
    description: '从一章开始——饰品完善造型、浏览完整系列、Strands 袖饰，或以您的名字定制。',
    discoverAccessories: '发现配饰',
    accessoriesHint: '项链、耳环与点睛单品',
    exploreCollection: '探索系列',
    collectionHint: 'Abaya、Kaftan 与晚装',
    discoverStrands: '发现 Strands',
    strandsHint: '可替换天然石袖饰',
    personalise: '定制专属',
    personaliseHint: '私人标签与定制',
  },
  nl: {
    eyebrow: 'Jouw selectie wacht',
    title: 'Je tas is leeg',
    description:
      'Begin met een hoofdstuk — sieraden om de look af te maken, de volledige collectie, Strands voor de manchet, of een stuk met jouw naam.',
    discoverAccessories: 'Ontdek accessoires',
    accessoriesHint: 'Kettingen, oorbellen en finishing pieces',
    exploreCollection: 'Ontdek de collectie',
    collectionHint: 'Abayas, kaftans en avondmode',
    discoverStrands: 'Ontdek Strands',
    strandsHint: 'Verwisselbare natuursteen voor de manchet',
    personalise: 'Maak het van jou',
    personaliseHint: 'Prive labels en personalisatie',
  },
  pt: {
    eyebrow: 'A sua escolha espera por si',
    title: 'O seu saco esta vazio',
    description:
      'Comece por um capitulo — joias para completar o look, a colecao completa, Strands para o punho, ou uma peca com o seu nome.',
    discoverAccessories: 'Descobrir acessorios',
    accessoriesHint: 'Colares, brincos e pecas de acabamento',
    exploreCollection: 'Explorar a colecao',
    collectionHint: 'Abayas, caftans e eveningwear',
    discoverStrands: 'Descobrir Strands',
    strandsHint: 'Pedras naturais intercambiaveis para o punho',
    personalise: 'Torne-a sua',
    personaliseHint: 'Etiquetas privadas e personalizacao',
  },
  id: {
    eyebrow: 'Pilihan Anda menunggu',
    title: 'Tas Anda kosong',
    description:
      'Mulai dari satu bab — perhiasan untuk melengkapi look, koleksi lengkap, Strands untuk manset, atau item dengan nama Anda.',
    discoverAccessories: 'Temukan aksesoris',
    accessoriesHint: 'Kalung, anting & finishing pieces',
    exploreCollection: 'Jelajahi koleksi',
    collectionHint: 'Abaya, kaftan & eveningwear',
    discoverStrands: 'Temukan Strands',
    strandsHint: 'Batu alam yang bisa diganti untuk manset',
    personalise: 'Jadikan milik Anda',
    personaliseHint: 'Label pribadi & personalisasi',
  },
  ms: {
    eyebrow: 'Pilihan anda menunggu',
    title: 'Beg anda kosong',
    description:
      'Mulakan dengan satu bab — barang kemas untuk melengkapkan rupa, koleksi penuh, Strands untuk manset, atau item dengan nama anda.',
    discoverAccessories: 'Teroka aksesori',
    accessoriesHint: 'Rantai leher, anting & finishing pieces',
    exploreCollection: 'Teroka koleksi',
    collectionHint: 'Abaya, kaftan & eveningwear',
    discoverStrands: 'Teroka Strands',
    strandsHint: 'Batu semula jadi boleh tukar untuk manset',
    personalise: 'Jadikan milik anda',
    personaliseHint: 'Label peribadi & personalisasi',
  },
}

export function getCartEmptyDiscoverCopy(locale: AppLocale | string): CartEmptyDiscoverCopy {
  return COPY[(locale as AppLocale) in COPY ? (locale as AppLocale) : 'en']
}
