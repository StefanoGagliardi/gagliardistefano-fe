// Import core
import React, { FC } from 'react'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'

// Import third parts

// Import custom
import config from '@config/seo.json'

/**
 * Script start
 */
export const Head: FC = () => {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <link rel="shortcut icon" href={'favicon.png'} />

        {/* fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass:wght@200;400;600;800&display=swap"
          rel="stylesheet"
        ></link>

        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="msapplication-TileColor" content="#0c82b6" />
        <meta name="theme-color" content="#0c82b6" />
      </NextHead>
    </>
  )
}

export default Head
