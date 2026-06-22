'use client'

import { motion } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import { FiArrowLeft } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const SECTION_LIST = [
  '1. Scope and Acceptance',
  '2. Eligibility and Account Responsibility',
  '3. Products, Availability, and Pricing',
  '4. Orders, Payment, and Verification',
  '5. Shipping, Delivery, and Risk Transfer',
  '6. Returns, Repairs and Order Finality',
  '7. Personalisation and Custom Work',
  '8. Intellectual Property',
  '9. Permitted and Prohibited Use',
  '10. Charitable Contribution Statement',
  '11. Disclaimers and Limitation of Liability',
  '12. Indemnity',
  '13. Governing Law and Jurisdiction',
  '14. Changes, Severability, and Contact',
]

export default function TermsPage() {
  const { t, isRTL } = useLanguage()

  return (
    <div className={`relative min-h-screen bg-[#f6f4f1] pb-20 pt-4 sm:pt-6 md:pt-8 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="relative mx-auto max-w-4xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <LocaleLink
            href="/"
            className={`group inline-flex items-center gap-2 font-montserrat text-sm uppercase tracking-[0.15em] text-neutral-600 transition-colors hover:text-neutral-900 ${isRTL ? 'flex-row-reverse' : ''}`}
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
          <span className="mb-3 block font-montserrat text-[10px] uppercase tracking-[0.32em] text-neutral-500">
            Legal
          </span>
          <h1 data-document-h1="true" className="mb-4 font-rozha text-5xl text-neutral-900 md:text-6xl">
            Terms & Conditions
          </h1>
          <p className="font-montserrat tracking-wide text-neutral-700">Last updated: May 2026</p>
          <p className="mx-auto mt-4 max-w-2xl font-montserrat text-sm leading-relaxed tracking-wide text-neutral-600">
            These Terms govern access to and use of the Bint Saeed website, products, and related services. They are
            drafted for clarity, commercial certainty, and compliance with applicable UAE legal requirements.
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
              <h2 className="mb-2 font-rozha text-xl text-neutral-900">Summary Notice</h2>
              <p className="text-sm text-neutral-600">
                By using this website or placing an order, you agree to these Terms. If you do not agree, please do
                not use the site.
              </p>
            </section>

            <div className="grid gap-2 rounded-sm border border-neutral-200 p-5 md:grid-cols-2 md:gap-3 md:p-6">
              {SECTION_LIST.map((item) => (
                <p key={item} className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-neutral-600">
                  {item}
                </p>
              ))}
            </div>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">1. Scope and Acceptance</h2>
              <p>
                These Terms and Conditions apply to all visitors, users, and customers who access or use the Bint
                Saeed website, content, products, and related services. By accessing this website, creating an
                account, or placing an order, you confirm that you have read, understood, and agreed to these Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">2. Eligibility and Account Responsibility</h2>
              <p>
                You must have legal capacity to enter into binding agreements under applicable law. If you create an
                account, you are responsible for maintaining the confidentiality of your login credentials and for all
                activity carried out under your account.
              </p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>You agree to provide accurate, complete, and current information for orders and communications.</li>
                <li>You are responsible for ensuring your shipping, billing, and contact details remain accurate.</li>
                <li>We may suspend or restrict access where misuse, fraud, or security risk is reasonably suspected.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">3. Products, Availability, and Pricing</h2>
              <p>
                We aim to present product details, availability, and pricing accurately. However, occasional errors may
                occur. Product display images are illustrative and may vary slightly due to lighting, screen
                calibration, and handcrafted production characteristics.
              </p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>All prices are displayed in AED unless otherwise stated.</li>
                <li>Applicable VAT is handled in accordance with UAE tax requirements.</li>
                <li>We may update product assortment and pricing at any time before order confirmation.</li>
                <li>Custom and personalised pieces are subject to specific lead times and final-sale conditions.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">4. Orders, Payment, and Verification</h2>
              <p>
                Submission of an order request does not constitute final acceptance by Bint Saeed. An order is
                accepted when we issue an order confirmation and payment authorization is successfully completed.
              </p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>Payments are processed through secure payment providers, including Stripe.</li>
                <li>We reserve the right to decline, cancel, or limit orders for lawful reasons.</li>
                <li>Fraud prevention, identity checks, and payment verification may be required.</li>
                <li>Where a payment error or pricing error occurs, we may cancel and refund the affected order.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">5. Shipping, Delivery, and Risk Transfer</h2>
              <p>
                Delivery windows are estimates and are not guaranteed. Delays may occur due to logistics, customs,
                public holidays, weather, or events outside our reasonable control.
              </p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>Complimentary shipping within the United Arab Emirates applies to orders with a merchandise subtotal of AED 1,000 or more.</li>
                <li>Shipping fees for orders below this threshold, and for international destinations, are calculated at checkout.</li>
                <li>Shipping terms, costs, and estimated timelines are shown at checkout or applicable policy pages.</li>
                <li>International orders may be subject to customs duties, import taxes, and local clearance fees.</li>
                <li>Risk of loss transfers upon delivery to the shipping address or accepted recipient.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">6. Returns, Repairs and Order Finality</h2>
              <p>
                Return and repair handling is governed by our Shipment & Return Policy. All clients should review the
                full policy before ordering.
              </p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>Items are made to order and cancellations/returns are limited once production has started.</li>
                <li>Defect or material non-conformity claims must be submitted with evidence within the stated window.</li>
                <li>Remedies may include repair or replacement first, and refund where required by applicable law.</li>
              </ul>
              <p className="mt-3">
                Full policy:{' '}
                <LocaleLink href="/shipment-return-policy" className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950" data-cursor-hover>
                  Shipment & Return Policy
                </LocaleLink>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">7. Personalisation and Custom Work</h2>
              <p>
                By submitting any personalisation text, you confirm you have the right to use that content and that it
                does not infringe third-party rights or violate applicable laws. We may reject personalisation requests
                that are unlawful, offensive, or non-compliant with policy.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">8. Intellectual Property</h2>
              <p className="mb-4">
                All website content, creative assets, designs, photography, trademarks, text, and technical materials
                are owned by or licensed to Bint Saeed and are protected by applicable intellectual property laws.
              </p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>No copying, reproduction, scraping, republication, or commercial reuse without written consent.</li>
                <li>No use of brand elements, product images, or proprietary material in derivative work without approval.</li>
                <li>
                  Permission requests can be sent to{' '}
                  <a href="mailto:legal@bintsaeed.com" className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950">
                    legal@bintsaeed.com
                  </a>
                  .
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">9. Permitted and Prohibited Use</h2>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>You may use this website only for lawful, personal, and legitimate commercial browsing/purchase activity.</li>
                <li>Any unlawful access, attempted interference, bot abuse, or fraudulent behavior is prohibited.</li>
                <li>We reserve the right to block access and take legal action where misuse is identified.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">10. Charitable Contribution Statement</h2>
              <p>
                Where charitable contribution statements are communicated on-site or in product communications, such
                statements describe our intended social-impact allocation model and do not alter your purchase price
                unless expressly stated.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">11. Disclaimers and Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, the website and services are provided on an "as is"
                and "as available" basis without warranties of uninterrupted operation.
              </p>
              <p>
                Bint Saeed shall not be liable for indirect, incidental, special, consequential, or punitive damages
                arising from use of the website, delay in delivery, third-party service interruption, or other events
                beyond reasonable control. Liability is limited to the amount paid for the relevant order, except where
                non-excludable liability applies by law.
              </p>
              <p className="mt-3">
                To the fullest extent permitted by law, Bint Saeed is not liable for injury, illness, allergic reaction,
                accidental harm, death, property damage, loss of earnings, emotional distress, or any other loss
                resulting from misuse, improper handling, unauthorised alteration, or use of products contrary to care
                and safety guidance.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">12. Indemnity</h2>
              <p>
                You agree to indemnify and hold harmless Bint Saeed from claims, liabilities, losses, and costs arising
                from your breach of these Terms, misuse of the website, or violation of applicable law.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">13. Governing Law and Jurisdiction</h2>
              <p>
                These Terms are governed by the laws of the United Arab Emirates. Subject to mandatory consumer
                protection rights under applicable law, disputes shall fall under the competent courts of the UAE.
              </p>
              <p className="mt-3 text-[13px] text-neutral-600">
                For regulatory clarity, this website is operated by a company registered in Abu Dhabi, United Arab
                Emirates, holding commercial license number CN-6384424 issued by the Abu Dhabi Registration Authority
                (ADRA).
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">14. Changes, Severability, and Contact</h2>
              <p>
                We may revise these Terms from time to time. Updated versions are effective from publication on this
                page. If any provision is held unenforceable, remaining provisions remain in full force.
              </p>
              <p className="mt-4">
                <strong>Bint Saeed</strong><br />
                Legal Inquiries:{' '}
                <a href="mailto:legal@bintsaeed.com" className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950">
                  legal@bintsaeed.com
                </a><br />
                General Inquiries:{' '}
                <a href="mailto:hello@bintsaeed.com" className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950">
                  hello@bintsaeed.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
