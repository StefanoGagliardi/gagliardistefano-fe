# NextJs Class minification

Studio di come minificare le classi dei CSS Module di NextJs (ReactJs).

Obbiettivo: Sostiuire i nomi delle classi con delle letere.
How to: la via è una configurazione custom di webpack per next che va a leggere i load css/sass e ne va a modificare la funzione `getLocalIdent()` che si occupa
di creare un oggetto con i nomi delle classi.

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

#### Wrappig in un plugn ad hoc

In caso di più exports (plugins) nel file next.config.js sarà necessario usare [next-compose-plugins](https://github.com/cyrilwanner/next-compose-plugins)
