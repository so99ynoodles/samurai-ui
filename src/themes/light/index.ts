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
  shadows,
  spacing: sizes,
  radius,
  typography: {
    colors: typographyLightColors,
    sizes: typographySizes,
  },
  breakpoints,
  colors: lightColors,
}
