import React from 'react'
import { mergeProps } from '@react-aria/utils'
import { usePress, useHover } from '@react-aria/interactions'
import { SamuraiUIContainerProps } from '../../types'
import { StyledContainer } from './styled'

function Container(props: SamuraiUIContainerProps) {
  const { children } = props
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { pressProps } = usePress({ ref: containerRef })
  const { hoverProps } = useHover(props)
  return (
    <StyledContainer {...props} {...mergeProps(pressProps, hoverProps)}>
      {children}
    </StyledContainer>
  )
}

export default Container
