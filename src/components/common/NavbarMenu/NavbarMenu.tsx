// Import core
import React, { FC, ReactElement, useEffect } from 'react';

// Impor third parts
import cn from 'classnames';
import { ThemeToggle } from '@components/ui/ThemeToggle/ThemeToggle';

// Import customs
import s from './NavbarMenu.module.scss';
import themeConfig from '@config/theme';
import { IMainMenuLink } from '@interfaces/mainMenuLink';
import Link from 'next/link';
import { useUI } from '@components/ui/context';
import { SvgRegularGlobe } from '@assets/svg';

/**
 * Script start
 */
export const NavbarMenu: FC = (): ReactElement => {
  const { openSidebar } = useUI();

  const navbarMenuData = themeConfig.menus.primaryMenu;

  // useEffect(() => {
  //   openSidebar()
  // }, [openSidebar])

  return (
    <>
      <div className="text-md text-white flex lg:justify-end lg:flex-grow mr-10">
        {/* {navbarMenuData.map((value: IMainMenuLink, index: number) => {
          return (
            <Link href={value.url as string} key={index}>
              <a className={cn(s.link)}>{value.title}</a>
            </Link>
          );
        })} */}
        {navbarMenuData.map((value: IMainMenuLink, index: number) => {
          return (
            <Link href={value.url as string} key={index}>
              <a className={cn(s.link)} data-dropdown={value?.megaMenu ? value.megaMenu : ""}>{value.title}</a>
            </Link>
          );
        })}
      </div>
      <div>
        <ThemeToggle design={'icons'} icon={false} />
      </div>
      <div className={s.langSelector}>
        <SvgRegularGlobe />
      </div>
    </>
  );
};

export default NavbarMenu;
