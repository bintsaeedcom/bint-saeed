import type { Metadata } from 'next'

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')
const KHOUS_HERITAGE_IMAGE = `${SITE}/${encodeURIComponent('The Codes Page')}/${encodeURIComponent('khous.jpg')}`

export const metadata: Metadata = {
  title: 'The Codes | Bint Saeed',
  description:
    'The house codes — Al Talli, Khous, Al Ain Rosette, Knotted Lines, and the monogram — told in one continuous story.',
  openGraph: {
    title: 'The Codes | Bint Saeed',
    description:
      'Emirati heritage design codes at Bint Saeed Abu Dhabi — Al Talli, Khous weaving, and the house monogram.',
    images: [
      {
        url: KHOUS_HERITAGE_IMAGE,
        alt: 'Khous weaving heritage code — Bint Saeed Abu Dhabi, UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Codes | Bint Saeed',
    description:
      'Emirati heritage design codes at Bint Saeed Abu Dhabi — Al Talli, Khous weaving, and the house monogram.',
    images: [KHOUS_HERITAGE_IMAGE],
  },
}

export default function TheCodesLayout({ children }: { children: React.ReactNode }) {
  return children
}
