'use client'

import type { ReactNode } from 'react'
import LocaleLink from '@/components/LocaleLink'
import { FiHome, FiShoppingBag } from 'react-icons/fi'
import { errorPageNavBtn } from '@/components/ErrorPageShell'

export const ERROR_PAGE_HOME_HREF = '/home'
export const ERROR_PAGE_COLLECTION_HREF = '/shop'

type ErrorPageNavLinksProps = {
  isRTL?: boolean
  homeLabel: string
  collectionLabel: string
  homeHref?: string
  collectionHref?: string
  /** e.g. Try Again — rendered before Home / Collection */
  leading?: ReactNode
  hideCollection?: boolean
}

export default function ErrorPageNavLinks({
  isRTL = false,
  homeLabel,
  collectionLabel,
  homeHref = ERROR_PAGE_HOME_HREF,
  collectionHref = ERROR_PAGE_COLLECTION_HREF,
  leading,
  hideCollection = false,
}: ErrorPageNavLinksProps) {
  const isComingSoonOnly = process.env.NEXT_PUBLIC_COMING_SOON_ONLY === 'true'
  const showCollection = !hideCollection && !isComingSoonOnly

  return (
    <div className="space-y-3">
      {leading ? <div className="flex justify-center">{leading}</div> : null}
      <div
        className={`flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:items-center `}
      >
        <LocaleLink href={homeHref} className={errorPageNavBtn} data-cursor-hover>
          <FiHome className="h-3.5 w-3.5 shrink-0" strokeWidth={1.25} />
          {homeLabel}
        </LocaleLink>
        {showCollection ? (
          <LocaleLink href={collectionHref} className={errorPageNavBtn} data-cursor-hover>
            <FiShoppingBag className="h-3.5 w-3.5 shrink-0" strokeWidth={1.25} />
            {collectionLabel}
          </LocaleLink>
        ) : null}
      </div>
    </div>
  )
}
