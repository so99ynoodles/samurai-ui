import { RadiusTypes } from '../../types'

export const radius: {
  [key in RadiusTypes]: string
} = {
  none: '0rem',
  small: '0.25rem',
  medium: '1rem',
  large: '1.25rem',
  circular: '50%',
}
