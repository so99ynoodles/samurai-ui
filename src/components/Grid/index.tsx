import React from 'react'
import { SamuraiUIGridProps } from '../../types'
import { StyledGrid } from './styled'

export function Grid(props: SamuraiUIGridProps) {
  return <StyledGrid {...props} />
}
