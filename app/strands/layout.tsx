import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { sectionRobotsMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...sectionRobotsMetadata,
  title: { absolute: 'Bint Saeed | Natural Stone Abaya Strands — Interchangeable Cuff Detail' },
  description:
    'Shop natural stone abaya strands from Bint Saeed, Abu Dhabi. Interchangeable cuff details for the Marylebone Abaya — onyx, jade, amethyst, aventurine and more. From AED 400.',
}

export default function StrandsLayout({ children }: { children: ReactNode }) {
  return children
}
