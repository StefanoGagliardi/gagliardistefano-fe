// Import core
import React, { FC, ReactElement, useEffect, useMemo, useRef, useState } from 'react';

// Impor third parts
import cn from 'classnames';
import Link from 'next/link';
import { Flipper } from 'react-flip-toolkit';

// Import customs
import s from './NavbarMenu.module.scss';
import themeConfig from '@config/theme';
import { IMainMenuLink } from '@interfaces/mainMenuLink';
import { SvgRegularGlobe } from '@assets/svg';
import { ThemeToggle } from '@components/ui/ThemeToggle/ThemeToggle';

// Mega menu components
import NavbarItem from './NavbarItem';
import DropdownContainer from './DropdownContainer';

// Dropdown menu content
import ServicesDropdown from '@components/common/Header/DropdownContents/ServicesDropdown';
import Web3Dropdown from '@components/common/Header/DropdownContents/Web3Dropdown';
import ConsultingDropdown from '@components/common/Header/DropdownContents/ConsultingDropdown';
import { useRouter } from 'next/router';

/**
 * Object with Dropdown components. This array is used via index: 0, 1, 2
 */
const navbarConfig = [
  { title: 'servizi', dropdown: ServicesDropdown },
  { title: 'web3', dropdown: Web3Dropdown },
  { title: 'formazione', dropdown: ConsultingDropdown },
];

/**
 * Use this for debug dropdown: always open
 */
const debubMode = {
  enabled: false, // Enable mode
  open: [1, 2], // Set active dropdown: first is previous, second is current
};

/**
 * Script start
 */
export const NavbarMenu: FC = (): ReactElement => {
  // Retrive menu items
  // @TODO merge this with "navbarConfig"
  const navbarMenuData = themeConfig.menus.primaryMenu;

  // Mega menu props
  const duration = 300; // Animation duration (timeout)

  const router = useRouter();

  // State
  const [animatingOut, setAnimatingOut] = useState<boolean>(false);
  const [activeIndices, setActiveIndices] = useState<number[]>(
    debubMode.enabled === true ? debubMode.open : []
  );

  // le variabili (NON STATE) che nelle classi setto tramite il "this", nei FC devo usare una reference
  const animatingOutTimeout = useRef<any>(null);

  const resetDropdownState = (i: any) => {
    if (!debubMode.enabled) {
      setActiveIndices(typeof i === 'number' ? [i] : []);
    }
    setAnimatingOut(false);
    animatingOutTimeout.current = null;
  };

  const navbarMouseLeave = () => {
    closeDropdown();
  };

  const onMouseEnter = (index: number) => {
    if (animatingOutTimeout.current !== null) {
      clearTimeout(animatingOutTimeout.current);
      resetDropdownState(index);
      return;
    }
    if (activeIndices[activeIndices.length - 1] === index) return;
    if (!debubMode.enabled) {
      setActiveIndices([...activeIndices, index]);
    }
    setAnimatingOut(false);
  };

  const currentIndex = useMemo(() => {
    return activeIndices[activeIndices.length - 1];
  }, [activeIndices]);

  const prevIndex = useMemo(() => {
    if (activeIndices.length > 1) {
      return activeIndices[activeIndices.length - 2];
    }
  }, [activeIndices]);

  const closeDropdown = () => {
    if (!debubMode.enabled) {
      setAnimatingOut(true);
      animatingOutTimeout.current = setTimeout(resetDropdownState, duration);
    }
  };

  useEffect(() => {
    if(router.pathname) {
      closeDropdown();
    }
  }, [router.pathname])

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
          // console.log('navbarMenuData - NavbarItem - value: ', value);

          // Render mega menu
          if (value?.megaMenu) {
            let direction = currentIndex > prevIndex ? 'right' : 'left';
            let CurrentDropdown;
            let PrevDropdown;
            if (typeof currentIndex === 'number') {
              CurrentDropdown = navbarConfig[currentIndex].dropdown;
            }
            if (typeof prevIndex === 'number') {
              PrevDropdown = navbarConfig[prevIndex].dropdown;
            }
            return (
              <NavbarItem
                key={value.title}
                title={value.title}
                index={index}
                onMouseEnter={onMouseEnter}
                url={value?.url as string}
              >
                {currentIndex === index && (
                  <DropdownContainer
                    direction={direction}
                    animatingOut={animatingOut}
                    duration={duration}
                  >
                    <CurrentDropdown closeDropdown={closeDropdown} />
                    {PrevDropdown && <PrevDropdown />}
                  </DropdownContainer>
                )}
              </NavbarItem>
            );
          }

          console.log("Item menu: ", value?.title);

          // Simple link, not mega menu
          return (
            <Link href={value.url as string} key={index}>
              <a
                className={cn(s.link)}
                data-dropdown={value?.megaMenu ? value.megaMenu : ''}
                onMouseEnter={() => {
                  closeDropdown();
                }}
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
      {/* <div className={s.langSelector}>
        <SvgRegularGlobe />
      </div> */}
    </Flipper>
  );
};

export default NavbarMenu;
