'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import { ERROR_PAGE_HOME_HREF } from '@/components/ErrorPageNavLinks'
import { createPortal } from 'react-dom'
import { useLayoutEffect, useState, type ReactNode } from 'react'

export type ErrorPageShellProps = {
  isRTL?: boolean
  /** Status code shown above the title — e.g. 404 */
  statusCode?: string
  title: string
  description: string
  meta?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  /** Keep the description on one line (404 copy) */
  descriptionSingleLine?: boolean
}

export const errorPageBrandLabel =
  'text-center font-montserrat text-[10px] uppercase tracking-[0.38em] text-brand-dustyBlue'

export const errorPageNavBtn =
  'inline-flex min-w-[8.75rem] items-center justify-center gap-1.5 border border-brand-darkRed/28 bg-white/60 px-5 py-2.5 font-montserrat text-[9px] uppercase tracking-[0.22em] text-brand-darkRed transition-colors hover:border-brand-darkRed/45 hover:bg-brand-stone/10'

export const errorPagePrimaryBtn =
  'inline-flex items-center justify-center gap-1.5 bg-brand-darkRed px-5 py-2.5 font-montserrat text-[9px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-brand-darkMagenta'

export const errorPageFooterLabel =
  'text-center font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-clayRed/55'

export default function ErrorPageShell({
  isRTL = false,
  statusCode,
  title,
  description,
  meta,
  children,
  footer,
  descriptionSingleLine = false,
}: ErrorPageShellProps) {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    setPortalTarget(document.body)
    document.documentElement.dataset.bsErrorPage = '1'
    return () => {
      delete document.documentElement.dataset.bsErrorPage
    }
  }, [])

  const shell = (
    <div
      className={`fixed inset-0 z-[250] overflow-y-auto bg-[#faf8f6] safe-area-inset ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(193,144,134,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(59,0,20,0.04),transparent_60%)]"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="relative w-full max-w-[26rem] overflow-hidden rounded-sm border border-brand-stone/25 bg-[#faf8f6] text-center shadow-[0_24px_56px_-20px_rgba(59,0,20,0.16)]"
        >
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
                className="mx-auto h-14 w-auto sm:h-[3.75rem] [filter:none]"
              />
            </LocaleLink>

            <p className={`${errorPageBrandLabel} mt-7`}>Bint Saeed</p>

            {statusCode ? (
              <div className="mt-5 space-y-2">
                <p className="text-center font-rozha text-[3.25rem] leading-none text-brand-stone/22 sm:text-[3.75rem]">
                  {statusCode}
                </p>
                <h1
                  data-document-h1="true"
                  className="font-rozha text-[1.55rem] leading-tight text-brand-darkRed sm:text-[1.75rem]"
                >
                  {title}
                </h1>
              </div>
            ) : (
              <h1
                data-document-h1="true"
                className="mt-5 font-rozha text-[1.65rem] leading-tight text-brand-darkRed sm:text-[1.85rem]"
              >
                {title}
              </h1>
            )}

            <p
              className={`mx-auto mt-4 text-center font-montserrat text-[11px] font-light leading-[1.75] tracking-wide text-neutral-600 sm:text-[12px] ${
                descriptionSingleLine ? 'max-w-[22rem]' : 'max-w-[21rem]'
              }`}
            >
              {description}
            </p>

            {meta ? <div className="mt-3">{meta}</div> : null}

            {children ? <div className="mt-7">{children}</div> : null}

            {footer ? (
              <>
                <div className="my-7 flex items-center justify-center gap-3" aria-hidden>
                  <div className="h-px w-12 bg-brand-stone/22 sm:w-16" />
                  <span className="font-rozha text-xs text-brand-stone/35">✦</span>
                  <div className="h-px w-12 bg-brand-stone/22 sm:w-16" />
                </div>
                {footer}
              </>
            ) : null}
          </div>
        </motion.div>
      </div>
    </div>
  )

  if (!portalTarget) return null
  return createPortal(shell, portalTarget)
}

/** @deprecated Use errorPageNavBtn — kept for imports that expect paired button exports */
export { errorPageNavBtn as errorPageSecondaryBtn }
