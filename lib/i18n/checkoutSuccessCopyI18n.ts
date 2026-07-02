import type { AppLocale } from '@/lib/i18n/routing'

export type CheckoutSuccessCopy = {
  breadcrumb: string
  title: string
  subtitle: string
  sessionReference: string
}

const EN: CheckoutSuccessCopy = {
  breadcrumb: 'Order confirmed',
  title: 'Order Confirmed',
  subtitle: 'Thank you for your order. You will receive a confirmation email shortly.',
  sessionReference: 'Order reference',
}

const AR: CheckoutSuccessCopy = {
  breadcrumb: 'تأكيد الطلب',
  title: 'تم تأكيد الطلب',
  subtitle: 'شكراً لطلبك. ستصلك رسالة تأكيد عبر البريد الإلكتروني قريباً.',
  sessionReference: 'رقم الطلب',
}

export function getCheckoutSuccessCopy(locale: AppLocale | string): CheckoutSuccessCopy {
  if (locale === 'ar') return AR
  return EN
}
