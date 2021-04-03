// Import third parts
const { join, relative } = require('path')
const path = require('path')
const generateName = require('css-class-generator')
const loaderUtils = require('loader-utils')

/**
 * Re-wrap next.config.js with custom webpack configuration
 */
module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (isDev) return config // Disable during devoloping
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    // console.log("config.module.rules[i].oneOf", config.module.rules[0]);
    if (config.module.rules[1].oneOf) {
      for (let i = 0; i < config.module.rules[1].oneOf.length; i++) {
        if (config.module.rules[1].oneOf[i].sideEffects === false) {
          if (Array.isArray(config.module.rules[1].oneOf[i].use)) {
            for (
              let l = 0;
              l < config.module.rules[1].oneOf[i].use.length;
              l++
            ) {
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
 * Funzione originale - https://github.com/webpack-contrib/css-loader/blob/5e702e7d2e081b7f6d372f0c967fdfca6a40a584/src/utils.js#L37
 *
 * @param {*} context
 * @param {string} localIdentName - Type of parse [hash:base64]
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

  // // LINK as test
  // if (localName === 'link') {
  //   console.log('localName', localName)
  //   console.log('request', request)
  //   console.log('newClassName', newClassName)
  // }

  // Posso usare il nome generato dalla funzione di default come chiave univoca e generare sulla base di quella la classe minificaa (lettera)

  return newClassName
}

let classKey = {}
let classIndex = 0
const getMinifiedClassName = (className, path) => {
  // generate key of file: Parent folder firt letter and file name
  const strings = path.split('/')
  const fileName = Array.isArray(strings)
    ? strings[strings.length - 1].toLowerCase()
    : path

  const parentFolder = Array.isArray(strings)
    ? strings[strings.length - 2].toLowerCase()[0]
    : ''

  const keyName = parentFolder + fileName.split('.')[0]

  // console.log('classKey', classKey)

  classIndex++

  let retKey = classIndex

  // Find key
  if (classKey[keyName]) {
    if (classKey[keyName][className]) {
      retKey = classKey[keyName][className].index
    } else {
      classKey[keyName][className] = { index: classIndex }
    }
  } else {
    // Store ket and first class
    classKey[keyName] = {}
    classKey[keyName][className] = { index: classIndex }
  }

  // console.log("classKey", classKey);

  const newName = generateName(retKey)
  return newName
}
