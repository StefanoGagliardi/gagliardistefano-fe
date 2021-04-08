// Import core
import React, { FC, useContext } from 'react'
// next-themes ?

// Import third parts
// Theme mode with transition
// 
import { ThemeProvider } from 'next-themes'

// Import custom packages

/**
 * Script start - main ui context
 */
const initialState = {}
interface UIState {}
export const UIContext = React.createContext<UIState | any>(initialState)

// Ui provider che integra Ui context
export const UIProvider = (props) => {
  const value = {}
  return <UIContext.Provider value={value} {...props} />
}

// Context to use in app - integra ui provider
export const ManagedUIContext: FC = ({ children }) => (
  <UIProvider>
    <ThemeProvider attribute="class">{children}</ThemeProvider>
  </UIProvider>
)

// Custom hook per accedere al context
export const useUI = () => {
  const context = useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}
