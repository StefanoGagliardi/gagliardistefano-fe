/**
 * NextJs plugin for minify css class nae of css module
 * Compatible with latest versione of NextJs and Webpack5
 *
 * @author Stefano Gagliardi
 */
const PLUGIN_KEY = 'minifyClassName';

/**
 *
 * @param {NextConfig & PluginConfig} nextConfig
 * @returns
 */
module.exports = (nextConfig = {}, developmentPhase) => {
  // Retrive Prefix if is set
  let classnamePrefix = '';
  if (
    nextConfig?.pluginConfig &&
    typeof nextConfig?.pluginConfig[PLUGIN_KEY] !== 'undefined' &&
    nextConfig?.pluginConfig[PLUGIN_KEY]?.prefix &&
    typeof nextConfig?.pluginConfig[PLUGIN_KEY]?.prefix === 'string'
  ) {
    classnamePrefix = nextConfig?.pluginConfig[PLUGIN_KEY]?.prefix;
  }

  console.log('====================================================');
  console.log('====================================================');
  console.log('================== RUNNING PLUGIN ======================');
  console.log('nextConfig?.webpack: ', nextConfig?.webpack);
  return {
    ...nextConfig,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // console.log('===== WEBOPACK CONFIG CALBACK =======: ', config);

      return config;
    },
  };
};
