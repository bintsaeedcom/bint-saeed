import type { PdpDetailGroup } from '@/lib/products/pdpIntroRich'
import type { AppLocale } from '@/lib/i18n/routing'
import { getHouseCodesDetailGroup } from '@/lib/products/pdpHouseCodesGroupsI18n'

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
  ru: 'Брюки-палazzo',
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
    'Front button closure',
    'Two chest patch pockets',
    'Short sleeves with button tab detailing',
  ],
  ar: [
    'سيلويت واسع مريح',
    'ياقة مدببة',
    'إغلاق أمامي بأزرار',
    'جيبان رقعة على الصدر',
    'أكمام قصيرة بتفاصيل تبويب الأزرار',
  ],
  fr: [
    'Silhouette oversize décontractée',
    'Col pointu',
    'Fermeture avant à boutons',
    'Deux poches poitrine plaquées',
    'Manches courtes avec détail patte de boutonnage',
  ],
  it: [
    'Silhouette oversize rilassata',
    'Colletto a punta',
    'Chiusura frontale con bottoni',
    'Due tasche a toppa sul petto',
    'Maniche corte con patte a bottoni',
  ],
  es: [
    'Silueta oversize relajada',
    'Cuello puntiagudo',
    'Cierre frontal con botones',
    'Dos bolsillos de parche en el pecho',
    'Mangas cortas con pestaña de botones',
  ],
  ru: [
    'Расслабленный оверсайз силуэт',
    'Острый воротник',
    'Фронтальная застёжка на пуговицы',
    'Два нагрудных накладных кармана',
    'Короткие рукава с планкой на пуговицах',
  ],
  zh: ['宽松廓形', '尖领', '前襟纽扣', '两个贴袋胸袋', '短袖配纽扣绊带细节'],
  de: [
    'Entspannte Oversize-Silhouette',
    'Spitzkragen',
    'Frontknopfleiste',
    'Zwei Brust-Patch-Taschen',
    'Kurzärmel mit Knopf-Tab-Details',
  ],
  nl: [
    'Ontspannen oversized silhouet',
    'Spitse kraag',
    'Knoopsluiting aan de voorkant',
    'Twee borstzakken',
    'Korte mouwen met knooplatdetail',
  ],
  pt: [
    'Silhueta oversized descontraída',
    'Gola pontiaguda',
    'Fecho frontal com botões',
    'Dois bolsos de peito aplicados',
    'Mangas curtas com aba de botão',
  ],
  id: [
    'Siluet oversized santai',
    'Kerah runcing',
    'Penutup depan berkancing',
    'Dua saku dada patch',
    'Lengan pendek dengan detail kancing',
  ],
  ms: [
    'Siluet oversized santai',
    'Kolar runcing',
    'Penutup hadapan berbutang',
    'Dua poket dada patch',
    'Lengan pendek dengan butang tab',
  ],
}

const PALAZZO_ITEMS: Record<AppLocale, string[]> = {
  en: [
    'Wide-leg palazzo silhouette',
    'Elasticated waistband with adjustable drawcord',
    'Two hidden side seam pockets',
  ],
  ar: [
    'سيلويت بالازو بساق واسعة',
    'حزام خصر مطاطي بحبل قابل للتعديل',
    'جيبان جانبيان مخفيان في اللحامات',
  ],
  fr: [
    'Silhouette palazzo à jambe large',
    'Taille élastiquée avec cordon ajustable',
    'Deux poches latérales dissimulées',
  ],
  it: [
    'Silhouette palazzo gamba larga',
    'Cintura elasticizzata con coulisse regolabile',
    'Due tasche laterali nascoste',
  ],
  es: [
    'Silueta palazzo de pierna ancha',
    'Cintura elástica con cordón ajustable',
    'Dos bolsillos laterales ocultos',
  ],
  ru: [
    'Силуэт palazzo с широкой штаниной',
    'Эластичный пояс с регулируемым шнуром',
    'Два скрытых боковых кармана',
  ],
  zh: ['阔腿 palazzo 廓形', '弹力腰头配可调抽绳', '两个隐藏侧缝口袋'],
  de: [
    'Weite Palazzo-Silhouette',
    'Elastischer Bund mit verstellbarem Kordelzug',
    'Zwei versteckte Seitennaht-Taschen',
  ],
  nl: [
    'Wide-leg palazzo-silhouet',
    'Elastische tailleband met verstelbaar koord',
    'Twee verborgen zijnaadzakken',
  ],
  pt: [
    'Silhueta palazzo de perna larga',
    'Cintura elástica com cordão ajustável',
    'Dois bolsos laterais ocultos',
  ],
  id: [
    'Siluet palazzo kaki lebar',
    'Pinggang elastis dengan drawcord adjustable',
    'Dua saku samping tersembunyi',
  ],
  ms: [
    'Siluet palazzo kaki lebar',
    'Pinggang bergetah dengan tali boleh laras',
    'Dua poket sisi tersembunyi',
  ],
}

export const SOHO_SET_COMPOSITION = ['80% Polyester, 20% Viscose'] as const

export const SOHO_SET_COLOUR = ['Deep Black', 'Navy Blue'] as const

export const SOHO_SET_FIT_AND_SIZE = [
  'Relaxed oversized fit',
  'Full-length wide-leg palazzo trousers',
  'Shirt designed to be worn loose, tucked into the waistband or tied at the waist',
] as const

export const SOHO_SET_CARE = ['Professional dry clean only.'] as const

export const SOHO_SET_ORIGIN = ['Made in Abu Dhabi, United Arab Emirates'] as const

export function buildSohoSetDetailGroups(locale: AppLocale = 'en'): PdpDetailGroup[] {
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
    getHouseCodesDetailGroup('soho-set', locale),
  ]
}
