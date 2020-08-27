import styled, { css } from 'styled-components'
import { SamuraiUIFlexProps } from '../../types'
import {
  resolveComponentProps,
  resolveSize,
  resolveResponsiveProps,
} from '../../utils'

export const StyledFlex = styled.div<SamuraiUIFlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ wrap }) =>
    typeof wrap === 'string' ? wrap : wrap ? 'wrap' : 'nowrap'};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  ${({
    theme,
    flexDirection,
    wrap,
    justifyContent,
    alignContent,
    alignItems,
    gap,
    rowGap,
    columnGap,
  }) => css`
    ${resolveResponsiveProps('flex-direction', theme, flexDirection)}
    ${resolveResponsiveProps(
      'flex-wrap',
      theme,
      typeof wrap === 'string' ? wrap : wrap ? 'wrap' : 'nowrap'
    )}
    ${resolveResponsiveProps('justify-content', theme, justifyContent)}
    ${resolveResponsiveProps('align-content', theme, alignContent)}
    ${resolveResponsiveProps('align-items', theme, alignItems)}

    ${resolveResponsiveProps('gap', theme, gap, resolveSize)}
    ${resolveResponsiveProps('row-gap', theme, rowGap, resolveSize)}
    ${resolveResponsiveProps('column-gap', theme, columnGap, resolveSize)}
`};
  ${(props) => resolveComponentProps(props.theme, props)};
`
