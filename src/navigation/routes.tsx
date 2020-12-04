import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/Welcome'
import { SafeAreaView } from 'react-native-safe-area-context'
import Login from '../screens/Login'
import RouteNames from './RouteNames'

const Stack = createStackNavigator()

export default function Routes () {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <NavigationContainer>
        <Stack.Navigator
          headerMode='none'
        >
          <Stack.Screen name={RouteNames.InitialStack.Welcome} component={Welcome} />
          <Stack.Screen name={RouteNames.InitialStack.Login} component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
