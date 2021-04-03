# NextJs Class minification

Studio di come minificare le classi dei CSS Module di NextJs (ReactJs).

Obbiettivo: Sostiuire i nomi delle classi con delle letere.
How to: la via è una configurazione custom di webpack per next che va a leggere i load css/sass e ne va a modificare la funzione `getLocalIdent()` che si occupa
di creare un oggetto con i nomi delle classi.

NB: un altra strada pensavo fosse quella degli optimizer ma da [questa discussione](https://github.com/vercel/next.js/pull/14197) pare che la funzione getIdent sia la strada corretta

Roadmap:

1. Primo test di un plugin che non andava
2. Studio del codice e implementazione manuale
3. L'implementazione funziona quasi del tutto: la minificazione avviene dei css module ma alcune classi non matchano il conenuto.
   Oppure esistono già.

Problema:
Alcune classi non match sicuramente sicuramente viene parsatto nella funzione di trasformazione qualche file che non dovrebbe essere parsato.
Controllare (tramie regex) il path dei file cosi da modificare solo quelli sotto `./src`

## Configurazione custom di Webpack

Come da [documentazione NextJs](https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config) nel suo file `Next.config.js` permette di inserire (o moglio modificare) la configurazione webpack che viene usata, con alcune impostazioni fatte da next stesso e altre magari da terze parti (come appunto i loader css).

### Script

1. Wrapper la funzione in un file esterno e assicurarsi la corretta inclusione.
   NB: Potrebbe essere necessario usare

2. Struttura della configurazione fino ad arrivare alla funzione
3. Studio dei loader css/sass
4. Studio della funzione (se presnete) senza modifica

#### Wrappig in un plugn ad hoc

In caso di più exports (plugins) nel file next.config.js sarà necessario usare [next-compose-plugins](https://github.com/cyrilwanner/next-compose-plugins)
Il plugin funziona in modo che riwrappa la configuraizone di Next e aggiunge la configurazione custom di webpck con le varie funzioni.

Se non ci sono altri plugin per next.config mi basterà importare il file

### Webpack

1. webpack.plugin -> pluginsDefinition -> process.env.\_\_NEXT_OPTIMIZE_CSS
   Probabilmente questa impostazione si riferisce al merger dei file e alla ottimizzazione dello spazio

2. webpack.module -> rule: contiene il match dei file tsx, ts ecc.
   coniene inoltre una variabile "oneOf" che è un "Array di loader"

3. I loader che mi interessano sono gli unici ad avere il paramentro "sideEffect": false
4. accedere alla funzione getLocalIdent
5. Studiare la funzioen originale: https://github.com/webpack-contrib/css-loader/blob/5e702e7d2e081b7f6d372f0c967fdfca6a40a584/src/utils.js#L37

NB: Il loader funziona sia per css che scss e match solo i .module{css|scss|sass}

### Testare la generazione delle classi

Due problemi:

1. La funzione viene resettata ogni volta devo storare l'indice nel file
2. Stesso nome classe ma file diversi, come di seguito:

localName link
request components/common/Header/HeaderLogo.module.css
localName link
request components/common/NavbarMenu/NavbarMenu.module.scss
localName link
request components/common/NavbarMenu/NavbarMenu.module.scss
localName link
request components/common/NavbarMenu/NavbarMenu.module.scss
localName link
request components/common/NavbarMenu/NavbarMenu.module.scss
