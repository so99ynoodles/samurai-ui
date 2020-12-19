import React, { ReactNode } from 'react'
import {
  ThemeProvider as StyledThemeProvider,
  ThemeContext,
  ThemeConsumer,
  createGlobalStyle,
} from 'styled-components'
import { Theme } from '../../types'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-smoothing: auto;
  }
  body {
    color: ${(props) => props.theme.palette.gray[900]};
    background-color: ${(props) => props.theme.palette.gray[200]};
  }
`

interface ThemeProviderProps<T> {
  theme: Theme
  generateToken?: (theme: Theme) => T
  children?: ReactNode
}

function ThemeProvider<T>(props: ThemeProviderProps<T>) {
  const { theme, generateToken, children } = props
  const themeWithToken = {
    ...theme,
    token: generateToken?.(theme)
  }
  return (
    <StyledThemeProvider theme={themeWithToken}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  )
}

export { ThemeContext, ThemeConsumer, ThemeProvider }
