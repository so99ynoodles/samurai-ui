import { PressProps, HoverProps } from '@react-aria/interactions'
import { ReactNode } from 'react'
import {
  SamuraiUIPaddingProps,
  SamuraiUIComponentProps,
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
  elementType?:
    | 'div'
    | 'nav'
    | 'section'
    | 'main'
    | 'article'
    | 'span'
    | 'header'
    | 'footer'
}
