import React from 'react'
import { fileAbsolute } from 'paths.macro'
import { TextContainer } from '../TextContainer/TextContainer'
import { LOREM_IPSUM } from '../../../storybook/utils/constants'
import { getStoryTitle } from '../../../storybook/get-story-title'
import { StoryFn } from '../../../storybook/utils/storybook-types'
import { Heading, HeadingProps } from './Heading'

export default {
  title: getStoryTitle(fileAbsolute),
  component: Heading,
}

export const Basic: StoryFn<HeadingProps> = props => <Heading {...props} />

Basic.args = {
  children: 'Something important',
}

Basic.argTypes = {
  children: { control: 'text' },
}

export const All: React.FC = () => (
  <TextContainer>
    <Heading>Default Heading</Heading>
    <Heading element="h2">H2 Heading</Heading>
    <Heading maxLines={1}>Single Line: {LOREM_IPSUM}</Heading>
  </TextContainer>
)
