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
  if (locale === 'it') {
    return {
      empty: 'La preghiamo di inserire il suo nome',
      short: 'La preghiamo di inserire il nome completo',
      tooLong: 'Il nome è troppo lungo',
      invalid: 'La preghiamo di inserire un nome valido',
    }
  }
  if (locale === 'fr') {
    return {
      empty: 'Veuillez indiquer votre nom',
      short: 'Veuillez indiquer votre nom complet',
      tooLong: 'Ce nom est trop long',
      invalid: 'Veuillez indiquer un nom valide',
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
  if (name.length < 3) return { valid: false, message: msg.short }
  if (name.length > 120) return { valid: false, message: msg.tooLong }
  if (!/\p{L}/u.test(name)) return { valid: false, message: msg.invalid }
  return { valid: true, name }
}
