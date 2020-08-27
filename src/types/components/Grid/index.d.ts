import { ReactNode } from 'react'
import {
  SamuraiUIPaddingProps,
  SamuraiUIComponentProps,
  SizeValue,
  SamuraiUITextProps,
  AutoFlow,
  JustifyItems,
  JustifyContent,
  AlignContent,
  AlignItems,
} from '../../shared'

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
