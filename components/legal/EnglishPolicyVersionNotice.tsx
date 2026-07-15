'use client'

import Link from 'next/link'
import type { AppLocale } from '@/lib/i18n/routing'
import {
  ENGLISH_POLICY_PATHS,
  getEnglishPolicyNoticeCopy,
  type EnglishPolicyKey,
} from '@/lib/legal/englishPolicyVersionNoticeI18n'

const LINK_CLASS =
  'text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950'

type Props = {
  policy: EnglishPolicyKey
  language: AppLocale
  /** Slightly tighter padding for shipment-style pages */
  compact?: boolean
  className?: string
}

/**
 * Points every non-English locale to the canonical English policy URL (no locale prefix).
 * English is the controlling language; this keeps that version one click away.
 */
export default function EnglishPolicyVersionNotice({
  policy,
  language,
  compact = false,
  className = '',
}: Props) {
  if (language === 'en') return null

  const copy = getEnglishPolicyNoticeCopy(language)
  const href = ENGLISH_POLICY_PATHS[policy]
  const [before = '', after = ''] = copy.template.split('{link}')
  const isRTL = language === 'ar'

  return (
    <aside
      className={`rounded-sm border border-neutral-200 bg-neutral-50 ${
 compact ? 'p-4 md:p-5' : 'p-5 md:p-6'
 } text-start ${className}`}
      role="note"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <p className="font-montserrat text-sm leading-relaxed tracking-wide text-neutral-600">
        {before}
        <Link href={href} className={LINK_CLASS} hrefLang="en" data-cursor-hover>
          {copy.linkLabel}
        </Link>
        {after}
      </p>
    </aside>
  )
}
