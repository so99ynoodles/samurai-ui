import React from 'react'
import styled, { css } from 'styled-components'
import { resolveComponentProps, resolveResponsiveProps } from '../../utils'
import { isSamuraiUIColors } from '../../utils/resolveColors'
import {
  SamuraiUIButtonProps,
  SamuraiUIInteractionProps,
  Theme,
  RadiusTypes,
} from '../../types'

const buttonCss = css<SamuraiUIButtonProps & SamuraiUIInteractionProps>`
  font-size: ${({ theme }) => theme.typography.sizes.small};
  line-height: ${({ theme }) => theme.typography.sizes.small};
  display: ${({ fluid }) => (fluid ? 'block' : 'inline-block')};
  width: ${({ fluid }) => (fluid ? '100%' : undefined)};
  cursor: ${(props) => props.cursor || 'default'};
  padding: ${({ theme }) =>
    `${theme.spacing['size:004']} ${theme.spacing['size:008']}`};

  ${({ theme, radius }) =>
    css`
      ${resolveResponsiveProps(
        'border-radius',
        theme,
        radius,
        (theme: Theme, radius: RadiusTypes) => theme.radius[radius] || radius,
        theme.radius.small
      )}
    `}

  border: 1px solid
    ${({ theme, buttonColor, vivid }) =>
    isSamuraiUIColors(buttonColor)
      ? vivid
        ? theme.palette[buttonColor!].deep
        : theme.palette[buttonColor!].dull
      : theme.colors.border};
  color: ${({ theme, buttonColor }) =>
    isSamuraiUIColors(buttonColor)
      ? theme.palette.white
      : theme.typography.colors['text:default']};
  background-color: ${({ theme, buttonColor, vivid }) =>
    isSamuraiUIColors(buttonColor)
      ? vivid
        ? theme.palette[buttonColor!].bright
        : theme.palette[buttonColor!].light
      : theme.colors.background};
  outline-color: ${({ theme }) => theme.colors.outline};
  ${({ isHovered, theme, buttonColor, vivid }) =>
    isHovered &&
    css`
      background-color: ${isSamuraiUIColors(buttonColor)
        ? vivid
          ? theme.palette[buttonColor!].strong
          : theme.palette[buttonColor!].soft
        : theme.colors['background:hover']};
      box-shadow: ${theme.shadows.medium};
    `}
  ${({ isPressed, theme, buttonColor, vivid }) =>
    isPressed &&
    css`
      background-color: ${isSamuraiUIColors(buttonColor)
        ? vivid
          ? theme.palette[buttonColor!].deep
          : theme.palette[buttonColor!].dull
        : theme.colors['background:active']};
    `}
  ${({ isDisabled, theme, buttonColor }) =>
    isDisabled &&
    css`
      color: ${theme.typography.colors['text:disabled']};
      background-color: ${isSamuraiUIColors(buttonColor)
        ? theme.palette[buttonColor!].pale
        : theme.colors.background};
    `}
    ${(props) => resolveComponentProps(props.theme, props)};
`

const ButtonWrapper = (
  props: SamuraiUIButtonProps &
    SamuraiUIInteractionProps & {
      buttonProps: any
    },
  ref?: React.RefObject<HTMLElement>
) => {
  const { buttonProps, className, children, type } = props
  return (
    <props.elementType
      ref={ref}
      type={props.elementType === 'button' ? type : undefined}
      className={className}
      {...buttonProps}
    >
      {children}
    </props.elementType>
  )
}

export const StyledButton = styled(React.forwardRef(ButtonWrapper))`
  ${buttonCss}
`
