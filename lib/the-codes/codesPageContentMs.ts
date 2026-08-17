import { withBrandAlt } from '@/lib/products/imageAlt'
import type { CodesSectionContent } from '@/lib/the-codes/codesPageContent'

const IMG = {
  monogram: 'bint-saeed-abu-dhabi-monogram-luxury-house.webp',
  alTalli: 'bint-saeed-abu-dhabi-al-talli-emirati-heritage.webp',
  khous: 'bint-saeed-abu-dhabi-khous-emirati-heritage.webp',
  alAinRosette: 'bint-saeed-abu-dhabi-al-ain-rosette-emirati-heritage.webp',
  knottedLines: 'bint-saeed-abu-dhabi-knotted-lines-of-lineage.webp',
  strands: 'bint-saeed-abu-dhabi-natural-stone-beads-emirati-heritage.webp',
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
    title: 'Al Khous',
    paragraphs: [
      'Tenunan Al Khous berpunca pada penggunaan pelepah palem, dibentuk melalui struktur dan pengulangan, serta diiktiraf sebagai sebahagian daripada kraftangan tradisional wilayah ini. Ia mencerminkan cara membuat yang fungsional sekaligus halus. Logiknya dibawa ke dalam garisan dan konstruksi setiap karya.',
    ],
    imageFile: IMG.khous,
    imageAlt: withBrandAlt(
      'Tekstur kraftangan warisan Emirati tenunan pelepah palem Al Khous — kod rumah Bint Saeed',
    ),
  },
  {
    id: 'al-ain-rosette',
    eyebrow: 'Motif',
    title: 'Al Ain Rosette',
    paragraphs: [
      'Al Ain Rosette ialah batu karnelian ukir, dikembangkan sebagai motif tersendiri rumah Bint Saeed.',
      'Warna hangatnya diambil daripada landskap Emiriah Arab Bersatu yang berubah. Dari pasir pucat sepanjang pantai Abu Dhabi hingga nada merah yang lebih dalam di sekitar Al Ain, gurun beralih warnanya. Karnelian menangkap spektrum itu secara semula jadi — dari amber hangat hingga terracotta yang kaya.',
      'Bentuk bulatnya merujuk flora gurun Al Ain, mengingatkan pada hyacinth gurun dan bunga berkelopak lembut Tribulus omanense, bunga kebangsaan UAE.',
      'Al Ain Rosette kini ditemui pada barang kemas terpilih, strand telefon dan objek kecil, di mana ia mula menetapkan House Code yang dikenali dan boleh berkembang di Bint Saeed seiring masa.',
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
  {
    id: 'the-strands',
    eyebrow: 'Batu & benang',
    title: 'The Strands',
    paragraphs: [
      'The Strands disusun daripada batu semula jadi, disusun berurutan di bahu dan merentasi garment. Dalam rumah, ia melanjutkan garis berknot menjadi benang berterusan — terukur dalam penempatan, sengaja dalam berat, dan dekat dengan pemakai. Bukan hiasan atau selepas fikiran; ia mengimbangi siluet sambil membawa hubungan antara asal dan kehadiran sebagai kod rumah yang menentukan.',
    ],
    imageFile: IMG.strands,
    imageAlt: withBrandAlt(
      'Tali abaya batu semula jadi — kod rumah boleh pakai dari benang dan keseimbangan, Bint Saeed Abu Dhabi',
    ),
  },
]
