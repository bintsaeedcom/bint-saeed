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

export const SOHO_SET_COLOUR = ['Deep Black', 'Navy Blue'] as const

const COMPOSITION: Record<AppLocale, string> = {
  en: '80% Polyester, 20% Viscose',
  ar: '80% بوليستر، 20% فيسكوز',
  fr: '80 % polyester, 20 % viscose',
  it: '80% poliestere, 20% viscosa',
  es: '80% poliéster, 20% viscosa',
  ru: '80% полиэстер, 20% вискоза',
  zh: '80% 聚酯纤维，20% 粘胶纤维',
  de: '80 % Polyester, 20 % Viskose',
  nl: '80% polyester, 20% viscose',
  pt: '80% poliéster, 20% viscose',
  id: '80% Polyester, 20% Viscose',
  ms: '80% Polyester, 20% Viscose',
}

const FIT_OVERSIZED: Record<AppLocale, string> = {
  en: 'Relaxed oversized fit',
  ar: 'قصة واسعة مريحة',
  fr: 'Coupe oversize décontractée',
  it: 'Vestibilità oversize rilassata',
  es: 'Corte oversize relajado',
  ru: 'Свободный oversize-крой',
  zh: '宽松廓形',
  de: 'Entspannte Oversize-Passform',
  nl: 'Ontspannen oversized pasvorm',
  pt: 'Corte oversized descontraído',
  id: 'Siluet oversized santai',
  ms: 'Potongan oversized santai',
}

const FIT_PALAZZO: Record<AppLocale, string> = {
  en: 'Full-length wide-leg palazzo trousers',
  ar: 'بنطال بالازو واسع الساق بطول كامل',
  fr: 'Pantalon palazzo jambe large pleine longueur',
  it: 'Pantaloni palazzo a gamba larga a tutta lunghezza',
  es: 'Pantalones palazzo de pierna ancha de largo completo',
  ru: 'Брюки-палazzo широкого кроя во всю длину',
  zh: '全长阔腿长裤',
  de: 'Palazzo-Hose mit weitem Bein in voller Länge',
  nl: 'Palazzo-broek met wijde pijp over volledige lengte',
  pt: 'Calças palazzo de perna larga em comprimento total',
  id: 'Celana palazzo kaki lebar panjang penuh',
  ms: 'Seluar palazzo kaki lebar panjang penuh',
}

const FIT_STYLING: Record<AppLocale, string> = {
  en: 'Shirt designed to be worn loose, tucked into the waistband or tied at the waist',
  ar: 'قميص يُرتدى فضفاضاً أو مُدخلاً في الخصر أو مربوطاً عند الخصر',
  fr: 'Chemise à porter ample, rentrée dans la taille ou nouée à la taille',
  it: 'Camicia da indossare ampia, infilata in vita o annodata in vita',
  es: 'Camisa para llevar suelta, metida en la cintura o anudada en la cintura',
  ru: 'Рубашку можно носить свободно, заправленной или завязанной на талии',
  zh: '衬衫可宽松穿着、塞入腰头或腰间打结',
  de: 'Hemd locker, in den Bund gesteckt oder an der Taille gebunden tragbar',
  nl: 'Overhemd los, in de tailleband of geknoopt om de taille te dragen',
  pt: 'Camisa para usar solta, metida na cintura ou amarrada na cintura',
  id: 'Kemeja dapat dikenakan longgar, dimasukkan ke pinggang, atau dikikat di pinggang',
  ms: 'Kemeja boleh dipakai longgar, dimasukkan ke pinggang, atau diikat di pinggang',
}

const CARE: Record<AppLocale, string> = {
  en: 'Professional dry clean only.',
  ar: 'تنظيف جاف احترافي فقط.',
  fr: 'Nettoyage à sec professionnel uniquement.',
  it: 'Solo lavaggio a secco professionale.',
  es: 'Solo limpieza en seco profesional.',
  ru: 'Только профессиональная химчистка.',
  zh: '仅建议专业干洗。',
  de: 'Nur professionelle Reinigung.',
  nl: 'Alleen professionele stomerij.',
  pt: 'Apenas limpeza a seco profissional.',
  id: 'Hanya dry clean profesional.',
  ms: 'Dry clean profesional sahaja.',
}

const ORIGIN: Record<AppLocale, string> = {
  en: 'Made in Abu Dhabi, United Arab Emirates',
  ar: 'صُنع في أبوظبي، الإمارات العربية المتحدة',
  fr: 'Fabriqué à Abou Dabi, Émirats arabes unis',
  it: 'Realizzato ad Abu Dhabi, Emirati Arabi Uniti',
  es: 'Hecho en Abu Dabi, Emiratos Árabes Unidos',
  ru: 'Сделано в Абу-Даби, ОАЭ',
  zh: '阿联酋阿布扎比制造',
  de: 'Hergestellt in Abu Dhabi, VAE',
  nl: 'Gemaakt in Abu Dhabi, VAE',
  pt: 'Feito em Abu Dhabi, Emirados Árabes Unidos',
  id: 'Dibuat di Abu Dhabi, UEA',
  ms: 'Dihasilkan di Abu Dhabi, UAE',
}

/** @deprecated Use sohoSetComposition(locale) */
export const SOHO_SET_COMPOSITION = [COMPOSITION.en] as const

/** @deprecated Use sohoSetFitAndSize(locale) */
export const SOHO_SET_FIT_AND_SIZE = [
  FIT_OVERSIZED.en,
  FIT_PALAZZO.en,
  FIT_STYLING.en,
] as const

/** @deprecated Use sohoSetCare(locale) */
export const SOHO_SET_CARE = [CARE.en] as const

/** @deprecated Use sohoSetOrigin(locale) */
export const SOHO_SET_ORIGIN = [ORIGIN.en] as const

export function sohoSetComposition(locale: AppLocale = 'en'): string[] {
  return [COMPOSITION[locale]]
}

export function sohoSetFitAndSize(locale: AppLocale = 'en'): string[] {
  return [FIT_OVERSIZED[locale], FIT_PALAZZO[locale], FIT_STYLING[locale]]
}

export function sohoSetCare(locale: AppLocale = 'en'): string[] {
  return [CARE[locale]]
}

export function sohoSetOrigin(locale: AppLocale = 'en'): string[] {
  return [ORIGIN[locale]]
}

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
