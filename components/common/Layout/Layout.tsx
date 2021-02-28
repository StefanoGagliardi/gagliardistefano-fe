// Import core

import { FC } from 'react'

// Import third parts
import cn from 'classnames'

// Import custom
import s from './Layout.module.scss'

/**
 * Script start
 */

export const Layout: FC = ({ children }) => {
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
