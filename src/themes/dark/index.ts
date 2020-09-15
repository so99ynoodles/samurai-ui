import {
  radius,
  breakpoints,
  darkColors,
  typographyDarkColors,
  typographySizes,
  sizes,
  palette,
  lineSizes,
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
    lineSizes: lineSizes,
  },
  breakpoints,
  colors: darkColors,
}
