import type { Language } from '@/lib/i18n/translations'

export type CraftsmanshipPhaseCopy = {
  label: string
  title: string
  paragraphs: string[]
}

export type CraftsmanshipCopy = {
  breadcrumbHome: string
  breadcrumbCraftsmanship: string
  backToHome: string
  phaseI: CraftsmanshipPhaseCopy
  phaseII: CraftsmanshipPhaseCopy
  phaseIII: CraftsmanshipPhaseCopy
  ctaHeading: string
  ctaButton: string
}

const CRAFTSMANSHIP_EN: CraftsmanshipCopy = {
  breadcrumbHome: 'Home',
  breadcrumbCraftsmanship: 'Craftsmanship',
  backToHome: 'Back to Home',
  phaseI: {
    label: 'Phase I',
    title: 'Development',
    paragraphs: [
      'At Bint Saeed, each piece begins with a defined process of development. As a house based in Abu Dhabi, the work moves between locations with a clear structure. Patterns are created in Italy, where proportion, balance, and construction are resolved before any material is cut. This stage determines how each abaya will fall, move, and maintain its shape over time.',
      'The process then continues in Abu Dhabi, where prototypes are produced to test construction and proportion. Once these are approved, a sample is made to confirm the final form, material behaviour, and fit. Only after these stages are completed and reviewed does a piece move into production. This sequence ensures that every garment is technically resolved before it is made in its final form.',
    ],
  },
  phaseII: {
    label: 'Phase II',
    title: 'Making',
    paragraphs: [
      'Production takes place in Abu Dhabi, United Arab Emirates, under the direction of craftsmen with over 25 years of experience. Their role is to ensure that each piece is constructed with consistency, precision, and control across every stage.',
      'Materials are sourced across Europe and Asia. Components such as buttons are selected from European suppliers, while natural stones are sourced, cut, and polished in Asia. Each element is chosen for its performance, ensuring it contributes to the structure, durability, and overall balance of the garment.',
      'Production is kept controlled in volume, allowing each piece to receive the necessary time and attention. This approach ensures that construction, finishing, and overall quality remain consistent from one piece to the next.',
      'In line with this approach, pieces are produced primarily on an order basis, with each garment made specifically for the client. This allows production to remain focused and avoids excess inventory, maintaining a more considered and responsible way of working.',
    ],
  },
  phaseIII: {
    label: 'Phase III',
    title: 'Direction',
    paragraphs: [
      'Each design is developed and carried through to completion under a single direction. The Creative Director oversees the process from initial concept to final execution, ensuring that proportion, construction, and detail remain aligned throughout.',
      'Elements such as Al Talli and Khous are integrated into the structure of the garment rather than applied as surface decoration. Their use is determined during development and resolved within the construction process, ensuring consistency in both appearance and performance.',
      'The result is a piece that reflects a clear standard of development, controlled production, and considered design. Each abaya is made to hold its form, perform in use, and maintain its quality over time. Bint Saeed operates as a contemporary house, shaped in Abu Dhabi and developed through an international process.',
    ],
  },
  ctaHeading: 'Explore the collection',
  ctaButton: 'View Collection',
}

const CRAFTSMANSHIP_ID: CraftsmanshipCopy = {
  breadcrumbHome: 'Beranda',
  breadcrumbCraftsmanship: 'Kerajinan',
  backToHome: 'Kembali ke Beranda',
  phaseI: {
    label: 'Fase I',
    title: 'Pengembangan',
    paragraphs: [
      'Di Bint Saeed, setiap karya dimulai dengan proses pengembangan yang terdefinisi. Sebagai house yang berbasis di Abu Dhabi, pekerjaan bergerak antar lokasi dengan struktur yang jelas. Pola dibuat di Italia, di mana proporsi, keseimbangan, dan konstruksi diselesaikan sebelum material dipotong. Tahap ini menentukan bagaimana setiap abaya akan jatuh, bergerak, dan mempertahankan bentuknya seiring waktu.',
      'Proses kemudian berlanjut di Abu Dhabi, di mana prototipe diproduksi untuk menguji konstruksi dan proporsi. Setelah disetujui, sample dibuat untuk mengonfirmasi bentuk akhir, perilaku material, dan fit. Hanya setelah tahapan ini selesai dan ditinjau, karya bergerak ke produksi. Urutan ini memastikan setiap garment secara teknis telah diselesaikan sebelum dibuat dalam bentuk finalnya.',
    ],
  },
  phaseII: {
    label: 'Fase II',
    title: 'Pembuatan',
    paragraphs: [
      'Produksi berlangsung di Abu Dhabi, Uni Emirat Arab, di bawah arahan pengrajin dengan pengalaman lebih dari 25 tahun. Peran mereka adalah memastikan setiap karya dikonstruksi dengan konsistensi, presisi, dan kontrol di setiap tahap.',
      'Material bersumber dari Eropa dan Asia. Komponen seperti kancing dipilih dari pemasok Eropa, sementara batu alam bersumber, dipotong, dan dipoles di Asia. Setiap elemen dipilih berdasarkan performanya, memastikan kontribusi pada struktur, daya tahan, dan keseimbangan keseluruhan garment.',
      'Produksi dijaga dalam volume terkontrol, memungkinkan setiap karya menerima waktu dan perhatian yang diperlukan. Pendekatan ini memastikan konstruksi, finishing, dan kualitas keseluruhan tetap konsisten dari satu karya ke karya berikutnya.',
      'Selaras dengan pendekatan ini, karya diproduksi terutama berdasarkan pesanan, dengan setiap garment dibuat khusus untuk klien. Ini memungkinkan produksi tetap fokus dan menghindari inventaris berlebih, mempertahankan cara kerja yang lebih terpertimbangkan dan bertanggung jawab.',
    ],
  },
  phaseIII: {
    label: 'Fase III',
    title: 'Arah',
    paragraphs: [
      'Setiap desain dikembangkan dan dibawa hingga selesai di bawah satu arah. Creative Director mengawasi proses dari konsep awal hingga eksekusi akhir, memastikan proporsi, konstruksi, dan detail tetap selaras sepanjang proses.',
      'Elemen seperti Al Talli dan Khous diintegrasikan ke dalam struktur garment, bukan diterapkan sebagai dekorasi permukaan. Penggunaannya ditentukan selama pengembangan dan diselesaikan dalam proses konstruksi, memastikan konsistensi dalam penampilan dan performa.',
      'Hasilnya adalah karya yang mencerminkan standar pengembangan yang jelas, produksi terkontrol, dan desain yang terpertimbangkan. Setiap abaya dibuat untuk mempertahankan bentuk, berfungsi dalam pemakaian, dan menjaga kualitasnya seiring waktu. Bint Saeed beroperasi sebagai house kontemporer, dibentuk di Abu Dhabi dan dikembangkan melalui proses internasional.',
    ],
  },
  ctaHeading: 'Jelajahi koleksi',
  ctaButton: 'Lihat Koleksi',
}

export function getCraftsmanshipCopy(locale: Language | string): CraftsmanshipCopy {
  if (locale === 'id') return CRAFTSMANSHIP_ID
  return CRAFTSMANSHIP_EN
}
