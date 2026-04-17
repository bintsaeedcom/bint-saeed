import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Access restricted | Bint Saeed',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function HomeBlockedLayout({ children }: { children: React.ReactNode }) {
  return children
}
