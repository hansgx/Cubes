import React from 'react'
import { View } from 'react-native'
import { fileAbsolute } from 'paths.macro'
import { useStyles, ColorHex, useTheme } from '../../theme'
import { Heading } from '../text/Heading/Heading'
import { getStoryTitle } from '../../storybook/get-story-title'
import { Box } from '../structure/Box/Box'

export default {
  title: getStoryTitle(fileAbsolute),
}

export const All: React.FC = () => {
  const theme = useTheme()

  return (
    <Box space="medium">
      <Heading>Primary</Heading>
      <Box horizontal space="medium">
        <Swatch color={theme.colors.fill.primary.lighter} />
        <Swatch color={theme.colors.fill.primary.default} />
        <Swatch color={theme.colors.fill.primary.darker} />
      </Box>

      <Heading>Secondary</Heading>
      <Box horizontal space="medium">
        <Swatch color={theme.colors.fill.secondary.lighter} />
        <Swatch color={theme.colors.fill.secondary.default} />
        <Swatch color={theme.colors.fill.secondary.darker} />
      </Box>

      <Heading>Accent</Heading>
      <Box horizontal space="medium">
        <Swatch color={theme.colors.fill.accent.lighter} />
        <Swatch color={theme.colors.fill.accent.default} />
        <Swatch color={theme.colors.fill.accent.darker} />
      </Box>

      <Heading>Background (lighter, default, darker and inverse)</Heading>
      <Box horizontal space="medium">
        <Swatch color={theme.colors.fill.background.lighter} />
        <Swatch color={theme.colors.fill.background.default} />
        <Swatch color={theme.colors.fill.background.darker} />
        <Swatch color={theme.colors.fill.background.inverse} />
      </Box>

      <Heading>Text</Heading>
      <Box horizontal space="medium">
        <Swatch color={theme.colors.text.primary} />
        <Swatch color={theme.colors.text.subdued} />
        <Swatch color={theme.colors.text.accent} />
        <Swatch color={theme.colors.text.inverse} />
      </Box>

      <Heading>Divider</Heading>
      <Box horizontal space="medium">
        <Swatch color={theme.colors.fill.divider} />
      </Box>

      <Heading>Positive / Negative</Heading>
      <Box horizontal space="medium">
        <Swatch color={theme.colors.positive} />
        <Swatch color={theme.colors.negative} />
      </Box>

      <Heading>Success / Warning / Error</Heading>
      <Box horizontal space="medium">
        <Swatch color={theme.colors.status.success} />
        <Swatch color={theme.colors.status.warning} />
        <Swatch color={theme.colors.status.error} />
      </Box>
    </Box>
  )
}

// ---

interface SwatchProps {
  color: ColorHex
  fill?: boolean
}

const Swatch: React.FC<SwatchProps> = ({ color, fill }) => {
  const styles = useStyles(() => ({
    container: {
      flex: fill ? 1 : undefined,
      width: 56,
      height: 56,

      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      shadowColor: '#000',
      elevation: 2,

      backgroundColor: color,
    },
  }))

  return <View style={styles.container} />
}
