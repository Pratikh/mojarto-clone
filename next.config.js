/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GREETING: process.env.HOST,
  },
  images: {
    domains: ["arts.mojarto.com"],
  },
};

module.exports = nextConfig;
