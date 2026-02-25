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
