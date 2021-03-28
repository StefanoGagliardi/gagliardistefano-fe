// Import core
import React, { FC, ReactElement } from 'react'

// Impor third parts
import cn from 'classnames'
import { ThemeToggle } from '@components/ui/ThemeToggle/ThemeToggle'

// Import customs
import s from './NavbarMenu.module.scss'
import navbarMenuData from './navbarMenuData'
import { IMainMenuLink } from '@interfaces/mainMenuLink'
import Link from 'next/link'

/**
 * Script start
 */
export const NavbarMenu: FC = (): ReactElement => {
  return (
    <>
      <div className="text-md flex lg:justify-end lg:flex-grow mr-5">
        {navbarMenuData.map((value: IMainMenuLink, index: number) => {
          return (
            <Link href={value.url as string} key={index}>
              <a className={cn(s.link)}>{value.title}</a>
            </Link>
          )
        })}
      </div>
      <div>
        <ThemeToggle />
      </div>
    </>
  )
}
