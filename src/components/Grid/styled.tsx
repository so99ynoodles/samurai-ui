import styled from 'styled-components'
import { SamuraiUIGridProps } from '../../types'
import { resolveComponentProps, resolveSize } from '../../utils'

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
  grid-auto-rows: ${({ autoRows, theme }) => resolveSize(theme, autoRows)};
  grid-auto-columns: ${({ autoColumns, theme }) =>
    resolveSize(theme, autoColumns)};
  grid-auto-flow: ${({ autoFlow }) => autoFlow};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap, theme }) => resolveSize(theme, gap)};
  column-gap: ${({ columnGap, theme }) => resolveSize(theme, columnGap)};
  row-gap: ${({ rowGap, theme }) => resolveSize(theme, rowGap)};
  ${(props) => resolveComponentProps(props.theme, props)};
`
