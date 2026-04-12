import { noIndexMetadata } from '@/lib/seo'

export const metadata = noIndexMetadata

/** Ensures shop always gets a fresh render with search params (avoids stale static shell without styles/JS). */
export const dynamic = 'force-dynamic'

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
