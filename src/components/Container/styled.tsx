import React from 'react'
import styled, { css } from 'styled-components'
import { SamuraiUIContainerProps, SamuraiUIInteractionProps } from '../../types'
import { resolveComponentProps, resolveColors } from '../../utils'

const containerCss = css<SamuraiUIContainerProps>`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor
      ? resolveColors(theme, backgroundColor)
      : theme.colors.background};
  ${(props) => resolveComponentProps(props.theme, props)};
`

const ContainerWrapper = (
  props: SamuraiUIContainerProps &
    SamuraiUIInteractionProps & { containerProps: any },
  ref?: React.RefObject<HTMLElement>
) => {
  const { containerProps, className, children } = props
  return (
    <props.elementType ref={ref} className={className} {...containerProps}>
      {children}
    </props.elementType>
  )
}

export const StyledContainer = styled(React.forwardRef(ContainerWrapper))`
  ${containerCss}
`
