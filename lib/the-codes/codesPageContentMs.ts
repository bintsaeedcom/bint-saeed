import { withBrandAlt } from '@/lib/products/imageAlt'
import type { CodesSectionContent } from '@/lib/the-codes/codesPageContent'

const IMG = {
  monogram: 'bint-saeed-abu-dhabi-monogram-luxury-house.webp',
  alTalli: 'bint-saeed-abu-dhabi-al-talli-emirati-heritage.webp',
  khous: 'bint-saeed-abu-dhabi-khous-emirati-heritage.webp',
  alAinRosette: 'bint-saeed-abu-dhabi-al-ain-rosette-emirati-heritage.webp',
  knottedLines: 'bint-saeed-abu-dhabi-knotted-lines-of-lineage.webp',
} as const

export const THE_CODES_SECTIONS_MS: CodesSectionContent[] = [
  {
    id: 'the-monogram',
    eyebrow: 'Tanda rumah',
    title: 'Monogram',
    paragraphs: [
      'Monogram Bint Saeed lebih daripada sekadar tanda — ia ialah struktur identiti. Bentuknya yang saling terjalin mencerminkan kesinambungan, di mana garisan kembali kepada dirinya sendiri dan bukannya terputus. Ia muncul dengan sengaja pada pelbagai karya, kadangkala halus, kadangkala hadir, sentiasa menjadi sebahagian daripada keseluruhan.',
    ],
    imageFile: IMG.monogram,
    imageAlt: withBrandAlt(
      'Monogram rumah mewah Bint Saeed — tanda identiti saling terjalin dan kod reka bentuk Abu Dhabi',
    ),
  },
  {
    id: 'al-talli',
    eyebrow: 'Benang warisan',
    title: 'Al Talli',
    paragraphs: [
      'Al Talli ialah kraftangan tradisional Emirati, ditenun dengan benang logam halus dan diiktiraf sebagai sebahagian daripada warisan budaya Emiriah Arab Bersatu. Ia mencerminkan ketelitian, kesabaran, dan tradisi hiasan yang berakar umbi. Di Bint Saeed, kraftangan ini diterjemahkan ke dalam bentuk yang bergerak secara semula jadi merentasi sempadan.',
    ],
    imageFile: IMG.alTalli,
    imageAlt: withBrandAlt(
      'Sulaman warisan Emirati Al Talli benang emas tradisional — kod rumah Bint Saeed',
    ),
  },
  {
    id: 'khous',
    eyebrow: 'Tenun & struktur',
    title: 'Khous',
    paragraphs: [
      'Tenunan Khous berpunca pada penggunaan pelepah palem, dibentuk melalui struktur dan pengulangan, serta diiktiraf sebagai sebahagian daripada kraftangan tradisional wilayah ini. Ia mencerminkan cara membuat yang fungsional sekaligus halus. Logiknya dibawa ke dalam garisan dan konstruksi setiap karya.',
    ],
    imageFile: IMG.khous,
    imageAlt: withBrandAlt(
      'Tekstur kraftangan warisan Emirati tenunan pelepah palem Khous — kod rumah Bint Saeed',
    ),
  },
  {
    id: 'al-ain-rosette',
    eyebrow: 'Motif',
    title: 'Al Ain Rosette',
    paragraphs: [
      'Al Ain Rosette muncul sebagai batu karnelian ukir dalam rumah. Warna hangatnya mencerminkan landskap gurun Al Ain di Emiriah Arab Bersatu, sementara bentuknya mengingatkan pada bentuk bulat hyacinth gurun dan bunga kuning Tribulus omanense. Kini, ia muncul dalam perhiasan dan objek kecil sebagai titik pengenalan yang khas.',
    ],
    imageFile: IMG.alAinRosette,
    imageAlt: withBrandAlt(
      'Motif batu karnelian Al Ain Rosette — kod rumah warisan Emirati dari Abu Dhabi',
    ),
  },
  {
    id: 'knotted-lines-of-lineage',
    eyebrow: 'Garis & kesinambungan',
    title: 'Knotted Lines',
    paragraphs: [
      'Garis berknot muncul dalam rumah sebagai elemen berulang, dibentuk sebagai butang dan tali pada pelbagai pakaian. Setiap simpul mencerminkan hubungan merentasi masa, menghubungkan apa yang diwarisi dengan apa yang dijalani. Diletakkan dekat pemakai, ia menjadi peringatan halus tentang cerita yang berterusan.',
    ],
    imageFile: IMG.knottedLines,
    imageAlt: withBrandAlt(
      'Motif emas Knotted Lines of Lineage pada kain — kod kesinambungan rumah, Bint Saeed',
    ),
  },
]
