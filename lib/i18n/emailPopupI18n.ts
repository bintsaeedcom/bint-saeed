import type { AppLocale } from '@/lib/i18n/routing'

export type EmailPopupCopy = {
  imageAlt: string
  exclusiveOffer: string
  headline: string
  body: string
  firstName: string
  email: string
  signingUp: string
  signUp: string
  privacyLine: string
  welcome: string
  discountIntro: string
  copyHint: string
  startShopping: string
  emailCheckError: string
  genericError: string
  codeCopied: string
}

const EN: EmailPopupCopy = {
  imageAlt: 'Bint Saeed Collection',
  exclusiveOffer: 'Exclusive Offer',
  headline: 'Get 10% Off',
  body: 'Subscribe to our newsletter and receive an exclusive discount on your first order, plus the latest designs and offers.',
  firstName: 'First name',
  email: 'Email',
  signingUp: 'Signing up...',
  signUp: 'Sign me up!',
  privacyLine: 'By subscribing, you agree to our Privacy Policy and receiving marketing emails.',
  welcome: 'Welcome!',
  discountIntro: "Here's your exclusive discount code:",
  copyHint: 'Click to copy • Valid for 30 days',
  startShopping: 'Start Shopping',
  emailCheckError: 'Please check your email address.',
  genericError: 'Something went wrong. Please try again.',
  codeCopied: 'Code copied!',
}

const AR: EmailPopupCopy = {
  imageAlt: 'مجموعة Bint Saeed',
  exclusiveOffer: 'خصم حصري',
  headline: 'احصلي على خصم 10%',
  body: 'اشتركي في نشرتنا واحصلي على خصم حصري على طلبك الأول، بالإضافة إلى أحدث التصاميم والعروض.',
  firstName: 'الاسم الأول',
  email: 'البريد الإلكتروني',
  signingUp: 'جاري التسجيل...',
  signUp: 'اشتركي الآن',
  privacyLine: 'بالاشتراك، توافقين على سياسة الخصوصية وتلقي رسائل تسويقية.',
  welcome: 'مرحباً بك!',
  discountIntro: 'هذا كود الخصم الخاص بك:',
  copyHint: 'اضغطي لنسخ الكود • صالح لمدة 30 يوماً',
  startShopping: 'ابدئي التسوق',
  emailCheckError: 'يرجى التحقق من البريد الإلكتروني.',
  genericError: 'حدث خطأ. حاولي مرة أخرى.',
  codeCopied: 'تم نسخ الكود!',
}

export function getEmailPopupCopy(locale: AppLocale | string): EmailPopupCopy {
  if (locale === 'ar') return AR
  return EN
}
