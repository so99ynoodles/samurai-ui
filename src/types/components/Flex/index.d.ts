import { ReactNode } from 'react'
import {
  SamuraiUIPaddingProps,
  SamuraiUIComponentProps,
  SizeValue,
  SamuraiUITextProps,
  AlignSelf,
} from '../../shared'

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'

type Wrap = boolean | 'wrap' | 'nowrap' | 'wrap-reverse'

type JustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'left'
  | 'right'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'

type AlignContent =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'

type AlignItems =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'self-start'
  | 'self-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'

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
