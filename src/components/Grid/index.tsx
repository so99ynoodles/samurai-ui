import React from 'react'
import { SamuraiUIGridProps } from '../../types'
import { StyledGrid } from './styled'

function Grid(props: SamuraiUIGridProps) {
  return <StyledGrid {...props} />
}

export default Grid
