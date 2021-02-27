# Website components folder

NB: Ogni "Folder component" oltre hai componenti o subfolder tutte le folder hanno un file index.ts che esporta tutti i main "components".
Stesso discorso vale per le folder dei componenti non di primo livello (`components` contiene solo folder)

1. `./components/common` - index.ts - Esporta ...Head
2. `./components/common/Head/` - index.ts - Esporta tutte le parti di Head

## 1. Common

In this folder there are follow components common to entire site:

1. `./Head` - Extende default NextJs Head component with page seo or default seo.
