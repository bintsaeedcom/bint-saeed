import type { AppLocale } from '@/lib/i18n/routing'

export type CheckoutSuccessCopy = {
  breadcrumb: string
  title: string
  subtitle: string
  sessionReference: string
  keepExploring: string
  keepExploringBody: string
  stayCloseHeading: string
  stayCloseHint: string
}

const EN: CheckoutSuccessCopy = {
  breadcrumb: 'Order confirmed',
  title: 'Order Confirmed',
  subtitle: 'Thank you for your order. You will receive a confirmation email shortly.',
  sessionReference: 'Order reference',
  keepExploring: 'While you wait',
  keepExploringBody: 'Explore the pieces that carry the Bint Saeed story forward.',
  stayCloseHeading: 'Stay close to the House',
  stayCloseHint: 'Private releases, care notes, and new chapters — by email, only when it matters.',
}

const AR: CheckoutSuccessCopy = {
  breadcrumb: 'تأكيد الطلب',
  title: 'تم تأكيد الطلب',
  subtitle: 'شكراً لطلبك. ستصلك رسالة تأكيد عبر البريد الإلكتروني قريباً.',
  sessionReference: 'رقم الطلب',
  keepExploring: 'بينما تنتظرين',
  keepExploringBody: 'استكشفي القطع التي تواصل قصة Bint Saeed.',
  stayCloseHeading: 'ابقي قريبة من الدار',
  stayCloseHint: 'إصدارات خاصة وملاحظات عناية وفصول جديدة — عبر البريد، فقط عندما يهم الأمر.',
}

export function getCheckoutSuccessCopy(locale: AppLocale | string): CheckoutSuccessCopy {
  if (locale === 'ar') return AR
  return EN
}
