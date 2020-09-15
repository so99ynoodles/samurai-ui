import React from 'react'
import styled, { css } from 'styled-components'
import {
  resolveComponentProps,
  resolveResponsiveProps,
  resolveColors,
  resolveSize,
} from '../../utils'
import {
  SamuraiUIButtonProps,
  SamuraiUIInteractionProps,
  Theme,
  RadiusTypes,
} from '../../types'
import { darken, lighten } from 'polished'
import { SamuraiUIColors } from '../../foundations'

const buttonCss = css<SamuraiUIButtonProps & SamuraiUIInteractionProps>`
  font-size: ${({ theme }) => theme.typography.sizes.small};
  line-height: ${({ theme }) => theme.typography.lineSizes.small};
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
        theme.radius.none
      )}
    `}
  transition: all 0.2s;
  border: ${({ theme, borderWidth, borderColor }) =>
    `${resolveSize(theme, borderWidth || 0)} solid ${resolveColors(
      theme,
      borderColor || theme.palette.white
    )}`};
  box-shadow: ${({ theme, shadowColor }) => theme.shadows.small(shadowColor)};
  color: ${({ theme }) => theme.typography.colors['text:default']};
  background-color: ${({ theme, backgroundColor }) =>
    resolveColors(theme, backgroundColor) || theme.colors.background};
  outline-color: ${({ theme, outlineColor }) =>
    resolveColors(theme, outlineColor) || theme.colors.outline};
  outline-radius: 0;
  outline-offset: 4px;
  ${({ isHovered, theme, backgroundColor, shadowColor }) =>
    isHovered &&
    css`
      background-color: ${backgroundColor
        ? lighten(0.1, resolveColors(theme, backgroundColor))
        : theme.colors['background:hover']};
      box-shadow: ${theme.shadows.medium(shadowColor)};
    `}
  ${({ isPressed, theme, backgroundColor }) =>
    isPressed &&
    css`
      background-color: ${backgroundColor
        ? darken(0.1, resolveColors(theme, backgroundColor))
        : theme.colors['background:active']};
    `}
    ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
      color: ${theme.typography.colors['text:disabled']};
      background-color: ${theme.colors.background};
    `}

    ${({ colorVariant, theme, isPressed, isHovered, isDisabled }) =>
    colorVariant &&
    css`
      background-color: ${SamuraiUIColors[colorVariant].soft};
      color: ${theme.palette.white};
      box-shadow: ${theme.shadows.small(SamuraiUIColors[colorVariant].soft)};
      outline-color: ${SamuraiUIColors[colorVariant].soft};
      ${isHovered &&
      css`
        background-color: ${SamuraiUIColors[colorVariant].light};
        box-shadow: ${theme.shadows.medium(SamuraiUIColors[colorVariant].soft)};
        outline-color: ${SamuraiUIColors[colorVariant].light};
      `}
      ${isPressed &&
      css`
        background-color: ${SamuraiUIColors[colorVariant].dull};
        box-shadow: ${theme.shadows.small(SamuraiUIColors[colorVariant].soft)};
        outline-color: ${SamuraiUIColors[colorVariant].dull};
      `}
        ${isDisabled &&
      css`
        background-color: ${SamuraiUIColors[colorVariant].pale};
        box-shadow: none;
      `};
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
