import { SizeValue, SizeTypes, Theme } from '../../types'

export function resolveSize(theme: Theme, size?: SizeValue) {
  if (typeof size === 'number') {
    return `${size}px`
  }
  if (theme.spacing[size as SizeTypes]) {
    return theme.spacing[size as SizeTypes]
  }
  return size
}
