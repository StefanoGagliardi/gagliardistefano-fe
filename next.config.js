/**
 * NextJs Configuration file
 *
 * @author Stefano Gagliardi
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 */

const { i18n } = require('./next-i18next.config');

// Define languages for i18n
// Found recent article aobut this, try to follow: https://www.datocms.com/blog/how-to-build-a-multi-language-website-with-next-js-i18n
const locales = ['it', 'en'];
const defaultLocale = 'it';

// Check if development mode
const isDev = process.env.NODE_ENV !== 'development' ? false : true;

// Export config, this config is rewrapper by plugin "MinifyClass"
// Add Webpack rule for css classname and re-export all
module.exports = require('./next-plugins/minifyClass')('gs', {
  // i18n: {
  //   // providing the locales supported by your application
  //   locales: locales,
  //   //  default locale used when the non-locale paths are visited
  //   defaultLocale: defaultLocale,
  //   localeDetection: true,
  // },
  i18n: i18n,
  // This "experimental" features are also about Rust compiler
  experimental: {
    // With rust instead of babel we need to port babel's plugin to Rust
    // Fortunatly mostly used are yet ported on Rust by Vercel team
    removeConsole: !isDev, // Remove console.log in production
  },
  // By default Next remove last slash and redirecg
  trailingSlash: true,
  // Example of rewrites
  // NB: Probably this is DEPRECATED after i18n Integartion
  async rewrites() {
    const ret = [
      ...this.i18n.locales
        // .filter((locale) => locale !== defaultLocale)
        .map((locale) => [
          { source: `/${locale}{/}?`, destination: '/' },
          { source: `/${locale}/:path*`, destination: '/:path*' },
        ])
        .reduce((acc, cur) => [...acc, ...cur], []),
    ];
    console.log('RET: ', ret);
    return ret;
  },
  async redirects() {
    return [];
    // return [
    //   {
    //     source: `/`,
    //     destination: `/${this.i18n.defaultLocale}/`,
    //     permanent: true,
    //   },
    //   {
    //     source: `/:path*`,
    //     destination: `/${this.i18n.defaultLocale}/:path*`,
    //     permanent: true,
    //   },
    // ];
  },
});
