/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // App directory is stable in Next.js 14, no experimental flag needed
}

module.exports = nextConfig
