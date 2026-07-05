/** Old `/shop/[slug]` → current catalog slug (301). Keep in sync with `lib/products/legacyShopSlugRedirects.ts`. */
const LEGACY_SHOP_SLUG_REDIRECTS = [
  ['khous-jacket-abaya', 'knightsbridge-abaya-jacket'],
  ['royal-talli-abaya', 'covent-garden-abaya'],
  ['natural-stone-signature-abaya', 'marylebone-abaya'],
  ['parklane-abaya', 'park-lane-abaya'],
  ['royal-v-neck-kaftan', 'mayfair-kaftan'],
  ['royal-boatneck-kaftan', 'nothing-hill-kaftan'],
  ['khous-signature-midi-dress', 'knightsbridge-dress'],
  ['talli-signature-dress', 'hampstead-dress'],
  ['khous-signature-classic-set', 'covent-garden-signature-set'],
  ['khous-signature-classic-jacket', 'covent-garden-signature-set'],
  ['talli-signature-set', 'soho-set'],
  ['khous-signature-abaya', 'belgravia-abaya'],
  ['khous-structured-blazer-abaya', 'kensington-abaya'],
  ['signature-long-dress', 'covent-garden-long-dress'],
]

const { productRedirects, categoryRedirects } = require('./lib/accessories/legacyAccessoryRedirects.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  transpilePackages: ['swiper'],
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp'],
  },
  async headers() {
    const base = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(self)',
      },
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
    ]
    if (process.env.NODE_ENV === 'production') {
      base.push({
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains',
      })
    }
    /** Link previews (WhatsApp, etc.) re-fetch images; public cache helps rescrapes succeed quickly. */
    const shareImageCache = [
      { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
    ]
    /** Keep brand marks out of Google Images; product/campaign share art stays indexable. */
    const noImageIndex = [{ key: 'X-Robots-Tag', value: 'noindex' }]
    const brandAssetNoIndex = [
      '/og-image.png',
      '/gold logo.png',
      '/logo-bintsaeed.svg',
      '/flavicon.png',
      '/opengraph-image.jpg',
      '/twitter-image.jpg',
      '/opengraph-image',
      '/twitter-image',
    ].map((source) => ({
      source,
      headers: [...base, ...noImageIndex],
    }))
    return [
      { source: '/og-share.jpg', headers: [...base, ...shareImageCache] },
      ...brandAssetNoIndex,
      { source: '/:path*', headers: base },
    ]
  },
  async rewrites() {
    return [{ source: '/sitemap.xml', destination: '/sitemap' }]
  },
  async redirects() {
    return [
      // Apex → canonical host (SEO + IndexNow host alignment). Preserves path + query string.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'bintsaeed.com' }],
        destination: 'https://www.bintsaeed.com/:path*',
        permanent: true,
      },
      { source: '/charms', destination: '/strands', permanent: true },
      { source: '/charms/:path*', destination: '/strands/:path*', permanent: true },
      { source: '/strands/shop', destination: '/accessories?type=signature-strands', permanent: true },
      ...productRedirects.map(([from, to]) => ({
        source: `/accessories/${from}`,
        destination: `/accessories/${to}`,
        permanent: true,
      })),
      ...categoryRedirects.map(([from, to]) => ({
        source: '/accessories',
        has: [{ type: 'query', key: 'type', value: from }],
        destination: `/accessories?type=${to}`,
        permanent: true,
      })),
      // Legacy abaya-charm product shots → strands folder (post-rename deploy safety)
      {
        source: '/Webshop%20pictures/accessoiries/abaya%20charms/bint-saeed-tigereye-abaya-charm.PNG',
        destination:
          '/Webshop%20pictures/accessoiries/strands/bint-saeed-tiger-eye-natural-stone-strand-front.webp',
        permanent: true,
      },
      {
        source: '/Webshop%20pictures/accessoiries/abaya%20charms/bint-saeed-aventurine-abaya-charm.PNG',
        destination:
          '/Webshop%20pictures/accessoiries/strands/bint-saeed-aventurine-natural-stone-strand-front.webp',
        permanent: true,
      },
      {
        source: '/Webshop%20pictures/accessoiries/abaya%20charms/bint-saeed-onyx-abaya-charm.PNG',
        destination:
          '/Webshop%20pictures/accessoiries/strands/bint-saeed-onyx-natural-stone-strand-front.webp',
        permanent: true,
      },
      {
        source: '/Webshop%20pictures/accessoiries/abaya%20charms/bint-saeed-orange-colored-jade-abaya-charm.PNG',
        destination:
          '/Webshop%20pictures/accessoiries/strands/bint-saeed-orange-jade-natural-stone-strand-front.webp',
        permanent: true,
      },
      {
        source: '/Webshop%20pictures/accessoiries/abaya%20charms/bint-saeed-amathys-abaya-charm.PNG',
        destination:
          '/Webshop%20pictures/accessoiries/strands/bint-saeed-amethyst-hearts-natural-stone-strand-front.webp',
        permanent: true,
      },
      {
        source: '/Webshop%20pictures/accessoiries/abaya%20charms/bint-saeed-green-jade-abaya-charm.PNG',
        destination:
          '/Webshop%20pictures/accessoiries/strands/bint-saeed-jade-hearts-natural-stone-strand-front.webp',
        permanent: true,
      },
      // Legacy strand PNG filenames → webp (post image refresh)
      {
        source: '/Webshop%20pictures/accessoiries/strands/bint-saeed-onyx-abaya-charm.PNG',
        destination:
          '/Webshop%20pictures/accessoiries/strands/bint-saeed-onyx-natural-stone-strand-front.webp',
        permanent: true,
      },
      {
        source: '/Webshop%20pictures/accessoiries/strands/bint-saeed-orange-colored-jade-abaya-charm.PNG',
        destination:
          '/Webshop%20pictures/accessoiries/strands/bint-saeed-orange-jade-natural-stone-strand-front.webp',
        permanent: true,
      },
      {
        source: '/Webshop%20pictures/accessoiries/strands/bint-saeed-amathys-abaya-charm.PNG',
        destination:
          '/Webshop%20pictures/accessoiries/strands/bint-saeed-amethyst-hearts-natural-stone-strand-front.webp',
        permanent: true,
      },
      {
        source: '/Webshop%20pictures/accessoiries/strands/bint-saeed-green-jade-abaya-charm.PNG',
        destination:
          '/Webshop%20pictures/accessoiries/strands/bint-saeed-jade-hearts-natural-stone-strand-front.webp',
        permanent: true,
      },
      {
        source: '/Webshop%20pictures/accessoiries/bag%20charm/9D8CE389-54D5-4235-B71B-A9BB92AC97EA.PNG',
        destination: '/Webshop%20pictures/accessoiries/bag%20charm/bint-saeed-bag-charm.PNG',
        permanent: true,
      },
      { source: '/preview', destination: '/home', permanent: true },
      { source: '/preview/:path*', destination: '/home/:path*', permanent: true },
      { source: '/dashboard', destination: '/admin/dashboard', permanent: false },
      { source: '/accessoiries', destination: '/accessories', permanent: true },
      { source: '/accessoiries/:path*', destination: '/accessories/:path*', permanent: true },
      { source: '/collections', destination: '/shop', permanent: true },
      { source: '/collections/:path*', destination: '/shop/:path*', permanent: true },
      ...LEGACY_SHOP_SLUG_REDIRECTS.map(([from, to]) => ({
        source: `/shop/${from}`,
        destination: `/shop/${to}`,
        permanent: true,
      })),
      { source: '/heritage/sadu', destination: '/heritage/khous', permanent: true },
      // Mega menu collection nav — legacy PNG paths → webp
      ...[
        'bint-saeed-all-strands-collection-nav',
        'bint-saeed-signature-strands-collection-nav',
        'bint-saeed-luxury-abayas-collection-nav',
        'bint-saeed-luxury-sets-collection-nav',
        'bint-saeed-our-story-collection-nav',
        'bint-saeed-the-codes-collection-nav',
        'bint-saeed-hidden-pocket-collection-nav',
        'bint-saeed-name-labels-collection-nav',
        'bint-saeed-necklaces-collection-nav',
      ].map((base) => ({
        source: `/collection-section/${base}.png`,
        destination: `/collection-section/${base}.webp`,
        permanent: true,
      })),
      // Social links → always coming soon page (/)
      { source: '/facebook', destination: '/?utm_source=facebook&utm_medium=social&utm_campaign=bio', permanent: true },
      { source: '/instgram', destination: '/?utm_source=instagram&utm_medium=social&utm_campaign=bio', permanent: true },
      { source: '/instagram', destination: '/?utm_source=instagram&utm_medium=social&utm_campaign=bio', permanent: true },
      { source: '/x', destination: '/?utm_source=x&utm_medium=social&utm_campaign=bio', permanent: true },
      { source: '/pinterest', destination: '/?utm_source=pinterest&utm_medium=social&utm_campaign=bio', permanent: true },
      { source: '/tiktok', destination: '/?utm_source=tiktok&utm_medium=social&utm_campaign=bio', permanent: true },
      { source: '/snapchat', destination: '/?utm_source=snapchat&utm_medium=social&utm_campaign=bio', permanent: true },
    ]
  },
}

module.exports = nextConfig
