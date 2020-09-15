import {
  radius,
  breakpoints,
  lightColors,
  typographyLightColors,
  typographySizes,
  sizes,
  palette,
  lineSizes,
} from '../../foundations'
import { Theme } from '../../types'
import { shadows } from '../../foundations/shadows'

export const lightTheme: Theme = {
  palette,
  shadows,
  spacing: sizes,
  radius,
  typography: {
    colors: typographyLightColors,
    sizes: typographySizes,
    lineSizes: lineSizes,
  },
  breakpoints,
  colors: lightColors,
}
