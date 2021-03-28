// Import core
import { FC } from 'react'

// Import third parts
import cn from 'classnames'

// Import custom
import s from './Header.module.scss'
import { ThemeToggle } from '@components/ui/ThemeToggle/ThemeToggle'
import { NavbarMenu } from '../NavbarMenu/NavbarMenu'

export const Header: FC = () => {
  return (
    <nav className="p-2 bg-primary shadow-md fixed w-100 left-0 right-0 z-50 h-header">
      <div className="flex items-center justify-between flex-wrap container mx-auto">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <img src={'/gagliardistefano_logo.png'} width="100" height="57" />
        </div>
        <div className="block lg:hidden">
          <button className={s.mobileToggle}>
            <span></span>
            <span className={cn("my-1")}></span>
            <span></span>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <NavbarMenu />
        </div>
      </div>
    </nav>
  )
}
export default Header
