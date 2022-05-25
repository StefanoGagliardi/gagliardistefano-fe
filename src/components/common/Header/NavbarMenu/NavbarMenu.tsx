// Import core
import React, {
  FC,
  ReactElement,
  ReactNode,
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
import { Flipper } from 'react-flip-toolkit';
import NavbarItem from './NavbarItem';
import DropdownContainer from './DropdownContainer';

const navbarConfig = [
  { title: 'Products', dropdown: <></> },
  { title: 'Developers', dropdown: <></> },
  { title: 'Company', dropdown: <></> },
];

/**
 * Script start
 */
export const NavbarMenu: FC = (): ReactElement => {
  // Retrive menu  items
  const navbarMenuData = themeConfig.menus.primaryMenu;

  // Mega menu props
  const currentIndex = 0;
  const duration = 300;

  const [animatingOut, setAnimatingOut] = useState<boolean>(false);

  const navbarMouseLeave = () => {};
  const onMouseEnter = (index: number) => {};

  let CurrentDropdown: FC = (): ReactElement => <></>;
  let PrevDropdown: FC = (): ReactElement => <></>;
  let direction = 'left';

  return (
    <Flipper
      flipKey={currentIndex}
      spring={duration === 300 ? 'noWobble' : { stiffness: 10, damping: 10 }}
      className={cn('flex', 'justify-end', 'w-full')}
    >
      <div
        className="text-md text-white flex lg:justify-end lg:flex-grow mr-10"
        onMouseLeave={navbarMouseLeave}
      >
        {navbarMenuData.map((value: IMainMenuLink, index: number) => {
          console.log('value: ', value);

          if (value?.megaMenu) {
            let CurrentDropdown = null;
            if (typeof currentIndex === 'number') {
              // TODO ?.dropdown is a Component with Dropdown content
              CurrentDropdown = navbarConfig[value?.megaMenu]?.dropdown;
            }

            return (
              <NavbarItem
                key={value.title}
                title={value.title}
                index={index}
                onMouseEnter={onMouseEnter}
              >
                {currentIndex === index && (
                  <DropdownContainer
                    direction={direction}
                    animatingOut={animatingOut}
                    duration={duration}
                  >
                    {CurrentDropdown && <CurrentDropdown />}
                    {PrevDropdown && <PrevDropdown />}
                  </DropdownContainer>
                )}
              </NavbarItem>
            );
          }

          return (
            <Link href={value.url as string} key={index}>
              <a
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
    </Flipper>
  );
};

export default NavbarMenu;
