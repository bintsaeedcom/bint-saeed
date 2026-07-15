'use client'

import { useEffect, useState } from 'react'
import LocaleLink from '@/components/LocaleLink'
import Image from 'next/image'
import { FiAlertTriangle, FiRefreshCw } from 'react-icons/fi'
import { getErrorPageCopyFromPathname } from '@/lib/i18n/errorPageCopyI18n'
import ErrorPageNavLinks, {
  ERROR_PAGE_COLLECTION_HREF,
  ERROR_PAGE_HOME_HREF,
} from '@/components/ErrorPageNavLinks'
import {
  errorPageBrandLabel,
  errorPagePrimaryBtn,
} from '@/components/ErrorPageShell'
import './globals.css'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [pathname, setPathname] = useState('/')

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  const copy = getErrorPageCopyFromPathname(pathname)
  const isRTL = pathname.startsWith('/ar')

  return (
    <html lang={isRTL ? 'ar' : 'en'} dir={isRTL ? 'rtl' : 'ltr'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Rozha+One&display=swap"
        />
      </head>
      <body className="min-h-screen bg-[#faf8f6] font-montserrat antialiased">
        <div
          className={`relative min-h-screen overflow-hidden `}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(193,144,134,0.12),transparent_55%)]"
            aria-hidden
          />
          <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-14 sm:px-6 sm:py-20">
            <div className="relative w-full max-w-[26rem] overflow-hidden rounded-sm border border-brand-stone/25 bg-[#faf8f6] text-center shadow-[0_24px_56px_-20px_rgba(59,0,20,0.16)]">
              <div
                className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent via-brand-rose/55 to-transparent"
                aria-hidden
              />
              <div className="px-8 pb-9 pt-10 sm:px-9 sm:pb-10 sm:pt-11">
                <LocaleLink href={ERROR_PAGE_HOME_HREF} className="inline-block" data-cursor-hover>
                  <Image
                    src="/gold logo.png"
                    alt="Bint Saeed"
                    width={120}
                    height={120}
                    priority
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
                <p className="mx-auto mt-4 max-w-[21rem] text-center font-montserrat text-[12px] font-light leading-[1.75] tracking-wide text-neutral-600">
                  {copy.globalDescription}
                </p>

                {error.digest ? (
                  <p className="mt-3 text-center font-montserrat text-[11px] tracking-[0.08em] text-brand-stone/80">
                    {copy.errorId}: {error.digest}
                  </p>
                ) : null}

                <div className="mt-7">
                  <ErrorPageNavLinks
                    isRTL={isRTL}
                    homeLabel={copy.home}
                    collectionLabel={copy.collection}
                    homeHref={ERROR_PAGE_HOME_HREF}
                    collectionHref={ERROR_PAGE_COLLECTION_HREF}
                    leading={
                      <button type="button" onClick={() => reset()} className={errorPagePrimaryBtn} data-cursor-hover>
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
      </body>
    </html>
  )
}
