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
      paragraph: ['18px', '28px'],
      paragraphLg: ["22px", "34px"],
      lg: ['20px', '28px'],
      lgm: ['26px', '32px'],
      xl: ['40px', '48px'],
      xxl: ['48px', '56px'],
    },
    // Define outside "extend" for override default font-family
    fontFamily: {
      avenir: ['avenir next', 'sans-serif'],
    },
    // NB: Must match font-wieght defined in src/assets/fonts.css
    fontWeight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
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
        accent: 'var(--color-bg-accent)',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        service: 'var(--color-bg-service)',
        accent: 'var(--color-bg-accent)',
        input: 'var(--bg-input)',
        unset: 'unset',
        'gray-1': 'var(--color-gray-1)',
        'gray-2': 'var(--color-gray-2)',
        'gray-3': 'var(--color-gray-3)',
        'gray-4': 'var(--color-gray-4)',
        'gray-5': 'var(--color-gray-5)',
        'gray-light-1': 'var(--color-light-gray-1)',
        'gray-light-5': 'var(--color-light-gray-5)',
      },
      gradientColorStops: {
        ctaStop: 'var(--color-bg-cta-stop)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        input: 'var(--color-input)',
        dark: 'var(--color-text-dark)',
        'dark-gray': {
          1: 'var(--color-dark-gray-1)',
          2: 'var(--color-dark-gray-2)',
          3: 'var(--color-dark-gray-3)',
          4: 'var(--color-dark-gray-4)',
          5: 'var(--color-dark-gray-5)',
        },
        'light-gray': {
          1: 'var(--color-light-gray-1)',
          2: 'var(--color-light-gray-2)',
          3: 'var(--color-light-gray-3)',
          4: 'var(--color-light-gray-4)',
          5: 'var(--color-light-gray-5)',
        },
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
      padding: {
        '60px': '60px',
      },
      zIndex: {
        3: '3',
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
    lineClampPlugin,
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      // const dotDivider = {
      //   'dot-divider': {
      //     border: '1px solid red',
      //   },
      //   '.dot-divider::before': {
      //     content: ' ',
      //     backgroundColor: '#fff',
      //     width: '3px',
      //     height: '3px',
      //     position: 'absolute',
      //     right: '-10px',
      //     top: 'calc(50% - 5px)',
      //   },
      // };
      // addUtilities(dotDivider, []);
      // addComponents(dotDivider);
      // addBase(dotDivider);
    }),
  ],
};
