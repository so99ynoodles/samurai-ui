import { PressProps, HoverProps } from '@react-aria/interactions'
import { ReactNode } from 'react'
import {
  SamuraiUIPaddingProps,
  SamuraiUIComponentProps,
  SamuraiUIColorTypes,
  SamuraiUITextProps,
  RadiusTypes,
  SamuraiUIPaletteColorTypes,
  SizeValue,
} from '../../shared'

type ButtonSizeTypes = 'min' | 'small' | 'medium' | 'large' | 'max'

export interface SamuraiUIButtonStyleProps
  extends SamuraiUIPaddingProps,
    SamuraiUITextProps {
  radius?: RadiusTypes | RadiusTypes[]
  borderWidth?: SizeValue
  borderColor?: SamuraiUIPaletteColorTypes
  backgroundColor?: SamuraiUIPaletteColorTypes
  shadowColor?: SamuraiUIPaletteColorTypes
  outlineColor?: SamuraiUIPaletteColorTypes
  colorVariant?: SamuraiUIColorTypes
  sizeVariant?: ButtonSizeTypes
  fluid?: boolean
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
