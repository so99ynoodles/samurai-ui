import styled from 'styled-components'
import { SamuraiUIFlexProps } from '../../types'
import { resolveComponentProps, resolveSize } from '../../utils'

export const StyledFlex = styled.div<SamuraiUIFlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ wrap }) =>
    typeof wrap === 'string' ? wrap : wrap ? 'wrap' : 'nowrap'};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap, theme }) => resolveSize(theme, gap)};
  column-gap: ${({ columnGap, theme }) => resolveSize(theme, columnGap)};
  row-gap: ${({ rowGap, theme }) => resolveSize(theme, rowGap)};
  ${(props) => resolveComponentProps(props.theme, props)};
`
