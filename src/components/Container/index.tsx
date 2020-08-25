import React from 'react'
import { mergeProps } from '@react-aria/utils'
import { usePress, useHover } from '@react-aria/interactions'
import { SamuraiUIContainerProps } from '../../types'
import { StyledContainer } from './styled'

function Container(props: SamuraiUIContainerProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { pressProps } = usePress({ ref: containerRef })
  const { hoverProps } = useHover(props)
  return <StyledContainer {...mergeProps(pressProps, hoverProps)} />
}

export default Container
