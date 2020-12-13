import styled, { css } from 'styled-components'
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
  box-shadow: ${({ theme, shadowColor }) => theme.shadows.small(shadowColor || "none")};
  transition: all 0.2s;
  flex-grow: 1;

  ${({ isHovered, theme, shadowColor }) =>
    isHovered &&
    css`
      box-shadow: ${theme.shadows.medium(shadowColor || "none")};
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
      border-color: ${theme.palette[colorVariant][300]};
      color: ${theme.palette.white};
      box-shadow: ${theme.shadows.small(theme.palette[colorVariant][300])};
      outline-color: ${theme.palette[colorVariant][300]};
      ${isHovered &&
      css`
        border-color: ${theme.palette[colorVariant][400]};
        box-shadow: ${theme.shadows.medium(theme.palette[colorVariant][300])};
        outline-color: ${theme.palette[colorVariant][400]};
      `}
      ${isDisabled &&
      css`
        border-color: ${theme.palette[colorVariant][100]};
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
