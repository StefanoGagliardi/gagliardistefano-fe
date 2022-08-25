/**
 * NextJs Configuration file
 *
 * @author Stefano Gagliardi
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 *
 * Styled-component with SWC - https://github.com/vercel/next.js/tree/canary/examples/with-styled-components
 */
const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
// const withMinifyClassName = require('./next-plugins/minify-class-name.js');
// const ovverideGetLocalIdent = require('./next-plugins/ovverideGetLocalIdent.js');

// const withTM = require('next-transpile-modules')(['react-hook-mousetrap']);

/**
 * Import plugin
 */
// process.env.ANALYZE === 'true';
// console.log('process.env.ANALYZE: ', process.env.ANALYZE);
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false, //process.env.ANALYZE === 'true',
});

// Check if development mode
const isDev = process.env.NODE_ENV !== 'development' ? false : true;

// Define className minification in prod
const MINIFY_CSS_MODULE_CLASSNAME =
  process.env.NODE_ENV !== 'development' ? true : true;

// Anche se non traduco subito, imposto gli URL sotto /it/ cosi da non dover rifare redirect
const locales = ['it'];

// NextJs custom configuration to pass to plugin's
const nextConfig = {
  // This "experimental" features are also about Rust compiler
  experimental: {},
  compiler: {
    // With rust instead of babel we need to port babel's plugin to Rust
    // Fortunatly mostly used are yet ported on Rust by Vercel team
    removeConsole: !isDev, // Remove console.log in production
    styledComponents: true, // Both SWC and Babel support option for "Styled component" for SSR instead use _document.tsx
  },
  i18n: {
    locales: ['default', 'it'],
    defaultLocale: 'default',
    localeDetection: false,
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

  /**
   * Set Env variable
   */
  env: {
    HEROKU: true,
  },

  // Set svg loader as component via Webpack
  // SVGR provides an official webpack.js loader to import SVG as React components.
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Set loader for .sg file so i can load like file as a React Component
    if (config.module.rules) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
    }

    // if (MINIFY_CSS_MODULE_CLASSNAME) {
    //   config = ovverideGetLocalIdent(config, '');
    // }

    return config;
  },
};

/**
 * Export configuration with plugin re-wrap
 */
module.exports = nextConfig;

/**
 * Base example with bundle analyzer
 */
// module.exports = withBundleAnalyzer(nextConfig);

/**
 * Plugin version for direct use (just one plugin)
 * No senso fro one plugin add another (next-compose-plugins) for handle "more plugins"
 */
// module.exports = require('./next-plugins/minify-class-name.js')(
//   nextConfig
// );

/**
 * Plugin version for "withPlugins\"
 */
// module.exports = withPlugins(
//   [[withMinifyClassName], [withBundleAnalyzer]],
//   nextConfig
// );

// ===================== BROKEN WITH LATEST VERSIONE OF NEXTJS ==============================
// ==========================================================================================
// Export config after plugin parse,
// "withPlugins" is a package to avoid plugin chain
// module.exports = withPlugins(
//   [
//     [
//       sass,
//       {
//         cssModules: true,
//         cssxLoaderOptions: {
//           localIdentName: 'sg_[path]___[local]___[hash:base64:5]',
//         },
//         [PHASE_PRODUCTION_BUILD]: {
//           cssLoaderOptions: {
//             localIdentName: 'sg_[hash:base64:8]',
//           },
//         },
//       },
//     ],
//     [withBundleAnalyzer],
//   ],
//   nextConfig
// );
