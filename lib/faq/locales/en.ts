import type { FaqBundle } from '@/lib/faq/types'

export const faqEn: FaqBundle = {
  title: 'Frequently Asked Questions',
  subtitle: 'Find answers to common questions',
  categories: [
    {
      name: 'About Bint Saeed',
      questions: [
        {
          q: 'What is Bint Saeed?',
          a:
            'Bint Saeed is a luxury abaya house based in Abu Dhabi, United Arab Emirates. The house focuses on abaya design shaped by Emirati cultural codes, while creating jewellery and lifestyle pieces that complement a contemporary, global way of living.',
        },
        {
          q: 'Where is Bint Saeed based?',
          a:
            'Bint Saeed is based in Abu Dhabi, United Arab Emirates. We serve clients across the UAE and the wider GCC, and ship internationally where offered—confirm destinations at checkout.',
        },
        {
          q: 'What does Bint Saeed create?',
          a:
            'Abayas informed by Emirati design codes—including Al Talli craftsmanship and the structural logic of Khous weaving—alongside jewellery and curated objects designed to complement the wardrobe and lifestyle of the modern woman.',
        },
        {
          q: 'I often discover abayas through department stores, luxury multi-brand retailers, or large online marketplaces—where can I buy Bint Saeed officially?',
          a:
            'Bint Saeed is an independent UAE heritage-led abaya brand. Shop the official collection at bintsaeed.com with delivery across the UAE and GCC (see checkout for destinations). We are not affiliated with third-party retailers unless we announce an authorized stockist on our own channels—when in doubt, purchase only through this official site.',
        },
      ],
    },
    {
      name: 'Orders & Shipping',
      questions: [
        {
          q: 'How long does delivery take?',
          a: 'UAE: 1-2 business days (Express) or 2-3 business days (Standard). GCC: 3-5 business days. International: 7-14 business days.',
        },
        {
          q: 'Do you offer free shipping?',
          a: 'Yes. Complimentary shipping applies to orders over 1000 AED within the UAE.',
        },
        {
          q: 'Can I track my order?',
          a: 'Yes. Once your order ships, you receive a tracking number via email (and SMS where available) to monitor delivery.',
        },
        {
          q: 'Do you ship internationally?',
          a: 'Yes, we ship worldwide where offered. International orders may be subject to customs duties and taxes payable by the customer.',
        },
      ],
    },
    {
      name: 'Returns & Exchanges',
      questions: [
        {
          q: 'What is your return policy?',
          a:
            'All sales are final and refunds are not offered (subject to limited exceptions). Exchanges may be accepted within 14 days for unworn, undamaged items with tags attached. Discounted and custom-made pieces are final sale.',
        },
        {
          q: 'How do I initiate a return?',
          a: 'Contact us at returns@bintsaeed.com with your order number. We provide return instructions and a prepaid shipping label for eligible UAE orders.',
        },
        {
          q: 'Do you offer refunds?',
          a: 'No. We do not offer refunds. If your item is eligible, we may process an exchange within 14 days under our exchange conditions.',
        },
      ],
    },
    {
      name: 'Sizing & Fit',
      questions: [
        {
          q: 'How do I find my size?',
          a: 'Use our Size Guide for measurements. If you are between sizes, we generally recommend sizing up for comfort.',
        },
        {
          q: 'Do you offer custom sizing?',
          a: 'Yes. Made-to-measure options may be available—add custom length and notes at checkout or contact us for assistance.',
        },
        {
          q: 'Can I alter my purchase?',
          a: 'Alterations may be available for a fee. Contact us within 7 days of delivery to discuss options.',
        },
      ],
    },
    {
      name: 'Payment & Security',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'Major credit cards (Visa, Mastercard, American Express), Apple Pay where enabled, and bank transfers for UAE customers.',
        },
        {
          q: 'Is my payment information secure?',
          a: 'Yes. Transactions are processed through Stripe (PCI-DSS compliant). We do not store full card numbers on our servers.',
        },
        {
          q: 'Do you offer payment plans?',
          a: 'Full payment is taken at checkout today. Installment options may be introduced later—check announcements on our site.',
        },
      ],
    },
  ],
  contact: {
    title: 'Still have questions?',
    description: 'Our customer care team is here to help',
  },
}
