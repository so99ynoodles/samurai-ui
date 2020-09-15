import { css } from 'styled-components'
import {
  SamuraiUIComponentProps,
  Theme,
  SamuraiUIPaddingProps,
  SamuraiUITextProps,
} from '../../types'
import { resolveSize } from '../resolveSize'
import { resolveShadow } from '../resolveShadow'
import { resolveHide, resolveShow } from '../resolveDisplay'
import {
  resolveFontColors,
  resolveFontSize,
  resolveLineSize,
} from '../resolveTypography'
import { resolveResponsiveProps } from '../resolveResponsiveProps'

export function resolveComponentProps(
  theme: Theme,
  props: SamuraiUIComponentProps & SamuraiUIPaddingProps & SamuraiUITextProps
) {
  return css`
    ${resolveResponsiveProps(
      'color',
      theme,
      props.textColor,
      resolveFontColors
    )};
    ${resolveResponsiveProps('text-align', theme, props.textAlign)};
    ${resolveResponsiveProps(
      'font-size',
      theme,
      props.textSize,
      resolveFontSize,
      theme.typography.sizes.small
    )};
    ${resolveResponsiveProps(
      'line-height',
      theme,
      props.lineHeight,
      resolveLineSize,
      theme.typography.lineSizes.small
    )};
    font-weight: ${props.bold ? 'bold' : 'normal'};
    text-decoration: ${props.underline && 'underline'}
      ${props.lineThrough && 'line-through'};
    text-transform: ${props.upperCase ? 'uppercase' : 'none'};
    font-style: ${props.italic ? 'italic' : 'normal'};

    &&& {
      ${resolveResponsiveProps('width', theme, props.width, resolveSize)};
      ${resolveResponsiveProps(
        'min-width',
        theme,
        props.minWidth,
        resolveSize
      )};
      ${resolveResponsiveProps(
        'max-width',
        theme,
        props.maxWidth,
        resolveSize
      )};
      ${resolveResponsiveProps('height', theme, props.height, resolveSize)};
      ${resolveResponsiveProps(
        'min-height',
        theme,
        props.minHeight,
        resolveSize
      )};
      ${resolveResponsiveProps(
        'max-height',
        theme,
        props.maxHeight,
        resolveSize
      )};

      ${resolveResponsiveProps('flex', theme, props.flex)};
      ${resolveResponsiveProps('flex-grow', theme, props.flexGrow)};
      ${resolveResponsiveProps('flex-shrink', theme, props.flexShrink)};
      ${resolveResponsiveProps('flex-basis', theme, props.flexBasis)};
      ${resolveResponsiveProps('align-self', theme, props.alignSelf)};
      ${resolveResponsiveProps('justify-self', theme, props.justifySelf)};
      ${resolveResponsiveProps('order', theme, props.order)};
      ${resolveResponsiveProps('grid-area', theme, props.gridArea)};
      ${resolveResponsiveProps('grid-column', theme, props.gridColumn)};
      ${resolveResponsiveProps('grid-row', theme, props.gridRow)};
      ${resolveResponsiveProps(
        'grid-column-start',
        theme,
        props.gridColumnStart
      )};
      ${resolveResponsiveProps('grid-column-end', theme, props.gridColumnEnd)};
      ${resolveResponsiveProps('grid-row-start', theme, props.gridRowStart)};
      ${resolveResponsiveProps('grid-row-end', theme, props.gridRowEnd)};

      ${resolveResponsiveProps('margin', theme, props.margin, resolveSize)};
      ${resolveResponsiveProps(
        'margin-inline-start',
        theme,
        props.marginStart,
        resolveSize
      )};
      ${resolveResponsiveProps(
        'margin-inline-end',
        theme,
        props.marginEnd,
        resolveSize
      )};
      ${resolveResponsiveProps(
        'margin-left',
        theme,
        props.marginLeft || props.marginX,
        resolveSize
      )};
      ${resolveResponsiveProps(
        'margin-right',
        theme,
        props.marginRight || props.marginX,
        resolveSize
      )};
      ${resolveResponsiveProps(
        'margin-top',
        theme,
        props.marginTop || props.marginY,
        resolveSize
      )};
      ${resolveResponsiveProps(
        'margin-bottom',
        theme,
        props.marginBottom || props.marginY,
        resolveSize
      )};

      ${resolveResponsiveProps('padding', theme, props.padding, resolveSize)};
      ${resolveResponsiveProps(
        'padding-left',
        theme,
        props.paddingLeft || props.paddingX,
        resolveSize
      )};
      ${resolveResponsiveProps(
        'padding-right',
        theme,
        props.paddingRight || props.paddingX,
        resolveSize
      )};
      ${resolveResponsiveProps(
        'padding-top',
        theme,
        props.paddingTop || props.paddingY,
        resolveSize
      )};
      ${resolveResponsiveProps(
        'padding-bottom',
        theme,
        props.paddingBottom || props.paddingY,
        resolveSize
      )};

      ${resolveResponsiveProps('position', theme, props.position)};
      ${resolveResponsiveProps('top', theme, props.top, resolveSize)};
      ${resolveResponsiveProps('left', theme, props.left, resolveSize)};
      ${resolveResponsiveProps('right', theme, props.right, resolveSize)};
      ${resolveResponsiveProps('bottom', theme, props.bottom, resolveSize)};
      ${resolveResponsiveProps(
        'inset-inline-start',
        theme,
        props.start,
        resolveSize
      )};
      ${resolveResponsiveProps(
        'inset-inline-end',
        theme,
        props.end,
        resolveSize
      )};
      ${resolveResponsiveProps('z-index', theme, props.zIndex)};

      ${resolveResponsiveProps('display', theme, props.display)};
      ${resolveResponsiveProps('visibility', theme, props.visibility)};
      ${resolveResponsiveProps('cursor', theme, props.cursor)};
      ${resolveResponsiveProps(
        'box-shadow',
        theme,
        props.boxShadow,
        resolveShadow
      )};
      ${resolveResponsiveProps('user-select', theme, props.userSelect)};

      ${resolveHide(theme, props.hide)}
      ${resolveShow(theme, props.show)}
    }
  `
}
