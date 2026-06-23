/**
 * Indonesian route meta description derived from English source.
 * Phase 3 fallback — explicit `id` strings can replace these over time.
 */
const REPL: Array<[string, string]> = [
  ['United Arab Emirates', 'Uni Emirat Arab'],
  ['luxury abaya house', 'rumah abaya mewah'],
  ['Luxury abaya house', 'Rumah abaya mewah'],
  ['luxury abayas', 'abaya mewah'],
  ['Luxury abayas', 'Abaya mewah'],
  ['luxury abaya', 'abaya mewah'],
  ['Luxury abaya', 'Abaya mewah'],
  ['heritage-led design', 'desain berbasis warisan'],
  ['Heritage-led design', 'Desain berbasis warisan'],
  ['heritage-inspired', 'terinspirasi warisan'],
  ['Heritage-inspired', 'Terinspirasi warisan'],
  ['jewellery', 'perhiasan'],
  ['lifestyle pieces', 'karya lifestyle'],
  ['lifestyle', 'lifestyle'],
  ['made to order', 'dibuat sesuai pesanan'],
  ['Shop ', 'Belanja '],
  ['shop ', 'belanja '],
  ['About ', 'Tentang '],
  ['Contact ', 'Kontak '],
  ['shipping', 'pengiriman'],
  ['Shipping', 'Pengiriman'],
  ['delivery', 'pengiriman'],
  ['Delivery', 'Pengiriman'],
  ['exchanges', 'penukaran'],
  ['sizing', 'ukuran'],
  ['official purchase', 'pembelian resmi'],
  ['UAE & GCC', 'UEA & GCC'],
  ['UAE and GCC', 'UEA dan GCC'],
  ['across the UAE and GCC', 'di seluruh UEA dan GCC'],
  ['UAE', 'UEA'],
  ['GCC', 'GCC'],
  ['Abu Dhabi', 'Abu Dhabi'],
  ['Designer ', 'Desainer '],
  ['designer ', 'desainer '],
  ['Contemporary ', 'Kontemporer '],
  ['contemporary ', 'kontemporer '],
  ['FAQ for', 'FAQ untuk'],
  ['Product detail', 'Detail produk'],
  ['Careers', 'Karier'],
  ['Privacy', 'Privasi'],
  ['Terms', 'Syarat'],
  ['Cookies', 'Cookie'],
]

export function indonesiaRouteMetaFromEn(en: string): string {
  let s = en.trim()
  for (const [from, to] of REPL) {
    s = s.replaceAll(from, to)
  }
  return s
}
