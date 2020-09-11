import { Theme, SamuraiUIColorTypes } from '../../types'

const AVAILABLE_COLORS: SamuraiUIColorTypes[] = [
  'red',
  'blue',
  'green',
  'indigo',
  'orange',
  'pink',
  'purple',
  'yellow',
  'teal',
]

export function isSamuraiUIColors(color?: string) {
  return AVAILABLE_COLORS.includes(color as SamuraiUIColorTypes)
}

export function resolveColors(theme: Theme, color?: string) {
  if (theme.palette[color]) {
    return theme.palette[color as SamuraiUIColorTypes]
  }
  return color
}
