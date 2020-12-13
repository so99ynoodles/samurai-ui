import styled, { css } from 'styled-components'
import { SamuraiUIColors } from '../../foundations'
import {
  SamuraiUITextFieldProps,
  SamuraiUITextFieldInputProps,
  SamuraiUITextFieldLabelProps,
} from '../../types'
import { resolveComponentProps, resolveColors } from '../../utils'

export const StyledLabel = styled.label<SamuraiUITextFieldLabelProps>`
  font-size: ${({ theme }) => theme.typography.sizes.min};
  color: ${({ theme }) => theme.typography.colors['text:default']};

  ${({ isRequired }) =>
    isRequired &&
    css`
      &::after {
        content: ${typeof isRequired === 'string' ? isRequired : '*'};
        color: ${({ theme }) => theme.typography.colors['text:error']};
      }
    `}
`

export const StyledInput = styled.input<SamuraiUITextFieldInputProps>`
  font-size: ${({ theme }) => theme.typography.sizes.small};
  color: ${({ theme }) => theme.typography.colors['text:default']};
  padding: ${({ theme }) =>
    `${theme.spacing['size:004']} ${theme.spacing['size:008']}`};
  border: ${({ theme, borderColor }) =>
    `1px solid ${
      resolveColors(theme, borderColor) || theme.colors.background
    };`}
  box-shadow: ${({ theme, shadowColor }) => theme.shadows.small(shadowColor)};
  transition: all 0.2s;
  flex-grow: 1;

  ${({ isHovered, theme, shadowColor }) =>
    isHovered &&
    css`
      box-shadow: ${theme.shadows.medium(shadowColor)};
    `}

  outline-color: ${({ theme, outlineColor }) =>
    resolveColors(theme, outlineColor) || theme.colors.outline};
  outline-radius: 0;

  &:placeholder {
    color: ${({ theme }) => theme.typography.colors['text:help']};
  }

  ${({ colorVariant, theme, isHovered, isDisabled }) =>
    colorVariant &&
    css`
      border-color: ${SamuraiUIColors[colorVariant].soft};
      color: ${theme.palette.white};
      box-shadow: ${theme.shadows.small(SamuraiUIColors[colorVariant].soft)};
      outline-color: ${SamuraiUIColors[colorVariant].soft};
      ${isHovered &&
      css`
        border-color: ${SamuraiUIColors[colorVariant].light};
        box-shadow: ${theme.shadows.medium(SamuraiUIColors[colorVariant].soft)};
        outline-color: ${SamuraiUIColors[colorVariant].light};
      `}
      ${isDisabled &&
      css`
        border-color: ${SamuraiUIColors[colorVariant].pale};
        box-shadow: none;
      `};
    `}
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
