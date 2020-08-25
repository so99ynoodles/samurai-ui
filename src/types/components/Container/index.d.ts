import { PressProps, HoverProps } from '@react-aria/interactions'
import {
  SamuraiUIPaddingProps,
  SamuraiUIComponentProps,
  SamuraiUIColorTypes,
  RadiusTypes,
} from '../../shared'
import { ReactNode, JSXElementConstructor } from 'react'

export interface SamuraiUIContainerStyleProps extends SamuraiUIPaddingProps {
  borderRadius?: RadiusTypes
  backgroundColor?: SamuraiUIColorTypes
}

export interface SamuraiUIContainerProps
  extends SamuraiUIComponentProps,
    SamuraiUIContainerStyleProps,
    PressProps,
    HoverProps {
  children?: ReactNode
}
