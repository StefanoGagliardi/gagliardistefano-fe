// Import core
import { AppProps } from 'next/app'
import React, { FC, useEffect } from 'react'

// Import third parts

// Import customs
import { Head } from '@components/common'

/**
 * Script start
 */
const Noop: FC = ({ children }) => <>{children}</>
export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      {/* TODO: OPEN UI CONTEXT */}
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
      {/* TODO: CLOSE UI CONTEXT */}
    </>
  )
}
