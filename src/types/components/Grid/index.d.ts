import { ReactNode } from 'react'
import {
  SamuraiUIPaddingProps,
  SamuraiUIComponentProps,
  SizeValue,
  SamuraiUITextProps,
} from '../../shared'

type AutoFlow = 'row' | 'column' | 'row dense' | 'column dense'
type JustifyItems =
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

export interface SamuraiUIGridProps
  extends SamuraiUIComponentProps,
    SamuraiUIPaddingProps,
    SamuraiUITextProps {
  children?: ReactNode
  areas?: string[]
  rows?: (string & {}) | SizeValue[]
  columns?: (string & {}) | SizeValue[]
  autoColumns?: SizeValue | SizeValue[]
  autoRows?: SizeValue | SizeValue[]
  autoFlow?: AutoFlow | AutoFlow[]
  justifyItems?: JustifyItems | JustifyItems[]
  justifyContent?: JustifyContent | JustifyContent[]
  alignContent?: AlignContent | AlignContent[]
  alignItems?: AlignItems | AlignItems[]
  gap?: SizeValue | SizeValue[]
  columnGap?: SizeValue | SizeValue[]
  rowGap?: SizeValue | SizeValue[]
}
