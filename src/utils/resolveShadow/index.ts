import { Theme, ShadowTypes } from '../../types'

export function resolveShadow(theme: Theme, shadow?: string) {
  if (theme.shadows[shadow as ShadowTypes]) {
    return theme.shadows[shadow as ShadowTypes]
  }
  return shadow
}
