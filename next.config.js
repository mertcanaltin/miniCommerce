/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['test.js'],
  images: {
    domains: ['tefal.akinoncdn.com','samsung-akinon.b-cdn.net'],
  },
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
  },
}

module.exports = nextConfig
