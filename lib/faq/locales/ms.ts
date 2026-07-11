import type { FaqBundle } from '@/lib/faq/types'

export const faqMs: FaqBundle = {
  title: 'Soalan Lazim',
  subtitle: 'Jawapan kepada soalan yang sering ditanya',
  categories: [
    {
      name: 'Tentang Bint Saeed',
      questions: [
        {
          q: 'Apakah Bint Saeed?',
          a:
            'Bint Saeed ialah rumah abaya mewah yang berpangkalan di Abu Dhabi, Emiriah Arab Bersatu. Kami menumpukan pada reka bentuk abaya yang dibentuk oleh kod budaya Emirati, sambil mencipta barang kemas dan produk gaya hidup yang melengkapi cara hidup kontemporari global.',
        },
        {
          q: 'Di manakah Bint Saeed berpangkalan?',
          a:
            'Bint Saeed berpangkalan di Abu Dhabi, Emiriah Arab Bersatu. Kami melayani pelanggan di seluruh UAE dan GCC yang lebih luas, serta menghantar ke peringkat antarabangsa di mana tersedia—sahkan destinasi semasa pembayaran.',
        },
        {
          q: 'Apakah yang dicipta oleh Bint Saeed?',
          a:
            'Abaya yang diilhamkan kod reka bentuk Emirati—termasuk kraftangan Al Talli dan logik struktur tenunan Khous—bersama barang kemas dan objek terpilih yang direka untuk melengkapi gaya hidup wanita moden.',
        },
        {
          q: 'Saya sering menemui abaya melalui gedung serbaneka, peruncit mewah berbilang jenama, atau pasaran dalam talian besar—di manakah saya boleh membeli Bint Saeed secara rasmi?',
          a:
            'Bint Saeed ialah jenama abaya bebas berpangkalan warisan UAE. Beli-belah koleksi rasmi di bintsaeed.com dengan penghantaran ke UAE dan GCC (rujuk pembayaran untuk destinasi). Kami tidak bergabung dengan pihak ketiga melainkan kami mengumumkan pengedar rasmi di saluran kami sendiri—jika ragu, belilah hanya melalui laman rasmi ini.',
        },
      ],
    },
    {
      name: 'Pesanan & penghantaran',
      questions: [
        {
          q: 'Berapa lamakah penghantaran?',
          a: 'UAE: 1–2 hari bekerja (ekspres) atau 2–3 (standard). GCC: 3–5 hari bekerja. Antarabangsa: 7–14 hari bergantung pada negara.',
        },
        {
          q: 'Adakah terdapat penghantaran percuma?',
          a: 'Ya. Penghantaran percuma UAE untuk pesanan melebihi 1,000 AED. Penghantaran percuma seluruh dunia untuk pesanan melebihi 500 EUR (atau setara bersih dalam mata wang pilihan anda). Di bawah ambang ini, caj penghantaran tetap dikenakan dan disahkan semasa pembayaran.',
        },
        {
          q: 'Adakah terdapat penjejakan?',
          a: 'Ya: penjejakan melalui e-mel (SMS jika tersedia) selepas penghantaran.',
        },
        {
          q: 'Adakah anda menghantar ke peringkat antarabangsa?',
          a: 'Ya, di mana tersedia. Duti dan cukai mungkin menjadi tanggungjawab penerima.',
        },
      ],
    },
    {
      name: 'Pemulangan & pertukaran',
      questions: [
        {
          q: 'Apakah dasar pemulangan?',
          a:
            'Jualan adalah muktamad; bayaran balik hanya dalam keadaan luar biasa. Pertukaran dalam 14 hari untuk barang yang belum dipakai, tidak rosak, dengan label. Jualan dan pesanan khas: muktamad.',
        },
        {
          q: 'Bagaimana untuk memulakan pemulangan?',
          a: 'E-mel returns@bintsaeed.com dengan nombor pesanan. Untuk pesanan UAE yang memenuhi syarat, label prabayar mungkin tersedia.',
        },
        {
          q: 'Adakah terdapat bayaran balik?',
          a: 'Tidak. Hanya pertukaran untuk item yang memenuhi syarat dalam 14 hari mengikut terma.',
        },
      ],
    },
    {
      name: 'Saiz & potongan',
      questions: [
        {
          q: 'Saiz manakah yang patut saya pilih?',
          a: 'Gunakan panduan saiz; antara dua saiz, selalunya saiz lebih besar untuk keselesaan.',
        },
        {
          q: 'Adakah saiz tersuai tersedia?',
          a: 'Mungkin—panjang/nota semasa pembayaran atau melalui khidmat pelanggan.',
        },
        {
          q: 'Alterasi selepas pembelian?',
          a: 'Mungkin dengan caj; hubungi dalam 7 hari selepas diterima.',
        },
      ],
    },
    {
      name: 'Pembayaran & keselamatan',
      questions: [
        {
          q: 'Kaedah pembayaran?',
          a: 'Visa, Mastercard, Amex, Apple Pay di mana aktif, pindahan bank untuk sesetengah pelanggan UAE.',
        },
        {
          q: 'Adakah pembayaran selamat?',
          a: 'Transaksi melalui Stripe (PCI-DSS). Kami tidak menyimpan nombor kad penuh.',
        },
        {
          q: 'Bayar ansuran?',
          a: 'Buat masa ini pembayaran penuh semasa pembayaran; pilihan lanjutan akan diumumkan di laman.',
        },
      ],
    },
  ],
  contact: {
    title: 'Masih ada soalan?',
    description: 'Pasukan kami sedia membantu',
  },
}
