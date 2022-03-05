/**
 * NextJs Configuration file
 *
 * @author Stefano Gagliardi
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 */

// Check if development mode
const isDev = process.env.NODE_ENV !== 'development' ? false : true;

// Anche se non traduco subito, imposto gli URL sotto /it/ cosi da non dover rifare redirect
const locales = ['it'];

// Export config, this config is rewrapper by plugin "MinifyClass"
// Add Webpack rule for css classname and re-export all
module.exports = require('./next-plugins/minifyClass')('gs', {
  // This "experimental" features are also about Rust compiler
  experimental: {},
  compiler: {
    // With rust instead of babel we need to port babel's plugin to Rust
    // Fortunatly mostly used are yet ported on Rust by Vercel team
    removeConsole: !isDev, // Remove console.log in production
  },
  i18n: {
    locales: ["default", "it"],
    defaultLocale: "default",
    localeDetection: false
  },
  // By default Next remove last slash and redirecg
  trailingSlash: true,
  // Example of rewrites
  // NB: Probably this is DEPRECATED after i18n Integartion
  async rewrites() {
    return [];
    const ret = [
      ...locales
        // .filter((locale) => locale !== defaultLocale)
        .map((locale) => [
          { source: `/${locale}{/}?`, destination: '/' },
          { source: `/${locale}/:path*`, destination: '/:path*' },
        ])
        .reduce((acc, cur) => [...acc, ...cur], []),
    ];
    return ret;
  },
  async redirects() {
   return [];
  },
});
