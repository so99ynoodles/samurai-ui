import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import Button from '../'

storiesOf('Button', module)
  .add('default', () => <Button onPress={action('onPress')}>button</Button>)
  .add('backgroundColor', () => (
    <>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        backgroundColor="red"
      >
        red
      </Button>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        backgroundColor="yellow"
      >
        yellow
      </Button>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        backgroundColor="orange"
      >
        orange
      </Button>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        backgroundColor="green"
      >
        green
      </Button>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        backgroundColor="indigo"
      >
        indigo
      </Button>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        backgroundColor="teal"
      >
        teal
      </Button>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        backgroundColor="blue"
      >
        blue
      </Button>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        backgroundColor="purple"
      >
        purple
      </Button>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        backgroundColor="pink"
      >
        pink
      </Button>
    </>
  ))
  .add('borderRadius', () => (
    <Button
      onPress={action('onPress')}
      borderRadius="circular"
      className="button"
    >
      circular
    </Button>
  ))
  .add('elementType', () => (
    <>
      <Button onPress={action('onPress')} elementType="a">
        anchor
      </Button>
      <Button onPress={action('onPress')} elementType="div">
        div
      </Button>
    </>
  ))
