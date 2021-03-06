import React, { useState } from 'react'
import { fileAbsolute } from 'paths.macro'
import { getStoryTitle } from '../../../storybook/get-story-title'
import { StoryFn } from '../../../storybook/utils/storybook-types'
import { PhoneScreen } from '../../../storybook/decorators/PhoneScreen'
import { Screen } from '../../structure/Screen/Screen'
import { Select, SelectProps } from './Select'

export default {
  title: getStoryTitle(fileAbsolute),
  component: Select,
  decorators: [PhoneScreen],
}

export const Basic: StoryFn<SelectProps> = props => {
  const [selected, setSelected] = useState(props.selected)

  return (
    <Screen>
      <Select {...props} selected={selected} onChange={setSelected} />
    </Screen>
  )
}

Basic.args = {
  label: 'Select your favorite color',
  selected: null,
  placeholder: 'Should be a color',
  helpText: 'Colors are displayed in neutral color, in case you are color blind.',
  choices: [
    { label: 'Blue', value: 'blue' },
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Yellow', value: 'yellow' },
  ],
}

export const WithManyChoices: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null)
  const choices: number[] = []

  for (let i = 0; i < 100; i++) {
    choices.push(i)
  }

  return (
    <Screen>
      <Select
        label="Choose a number"
        selected={selected}
        choices={choices.map(x => ({ label: x.toString(), value: x.toString(), disabled: x < 10 }))}
        onChange={setSelected}
        helpText="Numbers which are below 10 are disabled."
      />
    </Screen>
  )
}

export const Disabled: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <Screen>
      <Select
        label="Choose a color"
        selected={selected}
        choices={[
          { label: 'Blue', value: 'blue' },
          { label: 'Red', value: 'red' },
          { label: 'Green', value: 'green' },
          { label: 'Yellow', value: 'yellow' },
        ]}
        onChange={setSelected}
        disabled
      />
    </Screen>
  )
}

export const WithError: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <Screen>
      <Select
        label="Choose a color"
        selected={selected}
        choices={[
          { label: 'Blue', value: 'blue' },
          { label: 'Red', value: 'red' },
          { label: 'Green', value: 'green' },
          { label: 'Yellow', value: 'yellow' },
        ]}
        onChange={setSelected}
        error="Please choose a more beautiful color"
      />
    </Screen>
  )
}
