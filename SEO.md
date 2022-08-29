# SEO Settings for Website and NextJs

## Block from indexing

Now website is live on heroku server and heroku domain. It's important block indexing from Google.

1. Aggiunto nell'head dentro il file `_document.tsx` il meta tag `<meta name="robots" content="noindex nofollow" />`. Lighthouse ha rilevato la pagina come **Indicizzabile**

2. Allora ho modificato il file `robots.txt` nel seguente modo ed ha funzionato:

```txt
Sitemap: https://domain.com/api/posts-sitemap

User-agent: *
Disallow: /*

Disallow: /api/*
```

### Robots.txt & Sitemap.xml

**Creazione robots.txt:**

1. Creare il file `robots.txt` dentro la cartella `./public` standard di nextJs

**Creazione sitemap.xml**

1. Creare il file ` `
