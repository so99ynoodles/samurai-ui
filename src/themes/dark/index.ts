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
  shadows,
  spacing: sizes,
  radius,
  typography: {
    colors: typographyDarkColors,
    sizes: typographySizes,
  },
  breakpoints,
  colors: darkColors,
}
