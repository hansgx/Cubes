import React, { useState } from 'react'
import { fileAbsolute } from 'paths.macro'
import isChromatic from 'chromatic/isChromatic'
import { getStoryTitle } from '../../../storybook/get-story-title'
import { Box } from '../../structure/Box/Box'
import { Button } from '../../actions/Button/Button'
import { BodyText, DisplayText, TextContainer } from '../../text'
import { LOREM_IPSUM } from '../../../storybook/utils/constants'
import { Icon } from '../../images-and-icons/Icon/Icon'
import { Dialog } from './Dialog'

export default {
  title: getStoryTitle(fileAbsolute),
  component: Dialog,
  subcomponents: { 'Dialog.Section': Dialog.Section },
  parameters: {
    chromatic: { pauseAnimationAtEnd: true, delay: 300 },
  },
}

const isInitiallyVisible = isChromatic()

export const Basic: React.FC = () => {
  const [visible, setVisible] = useState(isInitiallyVisible)

  return (
    <Box padding="medium" align="start">
      <Button onClick={() => setVisible(true)}>Show me how!</Button>
      <Dialog
        sectioned
        title="Nice Modal"
        open={visible}
        onClose={() => setVisible(false)}
        primaryAction={{ label: 'Got it!', action: () => setVisible(false) }}
        secondaryActions={[
          { label: 'I am dumb', action: () => setVisible(false) },
          { label: 'Share', action: () => setVisible(false) },
        ]}
      >
        <BodyText>Text inside the Dialog!</BodyText>
      </Dialog>
    </Box>
  )
}

export const Advanced: React.FC = () => {
  const [visible, setVisible] = useState(isInitiallyVisible)

  return (
    <Box padding="medium" align="start">
      <Button onClick={() => setVisible(true)}>Show me how!</Button>
      <Dialog
        title="Review"
        open={visible}
        onClose={() => setVisible(false)}
        primaryAction={{ label: 'Accept', action: () => setVisible(false) }}
        secondaryActions={[{ label: 'Decline', action: () => setVisible(false) }]}
      >
        <Dialog.Section>
          <TextContainer>
            <DisplayText>Terms and Conditions</DisplayText>
            <BodyText>{LOREM_IPSUM}</BodyText>
            <BodyText>{LOREM_IPSUM}</BodyText>
          </TextContainer>
        </Dialog.Section>
        <Dialog.Section>
          <Box horizontal align="center" space="small">
            <Icon name="feedback" />
            <BodyText>
              If feeling confident, you can put anything in the Modal content and even have multiple
              sections...
            </BodyText>
          </Box>
        </Dialog.Section>
      </Dialog>
    </Box>
  )
}
