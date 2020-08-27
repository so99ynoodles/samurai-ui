import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grid } from '..'

storiesOf('Grid', module)
  .add('default', () => (
    <Grid areas={['1 2 3', '4 5 6', '7 8 9']}>
      <div>Children 1</div>
      <div>Children 2</div>
      <div>Children 3</div>
      <div>Children 4</div>
      <div>Children 5</div>
      <div>Children 6</div>
      <div>Children 7</div>
      <div>Children 8</div>
      <div>Children 9</div>
    </Grid>
  ))
  .add('gap', () => (
    <Grid
      areas={['1 2 3', '4 5 6', '7 8 9']}
      alignContent="center"
      gap="size:016"
    >
      <div>Children 1</div>
      <div>Children 2</div>
      <div>Children 3</div>
      <div>Children 4</div>
      <div>Children 5</div>
      <div>Children 6</div>
      <div>Children 7</div>
      <div>Children 8</div>
      <div>Children 9</div>
    </Grid>
  ))
