import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Codes | Bint Saeed',
  description:
    'The house codes — Al Talli, Khous, Al Quaa Rosette, knotted lines of lineage, and the monogram — told in one continuous story.',
}

export default function TheCodesLayout({ children }: { children: React.ReactNode }) {
  return children
}
