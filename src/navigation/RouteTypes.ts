import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import RouteNames from './RouteNames'

export type RootInitialParamList = {
    [RouteNames.InitialStack.Welcome]: undefined;
    [RouteNames.InitialStack.Login]: undefined;
}

export type WelcomeScreenNavigationProp = StackNavigationProp<
    RootInitialParamList,
    typeof RouteNames.InitialStack.Welcome
>