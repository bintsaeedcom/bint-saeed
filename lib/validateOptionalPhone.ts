import { isValidPhoneNumber } from 'libphonenumber-js'
import type { AppLocale } from '@/lib/i18n/routing'
import { optionalPhoneValidationMessages } from '@/lib/i18n/optionalPhoneValidationI18n'

export type OptionalPhoneResult =
  | { ok: true; phone?: string }
  | { ok: false; message: string }

/** Accepts E.164 (e.g. +971501234567). Empty / undefined is valid (optional field). */
export function validateOptionalPhone(
  raw: unknown,
  locale: AppLocale | string = 'en',
): OptionalPhoneResult {
  const messages = optionalPhoneValidationMessages(locale)

  if (raw === undefined || raw === null || raw === '') {
    return { ok: true }
  }
  if (typeof raw !== 'string') {
    return { ok: false, message: messages.invalid }
  }
  const trimmed = raw.trim()
  if (!trimmed) {
    return { ok: true }
  }
  if (!isValidPhoneNumber(trimmed)) {
    return { ok: false, message: messages.invalidFormat }
  }
  return { ok: true, phone: trimmed }
}
