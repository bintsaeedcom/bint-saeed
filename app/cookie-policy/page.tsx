'use client'

import { motion } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import { FiArrowLeft } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getEnabledTrackersFromEnv } from '@/lib/analytics/trackerCatalog'

const SECTION_LIST = [
  '1. What Are Cookies',
  '2. Essential Cookies (Always Active)',
  '3. Analytics and Behavioral Cookies (Optional)',
  '4. Third-Party Services and Cookies',
  '5. Cookie Consent and Preference Management',
  '6. Withdrawing or Changing Consent',
  '7. Cookie Retention',
  '8. Policy Updates',
  '9. Contact',
]

const ESSENTIAL_COOKIES = [
  { name: 'cookieConsent', purpose: 'Stores your cookie choice state', provider: 'Bint Saeed', duration: 'up to 1 year' },
  { name: 'analyticsConsent', purpose: 'Stores analytics consent preference', provider: 'Bint Saeed', duration: 'up to 1 year' },
  { name: 'marketingConsent', purpose: 'Stores marketing consent preference', provider: 'Bint Saeed', duration: 'up to 1 year' },
  { name: 'cart data (local state)', purpose: 'Maintains basket/session shopping state', provider: 'Bint Saeed', duration: 'session/local storage' },
  { name: '__stripe_mid', purpose: 'Fraud prevention and payment security', provider: 'Stripe', duration: 'up to 1 year' },
  { name: '__stripe_sid', purpose: 'Payment session fraud prevention', provider: 'Stripe', duration: 'up to 30 minutes' },
]

export default function CookiePolicyPage() {
  const { t, isRTL } = useLanguage()
  const activeTrackers = getEnabledTrackersFromEnv()

  return (
    <div className={`relative min-h-screen pb-20 pt-32 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-brand-stone/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-80 w-80 rounded-full bg-brand-dustyBlue/5 blur-3xl" />
      <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-brand-stone/8 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <LocaleLink
            href="/"
            className={`group inline-flex items-center gap-2 font-montserrat text-sm uppercase tracking-[0.15em] text-brand-clayRed transition-colors hover:text-brand-dustyBlue ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            <FiArrowLeft
              className={`h-4 w-4 transition-transform group-hover:-translate-x-1 ${isRTL ? 'rotate-180 group-hover:translate-x-1' : ''}`}
            />
            {t.shop.backToHome}
          </LocaleLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 block font-montserrat text-[10px] uppercase tracking-[0.32em] text-brand-dustyBlue">
            Legal
          </span>
          <h1 data-document-h1="true" className="mb-4 font-rozha text-5xl text-brand-darkRed md:text-6xl">
            Cookie Policy
          </h1>
          <p className="font-montserrat tracking-wide text-brand-clayRed">Last updated: January 2026</p>
          <p className="mx-auto mt-4 max-w-2xl font-montserrat text-sm leading-relaxed tracking-wide text-brand-clayRed/80">
            This policy explains how Bint Saeed uses cookies and similar technologies. We request consent before
            setting non-essential cookies and provide controls to manage preferences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl border border-brand-stone/20 bg-white p-8 shadow-lg md:p-12"
        >
          <div className={`space-y-9 font-montserrat text-[13px] tracking-wide text-brand-clayRed leading-relaxed ${isRTL ? 'text-right' : ''}`}>
            <section className="rounded-xl border border-brand-stone/25 bg-[#faf8f5] p-5 md:p-6">
              <h2 className="mb-2 font-rozha text-xl text-brand-darkRed">About This Cookie Policy</h2>
              <p className="text-sm text-brand-clayRed/85">
                Our cookie controls are designed to align with UAE legal requirements and GDPR/ePrivacy consent
                expectations for relevant users, including users located in the EU.
              </p>
            </section>

            <div className="grid gap-2 rounded-xl border border-brand-stone/20 p-5 md:grid-cols-2 md:gap-3 md:p-6">
              {SECTION_LIST.map((item) => (
                <p key={item} className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed/80">
                  {item}
                </p>
              ))}
            </div>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">1. What Are Cookies</h2>
              <p>
                Cookies are small text files placed on your device when you visit a website. They support secure
                functionality, remember preferences, and may help us understand aggregated usage patterns.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">2. Essential Cookies (Always Active)</h2>
              <p className="mb-4">
                These cookies are necessary for core website operation, security, checkout, and consent management.
                They are set regardless of optional analytics consent.
              </p>
              <div className="overflow-x-auto rounded-xl border border-brand-stone/30">
                <table className="w-full min-w-[640px] border-collapse">
                  <thead>
                    <tr className="bg-[#faf8f5] text-left">
                      <th className="border-b border-brand-stone/25 px-4 py-3 font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed">Cookie / Key</th>
                      <th className="border-b border-brand-stone/25 px-4 py-3 font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed">Purpose</th>
                      <th className="border-b border-brand-stone/25 px-4 py-3 font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed">Provider</th>
                      <th className="border-b border-brand-stone/25 px-4 py-3 font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed">Retention</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ESSENTIAL_COOKIES.map((cookie) => (
                      <tr key={cookie.name} className="align-top">
                        <td className="border-b border-brand-stone/20 px-4 py-3 font-mono text-[12px] text-brand-darkRed">{cookie.name}</td>
                        <td className="border-b border-brand-stone/20 px-4 py-3 text-sm text-brand-clayRed/90">{cookie.purpose}</td>
                        <td className="border-b border-brand-stone/20 px-4 py-3 text-sm text-brand-clayRed/90">{cookie.provider}</td>
                        <td className="border-b border-brand-stone/20 px-4 py-3 text-sm text-brand-clayRed/90">{cookie.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">3. Analytics and Behavioral Cookies (Optional)</h2>
              <p>
                Optional analytics and behavioral cookies are loaded only after consent through our cookie controls.
                Without consent, these tools do not run in tracking mode.
              </p>
              {activeTrackers.length > 0 ? (
                <div className="mt-4 space-y-4">
                  {activeTrackers.map((tracker) => (
                    <div key={tracker.key} className="rounded-xl border border-brand-stone/25 p-4">
                      <p className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed">
                        {tracker.title}
                      </p>
                      <p className="mt-1 text-sm text-brand-clayRed/85">{tracker.description}</p>
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
                <p className="mt-3 text-sm text-brand-clayRed/85">
                  No optional analytics trackers are currently enabled in this environment.
                </p>
              )}
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">4. Third-Party Services and Cookies</h2>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li><strong>Stripe:</strong> payment processing and fraud-prevention cookies for checkout security.</li>
                <li><strong>Analytics providers:</strong> activated only when configured and consent is granted.</li>
                <li><strong>Hosting/infrastructure vendors:</strong> may process technical request metadata for service reliability.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">5. Cookie Consent and Preference Management</h2>
              <p>
                On first visit, you can accept all cookies or essential only. Your preferences are stored and can be
                changed later. If you decline optional categories, non-essential trackers are not loaded in tracking
                mode.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">6. Withdrawing or Changing Consent</h2>
              <p>
                You can change preferences by reopening cookie controls or by clearing site cookies/local storage and
                revisiting the website. You can also use browser controls to block cookies.
              </p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>Chrome: Settings → Privacy and security → Cookies</li>
                <li>Firefox: Settings → Privacy & Security → Cookies</li>
                <li>Safari: Preferences → Privacy</li>
                <li>Edge: Settings → Cookies and site permissions</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">7. Cookie Retention</h2>
              <p>
                Cookie retention differs by purpose and provider. Session cookies are removed when sessions end, while
                persistent cookies may remain up to their defined expiry period.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">8. Policy Updates</h2>
              <p>
                We may update this Cookie Policy to reflect legal, technical, or operational changes. Material updates
                will be reflected by a revised “Last updated” date and, where required, renewed consent prompts.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">9. Contact</h2>
              <p>If you have questions about this Cookie Policy or cookie controls, contact:</p>
              <p className="mt-4">
                <strong>Bint Saeed</strong><br />
                Legal Inquiries:{' '}
                <a href="mailto:legal@bintsaeed.com" className="text-brand-clayRed underline hover:text-brand-dustyBlue">
                  legal@bintsaeed.com
                </a><br />
                General Inquiries:{' '}
                <a href="mailto:contact@bintsaeed.com" className="text-brand-clayRed underline hover:text-brand-dustyBlue">
                  contact@bintsaeed.com
                </a>
              </p>
              <p className="mt-4 text-xs text-brand-clayRed/70">
                Legal drafting note: this cookie policy should be reviewed by qualified counsel where local
                ePrivacy/cookie-law requirements apply beyond baseline UAE/GDPR alignment.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
