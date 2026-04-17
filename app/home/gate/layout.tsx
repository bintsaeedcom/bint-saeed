import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Access verification | Bint Saeed',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function HomeGateLayout({ children }: { children: React.ReactNode }) {
  return children
}
