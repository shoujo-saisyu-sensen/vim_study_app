/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // basePathとassetPrefixをACTIONsの場合に指定する
  basePath: process.env.GITHUB_ACTIONS && '/vim_study_app',
  assetPrefix: process.env.GITHUB_PAGES && '/vim_study_app',
  trailingSlash: true,
}

module.exports = nextConfig
