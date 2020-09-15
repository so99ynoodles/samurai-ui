import {
  SizeTypes,
  TypographyColorTypes,
  TypographySizeTypes,
  RadiusTypes,
  PaletteTypes,
  ShadowTypes,
  ThemeColorTypes,
  BreakpointTypes,
  TypographySizeValue,
} from '../shared'

export type Theme = {
  palette: PaletteTypes
  shadows: {
    [key in ShadowTypes]: (color?: string) => string
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
    lineSizes: {
      [key in TypographySizeValue]: string
    }
  }
  radius: {
    [key in RadiusTypes]: string
  }
  breakpoints: {
    [key in BreakpointTypes]: string
  }
}
