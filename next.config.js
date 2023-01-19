/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  images: {
    domains: ['tefal.akinoncdn.com','samsung-akinon.b-cdn.net'],
  },
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
  },
}

module.exports = nextConfig
