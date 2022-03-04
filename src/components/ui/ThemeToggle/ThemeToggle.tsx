// import core
import React, { FC, ReactElement, useEffect } from 'react';
// Import third parts
import { useTheme } from 'next-themes';
import cn from 'classnames';
// Import custom
import {
  SvgMoonTheme,
  SvgSunTheme,
  SVGThemeDark,
  SVGThemeLight,
} from '@assets/svg';
import { useUI } from '../context';
import s from './ThemeToggle.module.css';

/**
 * Version 2.0 - mode just icon
 */
interface Props {
  design: 'ant' | 'icons' | 'default';
  icon: boolean;
}
export const ThemeToggle: FC<Props> = ({
  design = 'default',
  icon = true,
}: Props): ReactElement => {
  // Custom hook per accedere all'ui
  const contextUi = useUI();
  const { theme, setTheme } = useTheme();

  const isDark = () => {
    return theme === 'dark';
  };

  const handleToggleSwitch = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setTheme(theme == 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    console.log('theme: ', theme);
  }, [theme]);

  return (
    <div
      className={cn(s['theme-switch-wrap'], {
        [s['theme-switch-ant']]: design === 'ant',
        [s['theme-switch-icons']]: design === 'icons',
        [s['theme-switch-default']]: design !== 'ant' && design !== 'icons',
      })}
      onClick={handleToggleSwitch}
    >
      {design !== 'icons' && (
        <label
          className={cn(s['theme-switch'], {
            dark: isDark(),
          })}
          htmlFor="checkbox"
        >
          <input
            type="checkbox"
            checked={isDark()}
            name="checkbox"
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          ></input>

          <div className={s.slider}>
            <span className={s.dot}>
              {icon && (
                <>
                  <span
                    id="lightIcon"
                    className={cn({
                      hidden: isDark(),
                    })}
                  >
                    <SVGThemeLight />
                  </span>
                  <span
                    id="darkIcon"
                    className={cn({
                      hidden: !isDark(),
                    })}
                  >
                    <SVGThemeDark />
                  </span>
                </>
              )}
            </span>
          </div>
        </label>
      )}
      {design === 'icons' && (
        <div
          className={cn(s.iconsWrap, {
            [s.darkTheme]: theme === 'dark',
            [s.lightTheme]: theme === 'light',
          })}
        >
          <span>
            <SvgSunTheme />
          </span>
          <span>
            <SvgMoonTheme />
          </span>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
