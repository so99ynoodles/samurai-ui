import { ThemeColorTypes } from '../../../types/shared'
import { palette } from '../palette'

export const lightColors: {
  [key in ThemeColorTypes]: string
} = {
  body: palette.white,
  background: palette.white,
  'background:hover': palette['gray-100'],
  'background:active': palette['gray-300'],
  border: palette['gray-500'],
  outline: palette['gray-800'],
}
