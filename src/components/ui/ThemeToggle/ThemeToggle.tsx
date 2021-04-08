// import core
import React, { FC, ReactElement } from 'react'
// Import third parts
import { useTheme } from 'next-themes'
import cn from 'classnames'
// Import custom
import { SVGThemeDark, SVGThemeLight } from '@assets/svg'
import { useUI } from '../context'
import s from './ThemeToggle.module.css'

export const ThemeToggle: FC = (): ReactElement => {
  // Custom hook per accedere all'ui
  const contextUi = useUI()
  const { theme, setTheme } = useTheme()

  const isDark = () => {
    return theme === 'dark'
  }

  const handleToggleSwitch = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setTheme(theme == 'dark' ? 'light' : 'dark')
  }

  return (
    <div className={s['theme-switch-wrap']} onClick={handleToggleSwitch}>
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
            <span id="lightIcon" className={cn({
              "hidden": isDark(),
            })}>
              <SVGThemeLight />
            </span>
            <span id="darkIcon"  className={cn({
              "hidden": !isDark(),
            })}>
              <SVGThemeDark />
            </span>
          </span>
        </div>
      </label>
    </div>
  )
}

export default ThemeToggle
