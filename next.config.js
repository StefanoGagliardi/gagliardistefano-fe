/**
 * NextJs Configuration file
 *
 * @author Stefano Gagliardi
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 *
 * Styled-component with SWC - https://github.com/vercel/next.js/tree/canary/examples/with-styled-components
 */

// Check if development mode
const isDev = process.env.NODE_ENV !== 'development' ? false : true;

// Anche se non traduco subito, imposto gli URL sotto /it/ cosi da non dover rifare redirect
const locales = ['it'];

// Export config, this config is rewrapper by custom plugin "MinifyClass"
// Add Webpack rule for css classname and re-export all
module.exports = require('./next-plugins/minifyClass')(
  // Auto invoke plugin before export nextJs Config
  'gs', // Custom prefix for className minifaciton
  [
    // Array with a list of custom/additional rules for Webpack configuration, due this beacuase classname plugin modify Webapacks
    // Example is SVG loader
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
  ],
  {
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
  }
);
