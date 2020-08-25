import {
  AlignSelfProperty,
  Color,
  CursorProperty,
  DisplayProperty,
  FlexProperty,
  JustifySelfProperty,
  PositionProperty,
  VisibilityProperty,
} from 'csstype'
import { palette } from '../../foundations/colors/palette'

export type PaletteTypes = typeof palette

export type ThemeColorTypes =
  /** background color for html body */
  | 'body'

  /** background UI color */
  | 'background'

  /** backround hovered UI color */
  | 'background:hover'

  /** background active UI color */
  | 'background:active'

  /** default border color */
  | 'border'

  /** outline color for focused */
  | 'outline'

export type SizeTypes =
  | 'size:min'
  | 'size:000'
  | 'size:001'
  | 'size:002'
  | 'size:004'
  | 'size:008'
  | 'size:012'
  | 'size:016'
  | 'size:020'
  | 'size:024'
  | 'size:032'
  | 'size:040'
  | 'size:048'
  | 'size:064'
  | 'size:128'
  | 'size:256'
  | 'size:512'
  | 'size:max'

export type ShadowTypes = 'none' | 'small' | 'medium' | 'large' | 'max'

export type RadiusTypes = 'none' | 'small' | 'medium' | 'large' | 'circular'

export type TypographyColorTypes =
  | 'text:default'
  | 'text:help'
  | 'text:error'
  | 'text:disabled'
  | 'text:link'

export type TypographySizeTypes = 'min' | 'small' | 'medium' | 'large' | 'max'

export type BreakpointTypes = 'mobile' | 'tablet' | 'laptop' | 'desktop'

export type ColorValue = ColorTypes | (string & {})

export type SizeValue = SizeTypes | (string & {}) | number

export interface SamuraiUITextProps {
  textColor?: TypographyColorTypes | (string & {})
  textSize?: TypographySizeTypes | (string & {})
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center'
}

export interface SamuraiUIInteractionProps {
  isHovered?: boolean
  isPressed?: boolean
  isFocused?: boolean
}

export interface SamuraiUIPaddingProps {
  padding?: SizeValue
  paddingX?: SizeValue
  paddingY?: SizeValue
  paddingLeft?: SizeValue
  paddingRight?: SizeValue
  paddingTop?: SizeValue
  paddingBottom?: SizeValue
}

export interface SamuraiUISizingProps {
  width?: SizeValue
  minWidth?: SizeValue
  maxWidth?: SizeValue
  height?: SizeValue
  minHeight?: SizeValue
  maxHeight?: SizeValue
}

export interface SamuraiUILayoutProps {
  flex?: FlexProperty
  flexGrow?: number
  flexShrink?: number
  flexBasis?: number | string
  alignSelf?: AlignSelfProperty
  justifySelf?: JustifySelfProperty
  order?: number
  gridArea?: string
  gridColumn?: string
  gridRow?: string
  gridColumnStart?: string
  gridColumnEnd?: string
  gridRowStart?: string
  gridRowEnd?: string
}

export interface SamuraiUIMarginProps {
  margin?: SizeValue
  marginStart?: SizeValue
  marginEnd?: SizeValue
  marginX?: SizeValue
  marginY?: SizeValue
  marginLeft?: SizeValue
  marginRight?: SizeValue
  marginBottom?: SizeValue
  marginTop?: SizeValue
}

export interface SamuraiUIPositioningProps {
  position?: PositionProperty
  top?: SizeValue
  left?: SizeValue
  right?: SizeValue
  bottom?: SizeValue
  start?: SizeValue
  end?: SizeValue
  zIndex?: number
}

export interface SamuraiUIDisplayProps {
  display?:
    | (string & {})
    | 'inline'
    | 'inline-block'
    | 'block'
    | 'flex'
    | 'grid'
    | 'inherit'
    | 'none'
  visibility?: VisibilityProperty
  cursor?: CursorProperty
  boxShadow?: ShadowTypes
  hide?: BreakpointTypes[] | boolean
  show?: BreakpointTypes[] | boolean
}

export type SamuraiUIColorTypes =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'

export interface SamuraiUIComponentProps
  extends SamuraiUISizingProps,
    SamuraiUIMarginProps,
    SamuraiUIPositioningProps,
    SamuraiUILayoutProps,
    SamuraiUIDisplayProps {
  id?: string
  className?: string
}
