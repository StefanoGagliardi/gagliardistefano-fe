// Import core
import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

// Impor third parts
import cn from 'classnames';
import Link from 'next/link';
import { Flipper } from 'react-flip-toolkit';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';

// Import customs
import s from './NavbarMenu.module.scss';
import themeConfig from '@config/theme';
import { IMainMenuLink } from '@interfaces/mainMenuLink';
import { ThemeToggle } from '@components/ui/ThemeToggle/ThemeToggle';

// Mega menu components
import NavbarItem from './NavbarItem';
import DropdownContainer from './DropdownContainer';

// Dropdown menu content
import ServicesDropdown from '@components/common/Header/DropdownContents/ServicesDropdown';
import Web3Dropdown from '@components/common/Header/DropdownContents/Web3Dropdown';
import ConsultingDropdown from '@components/common/Header/DropdownContents/ConsultingDropdown';
import { useRouter } from 'next/router';
import useIsomorphicLayoutEffect from '@services/hooks/useIsomorphicLayoutEffect';
import useArrayRef from '@services/hooks/useArrayRefs';

/**
 * Object with Dropdown components. This array is used via index: 0, 1, 2
 */
const navbarConfig = [
  { title: 'servizi', dropdown: ServicesDropdown },
  { title: 'web3', dropdown: Web3Dropdown },
  { title: 'formazione', dropdown: ConsultingDropdown },
];

/**
 * Script start
 */
export const NavbarMenu: FC = (): ReactElement => {
  // Retrive menu items
  // @TODO merge this with "navbarConfig"
  const navbarMenuData = useMemo(() => themeConfig.menus.primaryMenu, []);
  const debubMode = useMemo(() => themeConfig.debug.menu, []);
  const router = useRouter();

  // Mega menu props
  const duration: number = useMemo(() => 300, []); // Animation duration (timeout)

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

  /**
   * Questa funzion è sempre uguale, ma essendo passata come props a dei compoentni "Figli" e innescata all'evento "onMouseEnter" causa sempre il re-render dei figli.
   * Per evitare ciò, basta cacharla con useCallback, non ho dipendenze che "ri-calcolano" la funzione perchè "index" agisce su un array statico che non cambia (mega menu dropdown).
   * Nel caso l'array sul quale agisce il parametro "index" fosse stato dinamico andava aggiunto come deps
   */
  const onMouseEnter = useCallback((index: number) => {
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
  }, []);

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
    if (router.pathname) {
      closeDropdown();
    }
  }, [router.pathname]);

  /**
   * Gsap menu item stagger animation
   */
  const [gsapRef, setGsapRef] = useArrayRef();
  useIsomorphicLayoutEffect(() => {
    // Register scroll plugin for GSAP
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(gsapRef.current, {
      opacity: 1,
      x: -20,
      delay: 0.5,
      duration: 0.5,
      ease: 'none',
      stagger: 0.2,
    });
  }, []);

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
                setRef={setGsapRef}
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

          // Simple link, not mega menu
          return (
            <Link href={value.url as string} key={index}>
              <a
                className={cn(s.link, 'navbar-item')}
                data-dropdown={value?.megaMenu ? value.megaMenu : ''}
                onMouseEnter={() => {
                  closeDropdown();
                }}
                ref={(ref) => setGsapRef(ref)}
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
