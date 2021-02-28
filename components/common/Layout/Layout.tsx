// Import core

import { FC } from 'react'

// Import third parts
import cn from 'classnames'

// Import custom
import s from './Layout.module.scss'

/**
 * Script start
 */
//
// Page[] - Studiare Page da next-commerce
//
// pages è una props ritornata dalle singole pagine da "getStaticProps" che chiama
// il metodo "await getAllPages()"che recupera l'elenco delle pagine da delle API (in questo caso STOREFRONT shopify)
interface Props {
  pageProps: {
    pages?: any[]
  }
}
export const Layout: FC<Props> = ({ children, pageProps }) => {
  return (
    <>
      {/* Commerce context */}
      <div className={cn(s.siteRoot)}>
        {/* <Topbar />*/}
        {/* <Navbar />*/}

        <main className="fit">{children}</main>

        {/* <Sidebar> Cart or Blog sidebar</Sidebar> */}

        {/* <Footer />*/}
        {/* <Socket />*/}

        {/* <Modal > {modalContent} </Modal> */}
        {/* <FeaturesBar > rendered content (cookie) </FeaturesBar> */}
      </div>
      {/* Close Commerce context */}
    </>
  )
}
export default Layout
