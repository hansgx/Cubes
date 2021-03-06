import React from 'react'
import { NavigationSchema } from './types'
import { ReactNavigationProvider } from './NavigationProvider'
import { Navigator } from './navigators'
import { navigatorBuilders } from './navigators/all'

/**
 * Build a React Navigation Navigator tree using a `NavigationSchema`.
 */
export const buildReactNavigationTree = (schema: NavigationSchema): React.ComponentType =>
  _buildReactNavigationTreeRecursive(schema)

/**
 * Build Navigators recursively.
 */
export const _buildReactNavigationTreeRecursive = (navigator: Navigator): React.ComponentType => {
  const builder = navigatorBuilders.find(x => x.name in navigator)

  if (builder) {
    return builder.build({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      navigator: navigator as any,
      buildScreen: _wrapScreenWithNavigationProvider,
      buildTreeForNavigator: _buildReactNavigationTreeRecursive,
    })
  } else {
    throw new Error(`Unknown Navigator in NavigationSchema: ${JSON.stringify(navigator, null, 2)}`)
  }
}

/**
 * Wrap screens with their own `ReactNavigationProvider`.
 */
const _wrapScreenWithNavigationProvider = (
  Comp: React.ComponentType,
): React.ComponentType => () => <ReactNavigationProvider component={Comp} />
