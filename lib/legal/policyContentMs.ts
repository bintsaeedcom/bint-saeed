import { OFFICIAL_EMAILS } from '@/lib/brand/officialEmails'

export type PolicyLang = 'en' | 'id' | 'ms' | 'ar'

export type PolicySection = {
  title: string
  body: string[]
  list?: string[]
  subsections?: { title: string; body?: string[]; list: string[] }[]
}

export type PolicyContent = {
  pageTitle: string
  breadcrumb: string
  homeBreadcrumb: string
  heroLabel: string
  lastUpdated: string
  intro: string
  summaryTitle: string
  summaryBody: string[]
  sectionList: string[]
  sections: PolicySection[]
}

const AR_BREADCRUMBS = {
  privacy: 'سياسة الخصوصية',
  terms: 'الشروط والأحكام',
  shipment: 'سياسة الشحن والإرجاع',
} as const

function privacyEnSections(analyticsLine: string): PolicySection[] {
  return [
    {
      title: '1. Privacy Notice and Legal Framework',
      body: [
        'This policy applies to personal data processed by Bint Saeed through this website, associated tersuaier journeys, and operational communications. It is designed to align with UAE Federal Decree-Law No. 45 of 2021 and GDPR principles where applicable.',
      ],
    },
    {
      title: '2. Information We Collect',
      body: ['We collect information you provide directly and limited technical data collected automatically.'],
      subsections: [
        {
          title: 'Personal and order data',
          list: [
            'Name, email, phone number, shipping and billing details.',
            'Order details, product preferences, and support communications.',
            'Personalisation inputs where provided for order fulfilment.',
          ],
        },
        {
          title: 'Technical and usage data',
          list: [
            'IP-derived location signals, browser, device type, and session-level navigation behavior.',
            'Kuki and consent preferences used for compliance and website functionality.',
          ],
        },
      ],
    },
    {
      title: '3. How We Use Personal Data',
      body: [],
      list: [
        'Process, fulfil, and support tersuaier orders and product enquiries.',
        'Provide tersuaier care, transactional communications, and service notices.',
        'Improve website usability, security, and performance.',
        'Operate analytics programs only where consent is granted.',
        'Comply with legal, tax, and fraud-prevention obligations.',
      ],
    },
    {
      title: '4. Legal Basis for Processing',
      body: ['Where relevant under GDPR, processing may rely on:'],
      list: [
        'Consent, including optional kuki/analytics consent.',
        'Contract performance, including order processing and delivery.',
        'Legal obligations, including accounting and compliance records.',
        'Legitimate interests, including fraud prevention and site security.',
      ],
      subsections: [
        {
          title: '',
          list: ['Where processing is based on consent, you may withdraw consent at any time.'],
        },
      ],
    },
    {
      title: '5. Sharing and Disclosure',
      body: ['We do not sell personal data. We may share data only where necessary, including with:'],
      list: [
        'Payment providers, logistics partners, and essential service vendors.',
        'Professional advisers or authorities where required by law.',
        'Service providers acting under contractual confidentiality and security obligations.',
      ],
    },
    {
      title: '6. Third-Party Services and Processors',
      body: [
        'We use selected third-party providers to run commerce, communications, infrastructure, and analytics functions. Depending on configuration, this may include payment processing, hosting/CDN, operational email, and optional analytics/behavior tools.',
        analyticsLine,
        'Payment processing: Card/payment data is processed by secure payment providers (including Stripe), not stored in full by Bint Saeed.',
      ],
    },
    {
      title: '7. Security and Organisational Controls',
      body: [
        'We implement technical and organisational safeguards appropriate to the nature of data we process, including access controls, secure transport, and operational controls for data handling.',
      ],
    },
    {
      title: '8. Your Privacy Rights',
      body: [
        'Subject to applicable law, you may request access, correction, deletion, restriction, portability, or objection to certain processing.',
      ],
      list: [
        'You may manage non-essential kuki consent through site controls.',
        'Msentity verification may be required before actioning certain rights requests.',
        'We respond within applicable legal timelines.',
      ],
    },
    {
      title: '9. Kukis and Tracking',
      body: [
        'We use essential kukis for website operation and optional kukis for analytics/behavior insights only after consent. For full details, please review our Kuki Policy.',
      ],
    },
    {
      title: '10. Data Retention',
      body: [
        'We retain personal data only as long as necessary for fulfilment, compliance, security, and record keeping. Certain commerce records may be retained in line with UAE legal/business requirements.',
      ],
    },
    {
      title: '11. International Transfers',
      body: [
        'Where personal data is processed across jurisdictions, we apply appropriate safeguards and contractual controls consistent with applicable UAE and GDPR transfer expectations.',
      ],
    },
    {
      title: '12. Complaints and Supervisory Authorities',
      body: [
        'You may lodge a complaint with a competent supervisory authority in your jurisdiction, including UAE authorities where applicable.',
      ],
    },
    {
      title: '13. Contact and Policy Updates',
      body: [
        'We may revise this Privacy Policy periodically. Updated versions become effective when published on this page.',
        `Bint Saeed\nPrivacy and Legal Inquiries: ${OFFICIAL_EMAILS.legal}\nGeneral Inquiries: ${OFFICIAL_EMAILS.hello}`,
      ],
    },
  ]
}

function privacyMsSections(analyticsLine: string): PolicySection[] {
  return [
    {
      title: '1. Pemberitahuan Privasi dan Kerangka Hukum',
      body: [
        'Dasar ini berlaku untuk data peribadi yang diproses oleh Bint Saeed melalui laman web ini, perjalanan pelanggan terkait, dan komunikasi operasional. Dasar ini direka selaras dengan Dekrit Federal UAE No. 45 Tahun 2021 dan prinsip GDPR sejauh berlaku.',
      ],
    },
    {
      title: '2. Informasi yang Kami Kumpulkan',
      body: [
        'Kami mengumpul maklumat yang anda berikan secara langsung serta data teknis terbatas yang dikumpulkan secara otomatis.',
      ],
      subsections: [
        {
          title: 'Data pribadi dan pesanan',
          list: [
            'Nama, email, nombor telepon, serta butiran penghantaran dan bil.',
            'Butiran pesanan, preferensi produk, dan komunikasi dukungan.',
            'Input personalisasi yang diberikan untuk pemenuhan pesanan.',
          ],
        },
        {
          title: 'Data teknis dan penggunaan',
          list: [
            'Sinyal lokasi dari IP, browser, jenis perangkat, dan tingkah laku navigasi tingkat sesi.',
            'Preferensi kuki dan kebenaran untuk pematuhan dan fungsionalitas laman web.',
          ],
        },
      ],
    },
    {
      title: '3. Cara Kami Menggunakan Data Pribadi',
      body: [],
      list: [
        'Memproses, memenuhi, dan mendukung pesanan pelanggan serta pertanyaan produk.',
        'Menyediakan perkhidmatan pelanggan, komunikasi transaksional, dan pemberitahuan perkhidmatan.',
        'Meningkatkan kegunaan, keamanan, dan prestasi laman web.',
        'Mengoperasikan program analitik hanya apabila kebenaran diberikan.',
        'Mematuhi kewajiban hukum, perpajakan, dan pencegahan penipuan.',
      ],
    },
    {
      title: '4. Dasar Hukum Pemrosesan',
      body: ['Sejauh relevan menurut GDPR, pemprosesan dapat didasarkan pada:'],
      list: [
        'Persetujuan, termasuk kebenaran kuki/analitik opsional.',
        'Pelaksanaan kontrak, termasuk pemprosesan dan penghantaran pesanan.',
        'Kewajiban hukum, termasuk catatan akauntansi dan pematuhan.',
        'Kepentingan sah, termasuk pencegahan penipuan dan keselamatan laman.',
      ],
      subsections: [
        {
          title: '',
          list: ['Apabila pemprosesan didasarkan pada kebenaran, anda dapat menarik kebenaran pada bila-bila masa.'],
        },
      ],
    },
    {
      title: '5. Berbagi dan Pengungkapan',
      body: [
        'Kami tidak menjual data peribadi. Kami dapat membagikan data hanya jika diperlukan, termasuk kepada:',
      ],
      list: [
        'Penyedia pembayaran, mitra logistik, dan vendor perkhidmatan esensial.',
        'Penasihat profesional atau pihak berkuasa apabila diwajibkan oleh hukum.',
        'Penyedia perkhidmatan yang bertindak di bawah kewajiban kerahasiaan dan keamanan kontraktual.',
      ],
    },
    {
      title: '6. Layanan dan Pemroses Pihak Ketiga',
      body: [
        'Kami menggunakan penyedia pihak ketiga terpilih untuk menjalankan fungsi perdagangan, komunikasi, infrastruktur, dan analitik. Bergantung pada konfigurasi, ini dapat mencakup pemprosesan pembayaran, hosting/CDN, email operasional, serta alat analitik/tingkah laku opsional.',
        analyticsLine,
        'Pemrosesan pembayaran: Data kartu/pembayaran diproses oleh penyedia pembayaran aman (termasuk Stripe), dan tidak disimpan secara penuh oleh Bint Saeed.',
      ],
    },
    {
      title: '7. Keamanan dan Kontrol Organisasi',
      body: [
        'Kami menerapkan perlindungan teknis dan organisasi yang sesuai dengan sifat data yang kami proses, termasuk kontrol akses, transport aman, dan kontrol operasional untuk penanganan data.',
      ],
    },
    {
      title: '8. Hak Privasi anda',
      body: [
        'Tunduk pada hukum yang berlaku, anda dapat meminta akses, koreksi, pemadaman, pembatasan, portabilitas, atau keberatan terhadap pemprosesan tertentu.',
      ],
      list: [
        'anda boleh mengurus kebenaran kuki bukan penting melalui kawalan laman.',
        'Pengesahan identitas mungkin diperlukan sebelum menindaklanjuti permintaan hak tertentu.',
        'Kami merespons dalam jangka waktu hukum yang berlaku.',
      ],
    },
    {
      title: '9. Kuki dan Pelacakan',
      body: [
        'Kami menggunakan kuki esensial untuk operasional laman web dan kuki opsional untuk wawasan analitik/tingkah laku hanya setelah kebenaran. Untuk butiran lengkap, sila tinjau Dasar Kuki kami.',
      ],
    },
    {
      title: '10. Retensi Data',
      body: [
        'Kami menyimpan data peribadi hanya selama diperlukan untuk pemenuhan, pematuhan, keamanan, dan pencatatan. Catatan perdagangan tertentu dapat disimpan sesuai terma hukum/bisnis UAE.',
      ],
    },
    {
      title: '11. Transfer Internasional',
      body: [
        'Apabila data peribadi diproses lintas bidang kuasa, kami menerapkan perlindungan dan kontrol kontraktual yang sesuai dengan ekspektasi transfer UAE dan GDPR yang berlaku.',
      ],
    },
    {
      title: '12. Keluhan dan Otoritas Pengawas',
      body: [
        'anda dapat mengajukan keluhan kepada pihak berkuasa pengawas yang berwenang di bidang kuasa anda, termasuk pihak berkuasa UAE sejauh berlaku.',
      ],
    },
    {
      title: '13. Kontak dan Pembaruan Dasar',
      body: [
        'Kami dapat merevisi Dasar Privasi ini secara berkala. Versi terbaru berlaku efektif saat dipublikasikan di halaman ini.',
        `Bint Saeed\nPertanyaan Privasi dan Hukum: ${OFFICIAL_EMAILS.legal}\nSoalan Lazim: ${OFFICIAL_EMAILS.hello}`,
      ],
    },
  ]
}

const PRIVACY_EN: Omit<PolicyContent, 'sections'> & { sections?: PolicySection[] } = {
  pageTitle: 'Privacy Policy',
  breadcrumb: 'Privacy Policy',
  homeBreadcrumb: 'Home',
  heroLabel: 'Legal',
  lastUpdated: 'Last updated: May 2026',
  intro:
    'This Privacy Policy explains how Bint Saeed collects, uses, safeguards, and discloses personal data in connection with this website and related services.',
  summaryTitle: 'Privacy Notice',
  summaryBody: [
    'We operate within the applicable legal and regulatory framework of the United Arab Emirates while maintaining GDPR-compliant consent handling for relevant users, including users in the European Union.',
  ],
  sectionList: [
    '1. Privacy Notice and Legal Framework',
    '2. Information We Collect',
    '3. How We Use Personal Data',
    '4. Legal Basis for Processing',
    '5. Sharing and Disclosure',
    '6. Third-Party Services and Processors',
    '7. Security and Organisational Controls',
    '8. Your Privacy Rights',
    '9. Kukis and Tracking',
    '10. Data Retention',
    '11. International Transfers',
    '12. Complaints and Supervisory Authorities',
    '13. Contact and Policy Updates',
  ],
}

const PRIVACY_MS: Omit<PolicyContent, 'sections'> = {
  pageTitle: 'Dasar Privasi',
  breadcrumb: 'Dasar Privasi',
  homeBreadcrumb: 'Laman Utama',
  heroLabel: 'Hukum',
  lastUpdated: 'Kemas kini terakhir: Mei 2026',
  intro:
    'Dasar Privasi ini menjelaskan bagaimana Bint Saeed mengumpul, menggunakan, melindungi, dan mendedahkan data peribadi sehubungan dengan laman web ini dan perkhidmatan terkait.',
  summaryTitle: 'Pemberitahuan Privasi',
  summaryBody: [
    'Kami beroperasi dalam kerangka hukum dan regulasi yang berlaku di Emiriah Arab Bersatu sambil mempertahankan penanganan kebenaran yang patuh GDPR bagi pengguna terkait, termasuk pengguna di Eropah.',
  ],
  sectionList: [
    '1. Pemberitahuan Privasi dan Kerangka Hukum',
    '2. Informasi yang Kami Kumpulkan',
    '3. Cara Kami Menggunakan Data Pribadi',
    '4. Dasar Hukum Pemrosesan',
    '5. Berbagi dan Pengungkapan',
    '6. Layanan dan Pemroses Pihak Ketiga',
    '7. Keamanan dan Kontrol Organisasi',
    '8. Hak Privasi anda',
    '9. Kuki dan Pelacakan',
    '10. Retensi Data',
    '11. Transfer Internasional',
    '12. Keluhan dan Otoritas Pengawas',
    '13. Kontak dan Pembaruan Dasar',
  ],
}

const TERMS_EN_SECTIONS: PolicySection[] = [
  {
    title: '1. Scope and Acceptance',
    body: [
      'These Terms and Conditions apply to all visitors, users, and tersuaiers who access or use the Bint Saeed website, content, products, and related services. By accessing this website, creating an account, or placing an order, you confirm that you have read, understood, and agreed to these Terms.',
    ],
  },
  {
    title: '2. Eligibility and Account Responsibility',
    body: [
      'You must have legal capacity to enter into binding agreements under applicable law. If you create an account, you are responsible for maintaining the confidentiality of your login credentials and for all activity carried out under your account.',
    ],
    list: [
      'You agree to provide accurate, complete, and current information for orders and communications.',
      'You are responsible for ensuring your shipping, billing, and contact details remain accurate.',
      'We may suspend or restrict access where misuse, fraud, or security risk is reasonably suspected.',
    ],
  },
  {
    title: '3. Products, Availability, and Pricing',
    body: [
      'We aim to present product details, availability, and pricing accurately. However, occasional errors may occur. Product display images are illustrative and may vary slightly due to lighting, screen calibration, and handcrafted production characteristics.',
    ],
    list: [
      'All prices are displayed in AED unless otherwise stated.',
      'Applicable VAT is handled in accordance with UAE tax requirements.',
      'We may update product assortment and pricing at any time before order confirmation.',
      'Custom and personalised pieces are subject to specific lead times and final-sale conditions.',
    ],
  },
  {
    title: '4. Orders, Payment, and Verification',
    body: [
      'Submission of an order request does not constitute final acceptance by Bint Saeed. An order is accepted when we issue an order confirmation and payment authorization is successfully completed.',
    ],
    list: [
      'Payments are processed through secure payment providers, including Stripe.',
      'We reserve the right to decline, cancel, or limit orders for lawful reasons.',
      'Fraud prevention, identity checks, and payment verification may be required.',
      'Where a payment error or pricing error occurs, we may cancel and refund the affected order.',
    ],
  },
  {
    title: '5. Shipping, Delivery, and Risk Transfer',
    body: [
      'Delivery windows are estimates and are not guaranteed. Delays may occur due to logistics, tersuais, public holidays, weather, or events outside our reasonable control.',
    ],
    list: [
      'Complimentary shipping within the United Arab Emirates applies to orders with a merchandise subtotal of AED 1,000 or more.',
      'Shipping fees for orders below this threshold, and for international destinations, are calculated at checkout.',
      'Shipping terms, costs, and estimated timelines are shown at checkout or applicable policy pages.',
      'International orders may be subject to tersuais duties, import taxes, and local clearance fees.',
      'Risk of loss transfers upon delivery to the shipping address or accepted recipient.',
    ],
  },
  {
    title: '6. Returns, Repairs and Order Finality',
    body: [
      'Return and repair handling is governed by our Shipment & Return Policy. All clients should review the full policy before ordering.',
    ],
    list: [
      'Items are made to order and cancellations/returns are limited once production has started.',
      'Defect or material non-conformity claims must be submitted with evidence within the stated window.',
      'Remedies may include repair or replacement first, and refund where required by applicable law.',
    ],
  },
  {
    title: '7. Personalisation and Custom Work',
    body: [
      'By submitting any personalisation text, you confirm you have the right to use that content and that it does not infringe third-party rights or violate applicable laws. We may reject personalisation requests that are unlawful, offensive, or non-compliant with policy.',
    ],
  },
  {
    title: '8. Intellectual Property',
    body: [
      'All website content, creative assets, designs, photography, trademarks, text, and technical materials are owned by or licensed to Bint Saeed and are protected by applicable intellectual property laws.',
    ],
    list: [
      'No copying, reproduction, scraping, republication, or commercial reuse without written consent.',
      'No use of brand elements, product images, or proprietary material in derivative work without approval.',
      `Permission requests can be sent to ${OFFICIAL_EMAILS.legal}.`,
    ],
  },
  {
    title: '9. Permitted and Prohibited Use',
    body: [],
    list: [
      'You may use this website only for lawful, personal, and legitimate commercial browsing/purchase activity.',
      'Any unlawful access, attempted interference, bot abuse, or fraudulent behavior is prohibited.',
      'We reserve the right to block access and take legal action where misuse is identified.',
    ],
  },
  {
    title: '10. Charitable Contribution Statement',
    body: [
      'Where charitable contribution statements are communicated on-site or in product communications, such statements describe our intended social-impact allocation model and do not alter your purchase price unless expressly stated.',
    ],
  },
  {
    title: '11. Disclaimers and Limitation of Liability',
    body: [
      'To the fullest extent permitted by applicable law, the website and services are provided on an "as is" and "as available" basis without warranties of uninterrupted operation.',
      'Bint Saeed shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of the website, delay in delivery, third-party service interruption, or other events beyond reasonable control. Liability is limited to the amount paid for the relevant order, except where non-excludable liability applies by law.',
      'To the fullest extent permitted by law, Bint Saeed is not liable for injury, illness, allergic reaction, accidental harm, death, property damage, loss of earnings, emotional distress, or any other loss resulting from misuse, improper handling, unauthorised alteration, or use of products contrary to care and safety guidance.',
    ],
  },
  {
    title: '12. Indemnity',
    body: [
      'You agree to indemnify and hold harmless Bint Saeed from claims, liabilities, losses, and costs arising from your breach of these Terms, misuse of the website, or violation of applicable law.',
    ],
  },
  {
    title: '13. Governing Law and Jurisdiction',
    body: [
      'These Terms are governed by the laws of the United Arab Emirates. Subject to mandatory consumer protection rights under applicable law, disputes shall fall under the competent courts of the UAE.',
      'For regulatory clarity, this website is operated by a company registered in Abu Dhabi, United Arab Emirates, holding commercial license number CN-6384424 issued by the Abu Dhabi Registration Authority (ADRA).',
    ],
  },
  {
    title: '14. Changes, Severability, and Contact',
    body: [
      'We may revise these Terms from time to time. Updated versions are effective from publication on this page. If any provision is held unenforceable, remaining provisions remain in full force.',
      `Bint Saeed\nLegal Inquiries: ${OFFICIAL_EMAILS.legal}\nGeneral Inquiries: ${OFFICIAL_EMAILS.hello}`,
    ],
  },
]

const TERMS_MS_SECTIONS: PolicySection[] = [
  {
    title: '1. Ruang Lingkup dan Penerimaan',
    body: [
      'Terma dan Syarat ini berlaku bagi seluruh pengunjung, pengguna, dan pelanggan yang mengakses atau menggunakan laman web, konten, produk, dan perkhidmatan terkait Bint Saeed. Dengan mengakses laman web ini, membuat akaun, atau melakukan pesanan, anda menyatakan telah membaca, memahami, dan menyetujui Terma ini.',
    ],
  },
  {
    title: '2. Kelayakan dan Tanggung Jawab Akaun',
    body: [
      'anda harus memiliki keupayaan undang-undang untuk mengadakan perjanjian yang mengikat menurut hukum yang berlaku. Apabila anda membuat akaun, anda bertanggung jawab menjaga kerahasiaan butiran log masuk dan seluruh aktivitas yang dilakukan melalui akaun anda.',
    ],
    list: [
      'anda setuju memberikan maklumat yang akurat, lengkap, dan terkini untuk pesanan dan komunikasi.',
      'anda bertanggung jawab memastikan butiran penghantaran, bil, dan kontak tetap akurat.',
      'Kami dapat menangguhkan atau membatasi akses apabila penyalahgunaan, penipuan, atau risiko keamanan secara wajar dicurigai.',
    ],
  },
  {
    title: '3. Produk, Ketersediaan, dan Harga',
    body: [
      'Kami berupaya menampilkan butiran produk, ketersediaan, dan harga secara akurat. Namun, kesalahan sesekali dapat terjadi. Gambar produk bersifat ilustratif dan dapat sedikit berbeda karena pencahayaan, kalibrasi layar, serta karakteristik produksi buatan tangan.',
    ],
    list: [
      'Seluruh harga ditampilkan dalam AED kecuali dinyatakan lain.',
      'PPN yang berlaku ditangani sesuai terma perpajakan UAE.',
      'Kami dapat memperbarui kurasi produk dan harga pada bila-bila masa sebelum konfirmasi pesanan.',
      'Karya tersuai dan personalisasi tunduk pada lead time tertentu serta terma final sale.',
    ],
  },
  {
    title: '4. Pesanan, Pembayaran, dan Pengesahan',
    body: [
      'Pengajuan permintaan pesanan bukan merupakan penerimaan akhir oleh Bint Saeed. Pesanan diterima ketika kami mengeluarkan konfirmasi pesanan dan otorisasi pembayaran berhasil diselesaikan.',
    ],
    list: [
      'Pembayaran diproses melalui penyedia pembayaran aman, termasuk Stripe.',
      'Kami berhak menolak, membatalkan, atau membatasi pesanan atas alasan yang sah.',
      'Pencegahan penipuan, pemeriksaan identitas, dan verifikasi pembayaran dapat diperlukan.',
      'Apabila terjadi kesalahan pembayaran atau harga, kami dapat membatalkan dan mengembalikan dana pesanan terkait.',
    ],
  },
  {
    title: '5. Penghantaran, Penyerahan, dan Alih Risiko',
    body: [
      'Jangka waktu penghantaran bersifat estimasi dan tidak dijamin. Keterlambatan dapat terjadi akibat logistik, bea cukai, hari libur, cuaca, atau peristiwa di luar kendali wajar kami.',
    ],
    list: [
      'Penghantaran percuma dalam Emiriah Arab Bersatu berlaku untuk pesanan dengan subtotal barang AED 1.000 atau lebih.',
      'Biaya penghantaran untuk pesanan di bawah ambang tersebut, serta destinasi internasional, dihitung saat checkout.',
      'Ketentuan, biaya, dan estimasi waktu penghantaran ditampilkan saat checkout atau pada halaman dasar terkait.',
      'Pesanan internasional dapat dikenakan bea masuk, pajak impor, dan biaya clearance lokal.',
      'Risiko kerugian beralih saat barang diserahkan ke alamat penghantaran atau penerima yang sah.',
    ],
  },
  {
    title: '6. Pemulangan, Perbaikan, dan Kefinalan Pesanan',
    body: [
      'Penanganan pemulangan dan perbaikan diatur oleh Dasar Penghantaran & Pemulangan kami. Seluruh pelanggan disyorkan meninjau dasar lengkap sebelum memesan.',
    ],
    list: [
      'Produk dihasilkan berdasarkan pesanan dan pembatalan/pemulangan terbatas setelah produksi dimulai.',
      'Klaim cacat atau ketidaksesuaian material harus diajukan beserta bukti dalam jangka waktu yang ditetapkan.',
      'Remedi dapat mencakup perbaikan atau penggantian terlebih dahulu, dan pemulangan dana apabila diwajibkan oleh hukum yang berlaku.',
    ],
  },
  {
    title: '7. Personalisasi dan Pekerjaan Custom',
    body: [
      'Dengan menghantar teks personalisasi, anda menyatakan memiliki hak untuk menggunakan konten tersebut dan bahwa konten tidak melanggar hak pihak ketiga atau hukum yang berlaku. Kami dapat menolak permintaan personalisasi yang melanggar hukum, menyinggung, atau tidak patuh dasar.',
    ],
  },
  {
    title: '8. Hak Kekayaan Intelektual',
    body: [
      'Seluruh konten laman web, aset kreatif, reka bentuk, fotografi, tanda dagangan, teks, dan materi teknis dimiliki atau dilisensikan kepada Bint Saeed dan dilindungi oleh hukum harta intelek yang berlaku.',
    ],
    list: [
      'Dilarang menyalin, mereproduksi, melakukan scraping, mempublikasikan ulang, atau menggunakan kembali secara komersial tanpa kebenaran tertulis.',
      'Dilarang menggunakan elemen merek, gambar produk, atau materi proprietary dalam karya turunan tanpa kebenaran.',
      `Permintaan izin dapat dikirim ke ${OFFICIAL_EMAILS.legal}.`,
    ],
  },
  {
    title: '9. Penggunaan yang Diizinkan dan Dilarang',
    body: [],
    list: [
      'anda hanya boleh menggunakan laman web ini untuk aktivitas pelayaran/pembelian yang sah, pribadi, dan komersial yang wajar.',
      'Akses melanggar hukum, upaya gangguan, penyalahgunaan bot, atau tingkah laku penipuan dilarang.',
      'Kami berhak memblokir akses dan mengambil tindakan hukum apabila penyalahgunaan teridentifikasi.',
    ],
  },
  {
    title: '10. Pernyataan Kontribusi Sosial',
    body: [
      'Apabila pernyataan sumbangan sosial dikomunikasikan di laman atau dalam komunikasi produk, pernyataan tersebut menjelaskan model peruntukan impak sosial yang kami maksudkan dan tidak mengubah harga pembelian anda kecuali dinyatakan secara tegas.',
    ],
  },
  {
    title: '11. Penafian dan Batasan Tanggung Jawab',
    body: [
      'Sejauh diizinkan oleh hukum yang berlaku, laman web dan perkhidmatan disediakan secara "apa adanya" dan "sebagaimana tersedia" tanpa jaminan operasi tanpa gangguan.',
      'Bint Saeed tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial, atau hukuman yang timbul dari penggunaan laman web, keterlambatan penghantaran, gangguan perkhidmatan pihak ketiga, atau peristiwa di luar kendali wajar. Tanggung jawab dibatasi pada jumlah yang dibayarkan untuk pesanan terkait, kecuali apabila tanggung jawab tidak dapat dikecualikan menurut hukum.',
      'Sejauh diizinkan oleh hukum, Bint Saeed tidak bertanggung jawab atas cedera, penyakit, reaksi alergi, bahaya tak disengaja, kematian, kerusakan properti, hilangnya penghasilan, tekanan emosional, atau kerugian lain akibat penyalahgunaan, penanganan tidak tepat, alterasi tanpa izin, atau penggunaan produk yang bertentangan dengan panduan penjagaan dan keselamatan.',
    ],
  },
  {
    title: '12. Ganti Rugi',
    body: [
      'anda setuju untuk mengganti rugi dan membebaskan Bint Saeed dari klaim, kewajiban, kerugian, dan biaya yang timbul akibat pelanggaran Terma ini, penyalahgunaan laman web, atau pelanggaran hukum yang berlaku.',
    ],
  },
  {
    title: '13. Hukum yang Berlaku dan Yurisdiksi',
    body: [
      'Terma ini diatur oleh hukum Emiriah Arab Bersatu. Tunduk pada hak perlindungan konsumen wajib menurut hukum yang berlaku, sengketa berada di bawah bidang kuasa pengadilan UAE yang berwenang.',
      'Untuk kejelasan regulasi, laman web ini dioperasikan oleh perusahaan yang terdaftar di Abu Dhabi, Emiriah Arab Bersatu, dengan nombor lisensi komersial CN-6384424 yang dikeluarkan oleh Abu Dhabi Registration Authority (ADRA).',
    ],
  },
  {
    title: '14. Perubahan, Keterpisahan, dan Kontak',
    body: [
      'Kami dapat merevisi Terma ini dari waktu ke waktu. Versi terbaru berlaku efektif sejak dipublikasikan di halaman ini. Apabila terma tertentu dinyatakan tidak dapat diberlakukan, terma lainnya tetap berlaku penuh.',
      `Bint Saeed\nPertanyaan Hukum: ${OFFICIAL_EMAILS.legal}\nSoalan Lazim: ${OFFICIAL_EMAILS.hello}`,
    ],
  },
]

const TERMS_EN: Omit<PolicyContent, 'sections'> = {
  pageTitle: 'Terms & Conditions',
  breadcrumb: 'Terms & Conditions',
  homeBreadcrumb: 'Home',
  heroLabel: 'Legal',
  lastUpdated: 'Last updated: May 2026',
  intro:
    'These Terms govern access to and use of the Bint Saeed website, products, and related services. They are drafted for clarity, commercial certainty, and compliance with applicable UAE legal requirements.',
  summaryTitle: 'Summary Notice',
  summaryBody: [
    'By using this website or placing an order, you agree to these Terms. If you do not agree, please do not use the site.',
  ],
  sectionList: [
    '1. Scope and Acceptance',
    '2. Eligibility and Account Responsibility',
    '3. Products, Availability, and Pricing',
    '4. Orders, Payment, and Verification',
    '5. Shipping, Delivery, and Risk Transfer',
    '6. Returns, Repairs and Order Finality',
    '7. Personalisation and Custom Work',
    '8. Intellectual Property',
    '9. Permitted and Prohibited Use',
    '10. Charitable Contribution Statement',
    '11. Disclaimers and Limitation of Liability',
    '12. Indemnity',
    '13. Governing Law and Jurisdiction',
    '14. Changes, Severability, and Contact',
  ],
}

const TERMS_MS: Omit<PolicyContent, 'sections'> = {
  pageTitle: 'Terma & Ketentuan',
  breadcrumb: 'Terma & Ketentuan',
  homeBreadcrumb: 'Laman Utama',
  heroLabel: 'Hukum',
  lastUpdated: 'Kemas kini terakhir: Mei 2026',
  intro:
    'Terma ini mengatur akses dan penggunaan laman web, produk, dan perkhidmatan terkait Bint Saeed. Disusun untuk kejelasan, kepastian komersial, dan pematuhan terhadap terma hukum UAE yang berlaku.',
  summaryTitle: 'Ringkasan',
  summaryBody: [
    'Dengan menggunakan laman web ini atau membuat pesanan, anda bersetuju dengan Terma ini. Jika tidak bersetuju, sila jangan menggunakan laman ini.',
  ],
  sectionList: [
    '1. Ruang Lingkup dan Penerimaan',
    '2. Kelayakan dan Tanggung Jawab Akaun',
    '3. Produk, Ketersediaan, dan Harga',
    '4. Pesanan, Pembayaran, dan Pengesahan',
    '5. Penghantaran, Penyerahan, dan Alih Risiko',
    '6. Pemulangan, Perbaikan, dan Kefinalan Pesanan',
    '7. Personalisasi dan Pekerjaan Custom',
    '8. Hak Kekayaan Intelektual',
    '9. Penggunaan yang Diizinkan dan Dilarang',
    '10. Pernyataan Kontribusi Sosial',
    '11. Penafian dan Batasan Tanggung Jawab',
    '12. Ganti Rugi',
    '13. Hukum yang Berlaku dan Yurisdiksi',
    '14. Perubahan, Keterpisahan, dan Kontak',
  ],
}

function shipmentEnSections(): PolicySection[] {
  return [
    {
      title: '1. Opening Statement',
      body: [
        'Each Bint Saeed piece is created following the specific request and selection of the client. Production begins only after an order is confirmed.',
        'Our commitment is to deliver each piece in the condition, quality, and craftsmanship expected from Bint Saeed. Should an issue arise, our team will work closely with the client to find an appropriate resolution.',
      ],
    },
    {
      title: '2. General Policy',
      body: [
        'As many Bint Saeed pieces are produced on demand following a confirmed order, we do not offer refunds for change of mind, personal preference, or sizing selections made by the client.',
        'However, we understand that circumstances may arise where an alternative size is required.',
        'Eligible items may be exchanged within 14 days of delivery, subject to approval by the Bint Saeed Returns Department and the conditions outlined below.',
        `To request an exchange, clients must contact ${OFFICIAL_EMAILS.returns} within 14 days of receiving their order.`,
        'Prior authorisation is required before any item is returned. Once approved, detailed return instructions will be provided by our team.',
        'To be eligible for exchange, items must:',
      ],
      list: [
        'Be unworn, unused, and in original condition.',
        'Be returned with all original tags attached.',
        'Be returned in original packaging.',
        'Be free from perfume, smoke, stains, alterations, damage, or signs of wear.',
        'Be approved by the Bint Saeed Returns Department prior to shipment.',
      ],
      subsections: [
        {
          title: '',
          body: [
            'Return shipping costs remain the responsibility of the client unless otherwise required by applicable law.',
            'Personalised pieces, tersuai specifications, altered pakaians, and items produced to a client’s specific requirements are not eligible for exchange except where a verified manufacturing defect or material non-conformity exists.',
          ],
          list: [],
        },
      ],
    },
    {
      title: '3. Exceptions (UAE Consumer Protection Alignment)',
      body: ['In accordance with applicable laws of the United Arab Emirates, exceptions may apply where:'],
      list: ['The item has a verified manufacturing defect.', 'The item is materially different from the confirmed order.'],
      subsections: [
        {
          title: '',
          body: ['In such cases:'],
          list: [
            'The client must notify us within 48 hours of delivery.',
            'Clear photographic evidence must be provided by email.',
            'The item must remain unused and in its original condition.',
          ],
        },
        {
          title: '',
          body: [
            'Upon review, Bint Saeed will work with the client to determine the most appropriate resolution, which may include:',
          ],
          list: [
            'Repair of the item.',
            'Replacement of the item.',
            'Exchange of the item.',
            'Store credit.',
            'Refund, where repair or replacement is not reasonably possible.',
          ],
        },
        {
          title: '',
          body: [
            'Our goal is always to provide a fair and appropriate solution while maintaining the quality standards of the house.',
          ],
          list: [],
        },
      ],
    },
    {
      title: '4. Non-Eligible Cases',
      body: ['The following do not qualify as grounds for refund, exchange, or return:'],
      list: [
        'Change of mind.',
        'Personal preference.',
        'Incorrect size selected by the client.',
        'Minor variations inherent to handcrafted production.',
        'Colour differences resulting from screen settings or device displays.',
        'Damage resulting from improper care, misuse, alteration, or normal wear.',
      ],
    },
    {
      title: '5. EU Clients – Right of Withdrawal',
      body: [
        'For clients located within the European Union, consumer regulations may provide a 14-day right of withdrawal for online purchases.',
        'However, this right generally does not apply to:',
        'As many Bint Saeed pieces are produced on demand following a confirmed order, they generally fall within this exemption. Returns and cancellations are therefore not accepted once production has commenced.',
      ],
      list: ['Goods made to the consumer’s specifications.', 'Clearly personalised or tersuai-made items.'],
    },
    {
      title: '6. EU Exception (Defective Items Only)',
      body: [
        'In the event of a manufacturing defect:',
        'We will assess the matter and provide an appropriate resolution, which may include repair, replacement, exchange, store credit, or refund where required by applicable law.',
      ],
      list: ['Clients must notify us within 48 hours of delivery.', 'Supporting photographic evidence must be provided by email.'],
    },
    {
      title: '7. Final Acknowledgment',
      body: [
        'By placing an order with Bint Saeed, the client confirms that they have reviewed and accepted the product description, sizing information, production timeline, and the terms outlined within this policy.',
        'The client further acknowledges the made-to-order nature of many Bint Saeed pieces and understands the applicable limitations relating to refunds, exchanges, and cancellations.',
      ],
    },
    {
      title: '8. Shipping Timelines',
      body: [
        'We aim to dispatch every order as efficiently as possible while maintaining the quality standards of Bint Saeed.',
        'While we make every effort to meet estimated timelines, delivery dates are not guaranteed and may be affected by circumstances outside our reasonable control.',
        'Bint Saeed is not responsible for delays arising from tersuais inspections, tersuais clearance procedures, import restrictions, courier operational delays, failed delivery attempts, incorrect delivery information provided by the client, or other circumstances beyond our reasonable control.',
        'While we will always assist clients in tracking and resolving shipping issues where possible, we cannot guarantee delivery timelines once an order has been transferred to the courier.',
      ],
      list: [
        'Complimentary shipping within the United Arab Emirates applies to orders with a merchandise subtotal of AED 1,000 or more.',
        'Shipping fees for orders below this threshold, and for international destinations, are calculated at checkout.',
        'Made-to-order pieces are usually shipped within approximately two weeks following order confirmation.',
        'In-stock items, including selected jewellery and ready-to-ship styles, are usually dispatched within 1–3 business days.',
        'Estimated delivery timelines may vary depending on destination, tersuais processing, and courier operations.',
        'Once an order has been dispatched, clients will receive shipping confirmation and tracking details where available.',
        'Once an order has been transferred to the courier, delivery timelines are subject to the courier’s network, local delivery infrastructure, tersuais procedures, and destination country regulations.',
        'Any tersuais duties, import taxes, local charges, or clearance fees imposed by the destination country remain the responsibility of the recipient unless otherwise stated at checkout.',
      ],
    },
    {
      title: '9. Force Majeure',
      body: [
        'Bint Saeed shall not be held liable for delays, interruptions, or failure to fulfil obligations where such circumstances arise from events beyond our reasonable control.',
        'These events may include, but are not limited to:',
        'In such situations, production, dispatch, delivery, and other obligations may be suspended or delayed for the duration of the event and any reasonable recovery period thereafter.',
      ],
      list: [
        'War or armed conflict.',
        'Civil unrest or political instability.',
        'Acts of government or public authorities.',
        'Customs inspections, tersuais delays, or import restrictions.',
        'Transport disruptions.',
        'Natural disasters.',
        'Labour disputes or strikes.',
        'Public health emergencies.',
        'Utility failures, telecommunications disruptions, or technology outages.',
        'Force majeure events or comparable circumstances beyond our reasonable control.',
      ],
    },
    {
      title: '10. Contact',
      body: [
        'For exchanges, return requests, and defect claims:',
        OFFICIAL_EMAILS.returns,
        'For general tersuaier support:',
        OFFICIAL_EMAILS.support,
        'Please include your order number, contact details, and any supporting photographs where applicable. Our team will review your request and provide guidance on the next steps.',
        'At Bint Saeed, we are committed to handling every enquiry with fairness, professionalism, and care.',
      ],
    },
  ]
}

function shipmentMsSections(): PolicySection[] {
  return [
    {
      title: '1. Pernyataan Pembuka',
      body: [
        'Setiap karya Bint Saeed dihasilkan mengikuti permintaan dan pilihan spesifik pelanggan. Produksi dimulai hanya setelah pesanan disahkan.',
        'Komitmen kami adalah menyerahkan setiap karya dalam kondisi, kualitas, dan craftsmanship yang diharapkan dari Bint Saeed. Apabila terjadi masalah, tim kami akan bekerja erat dengan pelanggan untuk menemukan penyelesaian yang tepat.',
      ],
    },
    {
      title: '2. Dasar Umum',
      body: [
        'Karena banyak karya Bint Saeed diproduksi berdasarkan permintaan setelah pesanan disahkan, kami tidak menawarkan pemulangan dana untuk perubahan pikiran, preferensi pribadi, atau pilihan saiz yang ditentukan pelanggan.',
        'Namun, kami memahami bahwa situasi dapat muncul di mana saiz alternatif diperlukan.',
        'Produk yang memenuhi terma dapat ditukar dalam 14 hari sejak penghantaran, tunduk pada kebenaran Departemen Pemulangan Bint Saeed dan terma di bawah ini.',
        `Untuk meminta pertukaran, pelanggan harus menghubungi ${OFFICIAL_EMAILS.returns} dalam 14 hari sejak menerima pesanan.`,
        'Otorisasi sebelumnya diperlukan sebelum barang dikembalikan. Setelah disetujui, instruksi pemulangan rinci akan diberikan oleh tim kami.',
        'Agar memenuhi terma pertukaran, barang harus:',
      ],
      list: [
        'Belum dipakai, tidak digunakan, dan dalam kondisi asli.',
        'Dikembalikan dengan seluruh label asli masih terpasang.',
        'Dikembalikan dalam kemasan asli.',
        'Bebas dari parfum, asap, noda, alterasi, kerusakan, atau tanda pemakaian.',
        'Disetujui oleh Departemen Pemulangan Bint Saeed sebelum penghantaran balik.',
      ],
      subsections: [
        {
          title: '',
          body: [
            'Biaya penghantaran pemulangan menjadi tanggung jawab pelanggan kecuali diwajibkan lain oleh hukum yang berlaku.',
            'Karya personalisasi, spesifikasi tersuai, pakaian yang diubah, dan barang yang diproduksi sesuai kebutuhan spesifik pelanggan tidak memenuhi terma pertukaran kecuali terdapat cacat produksi terverifikasi atau ketidaksesuaian material.',
          ],
          list: [],
        },
      ],
    },
    {
      title: '3. Pengecualian (Selaras Perlindungan Konsumen UAE)',
      body: ['Sesuai hukum yang berlaku di Emiriah Arab Bersatu, pengecualian dapat berlaku apabila:'],
      list: [
        'Barang memiliki cacat produksi yang terverifikasi.',
        'Barang secara material berbeda dari pesanan yang disahkan.',
      ],
      subsections: [
        {
          title: '',
          body: ['Dalam kasus tersebut:'],
          list: [
            'Klien harus memberi tahu kami dalam 48 jam sejak penghantaran.',
            'Bukti fotografi yang jelas harus dikirim melalui email.',
            'Barang harus tetap tidak digunakan dan dalam kondisi asli.',
          ],
        },
        {
          title: '',
          body: [
            'Setelah peninjauan, Bint Saeed akan bekerja sama dengan pelanggan menentukan penyelesaian paling tepat, yang dapat mencakup:',
          ],
          list: [
            'Perbaikan barang.',
            'Penggantian barang.',
            'Penukaran barang.',
            'Kredit toko.',
            'Pemulangan dana, apabila perbaikan atau penggantian tidak secara wajar memungkinkan.',
          ],
        },
        {
          title: '',
          body: [
            'Tujuan kami selalu memberikan solusi yang adil dan tepat sambil mempertahankan standar kualitas house.',
          ],
          list: [],
        },
      ],
    },
    {
      title: '4. Kasus yang Tidak Memenuhi Terma',
      body: ['Hal berikut bukan alasan yang memenuhi terma untuk pemulangan dana, pertukaran, atau pemulangan:'],
      list: [
        'Perubahan pikiran.',
        'Preferensi pribadi.',
        'Saiz yang salah dipilih oleh pelanggan.',
        'Variasi minor yang melekat pada produksi buatan tangan.',
        'Perbedaan warna akibat pengaturan layar atau tampilan perangkat.',
        'Kerusakan akibat penjagaan tidak tepat, penyalahgunaan, alterasi, atau pemakaian normal.',
      ],
    },
    {
      title: '5. Klien UE – Hak Penarikan',
      body: [
        'Bagi pelanggan yang berada di Eropah, regulasi konsumen dapat memberikan hak penarikan 14 hari untuk pembelian online.',
        'Namun, hak ini umumnya tidak berlaku untuk:',
        'Karena banyak karya Bint Saeed diproduksi berdasarkan permintaan setelah pesanan disahkan, karya tersebut umumnya termasuk dalam pengecualian ini. Pemulangan dan pembatalan oleh karena itu tidak diterima setelah produksi dimulai.',
      ],
      list: ['Barang dihasilkan sesuai spesifikasi konsumen.', 'Barang yang jelas dipersonalisasi atau dihasilkan tersuai.'],
    },
    {
      title: '6. Pengecualian UE (Hanya Barang Cacat)',
      body: [
        'Apabila terjadi cacat produksi:',
        'Kami akan menilai perkara dan memberikan penyelesaian yang tepat, yang dapat mencakup perbaikan, penggantian, pertukaran, kredit toko, atau pemulangan dana apabila diwajibkan oleh hukum yang berlaku.',
      ],
      list: [
        'Klien harus memberi tahu kami dalam 48 jam sejak penghantaran.',
        'Bukti fotografi pendukung harus dikirim melalui email.',
      ],
    },
    {
      title: '7. Pengakuan Akhir',
      body: [
        'Dengan melakukan pesanan kepada Bint Saeed, pelanggan menyatakan telah meninjau dan menerima penerangan produk, maklumat saiz, timeline produksi, serta terma yang diuraikan dalam dasar ini.',
        'Klien selanjutnya mengakui sifat made-to-order dari banyak karya Bint Saeed dan memahami batasan yang berlaku terkait pemulangan dana, pertukaran, dan pembatalan.',
      ],
    },
    {
      title: '8. Jadwal Penghantaran',
      body: [
        'Kami berupaya menghantar setiap pesanan seefisien mungkin sambil mempertahankan standar kualitas Bint Saeed.',
        'Meskipun kami berupaya memenuhi estimasi waktu, tanggal penghantaran tidak dijamin dan dapat terpengaruh oleh keadaan di luar kendali wajar kami.',
        'Bint Saeed tidak bertanggung jawab atas keterlambatan akibat inspeksi bea cukai, prosedur clearance, pembatasan impor, keterlambatan operasional kurir, upaya penghantaran gagal, maklumat penghantaran salah yang diberikan pelanggan, atau keadaan lain di luar kendali wajar kami.',
        'Meskipun kami akan selalu membantu pelanggan melacak dan menyelesaikan masalah penghantaran sejauh memungkinkan, kami tidak dapat menjamin jadwal penghantaran setelah pesanan diserahkan ke kurir.',
      ],
      list: [
        'Penghantaran percuma dalam Emiriah Arab Bersatu berlaku untuk pesanan dengan subtotal barang AED 1.000 atau lebih.',
        'Biaya penghantaran untuk pesanan di bawah ambang tersebut, serta destinasi internasional, dihitung saat checkout.',
        'Karya made-to-order biasanya dikirim dalam kira-kira dua minggu setelah konfirmasi pesanan.',
        'Barang ready stock, termasuk perhiasan terpilih dan gaya siap kirim, biasanya dikirim dalam 1–3 hari kerja.',
        'Estimasi waktu penghantaran dapat bervariasi tergantung destinasi, pemprosesan bea cukai, dan operasional kurir.',
        'Setelah pesanan dikirim, pelanggan akan menerima konfirmasi penghantaran dan butiran pelacakan jika tersedia.',
        'Setelah pesanan diserahkan ke kurir, jadwal penghantaran tunduk pada jaringan kurir, infrastruktur penghantaran lokal, prosedur bea cukai, dan regulasi negara tujuan.',
        'Bea masuk, pajak impor, biaya lokal, atau biaya clearance yang dikenakan negara tujuan menjadi tanggung jawab penerima kecuali dinyatakan lain saat checkout.',
      ],
    },
    {
      title: '9. Force Majeure',
      body: [
        'Bint Saeed tidak bertanggung jawab atas keterlambatan, gangguan, atau kegagalan memenuhi kewajiban apabila keadaan tersebut timbul dari peristiwa di luar kendali wajar kami.',
        'Peristiwa ini dapat mencakup, namun tidak terbatas pada:',
        'Dalam situasi tersebut, produksi, penghantaran, penyerahan, dan kewajiban lain dapat ditangguhkan atau ditunda selama peristiwa berlangsung dan periode pemulihan wajar setelahnya.',
      ],
      list: [
        'Perang atau konflik bersenjata.',
        'Kerusuhan sipil atau ketidakstabilan politik.',
        'Tindakan pemerintah atau pihak berkuasa publik.',
        'Inspeksi bea cukai, keterlambatan bea cukai, atau pembatasan impor.',
        'Gangguan transportasi.',
        'Bencana alam.',
        'Perselisihan atau pemogokan buruh.',
        'Darurat kesehatan masyarakat.',
        'Gangguan utilitas, telekomunikasi, atau teknologi.',
        'Peristiwa force majeure atau keadaan sebanding di luar kendali wajar kami.',
      ],
    },
    {
      title: '10. Kontak',
      body: [
        'Untuk pertukaran, permintaan pemulangan, dan klaim cacat:',
        OFFICIAL_EMAILS.returns,
        'Untuk dukungan pelanggan umum:',
        OFFICIAL_EMAILS.support,
        'Sila sertakan nombor pesanan, butiran kontak, dan foto pendukung jika berlaku. Pasukan kami akan meninjau permintaan anda dan memberikan panduan langkah selanjutnya.',
        'Di Bint Saeed, kami berkomitmen menangani setiap pertanyaan dengan keadilan, profesionalisme, dan perhatian.',
      ],
    },
  ]
}

const SHIPMENT_EN: Omit<PolicyContent, 'sections'> = {
  pageTitle: 'Shipment & Return Policy',
  breadcrumb: 'Shipment & Return Policy',
  homeBreadcrumb: 'Home',
  heroLabel: 'Legal',
  lastUpdated: 'Last updated: June 2026',
  intro:
    'This policy sets out shipping timelines, exchange eligibility, return procedures, and remedy pathways for purchases made through Bint Saeed.',
  summaryTitle: 'Summary Notice',
  summaryBody: [
    'At Bint Saeed, every piece is created with care and inspected prior to shipment. We encourage clients to review product descriptions, sizing information, and product details carefully before placing an order.',
    'While the majority of Bint Saeed pieces are produced on demand, selected items may be available for immediate shipment.',
  ],
  sectionList: [
    '1. Opening Statement',
    '2. General Policy',
    '3. Exceptions (UAE Consumer Protection Alignment)',
    '4. Non-Eligible Cases',
    '5. EU Clients – Right of Withdrawal',
    '6. EU Exception (Defective Items Only)',
    '7. Final Acknowledgment',
    '8. Shipping Timelines',
    '9. Force Majeure',
    '10. Contact',
  ],
}

const SHIPMENT_MS: Omit<PolicyContent, 'sections'> = {
  pageTitle: 'Dasar Penghantaran & Pemulangan',
  breadcrumb: 'Dasar Penghantaran & Pemulangan',
  homeBreadcrumb: 'Laman Utama',
  heroLabel: 'Hukum',
  lastUpdated: 'Kemas kini terakhir: Juni 2026',
  intro:
    'Dasar ini mengatur jadwal penghantaran, kelayakan pertukaran, prosedur pemulangan, dan jalur remedi untuk pembelian melalui Bint Saeed.',
  summaryTitle: 'Ringkasan',
  summaryBody: [
    'Di Bint Saeed, setiap karya dihasilkan dengan perhatian dan diperiksa sebelum penghantaran. Kami mengesyorkan pelanggan meninjau penerangan produk, maklumat saiz, dan butiran produk dengan saksama sebelum memesan.',
    'Meskipun mayoritas karya Bint Saeed diproduksi berdasarkan permintaan, item terpilih dapat tersedia untuk penghantaran segera.',
  ],
  sectionList: [
    '1. Pernyataan Pembuka',
    '2. Dasar Umum',
    '3. Pengecualian (Selaras Perlindungan Konsumen UAE)',
    '4. Kasus yang Tidak Memenuhi Terma',
    '5. Klien UE – Hak Penarikan',
    '6. Pengecualian UE (Hanya Barang Cacat)',
    '7. Pengakuan Akhir',
    '8. Jadwal Penghantaran',
    '9. Force Majeure',
    '10. Kontak',
  ],
}

function resolvePolicyMeta<T extends Omit<PolicyContent, 'sections'>>(
  lang: PolicyLang,
  en: T,
  id: T,
  arBreadcrumb: string,
): Omit<PolicyContent, 'sections'> {
  if (lang === 'ms') return { ...id, homeBreadcrumb: id.homeBreadcrumb }
  if (lang === 'ar') {
    return {
      ...en,
      homeBreadcrumb: 'الرئيسية',
      breadcrumb: arBreadcrumb,
    }
  }
  return en
}

export function buildAnalyticsLine(
  lang: PolicyLang,
  trackerTitles: string[],
): string {
  if (lang === 'ms') {
    return trackerTitles.length > 0
      ? `Layanan analitik (berasaskan persekitaran): ${trackerTitles.join(', ')}`
      : 'Tidak ada pelacak analitik opsional yang saat ini diaktifkan di lingkungan ini.'
  }
  return trackerTitles.length > 0
    ? `Analytics services (environment-based): ${trackerTitles.join(', ')}`
    : 'No optional analytics trackers are currently enabled in this environment.'
}

export function getPrivacyPolicyContent(
  lang: PolicyLang,
  analyticsLine?: string,
): PolicyContent {
  const line =
    analyticsLine ??
    buildAnalyticsLine(
      lang,
      [],
    )
  const meta = resolvePolicyMeta(lang, PRIVACY_EN, PRIVACY_MS, AR_BREADCRUMBS.privacy)
  const sections = lang === 'ms' ? privacyMsSections(line) : privacyEnSections(line)
  return { ...meta, sections }
}

export function getTermsContent(lang: PolicyLang): PolicyContent {
  const meta = resolvePolicyMeta(lang, TERMS_EN, TERMS_MS, AR_BREADCRUMBS.terms)
  const sections = lang === 'ms' ? TERMS_MS_SECTIONS : TERMS_EN_SECTIONS
  return { ...meta, sections }
}

export function getShipmentReturnContent(lang: PolicyLang): PolicyContent {
  const meta = resolvePolicyMeta(lang, SHIPMENT_EN, SHIPMENT_MS, AR_BREADCRUMBS.shipment)
  const sections = lang === 'ms' ? shipmentMsSections() : shipmentEnSections()
  return { ...meta, sections }
}
