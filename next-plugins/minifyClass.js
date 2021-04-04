// Import third parts
const path = require('path')
const generateName = require('css-class-generator')

/**
 * Re-wrap next.config.js with custom webpack configuration
 */
module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // if (isDev) return config // Disable during dev
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    if (config.module.rules[1].oneOf) {
      for (let i = 0; i < config.module.rules[1].oneOf.length; i++) {
        if (config.module.rules[1].oneOf[i].sideEffects === false) {
          if (Array.isArray(config.module.rules[1].oneOf[i].use)) {
            for (
              let l = 0;
              l < config.module.rules[1].oneOf[i].use.length;
              l++
            ) {
              console.log("loader", loader);
              const { loader, options } = config.module.rules[1].oneOf[i].use[l]
              if (options.modules) {
                config.module.rules[1].oneOf[i].use[
                  l
                ].options.modules.getLocalIdent = getLocalIdentCustom
              }
            }
          }
        }
      }
    }
    return config
  },
})

/**
 * Original implementation of function - https://github.com/webpack-contrib/css-loader/blob/5e702e7d2e081b7f6d372f0c967fdfca6a40a584/src/utils.js#L37
 *
 * @param {*} context
 * @param {string} localIdentName - Type of parse - defualt: [hash:base64]
 * @param {string} localName - Myclassname
 * @param {*} options
 * @returns
 */
const getLocalIdentCustom = (context, localIdentName, localName, options) => {
  if (!options.context) {
    // eslint-disable-next-line no-param-reassign
    options.context = context.rootContext
  }

  const request = path
    .relative(options.context, context.resourcePath)
    .replace(/\\/g, '/')

  const newClassName = getMinifiedClassName(localName, request)

  return newClassName
}

// Store file name and his class
let classKey = {}
let classIndex = 0 // Index of classname for generation

const getMinifiedClassName = (className, path) => {
  // generate key of file: Parent folder firt letter and file name

  // NB: I can have two className with same name but in differente file
  // I generate uniqui key name based on [FirstLetter of Parent folder] + filname without .module.css
  const strings = path.split('/')
  const fileName = Array.isArray(strings)
    ? strings[strings.length - 1].toLowerCase()
    : path

  const parentFolder = Array.isArray(strings)
    ? strings[strings.length - 2].toLowerCase()[0]
    : ''

  const keyName = parentFolder + fileName.split('.')[0]
  classIndex++

  let retKey = classIndex

  // Find key
  if (classKey[keyName]) {
    if (classKey[keyName][className]) {
      // Exist filename
      // Get exist index
      retKey = classKey[keyName][className].index
    } else {
      // Exists file but not classname
      classKey[keyName][className] = { index: classIndex }
    }
  } else {
    // Store First key and first className
    classKey[keyName] = {}
    classKey[keyName][className] = { index: classIndex }
  }
  const newName = generateName(retKey)
  return newName
}
