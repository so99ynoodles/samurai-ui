import { PressProps, HoverProps } from '@react-aria/interactions'
import { ReactNode, JSXElementConstructor } from 'react'
import {
  SamuraiUIPaddingProps,
  SamuraiUIComponentProps,
  SamuraiUIColorTypes,
  RadiusTypes,
  TypographySizeTypes,
  TypographyColorTypes,
  SamuraiUITextProps,
} from '../../shared'

export interface SamuraiUIContainerStyleProps
  extends SamuraiUIPaddingProps,
    SamuraiUITextProps {}

export interface SamuraiUIContainerProps
  extends SamuraiUIComponentProps,
    SamuraiUIContainerStyleProps,
    PressProps,
    HoverProps {
  children?: ReactNode
}
