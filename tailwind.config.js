/**
 * Import tailwind plugin: custom callback for class generation, typography and lineclamp
 */
const plugin = require('tailwindcss/plugin');
const typographyPlugin = require('@tailwindcss/typography');
const lineClampPlugin = require('@tailwindcss/line-clamp');

module.exports = {
  darkMode: 'class',
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}', // Pages contain own style
    './src/components/**/*.{js,ts,jsx,tsx}', // Site Components
    './src/services/forms/**/*.{js,ts,jsx,tsx}', // ./services/forms contain views for forms
  ],
  safelist: ['font-avenir', 'lasd'],
  theme: {
    // Font definition: size and line-height.
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      lgm:   ['24px', '32px'],
      xl: ['40px', '48px'],
    },
    // Define outside "extend" for override default font-family
    fontFamily: {
      avenir: ['avenir next', 'sans-serif'],
    },
    // NB: Must match font-wieght defined in src/assets/avenir.css
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 800,
    },
    extend: {
      maxWidth: {
        '8xl': '1600px',
      },
      colors: {
        ctaStart: 'var(--color-bg-cta-start)',
        ctaStop: 'var(--color-bg-cta-stop)',
        green: {
          light: '--color-green-light',
          DEFAULT: '--color-green-dark',
          dark: '--color-green-dark',
        },
        logoBlue: '#145fb4',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        service: 'var(--color-bg-service)',
      },
      gradientColorStops: {
        ctaStop: 'var(--color-bg-cta-stop)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        dark: 'var(--color-text-dark)',
      },
      textOpacity: {
        20: '0.2',
        80: '0  .8',
      },
      spacing: {
        header: '80px',
      },
      height: {
        header: '80px',
      },
      margin: {
        30: '30px',
        50: '50px',
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '4xl': '1600px',
      // => @media (min-width: 1800px) { ... }

      // '8xl': '1920px',
       // => @media (min-width: 1920px) { ... }
    },
    borderWidth: {
      DEFAULT: '1px',
      1: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
  },
  variants: {
    extend: {
      textColor: ['hover'],
      textOpacity: ['hover'],
      opacity: ['dark'],
    },
  },
  plugins: [
    typographyPlugin,
    // require('@tailwindcss/typography'),
    lineClampPlugin,
    plugin(function ({
      addUtilities,
      theme,
      // addComponents,
      // e,
      // prefix,
      // config,
      // variants,
    }) {
      // Add your custom styles here
      // console.log("backgroundColor", theme("backgroundColor"))
      const utilityPtHeaderHeight = {
        '.pt-h-header': {
          'padding-top': theme('height').header,
        },
      };
      addUtilities(utilityPtHeaderHeight, []); // ["hover", "focus"]
    }),
  ],
};
