import React from 'react'
import { useButton } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'
import { mergeProps } from '@react-aria/utils'
import { SamuraiUIButtonProps } from '../../types/Button'
import { StyledButton } from './styled'

function Button(props: SamuraiUIButtonProps) {
  const { children, className, elementType = 'button', ...otherProps } = props
  const buttonRef = React.useRef<HTMLElement>(null)
  const { buttonProps, isPressed } = useButton(
    {
      ...props,
    },
    buttonRef
  )
  const { isHovered, hoverProps } = useHover(props)

  return (
    <StyledButton
      {...otherProps}
      buttonProps={{ ...mergeProps(buttonProps, hoverProps) }}
      isPressed={isPressed}
      isHovered={isHovered}
      elementType={elementType}
      className={className}
    >
      {children}
    </StyledButton>
  )
}

export default Button
