// Import third parts
const { join, relative } = require('path')
const generateName = require('css-class-generator')

/**
 * Re-wrap next.config.js with custom webpack configuration
 */
module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    console.log('MinifyClass - isDev: ', isDev)
    console.log('minifyClass - process.env: ', process.env)
  },
})

/**
 
  (module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // if (dev) {
      //   return config
      // }

      // console.log("optimization", config.optimization);

      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

      const CSS_LOADER_MATCH = join('compiled', 'css-loader', 'cjs.js')

      // console.log('config webpack', config)
      // console.log('config.module.rules', config.module.rules.len gth)
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

                  // name: current class name
                  // path:
                  const getLocalIdent = (path, _, name) => {
                    // console.log('name: ', name, ' path: ', path)
                    return getName(getKey(path, name))
                  }

                  options.modules.getLocalIdent = getLocalIdent

                  // (options.modules.getLocalIdent = (
                  //   co ntext,
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

 */
