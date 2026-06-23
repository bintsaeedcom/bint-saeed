import { withBrandAlt } from '@/lib/products/imageAlt'
import type { CodesSectionContent } from '@/lib/the-codes/codesPageContent'

const IMG = {
  monogram: 'bint-saeed-abu-dhabi-monogram-luxury-house.webp',
  alTalli: 'bint-saeed-abu-dhabi-al-talli-emirati-heritage.webp',
  khous: 'bint-saeed-abu-dhabi-khous-emirati-heritage.webp',
  alAinRosette: 'bint-saeed-abu-dhabi-al-ain-rosette-emirati-heritage.webp',
  knottedLines: 'bint-saeed-abu-dhabi-knotted-lines-of-lineage.webp',
} as const

export const THE_CODES_SECTIONS_ID: CodesSectionContent[] = [
  {
    id: 'the-monogram',
    eyebrow: 'Tanda rumah',
    title: 'Monogram',
    paragraphs: [
      'Monogram Bint Saeed lebih dari sekadar tanda — ia adalah struktur identitas. Bentuknya yang saling terjalin mencerminkan kesinambungan, di mana garis kembali ke dirinya sendiri alih-alih terputus. Ia muncul dengan sengaja di berbagai karya, kadang halus, kadang hadir, selalu menjadi bagian dari keseluruhan.',
    ],
    imageFile: IMG.monogram,
    imageAlt: withBrandAlt(
      'Monogram rumah mewah Bint Saeed — tanda identitas saling terjalin dan kode desain Abu Dhabi',
    ),
  },
  {
    id: 'al-talli',
    eyebrow: 'Benang warisan',
    title: 'Al Talli',
    paragraphs: [
      'Al Talli adalah kerajinan tradisional Emirati, ditenun dengan benang logam halus dan diakui sebagai bagian dari warisan budaya Uni Emirat Arab. Ia mencerminkan ketelitian, kesabaran, dan tradisi hiasan yang berakar dalam. Di Bint Saeed, kerajinan ini diterjemahkan ke dalam bentuk yang bergerak secara alami melintasi batas.',
    ],
    imageFile: IMG.alTalli,
    imageAlt: withBrandAlt(
      'Bordir warisan Emirati Al Talli benang emas tradisional — kode rumah Bint Saeed',
    ),
  },
  {
    id: 'khous',
    eyebrow: 'Tenun & struktur',
    title: 'Khous',
    paragraphs: [
      'Tenun Khous berakar pada penggunaan pelepah palem, dibentuk melalui struktur dan pengulangan, serta diakui sebagai bagian dari kerajinan tradisional wilayah ini. Ia mencerminkan cara membuat yang fungsional sekaligus halus. Logikanya dibawa ke dalam garis dan konstruksi setiap karya.',
    ],
    imageFile: IMG.khous,
    imageAlt: withBrandAlt(
      'Tekstur kerajinan warisan Emirati tenun pelepah palem Khous — kode rumah Bint Saeed',
    ),
  },
  {
    id: 'al-ain-rosette',
    eyebrow: 'Motif',
    title: 'Al Ain Rosette',
    paragraphs: [
      'Al Ain Rosette muncul sebagai batu karnelian ukir dalam rumah. Warna hangatnya mencerminkan lanskap gurun Al Ain di Uni Emirat Arab, sementara bentuknya mengingatkan pada bentuk bulat hyacinth gurun dan bunga kuning Tribulus omanense. Saat ini, ia muncul dalam perhiasan dan objek kecil sebagai titik pengenalan yang khas.',
    ],
    imageFile: IMG.alAinRosette,
    imageAlt: withBrandAlt(
      'Motif batu karnelian Al Ain Rosette — kode rumah warisan Emirati dari Abu Dhabi',
    ),
  },
  {
    id: 'knotted-lines-of-lineage',
    eyebrow: 'Garis & kesinambungan',
    title: 'Knotted Lines',
    paragraphs: [
      'Garis berknot muncul dalam rumah sebagai elemen berulang, dibentuk sebagai kancing dan tali di berbagai garment. Setiap simpul mencerminkan koneksi lintas waktu, menghubungkan apa yang diwarisi dengan apa yang dijalani. Ditempatkan dekat pemakai, mereka menjadi pengingat halus dari cerita yang terus berlanjut.',
    ],
    imageFile: IMG.knottedLines,
    imageAlt: withBrandAlt(
      'Motif emas Knotted Lines of Lineage pada kain — kode kesinambungan rumah, Bint Saeed',
    ),
  },
]
