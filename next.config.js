/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS && '/repository_name',
  assetPrefix: process.env.GITHUB_PAGES && '/repository-name',
  trailingSlash: true,
}

module.exports = nextConfig
