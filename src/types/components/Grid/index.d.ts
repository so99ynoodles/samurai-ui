import {
  SamuraiUIPaddingProps,
  SamuraiUIComponentProps,
  SizeValue,
  SamuraiUITextProps,
} from '../../shared'
import { ReactNode } from 'react'

export interface SamuraiUIGridProps
  extends SamuraiUIComponentProps,
    SamuraiUIPaddingProps,
    SamuraiUITextProps {
  children?: ReactNode
  areas?: string[]
  rows?: (string & {}) | SizeValue[]
  columns?: (string & {}) | SizeValue[]
  autoColumns?: SizeValue
  autoRows?: SizeValue
  autoFlow?: 'row' | 'column' | 'row dense' | 'column dense'
  justifyItems?:
    | 'auto'
    | 'normal'
    | 'start'
    | 'end'
    | 'center'
    | 'left'
    | 'right'
    | 'stretch'
    | 'self-start'
    | 'self-end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center'
    | 'legacy right'
    | 'legacy left'
    | 'legacy center'
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
