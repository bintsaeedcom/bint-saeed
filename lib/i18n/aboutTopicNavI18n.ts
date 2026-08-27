import type { AppLocale } from '@/lib/i18n/routing'

export type AboutTopicLink = { href: string; label: string }

const EN: AboutTopicLink[] = [
  { href: '/about', label: 'Our Story' },
  { href: '/the-codes', label: 'The Codes' },
  { href: '/heritage', label: 'Heritage' },
  { href: '/craftsmanship', label: 'Craftsmanship' },
  { href: '/personalisation', label: 'Personalisation' },
  { href: '/giving-forward', label: 'Giving Forward' },
  { href: '/contact', label: 'Contact' },
]

const AR: AboutTopicLink[] = [
  { href: '/about', label: 'قصتنا' },
  { href: '/the-codes', label: 'الرموز' },
  { href: '/heritage', label: 'التراث' },
  { href: '/craftsmanship', label: 'الحرفية' },
  { href: '/personalisation', label: 'التخصيص' },
  { href: '/giving-forward', label: 'العطاء المستمر' },
  { href: '/contact', label: 'تواصلي معنا' },
]

const FR: AboutTopicLink[] = [
  { href: '/about', label: 'Notre histoire' },
  { href: '/the-codes', label: 'The Codes' },
  { href: '/heritage', label: 'Patrimoine' },
  { href: '/craftsmanship', label: 'Savoir-faire' },
  { href: '/personalisation', label: 'Personnalisation' },
  { href: '/giving-forward', label: 'Transmission' },
  { href: '/contact', label: 'Contact' },
]

const IT: AboutTopicLink[] = [
  { href: '/about', label: 'La nostra storia' },
  { href: '/the-codes', label: 'The Codes' },
  { href: '/heritage', label: 'Heritage' },
  { href: '/craftsmanship', label: 'Artigianalità' },
  { href: '/personalisation', label: 'Personalizzazione' },
  { href: '/giving-forward', label: 'Trasmissione' },
  { href: '/contact', label: 'Contatti' },
]

const DE: AboutTopicLink[] = [
  { href: '/about', label: 'Unsere Geschichte' },
  { href: '/the-codes', label: 'The Codes' },
  { href: '/heritage', label: 'Heritage' },
  { href: '/craftsmanship', label: 'Handwerkskunst' },
  { href: '/personalisation', label: 'Personalisierung' },
  { href: '/giving-forward', label: 'Weitergeben' },
  { href: '/contact', label: 'Kontakt' },
]

const NL: AboutTopicLink[] = [
  { href: '/about', label: 'Ons verhaal' },
  { href: '/the-codes', label: 'The Codes' },
  { href: '/heritage', label: 'Heritage' },
  { href: '/craftsmanship', label: 'Vakmanschap' },
  { href: '/personalisation', label: 'Personalisatie' },
  { href: '/giving-forward', label: 'Doorgeven' },
  { href: '/contact', label: 'Contact' },
]

const PT: AboutTopicLink[] = [
  { href: '/about', label: 'A nossa história' },
  { href: '/the-codes', label: 'The Codes' },
  { href: '/heritage', label: 'Património' },
  { href: '/craftsmanship', label: 'Saber-fazer' },
  { href: '/personalisation', label: 'Personalização' },
  { href: '/giving-forward', label: 'Dar adiante' },
  { href: '/contact', label: 'Contacto' },
]

const ES: AboutTopicLink[] = [
  { href: '/about', label: 'Nuestra historia' },
  { href: '/the-codes', label: 'The Codes' },
  { href: '/heritage', label: 'Patrimonio' },
  { href: '/craftsmanship', label: 'Artesanía' },
  { href: '/personalisation', label: 'Personalización' },
  { href: '/giving-forward', label: 'Dar adelante' },
  { href: '/contact', label: 'Contacto' },
]

const RU: AboutTopicLink[] = [
  { href: '/about', label: 'Наша история' },
  { href: '/the-codes', label: 'The Codes' },
  { href: '/heritage', label: 'Наследие' },
  { href: '/craftsmanship', label: 'Мастерство' },
  { href: '/personalisation', label: 'Персонализация' },
  { href: '/giving-forward', label: 'Передача дальше' },
  { href: '/contact', label: 'Контакты' },
]

const ZH: AboutTopicLink[] = [
  { href: '/about', label: '我们的故事' },
  { href: '/the-codes', label: 'The Codes' },
  { href: '/heritage', label: '传承' },
  { href: '/craftsmanship', label: '工艺' },
  { href: '/personalisation', label: '个性化定制' },
  { href: '/giving-forward', label: '传递向前' },
  { href: '/contact', label: '联系我们' },
]

const ID: AboutTopicLink[] = [
  { href: '/about', label: 'Kisah kami' },
  { href: '/the-codes', label: 'The Codes' },
  { href: '/heritage', label: 'Warisan' },
  { href: '/craftsmanship', label: 'Kriya' },
  { href: '/personalisation', label: 'Personalisasi' },
  { href: '/giving-forward', label: 'Meneruskan' },
  { href: '/contact', label: 'Kontak' },
]

const MS: AboutTopicLink[] = [
  { href: '/about', label: 'Kisah kami' },
  { href: '/the-codes', label: 'The Codes' },
  { href: '/heritage', label: 'Warisan' },
  { href: '/craftsmanship', label: 'Ketukangan' },
  { href: '/personalisation', label: 'Pemperibadian' },
  { href: '/giving-forward', label: 'Meneruskan' },
  { href: '/contact', label: 'Hubungi' },
]

const ARIA: Record<string, string> = {
  en: 'About topics',
  ar: 'مواضيع عن الدار',
  fr: 'Sujets à propos de la maison',
  it: 'Temi sulla maison',
  de: 'Themen über das Haus',
  nl: 'Onderwerpen over het Huis',
  pt: 'Temas sobre a maison',
  es: 'Temas sobre la maison',
  ru: 'Темы о доме',
  zh: '关于品牌的主题',
  id: 'Topik tentang maison',
  ms: 'Topik tentang maison',
}

export function getAboutTopicNavLinks(locale: AppLocale | string): AboutTopicLink[] {
  if (locale === 'ar') return AR
  if (locale === 'fr') return FR
  if (locale === 'it') return IT
  if (locale === 'de') return DE
  if (locale === 'nl') return NL
  if (locale === 'pt') return PT
  if (locale === 'es') return ES
  if (locale === 'ru') return RU
  if (locale === 'zh') return ZH
  if (locale === 'id') return ID
  if (locale === 'ms') return MS
  return EN
}

export function getAboutTopicNavAriaLabel(locale: AppLocale | string): string {
  return ARIA[locale] ?? ARIA.en
}
