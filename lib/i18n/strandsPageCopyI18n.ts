import type { Language } from '@/lib/i18n/translations'
import {
  PRODUCT_LINE_STRANDS,
  shopAllStrandsCta as buildShopAllStrandsCta,
  shopStrandsCta as buildShopStrandsCta,
} from '@/lib/i18n/strandsBrandLock'

export type StrandsStep = {
  numeral: string
  title: string
  body: string
}

export type ConceptStoneSwatch = {
  name: string
  color: string
}

export type StrandsPageCopy = {
  heroEyebrow: string
  heroHeadline: string
  heroSubline1: string
  heroSubline2: string
  ctaShopStrands: string
  ctaSeeMarylebone: string
  marquee: string
  conceptLabel: string
  conceptHeadingLine1: string
  conceptHeadingLine2: string
  conceptP1: string
  conceptP2: string
  conceptStoneList: string
  conceptExploreStones: string
  conceptMarylebonePrompt: string
  conceptMaryleboneLink: string
  howItWorksLabel: string
  howItWorksHeading: string
  steps: StrandsStep[]
  collectionLabel: string
  collectionHeading: string
  collectionIntro: string
  shopAllStrandsCta: string
  discoverAllStrandsCta: string
  stoneVisualNotes: Record<string, string>
  stoneVisualFallback: string
  limitedEdition: string
  limitedEditionShort: string
  viewStrandCta: string
  viewStrandGridCta: string
  carouselPrevAria: string
  carouselNextAria: string
  carouselSwipeHint: string
  carouselPositionAria: string
  shopCollectionLabel: string
  shopCollectionHeading: string
  shopCollectionIntro: string
  alsoInPrefix: string
  alsoInLink: string
  anchorLabel: string
  anchorHeading: string
  anchorBody: (price: string) => string
  anchorCta: string
  conceptStoneSwatches: ConceptStoneSwatch[]
}

const CONCEPT_SWATCH_COLORS = [
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

const STONE_VISUAL_NOTES_EN: Record<string, string> = {
  'Onyx Strands':
    'Deep black with a high-gloss surface. A classic stone, found across Brazil and India. The one every Marylebone Abaya arrives wearing.',
  'Tiger Eye Strands':
    'Warm golden-brown with a natural moving sheen that shifts with the light. Found in South Africa. No two pieces catch it the same way.',
  'Al Ain Oasis Sunstone Strands':
    'Warm peach-orange sunstone with a smooth, luminous finish. A vivid natural tone with gentle warmth in the light.',
  'Fuchsia Jade Strands':
    'Natural jade in a deep saturated rose. An unusual colour — not commonly found at this intensity.',
  'Blue Aventurine Strands':
    'A cool dusty blue with a subtle internal shimmer. Sourced from India and Chile. Understated from a distance, detailed up close.',
  'Al Ain Oasis Rose Quartz Strands':
    'Pale blush, semi-translucent. The light passes through it rather than reflecting off. Found across Brazil and Madagascar.',
  'Al Ain Oasis Malachite Strands':
    'Deep green with natural banded markings — no two pieces share the same pattern. Found in Central Africa.',
  'Al Ain Oasis Lapis Lazuli Strands':
    'A deep blue flecked with natural gold, sourced from Afghanistan. Used in jewellery and art for thousands of years.',
  'Amethyst Hearts Strands':
    'Violet quartz shaped into hearts and polished to a faceted surface. Found across Brazil and Zambia.',
  'Jade Hearts Strands':
    'Cool green jade, hand-shaped into heart forms. Each one slightly different. Each one made once.',
  'Natural Jade Strands':
    'Genuine undyed natural jade in soft muted green — not coloured jade. Round polished beads with a quiet, mineral calm.',
}

const STONE_VISUAL_NOTES_AR: Record<string, string> = {
  'Onyx Strands':
    'أسود عميق بسطح لامع عالٍ. حجر كلاسيكي يُوجد في البرازيل والهند. الحجر الذي تصل به كل عباءة Marylebone.',
  'Tiger Eye Strands':
    'بني ذهبي دافئ بلمعان طبيعي متحرك يتغيّر مع الضوء. يُوجد في جنوب أفريقيا. لا قطعتين تلتقطان الضوء بنفس الطريقة.',
  'Al Ain Oasis Sunstone Strands':
    'حجر الشمس بلون خوخي برتقالي دافئ بلمسة نهائية ناعمة ومضيئة. لون طبيعي حيّ بدفء لطيف في الضوء.',
  'Fuchsia Jade Strands':
    'يشم طبيعي بلون وردي عميق مشبع. لون غير معتاد — لا يُوجد عادةً بهذه الكثافة.',
  'Blue Aventurine Strands':
    'أزرق بارد مغبّر بلمعان داخلي خفيف. يُستورد من الهند وتشيلي. هادئ من بعيد، مفصّل عن قرب.',
  'Al Ain Oasis Rose Quartz Strands':
    'وردي باهت، شبه شفاف. يمرّ الضوء عبره بدلاً من أن ينعكس عنه. يُوجد في البرازيل ومدغشقر.',
  'Al Ain Oasis Malachite Strands':
    'أخضر عميق بعلامات طبيعية متموّجة — لا قطعتين تشتركان في النمط نفسه. يُوجد في وسط أفريقيا.',
  'Al Ain Oasis Lapis Lazuli Strands':
    'أزرق عميق مرصّع بلمسات ذهبية طبيعية، يُستورد من أفغانستان. يُستخدم في المجوهرات والفن منذ آلاف السنين.',
  'Amethyst Hearts Strands':
    'كوارتز بنفسجي مُشكَّل على شكل قلوب ومُصقول بسطح مُوجَّه. يُوجد في البرازيل وزامبيا.',
  'Jade Hearts Strands':
    'يشم أخضر بارد، مُشكَّل يدوياً على شكل قلوب. كل واحدة مختلفة قليلاً. كل واحدة تُصنع مرة واحدة.',
  'Natural Jade Strands':
    'يشم طبيعي أصلي غير ملوَّن بدرجات خضراء هادئة. خرز مستدير مصقول بهدوء معدني رقيق.',
}

const STRANDS_EN: StrandsPageCopy = {
  heroEyebrow: 'THE ABAYA STRAND · BINT SAEED',
  heroHeadline: 'Your abaya has never been finished. Until now.',
  heroSubline1:
    'The first abaya house to offer interchangeable natural stone strands. Worn on the cuff. Changed by choice.',
  heroSubline2: 'Natural stone. Handcrafted in Abu Dhabi. Made for the Marylebone Abaya.',
  ctaShopStrands: buildShopStrandsCta('en', 'upper'),
  ctaSeeMarylebone: 'SEE THE MARYLEBONE',
  marquee: 'NATURAL STONE · BINT SAEED · ABAYA STRANDS · ABU DHABI · CRAFTED TO ORDER ·',
  conceptLabel: 'THE CONCEPT',
  conceptHeadingLine1: 'One Abaya.',
  conceptHeadingLine2: 'Many Accents.',
  conceptP1:
    'The Bint Saeed abaya strand is a natural stone detail worn on the cuff of the Marylebone Abaya. Handcrafted in Abu Dhabi. Made to be changed.',
  conceptP2:
    'Every Marylebone Abaya arrives with a standard onyx strand. Choose a different stone for a different day. Match it to your bag, your outfit, your occasion. The abaya stays the same. You decide what it says.',
  conceptStoneList:
    'Onyx · Tiger Eye · Sunstone · Fuchsia Jade · Blue Aventurine · Rose Quartz · Malachite · Lapis Lazuli · Amethyst · Jade',
  conceptExploreStones: 'Explore all stones →',
  conceptMarylebonePrompt: "Don't have the Marylebone Abaya yet?",
  conceptMaryleboneLink: 'View the Marylebone Abaya →',
  howItWorksLabel: 'HOW IT WORKS',
  howItWorksHeading: 'Three steps.',
  steps: [
    {
      numeral: 'I',
      title: 'SELECT THE STONE',
      body: 'Choose a natural stone strand by colour, surface, and character.',
    },
    {
      numeral: 'II',
      title: 'WEAR IT YOUR WAY',
      body: 'The Marylebone Abaya is designed to hold it. Nothing more is needed.',
    },
    {
      numeral: 'III',
      title: 'CHANGE WHEN YOU CHOOSE',
      body: 'Rotate stones across occasions. The abaya stays the same.',
    },
  ],
  collectionLabel: 'THE COLLECTION',
  collectionHeading: 'Choose by colour and character.',
  collectionIntro: 'Each stone is natural. No two are identical.',
  shopAllStrandsCta: buildShopAllStrandsCta('en', 'title'),
  discoverAllStrandsCta: 'Discover all Strands',
  stoneVisualNotes: STONE_VISUAL_NOTES_EN,
  stoneVisualFallback: 'Natural stone selected for colour, surface, and visual texture.',
  limitedEdition: 'Limited Edition',
  limitedEditionShort: 'Limited',
  viewStrandCta: 'Choose this stone',
  viewStrandGridCta: 'View strand',
  carouselPrevAria: 'Previous stones',
  carouselNextAria: 'Next stones',
  carouselSwipeHint: 'Swipe the stones above or drag this bar',
  carouselPositionAria: 'Stone carousel position',
  shopCollectionLabel: 'SHOP THE COLLECTION',
  shopCollectionHeading: 'All natural stone strands',
  shopCollectionIntro:
    'Ten interchangeable stone strands for the Marylebone Abaya — select by colour, surface, and character. Each strand has its own product page with full details.',
  alsoInPrefix: 'Also in',
  alsoInLink: 'Accessories — Abaya Strands',
  anchorLabel: 'THE ANCHOR PIECE',
  anchorHeading: 'The Marylebone Abaya.',
  anchorBody: (price) =>
    `The strand drapes from a specially constructed cuff — a detail found only on the Marylebone. Made to order in Abu Dhabi, from ${price}.`,
  anchorCta: 'VIEW THE MARYLEBONE',
  conceptStoneSwatches: [
    { name: 'Onyx', color: CONCEPT_SWATCH_COLORS[0] },
    { name: 'Tiger Eye', color: CONCEPT_SWATCH_COLORS[1] },
    { name: 'Sunstone', color: CONCEPT_SWATCH_COLORS[2] },
    { name: 'Fuchsia Jade', color: CONCEPT_SWATCH_COLORS[3] },
    { name: 'Blue Aventurine', color: CONCEPT_SWATCH_COLORS[4] },
    { name: 'Rose Quartz', color: CONCEPT_SWATCH_COLORS[5] },
    { name: 'Malachite', color: CONCEPT_SWATCH_COLORS[6] },
    { name: 'Lapis Lazuli', color: CONCEPT_SWATCH_COLORS[7] },
    { name: 'Amethyst', color: CONCEPT_SWATCH_COLORS[8] },
    { name: 'Jade', color: CONCEPT_SWATCH_COLORS[9] },
  ],
}

const STRANDS_AR: StrandsPageCopy = {
  heroEyebrow: 'خيط العباءة · BINT SAEED',
  heroHeadline: 'عباءتك لم تكن مكتملة قط. حتى الآن.',
  heroSubline1:
    'أول دار عباءات تقدّم خيوط أحجار طبيعية قابلة للتبديل. تُرتدى على الكم. تُغيَّر باختيارك.',
  heroSubline2: 'حجر طبيعي. صُنع يدوياً في أبوظبي. صُمم لعباءة Marylebone.',
  ctaShopStrands: buildShopStrandsCta('ar', 'title'),
  ctaSeeMarylebone: 'شاهدي Marylebone',
  marquee: `حجر طبيعي · BINT SAEED · ${PRODUCT_LINE_STRANDS.toUpperCase()} · أبوظبي · يُصنع حسب الطلب ·`,
  conceptLabel: 'المفهوم',
  conceptHeadingLine1: 'عباءة واحدة.',
  conceptHeadingLine2: 'لمسات متعددة.',
  conceptP1:
    'خيط عباءة Bint Saeed تفصيل من الحجر الطبيعي يُرتدى على كم عباءة Marylebone. صُنع يدوياً في أبوظبي. صُمم ليُغيَّر.',
  conceptP2:
    'تصل كل عباءة Marylebone بخيط عقيق يماني قياسي. اختاري حجراً مختلفاً ليوم مختلف. ناسبيه مع حقيبتك أو إطلالتك أو مناسبتك. العباءة تبقى كما هي. أنتِ تقررين ما تعبّر عنه.',
  conceptStoneList:
    'عقيق يماني · عين النمر · حجر الشمس · يشم فوشيا · أفنتورين أزرق · كوارتز وردي · ملكيت · لازورد · جمشت · يشم',
  conceptExploreStones: 'استكشفي كل الأحجار ←',
  conceptMarylebonePrompt: 'ليس لديكِ عباءة Marylebone بعد؟',
  conceptMaryleboneLink: 'شاهدي عباءة Marylebone ←',
  howItWorksLabel: 'كيف يعمل',
  howItWorksHeading: 'ثلاث خطوات.',
  steps: [
    {
      numeral: 'I',
      title: 'اختاري الحجر',
      body: 'اختاري خيط حجر طبيعي حسب اللون والسطح والطابع.',
    },
    {
      numeral: 'II',
      title: 'ارتديه بطريقتك',
      body: 'صُممت عباءة Marylebone لتحمله. لا حاجة لأكثر من ذلك.',
    },
    {
      numeral: 'III',
      title: 'غيّريه حين تختارين',
      body: 'بدّلي الأحجار بين المناسبات. العباءة تبقى كما هي.',
    },
  ],
  collectionLabel: 'المجموعة',
  collectionHeading: 'اختاري حسب اللون والطابع.',
  collectionIntro: 'كل حجر طبيعي. لا يوجد اثنان متطابقان.',
  shopAllStrandsCta: buildShopAllStrandsCta('ar', 'title'),
  discoverAllStrandsCta: 'اكتشفي كل الـ Strands',
  stoneVisualNotes: STONE_VISUAL_NOTES_AR,
  stoneVisualFallback: 'حجر طبيعي مُختار للون والسطح والملمس البصري.',
  limitedEdition: 'إصدار محدود',
  limitedEditionShort: 'محدود',
  viewStrandCta: 'اختاري هذا الحجر',
  viewStrandGridCta: 'عرض الخيط',
  carouselPrevAria: 'الأحجار السابقة',
  carouselNextAria: 'الأحجار التالية',
  carouselSwipeHint: 'اسحبي الأحجار أعلاه أو اسحبي هذا الشريط',
  carouselPositionAria: 'موضع عرض الأحجار',
  shopCollectionLabel: 'تسوّقي المجموعة',
  shopCollectionHeading: 'كل خيوط الأحجار الطبيعية',
  shopCollectionIntro:
    'عشرة خيوط أحجار قابلة للتبديل لعباءة Marylebone — اختاري حسب اللون والسطح والطابع. لكل خيط صفحته الخاصة بكل التفاصيل.',
  alsoInPrefix: 'أيضاً في',
  alsoInLink: 'الإكسسوارات — خيوط العباءة',
  anchorLabel: 'القطعة الأساسية',
  anchorHeading: 'عباءة Marylebone.',
  anchorBody: (price) =>
    `يتدلّى الخيط من كم مُصمَّم خصيصاً — تفصيل يوجد فقط على Marylebone. يُصنع حسب الطلب في أبوظبي، من ${price}.`,
  anchorCta: 'شاهدي Marylebone',
  conceptStoneSwatches: [
    { name: 'عقيق يماني', color: CONCEPT_SWATCH_COLORS[0] },
    { name: 'عين النمر', color: CONCEPT_SWATCH_COLORS[1] },
    { name: 'حجر الشمس', color: CONCEPT_SWATCH_COLORS[2] },
    { name: 'يشم فوشيا', color: CONCEPT_SWATCH_COLORS[3] },
    { name: 'أفنتورين أزرق', color: CONCEPT_SWATCH_COLORS[4] },
    { name: 'كوارتز وردي', color: CONCEPT_SWATCH_COLORS[5] },
    { name: 'ملكيت', color: CONCEPT_SWATCH_COLORS[6] },
    { name: 'لازورد', color: CONCEPT_SWATCH_COLORS[7] },
    { name: 'جمشت', color: CONCEPT_SWATCH_COLORS[8] },
    { name: 'يشم', color: CONCEPT_SWATCH_COLORS[9] },
  ],
}

const STONE_VISUAL_NOTES_NL: Record<string, string> = {
  'Onyx Strands':
    'Diepzwart met een hoogglanzend oppervlak. Een klassieke steen, te vinden in Brazilië en India. De steen waarmee elke Marylebone Abaya aankomt.',
  'Tiger Eye Strands':
    'Warm goudbruin met een natuurlijk, bewegend schijnsel dat met het licht verschuift. Afkomstig uit Zuid-Afrika. Geen twee stukken vangen het licht hetzelfde.',
  'Al Ain Oasis Sunstone Strands':
    'Warme perzik-oranje zonnesteen met een zachte, lichtgevende finish. Een levendige natuurlijke toon met subtiele warmte in het licht.',
  'Fuchsia Jade Strands':
    'Natuurlijke jade in een diep verzadigd roze. Een ongebruikelijke kleur — zelden in deze intensiteit te vinden.',
  'Blue Aventurine Strands':
    'Een koel, stoffig blauw met een subtiele innerlijke schittering. Afkomstig uit India en Chili. Terughoudend van afstand, gedetailleerd van dichtbij.',
  'Al Ain Oasis Rose Quartz Strands':
    'Zacht blush, halfdoorschijnend. Het licht gaat erdoorheen in plaats van erop te reflecteren. Te vinden in Brazilië en Madagaskar.',
  'Al Ain Oasis Malachite Strands':
    'Diepgroen met natuurlijke banderingen — geen twee stukken delen hetzelfde patroon. Afkomstig uit Centraal-Afrika.',
  'Al Ain Oasis Lapis Lazuli Strands':
    'Een diepblauw met natuurlijke gouden spikkels, afkomstig uit Afghanistan. Al duizenden jaren gebruikt in sieraden en kunst.',
  'Amethyst Hearts Strands':
    'Violet kwarts, gevormd tot harten en gepolijst tot een gefacetteerd oppervlak. Te vinden in Brazilië en Zambia.',
  'Jade Hearts Strands':
    'Koelgroene jade, met de hand tot hartvormen gevormd. Elk stuk iets anders. Elk stuk eenmaal gemaakt.',
  'Natural Jade Strands':
    'Echte, ongeverfde natuurlijke jade in zacht gedempt groen. Ronde gepolijste kralen met een stille, minerale kalmte.',
}

const STRANDS_NL: StrandsPageCopy = {
  heroEyebrow: `DE ABAYA ${PRODUCT_LINE_STRANDS.toUpperCase()} · BINT SAEED`,
  heroHeadline: 'Uw abaya was nooit voltooid. Tot nu toe.',
  heroSubline1:
    'Het eerste huis voor abaya’s met verwisselbare Strands van natuursteen. Gedragen aan de manchet. Verwisseld naar keuze.',
  heroSubline2: 'Natuursteen. Handgemaakt in Abu Dhabi. Voor de Marylebone Abaya.',
  ctaShopStrands: buildShopStrandsCta('nl', 'upper'),
  ctaSeeMarylebone: 'BEKIJK DE MARYLEBONE',
  marquee: `NATUURSTEEN · BINT SAEED · ABAYA ${PRODUCT_LINE_STRANDS.toUpperCase()} · ABU DHABI · OP BESTELLING GEMAAKT ·`,
  conceptLabel: 'HET CONCEPT',
  conceptHeadingLine1: 'Eén abaya.',
  conceptHeadingLine2: 'Veel accenten.',
  conceptP1:
    'De Bint Saeed abaya Strand is een detail van natuursteen, gedragen aan de manchet van de Marylebone Abaya. Handgemaakt in Abu Dhabi. Gemaakt om te verwisselen.',
  conceptP2:
    'Elke Marylebone Abaya komt standaard met een onyx Strand. Kies een andere steen voor een andere dag. Stem af op uw tas, uw outfit, uw gelegenheid. De abaya blijft dezelfde. U bepaalt wat zij uitdrukt.',
  conceptStoneList:
    'Onyx · Tijgeroog · Zonnesteen · Fuchsia jade · Blauwe aventurijn · Rozenkwarts · Malachiet · Lapis lazuli · Amethist · Jade',
  conceptExploreStones: 'Verken alle stenen →',
  conceptMarylebonePrompt: 'Heeft u de Marylebone Abaya nog niet?',
  conceptMaryleboneLink: 'Bekijk de Marylebone Abaya →',
  howItWorksLabel: 'HOE HET WERKT',
  howItWorksHeading: 'Drie stappen.',
  steps: [
    {
      numeral: 'I',
      title: 'KIES DE STEEN',
      body: 'Kies een Strand van natuursteen op kleur, oppervlak en karakter.',
    },
    {
      numeral: 'II',
      title: 'DRAAG HEM NAAR WENS',
      body: 'De Marylebone Abaya is ontworpen om hem te houden. Meer is niet nodig.',
    },
    {
      numeral: 'III',
      title: 'WISSEL WANNEER U WILT',
      body: 'Wissel stenen tussen gelegenheden. De abaya blijft dezelfde.',
    },
  ],
  collectionLabel: 'DE COLLECTIE',
  collectionHeading: 'Kies op kleur en karakter.',
  collectionIntro: 'Elke steen is natuurlijk. Geen twee zijn identiek.',
  shopAllStrandsCta: buildShopAllStrandsCta('nl', 'title'),
  discoverAllStrandsCta: 'Ontdek alle Strands',
  stoneVisualNotes: STONE_VISUAL_NOTES_NL,
  stoneVisualFallback: 'Natuursteen gekozen om kleur, oppervlak en visuele textuur.',
  limitedEdition: 'Limited edition',
  limitedEditionShort: 'Limited',
  viewStrandCta: 'Kies deze steen',
  viewStrandGridCta: 'Bekijk Strand',
  carouselPrevAria: 'Vorige stenen',
  carouselNextAria: 'Volgende stenen',
  carouselSwipeHint: 'Veeg over de stenen hierboven of sleep deze balk',
  carouselPositionAria: 'Positie van de steencarrousel',
  shopCollectionLabel: 'SHOP DE COLLECTIE',
  shopCollectionHeading: 'Alle Strands van natuursteen',
  shopCollectionIntro:
    'Tien verwisselbare steen-Strands voor de Marylebone Abaya — kies op kleur, oppervlak en karakter. Elke Strand heeft een eigen productpagina met alle details.',
  alsoInPrefix: 'Ook in',
  alsoInLink: 'Accessoires — Abaya Strands',
  anchorLabel: 'HET ANKERSTUK',
  anchorHeading: 'De Marylebone Abaya.',
  anchorBody: (price) =>
    `De Strand hangt vanaf een speciaal geconstrueerde manchet — een detail dat alleen op de Marylebone voorkomt. Op bestelling gemaakt in Abu Dhabi, vanaf ${price}.`,
  anchorCta: 'BEKIJK DE MARYLEBONE',
  conceptStoneSwatches: [
    { name: 'Onyx', color: CONCEPT_SWATCH_COLORS[0] },
    { name: 'Tijgeroog', color: CONCEPT_SWATCH_COLORS[1] },
    { name: 'Zonnesteen', color: CONCEPT_SWATCH_COLORS[2] },
    { name: 'Fuchsia jade', color: CONCEPT_SWATCH_COLORS[3] },
    { name: 'Blauwe aventurijn', color: CONCEPT_SWATCH_COLORS[4] },
    { name: 'Rozenkwarts', color: CONCEPT_SWATCH_COLORS[5] },
    { name: 'Malachiet', color: CONCEPT_SWATCH_COLORS[6] },
    { name: 'Lapis lazuli', color: CONCEPT_SWATCH_COLORS[7] },
    { name: 'Amethist', color: CONCEPT_SWATCH_COLORS[8] },
    { name: 'Jade', color: CONCEPT_SWATCH_COLORS[9] },
  ],
}

/** Discover-all CTA — keep Latin “Strands” brand noun. */
const DISCOVER_ALL_STRANDS_CTA: Record<Language, string> = {
  en: 'Discover all Strands',
  ar: 'اكتشفي كل الـ Strands',
  fr: 'Découvrir tous les Strands',
  it: 'Scopri tutti gli Strands',
  es: 'Descubrir todos los Strands',
  ru: 'Открыть все Strands',
  zh: '探索全部 Strands',
  de: 'Alle Strands entdecken',
  nl: 'Ontdek alle Strands',
  pt: 'Descobrir todos os Strands',
  id: 'Temukan semua Strands',
  ms: 'Temui semua Strands',
}

type StrandsLocaleOverlay = Partial<
  Pick<
    StrandsPageCopy,
    | 'heroEyebrow'
    | 'heroHeadline'
    | 'heroSubline1'
    | 'heroSubline2'
    | 'ctaShopStrands'
    | 'ctaSeeMarylebone'
    | 'shopAllStrandsCta'
    | 'marquee'
  >
>

/**
 * Hero + CTA overlays so non-EN locales are not left as English (which triggers
 * browser MT — e.g. Back→Rug, SHOP STRANDS→WINKEL STRANDEN in Dutch).
 * Full page packs can expand later; CTAs always use the Strands brand lock.
 */
const STRANDS_LOCALE_OVERLAY: Partial<Record<Language, StrandsLocaleOverlay>> = {
  de: {
    heroEyebrow: `DER ABAYA ${PRODUCT_LINE_STRANDS.toUpperCase()} · BINT SAEED`,
    heroHeadline: 'Ihre Abaya war nie fertig. Bis jetzt.',
    heroSubline1:
      'Das erste Abaya-Haus mit austauschbaren Naturstein-Strands. Am Manschettenrand getragen. Nach Wunsch gewechselt.',
    heroSubline2: 'Naturstein. Handgefertigt in Abu Dhabi. Für die Marylebone Abaya.',
    ctaSeeMarylebone: 'DIE MARYLEBONE ANSEHEN',
  },
  fr: {
    heroEyebrow: `LE ${PRODUCT_LINE_STRANDS.toUpperCase()} ABAYA · BINT SAEED`,
    heroHeadline: 'Votre abaya n’a jamais été terminée. Jusqu’à présent.',
    heroSubline1:
      'La première maison d’abayas à proposer des Strands en pierres naturelles interchangeables. Portés au poignet. Changés à volonté.',
    heroSubline2: 'Pierre naturelle. Fait main à Abu Dhabi. Conçu pour l’abaya Marylebone.',
    ctaSeeMarylebone: 'VOIR LA MARYLEBONE',
  },
  it: {
    heroEyebrow: `L’ABAYA ${PRODUCT_LINE_STRANDS.toUpperCase()} · BINT SAEED`,
    heroHeadline: 'La tua abaya non è mai stata completa. Fino ad ora.',
    heroSubline1:
      'La prima maison di abaya con Strands in pietre naturali intercambiabili. Indossati sul polsino. Cambiati a piacere.',
    heroSubline2: 'Pietra naturale. Realizzati a mano ad Abu Dhabi. Per l’abaya Marylebone.',
    ctaSeeMarylebone: 'SCOPRI LA MARYLEBONE',
  },
  es: {
    heroEyebrow: `EL ${PRODUCT_LINE_STRANDS.toUpperCase()} ABAYA · BINT SAEED`,
    heroHeadline: 'Tu abaya nunca estuvo terminada. Hasta ahora.',
    heroSubline1:
      'La primera casa de abayas con Strands de piedras naturales intercambiables. Se llevan en el puño. Se cambian a voluntad.',
    heroSubline2: 'Piedra natural. Hecho a mano en Abu Dhabi. Para la abaya Marylebone.',
    ctaSeeMarylebone: 'VER LA MARYLEBONE',
  },
  pt: {
    heroEyebrow: `O ${PRODUCT_LINE_STRANDS.toUpperCase()} ABAYA · BINT SAEED`,
    heroHeadline: 'A sua abaya nunca esteve completa. Até agora.',
    heroSubline1:
      'A primeira casa de abayas com Strands de pedras naturais intercambiáveis. Usados no punho. Trocados à escolha.',
    heroSubline2: 'Pedra natural. Feito à mão em Abu Dhabi. Para a abaya Marylebone.',
    ctaSeeMarylebone: 'VER A MARYLEBONE',
  },
  ru: {
    heroEyebrow: `ABAYA ${PRODUCT_LINE_STRANDS.toUpperCase()} · BINT SAEED`,
    heroHeadline: 'Ваша абайя никогда не была завершена. До сих пор.',
    heroSubline1:
      'Первый дом абайи со сменными Strands из натурального камня. На манжете. Меняются по желанию.',
    heroSubline2: 'Натуральный камень. Ручная работа в Abu Dhabi. Для абайи Marylebone.',
    ctaSeeMarylebone: 'СМОТРЕТЬ MARYLEBONE',
  },
  zh: {
    heroEyebrow: `ABAYA ${PRODUCT_LINE_STRANDS.toUpperCase()} · BINT SAEED`,
    heroHeadline: '您的长袍从未真正完成。直到现在。',
    heroSubline1: '首个提供可更换天然石 Strands 的长袍品牌。佩于袖口。随心更换。',
    heroSubline2: '天然石。阿布扎比手工制作。专为 Marylebone Abaya。',
    ctaSeeMarylebone: '查看 MARYLEBONE',
  },
  id: {
    heroEyebrow: `ABAYA ${PRODUCT_LINE_STRANDS.toUpperCase()} · BINT SAEED`,
    heroHeadline: 'Abaya Anda belum pernah selesai. Sampai sekarang.',
    heroSubline1:
      'Rumah abaya pertama dengan Strands batu alam yang dapat diganti. Dipakai di manset. Diganti sesuai pilihan.',
    heroSubline2: 'Batu alam. Buatan tangan di Abu Dhabi. Untuk Marylebone Abaya.',
    ctaSeeMarylebone: 'LIHAT MARYLEBONE',
  },
  ms: {
    heroEyebrow: `ABAYA ${PRODUCT_LINE_STRANDS.toUpperCase()} · BINT SAEED`,
    heroHeadline: 'Abaya anda tidak pernah selesai. Sehingga kini.',
    heroSubline1:
      'Rumah abaya pertama dengan Strands batu semula jadi yang boleh ditukar. Dipakai pada manset. Ditukar mengikut pilihan.',
    heroSubline2: 'Batu semula jadi. Buatan tangan di Abu Dhabi. Untuk Marylebone Abaya.',
    ctaSeeMarylebone: 'LIHAT MARYLEBONE',
  },
}

export function getStrandsPageCopy(locale: Language | string): StrandsPageCopy {
  if (locale === 'ar') return STRANDS_AR
  if (locale === 'nl') return STRANDS_NL
  const lang = (locale in STRANDS_LOCALE_OVERLAY || locale === 'en' ? locale : 'en') as Language
  if (lang === 'en') return STRANDS_EN

  const overlay = STRANDS_LOCALE_OVERLAY[lang] ?? {}
  return {
    ...STRANDS_EN,
    ...overlay,
    ctaShopStrands: buildShopStrandsCta(lang, 'upper'),
    shopAllStrandsCta: buildShopAllStrandsCta(lang, 'title'),
    discoverAllStrandsCta: DISCOVER_ALL_STRANDS_CTA[lang] ?? DISCOVER_ALL_STRANDS_CTA.en,
  }
}
