// Import core

import { FC } from 'react'

// Import third parts

// Import custom
import s from './Layout.module.scss'

/**
 * Script start
 */

export const Layout: FC = ({ children }) => {
  return (
    <>
      <div className={s.siteRoot}>{children}</div>
    </>
  )
}
export default Layout
