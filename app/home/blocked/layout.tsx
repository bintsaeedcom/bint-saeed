import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bint Saeed | Access restricted',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function HomeBlockedLayout({ children }: { children: React.ReactNode }) {
  return children
}
