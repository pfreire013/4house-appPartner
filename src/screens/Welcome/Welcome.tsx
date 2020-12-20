import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import RouteNames from '../../navigation/RouteNames';
import { WelcomeScreenNavigationProp } from '../../navigation/RouteTypes';

import { Container, Main, Title, ButtonsContainer, TouchLogin, TextLogin, TouchSignUp, TextSignUp } from './styles';

const Welcome: React.FC = () => {
    const navigation = useNavigation<WelcomeScreenNavigationProp>()

    function handleNavigationToLogin () {
        navigation.navigate(RouteNames.InitialStack.Login)
    }

    function handleNavigationToRegister () {
        navigation.navigate(RouteNames.RegisterStack.RegisterProfile)
    }

    return (
        <Container>
            <Main>
                <Title>Welcome</Title>
            </Main>
            <ButtonsContainer>
                <TouchLogin
                    onPress={handleNavigationToLogin}
                >
                    <TextLogin>Login</TextLogin>
                </TouchLogin>
                <TouchSignUp
                    onPress={handleNavigationToRegister}
                >
                    <TextSignUp>Sign Up</TextSignUp>
                </TouchSignUp>
            </ButtonsContainer>
        </Container>
    )
}

export default Welcome;