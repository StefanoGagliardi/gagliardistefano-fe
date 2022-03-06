// Import core
import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

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
import { IRef, IRefs } from '@interfaces/props';
import HeaderContext from '../HeaderContext';

/**
 * Script start
 */
export const NavbarMenu: FC = (): ReactElement => {
  // Retrive menu  items
  const navbarMenuData = themeConfig.menus.primaryMenu;

  // Retrie context
  const { setDropdownRefs } = useContext(HeaderContext);

  // Calculate refs length
  const refsInitialArray = new Array(
    navbarMenuData.filter(function (element) {
      return element.megaMenu;
    }).length
  ).fill(React.createRef());
  // Initialize array length
  const refs = useRef<IRefs<IRef<HTMLAnchorElement>[]>>(refsInitialArray);

  useEffect(() => {
    setDropdownRefs(refs);
  }, []);

  return (
    <>
      <div className="text-md text-white flex lg:justify-end lg:flex-grow mr-10">
        {navbarMenuData.map((value: IMainMenuLink, index: number) => {
          return (
            <Link href={value.url as string} key={index}>
              <a
                ref={refs.current[index]}
                className={cn(s.link)}
                data-dropdown={value?.megaMenu ? value.megaMenu : ''}
              >
                {value.title}
              </a>
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
