import type { AppLocale } from '@/lib/i18n/routing'

type PhoneValidationMessages = {
  invalid: string
  invalidFormat: string
}

const MESSAGES: Record<AppLocale, PhoneValidationMessages> = {
  en: {
    invalid: 'Invalid phone number',
    invalidFormat: 'Please enter a valid phone number',
  },
  ar: {
    invalid: 'رقم هاتف غير صالح',
    invalidFormat: 'يرجى إدخال رقم هاتف صالح',
  },
  fr: {
    invalid: 'Numéro de téléphone invalide',
    invalidFormat: 'Veuillez saisir un numéro de téléphone valide',
  },
  it: {
    invalid: 'Numero di telefono non valido',
    invalidFormat: 'Inserisci un numero di telefono valido',
  },
  es: {
    invalid: 'Número de teléfono no válido',
    invalidFormat: 'Introduce un número de teléfono válido',
  },
  ru: {
    invalid: 'Недействительный номер телефона',
    invalidFormat: 'Введите действительный номер телефона',
  },
  zh: {
    invalid: '电话号码无效',
    invalidFormat: '请输入有效的电话号码',
  },
  de: {
    invalid: 'Ungültige Telefonnummer',
    invalidFormat: 'Bitte geben Sie eine gültige Telefonnummer ein',
  },
  nl: {
    invalid: 'Ongeldig telefoonnummer',
    invalidFormat: 'Voer een geldig telefoonnummer in',
  },
  pt: {
    invalid: 'Número de telefone inválido',
    invalidFormat: 'Introduza um número de telefone válido',
  },
  id: {
    invalid: 'Nomor telepon tidak valid',
    invalidFormat: 'Masukkan nomor telepon yang valid',
  },
  ms: {
    invalid: 'Nombor telefon tidak sah',
    invalidFormat: 'Sila masukkan nombor telefon yang sah',
  },
}

export function optionalPhoneValidationMessages(locale: AppLocale | string = 'en'): PhoneValidationMessages {
  const pack = MESSAGES[locale as AppLocale]
  if (!pack) throw new Error(`Missing phone validation messages for locale: ${locale}`)
  return pack
}
