import type { AppLocale } from '@/lib/i18n/routing'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'

export type ErrorPageCopy = {
  title: string
  description: string
  errorId: string
  tryAgain: string
  goToHome: string
  needAssistance: string
  whatsAppSupport: string
  globalTitle: string
  globalDescription: string
}

const EN: ErrorPageCopy = {
  title: 'Something Went Wrong',
  description: 'We apologize for the inconvenience. Please try again, or contact us if the problem persists.',
  errorId: 'Error ID',
  tryAgain: 'Try Again',
  goToHome: 'Go to Home',
  needAssistance: 'Need assistance?',
  whatsAppSupport: 'WhatsApp Support',
  globalTitle: 'We Hit an Unexpected Issue',
  globalDescription: 'Please try again. If the issue continues, return home and try again in a moment.',
}

const AR: ErrorPageCopy = {
  title: 'حدث خطأ ما',
  description: 'نعتذر عن الإزعاج. يرجى المحاولة مرة أخرى، أو التواصلي معنا إذا استمرت المشكلة.',
  errorId: 'رقم الخطأ',
  tryAgain: 'حاولي مرة أخرى',
  goToHome: 'العودة للرئيسية',
  needAssistance: 'تحتاجين مساعدة؟',
  whatsAppSupport: 'دعم واتساب',
  globalTitle: 'واجهنا مشكلة غير متوقعة',
  globalDescription: 'يرجى المحاولة مرة أخرى. إذا استمرت المشكلة، عودي للرئيسية وحاولي بعد قليل.',
}

export function getErrorPageCopy(locale: AppLocale | string): ErrorPageCopy {
  if (locale === 'ar') return AR
  return EN
}

/** For global-error.tsx (no React context) — reads locale from URL path. */
export function getErrorPageCopyFromPathname(pathname: string): ErrorPageCopy {
  const { locale } = stripLocaleFromPathname(pathname)
  return getErrorPageCopy(locale)
}
