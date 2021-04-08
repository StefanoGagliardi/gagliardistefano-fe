// Import core
import { AppProps } from 'next/app'
import React, { FC, useEffect } from 'react'

// Import third parts
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import customs
import { ManagedUIContext } from '@components/ui/context'
import '../assets/main.css'
import '../assets/chrome-bug.css'
// import '../assets/styles.scss'

/**
 * Script start
 */
const Noop: FC = ({ children }) => <>{children}</>
export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  return (
    <>
      <ManagedUIContext>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  )
}
