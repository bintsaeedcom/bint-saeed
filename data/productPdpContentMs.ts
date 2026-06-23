import type { Product } from '@/data/products'
import type { ProductPdpContent } from '@/data/productPdpContent'
import { getProductSlug } from '@/lib/products/links'
import { getBelgraviaPdpFaq } from '@/lib/products/belgraviaSchemaI18n'
import { getKensingtonPdpFaq } from '@/lib/products/kensingtonSchemaI18n'
import { getKnightsbridgePdpFaq } from '@/lib/products/knightsbridgeSchemaI18n'
import {
  getKnightsbridgeStylePairingNote,
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
  'Pembersihan kering profesional disyorkan',
  'Basuh tangan lembut dengan air sejuk jika perlu',
  'Jangan gunakan peluntur',
  'Jangan sidai menggunakan mesin pengering',
] as const

const ABAYA_CARE_DETAILS = ['Pembersihan kering profesional sahaja'] as const

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
    `Panjang maksimum pakaian: ${maxLengthCm} cm / ${cmToInches(maxLengthCm)} inci`,
  ]
  if (opts?.includeAdjustableTies !== false) {
    lines.push('Siluet boleh diselaraskan melalui tali dalaman tersembunyi')
  }
  lines.push('Model tinggi 155 cm / 61 inci')
  return lines
}

export function buildMayfairKaftanContentMs(color?: string): ProductPdpContent {
  const { label, adj } = MAYFAIR_COLOR_COPY[normalizeMayfairColor(color)]

  return {
    introParagraphs: [
      `Kaftan Mayfair direka untuk wanita yang memahami bahawa keanggunan tidak pernah statik. Dijahit daripada crepe chiffon ${adj} dan dilapisi gaun dalam terpasang, kaftan chiffon ${adj} ini menghasilkan siluet mengalir yang jatuh dengan luwes dari bahu hingga hem.`,
      'Butiran scarf yang jatuh lembut dari bahu kiri boleh digayakan secara pepenjuru merentasi badan menggunakan pin emblem emas khas Bint Saeed. Tali dalaman tersembunyi membolehkan siluet diselaraskan dalam pelbagai cara — sama ada seperti cape yang mengalir atau profil yang lebih jelas. Hasilnya ialah karya yang berubah bersama wanita yang memakainya, menyesuaikan diri secara semula jadi pada pelbagai majlis dan detik.',
      'Ringan, serba guna, dan direka untuk dipakai selama bertahun-tahun, bukan hanya satu musim, Kaftan Mayfair bergerak dengan mudah antara pelbagai majlis. Dipakai untuk perkahwinan, sambutan, majlis malam di luar negara, atau hari biasa yang layak mendapat sesuatu yang istimewa — ia menyesuaikan diri secara semula jadi pada kehidupan wanita yang memakainya. Ia tidak ditentukan oleh destinasi, bandar, atau detik. Ia menjadi sebahagian daripada kisahnya dan menemani ke mana pun ia pergi.',
      'Ia ialah karya yang dipilih bukan sahaja kerana penampilannya, tetapi juga kerana perasaan yang ia berikan kepada wanita apabila pertama kali dipakai.',
    ],
    productDetails: [
      `Kaftan crepe chiffon ${adj}`,
      'Siluet mengalir dengan konstruksi berlapis',
      'Gaun dalam terpasang untuk kemudahan pemakaian',
      'Garis leher V',
      'Butiran scarf terpasang yang jatuh dari bahu kiri',
      'Pin emblem emas khas Bint Saeed disertakan',
      'Scarf boleh digayakan secara pepenjuru merentasi badan',
      'Konstruksi tali dalaman tersembunyi yang membolehkan pelbagai gaya',
      'Boleh dipakai dengan siluet mengalir atau bentuk yang lembut dan lebih jelas',
      'Lengan terbuka yang menghasilkan pergerakan anggun',
      'Konstruksi ringan yang direka untuk keselesaan dan keanggunan',
      `Warna: ${label}`,
      'Dihasilkan di Abu Dhabi, UAE',
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

export function buildNothingHillKaftanContentMs(color?: string): ProductPdpContent {
  const { label, adj } = NOTHING_HILL_COLOR_COPY[normalizeNothingHillColor(color)]

  return {
    introParagraphs: [
      `Kaftan Nothing Hill direka untuk wanita yang menghargai keanggunan dalam bentuk paling luwes. Dihasilkan daripada lapisan chiffon ${adj} lembut dan disiapkan dengan garis leher bateau yang halus, ia menghasilkan siluet mengalir yang bergerak anggun pada setiap langkah.`,
      'Ringan dan mengalir, chiffonnya jatuh secara semula jadi dari bahu hingga hem, menghasilkan kesan pergerakan sambil mengekalkan bentuk yang seimbang. Emblem emas khas Bint Saeed diletakkan secara halus di bahagian hadapan, menawarkan ekspresi senyap identiti rumah fesyen.',
      `Nuansa ${adj} yang lembut menghadirkan kehangatan dan feminiti pada reka bentuk, menjadikannya sesuai untuk sambutan, pertemuan intim, acara destinasi, dan majlis yang memanggil keanggunan yang halus. Konstruksi ringan membolehkan siluet mengapung di sekeliling badan, menghasilkan kehadiran yang terasa lembut sekaligus luwes.`,
      'Direka untuk dipakai musim demi musim, Kaftan Nothing Hill tidak ditentukan oleh tren atau majlis semata-mata. Ia ialah karya yang dipilih kerana kemudahan yang ia bawa dalam berpakaian dengan indah — sama ada untuk acara istimewa, pertemuan malam, atau detik yang layak diingati.',
      'Ringan, anggun, dan abadi, ia menjadi sebahagian daripada kisah wanita yang memakainya, menemani ke mana pun hidup membawanya.',
    ],
    productDetails: [
      `Kaftan chiffon ${adj} lembut`,
      'Siluet berlapis mengalir dengan pergerakan anggun',
      'Gaun dalam terpasang untuk kemudahan pemakaian',
      'Garis leher bateau yang elegan',
      'Emblem emas khas Bint Saeed disertakan',
      'Panel chiffon lembut yang menghasilkan pergerakan mengalir',
      'Konstruksi ringan yang direka untuk keselesaan dan keanggunan',
      'Direka untuk bergerak secara semula jadi bersama pemakainya',
      'Sesuai untuk sambutan, pertemuan, acara destinasi, dan majlis istimewa',
      'Siluet ringan dengan jatuh kain feminin yang lembut',
      `Warna: ${label}`,
      'Dihasilkan di Abu Dhabi, UAE',
      `Kod produk: ${buildVariantSku(NOTHING_HILL_STYLE_SKU, label)}`,
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

export function buildBelgraviaAbayaContentMs(color?: string): ProductPdpContent {
  const { label } = BELGRAVIA_COLOR_COPY[normalizeBelgraviaColor(color)]

  return {
    introParagraphs: [
      'Abaya Belgravia terinspirasi daripada Bisht, salah satu pakaian paling dikenali di Semenanjung Arab, yang ditafsirkan semula melalui siluet kontemporari yang direka untuk kehidupan moden.',
      'Tersedia dalam Deep Black dan Navy Blue, abaya ini dibezakan oleh hiasan tenunan tangan yang terinspirasi daripada Al Khous — seni tradisional Emirati menenun pelepah pokok kurma yang diwarisi merentasi generasi. Coraknya merujuk pada geometri pelepah yang ditenun, memperkenalkan tekstur dan kraftangan budaya pada siluet elegan yang halus.',
      'Dihasilkan di Abu Dhabi, Abaya Belgravia mencerminkan komitmen Bint Saeed untuk membawa kraftangan tradisional ke hadapan melalui reka bentuk kontemporari. Potongan terinspirasi Bisht yang santai menghasilkan pergerakan anggun sambil mengekalkan struktur yang halus, manakala poket tersembunyi dan konstruksi berlapis penuh memastikan keselesaan dan kemudahan pemakaian.',
      'Direka untuk bergerak dengan luwes antara majlis, negara, dan gaya hidup, Abaya Belgravia boleh dipakai untuk perkahwinan di Riyadh, majlis malam di London, acara di Paris, atau kehidupan harian di kawasan Teluk. Abadi, bukan mengikut tren, ia dihasilkan untuk wanita yang menghargai keanggunan, kraftangan, dan karya yang kekal relevan di mana pun dipakai.',
      'Seperti semua abaya Bint Saeed, Abaya Belgravia dihasilkan mengikut pesanan dan boleh diperibadikan dengan nama, tarikh, atau mesej bermakna di dalam poket tersembunyi.',
    ],
    productDetails: [
      'Siluet abaya terinspirasi Bisht',
      'Tersedia dalam Deep Black dan Navy Blue',
      'Hiasan tenunan tangan terinspirasi Al Khous — tenunan pelepah kurma tradisional',
      'Konstruksi depan terbuka',
      'Penutup butang snap tersembunyi pilihan tersedia atas permintaan',
      'Berlapis penuh untuk keselesaan dan kemasan halus',
      'Poket sisi tersembunyi',
      'Pemperibadian tersedia di dalam poket tersembunyi',
      'Siluet mengalir santai yang direka untuk kemudahan bergerak',
      'Kain luar campuran crepe ringan',
      'Reka bentuk kontemporari terinspirasi tradisi dan kraftangan Emirati serta GCC',
      'Sesuai untuk keanggunan harian, pertemuan, perkahwinan, dan majlis istimewa',
      'Tinggi model: 155 cm / 61 inci',
      'Panjang: 138 cm / 54,5 inci',
      `Warna: ${label}`,
      'Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu',
    ],
    compositionDetails: [...BELGRAVIA_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Saiz tersedia: XS, S, M, L, XL, XXL',
      'Panjang: 138 cm / 54,5 inci',
      'Tinggi model: 155 cm / 61 inci',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getBelgraviaPdpFaq('ms'),
  }
}

const KENSINGTON_COMPOSITION_DETAILS = [
  'Luar: 80% Polyester, 20% Viscose',
  'Lapisan: 70% Polyester, 30% Viscose',
] as const

export function buildKensingtonAbayaContentMs(): ProductPdpContent {
  return {
    introParagraphs: [
      'Abaya Kensington direka untuk wanita yang menghargai keyakinan yang diekspresikan melalui kesederhanaan. Dihasilkan dalam hitam pekat dengan siluet memanjang yang bersih, ia mewujudkan kehadiran melalui struktur, pergerakan, dan perkadaran — bukan hiasan.',
      'Terinspirasi daripada keyakinan dan struktur pakaian luar yang dijahit dengan teliti, Abaya Kensington menggabungkan kemudahan pemakaian tradisional dengan penampilan kemas blazer yang terpotong baik. Garis bersih di bahu dan badan menghasilkan siluet yang terasa tenang, anggun, dan mudah dipakai.',
      'Hiasan bertekstur di dada dan manset mengambil inspirasi daripada Al Khous, seni tradisional Emirati menenun pelepah palma yang diwarisi merentasi generasi. Ditafsirkan melalui tenunan organza glitter hitam yang halus, perincian ini memperkenalkan kedalaman dan tekstur sambil kekal sederhana.',
      'Direka untuk dilapisi dengan mudah di atas gaun, pakaian formal, pakaian majlis, atau busana harian, ia beralih secara semula jadi antara kehidupan harian, mesyuarat perniagaan, majlis makan malam, pertemuan, perjalanan, dan acara istimewa. Estetika abadinya membolehkannya bergerak merentasi negara, musim, dan bab kehidupan sambil kekal berpaut pada kraftangan dan keanggunan yang mengilhamkannya.',
      'Berlapis penuh dengan kain krep lembut dan disiapkan dengan dua poket sisi tersembunyi, Abaya Kensington mengimbangkan kepraktisan dengan kehalusan sambil mengekalkan siluet bersih yang anggun. Seperti semua abaya Bint Saeed, ia boleh diperibadikan dengan label dalaman tersembunyi yang memaparkan nama, tarikh, atau mesej bermakna — sangat bermakna untuk hadiah dan perayaan.',
      'Anggun, serba guna, dan dihasilkan untuk dipakai selama bertahun-tahun, Abaya Kensington direka untuk menemani wanita yang memakainya ke mana sahaja hidup membawanya.',
    ],
    productDetails: [
      'Hitam Pekat',
      'Leher bulat',
      'Padding bahu ringan',
      'Penutup butang snap depan',
      'Hiasan tenunan khas Bint Saeed terinspirasi tenunan pelepah palma Al Khous tradisional',
      'Dua poket sisi tersembunyi',
      'Lapisan kain krep lembut',
      'Label pemperibadian dalaman tersembunyi pilihan',
      'Panjang: 138 cm / 54.5 inci',
      'Tinggi model: 155 cm / 61 inci',
      'Model memakai saiz XS',
      'Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu',
    ],
    compositionDetails: [...KENSINGTON_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Saiz tersedia: XS, S, M, L, XL',
      'Direka untuk potongan berstruktur namun mengalir',
      'Panjang: 138 cm / 54.5 inci',
      'Tinggi model: 155 cm / 61 inci',
      'Model memakai saiz XS',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getKensingtonPdpFaq('ms'),
  }
}

function isKnightsbridgeNavyColor(color?: string): boolean {
  return (color ?? '').toLowerCase().includes('navy')
}

export function buildKnightsbridgeAbayaJacketContentMs(color?: string): ProductPdpContent {
  const catalogColor = isKnightsbridgeNavyColor(color) ? 'Navy Grey' : 'Dark Brown'
  const colorLabel = knightsbridgePdpColorLabel(catalogColor, 'ms')

  return {
    introParagraphs: [
      'Wanita yang gayanya terasa effortless seringkali yang paling tidak berminat mengikuti trend. Berani menjadi diri sendiri, mereka biasanya yang menetapkannya.',
      'Abaya Jaket Khous dicipta untuk wanita yang bergerak dengan yakin menjalani hidup mengikut syaratnya sendiri. Berada di antara abaya dan jaket, ia menggabungkan kemudahan pemakaian tradisional dengan keyakinan pakaian luar kontemporari.',
      'Dipotong dalam siluet santai dan tersedia dalam Coklat Gelap dan Kelabu Navy, ia berlapis dengan effortless di atas gaun, tailoring, knitwear, dan pakaian harian. Dipakai dengan sneakers atau heels, ia menyesuaikan diri secara semula jadi untuk perjalanan, kehidupan harian, dan kehidupan antara bandar.',
      'Perincian bertekstur di poket dada dan manset mengambil inspirasi daripada Al Khous, seni tradisional Emirati menenun pelepah palma yang diwarisi turun-temurun. Ditafsirkan melalui reka bentuk kontemporari, perincian ini memperkenalkan kedalaman, struktur, dan karakter sambil mengekalkan penampilan yang halus.',
      'Perincian bahu yang khas memberi siluet pengaruh tentera yang halus, mewujudkan kehadiran yakin yang seimbang dengan keselesaan dan kemudahan bergerak. Empat poket fungsional, termasuk dua poket dada dan dua poket sisi tersembunyi, mengukuhkan kepraktisan untuk kehidupan harian.',
      'Disiapkan dengan butang emas khas Bint Saeed Knotted Lines of Lineage, reka bentuk ini membawa salah satu kod abadi rumah. Terinspirasi hubungan yang mengikat generasi, perincian ini mengingatkan bahawa perkara paling bermakna seringkali yang kita bawa ke hadapan.',
      'Dicipta di Abu Dhabi, Abaya Jaket Khous mencerminkan komitmen Bint Saeed membawa elemen warisan Emirati ke dalam almari pakaian kontemporari. Sama ada untuk kopi di London, perjalanan, mesyuarat di Dubai, atau kehidupan harian di Teluk, ia menawarkan siluet tersendiri untuk wanita yang memahami bahawa gaya tidak terhad kepada majlis istimewa.',
      'Selesa, serba guna, dan direka untuk dipakai kerap, Abaya Jaket Khous meraikan idea bahawa keanggunan sebenar terungkap bukan sahaja dalam detik penting, tetapi dalam cara wanita memilih menampilkan dirinya setiap hari.',
    ],
    productDetails: [
      `Abaya jaket ${colorLabel} dengan siluet santai`,
      'Kolar runcing',
      'Penutup butang hadapan tersembunyi',
      'Dua poket dada',
      'Dua poket sisi tersembunyi',
      'Perincian tab bahu',
      'Lengan panjang dengan manset berbutang',
      'Perincian tenunan terinspirasi Khous khas Bint Saeed pada poket dada dan manset',
      'Butang emas khas Bint Saeed Knotted Lines of Lineage',
      'Gaun dalaman terpasang',
      'Label pemperibadian dalaman tersembunyi pilihan dengan nama, tarikh, atau mesej bermakna',
      `Warna: ${colorLabel} dengan perincian kontras Khous semula jadi`,
      'Panjang: 143 cm / 56.3 inci',
      'Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu',
    ],
    compositionDetails: [
      'Luar: 60% Polyester, 40% Kapas',
      'Gaun dalaman: 100% Polyester',
    ],
    fitAndSizeDetails: [
      'Tinggi model: 160 cm / 63 inci',
      'Model memakai saiz XS',
      'Direka untuk potongan santai',
      'Saiz tersedia: XS, S, M, L, XL, XXL',
    ],
    careDetails: ['Pembersihan kering profesional sahaja'],
    stylePairingNote: getKnightsbridgeStylePairingNote('knightsbridge-abaya-jacket', catalogColor, 'ms'),
    faq: getKnightsbridgePdpFaq('ms'),
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

/** Malay PDP copy for hero products; returns null for other slugs. */
export function getProductPdpContentMs(product: Product, color?: string): ProductPdpContent | null {
  if (isMayfairKaftan(product)) return buildMayfairKaftanContentMs(color)
  if (isNothingHillKaftan(product)) return buildNothingHillKaftanContentMs(color)
  if (isBelgraviaAbaya(product)) return buildBelgraviaAbayaContentMs(color)
  if (isKensingtonAbaya(product)) return buildKensingtonAbayaContentMs()
  if (isKnightsbridgeAbayaJacket(product)) return buildKnightsbridgeAbayaJacketContentMs(color)
  return null
}
