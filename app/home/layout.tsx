import type { ReactNode } from 'react'
import { sectionRobotsMetadata } from '@/lib/seo'

/**
 * Public storefront home — indexable when live.
 * Document title / description come from root `buildRootMetadata` (locale-aware, brand-first).
 */
export const metadata = sectionRobotsMetadata

export default function HomeLayout({ children }: { children: ReactNode }) {
  return children
}
