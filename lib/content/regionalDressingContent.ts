/**
 * Crawlable editorial notes for regional dressing discovery.
 * Soft page — sitemap + hidden internal links; not in primary About nav.
 * EN is source of truth; keep calm luxury house voice.
 */

export const REGIONAL_DRESSING_PATH = '/dressing-for-the-middle-east'

export const REGIONAL_DRESSING_META_KEYWORDS = [
  'what to wear in the Middle East',
  'what to wear to the Middle East',
  'Middle Eastern styles',
  'Middle Eastern style',
  'Middle East fashion',
  'Middle East dress code women',
  'what to wear in Dubai',
  'what to wear in Abu Dhabi',
  'what to wear in UAE',
  'clothing for Middle East travel',
  'modest clothing for Middle East',
  'elegant Middle Eastern wear',
  'contemporary Middle Eastern fashion',
  'luxury abaya Abu Dhabi',
  'Bint Saeed',
] as const

export type RegionalDressingFaq = { question: string; answer: string }

export const REGIONAL_DRESSING_CONTENT = {
  eyebrow: 'Notes from the house',
  title: 'Dressing for the Middle East',
  lead:
    'A calm guide for women travelling to — or living between — the Gulf and the wider Middle East: how to dress with ease, respect, and presence.',
  sections: [
    {
      heading: 'The register of the region',
      body: [
        'Across the United Arab Emirates, Saudi Arabia, Qatar, and neighbouring capitals, dressing is often read as a language of composure. Coverage is valued not as restriction, but as polish — long lines, refined fabrics, and silhouettes that move through heat, air-conditioned interiors, and evening invitations with the same quiet assurance.',
        'Middle Eastern styles today sit comfortably beside international wardrobes. Many women wear contemporary abayas, tailored coats, and elongated dresses for city days; for evenings, the same discipline of length and finish, with a softer fabric or a more deliberate detail.',
      ],
    },
    {
      heading: 'What to wear in the Middle East',
      body: [
        'For everyday city wear in Abu Dhabi or Dubai, choose breathable layers that cover the shoulders and fall below the knee — or a full-length abaya over your own pieces. Light colours and fluid fabrics suit outdoor heat; darker, denser cloth often feels better indoors and after sunset.',
        'When visiting mosques or more traditional settings, prefer sleeves to the wrist, a higher neckline, and a hem that reaches the ankle. A light scarf is practical to have with you. For dinners and gatherings, elevated modest dressing — an evening abaya, a structured set, or a long dress with considered jewellery — is widely understood and welcomed.',
      ],
    },
    {
      heading: 'How Bint Saeed approaches the question',
      body: [
        'Bint Saeed designs from Abu Dhabi for women who dress across cultures. Our abayas and related pieces are made to order, shaped by Emirati house codes and contemporary cutting — intended for travel, work, and occasions where Middle East dress expectations meet a modern life.',
        'If you are preparing a wardrobe for the Gulf or the wider region, begin with one versatile black or deep-tone abaya, then add colour or a lighter weave as the climate and calendar ask. Personalisation remains private: a message held inside the garment, known only to you.',
      ],
    },
  ],
  shopCta: 'Explore the collection',
  shopHref: '/shop',
  faqs: [
    {
      question: 'What should I wear when travelling to the Middle East?',
      answer:
        'Pack pieces that cover the shoulders and fall at least to the knee for daytime cities such as Abu Dhabi and Dubai. A contemporary abaya, long dresses, and light layers work well in heat and indoors. For mosques and traditional settings, favour full sleeves, a higher neckline, ankle length, and a scarf.',
    },
    {
      question: 'Is there a dress code for women in the UAE?',
      answer:
        'The UAE is welcoming to international visitors. Modest, respectful dressing is appreciated in public spaces — covered shoulders, longer hems, and polished presentation. Beach and hotel resorts have their own norms; city centres and cultural sites favour more covered silhouettes.',
    },
    {
      question: 'Are Middle Eastern styles only traditional abayas?',
      answer:
        'No. Middle Eastern fashion today includes contemporary abayas, tailored modestwear, and international pieces worn with regional sensibility. Houses such as Bint Saeed interpret Emirati heritage through modern cutting for women who live and travel globally.',
    },
    {
      question: 'What is elegant to wear in Abu Dhabi or Dubai?',
      answer:
        'Fluid full-length abayas, refined black or coloured silhouettes, and considered accessories read as elegant in both cities. Choose fabrics that breathe outdoors and still feel composed in air-conditioned interiors and evening settings.',
    },
  ] satisfies RegionalDressingFaq[],
} as const
