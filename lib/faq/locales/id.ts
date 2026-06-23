import type { FaqBundle } from '@/lib/faq/types'

export const faqId: FaqBundle = {
  title: 'Pertanyaan yang Sering Diajukan',
  subtitle: 'Temukan jawaban untuk pertanyaan umum',
  categories: [
    {
      name: 'Tentang Bint Saeed',
      questions: [
        {
          q: 'Apa itu Bint Saeed?',
          a:
            'Bint Saeed adalah rumah abaya mewah yang berbasis di Abu Dhabi, Uni Emirat Arab. Rumah ini berfokus pada desain abaya yang dibentuk oleh kode budaya Emirati, sambil menciptakan perhiasan dan produk lifestyle yang melengkapi cara hidup kontemporer global.',
        },
        {
          q: 'Di mana Bint Saeed berbasis?',
          a:
            'Bint Saeed berbasis di Abu Dhabi, Uni Emirat Arab. Kami melayani klien di seluruh UEA dan GCC yang lebih luas, dan mengirim secara internasional di mana tersedia—konfirmasikan destinasi saat checkout.',
        },
        {
          q: 'Apa yang diciptakan Bint Saeed?',
          a:
            'Abaya yang diinformasikan oleh kode desain Emirati—termasuk kerajinan Al Talli dan logika struktural tenun Khous—bersama perhiasan dan objek kurasi yang dirancang untuk melengkapi gaya hidup wanita modern.',
        },
        {
          q: 'Saya sering menemukan abaya melalui department store, multi-brand retailer mewah, atau marketplace online besar—di mana saya bisa membeli Bint Saeed secara resmi?',
          a:
            'Bint Saeed adalah merek abaya independen berbasis warisan UEA. Belanja koleksi resmi di bintsaeed.com dengan pengiriman ke UEA dan GCC (lihat checkout untuk destinasi). Kami tidak berafiliasi dengan pihak ketiga kecuali kami mengumumkan stockist resmi di saluran kami sendiri—jika ragu, belilah hanya melalui situs resmi ini.',
        },
      ],
    },
    {
      name: 'Pesanan & pengiriman',
      questions: [
        {
          q: 'Berapa lama pengiriman?',
          a: 'UEA: 1–2 hari kerja (ekspres) atau 2–3 (standar). GCC: 3–5 hari kerja. Internasional: 7–14 hari tergantung negara.',
        },
        {
          q: 'Apakah ada pengiriman gratis?',
          a: 'Ya, untuk pesanan di atas 1000 AED di UEA.',
        },
        {
          q: 'Apakah ada pelacakan?',
          a: 'Ya: pelacakan melalui email (SMS jika tersedia) setelah pengiriman.',
        },
        {
          q: 'Apakah mengirim secara internasional?',
          a: 'Ya, di mana tersedia. Bea cukai dan pajak dapat menjadi tanggung jawab penerima.',
        },
      ],
    },
    {
      name: 'Pengembalian & penukaran',
      questions: [
        {
          q: 'Kebijakan pengembalian?',
          a:
            'Penjualan bersifat final; pengembalian dana hanya dalam keadaan luar biasa. Penukaran dalam 14 hari untuk barang yang belum dipakai, tidak rusak, dengan label. Sale dan pesanan khusus: final.',
        },
        {
          q: 'Bagaimana memulai pengembalian?',
          a: 'Email returns@bintsaeed.com dengan nomor pesanan. Unt pesanan UEA yang memenuhi syarat, label prabayar mungkin tersedia.',
        },
        {
          q: 'Apakah ada pengembalian dana?',
          a: 'Tidak. Hanya penukaran untuk item yang memenuhi syarat dalam 14 hari sesuai ketentuan.',
        },
      ],
    },
    {
      name: 'Ukuran & pas',
      questions: [
        {
          q: 'Ukuran mana yang harus saya pilih?',
          a: 'Gunakan panduan ukuran; antara dua ukuran, sering kali satu ukuran lebih besar untuk kenyamanan.',
        },
        {
          q: 'Apakah tersedia ukuran khusus?',
          a: 'Mungkin—panjang/catatan saat checkout atau melalui layanan pelanggan.',
        },
        {
          q: 'Penyesuaian setelah pembelian?',
          a: 'Mungkin dengan biaya; hubungi dalam 7 hari setelah diterima.',
        },
      ],
    },
    {
      name: 'Pembayaran & keamanan',
      questions: [
        {
          q: 'Metode pembayaran?',
          a: 'Visa, Mastercard, Amex, Apple Pay di mana aktif, transfer bank untuk beberapa klien UEA.',
        },
        {
          q: 'Apakah pembayaran aman?',
          a: 'Transaksi melalui Stripe (PCI-DSS). Kami tidak menyimpan nomor kartu lengkap.',
        },
        {
          q: 'Bayar cicilan?',
          a: 'Saat ini pembayaran penuh saat checkout; opsi lanjutan akan diumumkan di situs.',
        },
      ],
    },
  ],
  contact: {
    title: 'Masih ada pertanyaan?',
    description: 'Tim kami siap membantu',
  },
}
