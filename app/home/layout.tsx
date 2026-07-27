import type { ReactNode } from 'react'
import { sectionRobotsMetadata } from '@/lib/seo'

/** Public storefront home — always indexable when live. */
export const metadata = sectionRobotsMetadata

export default function HomeLayout({ children }: { children: ReactNode }) {
  return children
}
