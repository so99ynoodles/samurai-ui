import React from 'react'
import { mergeProps } from '@react-aria/utils'
import { useHover } from '@react-aria/interactions'
import { SamuraiUIContainerProps } from '../../types'
import { StyledContainer } from './styled'

function Container(
  props: SamuraiUIContainerProps,
  ref?: React.RefObject<HTMLElement>
) {
  const { children, elementType = 'div' } = props
  const containerRef = ref || React.useRef<HTMLDivElement>(null)
  const { hoverProps } = useHover(props)
  return (
    <StyledContainer
      {...props}
      ref={containerRef}
      elementType={elementType}
      containerProps={{ ...hoverProps }}
    >
      {children}
    </StyledContainer>
  )
}

const _Container = React.forwardRef(Container)

export { _Container as Container }
