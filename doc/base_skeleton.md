# Base website skeleton

1. `./pages/_document.tsx` - Create file, import nextJs `<Head>` and set `<body>` tag with loading class.
2. `./components/common/Head` - Custom Head file with next-seo. Init default seo, manifest and favicon.
3. `./public/site.webmanifest` -  Website manifest with favicon
4. `./public/favicon(512|192).png` -  Public website image
5. `./pages/_app.tsx` - Special NextJs file in pages. Among other thing, it import custom Head.

## _App.tsx