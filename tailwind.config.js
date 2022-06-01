// Custom plugin / function
const plugin = require('tailwindcss/plugin');

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
  // First value is FontSize, second is LineHeight
  theme: {
    // Font definition: size and weight.
    // NB: Weigt must match font-wieght defined in src/assets/avenir.css
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      lgm: ['24px', '1.4'],
      xl: ['40px', '1.4'],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 800,
    },
    extend: {
      maxWidth: {
        '8xl': '1920px',
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
        80: '0.8',
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

      // Per aumentare i container scommentre qui
      // '2xl': '1536px',
      // // => @media (min-width: 1536px) { ... }

      // '8xl': '1920px',
    },
    borderWidth: {
      DEFAULT: '1px',
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
    require('@tailwindcss/typography'),
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
