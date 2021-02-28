# 1. Folder and Code Structure

**Typescript define custom import:**
NB: Nel file tsconfig.json posso definire import custom.
Vedere sezione "path" del file tsconfig.json per definire gli import.

NB: Aggiungere in tsconfig.json `baseUrl: "."`

```ts
import * from "@assets";
import * from "@config";
import * from "@components";
import * from "@lib";
import * from "@utils"; // aka helpers
import * from "@framework"; // TODO
import * from "@commerce"; // TODO
```

**foldering root:**

**TODO LIB & FRAMEWORK**

1. `./assets` - css, font
2. `./config` - seo.json with default seo
3. `./components` - React components
4. `./doc` - All readme.md documentation
5. `./pages` - NextJs pages folder
6. `./public` - public assets for nextjs website
7. `./test` - Jest test folder
8. `./utils` - Ultils functions

#### 1.1 ./assets

Next-commerce main.css file (tailwind)

#### 1.2 ./config

Single json file with default SEO info.

#### 1.3 ./components

1. `/auth` - auth
2. `/cart` - cart
3. `/common` - common
4. `/icons` - icons
5. `/product` - product
6. `/ui` - ui
7. `/wishlist` - wishlist

#### 1.5 ./pages

All nextJs website page - filename is url (destination).
There are specially files like `_document.tsx` and `_app.tsx`

#### 1.6 ./public

1. All images
2. Favicon
3. Manifest.json

#### Framework

Funzioni candidate:

1. get-all-pages.ts - recupero elenco pagine da delle API (cosi da poterle creare dinamicamente da un ADMIN)
2. 