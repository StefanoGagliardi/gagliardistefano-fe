// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http')
const dev = process.env.NODE_ENV !== 'production'

const { parse } = require('url')

const next = require('next')
const app = next({ dev })
const handle = app.getRequestHandler()

// HTTPS Options
const fs = require('fs')

// const httpsOptions = {
//   key: fs.readFileSync("localhost.key"),
//   cert: fs.readFileSync("localhost.crt"),
// };

// https://github.com/IlusionDev/nextjs-sitemap-generator
// Sitemap generator
// const sitemap = require("nextjs-sitemap-generator"); // Import the package

// C:\Users\User\Desktop\00160_CloudName\
// console.log("__dirname", __dirname);

// sitemap({
//   alternateUrls: {
//     en: "https://cloudname.com/en",
//     it: "https://cloudname.com/it",
//   },
//   baseUrl: "https://cloudname.com",
//   ignoredPaths: ["admin"],
//   // extraPaths: ['/extraPath'],
//   pagesDirectory: __dirname + "\\src\\pages",
//   targetDirectory: "public/",
//   sitemapFilename: "sitemap.xml",
//   nextConfigPath: __dirname + "\\next.config.js",
// });

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(3000, (err) => {
    if (err) {
      console.log('err', err)
      throw err
    }
    console.log('> Ready on http://localhost:3000')
  })
})
