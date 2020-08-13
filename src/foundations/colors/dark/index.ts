import { ThemeColorTypes } from '../../../types/shared'
import { palette } from '../palette'

export const darkColors: {
  [key in ThemeColorTypes]: string
} = {
  body: palette['gray-900'],
  background: palette['gray-800'],
  'background:hover': palette['gray-700'],
  'background:active': palette['gray-600'],
  border: palette['gray-600'],
  outline: palette['gray-400'],
}
