/**
 * Full-name checks for subscribe popup, footer subscribe, and contact form.
 * Blocks empty, too-short, repeated-letter, and Latin keyboard-smash names.
 */

import type { AppLocale } from '@/lib/i18n/routing'

export type SubscriberNameResult =
  | { valid: true; name: string }
  | { valid: false; message: string }

type NameMessages = {
  empty: string
  short: string
  tooLong: string
  invalid: string
  gibberish: string
}

const MESSAGES: Record<AppLocale, NameMessages> = {
  en: {
    empty: 'Please enter your full name',
    short: 'Please enter your full name (at least 5 letters — e.g. Amal Al Saeed)',
    tooLong: 'Name is too long',
    invalid: 'Please use letters only (spaces, hyphen and apostrophe are allowed)',
    gibberish: 'That doesn’t look like a real name. Please enter your full name',
  },
  ar: {
    empty: 'يرجى إدخال اسمك الكامل',
    short: 'يرجى إدخال اسمك الكامل (5 أحرف على الأقل — مثل أمل آل سعيد)',
    tooLong: 'الاسم طويل جداً',
    invalid: 'يرجى استخدام الأحرف فقط (المسافات والشرطة والفاصلة العليا مسموحة)',
    gibberish: 'لا يبدو هذا اسماً حقيقياً. يرجى إدخال اسمك الكامل',
  },
  fr: {
    empty: 'Veuillez indiquer votre nom complet',
    short: 'Veuillez indiquer votre nom complet (au moins 5 lettres — ex. Amal Al Saeed)',
    tooLong: 'Ce nom est trop long',
    invalid: 'Veuillez n’utiliser que des lettres (espaces, tiret et apostrophe autorisés)',
    gibberish: 'Cela ne ressemble pas à un vrai nom. Veuillez indiquer votre nom complet',
  },
  it: {
    empty: 'La preghiamo di inserire il suo nome completo',
    short: 'La preghiamo di inserire il nome completo (almeno 5 lettere — es. Amal Al Saeed)',
    tooLong: 'Il nome è troppo lungo',
    invalid: 'La preghiamo di usare solo lettere (spazi, trattino e apostrofo ammessi)',
    gibberish: 'Non sembra un nome reale. La preghiamo di inserire il nome completo',
  },
  es: {
    empty: 'Introduce tu nombre completo',
    short: 'Introduce tu nombre completo (al menos 5 letras — ej. Amal Al Saeed)',
    tooLong: 'El nombre es demasiado largo',
    invalid: 'Usa solo letras (se permiten espacios, guion y apóstrofe)',
    gibberish: 'No parece un nombre real. Introduce tu nombre completo',
  },
  de: {
    empty: 'Bitte geben Sie Ihren vollständigen Namen ein',
    short: 'Bitte vollständigen Namen eingeben (mind. 5 Buchstaben — z. B. Amal Al Saeed)',
    tooLong: 'Der Name ist zu lang',
    invalid: 'Bitte nur Buchstaben verwenden (Leerzeichen, Bindestrich und Apostroph erlaubt)',
    gibberish: 'Das wirkt nicht wie ein echter Name. Bitte vollständigen Namen eingeben',
  },
  nl: {
    empty: 'Voer uw volledige naam in',
    short: 'Voer uw volledige naam in (minstens 5 letters — bijv. Amal Al Saeed)',
    tooLong: 'De naam is te lang',
    invalid: 'Gebruik alleen letters (spaties, streepje en apostrof toegestaan)',
    gibberish: 'Dit lijkt geen echte naam. Voer uw volledige naam in',
  },
  pt: {
    empty: 'Introduza o seu nome completo',
    short: 'Introduza o nome completo (pelo menos 5 letras — ex. Amal Al Saeed)',
    tooLong: 'O nome é demasiado longo',
    invalid: 'Utilize apenas letras (espaços, hífen e apóstrofo permitidos)',
    gibberish: 'Isto não parece um nome real. Introduza o seu nome completo',
  },
  ru: {
    empty: 'Введите полное имя',
    short: 'Введите полное имя (не менее 5 букв — напр. Amal Al Saeed)',
    tooLong: 'Имя слишком длинное',
    invalid: 'Используйте только буквы (пробелы, дефис и апостроф допустимы)',
    gibberish: 'Это не похоже на настоящее имя. Введите полное имя',
  },
  zh: {
    empty: '请输入您的全名',
    short: '请输入您的全名',
    tooLong: '姓名过长',
    invalid: '请仅使用文字（可含空格、连字符与撇号）',
    gibberish: '这看起来不像真实姓名。请输入您的全名',
  },
  id: {
    empty: 'Masukkan nama lengkap Anda',
    short: 'Masukkan nama lengkap (minimal 5 huruf — mis. Amal Al Saeed)',
    tooLong: 'Nama terlalu panjang',
    invalid: 'Gunakan huruf saja (spasi, tanda hubung, dan apostrof diperbolehkan)',
    gibberish: 'Ini tidak terlihat seperti nama asli. Masukkan nama lengkap Anda',
  },
  ms: {
    empty: 'Sila masukkan nama penuh anda',
    short: 'Sila masukkan nama penuh (sekurang-kurangnya 5 huruf — cth. Amal Al Saeed)',
    tooLong: 'Nama terlalu panjang',
    invalid: 'Gunakan huruf sahaja (ruang, tanda sempang dan apostrof dibenarkan)',
    gibberish: 'Ini nampak bukan nama sebenar. Sila masukkan nama penuh anda',
  },
}

const MIN_LETTERS_LATIN = 5
const MIN_LETTERS_CJK = 2
const MAX_CHARS = 80
const NAME_SHAPE = /^[\p{L}\p{M}'’.\- ]+$/u
const LATIN_VOWEL = /[aeiouyàáâãäåèéêëìíîïòóôõöùúûüýÿæœ]/i
const KEYBOARD_FRAGMENTS = [
  'qwerty',
  'asdf',
  'asdfg',
  'zxcv',
  'qazwsx',
  '12345',
  'abcde',
  'abcdef',
]

function messages(locale: AppLocale | string): NameMessages {
  return MESSAGES[locale as AppLocale] ?? MESSAGES.en
}

function lettersOnly(name: string): string[] {
  return [...name].filter((c) => /\p{L}/u.test(c))
}

function isMostlyCjk(letters: string[]): boolean {
  const cjk = letters.filter((c) =>
    /\p{Script=Han}|\p{Script=Hiragana}|\p{Script=Katakana}/u.test(c),
  )
  return cjk.length >= Math.ceil(letters.length * 0.6)
}

function hasRepeatedRun(compact: string): boolean {
  return /(.)\1{2,}/u.test(compact)
}

function mostlySameLetter(letters: string[]): boolean {
  if (letters.length < MIN_LETTERS_LATIN) return false
  const counts = new Map<string, number>()
  for (const c of letters) {
    const key = c.toLocaleLowerCase()
    counts.set(key, (counts.get(key) || 0) + 1)
  }
  const max = Math.max(...counts.values())
  return max / letters.length >= 0.7
}

/** Latin-heavy strings with no vowels (e.g. rjbvgt) or long consonant runs. */
function looksLikeLatinGibberish(letters: string[]): boolean {
  const latin = letters.filter((c) => /[A-Za-zÀ-ÿĀ-ž]/u.test(c))
  if (latin.length < Math.ceil(letters.length * 0.6)) return false
  if (!latin.some((c) => LATIN_VOWEL.test(c))) return true
  const compact = latin.map((c) => c.toLocaleLowerCase()).join('')
  if (/[bcdfghjklmnpqrstvwxz]{5,}/i.test(compact)) return true
  return KEYBOARD_FRAGMENTS.some((frag) => compact.includes(frag))
}

export function validateSubscriberName(
  raw: string,
  locale: AppLocale | string = 'en',
): SubscriberNameResult {
  const msg = messages(locale)
  const name = raw.trim().replace(/\s+/g, ' ')

  if (!name) return { valid: false, message: msg.empty }
  if (name.length > MAX_CHARS) return { valid: false, message: msg.tooLong }
  if (!NAME_SHAPE.test(name)) return { valid: false, message: msg.invalid }

  const letters = lettersOnly(name)
  const minLetters = isMostlyCjk(letters) ? MIN_LETTERS_CJK : MIN_LETTERS_LATIN
  if (letters.length < minLetters || name.length < minLetters) {
    return { valid: false, message: msg.short }
  }

  const compact = letters.join('')
  if (hasRepeatedRun(compact) || mostlySameLetter(letters) || looksLikeLatinGibberish(letters)) {
    return { valid: false, message: msg.gibberish }
  }

  return { valid: true, name }
}
