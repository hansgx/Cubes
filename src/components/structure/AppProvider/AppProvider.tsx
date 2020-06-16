import React from 'react'
import { Theme, themes } from '../../../theme'
import { AppProviderContext } from './AppProviderContext'

export interface AppProviderProps {
  theme?: Theme
  children: React.ReactNode
}

/**
 * Component that should be defined at the root of the App and controls many elements, like
 * theming, navigation and so on.
 *
 * > **Note:** You don't need to pass any properties to this component. They are present for customization purpose only.
 */
export const AppProvider: React.FC<AppProviderProps> = ({ theme = themes.light, children }) => (
  <AppProviderContext.Provider value={{ theme }}>{children}</AppProviderContext.Provider>
)
