import { PressProps, HoverProps } from '@react-aria/interactions'
import { ReactNode, JSXElementConstructor } from 'react'
import {
  SamuraiUIPaddingProps,
  SamuraiUIComponentProps,
  SamuraiUIColorTypes,
  SamuraiUITextProps,
  RadiusTypes,
} from '../../shared'

export interface SamuraiUIButtonStyleProps
  extends SamuraiUIPaddingProps,
    SamuraiUITextProps {
  radius?: RadiusTypes | RadiusTypes[]
  buttonColor?: SamuraiUIColorTypes
  fluid?: boolean
  vivid?: boolean
}

export interface SamuraiUIButtonProps
  extends SamuraiUIComponentProps,
    SamuraiUIButtonStyleProps,
    PressProps,
    HoverProps {
  children?: ReactNode
  elementType?: 'button' | 'div' | 'a'
  type?: 'button' | 'submit' | 'reset'
  autoFocus?: boolean
}
