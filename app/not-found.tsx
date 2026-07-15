'use client'

import LocaleLink from '@/components/LocaleLink'
import ErrorPageShell, { errorPageFooterLabel } from '@/components/ErrorPageShell'
import ErrorPageNavLinks from '@/components/ErrorPageNavLinks'
import { FiMail } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getErrorPageCopy } from '@/lib/i18n/errorPageCopyI18n'
import { OFFICIAL_EMAILS, officialMailto } from '@/lib/brand/officialEmails'

export default function NotFound() {
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const nav = getErrorPageCopy(language)
  const isComingSoonOnly = process.env.NEXT_PUBLIC_COMING_SOON_ONLY === 'true'

  return (
    <ErrorPageShell
      isRTL={isRTL}
      statusCode="404"
      title={ui.notFound.title}
      description={ui.notFound.description}
      descriptionSingleLine
      footer={
        <div className="text-center">
          {!isComingSoonOnly ? (
            <>
              <p className={`${errorPageFooterLabel} mb-3`}>
                {ui.notFound.popularPages}
              </p>
              <div className={`flex flex-wrap justify-center gap-x-5 gap-y-2 `}>
                {[
                  { href: '/about', label: ui.notFound.about },
                  { href: '/accessories', label: ui.common.accessories },
                  { href: '/the-codes', label: ui.notFound.theCodes },
                  { href: '/contact', label: ui.notFound.contact },
                ].map((link) => (
                  <LocaleLink
                    key={link.href}
                    href={link.href}
                    className="font-montserrat text-[11px] tracking-wide text-brand-clayRed/80 underline-offset-4 transition-colors hover:text-brand-darkRed hover:underline"
                    data-cursor-hover
                  >
                    {link.label}
                  </LocaleLink>
                ))}
              </div>
            </>
          ) : null}
          <div className={`${isComingSoonOnly ? '' : 'mt-7 border-t border-brand-stone/20 pt-6'} text-center`}>
            <p className={errorPageFooterLabel}>
              {ui.notFound.needHelp}
            </p>
            <a
              href={officialMailto('support')}
              className={`mt-2 inline-flex items-center justify-center gap-2 font-montserrat text-[12px] text-brand-darkRed transition-colors hover:text-brand-darkMagenta `}
              data-cursor-hover
            >
              <FiMail className="h-4 w-4 shrink-0" strokeWidth={1.25} />
              {OFFICIAL_EMAILS.support}
            </a>
          </div>
        </div>
      }
    >
      <ErrorPageNavLinks
        isRTL={isRTL}
        homeLabel={nav.home}
        collectionLabel={nav.collection}
      />
    </ErrorPageShell>
  )
}
