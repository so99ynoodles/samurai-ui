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
  }
  body {
    color: ${(props) => props.theme.typography.colors['text:default']};
    background-color: ${(props) => props.theme.colors.body};
  }
`

interface ThemeProviderProps {
  theme: Theme
  children?: ReactNode
}

function ThemeProvider(props: ThemeProviderProps) {
  const { theme, children } = props
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  )
}

export { ThemeContext, ThemeConsumer, ThemeProvider }
