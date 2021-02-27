# Styles, css, sass, tailwind

Integrazione degli stili garfici, il mio stack è sempre stato `scss + className`.
Con questo sito web proverò l'integrazione di tailwind css.

## Tailwind css

Integrazione ed utilizzo di tailwind css
Guida: https://betterprogramming.pub/how-to-set-up-tailwind-css-v2-0-with-next-js-10-4a82c8f8caaa
NextJs10 + Tailwindcss 2.0

NB: In next-commerce non viene usato sass perchè sono tutte varaiabili e classi di tailwind o "styled component"

1. `npm install tailwindcss postcss autoprefixer postcss-nesting postcss-flexbugs-fixes postcss-preset-env`
2. Creare il file `tailwind.config.js`
3. Creare il file `postcss.config.js`
4. In assets creare il file `./assets/main.css` che importerà le varie parti di tailwind
   Inoltre le varie classi di tailwind possono essere sovrascritte con file custom dello stesso nome degli import di tailwind.
5. Impotare i moduli css **globali** di "assets" nel file `./pages/_app.tsx`. Poi avremo anche i css module a un livello più basso. 

## ./assets CSS

La cartella assets contiene i seguenti file "css".
Nel file tsconfig.json "assets" è stato definito come modulo quindi i file al suo interno saranno importati come segue:

`import '@assets/main.css'`

## SASS

Utilizzo di file scss