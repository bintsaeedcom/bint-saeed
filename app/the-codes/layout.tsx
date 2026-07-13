import type { Metadata } from 'next'
import {
  absoluteCodesPageImageUrl,
  CODES_HERO,
  CODES_IMAGE_FILES,
} from '@/lib/the-codes/codesPageContent'

const KHOUS_HERITAGE_IMAGE = absoluteCodesPageImageUrl(CODES_IMAGE_FILES.khous)

export const metadata: Metadata = {
  title: 'Bint Saeed | The Codes',
  description:
    'The house codes — Al Talli, Al Khous, Al Ain Rosette, Knotted Lines, and the monogram — told in one continuous story.',
  openGraph: {
    title: 'Bint Saeed | The Codes',
    description:
      'Emirati heritage design codes at Bint Saeed Abu Dhabi — Al Talli, Al Khous weaving, and the house monogram.',
    images: [
      {
        url: KHOUS_HERITAGE_IMAGE,
        alt: CODES_HERO.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bint Saeed | The Codes',
    description:
      'Emirati heritage design codes at Bint Saeed Abu Dhabi — Al Talli, Al Khous weaving, and the house monogram.',
    images: [KHOUS_HERITAGE_IMAGE],
  },
}

export default function TheCodesLayout({ children }: { children: React.ReactNode }) {
  return children
}
