import React from 'react'
import { View } from 'react-native'
import { StoryWrapper } from '@storybook/addons'
import { useStyles, useTheme } from '../../theme'
import { AppProvider } from '../../components'

export const PhoneScreen: StoryWrapper = (Story, context) => {
  // context.globals.theme here will be either 'light' or 'dark'
  // getTheme being a function retrieving the actual theme object from that value
  const initialTheme = useTheme()

  const styles = useStyles(theme => ({
    background: {
      flex: 1,
      backgroundColor: theme.colors.fill.background.lighter,
      alignItems: 'center',
    },
    phone: {
      width: 480,
      height: 800,
      overflow: 'hidden',
      ...theme.elevation.z4,
    },
  }))

  return (
    <View style={styles.background}>
      <View style={styles.phone}>
        <AppProvider theme={initialTheme}>
          <Story {...context} />
        </AppProvider>
      </View>
    </View>
  )
}
