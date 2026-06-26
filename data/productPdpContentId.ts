import type { Product } from '@/data/products'
import { buildKnightsbridgeDressPdpContent } from '@/data/knightsbridgeDressPdpContent'
import type { ProductPdpContent } from '@/data/productPdpContent'
import { getProductSlug } from '@/lib/products/links'
import { getBelgraviaPdpFaq } from '@/lib/products/belgraviaSchemaI18n'
import { getKensingtonPdpFaq } from '@/lib/products/kensingtonSchemaI18n'
import { getKnightsbridgePdpFaq } from '@/lib/products/knightsbridgeSchemaI18n'
import {
  knightsbridgePdpColorLabel,
} from '@/lib/products/knightsbridgePairing'
import { buildVariantSku } from '@/lib/products/sku'

type MayfairColorKey = 'deep-maroon' | 'black' | 'peach'

const MAYFAIR_COLOR_COPY: Record<MayfairColorKey, { label: string; adj: string }> = {
  'deep-maroon': { label: 'Dark Maroon', adj: 'maroon gelap' },
  black: { label: 'Black', adj: 'hitam' },
  peach: { label: 'Peach', adj: 'peach' },
}

function normalizeMayfairColor(color?: string): MayfairColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach')) return 'peach'
  return 'deep-maroon'
}

const NOTHING_HILL_STYLE_SKU = 'BS-KF-002'

const KAFTAN_COMPOSITION_DETAILS = [
  'Luar: Crepe Chiffon (100% Polyester)',
  'Gaun dalam: 100% Polyester',
] as const

const NOTHING_HILL_COMPOSITION_DETAILS = [
  'Luar: Chiffon (100% Polyester)',
  'Gaun dalam: 100% Polyester',
] as const

const KAFTAN_CARE_DETAILS = [
  'Pembersihan kering profesional disarankan',
  'Cuci tangan lembut dengan air dingin jika diperlukan',
  'Jangan gunakan pemutih',
  'Jangan dikeringkan dengan mesin',
] as const

const ABAYA_CARE_DETAILS = ['Pembersihan kering profesional saja'] as const

const BELGRAVIA_COMPOSITION_DETAILS = [
  'Luar: Campuran crepe ringan (80% polyester, 20% viscose)',
  'Komposisi lapisan dalam: (70% polyester, 30% viscose)',
] as const

function cmToInches(cm: number): number {
  return Math.round(cm / 2.54)
}

function kaftanFitAndSizeDetails(maxLengthCm: number, opts?: { includeAdjustableTies?: boolean }): string[] {
  const lines = [
    'One Size',
    `Panjang maksimum garment: ${maxLengthCm} cm / ${cmToInches(maxLengthCm)} inci`,
  ]
  if (opts?.includeAdjustableTies !== false) {
    lines.push('Siluet dapat disesuaikan melalui tali internal tersembunyi')
  }
  lines.push('Model tinggi 155 cm / 61 inci')
  return lines
}

export function buildMayfairKaftanContentId(color?: string): ProductPdpContent {
  const { label, adj } = MAYFAIR_COLOR_COPY[normalizeMayfairColor(color)]

  return {
    introParagraphs: [
      `Kaftan Mayfair dirancang untuk wanita yang memahami bahwa keanggunan tidak pernah statis. Dijahit dari crepe chiffon ${adj} dan dilapisi gaun dalam terpasang, kaftan chiffon ${adj} ini menciptakan siluet mengalir yang jatuh dengan effortless dari bahu hingga hem.`,
      'Detail scarf yang jatuh lembut dari bahu kiri dapat distyling secara diagonal di seluruh tubuh menggunakan pin emblem emas khas Bint Saeed. Tali internal tersembunyi memungkinkan siluet disesuaikan dalam berbagai cara — menciptakan bentuk seperti cape yang mengalir atau profil yang lebih terdefinisi. Hasilnya adalah sebuah karya yang bertransformasi bersama wanita yang memakainya, beradaptasi secara natural pada berbagai kesempatan dan momen.',
      'Ringan, serbaguna, dan dirancang untuk dikenakan selama bertahun-tahun, bukan hanya satu musim, Kaftan Mayfair bergerak dengan effortless di antara berbagai kesempatan. Dikenakan untuk pernikahan, perayaan, makan malam di luar negeri, atau hari biasa yang layak mendapat sesuatu yang istimewa — ia beradaptasi secara natural pada kehidupan wanita yang memakainya. Ia tidak ditentukan oleh destinasi, kota, atau momen. Ia menjadi bagian dari kisahnya dan menemani ke mana pun ia pergi.',
      'Ia adalah sebuah karya yang dipilih tidak hanya karena penampilannya, tetapi juga karena perasaan yang ia berikan pada wanita saat pertama kali dikenakan.',
    ],
    productDetails: [
      `Kaftan crepe chiffon ${adj}`,
      'Siluet mengalir dengan konstruksi berlapis',
      'Gaun dalam terpasang untuk kemudahan pemakaian',
      'Garis leher V',
      'Detail scarf terpasang yang jatuh dari bahu kiri',
      'Pin emblem emas khas Bint Saeed disertakan',
      'Scarf dapat distyling secara diagonal di seluruh tubuh',
      'Konstruksi tali internal tersembunyi yang memungkinkan berbagai opsi styling',
      'Dapat dikenakan dengan siluet mengalir atau bentuk yang lembut terdefinisi',
      'Lengan terbuka yang menciptakan gerakan anggun',
      'Konstruksi ringan yang dirancang untuk kenyamanan dan keanggunan',
      `Warna: ${label}`,
      'Dibuat di Abu Dhabi, UAE',
    ],
    compositionDetails: [...KAFTAN_COMPOSITION_DETAILS],
    fitAndSizeDetails: kaftanFitAndSizeDetails(165),
    careDetails: [...KAFTAN_CARE_DETAILS],
  }
}

type NothingHillColorKey = 'peach-pink' | 'black' | 'peach'

const NOTHING_HILL_COLOR_COPY: Record<NothingHillColorKey, { label: string; adj: string }> = {
  'peach-pink': { label: 'Peach Pink', adj: 'peach pink' },
  peach: { label: 'Peach', adj: 'peach' },
  black: { label: 'Black', adj: 'hitam' },
}

function normalizeNothingHillColor(color?: string): NothingHillColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach pink') || c.includes('peach-pink')) return 'peach-pink'
  if (c.includes('peach')) return 'peach'
  return 'peach-pink'
}

export function buildNothingHillKaftanContentId(color?: string): ProductPdpContent {
  const { label, adj } = NOTHING_HILL_COLOR_COPY[normalizeNothingHillColor(color)]

  return {
    introParagraphs: [
      `Kaftan Nothing Hill dirancang untuk wanita yang menghargai keanggunan dalam bentuk paling effortless-nya. Dibuat dari lapisan chiffon ${adj} lembut dan diselesaikan dengan garis leher bateau yang halus, ia menciptakan siluet mengalir yang bergerak anggun di setiap langkah.`,
      'Ringan dan fluid, chiffon-nya jatuh secara natural dari bahu hingga hem, menciptakan kesan gerakan sambil mempertahankan bentuk yang seimbang. Emblem emas khas Bint Saeed duduk dengan diskret di bagian depan, menawarkan ekspresi halus dari identitas rumah mode.',
      `Nuansa ${adj} lembut menghadirkan kehangatan dan feminitas pada desain, menjadikannya sama cocoknya untuk perayaan, pertemuan intim, acara destinasi, dan kesempatan yang memanggil keanggunan understated. Konstruksi yang airy memungkinkan siluet mengambang di sekitar tubuh, menciptakan kehadiran yang terasa halus sekaligus effortless.`,
      'Dirancang untuk dikenakan musim demi musim, Kaftan Nothing Hill tidak ditentukan oleh tren atau kesempatan semata. Ia adalah karya yang dipilih karena kemudahan yang ia bawa dalam berpakaian dengan indah — baik untuk acara istimewa, pertemuan malam, maupun momen yang layak diingat.',
      'Ringan, anggun, dan abadi, ia menjadi bagian dari kisah wanita yang memakainya, menemani ke mana pun hidup membawanya.',
    ],
    productDetails: [
      `Kaftan chiffon ${adj} lembut`,
      'Siluet berlapis mengalir dengan gerakan anggun',
      'Gaun dalam terpasang untuk kemudahan pemakaian',
      'Garis leher bateau yang elegan',
      'Emblem emas khas Bint Saeed disertakan',
      'Panel chiffon drape lembut yang menciptakan gerakan fluid',
      'Konstruksi ringan yang dirancang untuk kenyamanan dan keanggunan',
      'Dirancang untuk bergerak secara natural bersama pemakainya',
      'Cocok untuk perayaan, pertemuan, acara destinasi, dan kesempatan istimewa',
      'Siluet airy dengan drape feminin yang lembut',
      `Warna: ${label}`,
      'Dibuat di Abu Dhabi, UAE',
      `Kode produk: ${buildVariantSku(NOTHING_HILL_STYLE_SKU, label)}`,
    ],
    compositionDetails: [...NOTHING_HILL_COMPOSITION_DETAILS],
    fitAndSizeDetails: kaftanFitAndSizeDetails(165, { includeAdjustableTies: false }),
    careDetails: [...KAFTAN_CARE_DETAILS],
  }
}

type BelgraviaColorKey = 'deep-black' | 'navy-blue'

const BELGRAVIA_COLOR_COPY: Record<BelgraviaColorKey, { label: string }> = {
  'deep-black': { label: 'Deep Black' },
  'navy-blue': { label: 'Navy Blue' },
}

function normalizeBelgraviaColor(color?: string): BelgraviaColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('navy')) return 'navy-blue'
  if (c.includes('black')) return 'deep-black'
  return 'deep-black'
}

export function buildBelgraviaAbayaContentId(color?: string): ProductPdpContent {
  const { label } = BELGRAVIA_COLOR_COPY[normalizeBelgraviaColor(color)]

  return {
    introParagraphs: [
      'Abaya Belgravia terinspirasi dari Bisht, salah satu garment paling dikenal di Semenanjung Arab, yang ditafsirkan ulang melalui siluet kontemporer yang dirancang untuk kehidupan modern.',
      'Tersedia dalam Deep Black dan Navy Blue, abaya ini dibedakan oleh trim anyaman tangan yang terinspirasi dari Al Khous — seni tradisional Emirati menganyam pelepah pohon kurma yang diwariskan lintas generasi. Polanya merujuk pada geometri pelepah yang ditenun, memperkenalkan tekstur dan kerajinan budaya pada siluet elegan yang understated.',
      'Diciptakan di Abu Dhabi, Abaya Belgravia mencerminkan komitmen Bint Saeed untuk membawa kerajinan tradisional ke depan melalui desain kontemporer. Potongan Bisht-inspired yang santai menciptakan gerakan anggun sambil mempertahankan struktur yang halus, sementara saku tersembunyi dan konstruksi berlapis penuh memastikan kenyamanan dan kemudahan pemakaian.',
      'Dirancang untuk bergerak dengan effortless di antara kesempatan, negara, dan gaya hidup, Abaya Belgravia dapat dikenakan untuk pernikahan di Riyadh, makan malam di London, acara di Paris, atau kehidupan sehari-hari di kawasan Teluk. Abadi, bukan mengikuti tren, ia diciptakan untuk wanita yang menghargai keanggunan, kerajinan, dan karya yang tetap relevan di mana pun dikenakan.',
      'Seperti semua abaya Bint Saeed, Abaya Belgravia dibuat sesuai pesanan dan dapat dipersonalisasi dengan nama, tanggal, atau pesan bermakna di dalam saku tersembunyi.',
    ],
    productDetails: [
      'Siluet abaya terinspirasi Bisht',
      'Tersedia dalam Deep Black dan Navy Blue',
      'Trim anyaman tangan terinspirasi Al Khous — anyaman pelepah kurma tradisional',
      'Konstruksi depan terbuka',
      'Penutup kancing snap tersembunyi opsional tersedia atas permintaan',
      'Berlapis penuh untuk kenyamanan dan finishing halus',
      'Saku samping tersembunyi',
      'Personalisasi tersedia di dalam saku tersembunyi',
      'Siluet mengalir santai yang dirancang untuk kemudahan bergerak',
      'Kain luar campuran crepe ringan',
      'Desain kontemporer terinspirasi tradisi dan kerajinan Emirati dan GCC',
      'Cocok untuk keanggunan sehari-hari, pertemuan, pernikahan, dan kesempatan istimewa',
      'Tinggi model: 155 cm / 61 inci',
      'Panjang: 138 cm / 54,5 inci',
      `Warna: ${label}`,
      'Dibuat di Abu Dhabi, Uni Emirat Arab',
    ],
    compositionDetails: [...BELGRAVIA_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Ukuran tersedia: XS, S, M, L, XL, XXL',
      'Panjang: 138 cm / 54,5 inci',
      'Tinggi model: 155 cm / 61 inci',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getBelgraviaPdpFaq('id'),
  }
}

const KENSINGTON_COMPOSITION_DETAILS = [
  'Luar: 80% Polyester, 20% Viscose',
  'Lapisan: 70% Polyester, 30% Viscose',
] as const

export function buildKensingtonAbayaContentId(): ProductPdpContent {
  return {
    introParagraphs: [
      'Abaya Kensington dirancang untuk wanita yang menghargai kepercayaan diri yang diekspresikan melalui kesederhanaan. Dibuat dalam hitam pekat dengan siluet memanjang yang bersih, ia menciptakan kehadiran melalui struktur, gerakan, dan proporsi — bukan ornamen.',
      'Terinspirasi dari kepercayaan diri dan struktur pakaian luar yang dijahit rapi, Abaya Kensington menggabungkan kemudahan berpakaian tradisional dengan penampilan rapi blazer yang terpotong sempurna. Garis bersih di bahu dan tubuh menciptakan siluet yang terasa tenang, elegan, dan effortless dikenakan.',
      'Trim bertekstur di dada dan manset mengambil inspirasi dari Al Khous, seni tradisional Emirati menganyam pelepah palem yang diwariskan lintas generasi. Diinterpretasikan melalui tenun organza glitter hitam yang halus, detail ini memperkenalkan kedalaman dan tekstur sambil tetap understated.',
      'Dirancang untuk dilapisi dengan effortless di atas gaun, tailoring, busana acara, atau pakaian sehari-hari, ia bertransisi secara alami antara kehidupan harian, pertemuan bisnis, makan malam, pertemuan, perjalanan, dan acara khusus. Estetika abadinya memungkinkannya bergerak lintas negara, musim, dan bab kehidupan sambil tetap terhubung dengan kerajinan dan keanggunan yang menginspirasinya.',
      'Berlapis penuh dengan kain krep lembut dan diselesaikan dengan dua saku samping tersembunyi, Abaya Kensington menyeimbangkan kepraktisan dengan kehalusan sambil mempertahankan siluet bersih yang elegan. Seperti semua abaya Bint Saeed, ia dapat dipersonalisasi dengan label interior tersembunyi berisi nama, tanggal, atau pesan bermakna — sangat berarti untuk hadiah dan perayaan.',
      'Elegan, serba guna, dan diciptakan untuk dikenakan selama bertahun-tahun, Abaya Kensington dirancang untuk menemani wanita yang memakainya ke mana pun hidup membawanya.',
    ],
    productDetails: [
      'Hitam Dalam',
      'Leher bulat',
      'Bantalan bahu ringan',
      'Penutup kancing snap depan',
      'Trim tenun khas Bint Saeed terinspirasi anyaman pelepah palem Al Khous tradisional',
      'Dua saku samping tersembunyi',
      'Lapisan kain krep lembut',
      'Label personalisasi interior tersembunyi opsional',
      'Panjang: 138 cm / 54,5 inci',
      'Tinggi model: 155 cm / 61 inci',
      'Model mengenakan ukuran XS',
      'Dibuat di Abu Dhabi, Uni Emirat Arab',
    ],
    compositionDetails: [...KENSINGTON_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Ukuran tersedia: XS, S, M, L, XL',
      'Dirancang untuk potongan terstruktur namun mengalir',
      'Panjang: 138 cm / 54,5 inci',
      'Tinggi model: 155 cm / 61 inci',
      'Model mengenakan ukuran XS',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getKensingtonPdpFaq('id'),
  }
}

function isKnightsbridgeNavyColor(color?: string): boolean {
  return (color ?? '').toLowerCase().includes('navy')
}

export function buildKnightsbridgeAbayaJacketContentId(color?: string): ProductPdpContent {
  const catalogColor = isKnightsbridgeNavyColor(color) ? 'Navy Grey' : 'Dark Brown'
  const colorLabel = knightsbridgePdpColorLabel(catalogColor, 'id')

  return {
    introParagraphs: [
      'Wanita yang gayanya terasa effortless seringkali adalah yang paling tidak tertarik mengikuti tren. Berani menjadi diri sendiri, mereka biasanya justru yang menetapkannya.',
      'Abaya Jaket Khous diciptakan untuk wanita yang bergerak dengan percaya diri menjalani hidup dengan syaratnya sendiri. Berada di antara abaya dan jaket, ia menggabungkan kemudahan berpakaian tradisional dengan kepercayaan diri pakaian luar kontemporer.',
      'Dipotong dalam siluet santai dan tersedia dalam Coklat Tua dan Abu-abu Navy, ia berlapis dengan effortless di atas gaun, tailoring, knitwear, dan pakaian sehari-hari. Dikenakan dengan sneakers atau heels, ia beradaptasi secara alami pada perjalanan, kehidupan harian, dan kehidupan antarkota.',
      'Detail bertekstur di saku dada dan manset mengambil inspirasi dari Al Khous, seni tradisional Emirati menganyam pelepah palem yang diwariskan lintas generasi. Diinterpretasikan melalui desain kontemporer, detail ini memperkenalkan kedalaman, struktur, dan karakter sambil mempertahankan penampilan yang halus.',
      'Detail bahu yang khas memberi siluet pengaruh militer yang halus, menciptakan kehadiran percaya diri yang seimbang dengan kenyamanan dan kemudahan bergerak. Empat saku fungsional, termasuk dua saku dada dan dua saku samping tersembunyi, memperkuat kepraktisan untuk kehidupan sehari-hari.',
      'Diselesaikan dengan kancing emas khas Bint Saeed Knotted Lines of Lineage, desain ini membawa salah satu kode abadi rumah mode. Terinspirasi hubungan yang mengikat generasi, detail ini mengingatkan bahwa hal paling bermakna seringkali adalah yang kita bawa ke depan.',
      'Diciptakan di Abu Dhabi, Abaya Jaket Khous mencerminkan komitmen Bint Saeed membawa elemen warisan Emirati ke dalam lemari pakaian kontemporer. Baik untuk kopi di London, perjalanan, rapat di Dubai, atau kehidupan sehari-hari di Teluk, ia menawarkan siluet khas bagi wanita yang memahami bahwa gaya tidak hanya untuk momen istimewa.',
      'Nyaman, serbaguna, dan dirancang untuk sering dikenakan, Abaya Jaket Khous merayakan gagasan bahwa keanggunan sejati terungkap tidak hanya pada momen penting, tetapi pada cara wanita memilih menampilkan dirinya setiap hari.',
    ],
    productDetails: [
      `Abaya jaket ${colorLabel} dengan siluet santai`,
      'Kerah runcing',
      'Penutup kancing depan tersembunyi',
      'Dua saku dada',
      'Dua saku samping tersembunyi',
      'Detail tab bahu',
      'Lengan panjang dengan manset berkancing',
      'Detail tenun terinspirasi Khous khas Bint Saeed pada saku dada dan manset',
      'Kancing emas khas Bint Saeed Knotted Lines of Lineage',
      'Gaun dalam terpasang',
      'Label personalisasi interior tersembunyi opsional dengan nama, tanggal, atau pesan bermakna',
      `Warna: ${colorLabel} dengan detail kontras Khous alami`,
      'Panjang: 143 cm / 56,3 inci',
      'Dibuat di Abu Dhabi, Uni Emirat Arab',
    ],
    compositionDetails: [
      'Luar: 60% Polyester, 40% Katun',
      'Gaun dalam: 100% Polyester',
    ],
    fitAndSizeDetails: [
      'Tinggi model: 160 cm / 63 inci',
      'Model mengenakan ukuran XS',
      'Dirancang untuk potongan santai',
      'Ukuran tersedia: XS, S, M, L, XL, XXL',
    ],
    careDetails: ['Pembersihan kering profesional saja'],
    faq: getKnightsbridgePdpFaq('id'),
  }
}

function isMayfairKaftan(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'mayfair-kaftan' || product.id === 'bs-002'
}

function isNothingHillKaftan(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'nothing-hill-kaftan' || product.id === 'cf-002'
}

function isBelgraviaAbaya(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'belgravia-abaya' || product.id === 'ab-006'
}

function isKensingtonAbaya(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'kensington-abaya' || product.id === 'ab-004'
}

function isKnightsbridgeAbayaJacket(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'knightsbridge-abaya-jacket' || product.id === 'bs-001'
}

function isKnightsbridgeDress(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'knightsbridge-dress' || product.id === 'bs-003'
}

/** Indonesian PDP copy for hero products; returns null for other slugs. */
export function getProductPdpContentId(product: Product, color?: string): ProductPdpContent | null {
  if (isMayfairKaftan(product)) return buildMayfairKaftanContentId(color)
  if (isNothingHillKaftan(product)) return buildNothingHillKaftanContentId(color)
  if (isBelgraviaAbaya(product)) return buildBelgraviaAbayaContentId(color)
  if (isKensingtonAbaya(product)) return buildKensingtonAbayaContentId()
  if (isKnightsbridgeAbayaJacket(product)) return buildKnightsbridgeAbayaJacketContentId(color)
  if (isKnightsbridgeDress(product)) return buildKnightsbridgeDressPdpContent(color, 'id')
  return null
}
