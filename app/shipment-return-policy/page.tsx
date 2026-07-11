'use client'

import { motion } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import PolicyDocument from '@/components/legal/PolicyDocument'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { OFFICIAL_EMAILS, officialMailto } from '@/lib/brand/officialEmails'
import { getShipmentReturnContent } from '@/lib/legal/policyContentId'
import {
  LANGUAGE_CLAUSE_SHORT_EN,
  LANGUAGE_CLAUSE_TITLE_EN,
} from '@/lib/legal/languageAndTranslationClause'
import { splitLegalEmail } from '@/lib/legal/splitLegalEmail'
import EnglishPolicyVersionNotice from '@/components/legal/EnglishPolicyVersionNotice'
import type { AppLocale } from '@/lib/i18n/routing'
import { policySectionH2Plain } from '@/lib/ui/ctaClasses'

const SECTION_LIST = [
  '1. Opening Statement',
  '2. General Policy',
  '3. Exceptions (UAE Consumer Protection Alignment)',
  '4. Non-Eligible Cases',
  '5. EU Clients – Right of Withdrawal',
  '6. EU Exception (Defective Items Only)',
  '7. Final Acknowledgment',
  '8. Shipping & Delivery',
  '9. Delivery Details & Client Responsibilities',
  '10. Customs & Import',
  '11. Undeliverable Shipments',
  '12. Force Majeure',
  '13. Language and Translations',
  '14. Contact',
]

export default function ShipmentReturnPolicyPage() {
  const { t, isRTL, language } = useLanguage()
  const locale = language as AppLocale

  if (language === 'id' || language === 'ms' || language === 'ar') {
    const lang = language as 'id' | 'ms' | 'ar'
    return (
      <PolicyDocument
        content={getShipmentReturnContent(lang)}
        isRTL={isRTL}
        backLabel={t.shop.backToHome}
        variant="shipment"
        englishPolicy="shipment"
        language={lang}
      />
    )
  }

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
              { label: isRTL ? 'الرئيسية' : 'Home', href: '/home' },
              { label: isRTL ? 'سياسة الشحن والإرجاع' : 'Shipment & Return Policy' },
            ]}
            backLink={{ href: '/', label: t.shop.backToHome }}
          />
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
          <p className="font-montserrat tracking-wide text-neutral-700">Last updated: July 2026</p>
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

            <EnglishPolicyVersionNotice policy="shipment" language={locale} compact />

            <div className="grid gap-1.5 rounded-sm border border-neutral-200 p-4 md:grid-cols-2 md:gap-2 md:p-5">
              {SECTION_LIST.map((item) => (
                <p key={item} className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-neutral-600">
                  {item}
                </p>
              ))}
            </div>

            <section className="flex flex-col gap-2">
              <h2 className={policySectionH2Plain}>1. Opening Statement</h2>
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
              <h2 className={policySectionH2Plain}>2. General Policy</h2>
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
                <li>
                  Be returned with all original tags, seals and security labels intact and undisturbed.
                </li>
                <li>Be returned in original packaging.</li>
                <li>Be free from perfume, smoke, stains, alterations, damage, or signs of wear.</li>
                <li>Be approved by the Bint Saeed Returns Department prior to shipment.</li>
              </ul>
              <p>
                Bint Saeed will not accept an exchange or return where tags, seals or security labels have been
                removed, cut, damaged or altered, or where photographs submitted in support of a request indicate that
                removal or tampering has been attempted.
              </p>
              <p>
                No exchange is processed until approved goods have been physically received and inspected at our
                atelier.
              </p>
              <p>
                Where an approved exchange or return requires goods to be shipped back to Bint Saeed, a flat return
                shipping fee applies: AED 35 for returns originating within the United Arab Emirates, and EUR 35 (or the
                clean equivalent in the selected currency) for returns originating internationally. This fee is waived
                where the return arises from a verified fault of the House — including a manufacturing defect or material
                non-conformity — or where otherwise required by applicable law.
              </p>
              <p>
                Personalised pieces, custom specifications, altered garments, and items produced to a client’s specific
                requirements are not eligible for exchange except where a verified manufacturing defect or material
                non-conformity exists.
              </p>
              <p>
                For reasons of health, hygiene and personal safety, earrings are final sale and cannot be exchanged or
                refunded, except where a verified manufacturing defect or material non-conformity exists.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className={policySectionH2Plain}>
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
              <h2 className={policySectionH2Plain}>4. Non-Eligible Cases</h2>
              <p>The following do not qualify as grounds for refund, exchange, or return:</p>
              <ul className={`list-disc space-y-1 ${isRTL ? 'pr-5' : 'pl-5'}`}>
                <li>Change of mind.</li>
                <li>Personal preference.</li>
                <li>Incorrect size selected by the client.</li>
                <li>Minor variations inherent to handcrafted production.</li>
                <li>Colour differences resulting from screen settings or device displays.</li>
                <li>Damage resulting from improper care, misuse, alteration, or normal wear.</li>
                <li>
                  Removal, cutting, damage or alteration of original tags, seals or security labels — including where
                  photographs indicate that removal or tampering has been attempted.
                </li>
                <li>
                  Earrings, which are final sale for health, hygiene and personal safety reasons (except where a verified
                  manufacturing defect or material non-conformity exists).
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className={policySectionH2Plain}>5. EU Clients – Right of Withdrawal</h2>
              <p>
                For clients located within the European Union, consumer regulations may provide a 14-day right of
                withdrawal for online purchases.
              </p>
              <p>However, this right generally does not apply to:</p>
              <ul className={`list-disc space-y-1 ${isRTL ? 'pr-5' : 'pl-5'}`}>
                <li>Goods made to the consumer’s specifications.</li>
                <li>Clearly personalised or custom-made items.</li>
                <li>
                  Sealed goods which are not suitable for return due to health protection or hygiene reasons, including
                  earrings.
                </li>
              </ul>
              <p>
                As many Bint Saeed pieces are produced on demand following a confirmed order, they generally fall within
                this exemption. Returns and cancellations are therefore not accepted once production has commenced.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className={policySectionH2Plain}>6. EU Exception (Defective Items Only)</h2>
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
              <h2 className={policySectionH2Plain}>7. Final Acknowledgment</h2>
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
              <h2 className={policySectionH2Plain}>8. Shipping & Delivery</h2>
              <p>
                We aim to dispatch every order as efficiently as possible while maintaining the quality standards of
                Bint Saeed.
              </p>
              <p>
                International orders are fulfilled with DHL Express. Within the United Arab Emirates, orders are
                operated by Jeebly. Additional carriers may be introduced as our logistics network expands.
              </p>
              <ul className={`list-disc space-y-1 ${isRTL ? 'pr-5' : 'pl-5'}`}>
                <li>
                  Complimentary shipping within the United Arab Emirates applies to orders with a merchandise subtotal
                  of AED 1,000 or more.
                </li>
                <li>
                  Complimentary worldwide shipping applies to orders with a merchandise subtotal of EUR 500 or more (or
                  the clean equivalent shown in the selected currency).
                </li>
                <li>
                  Below these thresholds, a flat shipping fee applies: AED 35 within the UAE, and the international flat
                  fee (EUR 30 or the clean equivalent in the selected currency) for other destinations, confirmed at
                  payment.
                </li>
                <li>
                  Made-to-order pieces are usually shipped within approximately two weeks following order confirmation.
                </li>
                <li>
                  In-stock items, including selected jewellery and ready-to-ship styles, are usually dispatched within
                  1–3 business days.
                </li>
                <li>
                  Once dispatched, UAE deliveries typically arrive within approximately 1–3 business days. International
                  deliveries typically arrive within approximately 3–10 business days, depending on destination and
                  customs clearance.
                </li>
                <li>
                  Once an order has been dispatched, clients will receive shipping confirmation and tracking details
                  where available.
                </li>
              </ul>
              <p>
                If you require delivery for a particular occasion or by a fixed date, please contact Client Services
                before placing your order. Dispatch and transit times are estimates only and cannot be guaranteed.
              </p>
              <p>
                While we make every effort to meet estimated timelines, delivery dates are not guaranteed and may be
                affected by circumstances outside our reasonable control.
              </p>
              <p>
                Once an order has been transferred to the courier, delivery timelines are subject to the courier’s
                network, local delivery infrastructure, customs procedures, and destination country regulations. While we
                will always assist clients in tracking and resolving shipping issues where possible, we cannot guarantee
                delivery timelines after handover to the carrier.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className={policySectionH2Plain}>9. Delivery Details & Client Responsibilities</h2>
              <p>
                Clients are responsible for ensuring that shipping address, telephone number and email address are
                complete and accurate at checkout. Couriers may use the telephone number or email provided to arrange
                delivery.
              </p>
              <p>
                Bint Saeed is not responsible for non-delivery, delay or return of a shipment arising from incomplete,
                incorrect or outdated delivery information supplied by the client.
              </p>
              <p>
                Where a destination requires a P.O. Box or other local addressing format for successful delivery, clients
                must provide those details in full. Failure to do so may result in delay or return of the parcel at the
                client’s risk.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className={policySectionH2Plain}>10. Customs & Import</h2>
              <p>
                Any customs duties, import taxes, local charges, or clearance fees imposed by the destination country
                remain the responsibility of the recipient unless otherwise stated at checkout. These charges are
                separate from the client’s order with Bint Saeed.
              </p>
              <p>
                Clients are advised to consult their local customs authority regarding import regulations, restrictions
                and possible charges before ordering. Customs rules differ by country; unfamiliarity with local
                requirements may result in delay, additional charges, refusal or return of the shipment.
              </p>
              <p>
                Bint Saeed is not liable for parcels refused, held, delayed or seized by customs, nor for any duties,
                taxes or penalties levied once the shipment has left the United Arab Emirates.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className={policySectionH2Plain}>11. Undeliverable Shipments</h2>
              <p>
                If a shipment is returned to Bint Saeed because of an incorrect or incomplete address, failed delivery
                attempts, refusal of the parcel, refusal to pay customs charges, import restrictions, or comparable
                reasons not attributable to a verified fault of the House, Bint Saeed is under no obligation to refund
                the order.
              </p>
              <p>
                At our discretion, we may offer re-shipment at the client’s expense, an exchange where the piece remains
                eligible, store credit, or other assistance. Where goods are seized by customs, abandoned by the
                carrier on instruction, or where recovery is not reasonably possible, no credit will be issued.
              </p>
              <p>
                As set out elsewhere in this policy, refunds are not offered for change of mind. Monetary refunds, where
                considered at all, arise only in connection with a verified manufacturing defect or material
                non-conformity, and only where repair or replacement is not reasonably possible, or where required by
                applicable law.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className={policySectionH2Plain}>12. Force Majeure</h2>
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
              <h2 className={policySectionH2Plain}>13. {LANGUAGE_CLAUSE_TITLE_EN}</h2>
              {(() => {
                const parts = splitLegalEmail(LANGUAGE_CLAUSE_SHORT_EN)
                if (!parts) return <p>{LANGUAGE_CLAUSE_SHORT_EN}</p>
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

            <section className="flex flex-col gap-2">
              <h2 className={policySectionH2Plain}>14. Contact</h2>
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
