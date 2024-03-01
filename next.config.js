/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  // !important for testing set to true
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
  // i18n,
};

module.exports = nextConfig;
