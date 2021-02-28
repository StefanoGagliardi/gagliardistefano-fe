# Website components folder

NB: Ogni "Folder component" oltre hai componenti o subfolder tutte le folder hanno un file index.ts che esporta tutti i main "components".
Stesso discorso vale per le folder dei componenti non di primo livello (`components` contiene solo folder).

Ogni Componente ha il suo modulo css associato (può estendere le classi di tailwind)

1. `@components/common/Head/` - index.ts - Esporta tutte le parti di Head
2. `@components/common/Layout/` - index.ts - Esporta il Layout da associare gli stili
3. `@components/ui/Container/` - index.ts - Esporta il Layout da associare gli stili
4. `@components/ui/Grid/` - index.ts - Esporta il Layout da associare gli stili
5. And so for each component

## 1. Common

In this folder there are follow components common to entire site:

1. `@components/common/Head` - Extende default NextJs Head component with page seo or default seo.
2. `@components/common/Layout` - Layout persistent wrapper: Navbar, Footer, Modal and more. Load with first chunck.
3. `@components/common/Header` - Site Header: Navbar and Topbar.
4. `@components/common/Footer` - Site Footer: Footer and Socket.
5. `@components/common/MobileMenu` - Mobile sidemenu (big) fadeIn on X asis (left or right)

For this components explaination see Layout.md

## 2. UI

Nella cartella UI sono contenuti gli elementi di: Grid, Button, Input, Sidebar.

1. `@components/ui/Container` - Extende default NextJs Head component with page seo or default seo.
2. `@components/ui/Grid` - Extende default NextJs Head component with page seo or default seo.

### UI component: Container

Componente `@components/ui/Container` - Web deisgn container - Availble props:

```ts
interface Container Props {
  className?: string    // Additional css class
  children?: any        // Element to contain
  el?: HTMLElement      // Container html tag
  clean?: boolean       // Flag to remove default container class "mx-auto max-w-8xl px-6"
}
```

### UI component: Grid

Componente `@components/ui/Grid` - Grid System - Availble props:

1.
2. 3
