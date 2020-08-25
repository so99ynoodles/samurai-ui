import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import Container from '..'

storiesOf('Container', module)
  .add('default', () => (
    <Container onPress={action('onPress')}>Container</Container>
  ))
  .add('textColor and textSize', () => (
    <Container textColor="text:default" textSize="max" padding="size:016">
      Hello World!
    </Container>
  ))
  .add('textAlign', () => (
    <Container textAlign="center" onPress={action('onPress')}>
      Container
    </Container>
  ))
