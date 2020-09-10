import { ShadowTypes } from '../../types'
import { hexToRgba } from '../../utils/hexToRgba'

export const shadows: {
  [key in ShadowTypes]: (color?: string) => string
} = {
  none: () => `none`,
  small: (color) =>
    `0 2px 6px -1px ${hexToRgba(color, 0.3)}, 0 2px 4px -1px ${hexToRgba(
      color,
      0.06
    )}`,
  medium: (color) =>
    `0 8px 8px -3px  ${hexToRgba(color, 0.3)}, 0 4px 6px -2px ${hexToRgba(
      color,
      0.05
    )}`,
  large: (color) =>
    ` 0 16px 16px -5px ${hexToRgba(color, 0.3)}, 0 6px 8px -3px ${hexToRgba(
      color,
      0.04
    )}`,
  max: (color) =>
    ` 0 20px 20px -7px ${hexToRgba(color, 0.3)}, 0 8px 10px -5px ${hexToRgba(
      color,
      0.04
    )}`,
}
