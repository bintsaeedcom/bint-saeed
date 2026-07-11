'use client'

import { motion } from 'framer-motion'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getEnabledTrackersFromEnv } from '@/lib/analytics/trackerCatalog'
import EnglishPolicyVersionNotice from '@/components/legal/EnglishPolicyVersionNotice'
import type { AppLocale } from '@/lib/i18n/routing'
import { COOKIE_POLICY_AR, OFFICIAL_EMAILS } from '@/lib/legal/cookiePolicyContentAr'
import {
  LANGUAGE_CLAUSE_SHORT_AR,
  LANGUAGE_CLAUSE_SHORT_EN,
  LANGUAGE_CLAUSE_TITLE_AR,
  LANGUAGE_CLAUSE_TITLE_EN,
} from '@/lib/legal/languageAndTranslationClause'
import { splitLegalEmail } from '@/lib/legal/splitLegalEmail'

const SECTION_LIST_EN = [
  '1. What Are Cookies',
  '2. Essential Cookies (Always Active)',
  '3. Analytics and Behavioral Cookies (Optional)',
  '4. Third-Party Services and Cookies',
  '5. Cookie Consent and Preference Management',
  '6. Withdrawing or Changing Consent',
  '7. Cookie Retention',
  '8. Language and Translations',
  '9. Policy Updates',
  '10. Contact',
]

const ESSENTIAL_COOKIES_EN = [
  { name: 'cookieConsent', purpose: 'Stores your cookie choice state', provider: 'Bint Saeed', duration: 'up to 1 year' },
  { name: 'analyticsConsent', purpose: 'Stores analytics consent preference', provider: 'Bint Saeed', duration: 'up to 1 year' },
  { name: 'marketingConsent', purpose: 'Stores marketing consent preference', provider: 'Bint Saeed', duration: 'up to 1 year' },
  { name: 'cart data (local state)', purpose: 'Maintains basket/session shopping state', provider: 'Bint Saeed', duration: 'session/local storage' },
  { name: '__stripe_mid', purpose: 'Fraud prevention and payment security', provider: 'Stripe', duration: 'up to 1 year' },
  { name: '__stripe_sid', purpose: 'Payment session fraud prevention', provider: 'Stripe', duration: 'up to 30 minutes' },
]

export default function CookiePolicyPage() {
  const { t, isRTL, language } = useLanguage()
  const locale = language as AppLocale
  const activeTrackers = getEnabledTrackersFromEnv()
  const isAr = language === 'ar'
  const ar = COOKIE_POLICY_AR

  const breadcrumb = isAr ? ar.breadcrumb : 'Cookie Policy'
  const homeBreadcrumb = isAr ? ar.homeBreadcrumb : 'Home'
  const heroLabel = isAr ? ar.heroLabel : 'Legal'
  const pageTitle = isAr ? ar.pageTitle : 'Cookie Policy'
  const lastUpdated = isAr ? ar.lastUpdated : 'Last updated: May 2026'
  const intro = isAr
    ? ar.intro
    : 'This policy explains how Bint Saeed uses cookies and similar technologies. We request consent before setting non-essential cookies and provide controls to manage preferences.'
  const summaryTitle = isAr ? ar.summaryTitle : 'About This Cookie Policy'
  const summaryBody = isAr
    ? ar.summaryBody
    : 'Our cookie controls are designed to align with UAE legal requirements and GDPR/ePrivacy consent expectations for relevant users, including users located in the EU.'
  const sectionList = isAr ? ar.sectionList : SECTION_LIST_EN
  const essentialCookies = isAr ? ar.essentialCookies.cookies : ESSENTIAL_COOKIES_EN
  const tableHeaders = isAr
    ? ar.essentialCookies.tableHeaders
    : { cookie: 'Cookie / Key', purpose: 'Purpose', provider: 'Provider', retention: 'Retention' }

  return (
    <div className={`relative min-h-screen bg-[#f6f4f1] pb-20 pt-4 sm:pt-6 md:pt-8 ${isRTL ? 'rtl' : 'ltr'}`}>
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
              { label: isAr ? homeBreadcrumb : isRTL ? 'الرئيسية' : homeBreadcrumb, href: '/home' },
              { label: breadcrumb },
            ]}
            backLink={{ href: '/', label: t.shop.backToHome }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 block font-montserrat text-[10px] uppercase tracking-[0.32em] text-neutral-500">
            {heroLabel}
          </span>
          <h1 data-document-h1="true" className="mb-4 font-rozha text-5xl text-neutral-900 md:text-6xl">
            {pageTitle}
          </h1>
          <p className="font-montserrat tracking-wide text-neutral-700">{lastUpdated}</p>
          <p className="mx-auto mt-4 max-w-2xl font-montserrat text-sm leading-relaxed tracking-wide text-neutral-600">
            {intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-sm border border-neutral-200 bg-white p-8 shadow-sm md:p-12"
        >
          <div className={`space-y-9 font-montserrat text-[13px] leading-relaxed tracking-wide text-neutral-800 ${isRTL ? 'text-right' : ''}`}>
            <section className="rounded-sm border border-neutral-200 bg-neutral-50 p-5 md:p-6">
              <h2 className="mb-2 font-rozha text-xl text-neutral-900">{summaryTitle}</h2>
              <p className="text-sm text-neutral-600">{summaryBody}</p>
            </section>

            <EnglishPolicyVersionNotice policy="cookie" language={locale} />

            <div className="grid gap-2 rounded-sm border border-neutral-200 p-5 md:grid-cols-2 md:gap-3 md:p-6">
              {sectionList.map((item) => (
                <p key={item} className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-neutral-600">
                  {item}
                </p>
              ))}
            </div>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">
                {isAr ? ar.whatAreCookies.title : '1. What Are Cookies'}
              </h2>
              <p>{isAr ? ar.whatAreCookies.body : 'Cookies are small text files placed on your device when you visit a website. They support secure functionality, remember preferences, and may help us understand aggregated usage patterns.'}</p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">
                {isAr ? ar.essentialCookies.title : '2. Essential Cookies (Always Active)'}
              </h2>
              <p className="mb-4">
                {isAr
                  ? ar.essentialCookies.intro
                  : 'These cookies are necessary for core website operation, security, checkout, and consent management. They are set regardless of optional analytics consent.'}
              </p>
              <div className="overflow-x-auto rounded-sm border border-neutral-200">
                <table className="w-full min-w-[640px] border-collapse">
                  <thead>
                    <tr className={`bg-neutral-50 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <th className="border-b border-neutral-200 px-4 py-3 font-montserrat text-[11px] uppercase tracking-[0.14em] text-neutral-900">{tableHeaders.cookie}</th>
                      <th className="border-b border-neutral-200 px-4 py-3 font-montserrat text-[11px] uppercase tracking-[0.14em] text-neutral-900">{tableHeaders.purpose}</th>
                      <th className="border-b border-neutral-200 px-4 py-3 font-montserrat text-[11px] uppercase tracking-[0.14em] text-neutral-900">{tableHeaders.provider}</th>
                      <th className="border-b border-neutral-200 px-4 py-3 font-montserrat text-[11px] uppercase tracking-[0.14em] text-neutral-900">{tableHeaders.retention}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {essentialCookies.map((cookie) => (
                      <tr key={cookie.name} className="align-top">
                        <td className="border-b border-neutral-200 px-4 py-3 font-mono text-[12px] text-neutral-900">{cookie.name}</td>
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
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">
                {isAr ? ar.analytics.title : '3. Analytics and Behavioral Cookies (Optional)'}
              </h2>
              <p>
                {isAr
                  ? ar.analytics.body
                  : 'Optional analytics and behavioral cookies are loaded only after consent through our cookie controls. Without consent, these tools do not run in tracking mode.'}
              </p>
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
                <p className="mt-3 text-sm text-neutral-600">
                  {isAr ? ar.analytics.noTrackers : 'No optional analytics trackers are currently enabled in this environment.'}
                </p>
              )}
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">
                {isAr ? ar.thirdParty.title : '4. Third-Party Services and Cookies'}
              </h2>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                {isAr ? (
                  ar.thirdParty.items.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}</strong> {item.text}
                    </li>
                  ))
                ) : (
                  <>
                    <li><strong>Stripe:</strong> payment processing and fraud-prevention cookies for checkout security.</li>
                    <li><strong>Analytics providers:</strong> activated only when configured and consent is granted.</li>
                    <li><strong>Hosting/infrastructure vendors:</strong> may process technical request metadata for service reliability.</li>
                  </>
                )}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">
                {isAr ? ar.consent.title : '5. Cookie Consent and Preference Management'}
              </h2>
              <p>
                {isAr
                  ? ar.consent.body
                  : 'On first visit, you can accept all cookies or essential only. Your preferences are stored and can be changed later. If you decline optional categories, non-essential trackers are not loaded in tracking mode.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">
                {isAr ? ar.withdraw.title : '6. Withdrawing or Changing Consent'}
              </h2>
              <p>
                {isAr
                  ? ar.withdraw.body
                  : 'You can change preferences by reopening cookie controls or by clearing site cookies/local storage and revisiting the website. You can also use browser controls to block cookies.'}
              </p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                {(isAr ? ar.withdraw.browserInstructions : [
                  'Chrome: Settings → Privacy and security → Cookies',
                  'Firefox: Settings → Privacy & Security → Cookies',
                  'Safari: Preferences → Privacy',
                  'Edge: Settings → Cookies and site permissions',
                ]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">
                {isAr ? ar.retention.title : '7. Cookie Retention'}
              </h2>
              <p>
                {isAr
                  ? ar.retention.body
                  : 'Cookie retention differs by purpose and provider. Session cookies are removed when sessions end, while persistent cookies may remain up to their defined expiry period.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">
                {isAr ? `8. ${LANGUAGE_CLAUSE_TITLE_AR}` : `8. ${LANGUAGE_CLAUSE_TITLE_EN}`}
              </h2>
              {(() => {
                const clause = isAr ? LANGUAGE_CLAUSE_SHORT_AR : LANGUAGE_CLAUSE_SHORT_EN
                const parts = splitLegalEmail(clause)
                if (!parts) return <p>{clause}</p>
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
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">
                {isAr ? ar.updates.title : '9. Policy Updates'}
              </h2>
              <p>
                {isAr
                  ? ar.updates.body
                  : 'We may update this Cookie Policy to reflect legal, technical, or operational changes. Material updates will be reflected by a revised “Last updated” date and, where required, renewed consent prompts.'}
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">
                {isAr ? ar.contact.title : '10. Contact'}
              </h2>
              <p>{isAr ? ar.contact.body : 'If you have questions about this Cookie Policy or cookie controls, contact:'}</p>
              <p className="mt-4">
                <strong>Bint Saeed</strong><br />
                {isAr ? ar.contact.legalLabel : 'Legal Inquiries:'}{' '}
                <a href={`mailto:${OFFICIAL_EMAILS.legal}`} className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950">
                  {OFFICIAL_EMAILS.legal}
                </a><br />
                {isAr ? ar.contact.generalLabel : 'General Inquiries:'}{' '}
                <a href={`mailto:${OFFICIAL_EMAILS.hello}`} className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950">
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
