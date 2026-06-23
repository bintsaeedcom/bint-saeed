/**
 * Malay (Malaysia) route meta description derived from English source.
 */
const REPL: Array<[string, string]> = [
  ['United Arab Emirates', 'Emiriah Arab Bersatu'],
  ['luxury abaya house', 'rumah abaya mewah'],
  ['Luxury abaya house', 'Rumah abaya mewah'],
  ['luxury abayas', 'abaya mewah'],
  ['Luxury abayas', 'Abaya mewah'],
  ['luxury abaya', 'abaya mewah'],
  ['Luxury abaya', 'Abaya mewah'],
  ['heritage-led design', 'reka bentuk berpandukan warisan'],
  ['Heritage-led design', 'Reka bentuk berpandukan warisan'],
  ['heritage-inspired', 'berinspirasikan warisan'],
  ['Heritage-inspired', 'Berinspirasikan warisan'],
  ['jewellery', 'barang kemas'],
  ['lifestyle pieces', 'karya gaya hidup'],
  ['lifestyle', 'gaya hidup'],
  ['made to order', 'dibuat mengikut pesanan'],
  ['Shop ', 'Beli-belah '],
  ['shop ', 'beli-belah '],
  ['About ', 'Tentang '],
  ['Contact ', 'Hubungi '],
  ['shipping', 'penghantaran'],
  ['Shipping', 'Penghantaran'],
  ['delivery', 'penghantaran'],
  ['Delivery', 'Penghantaran'],
  ['exchanges', 'pertukaran'],
  ['sizing', 'saiz'],
  ['official purchase', 'pembelian rasmi'],
  ['UAE & GCC', 'UAE & GCC'],
  ['UAE and GCC', 'UAE dan GCC'],
  ['across the UAE and GCC', 'di seluruh UAE dan GCC'],
  ['UAE', 'UAE'],
  ['GCC', 'GCC'],
  ['Abu Dhabi', 'Abu Dhabi'],
  ['Designer ', 'Pereka '],
  ['designer ', 'pereka '],
  ['Contemporary ', 'Kontemporari '],
  ['contemporary ', 'kontemporari '],
  ['modest fashion', 'fesyen sopan'],
  ['Modest fashion', 'Fesyen sopan'],
  ['FAQ', 'Soalan lazim'],
  ['Privacy', 'Privasi'],
  ['Terms', 'Terma'],
  ['Cookie', 'Kuki'],
  ['Size guide', 'Panduan saiz'],
  ['Craftsmanship', 'Kraftangan'],
]

export function malaysiaRouteMetaFromEn(en: string): string {
  let out = en
  for (const [from, to] of REPL) {
    out = out.split(from).join(to)
  }
  return out
}
