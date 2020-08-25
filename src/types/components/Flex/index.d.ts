import { ReactNode } from 'react'
import {
  SamuraiUIPaddingProps,
  SamuraiUIComponentProps,
  SizeValue,
  SamuraiUITextProps,
} from '../../shared'

export interface SamuraiUIFlexProps
  extends SamuraiUIComponentProps,
    SamuraiUIPaddingProps,
    SamuraiUITextProps {
  children?: ReactNode
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  wrap?: boolean | 'wrap' | 'nowrap' | 'wrap-reverse'
  justifyContent?:
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
  alignContent?:
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
  alignItems?:
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
  gap?: SizeValue
  columnGap?: SizeValue
  rowGap?: SizeValue
}
