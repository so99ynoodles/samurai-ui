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

export type ColorValue = ThemeColorTypes | (string & {})

export type SizeValue = SizeTypes | (string & {}) | number

export type TypographyColorValue = TypographyColorTypes | (string & {})
export type TypographySizeValue = TypographySizeTypes | (string & {})

export interface SamuraiUITextProps {
  textColor?: TypographyColorValue | TypographyColorValue[]
  textSize?: TypographySizeValue | TypographySizeValue[]
  textAlign?: TextAlign | TextAlign[]
  bold?: boolean
  lineThrough?: boolean
  italic?: boolean
  underline?: boolean
  upperCase?: boolean
}

export interface SamuraiUIInteractionProps {
  isHovered?: boolean
  isPressed?: boolean
  isFocused?: boolean
}

export interface SamuraiUIPaddingProps {
  padding?: SizeValue | SizeValue[]
  paddingX?: SizeValue | SizeValue[]
  paddingY?: SizeValue | SizeValue[]
  paddingLeft?: SizeValue | SizeValue[]
  paddingRight?: SizeValue | SizeValue[]
  paddingTop?: SizeValue | SizeValue[]
  paddingBottom?: SizeValue | SizeValue[]
}

export interface SamuraiUISizingProps {
  width?: SizeValue | SizeValue[]
  minWidth?: SizeValue | SizeValue[]
  maxWidth?: SizeValue | SizeValue[]
  height?: SizeValue | SizeValue[]
  minHeight?: SizeValue | SizeValue[]
  maxHeight?: SizeValue | SizeValue[]
}

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'

export type Wrap = boolean | 'wrap' | 'nowrap' | 'wrap-reverse'

export type TextAlign = 'start' | 'end' | 'left' | 'right' | 'center'

export type AutoFlow = 'row' | 'column' | 'row dense' | 'column dense'

export type JustifyItems =
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

export type JustifyContent =
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

export type AlignContent =
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

export type AlignItems =
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

export type AlignSelf =
  | 'auto'
  | 'normal'
  | 'start'
  | 'end'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'stretch'

export type JustifySelf =
  | 'auto'
  | 'normal'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'center'
  | 'left'
  | 'right'
  | 'stretch'

export type Display =
  | (string & {})
  | 'inline'
  | 'inline-block'
  | 'block'
  | 'flex'
  | 'grid'
  | 'inherit'
  | 'none'

export type Visibility = 'visible' | 'hidden' | 'collapse'

export type Cursor =
  | 'help'
  | 'wait'
  | 'pointer'
  | 'crosshair'
  | 'not-allowed'
  | 'zoom-in'
  | 'grab'
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'progress'
  | 'cell'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'grabbing'
  | 'all-scroll'
  | 'col-resize'
  | 'row-resize'
  | 'n-resize'
  | 'e-resize'
  | 's-resize'
  | 'w-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'zoom-in'
  | 'zoom-out'

export interface SamuraiUILayoutProps {
  flex?: string | string[]
  flexGrow?: number | number[]
  flexShrink?: number | number[]
  flexBasis?: number | string | number[] | string[]
  alignSelf?: AlignSelf | AlignSelf[]
  justifySelf?: JustifySelf | JustifySelf[]
  order?: number | number[]
  gridArea?: string | string[]
  gridColumn?: string | string[]
  gridRow?: string | string[]
  gridColumnStart?: string | string[]
  gridColumnEnd?: string | string[]
  gridRowStart?: string | string[]
  gridRowEnd?: string | string[]
}

export interface SamuraiUIMarginProps {
  margin?: SizeValue | SizeValue[]
  marginStart?: SizeValue | SizeValue[]
  marginEnd?: SizeValue | SizeValue[]
  marginX?: SizeValue | SizeValue[]
  marginY?: SizeValue | SizeValue[]
  marginLeft?: SizeValue | SizeValue[]
  marginRight?: SizeValue | SizeValue[]
  marginBottom?: SizeValue | SizeValue[]
  marginTop?: SizeValue | SizeValue[]
}

export interface SamuraiUIPositioningProps {
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
  top?: SizeValue | SizeValue[]
  left?: SizeValue | SizeValue[]
  right?: SizeValue | SizeValue[]
  bottom?: SizeValue | SizeValue[]
  start?: SizeValue | SizeValue[]
  end?: SizeValue | SizeValue[]
  zIndex?: number | number[]
}

export interface SamuraiUIDisplayProps {
  display?: Display | Display[]
  visibility?: Visibility | Visibility[]
  cursor?: Cursor | Cursor[]
  boxShadow?: ShadowTypes | ShadowTypes[]
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
