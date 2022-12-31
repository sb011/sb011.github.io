/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/insta-clone': { page: '/[id]' },
      '/bookmyseat': { page: '/[id]' },
      '/doctor-bot': { page: '/[id]' },
      '/nftmarketplace': { page: '/[id]' },
      '/csi-news': { page: '/[id]' },
      '/sh-filter': { page: '/[id]' },
    }
  },
}

module.exports = nextConfig
