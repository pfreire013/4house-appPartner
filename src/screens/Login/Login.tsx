import React from 'react';
import { View } from 'react-native';
import TopNav from '../../components/TopNav';

import { Container, Title, Subtitle, Main, Wrapper, FormContainer, TouchLogin, TextLogin } from './styles';

const Login: React.FC = () => {
    return (
        <Container>
            <TopNav />
            <Main>
                <Title>Login</Title>
                <Subtitle>Enter yours credentials</Subtitle>
                <Wrapper>
                    <FormContainer>

                    </FormContainer>
                    <TouchLogin >
                        <TextLogin>Login</TextLogin>
                    </TouchLogin>
                </Wrapper>
            </Main>
        </Container>
    )
}

export default Login;