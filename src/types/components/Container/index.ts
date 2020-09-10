import { HoverProps } from '@react-aria/interactions'
import { ReactNode } from 'react'
import {
  SamuraiUIPaddingProps,
  SamuraiUIComponentProps,
  SamuraiUITextProps,
  SamuraiUIColorTypes,
} from '../../shared'

export interface SamuraiUIContainerStyleProps
  extends SamuraiUIPaddingProps,
    SamuraiUITextProps {
  backgroundColor?: SamuraiUIColorTypes
  vivid?: boolean
}

export interface SamuraiUIContainerProps
  extends SamuraiUIComponentProps,
    SamuraiUIContainerStyleProps,
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
