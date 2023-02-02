/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
},
  env: {
    title: 'Tetflix',
    titleDescription: 'Stream everything with the most advanced technology',
  },
  output: 'standalone',
}

module.exports = nextConfig
