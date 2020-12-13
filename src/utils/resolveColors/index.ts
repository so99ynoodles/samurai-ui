import { Theme, SamuraiUIColorTypes } from '../../types'

const AVAILABLE_COLORS: SamuraiUIColorTypes[] = [
  'red',
  'blue',
  'green',
  'indigo',
  'pink',
  'purple',
  'yellow',
]

export function isSamuraiUIColors(color?: string) {
  return AVAILABLE_COLORS.includes(color as SamuraiUIColorTypes)
}

export function resolveColors(theme: Theme, color?: string, number?: number) {
  if (theme.palette[color]) {
    return theme.palette[color as SamuraiUIColorTypes]?.[number]
  }
  return color
}
