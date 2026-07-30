import { CONTACT_SUBJECT_VALUES } from '@/lib/content/contactPageCopyI18n'

const SUBJECT_SET = new Set<string>(CONTACT_SUBJECT_VALUES)

/** Minimum meaningful enquiry length — blocks empty / one-word bot posts. */
export const CONTACT_MESSAGE_MIN_CHARS = 20

/** Bots often submit within milliseconds of loading the page. */
export const CONTACT_FORM_MIN_DWELL_MS = 2_500

export function isAllowedContactSubject(subject: string): boolean {
  return SUBJECT_SET.has(subject.trim())
}

/**
 * Cheap bot heuristics. Fail closed for obvious junk; keep quiet for honeypot
 * (caller should fake success without notifying Slack).
 */
export function assessContactSubmission(input: {
  honeypot?: string
  message: string
  formStartedAt?: unknown
  now?: number
}): { ok: true } | { ok: false; silent: boolean; error: string } {
  if (input.honeypot && input.honeypot.trim()) {
    return { ok: false, silent: true, error: 'Ignored.' }
  }

  const message = input.message.trim()
  if (message.length < CONTACT_MESSAGE_MIN_CHARS) {
    return {
      ok: false,
      silent: false,
      error: `Please share a little more detail (at least ${CONTACT_MESSAGE_MIN_CHARS} characters).`,
    }
  }

  const urlMatches = message.match(/https?:\/\/|www\./gi)
  if (urlMatches && urlMatches.length >= 3) {
    return { ok: false, silent: false, error: 'Please remove excess links from your message.' }
  }

  // Repeated character spam (aaaaaaaa / !!!!!!)
  if (/(.)\1{9,}/u.test(message)) {
    return { ok: false, silent: false, error: 'Please enter a genuine message.' }
  }

  const started =
    typeof input.formStartedAt === 'number' && Number.isFinite(input.formStartedAt)
      ? input.formStartedAt
      : null
  const now = input.now ?? Date.now()
  // Browser clients always send formStartedAt. Missing/invalid → treat as bot.
  if (started === null) {
    return { ok: false, silent: true, error: 'Ignored.' }
  }
  if (started > now + 5_000) {
    return { ok: false, silent: true, error: 'Ignored.' }
  }
  if (now - started < CONTACT_FORM_MIN_DWELL_MS) {
    return { ok: false, silent: true, error: 'Ignored.' }
  }
  // Stale timestamps older than 24h — treat as replay junk
  if (now - started > 24 * 60 * 60 * 1000) {
    return { ok: false, silent: true, error: 'Ignored.' }
  }

  return { ok: true }
}
