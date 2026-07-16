import type { AppLocale } from '@/lib/i18n/routing'

/** Desktop + mobile header chrome — Part 1 Arabic focus; EN is source of truth. */
export type HeaderNavCopy = {
  shop: string
  strands: string
  accessories: string
  personalisation: string
  aboutUs: string
  discover: string
  shopAll: string
  giftCards: string
  readyToWear: string
  abayas: string
  sets: string
  dresses: string
  kaftans: string
  allStrands: string
  signatureStrands: string
  shopAllStrands: string
  allAccessories: string
  necklaces: string
  earrings: string
  bagCharms: string
  phoneCharms: string
  contact: string
  hiddenPocket: string
  personalisedLabels: string
  ourStory: string
  theCodes: string
  craftsmanship: string
  givingForward: string
  maryleboneAbaya: string
  shopNow: string
  discoverNow: string
  discoverMore: string
  explore: string
  toggleMenu: string
  wishlist: string
  viewAll: string
  collection: string
  searchSuggestions: string[]
}

const EN: HeaderNavCopy = {
  shop: 'Shop',
  strands: 'Strands',
  accessories: 'Accessories',
  personalisation: 'Personalisation',
  aboutUs: 'About Us',
  discover: 'Discover',
  shopAll: 'Shop All',
  giftCards: 'Gift Cards',
  readyToWear: 'Ready to Wear',
  abayas: 'Abayas',
  sets: 'Sets',
  dresses: 'Dresses',
  kaftans: 'Kaftans',
  allStrands: 'All Strands',
  signatureStrands: 'Signature Strands',
  shopAllStrands: 'Shop All Strands',
  allAccessories: 'All Accessories',
  necklaces: 'Necklaces',
  earrings: 'Earrings',
  bagCharms: 'Bag Charms',
  phoneCharms: 'Phone Charms',
  contact: 'Contact',
  hiddenPocket: 'Hidden Pocket',
  personalisedLabels: 'Personalised labels',
  ourStory: 'Our Story',
  theCodes: 'The Codes',
  craftsmanship: 'Craftsmanship',
  givingForward: 'Giving Forward',
  maryleboneAbaya: 'Marylebone Abaya',
  shopNow: 'Shop Now',
  discoverNow: 'Discover Now',
  discoverMore: 'Discover More',
  explore: 'Explore',
  toggleMenu: 'Toggle menu',
  wishlist: 'Favorites',
  viewAll: 'View all',
  collection: 'Collection',
  searchSuggestions: ['Abayas', 'Kaftans', 'Dresses', 'Accessories', 'New Arrivals', 'Heritage'],
}

const AR: HeaderNavCopy = {
  shop: 'تسوقي',
  strands: 'السلاسل',
  accessories: 'الإكسسوارات',
  personalisation: 'التخصيص',
  aboutUs: 'من نحن',
  discover: 'اكتشفي',
  shopAll: 'تسوّقي الكل',
  giftCards: 'بطاقات الهدايا',
  readyToWear: 'الجاهز للارتداء',
  abayas: 'العبايات',
  sets: 'الأطقم',
  dresses: 'الفساتين',
  kaftans: 'القفاطين',
  allStrands: 'كل السلاسل',
  signatureStrands: 'سلاسل التوقيع',
  shopAllStrands: 'تسوّقي كل السلاسل',
  allAccessories: 'كل الإكسسوارات',
  necklaces: 'القلادات',
  earrings: 'الأقراط',
  bagCharms: 'تعليقات الحقائب',
  phoneCharms: 'تعليقات الهاتف',
  contact: 'تواصلي معنا',
  hiddenPocket: 'الجيب المخفي',
  personalisedLabels: 'الملصقات المخصّصة',
  ourStory: 'قصتنا',
  theCodes: 'الرموز',
  craftsmanship: 'الحرفية',
  givingForward: 'العطاء المستمر',
  maryleboneAbaya: 'عباية ميرليبون',
  shopNow: 'تسوقي الآن',
  discoverNow: 'اكتشفي الآن',
  discoverMore: 'اكتشفي المزيد',
  explore: 'استكشفي',
  toggleMenu: 'فتح القائمة',
  wishlist: 'المفضلة',
  viewAll: 'عرض الكل',
  collection: 'المجموعة',
  searchSuggestions: ['العبايات', 'القفاطين', 'الفساتين', 'الإكسسوارات', 'وصل حديثاً', 'التراث'],
}

const NL: HeaderNavCopy = {
  shop: 'Shop',
  strands: 'Strands',
  accessories: 'Accessoires',
  personalisation: 'Personalisatie',
  aboutUs: 'Over ons',
  discover: 'Ontdek',
  shopAll: 'Alles bekijken',
  giftCards: 'Cadeaubonnen',
  readyToWear: 'Ready-to-wear',
  abayas: "Abaya's",
  sets: 'Sets',
  dresses: 'Jurken',
  kaftans: 'Kaftans',
  allStrands: 'Alle Strands',
  signatureStrands: 'Signature Strands',
  shopAllStrands: 'Alle Strands bekijken',
  allAccessories: 'Alle accessoires',
  necklaces: 'Kettingen',
  earrings: 'Oorbellen',
  bagCharms: 'Tashangers',
  phoneCharms: 'Telefoonhangers',
  contact: 'Contact',
  hiddenPocket: 'Verborgen zak',
  personalisedLabels: 'Gepersonaliseerd binnenlabel',
  ourStory: 'Ons verhaal',
  theCodes: 'The Codes',
  craftsmanship: 'Vakmanschap',
  givingForward: 'Giving Forward',
  maryleboneAbaya: 'Marylebone Abaya',
  shopNow: 'Shop nu',
  discoverNow: 'Ontdek nu',
  discoverMore: 'Ontdek meer',
  explore: 'Verken',
  toggleMenu: 'Menu openen',
  wishlist: 'Favorieten',
  viewAll: 'Alles bekijken',
  collection: 'Collectie',
  searchSuggestions: ["Abaya's", 'Kaftans', 'Jurken', 'Accessoires', 'Nieuw binnen', 'Erfgoed'],
}

export function getHeaderNavCopy(locale: AppLocale | string): HeaderNavCopy {
  if (locale === 'ar') return AR
  if (locale === 'nl') return NL
  return EN
}
