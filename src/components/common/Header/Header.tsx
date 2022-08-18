// Import core
import { FC, useEffect, useState } from 'react';

// Import third parts
import cn from 'classnames';
import { useRouter } from 'next/router';

// Import custom
import s from './Header.module.scss';
import { NavbarMenu } from './NavbarMenu/NavbarMenu';
import useScrollPosition, { IScrollProps } from '@services/hooks/useBodyScroll';
import HeaderLogo from './HeaderLogo';
import { useTheme } from 'next-themes';

export const Header: FC = () => {
  const [scrollClass, setScrollClass] = useState<boolean>(false);
  const router = useRouter();
  const { theme } = useTheme();

  // Get scroll position and set class
  useScrollPosition({
    effect: (props: IScrollProps) => {
      const { prevPos, currPos } = props;

      if (currPos.y && Math.abs(currPos.y) > 70) {
        setScrollClass(true);
      } else {
        setScrollClass(false);
      }
    },
    deps: [scrollClass],
    element: null,
    useWindow: false,
    wait: 300,
  });

  console.log('INDEX THEME: ', theme);

  return (
    <header
      className={cn(
        'p-4 fixed w-100 left-0 top-0 right-0 z-50 h-header',
        s.glass, s.whiteVersion,
        {
          scrolled: scrollClass,
          [s.light]: theme !== 'dark',
        }
      )}
    >
      <div className="flex items-center justify-between flex-wrap px-5 container relative z-10 mx-auto">
        <div className="flex items-center flex-no-shrink text-white">
          <HeaderLogo />
        </div>
        <div className="block lg:hidden">
          <button className={s.mobileToggle}>
            <span></span>
            <span className={cn('my-1')}></span>
            <span></span>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <NavbarMenu />
        </div>
      </div>
    </header>
  );
};
export default Header;
