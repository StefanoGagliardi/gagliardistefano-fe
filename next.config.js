const locales = ['it']
const defaultLocale = 'it'

module.exports = require('./next-plugins/minifyClass')({
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
})
