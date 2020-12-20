import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Welcome from '../screens/Welcome'
import { SafeAreaView } from 'react-native-safe-area-context'
import Login from '../screens/Login'
import RouteNames from './RouteNames'
import RegisterStackScreens from './RegisterStack'
import Home from '../screens/Home'
import ChatList from '../screens/ChatList'
import Profile from '../screens/Profile'
import theme from '../theme'

//Icons
import IconHome from '../../assets/icons/home.svg'
import IconChat from '../../assets/icons/chat-2.svg'
import IconProfile from '../../assets/icons/profile.svg'
import HomeStackScreens from './HomeStack'

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

function Routes () {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: theme.color.primary,
          inactiveTintColor: theme.color.mediumGrey,
          //keyboardHidesTabBar: true
        }}
      >
        <Tab.Screen
          name={RouteNames.HomeStack.Home}
          component={HomeStackScreens}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => {
              return <IconHome fill={color} height={25} width={25} />
            }
          }}
        />
        <Tab.Screen
          name={RouteNames.ChatStack.ChatList}
          component={ChatList}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color }) => {
              return <IconChat fill={color} height={25} width={25} />
            }
          }}
        />
        <Tab.Screen
          name={RouteNames.ProfileStack.Profile}
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => {
              return <IconProfile fill={color} height={25} width={25} />
            }
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  )
}

export default function InitialRoutes () {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <NavigationContainer>
        <Stack.Navigator
          headerMode='none'
        >
          <Stack.Screen name={RouteNames.InitialStack.Welcome} component={Welcome} />
          <Stack.Screen name={RouteNames.InitialStack.Login} component={Login} />
          <Stack.Screen name={RouteNames.RegisterStack.RegisterProfile} component={RegisterStackScreens} />
          <Stack.Screen name={RouteNames.InitialStack.App} component={Routes} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
