# Plugin Step

1. [x] - Custom Server per Next
     1.1 - Installiamo express e ts-node
     1.2 - Creiamo la cartella "Server" col suo Index.ts
     1.3 - Creiamoi la classe Server e l'app di Next
     1.4 - Aggiungiamo Nodemon per l'hotreload
2. [ ] - NextJs plugin
     2.1 Spiegazione concettuale ed intervento
     2.2 Introduzione plugin NextJs
     2.2.1 Introduione primo plugin: Bundle analyzer
     2.2.2 Introduzione a "next-compose-plugin" for multi plugin chain
     2.2.3 Integration of "@zeit/next-sass" and other plugin and after some error found no compatibility with last versione of next and webpack
     2.3 Start writing plugin for "next-compose-plugin"
     2.3.1 Write a second version of "structure" of function for direct use (just this plugin case)
     2.4 I realize the best way for this specific goal (override function getlocalIdent of css-loader), without lose other webpack configuration, is
     manipulate config directly in webpack callback of next.config via function exported by plugin.  
     **NB:** Si può sempre valutare di fare delle verosioni per "next-compose-plugin"