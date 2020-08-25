import { BreakpointTypes } from '../../types'

const size = {
  mobile: 480,
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
}

export const breakpoints: {
  [key in BreakpointTypes]: string
} = {
  mobile: `(max-width: ${size.mobile - 1}px)`,
  tablet: `(min-width: ${size.mobile}px) and (max-width: ${size.tablet - 1}px)`,
  laptop: `(min-width: ${size.tablet}px) and (max-width: ${size.laptop - 1}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
}
