import React from 'react'
import { storiesOf } from '@storybook/react'
import Flex from '../'

storiesOf('Flex', module)
  .add('default', () => (
    <Flex>
      <div>Children 1</div>
      <div>Children 2</div>
      <div>Children 3</div>
    </Flex>
  ))
  .add('gap', () => (
    <Flex gap="size:016">
      <div>Children 1</div>
      <div>Children 2</div>
      <div>Children 3</div>
    </Flex>
  ))
  .add('direction', () => (
    <Flex gap="size:016" flexDirection="column">
      <div>Children 1</div>
      <div>Children 2</div>
      <div>Children 3</div>
    </Flex>
  ))
  .add('justifyContent', () => (
    <Flex justifyContent="space-between">
      <div>Children 1</div>
      <div>Children 2</div>
      <div>Children 3</div>
    </Flex>
  ))
