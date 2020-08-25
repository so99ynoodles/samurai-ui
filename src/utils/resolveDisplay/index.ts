import { css } from 'styled-components'
import { Theme, BreakpointTypes } from '../../types'

export function resolveHide(theme: Theme, hide?: BreakpointTypes[] | boolean) {
  if (typeof hide === 'boolean') {
    return css`
      display: none;
    `
  }

  if (Array.isArray(hide)) {
    return hide.map(
      (breakpoint) => css`
        @media screen and ${theme.breakpoints[breakpoint]} {
          display: none;
        }
      `
    )
  }

  return ''
}

export function resolveShow(theme: Theme, show?: BreakpointTypes[] | boolean) {
  if (typeof show === 'boolean' && show) {
    return css`
      display: inline-block;
    `
  }

  if (Array.isArray(show)) {
    return show.map(
      (breakpoint) => css`
        @media screen and ${theme.breakpoints[breakpoint]} {
          display: inline-block;
        }
      `
    )
  }
  return ''
}
