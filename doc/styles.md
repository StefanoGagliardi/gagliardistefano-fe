# Styles, css, sass, tailwind

Integrazione degli stili garfici, il mio stack è sempre stato `scss + className`.
Con questo sito web proverò l'integrazione di tailwind css.

Gli stili dei componenti (css module) supportano anche sass.

La dark mode è supportata tramite tailwind

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
6. Per abilitare i css modulo con sass `npm i sass`
7. Si consiglia di installare l'intellisens di Visual code per Tailwind

## ./assets CSS

La cartella assets contiene i seguenti file "css".
Nel file tsconfig.json "assets" è stato definito come modulo quindi i file al suo interno saranno importati come segue:

`import '@assets/main.css'`

## tailwind.config.js

Queto è il file di configurazione di tailwind presente nella root. Tra le varie impostazioni
qui impostiamo le variabili del tema, alcune osservazioni:

1. Le prime opzioni: pages, purge. Servono per includere tutti i css module e le direttive "@apply"
2. La seconda porte importante è la sezione "themed" si impostano i colori, valori delle variabili sulle quali verrano generate le classi helper
3. La darkmode viene abilitata nel config tramite `darkMode: "class",` di default è false. Nel file base.css definiremo le variabili due volte (una per modalità)
4. viene impostata la max-width come variabile "8xl": `maxWidth: { '8xl': '1920px', },`

### Tailwind css style rule

[Resource](https://stackoverflow.com/questions/61443484/how-to-solve-semi-colon-expected-csscss-semicolonexpected)

1. `npm install --save-dev stylelint stylelint-config-standard`
2. Creare nella main root `stylelint.config.js` e riempirlo col suo contenuto
3. Installare in vscode due estensioni: Tailwind intellisens e Stylelint

**Variabili css (light e dark):**
Le variabili usate dal `tailwind.config.js` sono variabili css ":root" nel file `@assets/base.css` se la dark mode è attiva
avrò la stessa variabile in due condizioni diverse.
Sempre in base.css viene formatto il documento html

**Utilizzo classi tailwind**
Negli stili dei moduli (css o scss) tramite l'operatore `@apply bg-primary mx-auto;` posso estendere una classe custom con quelle di tailwind.
