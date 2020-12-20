import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import RouteNames from './RouteNames'

export type RootInitialParamList = {
    [RouteNames.InitialStack.Welcome]: undefined;
    [RouteNames.InitialStack.Login]: undefined;
    [RouteNames.RegisterStack.RegisterProfile]: undefined
}

export type WelcomeScreenNavigationProp = StackNavigationProp<
    RootInitialParamList,
    typeof RouteNames.InitialStack.Welcome
>

export type RootRegisterParamList = {
    [RouteNames.RegisterStack.RegisterProfile]: undefined;
    [RouteNames.RegisterStack.RegisterLocation]: undefined;
    [RouteNames.RegisterStack.RegisterDocument]: undefined;
    [RouteNames.RegisterStack.RegisterService]: undefined;
}

export type RegisterProfileScreenNavigationProp = StackNavigationProp<
    RootRegisterParamList,
    typeof RouteNames.RegisterStack.RegisterProfile
>

export type RegisterLocationScreenNavigationProp = StackNavigationProp<
    RootRegisterParamList,
    typeof RouteNames.RegisterStack.RegisterLocation
>

export type RegisterDocumentScreenNavigationProp = StackNavigationProp<
    RootRegisterParamList,
    typeof RouteNames.RegisterStack.RegisterDocument
>

export type RootHomeScreenParamList = {
    [RouteNames.HomeStack.Home]: undefined;
    [RouteNames.HomeStack.DetailService]: undefined;
}

export type HomeScreenNavigationProp = StackNavigationProp<
    RootHomeScreenParamList,
    typeof RouteNames.HomeStack.Home
>

export type DetailServiceScreenNavigationProp = StackNavigationProp<
    RootHomeScreenParamList,
    typeof RouteNames.HomeStack.DetailService
>