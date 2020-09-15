import { TypographyColorTypes, TypographySizeTypes } from '../../types'
import { palette } from '../colors/palette'

const typographyLightColors: {
  [key in TypographyColorTypes]: string
} = {
  'text:default': palette['gray-900'],
  'text:help': palette['gray-600'],
  'text:link': palette['blue-strong'],
  'text:error': palette['red-strong'],
  'text:disabled': palette['gray-400'],
}

const typographyDarkColors: {
  [key in TypographyColorTypes]: string
} = {
  'text:default': palette['gray-200'],
  'text:help': palette['gray-400'],
  'text:link': palette['blue-strong'],
  'text:error': palette['red-strong'],
  'text:disabled': palette['gray-500'],
}

const typographySizes: {
  [key in TypographySizeTypes]: string
} = {
  min: '0.5rem',
  small: '0.75rem',
  medium: '1rem',
  large: '1.25rem',
  max: '1.5rem',
}

const lineSizes: {
  [key in TypographySizeTypes]: string
} = {
  min: '0.6rem',
  small: '0.9rem',
  medium: '1.2rem',
  large: '1.5rem',
  max: '1.8rem',
}

export {
  typographySizes,
  typographyLightColors,
  typographyDarkColors,
  lineSizes,
}
