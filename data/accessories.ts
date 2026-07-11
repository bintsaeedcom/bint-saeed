/**
 * Product shots from `public/Webshop pictures/accessoiries/`
 * (URL-encoded spaces; subfolders: `necklaces/`, `strands/`, `earrings/`, `bag charm/`, `phone charm/`.)
 */
const A = '/Webshop%20pictures/accessoiries'
const NECKLACES = `${A}/necklaces`

function necklaceFrontImage(stoneSlug: string): string {
  return `${NECKLACES}/bint-saeed-${stoneSlug}-necklace-front.webp`
}

function necklaceLifestyleImage(stoneSlug: string): string {
  return `${NECKLACES}/bint-saeed-${stoneSlug}-necklace-lifestyle.webp`
}

/** Default necklace hero (malachite) — used where a stone-specific shot is not uploaded yet. */
export const ACCESSORY_IMAGE_NECKLACE = necklaceFrontImage('malachite')
export const ACCESSORY_IMAGE_NECKLACE_MALACHITE = necklaceFrontImage('malachite')
export const ACCESSORY_IMAGE_NECKLACE_MALACHITE_LIFESTYLE = necklaceLifestyleImage('malachite')
export const ACCESSORY_IMAGE_NECKLACE_ROSE_QUARTZ = necklaceFrontImage('rose-quartz')
export const ACCESSORY_IMAGE_NECKLACE_ROSE_QUARTZ_LIFESTYLE = necklaceLifestyleImage('rose-quartz')
export const ACCESSORY_IMAGE_NECKLACE_TIGER_EYE = necklaceFrontImage('tiger-eye')
export const ACCESSORY_IMAGE_NECKLACE_ONYX = necklaceFrontImage('onyx')
export const ACCESSORY_IMAGE_NECKLACE_LAPIS = necklaceFrontImage('lapis-lazuli')
export const ACCESSORY_IMAGE_NECKLACE_SUNSTONE = necklaceFrontImage('sunstone')

const PHONE_CHARM = `${A}/phone%20charm`
function phoneCharmFrontImage(stoneFileSlug: string): string {
  return `${PHONE_CHARM}/bint-saeed-${stoneFileSlug}-al-quaa-phone-charm-front.webp`
}

export const ACCESSORY_IMAGE_PHONE_CHARM_PINK_JADE = phoneCharmFrontImage('pink-jade')
export const ACCESSORY_IMAGE_PHONE_CHARM_ORANGE_JADE = phoneCharmFrontImage('orange-jade')
export const ACCESSORY_IMAGE_PHONE_CHARM_ONYX = phoneCharmFrontImage('onyx')
export const ACCESSORY_IMAGE_PHONE_CHARM_TIGER_EYE = phoneCharmFrontImage('tiger-eye')
export const ACCESSORY_IMAGE_PHONE_CHARM_MALACHITE = phoneCharmFrontImage('malachite')
export const ACCESSORY_IMAGE_PHONE_CHARM_LAPIS = phoneCharmFrontImage('lapis-lazuli')
export const ACCESSORY_IMAGE_PHONE_CHARM_ROSE_QUARTZ = phoneCharmFrontImage('rose-quartz')
/** Category / nav hero — fuchsia (pink jade) line */
export const ACCESSORY_IMAGE_PHONE_CHARM = ACCESSORY_IMAGE_PHONE_CHARM_PINK_JADE

const STRANDS = `${A}/strands`
/** Category hero for signature strands grid. */
export const ACCESSORY_IMAGE_ABAYA_CHARMS_HERO = `${STRANDS}/bint-saeed-malachite-carnelian-natural-stoneal-ain-rosette-strand-front.webp`
export const ACCESSORY_IMAGE_ABAYA_CHARM_ONYX = `${STRANDS}/bint-saeed-onyx-natural-stone-strand-front.webp`
export const ACCESSORY_IMAGE_ABAYA_CHARM_TIGER_EYE = `${STRANDS}/bint-saeed-tiger-eye-natural-stone-strand-front.webp`
export const ACCESSORY_IMAGE_ABAYA_CHARM_SUNSTONE = `${STRANDS}/bint-saeed-sunstone-carnelian-natural-stone-al-ain-rosette-strand-front.webp`
export const ACCESSORY_IMAGE_ABAYA_CHARM_ORANGE_JADE = `${STRANDS}/bint-saeed-orange-jade-natural-stone-strand-front.webp`
export const ACCESSORY_IMAGE_ABAYA_CHARM_FUCHSIA_JADE = `${STRANDS}/bint-saeed-pink-jade-natural-stone-strand-front.webp`
export const ACCESSORY_IMAGE_ABAYA_CHARM_AVENTURINE = `${STRANDS}/bint-saeed-aventurine-natural-stone-strand-front.webp`
export const ACCESSORY_IMAGE_ABAYA_CHARM_ROSE_QUARTZ = `${STRANDS}/bint-saeed-rose-quartz-carnelian-natural-stone-al-ain-rosette-strand-front.webp`
export const ACCESSORY_IMAGE_ABAYA_CHARM_MALACHITE = `${STRANDS}/bint-saeed-malachite-carnelian-natural-stoneal-ain-rosette-strand-front.webp`
export const ACCESSORY_IMAGE_ABAYA_CHARM_LAPIS = `${STRANDS}/bint-saeed-lapis-lazuli-carnelian-natural-stone-ain-rosette-strand-front.webp`
export const ACCESSORY_IMAGE_ABAYA_CHARM_AMETHYST = `${STRANDS}/bint-saeed-amethyst-hearts-natural-stone-strand-front.webp`
export const ACCESSORY_IMAGE_ABAYA_CHARM_GREEN_JADE = `${STRANDS}/bint-saeed-jade-hearts-natural-stone-strand-front.webp`

export const ACCESSORY_IMAGE_EARRINGS_MALACHITE = `${A}/earrings/al-ain-oasis-earrings-malachite-sunstone.webp`
export const ACCESSORY_IMAGE_EARRINGS_ORANGE_JADE = `${A}/earrings/al-ain-oasis-earrings-orange-jade-fron.webp`
export const ACCESSORY_IMAGE_EARRINGS_ROSE_QUARTZ = `${A}/earrings/al-quaa-earrings-rose-quartz-front.webp`
/** Temporary shared hero until lapis earring shots are uploaded. */
export const ACCESSORY_IMAGE_EARRINGS_HERO = ACCESSORY_IMAGE_EARRINGS_MALACHITE
export const ACCESSORY_IMAGE_BAG_CHARM_I = `${A}/bag%20charm/bint-saeed-al-ain-oasis-i-bag-charm-fuchsia-jade-front.png`
export const ACCESSORY_IMAGE_BAG_CHARM_II = `${A}/bag%20charm/bint-saeed-al-ain-oasis-ii-bag-charm-fuchsia-jade-front.png`
/** Category / nav hero — Al Ain Oasis I */
export const ACCESSORY_IMAGE_BAG_CHARM = ACCESSORY_IMAGE_BAG_CHARM_I

const AL_AIN_OASIS_NECKLACE_BASE_NAME = 'Al Ain Oasis Necklace'
function alAinOasisNecklaceName(variant: string): string {
  return `${AL_AIN_OASIS_NECKLACE_BASE_NAME} - ${variant}`
}
function alAinOasisNecklaceId(variantSlug: string): string {
  return `al-ain-oasis-necklace-${variantSlug}`
}

const AL_QUAA_PHONE_CHARM_BASE_NAME = 'Al Quaa Phone Charm'
function alQuaaPhoneCharmName(variant: string): string {
  return `${AL_QUAA_PHONE_CHARM_BASE_NAME} - ${variant}`
}
function alQuaaPhoneCharmId(variantSlug: string): string {
  return `al-quaa-phone-charm-${variantSlug}`
}

const AL_AIN_OASIS_EARRINGS_BASE_NAME = 'Al Ain Oasis Earrings'
function alAinOasisEarringsName(variant: string): string {
  return `${AL_AIN_OASIS_EARRINGS_BASE_NAME} - ${variant}`
}

const AL_QUAA_EARRINGS_BASE_NAME = 'Al Quaa Earrings'
function alQuaaEarringsName(variant: string): string {
  return `${AL_QUAA_EARRINGS_BASE_NAME} - ${variant}`
}

export interface Accessory {
  id: string
  name: string
  nameAr: string
  category:
    | 'necklaces'
    | 'earrings'
    | 'bracelets'
    | 'bag-strands'
    | 'phone-strands'
    | 'signature-strands'
  price: number
  description: string
  descriptionAr: string
  images: string[]
  materials: string
  materialsAr: string
  colors: { name: string; nameAr: string; hex: string }[]
  /** Optional — when set, PDP shows a third column (desktop) with two stacked angle shots */
  detailAngles?: readonly [string, string]
  inStock: boolean
  isNew?: boolean
  isBestseller?: boolean
  /** Shown on grid + PDP badge (e.g. Amethyst Hearts, Jade Hearts). */
  isLimitedEdition?: boolean
}

export const accessoryCategories = [
  {
    id: 'all',
    name: 'All Accessories',
    nameAr: 'جميع الإكسسوارات',
    icon: '✦',
  },
  {
    id: 'signature-strands',
    name: 'Signature Strands',
    nameAr: 'سلاسل العباءة',
    icon: '✺',
    description: 'Stone strands designed for abaya draping and edges',
    descriptionAr: 'سلاسل بالأحجار الطبيعية للعباءة والحافة',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    nameAr: 'قلادات',
    icon: '◇',
    description: 'Elegant necklaces to complement your abaya',
    descriptionAr: 'قلادات أنيقة تكمل عباءتك',
  },
  {
    id: 'earrings',
    name: 'Earrings',
    nameAr: 'أقراط',
    icon: '◈',
    description: 'Statement earrings for every occasion',
    descriptionAr: 'أقراط مميزة لكل مناسبة',
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    nameAr: 'أساور',
    icon: '○',
    description: 'Handcrafted bracelets in one universal size',
    descriptionAr: 'أساور مصنوعة يدوياً بمقاس موحّد',
  },
  {
    id: 'bag-strands',
    name: 'Bag Charms',
    nameAr: 'تعليقات الحقائب',
    icon: '❖',
    description: 'Luxurious charms for your favourite bags',
    descriptionAr: 'تعليقات فاخرة لحقائبك المفضلة',
  },
  {
    id: 'phone-strands',
    name: 'Phone Charms',
    nameAr: 'تعليقات الهاتف',
    icon: '✧',
    description: 'Stylish phone charms',
    descriptionAr: 'تعليقات هاتف أنيقة',
  },
]

/** Soft-hide until bracelet inventory is ready for launch. Product data stays in `accessories`. */
export const ACCESSORY_CATEGORIES_HIDDEN_FROM_SHOP = new Set<Accessory['category']>(['bracelets'])

export function isAccessoryShopVisible(accessory: Pick<Accessory, 'category'>): boolean {
  return !ACCESSORY_CATEGORIES_HIDDEN_FROM_SHOP.has(accessory.category)
}

/** Category tabs / nav — excludes launch-hidden families. */
export const visibleAccessoryCategories = accessoryCategories.filter(
  (category) =>
    category.id === 'all' ||
    !ACCESSORY_CATEGORIES_HIDDEN_FROM_SHOP.has(category.id as Accessory['category']),
)

export const accessories: Accessory[] = [
  // Necklaces — Al Ain line (variants: stone or style)
  {
    id: alAinOasisNecklaceId('malachite'),
    name: alAinOasisNecklaceName('Malachite'),
    nameAr: 'قلادة القوع روزيت: الملاكيت',
    category: 'necklaces',
    price: 1699,
    description:
      'Hand-strung malachite beads with signature clasp and extension chain. Deep Malachite Green tones.',
    descriptionAr:
      'خرز ملاكيت مطرّز يدوياً مع إغلاق توقيع وسلسلة تمديد. درجات خضراء عميقة.',
    images: [ACCESSORY_IMAGE_NECKLACE_MALACHITE, ACCESSORY_IMAGE_NECKLACE_MALACHITE_LIFESTYLE],
    materials: 'Natural malachite beads, 18K gold-plated clasp',
    materialsAr: 'خرز ملاكيت طبيعي، مشبك مطلي بالذهب 18 قيراط',
    colors: [{ name: 'Malachite Green', nameAr: 'أخضر ملاكيت', hex: '#1f7a5e' }],
    inStock: true,
    isNew: true,
  },
  {
    id: alAinOasisNecklaceId('tiger-eye'),
    name: alAinOasisNecklaceName('Tiger Eye'),
    nameAr: 'قلادة القوع روزيت: عين النمر',
    category: 'necklaces',
    price: 1499,
    description:
      'Warm brown tiger eye beads with subtle chatoyancy, finished with our signature closure.',
    descriptionAr:
      'خرز عين النمر بني دافئ بلمعان خفيف، مع إغلاق التوقيع.',
    images: [ACCESSORY_IMAGE_NECKLACE_TIGER_EYE],
    materials: 'Natural tiger eye beads, 18K gold-plated clasp',
    materialsAr: 'خرز عين النمر طبيعي، مشبك مطلي بالذهب 18 قيراط',
    colors: [{ name: 'Tiger Eye Brown', nameAr: 'بني عين النمر', hex: '#8B5A2B' }],
    inStock: true,
    isNew: true,
  },
  {
    id: alAinOasisNecklaceId('onyx'),
    name: alAinOasisNecklaceName('Onyx'),
    nameAr: 'قلادة القوع روزيت: الأونكس',
    category: 'necklaces',
    price: 1499,
    description:
      'Polished black onyx beads with warm brown undertones and a refined signature clasp.',
    descriptionAr:
      'خرز أونكس أسود مصقول بتحت لون بني دافئ وإغلاق التوقيع الراقي.',
    images: [ACCESSORY_IMAGE_NECKLACE_ONYX],
    materials: 'Natural black onyx beads, 18K gold-plated clasp',
    materialsAr: 'خرز أونكس أسود طبيعي، مشبك مطلي بالذهب 18 قيراط',
    colors: [
      { name: 'Black Onyx', nameAr: 'أونكس أسود', hex: '#1a1a1a' },
      { name: 'Warm Brown', nameAr: 'بني دافئ', hex: '#5c4033' }],
    inStock: true,
  },
  {
    id: alAinOasisNecklaceId('rose-quartz'),
    name: alAinOasisNecklaceName('Rose Quartz'),
    nameAr: 'قلادة القوع روزيت: الكوارتز الوردي',
    category: 'necklaces',
    price: 1599,
    description:
      'Soft pink rose quartz beads hand-knotted for a luminous, romantic line with our signature hardware.',
    descriptionAr:
      'خرز كوارتز وردي ناعم مربوط يدوياً لخط مضيء رومانسي مع قطع التوقيع.',
    images: [ACCESSORY_IMAGE_NECKLACE_ROSE_QUARTZ, ACCESSORY_IMAGE_NECKLACE_ROSE_QUARTZ_LIFESTYLE],
    materials: 'Natural rose quartz beads, 18K gold-plated clasp',
    materialsAr: 'خرز كوارتز وردي طبيعي، مشبك مطلي بالذهب 18 قيراط',
    colors: [{ name: 'Rose Quartz Pink', nameAr: 'وردي كوارتز', hex: '#f4b8c5' }],
    inStock: true,
    isNew: true,
  },
  {
    id: alAinOasisNecklaceId('sunstone'),
    name: alAinOasisNecklaceName('Sunstone'),
    nameAr: 'قلادة القوع روزيت: حجر الشمس',
    category: 'necklaces',
    price: 1599,
    description: 'Warm sunstone bead necklace with luminous peach-orange tones and refined signature closure.',
    descriptionAr: 'قلادة خرز حجر الشمس بدرجات خوخي برتقالي متوهجة مع إغلاق توقيع راقٍ.',
    images: [ACCESSORY_IMAGE_NECKLACE_SUNSTONE],
    materials: 'Natural sunstone beads, 18K gold-plated clasp',
    materialsAr: 'خرز حجر الشمس طبيعي، مشبك مطلي بالذهب 18 قيراط',
    colors: [
      { name: 'Sunstone', nameAr: 'حجر الشمس', hex: '#ea580c' }],
    inStock: true,
    isBestseller: true,
  },
  {
    id: alAinOasisNecklaceId('lapis-lazuli'),
    name: alAinOasisNecklaceName('Lapis Lazuli'),
    nameAr: 'قلادة القوع روزيت: اللازورد',
    category: 'necklaces',
    price: 1699,
    description: 'Rich lapis lazuli bead necklace with deep royal blue tones and elegant signature clasp.',
    descriptionAr: 'قلادة خرز لازورد بدرجات أزرق ملكي عميقة مع إغلاق توقيع أنيق.',
    images: [ACCESSORY_IMAGE_NECKLACE_LAPIS],
    materials: 'Natural lapis lazuli beads, 18K gold-plated clasp',
    materialsAr: 'خرز لازورد طبيعي، مشبك مطلي بالذهب 18 قيراط',
    colors: [
      { name: 'Lapis Lazuli', nameAr: 'لازورد', hex: '#1e40af' }],
    inStock: true,
  },

  // Earrings — Al Ain Oasis & Al Quaa lines
  {
    id: 'al-ain-oasis-earrings-malachite',
    name: alAinOasisEarringsName('Malachite'),
    nameAr: 'أقراط واحة العين — ملاكيت',
    category: 'earrings',
    price: 595,
    description:
      'Hand-assembled malachite earrings with signature Al Ain Rosette motifs hand-carved from natural Carnelian and gold-plated hematite accents.',
    descriptionAr: 'أقراط ملاكيت مطرّزة يدوياً مع روزيت العين من العقيق وتفاصيل هيمايت مطلية بالذهب.',
    images: [ACCESSORY_IMAGE_EARRINGS_MALACHITE],
    materials: 'Natural malachite, Carnelian, 18K gold-plated hematite',
    materialsAr: 'ملاكيت طبيعي، عقيق، هيمايت مطلي بالذهب 18 قيراط',
    colors: [{ name: 'Malachite Green', nameAr: 'أخضر ملاكيت', hex: '#1f7a5e' }],
    inStock: true,
    isNew: true,
  },
  {
    id: 'al-quaa-earrings-rose-quartz',
    name: 'Al Quaa Earrings - Rose Quartz',
    nameAr: 'أقراط القوع — كوارتز وردي',
    category: 'earrings',
    price: 595,
    description:
      'Hand-assembled rose quartz earrings with signature Al Ain Rosette motifs hand-carved from natural Carnelian and gold-plated hematite accents.',
    descriptionAr: 'أقراط كوارتز وردي مطرّزة يدوياً مع روزيت العين من العقيق وتفاصيل هيمايت مطلية بالذهب.',
    images: [ACCESSORY_IMAGE_EARRINGS_ROSE_QUARTZ],
    materials: 'Natural rose quartz, Carnelian, 18K gold-plated hematite',
    materialsAr: 'كوارتز وردي طبيعي، عقيق، هيمايت مطلي بالذهب 18 قيراط',
    colors: [{ name: 'Rose Quartz Pink', nameAr: 'وردي كوارتز', hex: '#f4b8c5' }],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 'al-ain-oasis-earrings-orange-jade',
    name: alAinOasisEarringsName('Orange Jade'),
    nameAr: 'أقراط واحة العين — يشم برتقالي',
    category: 'earrings',
    price: 595,
    description:
      'Hand-assembled orange jade earrings with signature Al Ain Rosette motifs hand-carved from natural Carnelian and gold-plated hematite accents.',
    descriptionAr: 'أقراط يشم برتقالي مطرّزة يدوياً مع روزيت العين من العقيق وتفاصيل هيمايت مطلية بالذهب.',
    images: [ACCESSORY_IMAGE_EARRINGS_ORANGE_JADE],
    materials: 'Natural orange jade, Carnelian, 18K gold-plated hematite',
    materialsAr: 'يشم برتقالي طبيعي، عقيق، هيمايت مطلي بالذهب 18 قيراط',
    colors: [{ name: 'Orange Jade', nameAr: 'يشم برتقالي', hex: '#ea580c' }],
    inStock: true,
  },
  {
    id: 'al-quaa-earrings-lapis-lazuli',
    name: alQuaaEarringsName('Lapis Lazuli'),
    nameAr: 'أقراط القوع — لازورد',
    category: 'earrings',
    price: 495,
    description:
      'Hand-assembled lapis lazuli earrings with signature Al Ain Rosette motifs hand-carved from natural Carnelian and gold-plated hematite accents.',
    descriptionAr: 'أقراط لازورد مطرّزة يدوياً مع روزيت العين من العقيق وتفاصيل هيمايت مطلية بالذهب.',
    images: [ACCESSORY_IMAGE_EARRINGS_HERO],
    materials: 'Natural lapis lazuli, Carnelian, 18K gold-plated hematite',
    materialsAr: 'لازورد طبيعي، عقيق، هيمايت مطلي بالذهب 18 قيراط',
    colors: [{ name: 'Lapis Lazuli', nameAr: 'لازورد', hex: '#1e40af' }],
    inStock: true,
  },

  // Bracelets
  {
    id: 'bracelet-pearl-chain',
    name: 'Pearl Chain Bracelet',
    nameAr: 'سوار سلسلة اللؤلؤ',
    category: 'bracelets',
    price: 295,
    description: 'Delicate chain bracelet with freshwater pearls. Custom sized to fit your wrist perfectly.',
    descriptionAr: 'سوار سلسلة رقيق مع لؤلؤ المياه العذبة. مقاس مخصص ليناسب معصمك تماماً.',
    images: [ACCESSORY_IMAGE_NECKLACE],
    materials: '18K Gold-plated, Freshwater Pearls',
    materialsAr: 'مطلي بالذهب 18 قيراط، لؤلؤ المياه العذبة',
    colors: [
      { name: 'Gold/White', nameAr: 'ذهبي/أبيض', hex: '#FFD700' }],
    inStock: true,
    isNew: true,
  },
  {
    id: 'bracelet-cuff-heritage',
    name: 'Heritage Cuff Bracelet',
    nameAr: 'سوار كاف تراثي',
    category: 'bracelets',
    price: 420,
    description: 'Statement cuff bracelet with Al Talli-inspired engravings. Adjustable sizing.',
    descriptionAr: 'سوار كاف مميز بنقوش مستوحاة من التلي. قابل للتعديل.',
    images: [ACCESSORY_IMAGE_NECKLACE],
    materials: 'Sterling Silver, 18K Gold Vermeil',
    materialsAr: 'فضة استرلينية، طلاء ذهب 18 قيراط',
    colors: [
      { name: 'Silver', nameAr: 'فضي', hex: '#C0C0C0' },
      { name: 'Gold', nameAr: 'ذهبي', hex: '#FFD700' }],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 'bracelet-bangle-set',
    name: 'Stacking Bangle Set',
    nameAr: 'طقم أساور متراصة',
    category: 'bracelets',
    price: 350,
    description: 'Set of 3 thin bangles perfect for stacking. Available in multiple sizes.',
    descriptionAr: 'طقم من 3 أساور رفيعة مثالية للتراص. متوفرة بمقاسات متعددة.',
    images: [ACCESSORY_IMAGE_NECKLACE],
    materials: '18K Gold-plated Brass',
    materialsAr: 'نحاس مطلي بالذهب 18 قيراط',
    colors: [
      { name: 'Gold', nameAr: 'ذهبي', hex: '#FFD700' },
      { name: 'Rose Gold', nameAr: 'ذهبي وردي', hex: '#B76E79' },
      { name: 'Silver', nameAr: 'فضي', hex: '#C0C0C0' }],
    inStock: true,
  },

  // Bag Charms — Al Ain Oasis I & II (Fuchsia Jade)
  {
    id: 'al-ain-oasis-i-bag-charm-fuchsia-jade',
    name: 'Al Ain Oasis I Bag Charm - Fuchsia Jade',
    nameAr: 'تعليقة حقيبة واحة العين الأولى — يشم فوشي',
    category: 'bag-strands',
    price: 249,
    description:
      'A natural stone bag charm with two cascading Fuchsia Jade strands and hand-carved Al Ain Rosettes, hand-assembled in Abu Dhabi.',
    descriptionAr:
      'تعليقة حقيبة واحة العين الأولى مصنوعة يدوياً من اليشم الفوشي الطبيعي، مُصمّمة للحقائب ومساء الخروج.',
    images: [ACCESSORY_IMAGE_BAG_CHARM_I],
    materials: 'Natural Fuchsia Jade, hand-carved Al Ain Rosettes, gold-plated faceted hematite',
    materialsAr: 'يشم فوشي طبيعي، روزيت العين المنحوتة يدوياً، هيمايت مطلي بالذهب',
    colors: [{ name: 'Fuchsia Jade', nameAr: 'يشم فوشي', hex: '#c026d3' }],
    inStock: true,
    isNew: true,
  },
  {
    id: 'al-ain-oasis-ii-bag-charm-fuchsia-jade',
    name: 'Al Ain Oasis II Bag Charm - Fuchsia Jade',
    nameAr: 'تعليقة حقيبة واحة العين الثانية — يشم فوشي',
    category: 'bag-strands',
    price: 249,
    description:
      'A handcrafted natural stone bag charm with three cascading Fuchsia Jade strands and hand-carved Al Ain Rosettes, hand-assembled in Abu Dhabi.',
    descriptionAr:
      'تعليقة حقيبة واحة العين الثانية مصنوعة يدوياً من اليشم الفوشي الطبيعي، مُصمّمة للحقائب ومساء الخروج.',
    images: [ACCESSORY_IMAGE_BAG_CHARM_II],
    materials: 'Natural Fuchsia Jade, hand-carved Al Ain Rosettes, gold-plated faceted hematite',
    materialsAr: 'يشم فوشي طبيعي، روزيت العين المنحوتة يدوياً، هيمايت مطلي بالذهب',
    colors: [{ name: 'Fuchsia Jade', nameAr: 'يشم فوشي', hex: '#c026d3' }],
    inStock: true,
    isNew: true,
  },

  // Al Quaa Phone Charms — natural stone line (7 products)
  {
    id: alQuaaPhoneCharmId('fuchsia-jade'),
    name: alQuaaPhoneCharmName('Fuchsia Jade'),
    nameAr: 'تعليقة هاتف روزيت العين — يشم فوشي',
    category: 'phone-strands',
    price: 399,
    description: 'Hand-assembled natural stone phone charm with Carnelian Al Ain Rosettes.',
    descriptionAr: 'تعليقة هاتف من الأحجار الطبيعية مع روزيت العين من العقيق.',
    images: [ACCESSORY_IMAGE_PHONE_CHARM_PINK_JADE],
    materials: 'Fuchsia Jade, Carnelian, gold-plated hematite',
    materialsAr: 'يشم فوشي، عقيق، هيمايت مطلي بالذهب',
    colors: [{ name: 'Fuchsia Jade', nameAr: 'يشم فوشي', hex: '#c026d3' }],
    inStock: true,
    isNew: true,
  },
  {
    id: alQuaaPhoneCharmId('orange-jade'),
    name: alQuaaPhoneCharmName('Orange Jade'),
    nameAr: 'تعليقة هاتف روزيت العين — يشم برتقالي',
    category: 'phone-strands',
    price: 399,
    description: 'Hand-assembled natural stone phone charm with Carnelian Al Ain Rosettes.',
    descriptionAr: 'تعليقة هاتف من الأحجار الطبيعية مع روزيت العين من العقيق.',
    images: [ACCESSORY_IMAGE_PHONE_CHARM_ORANGE_JADE],
    materials: 'Orange Jade, Carnelian, gold-plated hematite',
    materialsAr: 'يشم برتقالي، عقيق، هيمايت مطلي بالذهب',
    colors: [{ name: 'Orange Jade', nameAr: 'يشم برتقالي', hex: '#ea580c' }],
    inStock: true,
  },
  {
    id: alQuaaPhoneCharmId('onyx'),
    name: alQuaaPhoneCharmName('Onyx'),
    nameAr: 'تعليقة هاتف روزيت العين — أونكس',
    category: 'phone-strands',
    price: 475,
    description: 'Hand-assembled natural stone phone charm with Carnelian Al Ain Rosettes.',
    descriptionAr: 'تعليقة هاتف من الأحجار الطبيعية مع روزيت العين من العقيق.',
    images: [ACCESSORY_IMAGE_PHONE_CHARM_ONYX],
    materials: 'Onyx, Carnelian, gold-plated hematite',
    materialsAr: 'أونكس، عقيق، هيمايت مطلي بالذهب',
    colors: [{ name: 'Onyx', nameAr: 'أونكس', hex: '#1a1a1a' }],
    inStock: true,
    isBestseller: true,
  },
  {
    id: alQuaaPhoneCharmId('tiger-eye'),
    name: alQuaaPhoneCharmName('Tiger Eye'),
    nameAr: 'تعليقة هاتف روزيت العين — عين النمر',
    category: 'phone-strands',
    price: 475,
    description: 'Hand-assembled natural stone phone charm with Carnelian Al Ain Rosettes.',
    descriptionAr: 'تعليقة هاتف من الأحجار الطبيعية مع روزيت العين من العقيق.',
    images: [ACCESSORY_IMAGE_PHONE_CHARM_TIGER_EYE],
    materials: 'Tiger Eye, Carnelian, gold-plated hematite',
    materialsAr: 'عين النمر، عقيق، هيمايت مطلي بالذهب',
    colors: [{ name: 'Tiger Eye', nameAr: 'عين النمر', hex: '#8B5A2B' }],
    inStock: true,
  },
  {
    id: alQuaaPhoneCharmId('malachite'),
    name: alQuaaPhoneCharmName('Malachite'),
    nameAr: 'تعليقة هاتف روزيت العين — ملاكيت',
    category: 'phone-strands',
    price: 525,
    description: 'Hand-assembled natural stone phone charm with Carnelian Al Ain Rosettes.',
    descriptionAr: 'تعليقة هاتف من الأحجار الطبيعية مع روزيت العين من العقيق.',
    images: [ACCESSORY_IMAGE_PHONE_CHARM_MALACHITE],
    materials: 'Malachite, Carnelian, gold-plated hematite',
    materialsAr: 'ملاكيت، عقيق، هيمايت مطلي بالذهب',
    colors: [{ name: 'Malachite', nameAr: 'ملاكيت', hex: '#0d9488' }],
    inStock: true,
  },
  {
    id: alQuaaPhoneCharmId('lapis-lazuli'),
    name: alQuaaPhoneCharmName('Lapis Lazuli'),
    nameAr: 'تعليقة هاتف روزيت العين — لازورد',
    category: 'phone-strands',
    price: 525,
    description: 'Hand-assembled natural stone phone charm with Carnelian Al Ain Rosettes.',
    descriptionAr: 'تعليقة هاتف من الأحجار الطبيعية مع روزيت العين من العقيق.',
    images: [ACCESSORY_IMAGE_PHONE_CHARM_LAPIS],
    materials: 'Lapis Lazuli, Carnelian, gold-plated hematite',
    materialsAr: 'لازورد، عقيق، هيمايت مطلي بالذهب',
    colors: [{ name: 'Lapis Lazuli', nameAr: 'لازورد', hex: '#1e3a8a' }],
    inStock: true,
  },
  {
    id: alQuaaPhoneCharmId('rose-quartz'),
    name: alQuaaPhoneCharmName('Rose Quartz'),
    nameAr: 'تعليقة هاتف روزيت العين — كوارتز وردي',
    category: 'phone-strands',
    price: 475,
    description: 'Hand-assembled natural stone phone charm with Carnelian Al Ain Rosettes.',
    descriptionAr: 'تعليقة هاتف من الأحجار الطبيعية مع روزيت العين من العقيق.',
    images: [ACCESSORY_IMAGE_PHONE_CHARM_ROSE_QUARTZ],
    materials: 'Rose Quartz, Carnelian, gold-plated hematite',
    materialsAr: 'كوارتز وردي، عقيق، هيمايت مطلي بالذهب',
    colors: [{ name: 'Rose Quartz', nameAr: 'كوارتز وردي', hex: '#f9a8d4' }],
    inStock: true,
  },

  // Abaya strands — natural stone line (10 products; stone-specific PDPs)
  {
    id: 'signature-strand-onyx',
    name: 'Onyx Strand',
    nameAr: 'أونكس حجر طبيعي',
    category: 'signature-strands',
    price: 299,
    description:
      'Natural black onyx abaya strand with secure clip attachment for draping along the edge or sleeve.',
    descriptionAr:
      'تعليقة عباءة من أونكس أسود طبيعي مع مشبك آمن للتعليق على الحافة أو الكم.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_ONYX],
    materials: 'Natural onyx, 18K gold-plated findings',
    materialsAr: 'أونكس طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Black Onyx', nameAr: 'أونكس أسود', hex: '#1a1a1a' }],
    inStock: true,
  },
  {
    id: 'signature-strand-tiger-eye',
    name: 'Tiger Eye Strand',
    nameAr: 'عين النمر حجر طبيعي',
    category: 'signature-strands',
    price: 299,
    description:
      'Warm tiger eye beads with subtle chatoyancy; designed for movement when styled on the abaya.',
    descriptionAr:
      'خرز عين النمر الدافئ بلمعان خفيف؛ مصمم للحركة عند تنسيقه مع العباءة.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_TIGER_EYE],
    materials: 'Natural tiger eye, 18K gold-plated findings',
    materialsAr: 'عين النمر طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Tiger Eye Brown', nameAr: 'بني عين النمر', hex: '#8B5A2B' }],
    inStock: true,
  },
  {
    id: 'signature-strand-sunstone',
    name: 'Sunstone Strand',
    nameAr: 'ستراند حجر الشمس',
    category: 'signature-strands',
    price: 599,
    description:
      'Warm sunstone beads with a peach-orange glow — a luminous accent along the abaya silhouette.',
    descriptionAr:
      'خرز حجر الشمس الدافئ بلون خوخي برتقالي — لمسة مضيئة على خط العباءة.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_SUNSTONE],
    materials: 'Natural sunstone, 18K gold-plated findings',
    materialsAr: 'حجر الشمس طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Sunstone', nameAr: 'حجر الشمس', hex: '#ea580c' }],
    inStock: true,
  },
  {
    id: 'signature-strand-fuchsia-jade',
    name: 'Fuchsia Jade Strand',
    nameAr: 'اليشم الفوشي حجر طبيعي',
    category: 'signature-strands',
    price: 249,
    description:
      'Fuchsia jade strand for a bold jewel-toned highlight on neutral abayas.',
    descriptionAr:
      'سلسلة يشم فوشي لتألق قوي على العباءات المحايدة.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_FUCHSIA_JADE],
    materials: 'Natural jade, 18K gold-plated findings',
    materialsAr: 'يشم طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Fuchsia Jade', nameAr: 'يشم فوشي', hex: '#c026d3' }],
    inStock: true,
  },
  {
    id: 'signature-strand-orange-jade',
    name: 'Orange Jade Strand',
    nameAr: 'اليشم البرتقالي حجر طبيعي',
    category: 'signature-strands',
    price: 249,
    description:
      'Orange jade strand for a warm, luminous highlight on neutral abayas.',
    descriptionAr:
      'سلسلة يشم برتقالي للمسة دافئة ومضيئة على العباءات المحايدة.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_ORANGE_JADE],
    materials: 'Natural jade, 18K gold-plated findings',
    materialsAr: 'يشم طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Orange Jade', nameAr: 'يشم برتقالي', hex: '#ea580c' }],
    inStock: true,
    isNew: true,
  },
  {
    id: 'signature-strand-blue-aventurine',
    name: 'Blue Aventurine Strand',
    nameAr: 'أفنتورين أزرق حجر طبيعي',
    category: 'signature-strands',
    price: 530,
    description:
      'Blue aventurine beads with gentle sparkle — a cool contrast on deep or black fabric.',
    descriptionAr:
      'خرز أفنتورين أزرق بلمعان خفيف، تباين بارد على الأقمشة الداكنة.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_AVENTURINE],
    materials: 'Natural blue aventurine, 18K gold-plated findings',
    materialsAr: 'أفنتورين أزرق طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Blue Aventurine', nameAr: 'أفنتورين أزرق', hex: '#2563eb' }],
    inStock: true,
  },
  {
    id: 'signature-strand-rose-quartz',
    name: 'Rose Quartz Strand',
    nameAr: 'كوارتز وردي حجر طبيعي',
    category: 'signature-strands',
    price: 399,
    description:
      'Soft rose quartz with a luminous, romantic line along the abaya edge.',
    descriptionAr:
      'كوارتز وردي ناعم بلمعة رومانسية على حافة العباءة.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_ROSE_QUARTZ],
    materials: 'Natural rose quartz, 18K gold-plated findings',
    materialsAr: 'كوارتز وردي طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Rose Quartz', nameAr: 'كوارتز وردي', hex: '#f4b8c5' }],
    inStock: true,
  },
  {
    id: 'signature-strand-malachite',
    name: 'Malachite Strand',
    nameAr: 'ملاكيت حجر طبيعي',
    category: 'signature-strands',
    price: 599,
    description:
      'Deep malachite green with natural banding — a striking signature accent.',
    descriptionAr:
      'ملاكيت أخضر عميق بخطوط طبيعية، لمسة توقيع مميزة.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_MALACHITE],
    materials: 'Natural malachite, 18K gold-plated findings',
    materialsAr: 'ملاكيت طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Malachite Green', nameAr: 'أخضر ملاكيت', hex: '#1f7a5e' }],
    inStock: true,
  },
  {
    id: 'signature-strand-lapis-lazuli',
    name: 'Lapis Lazuli Strand',
    nameAr: 'لازورد حجر طبيعي',
    category: 'signature-strands',
    price: 599,
    description:
      'Rich lapis lazuli with golden pyrite flecks; an elevated jewel tone for evening abayas.',
    descriptionAr:
      'لازورد غني ببقع البيريت الذهبية؛ لون فاخر لمساء العباءة.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_LAPIS],
    materials: 'Natural lapis lazuli, 18K gold-plated findings',
    materialsAr: 'لازورد طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Lapis Lazuli', nameAr: 'لازورد', hex: '#1e40af' }],
    inStock: true,
  },
  {
    id: 'signature-strand-amethyst-hearts',
    name: 'Amethyst Hearts Strand',
    nameAr: 'قلوب جمشت حجر طبيعي',
    category: 'signature-strands',
    price: 720,
    description:
      'Heart-cut amethyst beads — limited edition release with clip attachment.',
    descriptionAr:
      'خرز جمشت على شكل قلب، إصدار محدود مع مشبك تثبيت.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_AMETHYST],
    materials: 'Natural amethyst, 18K gold-plated findings',
    materialsAr: 'جمشت طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Amethyst', nameAr: 'جمشت', hex: '#9333ea' }],
    inStock: true,
    isLimitedEdition: true,
  },
  {
    id: 'signature-strand-jade-hearts',
    name: 'Jade Hearts Strand',
    nameAr: 'قلوب اليشم حجر طبيعي',
    category: 'signature-strands',
    price: 750,
    description:
      'Heart-shaped jade beads — limited edition; serene green movement on the abaya line.',
    descriptionAr:
      'خرز يشم على شكل قلب، إصدار محدود؛ حركة خضراء هادئة على خط العباءة.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_GREEN_JADE],
    materials: 'Natural jade, 18K gold-plated findings',
    materialsAr: 'يشم طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Jade Green', nameAr: 'يشم أخضر', hex: '#059669' }],
    inStock: true,
    isLimitedEdition: true,
  },
]
