import React, { ReactNode } from 'react'
import {
  ThemeProvider as StyledThemeProvider,
  ThemeContext,
  ThemeConsumer,
} from 'styled-components'
import { Theme } from '../../types'

interface ThemeProviderProps {
  theme: Theme
  children?: ReactNode
}

function ThemeProvider(props: ThemeProviderProps) {
  const { theme, children } = props
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}

export { ThemeContext, ThemeConsumer, ThemeProvider }
