import { ThemeColorTypes } from '../../../types/shared'
import { palette } from '../palette'

export const lightColors: {
  [key in ThemeColorTypes]: string
} = {
  body: palette['gray-300'],
  background: palette.white,
  'background:hover': palette['gray-400'],
  'background:active': palette['gray-500'],
  border: palette['gray-500'],
  outline: palette['gray-800'],
}
