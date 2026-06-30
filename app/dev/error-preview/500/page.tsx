'use client'

import ErrorPageShell, { errorPagePrimaryBtn } from '@/components/ErrorPageShell'
import ErrorPageNavLinks from '@/components/ErrorPageNavLinks'
import { FiRefreshCw } from 'react-icons/fi'
import { OFFICIAL_EMAILS, officialMailto } from '@/lib/brand/officialEmails'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getErrorPageCopy } from '@/lib/i18n/errorPageCopyI18n'

/** Dev preview of `app/error.tsx` — not a real thrown error. */
export default function DevErrorPreview500Page() {
  const { language, isRTL } = useLanguage()
  const copy = getErrorPageCopy(language)

  return (
    <ErrorPageShell
      isRTL={isRTL}
      title={copy.title}
      description={copy.description}
      meta={
        <p className="font-montserrat text-[11px] tracking-[0.08em] text-brand-stone/80">
          {copy.errorId}: PREVIEW-500
        </p>
      }
      footer={
        <div>
          <p className="mb-3 font-montserrat text-[11px] tracking-wide text-brand-clayRed/55">
            {copy.needAssistance}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 text-[13px] sm:flex-row sm:gap-5">
            <a
              href={officialMailto('support')}
              className="font-montserrat text-brand-darkRed transition-colors hover:text-brand-darkMagenta"
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
          <button type="button" className={errorPagePrimaryBtn} disabled aria-disabled>
            <FiRefreshCw className="h-4 w-4 shrink-0" strokeWidth={1.25} />
            {copy.tryAgain}
          </button>
        }
      />
    </ErrorPageShell>
  )
}
