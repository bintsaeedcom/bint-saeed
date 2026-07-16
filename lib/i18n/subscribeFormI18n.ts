import type { AppLocale } from '@/lib/i18n/routing'

export type SubscribeNotifyChannel = 'email' | 'whatsapp'

export type SubscribeFormCopy = {
  email: string
  phoneOptional: string
  phoneOptionalNote: string
  phoneRequired: string
  notifyEmail: string
  notifyWhatsApp: string
  notifyHintEmail: string
  notifyHintWhatsApp: string
  phoneRequiredWhatsApp: string
  subscribe: string
  subscribing: string
  success: string
  errorGeneric: string
  privacyLine: string
}

const EN: SubscribeFormCopy = {
  email: 'Email Address',
  phoneOptional: 'Mobile number',
  phoneOptionalNote: '(optional)',
  phoneRequired: 'Mobile number',
  notifyEmail: 'Email updates',
  notifyWhatsApp: 'WhatsApp alerts',
  notifyHintEmail: 'Subscribe for new collections and House previews by email.',
  notifyHintWhatsApp: 'Get notified on WhatsApp when new chapters launch. Add your mobile number below.',
  phoneRequiredWhatsApp: 'Please add your mobile number for WhatsApp alerts.',
  subscribe: 'Subscribe',
  subscribing: 'Subscribing...',
  success: 'Welcome to Bint Saeed!',
  errorGeneric: 'Something went wrong. Please try again.',
  privacyLine: 'By subscribing, you agree to our Privacy Policy and consent to receive updates.',
}

const AR: SubscribeFormCopy = {
  email: 'البريد الإلكتروني',
  phoneOptional: 'رقم الجوال',
  phoneOptionalNote: '(اختياري)',
  phoneRequired: 'رقم الجوال',
  notifyEmail: 'تحديثات بالبريد',
  notifyWhatsApp: 'تنبيهات واتساب',
  notifyHintEmail: 'اشتركي لتصلكِ المجموعات الجديدة ومعاينات الدار عبر البريد.',
  notifyHintWhatsApp: 'تلقّي تنبيهاً على واتساب عند إطلاق فصول جديدة. أضيفي رقم جوالك أدناه.',
  phoneRequiredWhatsApp: 'يرجى إضافة رقم الجوال لتنبيهات واتساب.',
  subscribe: 'اشتركي',
  subscribing: 'جارٍ الاشتراك...',
  success: 'أهلاً بكِ في Bint Saeed!',
  errorGeneric: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
  privacyLine: 'بالاشتراك، توافقين على سياسة الخصوصية وتوافقين على استلام التحديثات.',
}

const NL: SubscribeFormCopy = {
  email: 'E-mailadres',
  phoneOptional: 'Mobiel nummer',
  phoneOptionalNote: '(optioneel)',
  phoneRequired: 'Mobiel nummer',
  notifyEmail: 'Updates per e-mail',
  notifyWhatsApp: 'WhatsApp-meldingen',
  notifyHintEmail: 'Schrijf u in voor nieuwe collecties en previews van het Huis per e-mail.',
  notifyHintWhatsApp: 'Ontvang een melding via WhatsApp wanneer nieuwe hoofdstukken verschijnen. Vul hieronder uw mobiele nummer in.',
  phoneRequiredWhatsApp: 'Voeg uw mobiele nummer toe voor WhatsApp-meldingen.',
  subscribe: 'Inschrijven',
  subscribing: 'Bezig met inschrijven...',
  success: 'Welkom bij Bint Saeed!',
  errorGeneric: 'Er is iets misgegaan. Probeer het opnieuw.',
  privacyLine: 'Door u in te schrijven, gaat u akkoord met ons privacybeleid en met het ontvangen van updates.',
}

export function getSubscribeFormCopy(locale: AppLocale | string): SubscribeFormCopy {
  if (locale === 'ar') return AR
  if (locale === 'nl') return NL
  return EN
}
