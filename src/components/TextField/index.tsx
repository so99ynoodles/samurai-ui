import React from 'react'
import { useTextField } from '@react-aria/textfield'
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
    ...otherProps
  } = props
  const textFieldRef = ref || React.useRef<HTMLInputElement>(null)
  const { labelProps, inputProps } = useTextField(props, textFieldRef)

  return (
    <TextFieldWrapper {...otherProps}>
      {label && <StyledLabel {...labelProps}>{label}</StyledLabel>}
      <StyledInput {...inputProps} placeholder={placeholder} />
    </TextFieldWrapper>
  )
}

const _TextField = React.forwardRef(TextField)

export { _TextField as TextField }
