import { Theme, TypographySizeTypes, TypographyColorTypes } from '../../types'

export function resolveFontColors(theme: Theme, color?: string) {
  return theme.typography.colors[color as TypographyColorTypes]
    ? theme.typography.colors[color as TypographyColorTypes]
    : color
}

export function resolveFontSize(theme: Theme, size?: string) {
  return theme.typography.sizes[size as TypographySizeTypes]
    ? theme.typography.sizes[size as TypographySizeTypes]
    : size
}
