import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import TopNav from '../../components/TopNav';
import RouteNames from '../../navigation/RouteNames';

import { Container, Title, Subtitle, Main, Wrapper, FormContainer, TouchLogin, TextLogin } from './styles';

const Login: React.FC = () => {
    const navigation = useNavigation()

    function handleLogin () {
        navigation.navigate(RouteNames.InitialStack.App)
    }

    return (
        <Container>
            <TopNav />
            <Main>
                <Title>Login</Title>
                <Subtitle>Enter yours credentials</Subtitle>
                <Wrapper>
                    <FormContainer>

                    </FormContainer>
                    <TouchLogin onPress={handleLogin}>
                        <TextLogin>Login</TextLogin>
                    </TouchLogin>
                </Wrapper>
            </Main>
        </Container>
    )
}

export default Login;