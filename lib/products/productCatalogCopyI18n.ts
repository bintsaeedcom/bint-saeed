import type { Product } from '@/data/products'
import type { AppLocale } from '@/lib/i18n/routing'
import { getProductSlug } from '@/lib/products/links'

type CatalogFields = {
  description: string
  fabric: string
  measurements: string
}

const ID_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description:
      'Abaya bergaya jaket dengan drape halus dan trim terinspirasi anyaman Khous tradisional — kerajinan warisan Emirati dari Abu Dhabi.',
    fabric: 'Crepe Jepang premium, lapisan sutra, detail bordir tangan',
    measurements:
      'Model mengenakan ukuran M. Panjang: 140 cm (ukuran M). Panjang kustom tersedia atas permintaan.',
  },
  'covent-garden-abaya': {
    description:
      'Abaya linen ringan dengan trim Al Talli tradisional, placket tersembunyi yang bersih, dan detail warisan Emirati.',
    fabric: 'Campuran linen Eropa, lapisan katun',
    measurements: 'Panjang: 138 cm (ukuran M). Pas santai di bagian tubuh.',
  },
  'kensington-abaya': {
    description:
      'Abaya blazer terstruktur dengan bahu tailored dan trim terinspirasi anyaman Khous tradisional serta warisan Emirati.',
    fabric: 'Crepe Jepang, benang bordir tonal',
    measurements: 'Panjang: 138 cm (ukuran M).',
  },
  'marylebone-abaya': {
    description: 'Abaya signature depan terbuka dengan lengan lebar untuk dilapisi di atas gaun atau set.',
    fabric: 'Campuran wool-sutra, binding satin matte',
    measurements: 'Panjang: 135 cm (ukuran M).',
  },
  'belgravia-abaya': {
    description:
      'Abaya terinspirasi Bisht dengan trim anyaman tangan terinspirasi Al Khous — ekspresi kontemporer warisan Emirati, dibuat di Abu Dhabi.',
    fabric: 'Luar: Campuran crepe ringan (80% polyester, 20% viscose); lapisan dalam (70% polyester, 30% viscose)',
    measurements: 'Panjang: 138 cm (ukuran M). Panjang kustom tersedia atas permintaan.',
  },
  'park-lane-abaya': {
    description:
      'Abaya sehari-hari yang halus dengan garis bersih dan drape fluid yang dirancang untuk pergerakan di kota.',
    fabric: 'Komposisi kain — akan difinalisasi bersama produksi.',
    measurements: 'Panjang: 138 cm (ukuran M). Panjang kustom tersedia atas permintaan.',
  },
  'hyde-park-set': {
    description: 'Gaya placeholder menunggu detail produk dan citra lengkap.',
    fabric: 'Komposisi kain — akan difinalisasi bersama produksi.',
    measurements: 'Ukuran — akan dikonfirmasi.',
  },
  'mayfair-kaftan': {
    description:
      'Kaftan crepe-chiffon garis leher V dengan drape mengalir, gaun dalam, detail scarf, dan pin emblem emas khas.',
    fabric: 'Crepe Chiffon (100% Polyester), Gaun dalam: 100% Polyester',
    measurements: 'Panjang maksimum garment: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description:
      'Kaftan chiffon peach pink lembut dengan garis leher bateau halus, siluet mengalir, dan emblem emas khas Bint Saeed.',
    fabric: 'Chiffon (100% Polyester), Gaun dalam: 100% Polyester',
    measurements: 'Panjang maksimum garment: 165 cm.',
  },
  'knightsbridge-dress': {
    description:
      'Gaun midi dengan rok berlapis dan trim terinspirasi anyaman Khous tradisional — desain warisan Emirati siap malam.',
    fabric: 'French Tulle, kristal Swarovski, lapisan duchess satin',
    measurements:
      'Bodice pas, rok mengalir. Panjang: 160 cm (ukuran M). Ekor: 30 cm.',
  },
  'covent-garden-long-dress': {
    description: 'Kolom ramping dari stretch crepe dengan vent belakang tinggi untuk kemudahan bergerak.',
    fabric: 'Stretch crepe, lapisan power mesh',
    measurements: 'Panjang lantai 148 cm (ukuran M).',
  },
  'hampstead-dress': {
    description:
      'Gaun dengan bahu terstruktur dan trim Al Talli tradisional — untuk malam atau kota dengan akar warisan Emirati.',
    fabric: 'Campuran Virgin Wool, lapisan sutra, kancing mother-of-pearl',
    measurements:
      'Pas terstruktur. Panjang: 118 cm (ukuran M). Lebar bahu: 42 cm.',
  },
  'covent-garden-signature-set': {
    description:
      'Set dua bagian signature Khous — atasan dan rok untuk tampilan lengkap atau styling terpisah.',
    fabric: 'Campuran Organic Cotton, aksen linen, pewarna alami',
    measurements: 'Panjang atasan: 70 cm, panjang rok: 95 cm (ukuran M). Pas santai.',
  },
  'soho-set': {
    description:
      'Set atasan dan rok koordinat dengan trim Al Talli tradisional — tampilan siang hingga malam yang halus merayakan warisan Emirati.',
    fabric: 'Komposisi kain — akan difinalisasi bersama produksi.',
    measurements: 'Pas chapter; panjang atasan dan rok dikonfirmasi sesuai size chart.',
  },
}

const MS_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description:
      'Abaya gaya jaket dengan jatuh lembut dan hiasan terinspirasi tenunan Khous tradisional — kraftangan warisan Emirati dari Abu Dhabi.',
    fabric: 'Crepe Jepun premium, lapisan sutera, butiran sulaman tangan',
    measurements:
      'Model memakai saiz M. Panjang: 140 cm (saiz M). Panjang tersuai tersedia atas permintaan.',
  },
  'covent-garden-abaya': {
    description:
      'Abaya linen ringan dengan hiasan Al Talli tradisional, placket tersembunyi yang kemas, dan butiran warisan Emirati.',
    fabric: 'Campuran linen Eropah, lapisan kapas',
    measurements: 'Panjang: 138 cm (saiz M). Potongan santai di bahagian badan.',
  },
  'kensington-abaya': {
    description:
      'Abaya blazer berstruktur dalam hitam pekat dengan bahu tailored dan hiasan simpai terinspirasi Al Khous — keyakinan melalui kesederhanaan, dihasilkan di Abu Dhabi.',
    fabric:
      'Luar: 80% polyester, 20% viscose; lapisan: 70% polyester, 30% viscose; simpai tenunan organza glitter hitam',
    measurements: 'Panjang: 138 cm (saiz M).',
  },
  'marylebone-abaya': {
    description: 'Abaya signature depan terbuka dengan lengan lebar untuk dilapisi di atas gaun atau set.',
    fabric: 'Campuran wool-sutera, binding satin matte',
    measurements: 'Panjang: 135 cm (saiz M).',
  },
  'belgravia-abaya': {
    description:
      'Abaya berinspirasikan Bisht dengan hiasan tenunan tangan terinspirasi Al Khous — ekspresi kontemporari warisan Emirati, dihasilkan di Abu Dhabi.',
    fabric: 'Luar: Campuran crepe ringan (80% polyester, 20% viscose); lapisan dalam (70% polyester, 30% viscose)',
    measurements: 'Panjang: 138 cm (saiz M). Panjang tersuai tersedia atas permintaan.',
  },
  'park-lane-abaya': {
    description:
      'Abaya harian yang halus dengan garisan bersih dan jatuh mengalir, direka untuk pergerakan bandar.',
    fabric: 'Komposisi kain — akan dimuktamadkan bersama pengeluaran.',
    measurements: 'Panjang: 138 cm (saiz M). Panjang tersuai tersedia atas permintaan.',
  },
  'hyde-park-set': {
    description: 'Gaya placeholder menunggu butiran produk dan imej lengkap.',
    fabric: 'Komposisi kain — akan dimuktamadkan bersama pengeluaran.',
    measurements: 'Saiz — akan disahkan.',
  },
  'mayfair-kaftan': {
    description:
      'Kaftan crepe-chiffon garis leher V dengan jatuh mengalir, gaun dalam, butiran scarf, dan pin emblem emas khas.',
    fabric: 'Crepe Chiffon (100% Polyester), Gaun dalam: 100% Polyester',
    measurements: 'Panjang maksimum pakaian: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description:
      'Kaftan chiffon peach pink lembut dengan garis leher bateau halus, siluet mengalir, dan emblem emas khas Bint Saeed.',
    fabric: 'Chiffon (100% Polyester), Gaun dalam: 100% Polyester',
    measurements: 'Panjang maksimum pakaian: 165 cm.',
  },
  'knightsbridge-dress': {
    description:
      'Gaun midi dengan rok berlapis dan hiasan terinspirasi tenunan Khous tradisional — reka bentuk warisan Emirati untuk malam.',
    fabric: 'French Tulle, kristal Swarovski, lapisan duchess satin',
    measurements:
      'Bodice ketat, rok mengalir. Panjang: 160 cm (saiz M). Ekor: 30 cm.',
  },
  'covent-garden-long-dress': {
    description: 'Kolum ramping daripada stretch crepe dengan vent belakang tinggi untuk kemudahan bergerak.',
    fabric: 'Stretch crepe, lapisan power mesh',
    measurements: 'Panjang lantai 148 cm (saiz M).',
  },
  'hampstead-dress': {
    description:
      'Gaun dengan bahu berstruktur dan hiasan Al Talli tradisional — untuk malam atau bandar dengan akar warisan Emirati.',
    fabric: 'Campuran Virgin Wool, lapisan sutera, butang mother-of-pearl',
    measurements:
      'Potongan berstruktur. Panjang: 118 cm (saiz M). Lebar bahu: 42 cm.',
  },
  'covent-garden-signature-set': {
    description:
      'Set dua bahagian signature Khous — atasan dan rok untuk penampilan lengkap atau gaya berasingan.',
    fabric: 'Campuran Organic Cotton, aksen linen, pewarna semula jadi',
    measurements: 'Panjang atasan: 70 cm, panjang rok: 95 cm (saiz M). Potongan santai.',
  },
  'soho-set': {
    description:
      'Set atasan dan rok koordinat dengan hiasan Al Talli tradisional — penampilan siang hingga malam yang halus meraikan warisan Emirati.',
    fabric: 'Komposisi kain — akan dimuktamadkan bersama pengeluaran.',
    measurements: 'Potongan mengikut bab; panjang atasan dan rok disahkan mengikut carta saiz.',
  },
}

export function getLocalizedProductCatalogFields(
  product: Product,
  locale: AppLocale = 'en',
): { description: string; fabric: string; measurements: string } {
  if (locale === 'id') {
    const localized = ID_CATALOG_COPY[getProductSlug(product)]
    if (localized) return localized
  }
  if (locale === 'ms') {
    const localized = MS_CATALOG_COPY[getProductSlug(product)]
    if (localized) return localized
  }
  return {
    description: product.description,
    fabric: product.fabric,
    measurements: product.measurements,
  }
}
