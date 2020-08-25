import { PressProps, HoverProps } from '@react-aria/interactions'
import {
  SamuraiUIPaddingProps,
  SamuraiUIComponentProps,
  SamuraiUIColorTypes,
  RadiusTypes,
} from '../../shared'
import { ReactNode, JSXElementConstructor } from 'react'

export interface SamuraiUIButtonStyleProps extends SamuraiUIPaddingProps {
  borderRadius?: RadiusTypes
  backgroundColor?: SamuraiUIColorTypes
  fluid?: boolean
  vivid?: boolean
}

export interface SamuraiUIButtonProps
  extends SamuraiUIComponentProps,
    SamuraiUIButtonStyleProps,
    PressProps,
    HoverProps {
  children?: ReactNode
  elementType?: (string & {}) | 'button' | 'div' | 'a'
  type?: 'button' | 'submit' | 'reset'
  autoFocus?: boolean
}
