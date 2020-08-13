import { BoxShadow } from 'csstype'
import {
  SizeTypes,
  TypographyColorTypes,
  TypographySizeTypes,
  RadiusTypes,
  PaletteTypes,
  ShadowTypes,
  ThemeColorTypes,
} from '../shared'

export type Theme = {
  palette: PaletteTypes
  shadows: {
    [key in ShadowTypes]: BoxShadow
  }
  colors: {
    [key in ThemeColorTypes]: string
  }
  spacing: {
    [key in SizeTypes]: string
  }
  typography: {
    colors: {
      [key in TypographyColorTypes]: string
    }
    sizes: {
      [key in TypographySizeTypes]: string
    }
  }
  radius: {
    [key in RadiusTypes]: string
  }
  breakpoints: {
    max: {
      [key in BreakpointTypes]: string
    }
    min: {
      [key in BreakpointTypes]: string
    }
  }
}
