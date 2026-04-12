import { isValidPhoneNumber } from 'libphonenumber-js'

export type OptionalPhoneResult =
  | { ok: true; phone?: string }
  | { ok: false; message: string }

/** Accepts E.164 (e.g. +971501234567). Empty / undefined is valid (optional field). */
export function validateOptionalPhone(raw: unknown): OptionalPhoneResult {
  if (raw === undefined || raw === null || raw === '') {
    return { ok: true }
  }
  if (typeof raw !== 'string') {
    return { ok: false, message: 'Invalid phone number' }
  }
  const trimmed = raw.trim()
  if (!trimmed) {
    return { ok: true }
  }
  if (!isValidPhoneNumber(trimmed)) {
    return { ok: false, message: 'Please enter a valid phone number' }
  }
  return { ok: true, phone: trimmed }
}
