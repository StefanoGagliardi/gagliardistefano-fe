const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.BUNDLE_ANALYZE,
})

const { join, relative } = require('path')
const generateName = require('css-class-generator')

const locales = ['it']
const defaultLocale = 'it'

;(module.exports = bundleAnalyzer({
  // images: {
  //   domains: ['cdn11.bigcommerce.com'],
  // },
  i18n: {
    locales: ['it'],
    defaultLocale: 'it',
  },
  // Example of rewrites
  async rewrites() {
    const ret = [
      ...this.i18n.locales
        .filter((locale) => locale !== defaultLocale)
        .map((locale) => [
          { source: `/${locale}{/}?`, destination: '/' },
          { source: `/${locale}/:path*`, destination: '/:path*' },
        ])
        .reduce((acc, cur) => [...acc, ...cur], []),
    ]
    return ret
  },
  async redirects() {
    return [
      {
        source: `/${defaultLocale}{/}?`,
        destination: '/',
        permanent: true,
      },
      {
        source: `/${defaultLocale}/:path*`,
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
})),
  (module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // if (dev) {
      //   return config
      // }

        
      return config
    },
  })
