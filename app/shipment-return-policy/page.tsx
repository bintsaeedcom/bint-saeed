'use client'

import { motion } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import { FiArrowLeft } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { OFFICIAL_EMAILS, officialMailto } from '@/lib/brand/officialEmails'

const SECTION_LIST = [
  '1. Opening Statement',
  '2. General Policy',
  '3. Exceptions (UAE Consumer Protection Alignment)',
  '4. Non-Eligible Cases',
  '5. EU Clients – Right of Withdrawal',
  '6. EU Exception (Defective Items Only)',
  '7. Final Acknowledgment',
  '8. Shipping Timelines',
  '9. Force Majeure',
  '10. Contact',
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
          className={`mb-10 ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <span className="mb-3 block font-montserrat text-[10px] uppercase tracking-[0.32em] text-neutral-500">
            Legal
          </span>
          <h1 data-document-h1="true" className="mb-4 font-rozha text-5xl text-neutral-900 md:text-6xl">
            Shipment & Return Policy
          </h1>
          <p className="font-montserrat tracking-wide text-neutral-700">Last updated: June 2026</p>
          <p className="mt-4 max-w-3xl font-montserrat text-sm leading-relaxed tracking-wide text-neutral-600">
            This policy sets out shipping timelines, exchange eligibility, return procedures, and remedy pathways for
            purchases made through Bint Saeed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-sm border border-neutral-200 bg-white p-8 shadow-sm md:p-10"
        >
          <div className={`policy-prose flex flex-col gap-4 font-montserrat text-[13px] leading-[1.55] tracking-wide text-neutral-800 ${isRTL ? 'text-right' : 'text-left'}`}>
            <section className="rounded-sm border border-neutral-200 bg-neutral-50 p-4 md:p-5">
              <h2 className="mb-1.5 font-rozha text-xl text-neutral-900">Summary Notice</h2>
              <p className="text-sm text-neutral-600">
                At Bint Saeed, every piece is created with care and inspected prior to shipment. We encourage clients to
                review product descriptions, sizing information, and product details carefully before placing an order.
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                While the majority of Bint Saeed pieces are produced on demand, selected items may be available for
                immediate shipment.
              </p>
            </section>

            <div className="grid gap-1.5 rounded-sm border border-neutral-200 p-4 md:grid-cols-2 md:gap-2 md:p-5">
              {SECTION_LIST.map((item) => (
                <p key={item} className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-neutral-600">
                  {item}
                </p>
              ))}
            </div>

            <section className="flex flex-col gap-2">
              <h2 className="font-rozha text-xl text-neutral-900 md:text-2xl">1. Opening Statement</h2>
              <p>
                Each Bint Saeed piece is created following the specific request and selection of the client. Production
                begins only after an order is confirmed.
              </p>
              <p>
                Our commitment is to deliver each piece in the condition, quality, and craftsmanship expected from Bint
                Saeed. Should an issue arise, our team will work closely with the client to find an appropriate
                resolution.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-rozha text-xl text-neutral-900 md:text-2xl">2. General Policy</h2>
              <p>
                As many Bint Saeed pieces are produced on demand following a confirmed order, we do not offer refunds for
                change of mind, personal preference, or sizing selections made by the client.
              </p>
              <p>However, we understand that circumstances may arise where an alternative size is required.</p>
              <p>
                Eligible items may be exchanged within 14 days of delivery, subject to approval by the Bint Saeed Returns
                Department and the conditions outlined below.
              </p>
              <p>
                To request an exchange, clients must contact{' '}
                <a
                  href={officialMailto('returns')}
                  className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950"
                >
                  {OFFICIAL_EMAILS.returns}
                </a>{' '}
                within 14 days of receiving their order.
              </p>
              <p>
                Prior authorisation is required before any item is returned. Once approved, detailed return instructions
                will be provided by our team.
              </p>
              <p>To be eligible for exchange, items must:</p>
              <ul className={`list-disc space-y-1 ${isRTL ? 'pr-5' : 'pl-5'}`}>
                <li>Be unworn, unused, and in original condition.</li>
                <li>Be returned with all original tags attached.</li>
                <li>Be returned in original packaging.</li>
                <li>Be free from perfume, smoke, stains, alterations, damage, or signs of wear.</li>
                <li>Be approved by the Bint Saeed Returns Department prior to shipment.</li>
              </ul>
              <p>
                Return shipping costs remain the responsibility of the client unless otherwise required by applicable
                law.
              </p>
              <p>
                Personalised pieces, custom specifications, altered garments, and items produced to a client’s specific
                requirements are not eligible for exchange except where a verified manufacturing defect or material
                non-conformity exists.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-rozha text-xl text-neutral-900 md:text-2xl">
                3. Exceptions (UAE Consumer Protection Alignment)
              </h2>
              <p>In accordance with applicable laws of the United Arab Emirates, exceptions may apply where:</p>
              <ul className={`list-disc space-y-1 ${isRTL ? 'pr-5' : 'pl-5'}`}>
                <li>The item has a verified manufacturing defect.</li>
                <li>The item is materially different from the confirmed order.</li>
              </ul>
              <p>In such cases:</p>
              <ul className={`list-disc space-y-1 ${isRTL ? 'pr-5' : 'pl-5'}`}>
                <li>The client must notify us within 48 hours of delivery.</li>
                <li>Clear photographic evidence must be provided by email.</li>
                <li>The item must remain unused and in its original condition.</li>
              </ul>
              <p>Upon review, Bint Saeed will work with the client to determine the most appropriate resolution, which may include:</p>
              <ul className={`list-disc space-y-1 ${isRTL ? 'pr-5' : 'pl-5'}`}>
                <li>Repair of the item.</li>
                <li>Replacement of the item.</li>
                <li>Exchange of the item.</li>
                <li>Store credit.</li>
                <li>Refund, where repair or replacement is not reasonably possible.</li>
              </ul>
              <p>
                Our goal is always to provide a fair and appropriate solution while maintaining the quality standards of
                the house.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-rozha text-xl text-neutral-900 md:text-2xl">4. Non-Eligible Cases</h2>
              <p>The following do not qualify as grounds for refund, exchange, or return:</p>
              <ul className={`list-disc space-y-1 ${isRTL ? 'pr-5' : 'pl-5'}`}>
                <li>Change of mind.</li>
                <li>Personal preference.</li>
                <li>Incorrect size selected by the client.</li>
                <li>Minor variations inherent to handcrafted production.</li>
                <li>Colour differences resulting from screen settings or device displays.</li>
                <li>Damage resulting from improper care, misuse, alteration, or normal wear.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-rozha text-xl text-neutral-900 md:text-2xl">5. EU Clients – Right of Withdrawal</h2>
              <p>
                For clients located within the European Union, consumer regulations may provide a 14-day right of
                withdrawal for online purchases.
              </p>
              <p>However, this right generally does not apply to:</p>
              <ul className={`list-disc space-y-1 ${isRTL ? 'pr-5' : 'pl-5'}`}>
                <li>Goods made to the consumer’s specifications.</li>
                <li>Clearly personalised or custom-made items.</li>
              </ul>
              <p>
                As many Bint Saeed pieces are produced on demand following a confirmed order, they generally fall within
                this exemption. Returns and cancellations are therefore not accepted once production has commenced.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-rozha text-xl text-neutral-900 md:text-2xl">6. EU Exception (Defective Items Only)</h2>
              <p>In the event of a manufacturing defect:</p>
              <ul className={`list-disc space-y-1 ${isRTL ? 'pr-5' : 'pl-5'}`}>
                <li>Clients must notify us within 48 hours of delivery.</li>
                <li>Supporting photographic evidence must be provided by email.</li>
              </ul>
              <p>
                We will assess the matter and provide an appropriate resolution, which may include repair, replacement,
                exchange, store credit, or refund where required by applicable law.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-rozha text-xl text-neutral-900 md:text-2xl">7. Final Acknowledgment</h2>
              <p>
                By placing an order with Bint Saeed, the client confirms that they have reviewed and accepted the
                product description, sizing information, production timeline, and the terms outlined within this policy.
              </p>
              <p>
                The client further acknowledges the made-to-order nature of many Bint Saeed pieces and understands the
                applicable limitations relating to refunds, exchanges, and cancellations.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-rozha text-xl text-neutral-900 md:text-2xl">8. Shipping Timelines</h2>
              <p>
                We aim to dispatch every order as efficiently as possible while maintaining the quality standards of
                Bint Saeed.
              </p>
              <ul className={`list-disc space-y-1 ${isRTL ? 'pr-5' : 'pl-5'}`}>
                <li>
                  Complimentary shipping within the United Arab Emirates applies to orders with a merchandise subtotal
                  of AED 1,000 or more.
                </li>
                <li>
                  Shipping fees for orders below this threshold, and for international destinations, are calculated at
                  checkout.
                </li>
                <li>
                  Made-to-order pieces are usually shipped within approximately two weeks following order confirmation.
                </li>
                <li>
                  In-stock items, including selected jewellery and ready-to-ship styles, are usually dispatched within
                  1–3 business days.
                </li>
                <li>
                  Estimated delivery timelines may vary depending on destination, customs processing, and courier
                  operations.
                </li>
                <li>
                  Once an order has been dispatched, clients will receive shipping confirmation and tracking details where
                  available.
                </li>
                <li>
                  Once an order has been transferred to the courier, delivery timelines are subject to the courier’s
                  network, local delivery infrastructure, customs procedures, and destination country regulations.
                </li>
                <li>
                  Any customs duties, import taxes, local charges, or clearance fees imposed by the destination country
                  remain the responsibility of the recipient unless otherwise stated at checkout.
                </li>
              </ul>
              <p>
                While we make every effort to meet estimated timelines, delivery dates are not guaranteed and may be
                affected by circumstances outside our reasonable control.
              </p>
              <p>
                Bint Saeed is not responsible for delays arising from customs inspections, customs clearance procedures,
                import restrictions, courier operational delays, failed delivery attempts, incorrect delivery information
                provided by the client, or other circumstances beyond our reasonable control.
              </p>
              <p>
                While we will always assist clients in tracking and resolving shipping issues where possible, we cannot
                guarantee delivery timelines once an order has been transferred to the courier.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-rozha text-xl text-neutral-900 md:text-2xl">9. Force Majeure</h2>
              <p>
                Bint Saeed shall not be held liable for delays, interruptions, or failure to fulfil obligations where
                such circumstances arise from events beyond our reasonable control.
              </p>
              <p>These events may include, but are not limited to:</p>
              <ul className={`list-disc space-y-1 ${isRTL ? 'pr-5' : 'pl-5'}`}>
                <li>War or armed conflict.</li>
                <li>Civil unrest or political instability.</li>
                <li>Acts of government or public authorities.</li>
                <li>Customs inspections, customs delays, or import restrictions.</li>
                <li>Transport disruptions.</li>
                <li>Natural disasters.</li>
                <li>Labour disputes or strikes.</li>
                <li>Public health emergencies.</li>
                <li>Utility failures, telecommunications disruptions, or technology outages.</li>
                <li>Force majeure events or comparable circumstances beyond our reasonable control.</li>
              </ul>
              <p>
                In such situations, production, dispatch, delivery, and other obligations may be suspended or delayed
                for the duration of the event and any reasonable recovery period thereafter.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-rozha text-xl text-neutral-900 md:text-2xl">10. Contact</h2>
              <p>For exchanges, return requests, and defect claims:</p>
              <p>
                <a
                  href={officialMailto('returns')}
                  className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950"
                >
                  {OFFICIAL_EMAILS.returns}
                </a>
              </p>
              <p>For general customer support:</p>
              <p>
                <a
                  href={officialMailto('support')}
                  className="text-neutral-800 underline decoration-neutral-400 underline-offset-2 hover:text-neutral-950"
                >
                  {OFFICIAL_EMAILS.support}
                </a>
              </p>
              <p>
                Please include your order number, contact details, and any supporting photographs where applicable. Our
                team will review your request and provide guidance on the next steps.
              </p>
              <p>
                At Bint Saeed, we are committed to handling every enquiry with fairness, professionalism, and care.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
