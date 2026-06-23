/**
 * Malay schema / SEO keyword line derived from English source.
 * Used as fallback when a kw() row omits an explicit `id` string.
 */
const EXACT: Record<string, string> = {
  abaya: 'abaya',
  abayas: 'abaya',
  abayat: 'abayat',
  luxury: 'mewah',
  'Bisht Abaya': 'Abaya Bisht',
  'Bisht Inspired Abaya': 'Abaya terinspirasi Bisht',
  'Bisht-inspired Abaya': 'Abaya terinspirasi Bisht',
  'Luxury Bisht Abaya': 'Abaya Bisht mewah',
  'Khous Weaving': 'Tenun Khous',
  'Al Khous': 'Al Khous',
  'Al Khous weaving': 'Tenun Al Khous',
  'Khous abaya': 'Abaya Khous',
  'Palm Frond Weaving': 'Tenun pelepah palem',
  'Handwoven Trim': 'Trim tenun tangan',
  'Made in Abu Dhabi': 'Dihasilkan di Abu Dhabi',
  'Belgravia Abaya': 'Abaya Belgravia',
  'Bint Saeed Belgravia Abaya': 'Abaya Belgravia Bint Saeed',
  'Deep Black abaya': 'Abaya hitam pekat',
  'navy blue abaya': 'Abaya biru navy',
  'BS-AB-005': 'BS-AB-005',
  cape: 'cape',
  jacket: 'jaket',
}

const PHRASE_RULES: Array<[RegExp, string]> = [
  [/^Luxury (.+)$/i, 'Mewah $1'],
  [/^Designer (.+)$/i, '$1 desainer'],
  [/^Handmade (.+)$/i, '$1 buatan tangan'],
  [/^Handcrafted (.+)$/i, '$1 buatan tangan'],
  [/^Premium (.+)$/i, '$1 premium'],
  [/^Contemporary (.+)$/i, '$1 kontemporari'],
  [/^Modern (.+)$/i, '$1 modern'],
  [/^Elegant (.+)$/i, '$1 elegan'],
  [/^Wedding (.+)$/i, '$1 perkahwinan'],
  [/^Occasion (.+)$/i, '$1 acara'],
  [/^Travel (.+)$/i, '$1 perjalanan'],
  [/^Personalised (.+)$/i, '$1 personal'],
  [/^Custom (.+)$/i, '$1 pesanan'],
  [/^Timeless (.+)$/i, '$1 abadi'],
  [/^Open Front (.+)$/i, '$1 depan terbuka'],
  [/^International (.+)$/i, '$1 internasional'],
  [/^Unique (.+)$/i, '$1 unik'],
  [/^Special (.+)$/i, '$1 spesial'],
  [/^Beautiful (.+)$/i, '$1 indah'],
  [/^Classy (.+)$/i, '$1 berkelas'],
  [/^Nice (.+)$/i, '$1 cantik'],
  [/^Daily (.+)$/i, '$1 harian'],
  [/^Oversized (.+)$/i, '$1 oversize'],
  [/^Heritage (.+)$/i, '$1 warisan'],
  [/^Cultural (.+)$/i, '$1 budaya'],
  [/^United Arab Emirates (.+)$/i, '$1 Emiriah Arab Bersatu'],
  [/^UAE (.+)$/i, '$1 UAE'],
  [/^Abu Dhabi (.+)$/i, '$1 Abu Dhabi'],
  [/^Dubai (.+)$/i, '$1 Dubai'],
  [/^Emirati (.+)$/i, '$1 Emirati'],
  [/^abaya in (.+)$/i, 'abaya di $1'],
  [/^abaya from (.+)$/i, 'abaya dari $1'],
  [/^(.+) abaya$/i, 'abaya $1'],
  [/^(.+) Abaya$/i, 'Abaya $1'],
  [/^(.+) fashion$/i, 'fesyen $1'],
  [/^(.+) design$/i, 'reka bentuk $1'],
  [/^(.+) brand$/i, 'jenama $1'],
  [/^modest fashion$/i, 'fesyen sopan'],
  [/^trendy abayas$/i, 'abaya trendi'],
  [/^handwoven trim abaya$/i, 'abaya trim tenun tangan'],
  [/^black abaya$/i, 'abaya hitam'],
  [/^luxury cape$/i, 'cape mewah'],
  [/^heritage cape$/i, 'cape warisan'],
  [/^cultural heritage$/i, 'warisan budaya'],
  [/^abaya awards$/i, 'penghargaan abaya'],
  [/^heritage design$/i, 'reka bentuk warisan'],
  [/^niche abaya brand$/i, 'jenama abaya niche'],
  [/^new abaya brand$/i, 'jenama abaya baharu'],
  [/^Luxury Gulf fashion$/i, 'fesyen Teluk mewah'],
  [/^luxury Gulf fashion$/i, 'fesyen Teluk mewah'],
]

export function malaysiaKeywordFromEn(en: string): string {
  const trimmed = en.trim()
  if (EXACT[trimmed]) return EXACT[trimmed]

  for (const [pattern, replacement] of PHRASE_RULES) {
    if (pattern.test(trimmed)) {
      return trimmed.replace(pattern, replacement)
    }
  }

  return trimmed
}
