'use client'

import { motion } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import { FiArrowLeft } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getEnabledTrackersFromEnv } from '@/lib/analytics/trackerCatalog'

const SECTION_LIST = [
  '1. Privacy Notice and Legal Framework',
  '2. Information We Collect',
  '3. How We Use Personal Data',
  '4. Legal Basis for Processing',
  '5. Sharing and Disclosure',
  '6. Third-Party Services and Processors',
  '7. Security and Organisational Controls',
  '8. Your Privacy Rights',
  '9. Cookies and Tracking',
  '10. Data Retention',
  '11. International Transfers',
  '12. Complaints and Supervisory Authorities',
  '13. Contact and Policy Updates',
]

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="font-montserrat tracking-wide text-brand-clayRed">Last updated: January 2026</p>
          <p className="mx-auto mt-4 max-w-2xl font-montserrat text-sm leading-relaxed tracking-wide text-brand-clayRed/80">
            This Privacy Policy explains how Bint Saeed collects, uses, safeguards, and discloses personal data in
            connection with this website and related services.
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
              <h2 className="mb-2 font-rozha text-xl text-brand-darkRed">Privacy Notice</h2>
              <p className="text-sm text-brand-clayRed/85">
                We operate within the applicable legal and regulatory framework of the United Arab Emirates while
                maintaining GDPR-compliant consent handling for relevant users, including users in the European Union.
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
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">1. Privacy Notice and Legal Framework</h2>
              <p>
                This policy applies to personal data processed by Bint Saeed through this website, associated customer
                journeys, and operational communications. It is designed to align with UAE Federal Decree-Law No. 45 of
                2021 and GDPR principles where applicable.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">2. Information We Collect</h2>
              <p>We collect information you provide directly and limited technical data collected automatically.</p>
              <h3 className="mb-2 mt-4 font-montserrat text-sm font-semibold text-brand-darkRed">Personal and order data</h3>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>Name, email, phone number, shipping and billing details.</li>
                <li>Order details, product preferences, and support communications.</li>
                <li>Personalisation inputs where provided for order fulfilment.</li>
              </ul>
              <h3 className="mb-2 mt-4 font-montserrat text-sm font-semibold text-brand-darkRed">Technical and usage data</h3>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>IP-derived location signals, browser, device type, and session-level navigation behavior.</li>
                <li>Cookie and consent preferences used for compliance and website functionality.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">3. How We Use Personal Data</h2>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>Process, fulfil, and support customer orders and product enquiries.</li>
                <li>Provide customer care, transactional communications, and service notices.</li>
                <li>Improve website usability, security, and performance.</li>
                <li>Operate analytics programs only where consent is granted.</li>
                <li>Comply with legal, tax, and fraud-prevention obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">4. Legal Basis for Processing</h2>
              <p>Where relevant under GDPR, processing may rely on:</p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>Consent, including optional cookie/analytics consent.</li>
                <li>Contract performance, including order processing and delivery.</li>
                <li>Legal obligations, including accounting and compliance records.</li>
                <li>Legitimate interests, including fraud prevention and site security.</li>
              </ul>
              <p className="mt-3 text-sm text-brand-clayRed/80">
                Where processing is based on consent, you may withdraw consent at any time.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">5. Sharing and Disclosure</h2>
              <p>We do not sell personal data. We may share data only where necessary, including with:</p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>Payment providers, logistics partners, and essential service vendors.</li>
                <li>Professional advisers or authorities where required by law.</li>
                <li>Service providers acting under contractual confidentiality and security obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">6. Third-Party Services and Processors</h2>
              <p>
                We use selected third-party providers to run commerce, communications, infrastructure, and analytics
                functions. Depending on configuration, this may include payment processing, hosting/CDN, operational
                email, and optional analytics/behavior tools.
              </p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>
                  <strong>Analytics services (environment-based):</strong>{' '}
                  {activeTrackers.length > 0
                    ? activeTrackers.map((tracker) => tracker.title).join(', ')
                    : 'No optional analytics trackers are currently enabled in this environment.'}
                </li>
                <li>
                  <strong>Payment processing:</strong> Card/payment data is processed by secure payment providers
                  (including Stripe), not stored in full by Bint Saeed.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">7. Security and Organisational Controls</h2>
              <p>
                We implement technical and organisational safeguards appropriate to the nature of data we process,
                including access controls, secure transport, and operational controls for data handling.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">8. Your Privacy Rights</h2>
              <p>
                Subject to applicable law, you may request access, correction, deletion, restriction, portability, or
                objection to certain processing.
              </p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>You may manage non-essential cookie consent through site controls.</li>
                <li>Identity verification may be required before actioning certain rights requests.</li>
                <li>We respond within applicable legal timelines.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">9. Cookies and Tracking</h2>
              <p>
                We use essential cookies for website operation and optional cookies for analytics/behavior insights only
                after consent. For full details, please review our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">10. Data Retention</h2>
              <p>
                We retain personal data only as long as necessary for fulfilment, compliance, security, and record
                keeping. Certain commerce records may be retained in line with UAE legal/business requirements.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">11. International Transfers</h2>
              <p>
                Where personal data is processed across jurisdictions, we apply appropriate safeguards and contractual
                controls consistent with applicable UAE and GDPR transfer expectations.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">12. Complaints and Supervisory Authorities</h2>
              <p>
                You may lodge a complaint with a competent supervisory authority in your jurisdiction, including UAE
                authorities where applicable.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-brand-darkRed">13. Contact and Policy Updates</h2>
              <p>
                We may revise this Privacy Policy periodically. Updated versions become effective when published on this
                page.
              </p>
              <p className="mt-4">
                <strong>Bint Saeed</strong><br />
                Privacy and Legal Inquiries:{' '}
                <a href="mailto:legal@bintsaeed.com" className="text-brand-clayRed underline hover:text-brand-dustyBlue">
                  legal@bintsaeed.com
                </a><br />
                General Inquiries:{' '}
                <a href="mailto:contact@bintsaeed.com" className="text-brand-clayRed underline hover:text-brand-dustyBlue">
                  contact@bintsaeed.com
                </a>
              </p>
              <p className="mt-4 text-xs text-brand-clayRed/70">
                Legal drafting note: this policy should be reviewed by qualified counsel before formal legal reliance in
                new jurisdictions or campaign-specific processing.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
