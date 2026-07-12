import type { AppLocale } from '@/lib/i18n/routing'

export type SearchableItem = { title: string; href: string; category: string }

const EN: SearchableItem[] = [
  { title: 'New Arrivals', href: '/shop', category: 'Collection' },
  { title: 'Dresses', href: '/shop?category=dresses', category: 'Collection' },
  { title: 'Ready to Wear', href: '/shop?category=ready-to-wear', category: 'Collection' },
  { title: 'Accessories', href: '/accessories', category: 'Collection' },
  { title: 'Abaya Strands', href: '/strands#stone-showcase', category: 'Accessories' },
  { title: 'Shop All Strands', href: '/accessories?type=signature-strands', category: 'Accessories' },
  { title: 'Necklaces', href: '/accessories?type=necklaces', category: 'Accessories' },
  { title: 'Earrings', href: '/accessories?type=earrings', category: 'Accessories' },
  { title: 'Phone Charms', href: '/accessories?type=phone-strands', category: 'Accessories' },
  { title: 'About Us', href: '/about', category: 'About' },
  { title: 'Our Story', href: '/about', category: 'About' },
  { title: 'The Codes', href: '/the-codes', category: 'About' },
  { title: 'Craftsmanship', href: '/craftsmanship', category: 'About' },
  { title: 'Personalisation', href: '/personalisation', category: 'About' },
  { title: 'Giving Forward', href: '/giving-forward', category: 'About' },
  { title: 'Al Talli', href: '/the-codes#al-talli', category: 'Heritage' },
  { title: 'Khous Weaving', href: '/the-codes#khous', category: 'Heritage' },
  { title: 'Size Guide', href: '/size-guide', category: 'Help' },
  { title: 'Contact Us', href: '/contact', category: 'Help' },
  { title: 'FAQ', href: '/faq', category: 'Help' },
  { title: 'Shipping & Returns', href: '/terms', category: 'Help' },
  { title: 'Abayas', href: '/shop?category=abayas', category: 'Products' },
  { title: 'Jacket', href: '/shop?category=jacket', category: 'Products' },
  { title: 'Kaftans', href: '/shop?category=kaftans', category: 'Products' },
  { title: 'Black Abaya', href: '/shop?category=abayas&color=black', category: 'Products' },
  { title: 'Luxury Abaya', href: '/shop?category=abayas&style=luxury', category: 'Products' },
]

const AR: SearchableItem[] = [
  { title: 'وصل حديثاً', href: '/shop', category: 'المجموعة' },
  { title: 'فساتين', href: '/shop?category=dresses', category: 'المجموعة' },
  { title: 'جاهز للارتداء', href: '/shop?category=ready-to-wear', category: 'المجموعة' },
  { title: 'الإكسسوارات', href: '/accessories', category: 'المجموعة' },
  { title: 'خيوط العباءة', href: '/strands#stone-showcase', category: 'إكسسوارات' },
  { title: 'تسوقي كل الخيوط', href: '/accessories?type=signature-strands', category: 'إكسسوارات' },
  { title: 'قلادات', href: '/accessories?type=necklaces', category: 'إكسسوارات' },
  { title: 'أقراط', href: '/accessories?type=earrings', category: 'إكسسوارات' },
  { title: 'خيوط الهاتف', href: '/accessories?type=phone-strands', category: 'إكسسوارات' },
  { title: 'من نحن', href: '/about', category: 'عن الدار' },
  { title: 'قصتنا', href: '/about', category: 'عن الدار' },
  { title: 'الرموز', href: '/the-codes', category: 'عن الدار' },
  { title: 'الحرفية', href: '/craftsmanship', category: 'عن الدار' },
  { title: 'التخصيص', href: '/personalisation', category: 'عن الدار' },
  { title: 'العطاء المستمر', href: '/giving-forward', category: 'عن الدار' },
  { title: 'Al Talli', href: '/the-codes#al-talli', category: 'التراث' },
  { title: 'نسيج الخوص', href: '/the-codes#khous', category: 'التراث' },
  { title: 'دليل المقاسات', href: '/size-guide', category: 'المساعدة' },
  { title: 'تواصلي معنا', href: '/contact', category: 'المساعدة' },
  { title: 'الأسئلة الشائعة', href: '/faq', category: 'المساعدة' },
  { title: 'الشحن والإرجاع', href: '/terms', category: 'المساعدة' },
  { title: 'عباءات', href: '/shop?category=abayas', category: 'منتجات' },
  { title: 'جاكيت', href: '/shop?category=jacket', category: 'منتجات' },
  { title: 'قفاطين', href: '/shop?category=kaftans', category: 'منتجات' },
  { title: 'عباءة سوداء', href: '/shop?category=abayas&color=black', category: 'منتجات' },
  { title: 'عباءة فاخرة', href: '/shop?category=abayas&style=luxury', category: 'منتجات' },
]

export function getSearchableContent(locale: AppLocale | string): SearchableItem[] {
  const editorial = locale === 'ar' ? AR : EN
  // Catalog rows are appended at call sites that need product search (Header).
  return editorial
}
