import { Theme, BreakpointTypes } from '../../types'
import { css } from 'styled-components'

const responsiveArray: BreakpointTypes[] = [
  'mobile',
  'tablet',
  'laptop',
  'desktop',
]

export function resolveResponsiveProps(
  propertyName: string,
  theme: Theme,
  propertyValue: any,
  resolver: (theme: Theme, value: any) => string | undefined = (_, value) =>
    value,
  defaultValue?: any
) {
  const stylesArray = []

  /** for default */
  stylesArray.push(css`
    ${propertyName}: ${resolver(theme, propertyValue || defaultValue)};
  `)

  /** if the property is array */
  if (Array.isArray(propertyValue)) {
    stylesArray.push(
      propertyValue.map((v, index) => {
        return css`
          @media screen and ${theme.breakpoints[responsiveArray[index]]} {
            ${propertyName}: ${resolver(theme, v || defaultValue)};
          }
        `
      })
    )

    /** set mobile style as default */
    if (propertyValue.length) {
      stylesArray.push(css`
        ${propertyName}: ${resolver(theme, propertyValue[0])};
      `)
    }
  }

  return stylesArray
}
