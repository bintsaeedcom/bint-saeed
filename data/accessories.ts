export interface Accessory {
  id: string
  name: string
  nameAr: string
  category: 'necklaces' | 'earrings' | 'bracelets' | 'bag-charms' | 'phone-charms'
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
}

export const accessoryCategories = [
  { 
    id: 'all', 
    name: 'All Accessories', 
    nameAr: 'جميع الإكسسوارات',
    icon: '✦',
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
    description: 'Handcrafted bracelets with custom sizing',
    descriptionAr: 'أساور مصنوعة يدوياً بمقاسات مخصصة',
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
  // Necklaces
  {
    id: 'necklace-pearl-strand',
    name: 'Pearl Strand Necklace',
    nameAr: 'قلادة خيط اللؤلؤ',
    category: 'necklaces',
    price: 450,
    description: 'Elegant freshwater pearl necklace with gold-plated clasp. Perfect for formal occasions.',
    descriptionAr: 'قلادة لؤلؤ المياه العذبة الأنيقة مع مشبك مطلي بالذهب. مثالية للمناسبات الرسمية.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=90',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=90',
    ],
    materials: '18K Gold-plated, Freshwater Pearls',
    materialsAr: 'مطلي بالذهب 18 قيراط، لؤلؤ المياه العذبة',
    colors: [
      { name: 'Gold/White', nameAr: 'ذهبي/أبيض', hex: '#FFD700' },
    ],
    inStock: true,
    isNew: true,
  },
  {
    id: 'necklace-layered-gold',
    name: 'Layered Gold Chain',
    nameAr: 'سلسلة ذهبية متعددة الطبقات',
    category: 'necklaces',
    price: 380,
    description: 'Multi-layered gold chain necklace with delicate pendants.',
    descriptionAr: 'قلادة سلسلة ذهبية متعددة الطبقات مع تعليقات رقيقة.',
    images: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=90',
    ],
    materials: '18K Gold-plated Brass',
    materialsAr: 'نحاس مطلي بالذهب 18 قيراط',
    colors: [
      { name: 'Gold', nameAr: 'ذهبي', hex: '#FFD700' },
      { name: 'Rose Gold', nameAr: 'ذهبي وردي', hex: '#B76E79' },
    ],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 'necklace-statement-pendant',
    name: 'Heritage Statement Pendant',
    nameAr: 'تعليقة تراثية مميزة',
    category: 'necklaces',
    price: 520,
    description: 'Bold pendant necklace featuring traditional Emirati patterns.',
    descriptionAr: 'قلادة بتعليقة جريئة تتميز بأنماط إماراتية تقليدية.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=90',
    ],
    materials: 'Sterling Silver, 18K Gold Vermeil',
    materialsAr: 'فضة استرلينية، طلاء ذهب 18 قيراط',
    colors: [
      { name: 'Silver/Gold', nameAr: 'فضي/ذهبي', hex: '#C0C0C0' },
    ],
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
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=90',
    ],
    materials: '18K Gold-plated, Freshwater Pearls',
    materialsAr: 'مطلي بالذهب 18 قيراط، لؤلؤ المياه العذبة',
    colors: [
      { name: 'Gold/White', nameAr: 'ذهبي/أبيض', hex: '#FFD700' },
    ],
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
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=90',
    ],
    materials: 'Sterling Silver',
    materialsAr: 'فضة استرلينية',
    colors: [
      { name: 'Silver', nameAr: 'فضي', hex: '#C0C0C0' },
      { name: 'Gold', nameAr: 'ذهبي', hex: '#FFD700' },
    ],
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
    images: [
      'https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=800&q=90',
    ],
    materials: '18K Gold-plated Brass',
    materialsAr: 'نحاس مطلي بالذهب 18 قيراط',
    colors: [
      { name: 'Gold', nameAr: 'ذهبي', hex: '#FFD700' },
    ],
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
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=90',
    ],
    materials: '18K Gold-plated, Freshwater Pearls',
    materialsAr: 'مطلي بالذهب 18 قيراط، لؤلؤ المياه العذبة',
    colors: [
      { name: 'Gold/White', nameAr: 'ذهبي/أبيض', hex: '#FFD700' },
    ],
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
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=90',
    ],
    materials: 'Sterling Silver, 18K Gold Vermeil',
    materialsAr: 'فضة استرلينية، طلاء ذهب 18 قيراط',
    colors: [
      { name: 'Silver', nameAr: 'فضي', hex: '#C0C0C0' },
      { name: 'Gold', nameAr: 'ذهبي', hex: '#FFD700' },
    ],
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
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=90',
    ],
    materials: '18K Gold-plated Brass',
    materialsAr: 'نحاس مطلي بالذهب 18 قيراط',
    colors: [
      { name: 'Gold', nameAr: 'ذهبي', hex: '#FFD700' },
      { name: 'Rose Gold', nameAr: 'ذهبي وردي', hex: '#B76E79' },
      { name: 'Silver', nameAr: 'فضي', hex: '#C0C0C0' },
    ],
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
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=90',
    ],
    materials: 'Silk, 18K Gold-plated Hardware',
    materialsAr: 'حرير، معدن مطلي بالذهب 18 قيراط',
    colors: [
      { name: 'Black', nameAr: 'أسود', hex: '#000000' },
      { name: 'Burgundy', nameAr: 'عنابي', hex: '#3b0014' },
      { name: 'Cream', nameAr: 'كريمي', hex: '#FFFDD0' },
      { name: 'Navy', nameAr: 'كحلي', hex: '#000080' },
    ],
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
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=90',
    ],
    materials: 'Freshwater Pearls, 18K Gold-plated',
    materialsAr: 'لؤلؤ المياه العذبة، مطلي بالذهب 18 قيراط',
    colors: [
      { name: 'Gold/White', nameAr: 'ذهبي/أبيض', hex: '#FFD700' },
    ],
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
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=90',
    ],
    materials: '18K Gold Vermeil',
    materialsAr: 'طلاء ذهب 18 قيراط',
    colors: [
      { name: 'Gold', nameAr: 'ذهبي', hex: '#FFD700' },
    ],
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
    images: [
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=90',
    ],
    materials: 'Freshwater Pearls, Nylon Cord',
    materialsAr: 'لؤلؤ المياه العذبة، حبل نايلون',
    colors: [
      { name: 'White', nameAr: 'أبيض', hex: '#FFFFFF' },
      { name: 'Pink', nameAr: 'وردي', hex: '#FFC0CB' },
    ],
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
    images: [
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=90',
    ],
    materials: 'Glass Beads, Nylon Cord',
    materialsAr: 'خرز زجاجي، حبل نايلون',
    colors: [
      { name: 'Multi', nameAr: 'متعدد', hex: '#FF69B4' },
      { name: 'Neutral', nameAr: 'محايد', hex: '#D4BDAC' },
    ],
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
    images: [
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=90',
    ],
    materials: 'Silk, Gold-plated Hardware',
    materialsAr: 'حرير، معدن مطلي بالذهب',
    colors: [
      { name: 'Black', nameAr: 'أسود', hex: '#000000' },
      { name: 'Burgundy', nameAr: 'عنابي', hex: '#3b0014' },
      { name: 'Blush', nameAr: 'وردي فاتح', hex: '#DE5D83' },
    ],
    inStock: true,
  },
]
