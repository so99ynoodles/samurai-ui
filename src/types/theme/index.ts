import {
  SizeTypes,
  TypographyColorTypes,
  TypographySizeTypes,
  RadiusTypes,
  PaletteTypes,
  ShadowTypes,
  ThemeColorTypes,
  BreakpointTypes,
} from '../shared'

export type Theme = {
  palette: PaletteTypes
  shadows: {
    [key in ShadowTypes]: string
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
    [key in BreakpointTypes]: string
  }
}
