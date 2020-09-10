import React from 'react'
import { useTextField } from '@react-aria/textfield'
import { useHover } from '@react-aria/interactions'
import { mergeProps } from '@react-aria/utils'
import { SamuraiUITextFieldProps } from '../../types'
import { TextFieldWrapper, StyledLabel, StyledInput } from './styled'

function TextField(
  props: SamuraiUITextFieldProps,
  ref?: React.RefObject<HTMLInputElement>
) {
  const {
    className,
    autoFocus,
    label,
    placeholder,
    onChange,
    type,
    borderColor,
    ...otherProps
  } = props
  const textFieldRef = ref || React.useRef<HTMLInputElement>(null)
  const { labelProps, inputProps } = useTextField(props, textFieldRef)
  const { isHovered, hoverProps } = useHover(props)

  return (
    <TextFieldWrapper {...otherProps}>
      {label && <StyledLabel {...labelProps}>{label}</StyledLabel>}
      <StyledInput
        {...mergeProps(inputProps, hoverProps)}
        isHovered={isHovered}
        autoFocus={autoFocus}
        placeholder={placeholder}
        borderColor={borderColor}
      />
    </TextFieldWrapper>
  )
}

const _TextField = React.forwardRef(TextField)

export { _TextField as TextField }
