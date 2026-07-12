import type { AppLocale } from '@/lib/i18n/routing'

type ValidationMessages = {
  empty: string
  tooLong: string
  invalid: string
  typo: (local: string, domain: string) => string
}

const MESSAGES: Record<AppLocale, ValidationMessages> = {
  en: {
    empty: 'Please enter your email address',
    tooLong: 'Email address is too long',
    invalid: 'Please enter a valid email address',
    typo: (local, domain) => `Did you mean ${local}@${domain}?`,
  },
  ar: {
    empty: 'يرجى إدخال بريدك الإلكتروني',
    tooLong: 'عنوان البريد الإلكتروني طويل جداً',
    invalid: 'يرجى إدخال بريد إلكتروني صالح',
    typo: (local, domain) => `هل تقصدين ${local}@${domain}؟`,
  },
  fr: {
    empty: 'Veuillez saisir votre adresse e-mail',
    tooLong: 'L’adresse e-mail est trop longue',
    invalid: 'Veuillez saisir une adresse e-mail valide',
    typo: (local, domain) => `Vouliez-vous dire ${local}@${domain} ?`,
  },
  it: {
    empty: 'Inserisci il tuo indirizzo e-mail',
    tooLong: 'L’indirizzo e-mail è troppo lungo',
    invalid: 'Inserisci un indirizzo e-mail valido',
    typo: (local, domain) => `Intendevi ${local}@${domain}?`,
  },
  es: {
    empty: 'Introduce tu correo electrónico',
    tooLong: 'La dirección de correo es demasiado larga',
    invalid: 'Introduce un correo electrónico válido',
    typo: (local, domain) => `¿Quisiste decir ${local}@${domain}?`,
  },
  ru: {
    empty: 'Введите адрес электронной почты',
    tooLong: 'Адрес электронной почты слишком длинный',
    invalid: 'Введите действительный адрес электронной почты',
    typo: (local, domain) => `Вы имели в виду ${local}@${domain}?`,
  },
  zh: {
    empty: '请输入您的电子邮箱',
    tooLong: '电子邮箱地址过长',
    invalid: '请输入有效的电子邮箱',
    typo: (local, domain) => `您是否指的是 ${local}@${domain}？`,
  },
  de: {
    empty: 'Bitte geben Sie Ihre E-Mail-Adresse ein',
    tooLong: 'Die E-Mail-Adresse ist zu lang',
    invalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    typo: (local, domain) => `Meinten Sie ${local}@${domain}?`,
  },
  nl: {
    empty: 'Voer uw e-mailadres in',
    tooLong: 'Het e-mailadres is te lang',
    invalid: 'Voer een geldig e-mailadres in',
    typo: (local, domain) => `Bedoelde u ${local}@${domain}?`,
  },
  pt: {
    empty: 'Introduza o seu e-mail',
    tooLong: 'O endereço de e-mail é demasiado longo',
    invalid: 'Introduza um endereço de e-mail válido',
    typo: (local, domain) => `Quis dizer ${local}@${domain}?`,
  },
  id: {
    empty: 'Masukkan alamat email Anda',
    tooLong: 'Alamat email terlalu panjang',
    invalid: 'Masukkan alamat email yang valid',
    typo: (local, domain) => `Apakah maksud Anda ${local}@${domain}?`,
  },
  ms: {
    empty: 'Sila masukkan alamat e-mel anda',
    tooLong: 'Alamat e-mel terlalu panjang',
    invalid: 'Sila masukkan alamat e-mel yang sah',
    typo: (local, domain) => `Adakah anda maksudkan ${local}@${domain}?`,
  },
}

export function subscriberValidationMessages(locale: AppLocale | string = 'en'): ValidationMessages {
  const pack = MESSAGES[locale as AppLocale]
  if (!pack) throw new Error(`Missing subscriber validation messages for locale: ${locale}`)
  return pack
}
