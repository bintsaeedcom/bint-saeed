'use client'

import { motion } from 'framer-motion'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getEnabledTrackersFromEnv } from '@/lib/analytics/trackerCatalog'
import EnglishPolicyVersionNotice from '@/components/legal/EnglishPolicyVersionNotice'
import type { AppLocale } from '@/lib/i18n/routing'
import {
  getCookieLanguageClause,
  getCookiePolicyContent,
  OFFICIAL_EMAILS,
} from '@/lib/legal/cookiePolicyContent'
import { splitLegalEmail } from '@/lib/legal/splitLegalEmail'
import { SITE_CONTENT_TOP_PAD } from '@/lib/ui/editorialPageChrome'

export default function CookiePolicyPage() {
  const { t, isRTL, language } = useLanguage()
  const locale = language as AppLocale
  const activeTrackers = getEnabledTrackersFromEnv()
  const c = getCookiePolicyContent(locale)
  const languageClause = getCookieLanguageClause(locale)

  return (
    <div
      className={`relative min-h-screen bg-[#f6f4f1] pb-20 ${SITE_CONTENT_TOP_PAD} `}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="relative mx-auto max-w-4xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <AppPageWayfinding
            rtl={isRTL}
            variant="muted"
            segments={[
              { label: c.homeBreadcrumb, href: '/home' },
              { label: c.breadcrumb },
            ]}
            backLink={{ href: '/', label: t.shop.backToHome }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`mb-12 text-start`}
        >
          <span className="mb-3 block font-montserrat text-[10px] uppercase tracking-[0.32em] text-neutral-500">
            {c.heroLabel}
          </span>
          <h1 data-document-h1="true" className="mb-4 font-rozha text-5xl text-neutral-900 md:text-6xl">
            {c.pageTitle}
          </h1>
          <p className="font-montserrat tracking-wide text-neutral-700">{c.lastUpdated}</p>
          <p
            className={`mt-4 max-w-2xl font-montserrat text-sm leading-relaxed tracking-wide text-neutral-600 ${
 isRTL ? 'mr-0 ml-auto' : 'mx-auto'
 }`}
          >
            {c.intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-sm border border-neutral-200 bg-white p-8 shadow-sm md:p-12"
        >
          <div
            className={`space-y-9 font-montserrat text-[13px] leading-relaxed tracking-wide text-neutral-800 ${
 'text-start'
 }`}
          >
            <section className="rounded-sm border border-neutral-200 bg-neutral-50 p-5 md:p-6">
              <h2 className="mb-2 font-rozha text-xl text-neutral-900">{c.summaryTitle}</h2>
              <p className="text-sm text-neutral-600">{c.summaryBody}</p>
            </section>

            <EnglishPolicyVersionNotice policy="cookie" language={locale} />

            <div className="grid gap-2 rounded-sm border border-neutral-200 p-5 md:grid-cols-2 md:gap-3 md:p-6">
              {c.sectionList.map((item) => (
                <p key={item} className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-neutral-600">
                  {item}
                </p>
              ))}
            </div>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">{c.whatAreCookies.title}</h2>
              <p>{c.whatAreCookies.body}</p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">{c.essentialCookies.title}</h2>
              <p className="mb-4">{c.essentialCookies.intro}</p>
              <div className="overflow-x-auto rounded-sm border border-neutral-200">
                <table className="w-full min-w-[640px] border-collapse">
                  <thead>
                    <tr className={`bg-neutral-50 text-start`}>
                      <th className="border-b border-neutral-200 px-4 py-3 font-montserrat text-[11px] uppercase tracking-[0.14em] text-neutral-900">
                        {c.essentialCookies.tableHeaders.cookie}
                      </th>
                      <th className="border-b border-neutral-200 px-4 py-3 font-montserrat text-[11px] uppercase tracking-[0.14em] text-neutral-900">
                        {c.essentialCookies.tableHeaders.purpose}
                      </th>
                      <th className="border-b border-neutral-200 px-4 py-3 font-montserrat text-[11px] uppercase tracking-[0.14em] text-neutral-900">
                        {c.essentialCookies.tableHeaders.provider}
                      </th>
                      <th className="border-b border-neutral-200 px-4 py-3 font-montserrat text-[11px] uppercase tracking-[0.14em] text-neutral-900">
                        {c.essentialCookies.tableHeaders.retention}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.essentialCookies.cookies.map((cookie) => (
                      <tr key={cookie.name} className="align-top">
                        <td className="border-b border-neutral-200 px-4 py-3 font-mono text-[12px] text-neutral-900">
                          {cookie.name}
                        </td>
                        <td className="border-b border-neutral-200 px-4 py-3 text-sm text-neutral-700">{cookie.purpose}</td>
                        <td className="border-b border-neutral-200 px-4 py-3 text-sm text-neutral-700">{cookie.provider}</td>
                        <td className="border-b border-neutral-200 px-4 py-3 text-sm text-neutral-700">{cookie.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">{c.analytics.title}</h2>
              <p>{c.analytics.body}</p>
              {activeTrackers.length > 0 ? (
                <div className="mt-4 space-y-4">
                  {activeTrackers.map((tracker) => (
                    <div key={tracker.key} className="rounded-sm border border-neutral-200 p-4">
                      <p className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-neutral-900">
                        {tracker.title}
                      </p>
                      <p className="mt-1 text-sm text-neutral-600">{tracker.description}</p>
                      <ul className={`mt-3 list-disc space-y-1.5 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                        {tracker.cookies.map((cookie) => (
                          <li key={`${tracker.key}-${cookie.name}`}>
                            <strong>{cookie.name}</strong>: {cookie.purpose} ({cookie.retention})
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm text-neutral-600">{c.analytics.noTrackers}</p>
              )}
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">{c.thirdParty.title}</h2>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                {c.thirdParty.items.map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">{c.consent.title}</h2>
              <p>{c.consent.body}</p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">{c.withdraw.title}</h2>
              <p>{c.withdraw.body}</p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                {c.withdraw.browserInstructions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">{c.retention.title}</h2>
              <p>{c.retention.body}</p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">8. {languageClause.title}</h2>
              {(() => {
                const parts = splitLegalEmail(languageClause.body)
                if (!parts) return <p>{languageClause.body}</p>
                return (
                  <p>
                    {parts.before}
                    <a
                      href={`mailto:${OFFICIAL_EMAILS.legal}`}
                      className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950"
                    >
                      {OFFICIAL_EMAILS.legal}
                    </a>
                    {parts.after}
                  </p>
                )
              })()}
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">{c.updates.title}</h2>
              <p>{c.updates.body}</p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">{c.contact.title}</h2>
              <p>{c.contact.body}</p>
              <p className="mt-3">
                {c.contact.legalLabel}{' '}
                <a
                  href={`mailto:${OFFICIAL_EMAILS.legal}`}
                  className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950"
                >
                  {OFFICIAL_EMAILS.legal}
                </a>
              </p>
              <p className="mt-1">
                {c.contact.generalLabel}{' '}
                <a
                  href={`mailto:${OFFICIAL_EMAILS.hello}`}
                  className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950"
                >
                  {OFFICIAL_EMAILS.hello}
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
