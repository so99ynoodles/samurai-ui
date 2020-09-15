import { darken, lighten } from 'polished'
import { ThemeColorTypes } from '../../../types/shared'
import { palette } from '../palette'

export const lightColors: {
  [key in ThemeColorTypes]: string
} = {
  body: palette.white,
  background: palette.white,
  'background:hover': lighten(0.1, palette.white),
  'background:active': darken(0.1, palette.white),
  border: palette['gray-500'],
  outline: palette['gray-500'],
}
