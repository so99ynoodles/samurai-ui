import {
  radius,
  breakpoints,
  darkColors,
  typographyDarkColors,
  typographySizes,
  sizes,
  palette,
} from '../../foundations'
import { Theme } from '../../types'
import { shadows } from '../../foundations/shadows'

export const darkTheme: Theme = {
  palette,
  shadows: shadows,
  spacing: sizes,
  radius: radius,
  typography: {
    colors: typographyDarkColors,
    sizes: typographySizes,
  },
  breakpoints: breakpoints,
  colors: darkColors,
}
