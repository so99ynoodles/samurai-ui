import { BreakpointTypes } from '../../types'

const size = {
  mobile: 480,
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
}

export const breakpoints: {
  max: {
    [key in BreakpointTypes]: string
  }
  min: {
    [key in BreakpointTypes]: string
  }
} = {
  max: {
    mobile: `(max-width: ${size.mobile - 1}px)`,
    tablet: `(max-width: ${size.tablet - 1}px)`,
    laptop: `(max-width: ${size.laptop - 1}px)`,
    desktop: `(max-width: ${size.desktop - 1}px)`,
  },
  min: {
    mobile: `(min-width: ${size.mobile}px)`,
    tablet: `(min-width: ${size.tablet}px)`,
    laptop: `(min-width: ${size.laptop}px)`,
    desktop: `(max-width: ${size.desktop}px)`,
  },
}
