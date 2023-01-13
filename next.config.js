/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tefal.akinoncdn.com'],
  },
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
  },
}

module.exports = nextConfig
