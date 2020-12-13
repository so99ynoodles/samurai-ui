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
  box-shadow: ${({ theme, shadowColor }) => theme.shadows.small(shadowColor || "none")};
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
      box-shadow: ${theme.shadows.medium(shadowColor || "none")};
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
      cursor: not-allowed;
    `}

    ${({ colorVariant, theme, isPressed, isHovered, isDisabled }) =>
    colorVariant &&
    css`
      background-color: ${theme.palette[colorVariant][400]};
      color: ${theme.palette.white};
      box-shadow: ${theme.shadows.small(theme.palette[colorVariant][400])};
      outline-color: ${theme.palette[colorVariant][400]};
      ${isHovered &&
      css`
        background-color: ${theme.palette[colorVariant][300]};
        box-shadow: ${theme.shadows.medium(theme.palette[colorVariant][400])};
        outline-color: ${theme.palette[colorVariant][300]};
      `}
      ${isPressed &&
      css`
        background-color: ${theme.palette[colorVariant][800]};
        box-shadow: ${theme.shadows.small(theme.palette[colorVariant][400])};
        outline-color: ${theme.palette[colorVariant][800]};
      `}
        ${isDisabled &&
      css`
        background-color: ${theme.palette[colorVariant][100]};
        box-shadow: none;
        cursor: not-allowed;
      `};
    `}

    ${({ sizeVariant, theme }) => {
    if (sizeVariant) {
      switch (sizeVariant) {
        case 'min':
          return css`
            font-size: ${theme.typography.sizes.min};
            line-height: ${theme.typography.lineSizes.min};
            padding: ${theme.spacing['size:004']} ${theme.spacing['size:008']};
          `
        case 'small':
          return css`
            font-size: ${theme.typography.sizes.small};
            line-height: ${theme.typography.lineSizes.small};
            padding: ${theme.spacing['size:004']} ${theme.spacing['size:008']};
          `

        case 'medium':
          return css`
            font-size: ${theme.typography.sizes.medium};
            line-height: ${theme.typography.lineSizes.medium};
            padding: ${theme.spacing['size:004']} ${theme.spacing['size:016']};
          `
        case 'large':
          return css`
            font-size: ${theme.typography.sizes.large};
            line-height: ${theme.typography.lineSizes.large};
            padding: ${theme.spacing['size:008']} ${theme.spacing['size:024']};
          `

        case 'max':
          return css`
            font-size: ${theme.typography.sizes.max};
            line-height: ${theme.typography.lineSizes.max};
            padding: ${theme.spacing['size:008']} ${theme.spacing['size:032']};
          `
        default:
          return
      }
    }
  }}
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
