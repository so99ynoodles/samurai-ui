import styled, { css } from 'styled-components'
import { SamuraiUIGridProps } from '../../types'
import {
  resolveComponentProps,
  resolveSize,
  resolveResponsiveProps,
} from '../../utils'

export const StyledGrid = styled.div<SamuraiUIGridProps>`
  display: grid;
  grid-template-areas: ${({ areas }) =>
    areas?.map((area) => `"${area}"`)?.join('')};
  grid-template-rows: ${({ rows, theme }) =>
    Array.isArray(rows)
      ? rows.map((row) => resolveSize(theme, row)).join(' ')
      : rows}
  grid-template-columns: ${({ columns, theme }) =>
    Array.isArray(columns)
      ? columns.map((column) => resolveSize(theme, column)).join(' ')
      : columns}

  ${({
    theme,
    autoFlow,
    justifyContent,
    justifyItems,
    alignContent,
    alignItems,
    autoRows,
    autoColumns,
    gap,
    rowGap,
    columnGap,
  }) => css`
    ${resolveResponsiveProps('grid-auto-flow', theme, autoFlow)}
    ${resolveResponsiveProps('justify-content', theme, justifyContent)}
    ${resolveResponsiveProps('justify-items', theme, justifyItems)}
    ${resolveResponsiveProps('align-content', theme, alignContent)}
    ${resolveResponsiveProps('align-items', theme, alignItems)}
    ${resolveResponsiveProps('grid-auto-rows', theme, autoRows, resolveSize)}
    ${resolveResponsiveProps(
      'grid-auto-columns',
      theme,
      autoColumns,
      resolveSize
    )}
    ${resolveResponsiveProps('gap', theme, gap, resolveSize)}
    ${resolveResponsiveProps('row-gap', theme, rowGap, resolveSize)}
    ${resolveResponsiveProps('column-gap', theme, columnGap, resolveSize)}
`};
  ${(props) => resolveComponentProps(props.theme, props)};
`
