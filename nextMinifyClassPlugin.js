const { join, relative } = require('path')
const generateName = require('css-class-generator')

const CSS_LOADER_MATCH = join('compiled', 'css-loader', 'cjs.js')

const names = {}
let index = 0

const getName = (key) =>
  Object.prototype.hasOwnProperty.call(names, key)
    ? names[key]
    : (names[key] = generateName(index++))

const getKey = ({ rootContext, resourcePath }, name) =>
  `${relative(rootContext, resourcePath).replace(/\\+/g, '/')}#${name}`

const getLocalIdent = (path, _, name) => {
  console.log("path", path);
  console.log("_",_);
  console.log("name", name);
  return  getName(getKey(path, name))
}

const webpack = (config, { dev }) => {
  // if (dev) return config
  for (const { oneOf } of config.module.rules)
    if (Array.isArray(oneOf))
      for (const { sideEffects, use } of oneOf)
        if (sideEffects === false && Array.isArray(use))
          for (const { loader, options } of use)
            if (
              loader.endsWith(CSS_LOADER_MATCH) &&
              typeof options.modules === 'object'
            )
              options.modules.getLocalIdent = getLocalIdent

  return config
}

module.exports = (nextConfig = {}) => {
  // console.log('nextConfig: ', nextConfig)
  return {
    ...nextConfig,
    webpack: (webpackConfig, webpackOptions) =>
      webpack(
        typeof nextConfig.webpack === 'function'
          ? nextConfig.webpack(webpackConfig, webpackOptions)
          : webpackConfig,
        webpackOptions
      ),
  }
}

// ...nextConfig,
// 	webpack: (webpackConfig, webpackOptions) =>
// 		webpack(
// 			typeof nextConfig.webpack === 'function'
// 				? nextConfig.webpack(webpackConfig, webpackOptions)
// 				: webpackConfig,
// 			webpackOptions
// 		)
