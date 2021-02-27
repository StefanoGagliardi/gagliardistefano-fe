// Import core
import Document, { Html, Head, Main, NextScript } from 'next/document'

// Import third parts

// Import customs

class MyDocument extends Document {
  render() {
    const lang = "it-IT";
    const dir = "ltr";
    
    return (
      <Html lang={lang} dir={dir}>
        <Head />
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
