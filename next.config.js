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
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

      const CSS_LOADER_MATCH = join('compiled', 'css-loader', 'cjs.js')

      // console.log('config webpack', config)
      // console.log('config.module.rules', config.module.rules)
      for (const { oneOf } of config.module.rules) {
        if (Array.isArray(oneOf)) {
          for (const { sideEffects, use } of oneOf) {
            if (sideEffects === false && Array.isArray(use)) {
              for (const { loader, options } of use) {
                if (
                  loader.endsWith(CSS_LOADER_MATCH) &&
                  typeof options.modules === 'object'
                ) {
                  const names = {}
                  let index = 0

                  const getName = (key) =>
                    Object.prototype.hasOwnProperty.call(names, key)
                      ? names[key]
                      : (names[key] = generateName(index++))

                  const getKey = ({ rootContext, resourcePath }, name) =>
                    `${relative(rootContext, resourcePath).replace(
                      /\\+/g,
                      '/'
                    )}#${name}`

                  const getLocalIdent = (path, _, name) => {
                    return getName(getKey(path, name))
                  }

                  options.modules.getLocalIdent = getLocalIdent

                  // (options.modules.getLocalIdent = (
                  //   context,
                  //   localIdentName,
                  //   localName,
                  //   options
                  // ) => {
                  //   localIdentName = generateName(index++)
                  //   console.log('localName', localName) // class name;
                  //   return localIdentName
                  // })

                }
              }
            }
          }
        }
      }
      // Important: return the modified config
      return config
    },
  })

// // module.exports = bundleAnalyzer({
// //   // images: {
// //   //   domains: ['cdn11.bigcommerce.com'],
// //   // },
// //   i18n: {
// //     locales: ['it'],
// //     defaultLocale: 'it',
// //   },
// //   // Example of rewrites
// //   async rewrites() {
// //     const ret = [
// //       ...this.i18n.locales
// //         .filter((locale) => locale !== defaultLocale)
// //         .map((locale) => [
// //           { source: `/${locale}{/}?`, destination: '/' },
// //           { source: `/${locale}/:path*`, destination: '/:path*' },
// //         ])
// //         .reduce((acc, cur) => [...acc, ...cur], []),
// //     ]
// //     return ret
// //   },
// //   async redirects() {
// //     return [
// //       {
// //         source: `/${defaultLocale}{/}?`,
// //         destination: '/',
// //         permanent: true,
// //       },
// //       {
// //         source: `/${defaultLocale}/:path*`,
// //         destination: '/:path*',
// //         permanent: true,
// //       },
// //     ]
// //   },
// // })
