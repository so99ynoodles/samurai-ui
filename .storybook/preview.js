import React from 'react'
import { ThemeProvider } from '../src/themes/context'
import { lightTheme } from '../src/themes'

export const decorators = [
  (storyFn) => <ThemeProvider theme={lightTheme}>{storyFn()}</ThemeProvider>,
]
