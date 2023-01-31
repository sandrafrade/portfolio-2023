const withTM = require('next-transpile-modules')(['three'])

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
        localeDetection: false,
    },
}

module.exports = withTM(nextConfig)
