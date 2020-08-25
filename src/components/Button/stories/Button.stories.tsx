import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import Button from '../'

storiesOf('Button', module)
  .add('default', () => <Button onPress={action('onPress')}>button</Button>)
  .add('buttonColor', () => (
    <>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="red"
      >
        red
      </Button>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="yellow"
      >
        yellow
      </Button>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="orange"
      >
        orange
      </Button>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="green"
      >
        green
      </Button>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="indigo"
      >
        indigo
      </Button>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="teal"
      >
        teal
      </Button>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="blue"
      >
        blue
      </Button>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="purple"
      >
        purple
      </Button>
      <Button
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="pink"
      >
        pink
      </Button>
    </>
  ))
  .add('vivid buttonColor', () => (
    <>
      <Button
        vivid
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="red"
      >
        red
      </Button>
      <Button
        vivid
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="yellow"
      >
        yellow
      </Button>
      <Button
        vivid
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="orange"
      >
        orange
      </Button>
      <Button
        vivid
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="green"
      >
        green
      </Button>
      <Button
        vivid
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="indigo"
      >
        indigo
      </Button>
      <Button
        vivid
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="teal"
      >
        teal
      </Button>
      <Button
        vivid
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="blue"
      >
        blue
      </Button>
      <Button
        vivid
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="purple"
      >
        purple
      </Button>
      <Button
        vivid
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="pink"
      >
        pink
      </Button>
    </>
  ))
  .add('borderRadius', () => (
    <Button onPress={action('onPress')} radius="circular" className="button">
      circular
    </Button>
  ))
  .add('elementType', () => (
    <>
      <Button marginEnd="size:004" onPress={action('onPress')} elementType="a">
        anchor
      </Button>
      <Button onPress={action('onPress')} elementType="div">
        div
      </Button>
    </>
  ))
  .add('autoFocus', () => (
    <>
      <Button onPress={action('onPress')} marginEnd="size:004">
        default
      </Button>
      <Button
        autoFocus
        vivid
        onPress={action('onPress')}
        marginEnd="size:004"
        buttonColor="red"
      >
        autoFocus
      </Button>
    </>
  ))
  .add('fluid', () => (
    <>
      <Button fluid onPress={action('onPress')} marginEnd="size:004">
        fluid
      </Button>
      <Button onPress={action('onPress')} marginEnd="size:004">
        not fluid
      </Button>
    </>
  ))
