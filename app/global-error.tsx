'use client'

import { useEffect, useState } from 'react'
import LocaleLink from '@/components/LocaleLink'
import Image from 'next/image'
import { FiAlertTriangle, FiHome, FiRefreshCw } from 'react-icons/fi'
import { getErrorPageCopyFromPathname } from '@/lib/i18n/errorPageCopyI18n'
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
      <body className="min-h-screen bg-brand-pageCanvas font-montserrat antialiased">
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 safe-area-inset">
          <div className="text-center max-w-xl w-full border border-brand-stone/25 bg-white/90 p-8 sm:p-10 shadow-[0_22px_55px_rgba(28,14,18,0.12)] backdrop-blur-sm">
            <div className="mb-8">
              <LocaleLink href="/" data-cursor-hover>
                <Image
                  src="/gold logo.png"
                  alt="Bint Saeed"
                  width={96}
                  height={96}
                  className="mx-auto h-14 w-auto sm:h-16 [filter:none]"
                />
              </LocaleLink>
            </div>

            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-brand-rose/10 rounded-full flex items-center justify-center">
              <FiAlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-brand-clayRed" />
            </div>

            <p className="mb-3 font-montserrat text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue">
              Bint Saeed
            </p>
            <h1 data-document-h1="true" className="font-rozha text-3xl sm:text-4xl md:text-5xl text-brand-darkRed mb-4">
              {copy.globalTitle}
            </h1>
            <p className="font-montserrat text-sm sm:text-base text-brand-clayRed/70 tracking-[0.03em] mb-8 max-w-md mx-auto px-4">
              {copy.globalDescription}
            </p>

            {error.digest ? (
              <p className="font-montserrat text-xs text-brand-stone mb-6 px-4 tracking-[0.03em]">
                {copy.errorId}: {error.digest}
              </p>
            ) : null}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button
                onClick={() => reset()}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-brand-darkRed text-white font-montserrat text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors"
                data-cursor-hover
              >
                <FiRefreshCw className="w-4 h-4" />
                {copy.tryAgain}
              </button>
              <LocaleLink
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-brand-darkRed text-brand-darkRed font-montserrat text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue hover:text-white transition-colors"
                data-cursor-hover
              >
                <FiHome className="w-4 h-4" />
                {copy.goToHome}
              </LocaleLink>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
