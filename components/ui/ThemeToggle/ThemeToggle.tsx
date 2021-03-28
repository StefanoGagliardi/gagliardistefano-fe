import { useTheme } from 'next-themes'
import React, { FC, ReactElement } from 'react'
import { useUI } from '../context'

export const ThemeToggle: FC = (): ReactElement => {
  // Custom hook per accedere all'ui
  const contextUi = useUI()
  const { theme, setTheme } = useTheme()

  const isDark = () => {
    return theme === 'dark'
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={isDark()}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      ></input>
      Dark Mode
    </label>
  )
}
