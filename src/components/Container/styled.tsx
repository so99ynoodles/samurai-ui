import styled from 'styled-components'
import { SamuraiUIContainerProps } from '../../types'
import { resolveComponentProps } from '../../utils'

export const StyledContainer = styled.div<SamuraiUIContainerProps>`
  ${(props) => resolveComponentProps(props.theme, props)};
`
