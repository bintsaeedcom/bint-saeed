import type { AppLocale } from '@/lib/i18n/routing'

export type AboutTopicLink = { href: string; label: string }

const EN: AboutTopicLink[] = [
  { href: '/about', label: 'Our Story' },
  { href: '/the-codes', label: 'The Codes' },
  { href: '/craftsmanship', label: 'Craftsmanship' },
  { href: '/personalisation', label: 'Personalisation' },
  { href: '/giving-forward', label: 'Giving Forward' },
  { href: '/contact', label: 'Contact' },
]

const AR: AboutTopicLink[] = [
  { href: '/about', label: 'قصتنا' },
  { href: '/the-codes', label: 'الرموز' },
  { href: '/craftsmanship', label: 'الحرفية' },
  { href: '/personalisation', label: 'التخصيص' },
  { href: '/giving-forward', label: 'العطاء المستمر' },
  { href: '/contact', label: 'تواصلي معنا' },
]

export function getAboutTopicNavLinks(locale: AppLocale | string): AboutTopicLink[] {
  if (locale === 'ar') return AR
  return EN
}

export function getAboutTopicNavAriaLabel(locale: AppLocale | string): string {
  return locale === 'ar' ? 'مواضيع عن الدار' : 'About topics'
}
