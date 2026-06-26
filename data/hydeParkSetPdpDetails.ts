import type { AppLocale } from '@/lib/i18n/routing'
import { getHouseCodesDetailGroup } from '@/lib/products/pdpHouseCodesGroupsI18n'
import type { PdpDetailGroup } from '@/lib/products/pdpIntroRich'
import { pdpStructuredStrings } from '@/lib/products/productPdpStructuredI18n'

const SHIRT_TITLE: Record<AppLocale, string> = {
  en: 'Shirt',
  ar: 'القميص',
  fr: 'Chemise',
  it: 'Camicia',
  es: 'Camisa',
  ru: 'Рубашка',
  zh: '衬衫',
  de: 'Hemd',
  nl: 'Overhemd',
  pt: 'Camisa',
  id: 'Kemeja',
  ms: 'Kemeja',
}

const PALAZZO_TITLE: Record<AppLocale, string> = {
  en: 'Palazzo Trousers',
  ar: 'بنطال بالازو',
  fr: 'Pantalon palazzo',
  it: 'Pantaloni palazzo',
  es: 'Pantalones palazzo',
  ru: 'Брюки-palazzo',
  zh: '阔腿长裤',
  de: 'Palazzo-Hose',
  nl: 'Palazzo-broek',
  pt: 'Calças palazzo',
  id: 'Celana palazzo',
  ms: 'Seluar palazzo',
}

const SHIRT_ITEMS: Record<AppLocale, string[]> = {
  en: [
    'Relaxed oversized silhouette',
    'Pointed collar',
    'Front button fastening',
    'Twin chest patch pockets',
    'Bint Saeed signature gold-tone Knotted Line buttons',
    'Short sleeves with button tab detailing',
    'Soft premium crepe with an elegant drape',
    'Designed to be worn loose, tucked into the waistband or tied at the waist',
  ],
  ar: [
    'سيلويت واسع مريح',
    'ياقة مدببة',
    'إغلاق أمامي بأزرار',
    'جيبان رقعة مزدوجان على الصدر',
    'أزرار Knotted Line الذهبية المميزة من Bint Saeed',
    'أكمام قصيرة بتفاصيل تبويب الأزرار',
    'كريب فاخر ناعم بانسيابية أنيقة',
    'صُمم ليُرتدى فضفاضاً أو مدخولاً في الخصر أو مربوطاً عند الخصر',
  ],
  fr: [
    'Silhouette oversize décontractée',
    'Col pointu',
    'Fermeture avant à boutons',
    'Deux poches poitrine plaquées',
    'Boutons dorés signature Knotted Line de Bint Saeed',
    'Manches courtes avec détail patte de boutonnage',
    'Crêpe premium doux à tombée élégante',
    'Conçue pour être portée loose, rentrée dans la taille ou nouée à la taille',
  ],
  it: [
    'Silhouette oversize rilassata',
    'Colletto a punta',
    'Chiusura frontale con bottoni',
    'Due tasche a toppa sul petto',
    'Bottoni dorati signature Knotted Line di Bint Saeed',
    'Maniche corte con patte a bottoni',
    'Crepe premium morbido con drappeggio elegante',
    'Pensata per essere indossata loose, infilata nel waistband o annodata in vita',
  ],
  es: [
    'Silueta oversize relajada',
    'Cuello puntiagudo',
    'Cierre frontal con botones',
    'Dos bolsillos de parche en el pecho',
    'Botones dorados signature Knotted Line de Bint Saeed',
    'Mangas cortas con pestaña de botones',
    'Crepe premium suave con caída elegante',
    'Diseñada para llevarse suelta, metida en la cintura o atada en la cintura',
  ],
  ru: [
    'Расслабленный оверсайз силуэт',
    'Острый воротник',
    'Фронтальная застёжка на пуговицы',
    'Два нагрудных накладных кармана',
    'Фирменные золотистые пуговицы Knotted Line от Bint Saeed',
    'Короткие рукава с планкой на пуговицах',
    'Мягкий премиальный креп с элегантной драпировкой',
    'Создана для носки свободно, заправленной в пояс или завязанной на талии',
  ],
  zh: [
    '宽松廓形',
    '尖领',
    '前襟纽扣',
    '双贴袋胸袋',
    'Bint Saeed 标志性金色调 Knotted Line 纽扣',
    '短袖配纽扣绊带细节',
    '柔软高级绉绸，垂坠优雅',
    '可宽松穿着、塞入腰头或在腰间打结',
  ],
  de: [
    'Entspannte Oversize-Silhouette',
    'Spitzkragen',
    'Frontknopfleiste',
    'Zwei Brust-Patch-Taschen',
    'Bint Saeed Signatur-Knotted-Line-Knöpfe in Goldoptik',
    'Kurzärmel mit Knopf-Tab-Details',
    'Weicher Premium-Krepp mit elegantem Fall',
    'Zum Lockern-Tragen, in den Bund stecken oder an der Taille binden konzipiert',
  ],
  nl: [
    'Ontspannen oversized silhouet',
    'Spitse kraag',
    'Knoopsluiting aan de voorkant',
    'Twee borstzakken',
    'Bint Saeed signature goudkleurige Knotted Line-knopen',
    'Korte mouwen met knooplatdetail',
    'Zacht premium crêpe met elegante drape',
    'Ontworpen om los, in de tailleband of geknoopt om de taille gedragen te worden',
  ],
  pt: [
    'Silhueta oversized descontraída',
    'Gola pontiaguda',
    'Fecho frontal com botões',
    'Dois bolsos de peito aplicados',
    'Botões dourados signature Knotted Line da Bint Saeed',
    'Mangas curtas com aba de botão',
    'Crepe premium suave com caimento elegante',
    'Concebida para ser usada solta, metida na cintura ou amarrada na cintura',
  ],
  id: [
    'Siluet oversized santai',
    'Kerah runcing',
    'Penutup depan berkancing',
    'Dua saku dada patch',
    'Kancing emas signature Knotted Line Bint Saeed',
    'Lengan pendek dengan detail kancing',
    'Krepe premium lembut dengan drape elegan',
    'Dirancang untuk dikenakan longgar, dimasukkan ke pinggang, atau diikat di pinggang',
  ],
  ms: [
    'Siluet oversized santai',
    'Kolar runcing',
    'Penutup hadapan berbutang',
    'Dua poket dada patch',
    'Butang emas signature Knotted Line Bint Saeed',
    'Lengan pendek dengan butang tab',
    'Krepe premium lembut dengan jatuhan anggun',
    'Direka untuk dipakai longgar, dimasukkan ke pinggang, atau diikat di pinggang',
  ],
}

const PALAZZO_ITEMS: Record<AppLocale, string[]> = {
  en: [
    'Full-length wide-leg palazzo silhouette',
    'Elasticated waistband with adjustable drawcord',
    'Two discreet side seam pockets',
    'Soft premium crepe with fluid movement',
  ],
  ar: [
    'سيلويت بالازو بساق واسعة بطول كامل',
    'حزام خصر مطاطي بحبل قابل للتعديل',
    'جيبان جانبيان منفصلان في اللحامات',
    'كريب فاخر ناعم بحركة انسيابية',
  ],
  fr: [
    'Silhouette palazzo pleine longueur à jambe large',
    'Taille élastiquée avec cordon ajustable',
    'Deux poches latérales discrètes',
    'Crêpe premium doux au mouvement fluide',
  ],
  it: [
    'Silhouette palazzo gamba larga a tutta lunghezza',
    'Cintura elasticizzata con coulisse regolabile',
    'Due tasche laterali discrete',
    'Crepe premium morbido con movimento fluido',
  ],
  es: [
    'Silueta palazzo de pierna ancha de largo completo',
    'Cintura elástica con cordón ajustable',
    'Dos bolsillos laterales discretos',
    'Crepe premium suave con movimiento fluido',
  ],
  ru: [
    'Силуэт palazzo с широкой штаниной во всю длину',
    'Эластичный пояс с регулируемым шнуром',
    'Два аккуратных боковых кармана в шве',
    'Мягкий премиальный креп с плавным движением',
  ],
  zh: ['全长阔腿 palazzo 廓形', '弹力腰头配可调抽绳', '两个低调侧缝口袋', '柔软高级绉绸，灵动飘逸'],
  de: [
    'Ganzlange weite Palazzo-Silhouette',
    'Elastischer Bund mit verstellbarem Kordelzug',
    'Zwei dezente Seitennaht-Taschen',
    'Weicher Premium-Krepp mit fließender Bewegung',
  ],
  nl: [
    'Full-length wide-leg palazzo-silhouet',
    'Elastische tailleband met verstelbaar koord',
    'Twee discrete zijnaadzakken',
    'Zacht premium crêpe met vloeiende beweging',
  ],
  pt: [
    'Silhueta palazzo de perna larga de comprimento total',
    'Cintura elástica com cordão ajustável',
    'Dois bolsos laterais discretos',
    'Crepe premium suave com movimento fluido',
  ],
  id: [
    'Siluet palazzo kaki lebar penuh',
    'Pinggang elastis dengan drawcord adjustable',
    'Dua saku samping tersembunyi',
    'Krepe premium lembut dengan gerakan mengalir',
  ],
  ms: [
    'Siluet palazzo kaki lebar penuh',
    'Pinggang bergetah dengan tali boleh laras',
    'Dua poket sisi tersembunyi',
    'Krepe premium lembut dengan pergerakan mengalir',
  ],
}

const FIT_RELAXED: Record<AppLocale, string> = {
  en: 'Relaxed fit',
  ar: 'قصة مريحة',
  fr: 'Coupe décontractée',
  it: 'Vestibilità rilassata',
  es: 'Ajuste relajado',
  ru: 'Свободная посадка',
  zh: '宽松版型',
  de: 'Entspannte Passform',
  nl: 'Ontspannen pasvorm',
  pt: 'Caimento descontraído',
  id: 'Fit santai',
  ms: 'Potongan santai',
}

const FIT_PALAZZO: Record<AppLocale, string> = {
  en: 'Wide-leg palazzo trousers',
  ar: 'بنطال بالازو بساق واسعة',
  fr: 'Pantalon palazzo à jambe large',
  it: 'Pantaloni palazzo a gamba larga',
  es: 'Pantalones palazzo de pierna ancha',
  ru: 'Брюки palazzo с широкой штаниной',
  zh: '阔腿 palazzo 长裤',
  de: 'Weite Palazzo-Hose',
  nl: 'Wide-leg palazzo-broek',
  pt: 'Calças palazzo de perna larga',
  id: 'Celana palazzo kaki lebar',
  ms: 'Seluar palazzo kaki lebar',
}

const MODEL_HEIGHT: Record<AppLocale, string> = {
  en: 'Model height: 155 cm / 61 in',
  ar: 'طول العارضة: 155 سم / 61 بوصة',
  fr: 'Taille du mannequin : 155 cm / 61 po',
  it: 'Altezza modella: 155 cm / 61 in',
  es: 'Altura de la modelo: 155 cm / 61 in',
  ru: 'Рост модели: 155 см / 61 дюйм',
  zh: '模特身高：155 厘米 / 61 英寸',
  de: 'Modellgröße: 155 cm / 61 Zoll',
  nl: 'Model lengte: 155 cm / 61 in',
  pt: 'Altura da modelo: 155 cm / 61 in',
  id: 'Tinggi model: 155 cm / 61 in',
  ms: 'Tinggi model: 155 cm / 61 in',
}

const MODEL_WEAR_XS: Record<AppLocale, string> = {
  en: 'Model wears size XS',
  ar: 'العارضة ترتدي مقاس XS',
  fr: 'Le mannequin porte la taille XS',
  it: 'La modella indossa taglia XS',
  es: 'La modelo lleva talla XS',
  ru: 'На модели размер XS',
  zh: '模特穿着 XS 码',
  de: 'Das Model trägt Größe XS',
  nl: 'Model draagt maat XS',
  pt: 'A modelo usa tamanho XS',
  id: 'Model memakai ukuran XS',
  ms: 'Model memakai saiz XS',
}

const COMPOSITION: Record<AppLocale, string> = {
  en: 'Outer: 80% Polyester, 20% Viscose',
  ar: 'الخارج: 80% بوليستر، 20% فيسكوز',
  fr: 'Extérieur : 80 % polyester, 20 % viscose',
  it: 'Esterno: 80% poliestere, 20% viscosa',
  es: 'Exterior: 80% poliéster, 20% viscosa',
  ru: 'Верх: 80% полиэстер, 20% вискоза',
  zh: '面料：80% 聚酯纤维，20% 粘胶纤维',
  de: 'Außenmaterial: 80 % Polyester, 20 % Viskose',
  nl: 'Buitenstof: 80% polyester, 20% viscose',
  pt: 'Exterior: 80% poliéster, 20% viscose',
  id: 'Luar: 80% Polyester, 20% Viscose',
  ms: 'Luaran: 80% Polyester, 20% Viscose',
}

const CARE: Record<AppLocale, string> = {
  en: 'Gentle machine wash at 30°C.',
  ar: 'غسيل آلي لطيف عند 30°م.',
  fr: 'Lavage en machine délicat à 30 °C.',
  it: 'Lavaggio in lavatrice delicato a 30 °C.',
  es: 'Lavado a máquina suave a 30 °C.',
  ru: 'Деликатная машинная стирка при 30 °C.',
  zh: '30°C 轻柔机洗。',
  de: 'Schonwaschgang bei 30 °C.',
  nl: 'Zachte machinewas op 30 °C.',
  pt: 'Lavagem na máquina suave a 30 °C.',
  id: 'Cuci mesin lembut pada 30°C.',
  ms: 'Basuhan mesin lembut pada 30°C.',
}

const ORIGIN: Record<AppLocale, string> = {
  en: 'Made in Abu Dhabi, United Arab Emirates',
  ar: 'صُنع في أبوظبي، الإمارات العربية المتحدة',
  fr: 'Fabriqué à Abou Dabi, Émirats arabes unis',
  it: 'Realizzato ad Abu Dhabi, Emirati Arabi Uniti',
  es: 'Hecho en Abu Dabi, Emiratos Árabes Unidos',
  ru: 'Сделано в Абу-Даби, ОАЭ',
  zh: '阿联酋阿布扎比制造',
  de: 'Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate',
  nl: 'Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten',
  pt: 'Feito em Abu Dhabi, Emirados Árabes Unidos',
  id: 'Dibuat di Abu Dhabi, Uni Emirat Arab',
  ms: 'Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu',
}

export const HYDE_PARK_SET_COLOUR = ['Deep Black', 'Navy Blue'] as const

export function hydeParkSetComposition(locale: AppLocale = 'en'): string[] {
  return [COMPOSITION[locale] ?? COMPOSITION.en]
}

export function hydeParkSetCare(locale: AppLocale = 'en'): string[] {
  return [CARE[locale] ?? CARE.en]
}

export function hydeParkSetFitAndSize(locale: AppLocale = 'en'): string[] {
  const s = pdpStructuredStrings(locale)
  return [
    FIT_RELAXED[locale] ?? FIT_RELAXED.en,
    FIT_PALAZZO[locale] ?? FIT_PALAZZO.en,
    MODEL_HEIGHT[locale] ?? MODEL_HEIGHT.en,
    MODEL_WEAR_XS[locale] ?? MODEL_WEAR_XS.en,
    s.customLength,
  ]
}

export function hydeParkSetOrigin(locale: AppLocale = 'en'): string[] {
  return [ORIGIN[locale] ?? ORIGIN.en]
}

export function buildHydeParkSetDetailGroups(locale: AppLocale = 'en'): PdpDetailGroup[] {
  const shirt = SHIRT_ITEMS[locale] ?? SHIRT_ITEMS.en
  const palazzo = PALAZZO_ITEMS[locale] ?? PALAZZO_ITEMS.en

  return [
    {
      title: SHIRT_TITLE[locale] ?? SHIRT_TITLE.en,
      items: [...shirt],
    },
    {
      title: PALAZZO_TITLE[locale] ?? PALAZZO_TITLE.en,
      items: [...palazzo],
    },
    getHouseCodesDetailGroup('knotted-line-only', locale),
  ]
}
