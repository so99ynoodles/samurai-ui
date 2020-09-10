import styled, { css } from 'styled-components'
import {
  SamuraiUITextFieldProps,
  SamuraiUITextFieldInputProps,
  SamuraiUITextFieldLabelProps,
} from '../../types'
import { resolveComponentProps, isSamuraiUIColors } from '../../utils'

export const StyledLabel = styled.label<SamuraiUITextFieldLabelProps>`
  font-size: ${({ theme }) => theme.typography.sizes.min};
  color: ${({ theme }) => theme.typography.colors['text:default']};

  ${({ isRequired }) =>
    isRequired &&
    css`
      &::after {
        content: '*';
        color: ${({ theme }) => theme.typography.colors['text:error']};
      }
    `}
`

export const StyledInput = styled.input<SamuraiUITextFieldInputProps>`
  font-size: ${({ theme }) => theme.typography.sizes.small};
  color: ${({ theme }) => theme.typography.colors['text:default']};
  padding: ${({ theme }) =>
    `${theme.spacing['size:004']} ${theme.spacing['size:008']}`};
  border: ${({ theme, borderColor, vivid }) =>
    isSamuraiUIColors(borderColor)
      ? vivid
        ? `1px solid ${theme.palette[borderColor].vivid};`
        : `1px solid ${theme.palette[borderColor].soft};`
      : `1px solid ${borderColor || theme.colors.background};`}
  box-shadow: ${({ theme, borderColor, vivid }) =>
    isSamuraiUIColors(borderColor)
      ? vivid
        ? theme.shadows.small(theme.palette[borderColor].vivid)
        : theme.shadows.small(theme.palette[borderColor].soft)
      : theme.shadows.small()};
  transition: all 0.2s;
  flex-grow: 1;

  ${({ isHovered, theme, borderColor, vivid }) =>
    isHovered &&
    css`
      box-shadow: ${isSamuraiUIColors(borderColor)
        ? vivid
          ? theme.shadows.medium(theme.palette[borderColor].vivid)
          : theme.shadows.medium(theme.palette[borderColor].soft)
        : theme.shadows.medium()};
    `}

  outline-color: ${({ theme, borderColor, vivid }) =>
    isSamuraiUIColors(borderColor)
      ? vivid
        ? theme.palette[borderColor!].vivid
        : theme.palette[borderColor!].soft
      : theme.colors.outline};
  outline-radius: 0;

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
