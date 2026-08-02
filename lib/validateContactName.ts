import type { AppLocale } from '@/lib/i18n/routing'
import {
  validateSubscriberName,
  type SubscriberNameResult,
} from '@/lib/validateSubscriberName'

export type ContactNameResult = SubscriberNameResult

/** Contact form uses the same full-name / anti-spam rules as House Community subscribe. */
export function validateContactName(raw: string, locale: AppLocale | string = 'en'): ContactNameResult {
  return validateSubscriberName(raw, locale)
}
