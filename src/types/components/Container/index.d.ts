import { PressProps, HoverProps } from '@react-aria/interactions'
import {
  SamuraiUIPaddingProps,
  SamuraiUIComponentProps,
  SamuraiUIColorTypes,
  RadiusTypes,
  TypographySizeTypes,
  TypographyColorTypes,
  SamuraiUITextProps,
} from '../../shared'
import { ReactNode, JSXElementConstructor } from 'react'

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
