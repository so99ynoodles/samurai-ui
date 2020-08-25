import { css } from 'styled-components'
import {
  SamuraiUIComponentProps,
  Theme,
  SamuraiUIPaddingProps,
} from '../../types'
import { resolveSize } from '../resolveSize'
import { resolveShadow } from '../resolveShadow'
import { resolveHide, resolveShow } from '../resolveDisplay'

export function resolveComponentProps(
  theme: Theme,
  props: SamuraiUIComponentProps & SamuraiUIPaddingProps
) {
  return css`
    &&& {
      width: ${resolveSize(theme, props.width)};
      min-width: ${resolveSize(theme, props.minWidth)};
      max-width: ${resolveSize(theme, props.maxWidth)};
      height: ${resolveSize(theme, props.height)};
      min-height: ${resolveSize(theme, props.minHeight)};
      max-height: ${resolveSize(theme, props.maxHeight)};

      flex: ${props.flex};
      flex-grow: ${props.flexGrow};
      flex-shrink: ${props.flexShrink};
      flex-basis: ${props.flexBasis};
      align-self: ${props.alignSelf};
      justify-self: ${props.justifySelf};
      order: ${props.order};
      grid-area: ${props.gridArea};
      grid-column: ${props.gridColumn};
      grid-row: ${props.gridRow};
      grid-column-start: ${props.gridColumnStart};
      grid-column-end: ${props.gridColumnEnd};
      grid-row-start: ${props.gridRowStart};
      grid-row-end: ${props.gridRowEnd};

      margin: ${resolveSize(theme, props.margin)};
      margin-inline-start: ${resolveSize(theme, props.marginStart)};
      margin-inline-end: ${resolveSize(theme, props.marginEnd)};
      margin-left: ${resolveSize(theme, props.marginLeft || props.marginX)};
      margin-right: ${resolveSize(theme, props.marginRight || props.marginX)};
      margin-top: ${resolveSize(theme, props.marginTop || props.marginY)};
      margin-bottom: ${resolveSize(theme, props.marginBottom || props.marginY)};

      padding: ${resolveSize(theme, props.padding)};
      padding-left: ${resolveSize(theme, props.paddingLeft || props.paddingX)};
      padding-right: ${resolveSize(
        theme,
        props.paddingRight || props.paddingX
      )};
      padding-top: ${resolveSize(theme, props.paddingTop || props.paddingY)};
      padding-bottom: ${resolveSize(
        theme,
        props.paddingBottom || props.paddingY
      )};

      position: ${props.position};
      top: ${resolveSize(theme, props.top)};
      left: ${resolveSize(theme, props.left)};
      right: ${resolveSize(theme, props.right)};
      bottom: ${resolveSize(theme, props.bottom)};
      inset-inline-start: ${resolveSize(theme, props.start)};
      inset-inline-end: ${resolveSize(theme, props.end)};
      z-index: ${props.zIndex};

      display: ${props.display};
      visibility: ${props.visibility};
      cursor: ${props.cursor};
      box-shadow: ${resolveShadow(theme, props.boxShadow)};

      ${resolveHide(theme, props.hide)}
      ${resolveShow(theme, props.show)}
    }
  `
}
