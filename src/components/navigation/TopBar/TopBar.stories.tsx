import React from 'react'
import { fileAbsolute } from 'paths.macro'
import { action } from '@storybook/addon-actions'
import { Screen } from '../../structure/Screen/Screen'
import { getStoryTitle } from '../../../storybook/get-story-title'
import { PhoneScreen } from '../../../storybook/decorators/PhoneScreen'
import { TextContainer, DisplayText, BodyText } from '../../text'
import { LOREM_IPSUM } from '../../../storybook/utils/constants'
import { StoryFn } from '../../../storybook/utils/storybook-types'
import { TopBar, TopBarProps } from './TopBar'

export default {
  title: getStoryTitle(fileAbsolute),
  component: TopBar,
  decorators: [PhoneScreen],
}

export const Basic: StoryFn<TopBarProps> = props => (
  <Screen>
    <TopBar {...props} />
    <Screen.Content>
      <TextContainer>
        <DisplayText>Screen Title</DisplayText>
        <BodyText>{LOREM_IPSUM}</BodyText>
      </TextContainer>
    </Screen.Content>
  </Screen>
)

Basic.args = {
  title: 'Bar Title',
  actions: [{ icon: 'create', action: action('Edit Clicked') }],
  iconStart: undefined,
}

export const WithoutIcon: React.FC = () => (
  <Screen>
    <TopBar title="Bar Title" iconStart="none" />
    <Screen.Content>
      <TextContainer>
        <DisplayText>Screen Title</DisplayText>
        <BodyText>{LOREM_IPSUM}</BodyText>
      </TextContainer>
    </Screen.Content>
  </Screen>
)

export const WithoutTitle: React.FC = () => (
  <Screen>
    <TopBar />
    <Screen.Content>
      <TextContainer>
        <DisplayText>Screen Title</DisplayText>
        <BodyText>{LOREM_IPSUM}</BodyText>
      </TextContainer>
    </Screen.Content>
  </Screen>
)

export const WithLongTitle: React.FC = () => (
  <Screen>
    <TopBar title="This is a long title that should be truncated after a lot of characters" />
    <Screen.Content>
      <TextContainer>
        <DisplayText>Screen Title</DisplayText>
        <BodyText>{LOREM_IPSUM}</BodyText>
      </TextContainer>
    </Screen.Content>
  </Screen>
)

export const WithIconsRight: React.FC = () => (
  <Screen>
    <TopBar
      title="Title"
      actions={[
        { icon: 'create', action: action('Edit clicked'), color: 'accent' },
        { icon: 'note', action: action('Note clicked') },
        { icon: 'search', action: action('Search clicked') },
      ]}
    />
    <Screen.Content>
      <TextContainer>
        <DisplayText>Screen Title</DisplayText>
        <BodyText>{LOREM_IPSUM}</BodyText>
      </TextContainer>
    </Screen.Content>
  </Screen>
)

export const Transparent: React.FC = () => (
  <Screen>
    <TopBar title="TopBar Title" iconStart="expand-more" transparent />
    <Screen.Content>
      <TextContainer>
        <DisplayText>Screen Title</DisplayText>
        <BodyText>{LOREM_IPSUM}</BodyText>
      </TextContainer>
    </Screen.Content>
  </Screen>
)
