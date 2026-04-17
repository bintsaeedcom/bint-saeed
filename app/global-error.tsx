'use client'

import LocaleLink from '@/components/LocaleLink'
import Image from 'next/image'
import { FiAlertTriangle, FiHome, FiRefreshCw } from 'react-icons/fi'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[linear-gradient(165deg,#f7f5f0_0%,#eeece4_38%,#e3dfd3_100%)]">
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 safe-area-inset">
          <div className="text-center max-w-xl w-full border border-brand-stone/25 bg-white/90 p-8 sm:p-10 shadow-[0_22px_55px_rgba(28,14,18,0.12)] backdrop-blur-sm">
            <div className="mb-8">
              <LocaleLink href="/" data-cursor-hover>
                <Image
                  src="/logo.png"
                  alt="Bint Saeed"
                  width={180}
                  height={60}
                  className="h-12 sm:h-16 w-auto mx-auto"
                />
              </LocaleLink>
            </div>

            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-brand-rose/10 rounded-full flex items-center justify-center">
              <FiAlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-brand-clayRed" />
            </div>

            <p className="mb-3 font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue">Bint Saeed</p>
            <h1 data-document-h1="true" className="font-rozha text-3xl sm:text-4xl md:text-5xl text-brand-darkRed mb-4">
              We Hit an Unexpected Issue
            </h1>
            <p className="font-roboto text-sm sm:text-base text-brand-clayRed/70 tracking-wide mb-8 max-w-md mx-auto px-4">
              Please try again. If the issue continues, return home and try again in a moment.
            </p>

            {error.digest ? (
              <p className="font-roboto text-xs text-brand-stone mb-6 px-4">Error ID: {error.digest}</p>
            ) : null}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button
                onClick={() => reset()}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-brand-darkRed text-white font-roboto text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors"
                data-cursor-hover
              >
                <FiRefreshCw className="w-4 h-4" />
                Try Again
              </button>
              <LocaleLink
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-brand-darkRed text-brand-darkRed font-roboto text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue hover:text-white transition-colors"
                data-cursor-hover
              >
                <FiHome className="w-4 h-4" />
                Go to Home
              </LocaleLink>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
