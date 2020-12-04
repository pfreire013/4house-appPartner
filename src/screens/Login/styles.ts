import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
    flex: 1;
    background: ${theme.color.primary};
`;

export const Main = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const Title = styled.Text`
    font-size: 42px;
    font-family: ${theme.fontFamily.Roboto};
    color: ${theme.color.white};
    font-weight: 700;
    margin-left: 30px;
    margin-bottom: 12px;
`;

export const Subtitle = styled.Text`
    font-size: 20px;
    font-family: ${theme.fontFamily.Roboto};
    color: ${theme.color.lowGrey};
    font-weight: 300;
    margin-left: 30px;
`;

export const Wrapper = styled.View`
    flex: 0.75;
    background: ${theme.color.white};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: 40px;
    padding-horizontal: 30px; 
`;

export const TouchLogin = styled.TouchableOpacity`
    height: 50px;
    width: 100%;
    background: ${theme.color.primary};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const TextLogin = styled.Text`
    font-size: 16px;
    font-family: ${theme.fontFamily.Roboto};
    color: ${theme.color.white};
    font-weight: 700;
`;

export const FormContainer = styled.View`
    flex: 1;
`

