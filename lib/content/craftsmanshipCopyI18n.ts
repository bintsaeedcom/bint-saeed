import type { Language } from '@/lib/i18n/translations'
import type { AppLocale } from '@/lib/i18n/routing'
import { commerceUi } from '@/lib/i18n/commerceUi'

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
  discoverMore: string
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
      'The result is a piece that reflects a clear standard of development, controlled production, and considered design. Each abaya is made to hold its form, perform in use, and maintain its quality over time. Bint Saeed operates as a contemporary fashion house, shaped in Abu Dhabi and developed through an international process.',
    ],
  },
  ctaHeading: 'Explore the collection',
  ctaButton: 'View Collection',
  discoverMore: 'Discover More',
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
      'Hasilnya adalah karya yang mencerminkan standar pengembangan yang jelas, produksi terkontrol, dan desain yang terpertimbangkan. Setiap abaya dibuat untuk mempertahankan bentuk, berfungsi dalam pemakaian, dan menjaga kualitasnya seiring waktu. Bint Saeed beroperasi sebagai rumah mode kontemporer, dibentuk di Abu Dhabi dan dikembangkan melalui proses internasional.',
    ],
  },
  ctaHeading: 'Jelajahi koleksi',
  ctaButton: 'Lihat Koleksi',
  discoverMore: 'Temukan Lebih Lanjut',
}

const CRAFTSMANSHIP_AR: CraftsmanshipCopy = {
  breadcrumbHome: 'الرئيسية',
  breadcrumbCraftsmanship: 'الحرفية',
  backToHome: 'العودة للرئيسية',
  phaseI: {
    label: 'المرحلة الأولى',
    title: 'التطوير',
    paragraphs: [
      'في Bint Saeed، تبدأ كل قطعة بعملية تطوير محددة. كدار مقرها أبوظبي، ينتقل العمل بين مواقع ببنية واضحة. تُصنع الباترونات في إيطاليا، حيث تُحسم النسبة والتوازن والبناء قبل قص أي خامة. تحدد هذه المرحلة كيف ستسقط العباءة وكيف ستتحرك وكيف ستحافظ على شكلها مع الوقت.',
      'ثم يستمر العمل في أبوظبي، حيث تُنتج النماذج الأولية لاختبار البناء والنسبة. بعد الموافقة، يُصنع عينة لتأكيد الشكل النهائي وسلوك القماش والمقاس. لا تنتقل القطعة إلى الإنتاج إلا بعد إكمال هذه المراحل ومراجعتها. يضمن هذا التسلسل أن كل قطعة قد حُسمت تقنياً قبل صنعها في شكلها النهائي.',
    ],
  },
  phaseII: {
    label: 'المرحلة الثانية',
    title: 'الصنع',
    paragraphs: [
      'يجرى الإنتاج في أبوظبي، الإمارات العربية المتحدة، تحت إشراف حرفيين يمتلكون أكثر من 25 عاماً من الخبرة. دورهم ضمان بناء كل قطعة باتساق ودقة وتحكم في كل مرحلة.',
      'تُستورد المواد من أوروبا وآسيا. تُختار مكوّنات مثل الأزرار من مورّدين أوروبيين، بينما تُستخرج الأحجار الطبيعية وتُقطع وتُصقل في آسيا. يُختار كل عنصر لأدائه، ليساهم في بنية القطعة ومتانتها وتوازنها العام.',
      'يُحافظ على الإنتاج بحجم محكوم، ما يتيح لكل قطعة الوقت والاهتمام اللازمين. يضمن هذا النهج اتساق البناء والتشطيب والجودة من قطعة إلى أخرى.',
      'وفق هذا النهج، تُنتج القطع في الغالب بناءً على الطلب، مع صنع كل قطعة خصيصاً للعميلة. يبقي الإنتاج مركزاً ويتجنب المخزون الزائد، ويحافظ على أسلوب عمل أكثر وعياً ومسؤولية.',
    ],
  },
  phaseIII: {
    label: 'المرحلة الثالثة',
    title: 'التوجيه',
    paragraphs: [
      'يُطوَّر كل تصميم ويُنجز تحت توجيه واحد. يشرف المدير الإبداعي على العملية من المفهوم الأولي حتى التنفيذ النهائي، لضمان بقاء النسبة والبناء والتفاصيل متسقة طوال المسار.',
      'تُدمَج عناصر مثل Al Talli وKhous في بنية القطعة بدلاً من إضافتها كزخرفة سطحية. يُحدَّد استخدامها أثناء التطوير ويُحسم ضمن عملية البناء، لضمان الاتساق في المظهر والأداء.',
      'النتيجة قطعة تعكس معيار تطوير واضحاً وإنتاجاً محكوماً وتصميماً مدروساً. تُصنع كل عباءة لتحافظ على شكلها وتؤدي في الاستخدام وتحافظ على جودتها مع الوقت. تعمل Bint Saeed كدار أزياء معاصرة، تشكّلت في أبوظبي وتطورت عبر عملية دولية.',
    ],
  },
  ctaHeading: 'استكشفي المجموعة',
  ctaButton: 'استكشفي المجموعة',
  discoverMore: 'اكتشفي المزيد',
}

const CRAFTSMANSHIP_MS: CraftsmanshipCopy = {
  breadcrumbHome: 'Laman Utama',
  breadcrumbCraftsmanship: 'Kraftangan',
  backToHome: 'Kembali ke Laman Utama',
  phaseI: {
    label: 'Fasa I',
    title: 'Pembangunan',
    paragraphs: [
      'Di Bint Saeed, setiap karya bermula dengan proses pembangunan yang teratur. Sebagai rumah yang berpangkalan di Abu Dhabi, kerja bergerak merentasi lokasi dengan struktur yang jelas. Corak dihasilkan di Itali, di mana proporsi, keseimbangan, dan konstruksi diselesaikan sebelum kain dipotong. Peringkat ini menentukan bagaimana setiap abaya akan jatuh, bergerak, dan mengekalkan bentuknya dari masa ke masa.',
      'Proses kemudian diteruskan di Abu Dhabi, di mana prototaip dihasilkan untuk menguji konstruksi dan proporsi. Setelah diluluskan, sampel dibuat untuk mengesahkan bentuk akhir, tingkah laku bahan, dan potongan. Hanya selepas peringkat ini selesai dan disemak, karya bergerak ke pengeluaran. Urutan ini memastikan setiap pakaian diselesaikan dari segi teknikal sebelum dihasilkan dalam bentuk muktamad.',
    ],
  },
  phaseII: {
    label: 'Fasa II',
    title: 'Pembuatan',
    paragraphs: [
      'Pengeluaran berlangsung di Abu Dhabi, Emiriah Arab Bersatu, di bawah bimbingan tukang dengan pengalaman lebih 25 tahun. Peranan mereka ialah memastikan setiap karya dibina dengan konsistensi, ketepatan, dan kawalan di setiap peringkat.',
      'Bahan diperoleh dari Eropah dan Asia. Komponen seperti butang dipilih daripada pembekal Eropah, manakala batu semula jadi diperoleh, dipotong, dan digilap di Asia. Setiap elemen dipilih berdasarkan prestasinya, memastikan sumbangan kepada struktur, ketahanan, dan keseimbangan keseluruhan pakaian.',
      'Pengeluaran dikekalkan dalam volum terkawal, membolehkan setiap karya menerima masa dan perhatian yang diperlukan. Pendekatan ini memastikan konstruksi, kemasan, dan kualiti keseluruhan kekal konsisten dari satu karya ke karya seterusnya.',
      'Selaras dengan pendekatan ini, karya dihasilkan terutamanya atas pesanan, dengan setiap pakaian dibuat khusus untuk pelanggan. Ini membolehkan pengeluaran kekal fokus dan mengelakkan inventori berlebihan, mengekalkan cara kerja yang lebih terancang dan bertanggungjawab.',
    ],
  },
  phaseIII: {
    label: 'Fasa III',
    title: 'Hala Tuju',
    paragraphs: [
      'Setiap reka bentuk dibangunkan dan dibawa hingga siap di bawah satu hala tuju. Pengarah Kreatif menyelia proses daripada konsep awal hingga pelaksanaan akhir, memastikan proporsi, konstruksi, dan butiran kekal selaras sepanjang proses.',
      'Elemen seperti Al Talli dan Khous disepadukan ke dalam struktur pakaian, bukan ditambah sebagai hiasan permukaan. Penggunaannya ditentukan semasa pembangunan dan diselesaikan dalam proses konstruksi, memastikan konsistensi dalam penampilan dan prestasi.',
      'Hasilnya ialah karya yang mencerminkan standard pembangunan yang jelas, pengeluaran terkawal, dan reka bentuk yang terancang. Setiap abaya dihasilkan untuk mengekalkan bentuk, berfungsi dalam pemakaian, dan mengekalkan kualitinya dari masa ke masa. Bint Saeed beroperasi sebagai rumah fesyen kontemporari, dibentuk di Abu Dhabi dan dibangunkan melalui proses antarabangsa.',
    ],
  },
  ctaHeading: 'Terokai koleksi',
  ctaButton: 'Lihat Koleksi',
  discoverMore: 'Temui Lebih Lanjut',
}

export function getCraftsmanshipCopy(locale: Language | string): CraftsmanshipCopy {
  const base =
    locale === 'ar'
      ? CRAFTSMANSHIP_AR
      : locale === 'id'
        ? CRAFTSMANSHIP_ID
        : locale === 'ms'
          ? CRAFTSMANSHIP_MS
          : CRAFTSMANSHIP_EN
  try {
    const ui = commerceUi(locale as AppLocale)
    return {
      ...base,
      breadcrumbHome: ui.common.home,
      backToHome: ui.common.backToHome,
    }
  } catch {
    return base
  }
}
