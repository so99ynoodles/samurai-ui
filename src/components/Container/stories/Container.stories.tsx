import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Container } from '..'

storiesOf('Container', module)
  .add('default', () => <Container>Container</Container>)
  .add('textColor and textSize', () => (
    <Container textColor="text:default" textSize="max" padding="size:016">
      Hello World!
    </Container>
  ))
  .add('textAlign', () => <Container textAlign="center">Container</Container>)
  .add('backgroundColor', () => (
    <Container backgroundColor="indigo" userSelect="none">
      Container
    </Container>
  ))
