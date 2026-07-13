import {
  isPlausibleTamaraPhone,
  normalizeTamaraPhone,
} from '@/lib/tamara/normalizePhone'

export type BnplFormValues = {
  firstName: string
  lastName: string
  email: string
  phone: string
  line1: string
  city: string
}

export type BnplFormField = keyof BnplFormValues

export type BnplValidationResult =
  | { ok: true; phoneNormalized: string }
  | { ok: false; field: BnplFormField; message: string }

function msg(language: string, en: string, ar: string): string {
  return language === 'ar' ? ar : en
}

/**
 * Validate Tamara / Tabby details before API call.
 * Returns the first field problem with a shopper-facing message.
 */
export function validateBnplCheckoutForm(
  values: BnplFormValues,
  options: {
    language: string
    provider: 'tamara' | 'tabby'
    countryCode?: 'AE' | 'SA'
  },
): BnplValidationResult {
  const countryCode = options.countryCode ?? 'AE'
  const firstName = values.firstName.trim()
  const lastName = values.lastName.trim()
  const email = values.email.trim()
  const phoneRaw = values.phone.trim()
  const line1 = values.line1.trim()
  const city = values.city.trim()

  if (!firstName) {
    return {
      ok: false,
      field: 'firstName',
      message: msg(options.language, 'Please enter your first name.', 'يرجى إدخال الاسم الأول.'),
    }
  }
  if (!lastName) {
    return {
      ok: false,
      field: 'lastName',
      message: msg(options.language, 'Please enter your last name.', 'يرجى إدخال اسم العائلة.'),
    }
  }
  if (!email) {
    return {
      ok: false,
      field: 'email',
      message: msg(options.language, 'Please enter your email address.', 'يرجى إدخال البريد الإلكتروني.'),
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      ok: false,
      field: 'email',
      message: msg(
        options.language,
        'Please enter a valid email address (e.g. name@example.com).',
        'يرجى إدخال بريد إلكتروني صالح (مثال name@example.com).',
      ),
    }
  }
  if (!phoneRaw) {
    return {
      ok: false,
      field: 'phone',
      message: msg(
        options.language,
        'Please enter your mobile number.',
        'يرجى إدخال رقم الجوال.',
      ),
    }
  }

  const phoneNormalized = normalizeTamaraPhone(phoneRaw, countryCode)
  if (!isPlausibleTamaraPhone(phoneNormalized, countryCode)) {
    return {
      ok: false,
      field: 'phone',
      message:
        countryCode === 'SA'
          ? msg(
              options.language,
              'Enter a valid Saudi mobile (05XXXXXXXX or 9665XXXXXXXX).',
              'أدخلي جوال سعودي صالح (05XXXXXXXX أو 9665XXXXXXXX).',
            )
          : msg(
              options.language,
              'Enter a valid UAE mobile (05XXXXXXXX or 9715XXXXXXXX).',
              'أدخلي جوال إماراتي صالح (05XXXXXXXX أو 9715XXXXXXXX).',
            ),
    }
  }

  if (!line1) {
    return {
      ok: false,
      field: 'line1',
      message: msg(
        options.language,
        'Please enter your shipping street address.',
        'يرجى إدخال عنوان الشارع للشحن.',
      ),
    }
  }
  if (!city) {
    return {
      ok: false,
      field: 'city',
      message: msg(options.language, 'Please enter your city.', 'يرجى إدخال المدينة.'),
    }
  }

  return { ok: true, phoneNormalized }
}
