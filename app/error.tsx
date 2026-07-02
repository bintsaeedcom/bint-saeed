'use client'

import { useEffect } from 'react'
import ErrorPageShell, { errorPageFooterLabel, errorPagePrimaryBtn } from '@/components/ErrorPageShell'
import ErrorPageNavLinks from '@/components/ErrorPageNavLinks'
import { FiRefreshCw } from 'react-icons/fi'
import { OFFICIAL_EMAILS, officialMailto } from '@/lib/brand/officialEmails'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getErrorPageCopy } from '@/lib/i18n/errorPageCopyI18n'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { language, isRTL } = useLanguage()
  const copy = getErrorPageCopy(language)

  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <ErrorPageShell
      isRTL={isRTL}
      title={copy.title}
      description={copy.description}
      meta={
        error.digest ? (
          <p className="text-center font-montserrat text-[11px] tracking-[0.08em] text-brand-stone/80">
            {copy.errorId}: {error.digest}
          </p>
        ) : null
      }
      footer={
        <div className="text-center">
          <p className={`${errorPageFooterLabel} mb-3`}>
            {copy.needAssistance}
          </p>
          <div className={`flex flex-col items-center justify-center gap-3 text-[13px] sm:flex-row sm:gap-5 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <a
              href={officialMailto('support')}
              className="font-montserrat text-brand-darkRed transition-colors hover:text-brand-darkMagenta"
              data-cursor-hover
            >
              {OFFICIAL_EMAILS.support}
            </a>
            <span className="hidden text-brand-stone/50 sm:inline" aria-hidden>
              ·
            </span>
            <a
              href="https://wa.me/971502299402"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-brand-darkRed transition-colors hover:text-brand-darkMagenta"
              data-cursor-hover
            >
              {copy.whatsAppSupport}
            </a>
          </div>
        </div>
      }
    >
      <ErrorPageNavLinks
        isRTL={isRTL}
        homeLabel={copy.home}
        collectionLabel={copy.collection}
        leading={
          <button type="button" onClick={() => reset()} className={errorPagePrimaryBtn} data-cursor-hover>
            <FiRefreshCw className="h-4 w-4 shrink-0" strokeWidth={1.25} />
            {copy.tryAgain}
          </button>
        }
      />
    </ErrorPageShell>
  )
}
