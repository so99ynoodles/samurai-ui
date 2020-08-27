import { ReactNode } from 'react'
import {
  SamuraiUIPaddingProps,
  SamuraiUIComponentProps,
  SizeValue,
  SamuraiUITextProps,
  FlexDirection,
  Wrap,
  JustifyContent,
  AlignContent,
  AlignItems,
} from '../../shared'

export interface SamuraiUIFlexProps
  extends SamuraiUIComponentProps,
    SamuraiUIPaddingProps,
    SamuraiUITextProps {
  children?: ReactNode
  flexDirection?: FlexDirection | FlexDirection[]
  wrap?: Wrap | Wrap[]
  justifyContent?: JustifyContent | JustifyContent[]
  alignContent?: AlignContent | AlignContent[]
  alignItems?: AlignItems | AlignItems[]
  gap?: SizeValue | SizeValue[]
  columnGap?: SizeValue | SizeValue[]
  rowGap?: SizeValue | SizeValue[]
}
