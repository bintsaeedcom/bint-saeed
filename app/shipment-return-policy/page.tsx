'use client'

import { motion } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import { FiArrowLeft } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const SECTION_LIST = [
  '1. Opening Statement',
  '2. General Policy',
  '3. Exceptions (UAE Consumer Protection Alignment)',
  '4. Non-Eligible Cases',
  '5. EU Clients – Right of Withdrawal',
  '6. EU Exception (Defective Items Only)',
  '7. Final Acknowledgment',
  '8. Shipping Timelines and Force Majeure',
  '9. Contact',
]

export default function ShipmentReturnPolicyPage() {
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
            Shipment & Return Policy
          </h1>
          <p className="font-montserrat tracking-wide text-neutral-700">Last updated: May 2026</p>
          <p className="mx-auto mt-4 max-w-2xl font-montserrat text-sm leading-relaxed tracking-wide text-neutral-600">
            This policy sets out shipping timelines, return eligibility, and remedy pathways for made-to-order and
            in-stock items purchased through Bint Saeed.
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
                Bint Saeed pieces are primarily made to order, so cancellation and return rights are limited after
                production begins, subject to mandatory legal remedies for defective or materially non-conforming goods.
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
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">1. Opening Statement</h2>
              <p>
                Each Bint Saeed piece is created on demand, following the specific request and selection of the client.
                Production begins only after an order is confirmed.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">2. General Policy</h2>
              <p>Due to the made-to-order nature of Bint Saeed items:</p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>We do not accept returns on made-to-order or personalised pieces.</li>
                <li>We do not offer refunds for change of mind on made-to-order or personalised pieces.</li>
                <li>We do not offer money-back guarantees for personalised or custom specifications.</li>
              </ul>
              <p className="mt-3">
                This applies in particular to all personalised or custom-made pieces, including any variation in
                fabric, colour, sizing, or detailing selected by the client. By placing an order, the client
                acknowledges and agrees to these conditions.
              </p>
              <p className="mt-3">
                For eligible in-stock items only, return requests must be reported to{' '}
                <a href="mailto:return@bintsaeed.com" className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950">
                  return@bintsaeed.com
                </a>{' '}
                within 14 days after purchase. Shipping fees are not covered.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">
                3. Exceptions (UAE Consumer Protection Alignment)
              </h2>
              <p>In accordance with applicable laws in the United Arab Emirates, exceptions may apply where:</p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>The item has a verified manufacturing defect.</li>
                <li>The item is materially different from the confirmed order.</li>
              </ul>
              <p className="mt-3">In such cases:</p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>The client must notify us within 48 hours of delivery.</li>
                <li>Clear photographic evidence must be provided by email.</li>
                <li>The item must be unused and in original condition.</li>
              </ul>
              <p className="mt-3">Upon review, we reserve the right to:</p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>Repair the item.</li>
                <li>Replace the item.</li>
                <li>Provide a resolution deemed appropriate.</li>
              </ul>
              <p className="mt-3">A refund will be issued only if repair or replacement is not possible.</p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">4. Non-Eligible Cases</h2>
              <p>The following are not valid grounds for return or refund:</p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>Change of mind.</li>
                <li>Personal preference.</li>
                <li>Incorrect size selected by the client.</li>
                <li>Minor variations inherent to handcrafted production.</li>
                <li>Colour differences due to screen display.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">5. EU Clients – Right of Withdrawal</h2>
              <p>
                For clients based in the European Union, general consumer regulations may provide a 14-day right of
                withdrawal for online purchases.
              </p>
              <p className="mt-3">However, this right does not apply to:</p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>Goods made to the consumer’s specifications.</li>
                <li>Clearly personalised or custom-made items.</li>
              </ul>
              <p className="mt-3">
                As Bint Saeed pieces are produced on demand following the client’s order, they generally fall within
                this exemption. Returns and cancellations are not accepted once production has commenced.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">6. EU Exception (Defective Items Only)</h2>
              <p>In the event of a manufacturing defect:</p>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>Clients must notify us within 48 hours of delivery.</li>
                <li>Supporting photographic evidence is required by email.</li>
              </ul>
              <p className="mt-3">We will assess the case and offer repair, replacement, or an appropriate resolution.</p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">7. Final Acknowledgment</h2>
              <p>
                By placing an order with Bint Saeed, the client confirms understanding and acceptance of the made-to-order
                nature of products and the limitations regarding returns and refunds.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">8. Shipping Timelines and Force Majeure</h2>
              <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                <li>Made-to-order pieces are usually shipped within 2 weeks after order placement.</li>
                <li>In-stock items (including selected jewellery) are usually shipped within 1-3 business days.</li>
              </ul>
              <p className="mt-3">
                We are not liable for shipping delays caused by events outside our reasonable control, including force
                majeure circumstances such as war, natural disasters, civil unrest, transport disruption, customs delays,
                public authority actions, or similar external events.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-rozha text-2xl text-neutral-900">9. Contact</h2>
              <p>
                For shipment, return, and defect claims, contact{' '}
                <a href="mailto:return@bintsaeed.com" className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950">
                  return@bintsaeed.com
                </a>
                . Please include your order details and clear photos where applicable. Our team will follow up with next steps.
              </p>
              <p className="mt-4 text-xs text-neutral-500">
                Legal drafting note: this policy is provided for operational transparency and should be reviewed by
                qualified counsel for jurisdiction-specific enforcement scenarios.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
