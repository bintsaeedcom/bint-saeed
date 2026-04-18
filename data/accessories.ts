/**
 * Product shots from `public/Webshop pictures/accessoiries/`
 * (URL-encoded spaces; subfolders: `necklaces/`, `abaya charms/`, `earrings/`, `bag charm/`, `phone charm/`.)
 */
const A = '/Webshop%20pictures/accessoiries'

export const ACCESSORY_IMAGE_NECKLACE = `${A}/necklaces/malachite-necklace.PNG`
export const ACCESSORY_IMAGE_NECKLACE_MALACHITE = `${A}/necklaces/malachite-necklace.PNG`
export const ACCESSORY_IMAGE_NECKLACE_ROSE_QUARTZ = `${A}/necklaces/rose-quartz-necklace.PNG`
export const ACCESSORY_IMAGE_PHONE_CHARM = `${A}/phone%20charm/phone%20charm.png`
/** Category hero when no per-stone abaya shot exists. */
export const ACCESSORY_IMAGE_ABAYA_CHARMS_HERO = `${A}/abaya%20charms.JPG`

const ABAYA = `${A}/abaya%20charms`
export const ACCESSORY_IMAGE_ABAYA_CHARM_ONYX = `${ABAYA}/bint-saeed-onyx-abaya-charm.PNG`
export const ACCESSORY_IMAGE_ABAYA_CHARM_TIGER_EYE = `${ABAYA}/bint-saeed-tigereye-abaya-charm.PNG`
export const ACCESSORY_IMAGE_ABAYA_CHARM_ORANGE_JADE = `${ABAYA}/bint-saeed-orange-colored-jade-abaya-charm.PNG`
export const ACCESSORY_IMAGE_ABAYA_CHARM_AVENTURINE = `${ABAYA}/bint-saeed-aventurine-abaya-charm.PNG`
export const ACCESSORY_IMAGE_ABAYA_CHARM_AMETHYST = `${ABAYA}/bint-saeed-amathys-abaya-charm.PNG`
export const ACCESSORY_IMAGE_ABAYA_CHARM_GREEN_JADE = `${ABAYA}/bint-saeed-green-jade-abaya-charm.PNG`

export const ACCESSORY_IMAGE_EARRINGS_HERO = `${A}/earrings/5AEC9940-AD10-4C6A-9410-4DCB5BCB5ACD.PNG`
export const ACCESSORY_IMAGE_BAG_CHARM = `${A}/bag%20charm/9D8CE389-54D5-4235-B71B-A9BB92AC97EA.PNG`

export interface Accessory {
  id: string
  name: string
  nameAr: string
  category:
    | 'necklaces'
    | 'earrings'
    | 'bracelets'
    | 'bag-charms'
    | 'phone-charms'
    | 'abaya-charms'
  price: number
  description: string
  descriptionAr: string
  images: string[]
  materials: string
  materialsAr: string
  colors: { name: string; nameAr: string; hex: string }[]
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
    id: 'abaya-charms',
    name: 'Abaya Charms',
    nameAr: 'تعليقات العباءة',
    icon: '✺',
    description: 'Stone charms designed for abaya draping and edges',
    descriptionAr: 'تعليقات بالأحجار الطبيعية للعباءة والحافة',
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
    id: 'bag-charms',
    name: 'Bag Charms',
    nameAr: 'تعليقات الحقائب',
    icon: '❖',
    description: 'Luxurious charms for your favorite bags',
    descriptionAr: 'تعليقات فاخرة لحقائبك المفضلة',
  },
  {
    id: 'phone-charms',
    name: 'Phone Charms',
    nameAr: 'تعليقات الهاتف',
    icon: '✧',
    description: 'Stylish phone accessories',
    descriptionAr: 'إكسسوارات هاتف أنيقة',
  },
]

export const accessories: Accessory[] = [
  // Necklaces — Al Quaa line (variants: stone or style)
  {
    id: 'signature-malachite-necklace',
    name: 'Al Quaa Necklace — Malachite',
    nameAr: 'قلادة القوع — الملاكيت',
    category: 'necklaces',
    price: 1650,
    description:
      'Hand-strung malachite beads with signature clasp and extension chain. Deep Malachite Green tones.',
    descriptionAr:
      'خرز ملاكيت مطرّز يدوياً مع إغلاق توقيع وسلسلة تمديد. درجات خضراء عميقة.',
    images: [ACCESSORY_IMAGE_NECKLACE_MALACHITE],
    materials: 'Natural malachite beads, 18K gold-plated clasp',
    materialsAr: 'خرز ملاكيت طبيعي، مشبك مطلي بالذهب 18 قيراط',
    colors: [{ name: 'Malachite Green', nameAr: 'أخضر ملاكيت', hex: '#1f7a5e' }],
    inStock: true,
    isNew: true,
  },
  {
    id: 'signature-tiger-eye-necklace',
    name: 'Al Quaa Necklace — Tiger Eye',
    nameAr: 'قلادة القوع — عين النمر',
    category: 'necklaces',
    price: 1480,
    description:
      'Warm brown tiger eye beads with subtle chatoyancy, finished with our signature closure.',
    descriptionAr:
      'خرز عين النمر بني دافئ بلمعان خفيف، مع إغلاق التوقيع.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_TIGER_EYE],
    materials: 'Natural tiger eye beads, 18K gold-plated clasp',
    materialsAr: 'خرز عين النمر طبيعي، مشبك مطلي بالذهب 18 قيراط',
    colors: [{ name: 'Tiger Eye Brown', nameAr: 'بني عين النمر', hex: '#8B5A2B' }],
    inStock: true,
    isNew: true,
  },
  {
    id: 'signature-onyx-necklace',
    name: 'Al Quaa Necklace — Onyx',
    nameAr: 'قلادة القوع — الأونكس',
    category: 'necklaces',
    price: 1590,
    description:
      'Polished black onyx beads with warm brown undertones and a refined signature clasp.',
    descriptionAr:
      'خرز أونكس أسود مصقول بتحت لون بني دافئ وإغلاق التوقيع الراقي.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_ONYX],
    materials: 'Natural black onyx beads, 18K gold-plated clasp',
    materialsAr: 'خرز أونكس أسود طبيعي، مشبك مطلي بالذهب 18 قيراط',
    colors: [
      { name: 'Black Onyx', nameAr: 'أونكس أسود', hex: '#1a1a1a' },
      { name: 'Warm Brown', nameAr: 'بني دافئ', hex: '#5c4033' }],
    inStock: true,
  },
  {
    id: 'signature-rose-quartz-necklace',
    name: 'Al Quaa Necklace — Rose Quartz',
    nameAr: 'قلادة القوع — الكوارتز الوردي',
    category: 'necklaces',
    price: 1740,
    description:
      'Soft pink rose quartz beads hand-knotted for a luminous, romantic line with our signature hardware.',
    descriptionAr:
      'خرز كوارتز وردي ناعم مربوط يدوياً لخط مضيء رومانسي مع قطع التوقيع.',
    images: [ACCESSORY_IMAGE_NECKLACE_ROSE_QUARTZ],
    materials: 'Natural rose quartz beads, 18K gold-plated clasp',
    materialsAr: 'خرز كوارتز وردي طبيعي، مشبك مطلي بالذهب 18 قيراط',
    colors: [{ name: 'Rose Quartz Pink', nameAr: 'وردي كوارتز', hex: '#f4b8c5' }],
    inStock: true,
    isNew: true,
  },
  {
    id: 'necklace-layered-gold',
    name: 'Al Quaa Necklace — Layered Gold',
    nameAr: 'قلادة القوع — ذهبي متعدد الطبقات',
    category: 'necklaces',
    price: 380,
    description: 'Multi-layered gold chain necklace with delicate pendants.',
    descriptionAr: 'قلادة سلسلة ذهبية متعددة الطبقات مع تعليقات رقيقة.',
    images: [ACCESSORY_IMAGE_NECKLACE],
    materials: '18K Gold-plated Brass',
    materialsAr: 'نحاس مطلي بالذهب 18 قيراط',
    colors: [
      { name: 'Gold', nameAr: 'ذهبي', hex: '#FFD700' },
      { name: 'Rose Gold', nameAr: 'ذهبي وردي', hex: '#B76E79' }],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 'necklace-statement-pendant',
    name: 'Al Quaa Necklace — Heritage Pendant',
    nameAr: 'قلادة القوع — التعليقة التراثية',
    category: 'necklaces',
    price: 520,
    description: 'Bold pendant necklace featuring traditional Emirati patterns.',
    descriptionAr: 'قلادة بتعليقة جريئة تتميز بأنماط إماراتية تقليدية.',
    images: [ACCESSORY_IMAGE_NECKLACE],
    materials: 'Sterling Silver, 18K Gold Vermeil',
    materialsAr: 'فضة استرلينية، طلاء ذهب 18 قيراط',
    colors: [
      { name: 'Silver/Gold', nameAr: 'فضي/ذهبي', hex: '#C0C0C0' }],
    inStock: true,
  },

  // Earrings
  {
    id: 'earrings-pearl-drop',
    name: 'Pearl Drop Earrings',
    nameAr: 'أقراط لؤلؤ متدلية',
    category: 'earrings',
    price: 280,
    description: 'Classic pearl drop earrings with gold-plated hooks.',
    descriptionAr: 'أقراط لؤلؤ متدلية كلاسيكية مع خطافات مطلية بالذهب.',
    images: [ACCESSORY_IMAGE_EARRINGS_HERO],
    materials: '18K Gold-plated, Freshwater Pearls',
    materialsAr: 'مطلي بالذهب 18 قيراط، لؤلؤ المياه العذبة',
    colors: [
      { name: 'Gold/White', nameAr: 'ذهبي/أبيض', hex: '#FFD700' }],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 'earrings-geometric',
    name: 'Geometric Studs',
    nameAr: 'أقراط هندسية',
    category: 'earrings',
    price: 195,
    description: 'Modern geometric stud earrings inspired by Islamic art.',
    descriptionAr: 'أقراط هندسية عصرية مستوحاة من الفن الإسلامي.',
    images: [ACCESSORY_IMAGE_EARRINGS_HERO],
    materials: 'Sterling Silver',
    materialsAr: 'فضة استرلينية',
    colors: [
      { name: 'Silver', nameAr: 'فضي', hex: '#C0C0C0' },
      { name: 'Gold', nameAr: 'ذهبي', hex: '#FFD700' }],
    inStock: true,
    isNew: true,
  },
  {
    id: 'earrings-hoops',
    name: 'Textured Gold Hoops',
    nameAr: 'أقراط حلقية ذهبية محكمة',
    category: 'earrings',
    price: 320,
    description: 'Medium-sized hoops with hammered texture finish.',
    descriptionAr: 'أقراط حلقية متوسطة الحجم بتشطيب محكم.',
    images: [ACCESSORY_IMAGE_EARRINGS_HERO],
    materials: '18K Gold-plated Brass',
    materialsAr: 'نحاس مطلي بالذهب 18 قيراط',
    colors: [
      { name: 'Gold', nameAr: 'ذهبي', hex: '#FFD700' }],
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

  // Bag Charms
  {
    id: 'bag-charm-tassel',
    name: 'Silk Tassel Charm',
    nameAr: 'تعليقة شرابة حريرية',
    category: 'bag-charms',
    price: 175,
    description: 'Luxurious silk tassel bag charm with gold-plated hardware.',
    descriptionAr: 'تعليقة حقيبة شرابة حريرية فاخرة مع معدن مطلي بالذهب.',
    images: [ACCESSORY_IMAGE_BAG_CHARM],
    materials: 'Silk, 18K Gold-plated Hardware',
    materialsAr: 'حرير، معدن مطلي بالذهب 18 قيراط',
    colors: [
      { name: 'Black', nameAr: 'أسود', hex: '#000000' },
      { name: 'Burgundy', nameAr: 'عنابي', hex: '#3b0014' },
      { name: 'Cream', nameAr: 'كريمي', hex: '#FFFDD0' },
      { name: 'Navy', nameAr: 'كحلي', hex: '#000080' }],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 'bag-charm-pearl-cluster',
    name: 'Pearl Cluster Charm',
    nameAr: 'تعليقة عنقود اللؤلؤ',
    category: 'bag-charms',
    price: 220,
    description: 'Elegant pearl cluster charm to elevate any handbag.',
    descriptionAr: 'تعليقة عنقود لؤلؤ أنيقة لرفع مستوى أي حقيبة يد.',
    images: [ACCESSORY_IMAGE_BAG_CHARM],
    materials: 'Freshwater Pearls, 18K Gold-plated',
    materialsAr: 'لؤلؤ المياه العذبة، مطلي بالذهب 18 قيراط',
    colors: [
      { name: 'Gold/White', nameAr: 'ذهبي/أبيض', hex: '#FFD700' }],
    inStock: true,
    isNew: true,
  },
  {
    id: 'bag-charm-letter',
    name: 'Monogram Letter Charm',
    nameAr: 'تعليقة حرف مونوغرام',
    category: 'bag-charms',
    price: 195,
    description: 'Personalized letter charm. Available in all letters A-Z.',
    descriptionAr: 'تعليقة حرف شخصية. متوفرة بجميع الحروف A-Z.',
    images: [ACCESSORY_IMAGE_BAG_CHARM],
    materials: '18K Gold Vermeil',
    materialsAr: 'طلاء ذهب 18 قيراط',
    colors: [
      { name: 'Gold', nameAr: 'ذهبي', hex: '#FFD700' }],
    inStock: true,
  },
  {
    id: 'bag-charm-bint',
    name: 'Bag Charm',
    nameAr: 'تعليقة حقيبة',
    category: 'bag-charms',
    price: 175,
    description: 'Clip-on bag charm for handbags and evening clutches.',
    descriptionAr: 'تعليقة حقيبة بحلقة تعليق للحقائب ومساء الخروج.',
    images: [ACCESSORY_IMAGE_BAG_CHARM],
    materials: 'Gold-plated hardware, enamel',
    materialsAr: 'معدن مطلي بالذهب، إينامل',
    colors: [
      { name: 'Gold', nameAr: 'ذهبي', hex: '#FFD700' },
      { name: 'Rose Gold', nameAr: 'ذهبي وردي', hex: '#B76E79' }],
    inStock: true,
  },

  // Phone Charms
  {
    id: 'phone-charm-pearl-strap',
    name: 'Pearl Phone Strap',
    nameAr: 'حزام هاتف لؤلؤي',
    category: 'phone-charms',
    price: 145,
    description: 'Elegant pearl phone strap with universal attachment.',
    descriptionAr: 'حزام هاتف لؤلؤي أنيق مع مشبك عالمي.',
    images: [ACCESSORY_IMAGE_PHONE_CHARM],
    materials: 'Freshwater Pearls, Nylon Cord',
    materialsAr: 'لؤلؤ المياه العذبة، حبل نايلون',
    colors: [
      { name: 'White', nameAr: 'أبيض', hex: '#FFFFFF' },
      { name: 'Pink', nameAr: 'وردي', hex: '#FFC0CB' }],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 'phone-charm-beaded',
    name: 'Beaded Phone Chain',
    nameAr: 'سلسلة هاتف بالخرز',
    category: 'phone-charms',
    price: 125,
    description: 'Colorful beaded phone chain for a playful touch.',
    descriptionAr: 'سلسلة هاتف ملونة بالخرز للمسة مرحة.',
    images: [ACCESSORY_IMAGE_PHONE_CHARM],
    materials: 'Glass Beads, Nylon Cord',
    materialsAr: 'خرز زجاجي، حبل نايلون',
    colors: [
      { name: 'Multi', nameAr: 'متعدد', hex: '#FF69B4' },
      { name: 'Neutral', nameAr: 'محايد', hex: '#D4BDAC' }],
    inStock: true,
    isNew: true,
  },
  {
    id: 'phone-charm-tassel',
    name: 'Mini Tassel Phone Charm',
    nameAr: 'تعليقة هاتف شرابة صغيرة',
    category: 'phone-charms',
    price: 95,
    description: 'Cute mini tassel charm for your phone case.',
    descriptionAr: 'تعليقة شرابة صغيرة لطيفة لغلاف هاتفك.',
    images: [ACCESSORY_IMAGE_PHONE_CHARM],
    materials: 'Silk, Gold-plated Hardware',
    materialsAr: 'حرير، معدن مطلي بالذهب',
    colors: [
      { name: 'Black', nameAr: 'أسود', hex: '#000000' },
      { name: 'Burgundy', nameAr: 'عنابي', hex: '#3b0014' },
      { name: 'Blush', nameAr: 'وردي فاتح', hex: '#DE5D83' }],
    inStock: true,
  },
  {
    id: 'phone-charm-bint',
    name: 'Phone Charm',
    nameAr: 'تعليقة هاتف',
    category: 'phone-charms',
    price: 145,
    description: 'Phone charm with universal attachment for cases and straps.',
    descriptionAr: 'تعليقة هاتف مع تثبيت متوافق مع الأغطية والأحزمة.',
    images: [ACCESSORY_IMAGE_PHONE_CHARM],
    materials: 'Nylon cord, gold-plated hardware',
    materialsAr: 'حبل نايلون، معدن مطلي بالذهب',
    colors: [
      { name: 'Gold', nameAr: 'ذهبي', hex: '#FFD700' },
      { name: 'Black', nameAr: 'أسود', hex: '#1a1a1a' }],
    inStock: true,
  },

  // Abaya charms — natural stone line (10 products; stone-specific PDPs)
  {
    id: 'abaya-charm-onyx-natural-stone',
    name: 'Onyx Natural Stone',
    nameAr: 'أونكس حجر طبيعي',
    category: 'abaya-charms',
    price: 400,
    description:
      'Natural black onyx abaya charm with secure clip attachment for draping along the edge or sleeve.',
    descriptionAr:
      'تعليقة عباءة من أونكس أسود طبيعي مع مشبك آمن للتعليق على الحافة أو الكم.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_ONYX],
    materials: 'Natural onyx, 18K gold-plated findings',
    materialsAr: 'أونكس طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Black Onyx', nameAr: 'أونكس أسود', hex: '#1a1a1a' }],
    inStock: true,
  },
  {
    id: 'abaya-charm-tiger-eye-natural-stone',
    name: 'Tiger Eye Natural Stone',
    nameAr: 'عين النمر حجر طبيعي',
    category: 'abaya-charms',
    price: 430,
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
    id: 'abaya-charm-orange-jade-natural-stone',
    name: 'Orange Colored Jade Natural Stone',
    nameAr: 'اليشم البرتقالي حجر طبيعي',
    category: 'abaya-charms',
    price: 465,
    description:
      'Orange-toned jade beads for a vivid accent along the abaya silhouette.',
    descriptionAr:
      'خرز يشم بلون برتقالي نقي كلون مميز على خط العباءة.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_ORANGE_JADE],
    materials: 'Natural jade, 18K gold-plated findings',
    materialsAr: 'يشم طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Orange Jade', nameAr: 'يشم برتقالي', hex: '#ea580c' }],
    inStock: true,
  },
  {
    id: 'abaya-charm-fuchsia-jade-natural-stone',
    name: 'Fuchsia Colored Jade Natural Stone',
    nameAr: 'اليشم الفوشي حجر طبيعي',
    category: 'abaya-charms',
    price: 500,
    description:
      'Fuchsia jade strand for a bold jewel-toned highlight on neutral abayas.',
    descriptionAr:
      'سلسلة يشم فوشي لتألق قوي على العباءات المحايدة.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARMS_HERO],
    materials: 'Natural jade, 18K gold-plated findings',
    materialsAr: 'يشم طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Fuchsia Jade', nameAr: 'يشم فوشي', hex: '#c026d3' }],
    inStock: true,
  },
  {
    id: 'abaya-charm-blue-aventurine-natural-stone',
    name: 'Blue Aventurine Natural Stone',
    nameAr: 'أفنتورين أزرق حجر طبيعي',
    category: 'abaya-charms',
    price: 530,
    description:
      'Blue aventurine beads with gentle sparkle — a cool contrast on deep or black fabric.',
    descriptionAr:
      'خرز أفنتورين أزرق بلمعان خفيف — تباين بارد على الأقمشة الداكنة.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_AVENTURINE],
    materials: 'Natural blue aventurine, 18K gold-plated findings',
    materialsAr: 'أفنتورين أزرق طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Blue Aventurine', nameAr: 'أفنتورين أزرق', hex: '#2563eb' }],
    inStock: true,
  },
  {
    id: 'abaya-charm-rose-quartz-natural-stone',
    name: 'Rose Quartz Natural Stone',
    nameAr: 'كوارتز وردي حجر طبيعي',
    category: 'abaya-charms',
    price: 565,
    description:
      'Soft rose quartz with a luminous, romantic line along the abaya edge.',
    descriptionAr:
      'كوارتز وردي ناعم بلمعة رومانسية على حافة العباءة.',
    images: [ACCESSORY_IMAGE_NECKLACE_ROSE_QUARTZ],
    materials: 'Natural rose quartz, 18K gold-plated findings',
    materialsAr: 'كوارتز وردي طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Rose Quartz', nameAr: 'كوارتز وردي', hex: '#f4b8c5' }],
    inStock: true,
  },
  {
    id: 'abaya-charm-malachite-natural-stone',
    name: 'Malachite Natural Stone',
    nameAr: 'ملاكيت حجر طبيعي',
    category: 'abaya-charms',
    price: 600,
    description:
      'Deep malachite green with natural banding — a striking signature accent.',
    descriptionAr:
      'ملاكيت أخضر عميق بخطوط طبيعية — لمسة توقيع مميزة.',
    images: [ACCESSORY_IMAGE_NECKLACE_MALACHITE],
    materials: 'Natural malachite, 18K gold-plated findings',
    materialsAr: 'ملاكيت طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Malachite Green', nameAr: 'أخضر ملاكيت', hex: '#1f7a5e' }],
    inStock: true,
  },
  {
    id: 'abaya-charm-lapis-lazuli-natural-stone',
    name: 'Lapis Azulli Natural Stone',
    nameAr: 'لازورد حجر طبيعي',
    category: 'abaya-charms',
    price: 645,
    description:
      'Rich lapis lazuli with golden pyrite flecks; an elevated jewel tone for evening abayas.',
    descriptionAr:
      'لازورد غني ببقع البيريت الذهبية؛ لون فاخر لمساء العباءة.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARMS_HERO],
    materials: 'Natural lapis lazuli, 18K gold-plated findings',
    materialsAr: 'لازورد طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Lapis Lazuli', nameAr: 'لازورد', hex: '#1e40af' }],
    inStock: true,
  },
  {
    id: 'abaya-charm-amethyst-hearts-natural-stone',
    name: 'Amethyst Hearts Natural Stone',
    nameAr: 'قلوب جمشت حجر طبيعي',
    category: 'abaya-charms',
    price: 720,
    description:
      'Heart-cut amethyst beads — limited edition release with clip attachment.',
    descriptionAr:
      'خرز جمشت على شكل قلب — إصدار محدود مع مشبك تثبيت.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_AMETHYST],
    materials: 'Natural amethyst, 18K gold-plated findings',
    materialsAr: 'جمشت طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Amethyst', nameAr: 'جمشت', hex: '#9333ea' }],
    inStock: true,
    isLimitedEdition: true,
  },
  {
    id: 'abaya-charm-jade-hearts-natural-stone',
    name: 'Jade Hearts Natural Stone',
    nameAr: 'قلوب اليشم حجر طبيعي',
    category: 'abaya-charms',
    price: 750,
    description:
      'Heart-shaped jade beads — limited edition; serene green movement on the abaya line.',
    descriptionAr:
      'خرز يشم على شكل قلب — إصدار محدود؛ حركة خضراء هادئة على خط العباءة.',
    images: [ACCESSORY_IMAGE_ABAYA_CHARM_GREEN_JADE],
    materials: 'Natural jade, 18K gold-plated findings',
    materialsAr: 'يشم طبيعي، تثبيتات مطلية بالذهب 18 قيراط',
    colors: [{ name: 'Jade Green', nameAr: 'يشم أخضر', hex: '#059669' }],
    inStock: true,
    isLimitedEdition: true,
  },
]
