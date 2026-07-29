import { utilityNoIndexMetadata } from '@/lib/seo'

/** Heritage hub + child pages are unfinished — keep out of Google until approved. */
export const metadata = utilityNoIndexMetadata

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
