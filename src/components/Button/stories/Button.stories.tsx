import React from 'react'
import { actions } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import Button from '../'

storiesOf('Button', module)
  .add('default', () => (
    <Button onPress={() => actions('pressed')}>button</Button>
  ))
  .add('backgroundColor', () => (
    <>
      <Button marginEnd="size:004" backgroundColor="red">
        red
      </Button>
      <Button marginEnd="size:004" backgroundColor="yellow">
        yellow
      </Button>
      <Button marginEnd="size:004" backgroundColor="orange">
        orange
      </Button>
      <Button marginEnd="size:004" backgroundColor="green">
        green
      </Button>
      <Button marginEnd="size:004" backgroundColor="indigo">
        indigo
      </Button>
      <Button marginEnd="size:004" backgroundColor="teal">
        teal
      </Button>
      <Button marginEnd="size:004" backgroundColor="blue">
        blue
      </Button>
      <Button marginEnd="size:004" backgroundColor="purple">
        purple
      </Button>
      <Button marginEnd="size:004" backgroundColor="pink">
        pink
      </Button>
    </>
  ))
  .add('', () => <Button></Button>)
