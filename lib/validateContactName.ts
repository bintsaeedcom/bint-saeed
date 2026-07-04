import type { AppLocale } from '@/lib/i18n/routing'

export type ContactNameResult =
  | { valid: true; name: string }
  | { valid: false; message: string }

function contactNameMessages(locale: AppLocale | string) {
  if (locale === 'ar') {
    return {
      empty: 'يرجى إدخال اسمك',
      short: 'يرجى إدخال اسم كامل',
      tooLong: 'الاسم طويل جداً',
      invalid: 'يرجى إدخال اسم صالح',
    }
  }
  return {
    empty: 'Please enter your name',
    short: 'Please enter your full name',
    tooLong: 'Name is too long',
    invalid: 'Please enter a valid name',
  }
}

export function validateContactName(raw: string, locale: AppLocale | string = 'en'): ContactNameResult {
  const msg = contactNameMessages(locale)
  const name = raw.trim().replace(/\s+/g, ' ')
  if (!name) return { valid: false, message: msg.empty }
  if (name.length < 2) return { valid: false, message: msg.short }
  if (name.length > 120) return { valid: false, message: msg.tooLong }
  if (!/\p{L}/u.test(name)) return { valid: false, message: msg.invalid }
  return { valid: true, name }
}
