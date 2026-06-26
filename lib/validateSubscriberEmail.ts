/**
 * Shared newsletter / subscriber email checks (client + API).
 * Refuses malformed addresses and common domain typos.
 */

import type { AppLocale } from '@/lib/i18n/routing'
import { subscriberValidationMessages } from '@/lib/i18n/subscriberValidationI18n'

const COMMON_DOMAIN_TYPOS: Record<string, string> = {
  'gmial.com': 'gmail.com',
  'gmal.com': 'gmail.com',
  'gamil.com': 'gmail.com',
  'gnail.com': 'gmail.com',
  'gmail.co': 'gmail.com',
  'hotmal.com': 'hotmail.com',
  'hotmai.com': 'hotmail.com',
  'outlok.com': 'outlook.com',
  'yahooo.com': 'yahoo.com',
}

export type SubscriberEmailResult =
  | { valid: true; email: string }
  | { valid: false; message: string }

const BASIC_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateSubscriberEmail(raw: string, locale: AppLocale | string = 'en'): SubscriberEmailResult {
  const msg = subscriberValidationMessages(locale)
  const email = raw.trim()
  if (!email) {
    return { valid: false, message: msg.empty }
  }
  if (email.length > 254) {
    return { valid: false, message: msg.tooLong }
  }
  if (!BASIC_EMAIL.test(email)) {
    return { valid: false, message: msg.invalid }
  }

  const at = email.indexOf('@')
  if (at < 1) {
    return { valid: false, message: msg.invalid }
  }

  const local = email.slice(0, at)
  const domain = email.slice(at + 1)

  if (!local || !domain || local.length > 64) {
    return { valid: false, message: msg.invalid }
  }
  if (local.startsWith('.') || local.endsWith('.') || local.includes('..')) {
    return { valid: false, message: msg.invalid }
  }
  if (domain.includes('..') || domain.startsWith('.') || domain.endsWith('.')) {
    return { valid: false, message: msg.invalid }
  }

  const domainLower = domain.toLowerCase()
  const lastDot = domainLower.lastIndexOf('.')
  const tld = lastDot >= 0 ? domainLower.slice(lastDot + 1) : ''
  if (tld.length < 2 || tld.length > 63 || !/^[a-z0-9]+$/i.test(tld)) {
    return { valid: false, message: msg.invalid }
  }

  const typo = COMMON_DOMAIN_TYPOS[domainLower]
  if (typo) {
    return {
      valid: false,
      message: msg.typo(local, typo),
    }
  }

  return { valid: true, email: email.toLowerCase() }
}
