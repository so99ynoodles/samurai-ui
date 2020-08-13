import React from 'react'
import styled, { css } from 'styled-components'
import { SamuraiUIButtonProps } from '../../types/Button'
import { resolveComponentProps } from '../../utils'
import { isSamuraiUIColors } from '../../utils/resolveColors'
import { SamuraiUIInteractionProps } from '../../types/shared'

const buttonCss = css<SamuraiUIButtonProps & SamuraiUIInteractionProps>`
  font-size: ${({ theme }) => theme.typography.sizes.small};
  display: inline-block;
  cursor: ${(props) => props.cursor || 'default'};
  padding: ${({ theme }) =>
    `${theme.spacing['size:004']} ${theme.spacing['size:008']}`};
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius ? theme.radius[borderRadius] : theme.radius.small};
  border: 1px solid
    ${({ theme, backgroundColor }) =>
      isSamuraiUIColors(backgroundColor)
        ? theme.palette[backgroundColor!].dull
        : theme.colors.border};
  color: ${({ theme, backgroundColor }) =>
    isSamuraiUIColors(backgroundColor)
      ? theme.palette.white
      : theme.typography.colors['text:default']};
  background-color: ${({ theme, backgroundColor }) =>
    isSamuraiUIColors(backgroundColor)
      ? theme.palette[backgroundColor!].light
      : theme.colors.background};
  outline-color: ${({ theme }) => theme.colors.outline};
    ${({ isHovered, theme, backgroundColor }) =>
      isHovered &&
      css`
    color: ${theme.palette.white};
    background-color: ${
      isSamuraiUIColors(backgroundColor)
        ? theme.palette[backgroundColor!].soft
        : theme.colors['background:hover']
    };}
    box-shadow: ${theme.shadows.medium};
  `}
    ${({ isPressed, theme, backgroundColor }) =>
      isPressed &&
      css`
    color: ${theme.palette.white};
    background-color: ${
      isSamuraiUIColors(backgroundColor)
        ? theme.palette[backgroundColor!].dull
        : theme.colors['background:active']
    };}
  `}
    ${(props) => resolveComponentProps(props.theme, props)};
`

export const StyledButton = styled<
  (
    props: SamuraiUIButtonProps &
      SamuraiUIInteractionProps & { buttonProps: any }
  ) => React.ReactElement<SamuraiUIButtonProps>
>(({ elementType, children, buttonProps, className, type }) =>
  React.createElement(
    elementType as string,
    {
      ...buttonProps,
      type: elementType === 'button' ? type : undefined,
      className,
    },
    children
  )
)`
  ${buttonCss}
`
