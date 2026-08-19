import { sectionRobotsMetadata } from '@/lib/seo'
import Script from 'next/script'

export const metadata = sectionRobotsMetadata

const HOW_TO_MEASURE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How To Measure for Bint Saeed Abayas, Kaftans & Dresses',
  description:
    'Seven body measurements to find your ideal size in Bint Saeed luxury abayas, kaftans, and eveningwear.',
  totalTime: 'PT5M',
  tool: [
    { '@type': 'HowToTool', name: 'Flexible measuring tape' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Sleeve',
      text: 'Measure from the top shoulder point down to the wrist.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Bust',
      text: 'Measure the maximum circumference on the chest at the highest point.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Under Bust',
      text: 'Measure the body circumference directly under the bust.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Waist',
      text: 'Measure the circumference of the waistline at the smallest point.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Hips',
      text: 'Measure the circumference around the hip level where the hip is the widest.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Leg',
      text: 'Measure the outside leg length from the waist to the floor.',
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: 'Full Length',
      text: 'Measure from the top shoulder point to the floor.',
    },
  ],
  datePublished: '2026-04-22',
  dateModified: new Date().toISOString().slice(0, 10),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="size-guide-howto-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOW_TO_MEASURE_JSON_LD) }}
      />
      {children}
    </>
  )
}
