// Import core
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// Import third parts

// Import customs

class MyDocument extends Document {

  render() {
    const lang = 'it-IT';
    const dir = 'ltr';

    return (
      <Html lang={lang} dir={dir}>
        <Head>
          <link rel="shortcut icon" href={'/favicon.png'} />

          {/* fonts */}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={'true'}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;700&amp&display=swap"
            rel="preload"
            as="style"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;700&amp&display=swap"
            />
          </noscript>

          {/* <link rel="manifest" href="/manifest.json" /> */}
          <meta name="msapplication-TileColor" content="#0c82b6" />
          <meta name="theme-color" content="#0c82b6" />
        </Head>{' '}
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
