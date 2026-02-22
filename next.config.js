/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  async redirects() {
    return [
      { source: '/accessoiries', destination: '/accessories', permanent: true },
      { source: '/accessoiries/:path*', destination: '/accessories/:path*', permanent: true },
      { source: '/collections', destination: '/shop', permanent: true },
      { source: '/collections/:path*', destination: '/shop/:path*', permanent: true },
    ]
  },
}

module.exports = nextConfig
