import Script from 'next/script'
import PreviewHome from './PreviewHomeClient'

const homeWebPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://bintsaeed.com/home#webpage',
  url: 'https://bintsaeed.com/home',
  name: 'Bint Saeed | Luxury Abaya House Abu Dhabi',
  isPartOf: { '@id': 'https://bintsaeed.com/#website' },
  about: { '@id': 'https://bintsaeed.com/#organization' },
  inLanguage: ['en', 'ar'],
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://bintsaeed.com/hero-bintsaeed.jpg',
  },
}

export default function HomePage() {
  return (
    <>
      <Script
        id="json-ld-home-webpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeWebPageJsonLd) }}
      />
      <PreviewHome />
    </>
  )
}
