import {
  radius,
  breakpoints,
  lightColors,
  typographyLightColors,
  typographySizes,
  sizes,
  palette,
} from '../../foundations'
import { Theme } from '../../types'
import { shadows } from '../../foundations/shadows'

export const lightTheme: Theme = {
  palette,
  shadows: shadows,
  spacing: sizes,
  radius: radius,
  typography: {
    colors: typographyLightColors,
    sizes: typographySizes,
  },
  breakpoints: breakpoints,
  colors: lightColors,
}
