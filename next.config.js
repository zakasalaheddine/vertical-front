/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['compare.zaka.pro']
  }
}

module.exports = nextConfig
