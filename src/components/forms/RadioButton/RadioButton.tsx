import React, { useCallback } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { useStyles } from '../../../theme'
import { Box } from '../../structure/Box/Box'
import { BodyText } from '../../text'
import { shameStyles } from '../../../theme/shame-styles'
import { useUncontrolledState } from '../../../utils/hooks/use-uncontrolled-state'

export interface RadioButtonProps {
  /**
   * True if selected.
   */
  checked?: boolean
  /**
   * Label to display next to the Radio Button.
   */
  label: React.ReactNode
  /**
   * Additional text to aid in use.
   */
  helpText?: React.ReactNode
  /**
   * Disables the input.
   */
  disabled?: boolean
  /**
   * Called when selection state changes. Should propagate change to `checked` prop.
   *
   * If not set, component will be an uncontrolled component. @see https://reactjs.org/docs/uncontrolled-components.html
   */
  onChange?: (checked: boolean) => void
}

const { size, checkSize } = shameStyles.radioButton

/**
 * Use in a list where the user needs to select a single item.
 */
export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  checked: checkedRaw = false,
  helpText,
  disabled = false,
  onChange: onChangeRaw,
}) => {
  const styles = useStyles(theme => ({
    background: {
      backgroundColor: theme.colors.fill.background.lighter,
      borderColor: theme.colors.fill.primary.default,
      borderWidth: theme.border.small,
      borderRadius: theme.radius.circle,
      width: size,
      height: size,
      marginVertical: (theme.font.size.regular.height - size) / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundChecked: {
      borderColor: theme.colors.fill.accent.default,
    },
    disabled: {
      opacity: theme.opacity.disabled,
    },
    checkmark: {
      height: checkSize,
      width: checkSize,
      borderRadius: theme.radius.circle,
      backgroundColor: theme.colors.fill.accent.default,
      opacity: 0,
    },
    checkmarkChecked: {
      opacity: 1,
    },
  }))

  const [checked, onChange] = useUncontrolledState(checkedRaw, onChangeRaw)
  const onClick = useCallback(() => {
    // Only check if selected, unchecking should be performed by selecting a different option.
    if (!checked) {
      onChange(true)
    }
  }, [checked, onChange])

  return (
    <TouchableWithoutFeedback onPress={onClick} disabled={disabled}>
      <View style={disabled ? styles.disabled : null}>
        <Box horizontal space="medium">
          <View style={[styles.background, checked ? styles.backgroundChecked : null]}>
            <View style={[styles.checkmark, checked ? styles.checkmarkChecked : null]} />
          </View>
          <Box>
            <BodyText>{label}</BodyText>
            <BodyText variation="subdued">{helpText}</BodyText>
          </Box>
        </Box>
      </View>
    </TouchableWithoutFeedback>
  )
}
