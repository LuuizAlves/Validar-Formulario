import {createAppContainer, createSwitchNavigator} from '@react-navigation/native'
import AuthNavigation from './AuthNavigation'
import AppNavigation from './AppNavigation'

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation
  },
  {
    initialRouteName: 'Auth'
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer