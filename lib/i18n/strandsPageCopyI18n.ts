import type { Language } from '@/lib/i18n/translations'

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
  'Onyx Strand':
    'Deep black with a high-gloss surface. A classic stone, found across Brazil and India. The one every Marylebone Abaya arrives wearing.',
  'Tiger Eye Strand':
    'Warm golden-brown with a natural moving sheen that shifts with the light. Found in South Africa. No two pieces catch it the same way.',
  'Sunstone Strand':
    'Warm peach-orange sunstone with a smooth, luminous finish. A vivid natural tone with gentle warmth in the light.',
  'Fuchsia Jade Strand':
    'Natural jade in a deep saturated rose. An unusual colour — not commonly found at this intensity.',
  'Blue Aventurine Strand':
    'A cool dusty blue with a subtle internal shimmer. Sourced from India and Chile. Understated from a distance, detailed up close.',
  'Rose Quartz Strand':
    'Pale blush, semi-translucent. The light passes through it rather than reflecting off. Found across Brazil and Madagascar.',
  'Malachite Strand':
    'Deep green with natural banded markings — no two pieces share the same pattern. Found in Central Africa.',
  'Lapis Lazuli Strand':
    'A deep blue flecked with natural gold, sourced from Afghanistan. Used in jewellery and art for thousands of years.',
  'Amethyst Hearts Strand':
    'Violet quartz shaped into hearts and polished to a faceted surface. Found across Brazil and Zambia.',
  'Jade Hearts Strand':
    'Cool green jade, hand-shaped into heart forms. Each one slightly different. Each one made once.',
}

const STONE_VISUAL_NOTES_AR: Record<string, string> = {
  'Onyx Strand':
    'أسود عميق بسطح لامع عالٍ. حجر كلاسيكي يُوجد في البرازيل والهند. الحجر الذي تصل به كل عباءة Marylebone.',
  'Tiger Eye Strand':
    'بني ذهبي دافئ بلمعان طبيعي متحرك يتغيّر مع الضوء. يُوجد في جنوب أفريقيا. لا قطعتين تلتقطان الضوء بنفس الطريقة.',
  'Sunstone Strand':
    'حجر الشمس بلون خوخي برتقالي دافئ بلمسة نهائية ناعمة ومضيئة. لون طبيعي حيّ بدفء لطيف في الضوء.',
  'Fuchsia Jade Strand':
    'يشم طبيعي بلون وردي عميق مشبع. لون غير معتاد — لا يُوجد عادةً بهذه الكثافة.',
  'Blue Aventurine Strand':
    'أزرق بارد مغبّر بلمعان داخلي خفيف. يُستورد من الهند وتشيلي. هادئ من بعيد، مفصّل عن قرب.',
  'Rose Quartz Strand':
    'وردي باهت، شبه شفاف. يمرّ الضوء عبره بدلاً من أن ينعكس عنه. يُوجد في البرازيل ومدغشقر.',
  'Malachite Strand':
    'أخضر عميق بعلامات طبيعية متموّجة — لا قطعتين تشتركان في النمط نفسه. يُوجد في وسط أفريقيا.',
  'Lapis Lazuli Strand':
    'أزرق عميق مرصّع بلمسات ذهبية طبيعية، يُستورد من أفغانستان. يُستخدم في المجوهرات والفن منذ آلاف السنين.',
  'Amethyst Hearts Strand':
    'كوارتز بنفسجي مُشكَّل على شكل قلوب ومُصقول بسطح مُوجَّه. يُوجد في البرازيل وزامبيا.',
  'Jade Hearts Strand':
    'يشم أخضر بارد، مُشكَّل يدوياً على شكل قلوب. كل واحدة مختلفة قليلاً. كل واحدة تُصنع مرة واحدة.',
}

const STRANDS_EN: StrandsPageCopy = {
  heroEyebrow: 'THE ABAYA STRAND · BINT SAEED',
  heroHeadline: 'Your abaya has never been finished. Until now.',
  heroSubline1:
    'The first abaya house to offer interchangeable natural stone strands. Worn on the cuff. Changed by choice.',
  heroSubline2: 'Natural stone. Handcrafted in Abu Dhabi. Made for the Marylebone Abaya.',
  ctaShopStrands: 'SHOP STRANDS',
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
  shopAllStrandsCta: 'Shop all strands',
  stoneVisualNotes: STONE_VISUAL_NOTES_EN,
  stoneVisualFallback: 'Natural stone selected for colour, surface, and visual texture.',
  limitedEdition: 'Limited Edition',
  limitedEditionShort: 'Limited',
  viewStrandCta: 'VIEW STRAND',
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
    `The strand drapes from a specially constructed cuff — a detail found only on the Marylebone. Made to order in Abu Dhabi, from AED ${price}.`,
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
  ctaShopStrands: 'تسوّقي الخيوط',
  ctaSeeMarylebone: 'شاهدي Marylebone',
  marquee: 'حجر طبيعي · BINT SAEED · خيوط العباءة · أبوظبي · يُصنع حسب الطلب ·',
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
  shopAllStrandsCta: 'تسوّقي كل الخيوط',
  stoneVisualNotes: STONE_VISUAL_NOTES_AR,
  stoneVisualFallback: 'حجر طبيعي مُختار للون والسطح والملمس البصري.',
  limitedEdition: 'إصدار محدود',
  limitedEditionShort: 'محدود',
  viewStrandCta: 'عرض الخيط',
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
    `يتدلّى الخيط من كم مُصمَّم خصيصاً — تفصيل يوجد فقط على Marylebone. يُصنع حسب الطلب في أبوظبي، من ${price} درهماً.`,
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

export function getStrandsPageCopy(locale: Language | string): StrandsPageCopy {
  if (locale === 'ar') return STRANDS_AR
  return STRANDS_EN
}
