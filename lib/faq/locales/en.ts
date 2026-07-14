import type { FaqBundle } from '@/lib/faq/types'

/**
 * Sitewide FAQ — English.
 * Answers are drawn only from approved on-site sources (About, Personalisation,
 * Shipment & Return Policy, Terms payment processors, jewellery care copy).
 * No em dashes. Museum tone. Prefer legal/policy over older marketing FAQ drift.
 */
export const faqEn: FaqBundle = {
  title: 'Frequently Asked Questions',
  subtitle:
    'Clear answers on the House, orders, shipping, exchanges, sizing, personalisation, payment, and jewellery care.',
  topics: [
    {
      id: 'the-house',
      name: 'The House',
      subtopics: [
        {
          name: 'Identity',
          questions: [
            {
              q: 'What is Bint Saeed?',
              a: 'Bint Saeed is a luxury abaya house based in Abu Dhabi, United Arab Emirates. The house builds its design language through Emirati cultural codes, while creating jewellery and lifestyle pieces made for a contemporary, global way of living. In Arabic, Bint means “daughter of,” a word that carries lineage, memory, and belonging.',
            },
            {
              q: 'Where is Bint Saeed based?',
              a: 'Bint Saeed is rooted in Abu Dhabi, United Arab Emirates. We serve clients across the UAE and the wider region, and ship internationally where offered. Destinations available for your order are confirmed at checkout.',
            },
            {
              q: 'What does Bint Saeed create?',
              a: 'Abayas and related garments informed by Emirati design codes, including the delicacy of Al Talli and the woven memory of Khous, alongside jewellery and curated objects shaped with natural gemstones and signature details. The house works through enduring codes such as the Monogram, Al Talli, Khous, Al Ain Rosette, Knotted Lines of Lineage, and The Strands.',
            },
            {
              q: 'What makes Bint Saeed different from other brands?',
              a: 'Bint Saeed exists at the intersection between Emirati heritage and a contemporary life lived locally and across borders. Rooted in Abu Dhabi, the house builds its design language through enduring codes such as the woven memory of Khous, the delicacy of Talli, the warmth of natural gemstones, and signature details carried into modern silhouettes made for a life in motion. Emirati craft tradition is translated into a contemporary form, so the elegance of the Gulf can be worn with confidence abroad as well as at home, without adjusting identity to every setting or passing trend. The house also pioneered jewellery created for clothes: Signature Strands, interchangeable natural stone strands worn on the cuff, so one garment can shift accent by choice. Attention to detail is not decoration alone; it is how origin is carried forward in form, in attitude, and in a wardrobe that moves between worlds with certainty.',
            },
          ],
        },
        {
          name: 'Buying from the House',
          questions: [
            {
              q: 'Where can I buy Bint Saeed officially?',
              a: 'Bint Saeed is an independent UAE heritage-led house. The official collection is available at bintsaeed.com. We are not affiliated with third-party retailers unless an authorised stockist is announced on our own channels. When in doubt, purchase only through this official site.',
            },
            {
              q: 'How does Bint Saeed give forward?',
              a: 'Twenty AED from each item sold is dedicated to charity, aligned with the Mother of the Nation Endowment for Orphans and Emirates Red Crescent initiatives. Full detail is published on our Giving Forward page.',
            },
          ],
        },
      ],
    },
    {
      id: 'orders-shipping',
      name: 'Orders & Shipping',
      subtopics: [
        {
          name: 'Dispatch & delivery',
          questions: [
            {
              q: 'How long does delivery take?',
              a: 'In-stock items, including selected jewellery and ready-to-ship styles, are usually dispatched within 1 to 3 business days. Made-to-order pieces are usually shipped within approximately two weeks after order confirmation. Once dispatched, UAE deliveries typically arrive within approximately 1 to 3 business days. International deliveries typically arrive within approximately 3 to 10 business days, depending on destination and customs clearance. Dispatch and transit times are estimates only and cannot be guaranteed. Full detail appears in our Shipment & Return Policy.',
            },
            {
              q: 'Which carriers do you use?',
              a: 'Within the United Arab Emirates, orders are operated by Jeebly. International orders are fulfilled with DHL Express. Additional carriers may be introduced as our logistics network expands.',
            },
          ],
        },
        {
          name: 'Complimentary shipping',
          questions: [
            {
              q: 'Do you offer complimentary shipping?',
              a: 'Complimentary shipping within the United Arab Emirates applies to orders with a merchandise subtotal of AED 1,000 or more. Complimentary worldwide shipping applies to orders with a merchandise subtotal of EUR 500 or more, or the clean equivalent shown in the selected currency. Below these thresholds, a flat shipping fee applies: AED 35 within the UAE, and EUR 30 (or the clean equivalent in the selected currency) for other destinations, confirmed at payment.',
            },
          ],
        },
        {
          name: 'Tracking & customs',
          questions: [
            {
              q: 'Can I track my order?',
              a: 'Once an order has been dispatched, clients receive shipping confirmation and tracking details where available.',
            },
            {
              q: 'Do you ship internationally?',
              a: 'Yes, we ship worldwide where offered. International orders may be subject to customs duties, taxes, and clearance fees, which remain the recipient’s responsibility. Destinations and charges are confirmed at checkout.',
            },
          ],
        },
      ],
    },
    {
      id: 'returns-exchanges',
      name: 'Returns & Exchanges',
      subtopics: [
        {
          name: 'Exchange policy',
          questions: [
            {
              q: 'What is your exchange policy?',
              a: 'Eligible items may be exchanged within 14 days of delivery, subject to approval by the Bint Saeed Returns team. Items must be unworn and unused, with tags, seals, and original packaging intact, and free from perfume, smoke, stains, alterations, or signs of wear. No exchange is processed until approved goods have been received and inspected at our atelier. Full conditions are set out in our Shipment & Return Policy.',
            },
            {
              q: 'Do you offer refunds?',
              a: 'We do not offer refunds for change of mind, preference, or client sizing choices. Where the law or a verified manufacturing defect requires a remedy, pathways may include repair, replacement, exchange, store credit, or refund as described in our Shipment & Return Policy.',
            },
          ],
        },
        {
          name: 'Earrings & personalised pieces',
          questions: [
            {
              q: 'Can I exchange or return earrings?',
              a: 'For reasons of health, hygiene, and personal safety, earrings are final sale and cannot be exchanged or refunded, except where a verified manufacturing defect or material non-conformity exists. Contact returns@bintsaeed.com if you believe your earrings have a manufacturing defect.',
            },
            {
              q: 'Can personalised or custom pieces be exchanged?',
              a: 'Personalised, custom, altered, or client-specification pieces are not eligible for exchange, except where a verified manufacturing defect or material non-conformity exists.',
            },
          ],
        },
        {
          name: 'How to request an exchange',
          questions: [
            {
              q: 'How do I request an exchange?',
              a: 'Contact returns@bintsaeed.com with your order number before returning any goods. Prior authorisation is required. Where an approved exchange requires goods to be shipped back to Bint Saeed, a flat return shipping fee applies: AED 35 for returns originating within the UAE, and EUR 35 (or the clean equivalent in the selected currency) for international returns. The fee is waived for a verified House fault.',
            },
          ],
        },
      ],
    },
    {
      id: 'sizing-personalisation',
      name: 'Sizing & Personalisation',
      subtopics: [
        {
          name: 'Fit',
          questions: [
            {
              q: 'How do I find my size?',
              a: 'Use our Size Guide for bust, waist, hip, and length measurements in inches and centimetres, together with international conversions. Measurements may vary slightly by style. If you need guidance, contact Client Services before ordering.',
            },
            {
              q: 'Do you offer custom length?',
              a: 'Custom length is available upon request for selected abayas. You may add length notes where offered on the product page or at checkout, or contact Client Services for assistance.',
            },
          ],
        },
        {
          name: 'Personalisation',
          questions: [
            {
              q: 'What personalisation do you offer?',
              a: 'Every Bint Saeed abaya includes a hidden pocket. On the garment page, select Personalise to inscribe a name, a meaningful date, or a few words. Your message is printed on a Bint Saeed silk label and stitched within the hidden pocket, sewn discreetly to the inner lining before the garment is completed.',
            },
            {
              q: 'Is personalisation complimentary?',
              a: 'Personalisation is complimentary on all abayas. If you wish to personalise one of our other items, please contact Customer Service.',
            },
          ],
        },
      ],
    },
    {
      id: 'payment-security',
      name: 'Payment & Security',
      subtopics: [
        {
          name: 'Checkout',
          questions: [
            {
              q: 'What payment methods do you accept?',
              a: 'Payments are processed through Stripe Embedded Checkout, PayPal, and Mollie where offered. Card payments typically include Visa and Mastercard. Apple Pay and Google Pay are available where enabled for your device and region. Prices are shown in the currency you select; each currency uses a fixed retail price rather than a live foreign-exchange conversion.',
            },
            {
              q: 'Is my payment information secure?',
              a: 'Yes. Card transactions are processed by our payment partners. Bint Saeed does not store full card numbers on our servers.',
            },
            {
              q: 'Do you offer payment plans?',
              a: 'Full payment is taken at checkout. Instalment options are not offered at this time.',
            },
            {
              q: 'How do Gift Cards work?',
              a: 'Gift Cards are denominated in AED. You may pay the equivalent in your selected currency at checkout. After payment, a unique code is emailed automatically via Resend. You can send the code and a personal message to a recipient; your confirmation includes a copy of that message. Enter the code at checkout on bintsaeed.com. Cards are valid for one Gregorian year from issue; unused balances after expiry are donated through Giving Forward. Full terms appear in our Terms & Conditions.',
            },
          ],
        },
      ],
    },
    {
      id: 'jewellery-care',
      name: 'Jewellery Care',
      subtopics: [
        {
          name: 'Natural gemstones',
          questions: [
            {
              q: 'How should I care for Bint Saeed jewellery?',
              a: 'Every Bint Saeed jewellery creation is shaped by hand from carefully selected natural gemstones. Handle each piece gently; stones may chip or break if struck or dropped. Clean only with a soft, dry jewellery cloth. Avoid water, soap soaks, chlorine, perfume, hair spray, and nail polish remover. Remove jewellery before sleeping, cooking, and exercising. Store each creation separately in its Bint Saeed pouch or gift box, away from sunlight, excessive heat, and damp.',
            },
            {
              q: 'How should I care for Signature Strands?',
              a: 'Remove the strands before washing or dry cleaning your garment. Handle with care; natural gemstones may chip or break if struck or dropped. Avoid water and prolonged moisture. Do not spray perfume, hair spray, or nail polish remover directly onto the gemstones or gold-tone hardware. Clean gently with a soft, dry microfibre cloth only. Store inside the Bint Saeed presentation box when not in use, away from sunlight, excessive heat, and damp.',
            },
          ],
        },
      ],
    },
  ],
  contact: {
    title: 'Still have a question?',
    description:
      'Write to support@bintsaeed.com or message us on WhatsApp. Client Services is available Sunday to Thursday, 9 AM to 6 PM (Abu Dhabi time).',
  },
}
