import type { Language } from '@/lib/i18n/translations'

export type HomePillar = {
  title: string
  copy: string
}

export type HomeStrandSwatch = {
  name: string
  hex: string
}

export type HomeStoryCode = {
  title: string
  subtitle: string
}

export type HomeEditorialCopy = {
  heroHeadline: string
  heroSubline: string
  heroBrandStoryCta: string
  manifestoLead: string
  manifestoQuote: string
  manifestoSnippets: string[]
  manifestoImageEyebrow: string
  manifestoLabel: string
  manifestoReadStory: string
  chapterLabel: string
  collectionHeading: string
  pillars: HomePillar[]
  strandSwatches: HomeStrandSwatch[]
  abayaStrandsEyebrow: string
  abayaStrandsHeading: string
  abayaStrandsBody: string
  shopStrandsCta: string
  carriedCloseEyebrow: string
  personalisationHeading: string
  personalisationBody: string
  shopCta: string
  returnToShopCta: string
  categoryFocus: string
  categoryNewIn: string
  categoryHiddenPocketGift: string
  pricePrefix: string
  houseCodesEyebrow: string
  houseCodesHeading: string
  discoverCodesCta: string
  storyCodes: HomeStoryCode[]
  createdForYouEyebrow: string
  createdForYouHeading: string
  createdForYouBody: string
  formatPriceRange: (min: number, max: number) => string
  formatPriceFrom: (min: number) => string
  formatProductPrice: (price: number) => string
}

const STRAND_SWATCHES_HEX = [
  { hex: '#1a0210' },
  { hex: '#8b5a2b' },
  { hex: '#f4b8c5' },
  { hex: '#1f7a5e' },
] as const

const STORY_CODES_TITLES = [
  'The Monogram',
  'Khous',
  'Knotted Lines',
  'Al Ain Rosette',
  'Al Talli',
  'The Strands',
] as const

const HOME_EN: HomeEditorialCopy = {
  heroHeadline: 'FOR THE DAUGHTER IN EVERY WOMAN',
  heroSubline: 'Carrying Heritage Forward.',
  heroBrandStoryCta: 'Brand Story',
  manifestoLead: 'Bint Saeed',
  manifestoQuote: 'A sense of self that does not shift with setting.',
  manifestoSnippets: [
    'Wherever life is lived, from Abu Dhabi to London, from Riyadh to Paris, from Doha to Marbella, you do not need to change how you present yourself. Each piece carries your elegance, your way of being, with consistency, wherever you are.',
    'Bint Saeed exists at the intersection of heritage and a contemporary life, carried across borders and recognised by its consistency.',
  ],
  manifestoImageEyebrow: 'From Abu Dhabi to the world',
  manifestoLabel: 'MANIFESTO',
  manifestoReadStory: 'Read our story',
  chapterLabel: 'CHAPTER I',
  collectionHeading: 'THE COLLECTION',
  pillars: [
    {
      title: 'Crafted in Abu Dhabi',
      copy: 'Each piece is finished in small runs, with a focus on cut, drape, and longevity.',
    },
    {
      title: 'Natural Stone Signatures',
      copy: 'Strands and details are selected for story, symbolism, and timeless wearability.',
    },
    {
      title: 'Personalisation Included',
      copy: 'A hidden pocket note can be added for gifting, milestones, and private meaning.',
    },
  ],
  strandSwatches: [
    { name: 'Onyx', hex: STRAND_SWATCHES_HEX[0].hex },
    { name: 'Tiger Eye', hex: STRAND_SWATCHES_HEX[1].hex },
    { name: 'Rose Quartz', hex: STRAND_SWATCHES_HEX[2].hex },
    { name: 'Malachite', hex: STRAND_SWATCHES_HEX[3].hex },
  ],
  abayaStrandsEyebrow: 'ABAYA STRANDS',
  abayaStrandsHeading: 'NATURAL STONE STRANDS',
  abayaStrandsBody:
    'Designed for abayas, bags, and phone styling. Build your signature stack with curated stones and limited edition drops.',
  shopStrandsCta: 'Shop Strands',
  carriedCloseEyebrow: 'Carried Close',
  personalisationHeading: 'PERSONALISATION',
  personalisationBody:
    'Every piece includes a hidden pocket, personalised with a name, date, or private message. Perfect for Eid, weddings, and milestones.',
  shopCta: 'SHOP',
  returnToShopCta: 'Return to Shop',
  categoryFocus: 'Category Focus',
  categoryNewIn: 'New in',
  categoryHiddenPocketGift: 'Hidden pocket gift',
  pricePrefix: 'DHS.',
  houseCodesEyebrow: 'House Codes',
  houseCodesHeading: 'THE HOUSE CODES',
  discoverCodesCta: 'Discover the Codes',
  storyCodes: [
    { title: STORY_CODES_TITLES[0], subtitle: 'Signature mark' },
    { title: STORY_CODES_TITLES[1], subtitle: 'Palm craftsmanship' },
    { title: STORY_CODES_TITLES[2], subtitle: 'Line & continuity' },
    { title: STORY_CODES_TITLES[3], subtitle: 'Regional motif' },
    { title: STORY_CODES_TITLES[4], subtitle: 'Gold threadwork' },
    { title: STORY_CODES_TITLES[5], subtitle: 'Beaded lines' },
  ],
  createdForYouEyebrow: 'Carried Close',
  createdForYouHeading: 'PERSONALISATION',
  createdForYouBody:
    'Every piece includes a hidden pocket, personalised with a name, date, or private message. Perfect for Eid, weddings, and milestones.',
  formatPriceRange: (min, max) => `DHS ${min.toLocaleString()}-${max.toLocaleString()}`,
  formatPriceFrom: (min) => `DHS ${min.toLocaleString()}+`,
  formatProductPrice: (price) => `DHS. ${price.toLocaleString()}`,
}

const HOME_AR: HomeEditorialCopy = {
  heroHeadline: 'للابنة في كل امرأة',
  heroSubline: 'حمل الإرث إلى الأمام.',
  heroBrandStoryCta: 'قصة العلامة',
  manifestoLead: 'Bint Saeed',
  manifestoQuote: 'إحساس بالذات لا يتبدّل مع المكان.',
  manifestoSnippets: [
    'أينما تُعاش الحياة، من أبوظبي إلى لندن، من الرياض إلى باريس، من الدوحة إلى ماربيا، لا حاجة لتغيير طريقة تقديم نفسك. كل قطعة تحمل أناقتك وأسلوب وجودك باتساق، أينما كنت.',
    'توجد Bint Saeed عند تقاطع الإرث والحياة المعاصرة، تُحمل عبر الحدود وتُعرف باتساقها.',
  ],
  manifestoImageEyebrow: 'من أبوظبي إلى العالم',
  manifestoLabel: 'البيان',
  manifestoReadStory: 'اقرأي قصتنا',
  chapterLabel: 'الفصل الأول',
  collectionHeading: 'المجموعة',
  pillars: [
    {
      title: 'صُنعت في أبوظبي',
      copy: 'تُنجز كل قطعة بكميات محدودة، مع تركيز على القصّ والانسيابية والمتانة.',
    },
    {
      title: 'توقيعات من الأحجار الطبيعية',
      copy: 'تُختار الخيوط والتفاصيل لقصتها ورمزيتها وقابليتها للارتداء عبر الزمن.',
    },
    {
      title: 'التخصيص مشمول',
      copy: 'يمكن إضافة ملاحظة في الجيب الخفي للإهداء والمناسبات والمعنى الخاص.',
    },
  ],
  strandSwatches: [
    { name: 'عقيق يماني', hex: STRAND_SWATCHES_HEX[0].hex },
    { name: 'عين النمر', hex: STRAND_SWATCHES_HEX[1].hex },
    { name: 'كوارتز وردي', hex: STRAND_SWATCHES_HEX[2].hex },
    { name: 'ملكيت', hex: STRAND_SWATCHES_HEX[3].hex },
  ],
  abayaStrandsEyebrow: 'خيوط العباءة',
  abayaStrandsHeading: 'خيوط من الأحجار الطبيعية',
  abayaStrandsBody:
    'صُممت للعباءات والحقائب وتنسيق الهاتف. ابني مجموعتك المميزة من أحجار منتقاة وإصدارات محدودة.',
  shopStrandsCta: 'تسوّقي الخيوط',
  carriedCloseEyebrow: 'تُحمل قريباً',
  personalisationHeading: 'التخصيص',
  personalisationBody:
    'تتضمن كل قطعة جيباً خفياً، يُخصَّص باسم أو تاريخ أو رسالة خاصة. مثالية للعيد والأعراس والمناسبات.',
  shopCta: 'تسوّقي',
  returnToShopCta: 'العودة للمتجر',
  categoryFocus: 'تركيز الفئة',
  categoryNewIn: 'وصل حديثاً',
  categoryHiddenPocketGift: 'هدية الجيب الخفي',
  pricePrefix: 'د.إ',
  houseCodesEyebrow: 'رموز الدار',
  houseCodesHeading: 'رموز الدار',
  discoverCodesCta: 'اكتشفي الرموز',
  storyCodes: [
    { title: STORY_CODES_TITLES[0], subtitle: 'العلامة المميزة' },
    { title: STORY_CODES_TITLES[1], subtitle: 'حرفة النخيل' },
    { title: STORY_CODES_TITLES[2], subtitle: 'الخط والاستمرارية' },
    { title: STORY_CODES_TITLES[3], subtitle: 'زخرفة إقليمية' },
    { title: STORY_CODES_TITLES[4], subtitle: 'تطريز بالخيوط الذهبية' },
    { title: STORY_CODES_TITLES[5], subtitle: 'خطوط مُرصّعة' },
  ],
  createdForYouEyebrow: 'تُحمل قريباً',
  createdForYouHeading: 'التخصيص',
  createdForYouBody:
    'تتضمن كل قطعة جيباً خفياً، يُخصَّص باسم أو تاريخ أو رسالة خاصة. مثالية للعيد والأعراس والمناسبات.',
  formatPriceRange: (min, max) => `د.إ ${min.toLocaleString()}-${max.toLocaleString()}`,
  formatPriceFrom: (min) => `د.إ ${min.toLocaleString()}+`,
  formatProductPrice: (price) => `د.إ ${price.toLocaleString()}`,
}

export function getHomeEditorialCopy(locale: Language | string): HomeEditorialCopy {
  if (locale === 'ar') return HOME_AR
  return HOME_EN
}
