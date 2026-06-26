import type { AppLocale } from '@/lib/i18n/routing'

export type SubscribeFormCopy = {
  firstName: string
  lastName: string
  email: string
  phoneOptional: string
  phoneOptionalNote: string
  subscribe: string
  subscribing: string
  success: string
  errorGeneric: string
  privacyLine: string
}

const EN: SubscribeFormCopy = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email Address',
  phoneOptional: 'Phone',
  phoneOptionalNote: '(optional)',
  subscribe: 'Subscribe',
  subscribing: 'Subscribing...',
  success: 'Welcome to Bint Saeed!',
  errorGeneric: 'Something went wrong. Please try again.',
  privacyLine: 'By subscribing, you agree to our Privacy Policy and consent to receive updates.',
}

const AR: SubscribeFormCopy = {
  firstName: 'الاسم الأول',
  lastName: 'اسم العائلة',
  email: 'البريد الإلكتروني',
  phoneOptional: 'الهاتف',
  phoneOptionalNote: '(اختياري)',
  subscribe: 'اشتركي',
  subscribing: 'جارٍ الاشتراك...',
  success: 'أهلاً بكِ في Bint Saeed!',
  errorGeneric: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
  privacyLine: 'بالاشتراك، توافقين على سياسة الخصوصية وتوافقين على استلام التحديثات.',
}

export function getSubscribeFormCopy(locale: AppLocale | string): SubscribeFormCopy {
  if (locale === 'ar') return AR
  return EN
}
