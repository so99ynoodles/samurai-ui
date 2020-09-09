import styled from 'styled-components'
import { SamuraiUITextFieldProps } from '../../types'
import { resolveComponentProps, resolveColors } from '../../utils'

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.sizes.min};
  color: ${({ theme }) => theme.typography.colors['text:default']};
`

export const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.typography.sizes.small};
  color: ${({ theme }) => theme.typography.colors['text:default']};
  padding: ${({ theme }) =>
    `${theme.spacing['size:004']} ${theme.spacing['size:008']}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.small};

  &:placeholder {
    color: ${({ theme }) => theme.typography.colors['text:help']};
  }
`

export const TextFieldWrapper = styled.div<SamuraiUITextFieldProps>`
  display: flex;
  flex-direction: ${({ labelPosition = 'top' }) =>
    labelPosition === 'top' ? 'column' : 'row'};
  gap: ${({ theme, labelPosition = 'top' }) =>
    labelPosition === 'top'
      ? theme.spacing['size:004']
      : theme.spacing['size:008']};
  align-items: ${({ labelPosition = 'top' }) =>
    labelPosition === 'top' ? 'inherit' : 'center'};

  ${(props) => resolveComponentProps(props.theme, props)}
`
