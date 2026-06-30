'use client'

import { useState } from 'react'
import LocaleLink from '@/components/LocaleLink'
import Image from 'next/image'
import { FiAlertTriangle, FiRefreshCw } from 'react-icons/fi'
import { getErrorPageCopy } from '@/lib/i18n/errorPageCopyI18n'
import ErrorPageNavLinks, {
  ERROR_PAGE_COLLECTION_HREF,
  ERROR_PAGE_HOME_HREF,
} from '@/components/ErrorPageNavLinks'
import { errorPageBrandLabel, errorPagePrimaryBtn } from '@/components/ErrorPageShell'

/** Dev preview of `app/global-error.tsx`. */
export default function DevErrorPreviewGlobalPage() {
  const [isRTL] = useState(false)
  const copy = getErrorPageCopy('en')

  return (
    <div className={`relative min-h-screen overflow-hidden bg-[#faf8f6] ${isRTL ? 'rtl' : 'ltr'}`}>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(193,144,134,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-14 sm:px-6 sm:py-20">
        <div className="relative w-full max-w-[26rem] overflow-hidden rounded-sm border border-brand-stone/25 bg-[#faf8f6] text-center shadow-[0_24px_56px_-20px_rgba(59,0,20,0.16)]">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent via-brand-rose/55 to-transparent" />
          <div className="px-8 pb-9 pt-10 sm:px-9 sm:pb-10 sm:pt-11">
            <LocaleLink href={ERROR_PAGE_HOME_HREF}>
              <Image
                src="/gold logo.png"
                alt="Bint Saeed"
                width={120}
                height={120}
                className="mx-auto h-14 w-auto sm:h-[3.75rem]"
              />
            </LocaleLink>

            <p className={`${errorPageBrandLabel} mt-7`}>Bint Saeed</p>

            <div className="mx-auto mt-5 flex h-11 w-11 items-center justify-center rounded-full border border-brand-stone/22 bg-white/70">
              <FiAlertTriangle className="h-5 w-5 text-brand-clayRed/75" strokeWidth={1.25} />
            </div>

            <h1 className="mt-4 font-rozha text-[1.65rem] leading-tight text-brand-darkRed sm:text-[1.85rem]">
              {copy.globalTitle}
            </h1>
            <p className="mx-auto mt-4 max-w-[21rem] font-montserrat text-[12px] font-light leading-[1.75] tracking-wide text-neutral-600">
              {copy.globalDescription}
            </p>
            <p className="mt-3 font-montserrat text-[11px] tracking-[0.08em] text-brand-stone/80">
              {copy.errorId}: PREVIEW-GLOBAL
            </p>

            <div className="mt-7">
              <ErrorPageNavLinks
                isRTL={isRTL}
                homeLabel={copy.home}
                collectionLabel={copy.collection}
                homeHref={ERROR_PAGE_HOME_HREF}
                collectionHref={ERROR_PAGE_COLLECTION_HREF}
                leading={
                  <button type="button" className={errorPagePrimaryBtn} disabled aria-disabled>
                    <FiRefreshCw className="h-3.5 w-3.5 shrink-0" strokeWidth={1.25} />
                    {copy.tryAgain}
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
