# CSS Class Style guide

## Tailwind class settings

Tailwind config are compose by this two parts:

1. `./src/assets/main.css` - is entry .css for tailwind, variables and global styles. This file is imported in `./src/pages/_app.tsx`;
   1.1 CSS Variables used both tailwind and custom are defined in `./src/assets/base.css` and imported in main.css
2. `./tailwind.config.js` - Class and value css config file for tailwind
   2.1 - NB: font-weight of font (Avenir Next) defined in `./src/assets/avenir.css` are: 400,500,700. So section of config file "theme: fontWeight" must match previous weight.
   This value can be use via this class: `.font-regular, .font-medium, .font-bold`.
   2.2. NB: Per poter utilizzare e caricare tutte le classi di Tailwind dobbiamo assicurarci che il nostro componente sia incluso nei Path del file di configurazione di Tailwind:

```js
   module.exports = {
   ...
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx}', // Pages contain own style
      './src/components/**/*.{js,ts,jsx,tsx}', // Site Components
      './src/services/forms/**/*.{js,ts,jsx,tsx}' // ./services/forms contain views for forms
   ]
   ...
   }
```

NB: Si possono richiamare le classi di Tailwind anche nei CSS Components via "@apply" (simile al extends nativo di sass):

```scss
.link:focus {
  @apply outline-none; // text-accents-8
}
```

## 1. Typography

**Tailwind settings:**

1. FontWeight are defined as follow:
   1.1 Regular 400: `.font-regular`
   1.1 Regular 500: `.font-medium`
   1.1 Regular 700: `.font-bold`
2. FontSize are define with class `.text-{type}`.
   2.1 Type are defined as follow (font-size, line-height):
   sm: ['14px', '20px']  
    base: ['16px', '24px']  
    lg: ['20px', '28px']  
    xl: ['38px', '52px']
3. Color:
   3.1 For white (#fff) /dark (#000) text: `text-black dark:text-white`
   3.2 Secondary color, not CTA, are `.text-secondary`
   3.3 All available color class are:
   accent: 'var(--color-text-accent)'
   primary: 'var(--color-text-primary)'
   secondary: 'var(--color-text-secondary)'

## 2. Colors

**Variazioni colore nei testi:**
Mi appunto tutte le variazioni dei colori standard cosi da fare, test (magari anche A/B), uniformare ecc.

Testi: Bianco (#fff) e Nero (#000)
Footer link - neri: #333

## 3. Media queries
