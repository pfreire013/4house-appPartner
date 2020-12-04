import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.color.primary};
  padding-top: 100px;
  padding-horizontal: 20px;
  padding-bottom: 40px;
`;

export const Main = styled.View`
    flex: 1;
`

export const Title = styled.Text`
  font-family: ${theme.fontFamily.Roboto};
  font-size: 24px;
  font-weight: bold;
  color: ${theme.color.white};
  margin-left: 20px;
`;

export const ButtonsContainer = styled.View`
`

export const TouchLogin = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6
})`
    height: 60px;
    width: 100%;
    background: ${theme.color.white};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
`

export const TextLogin = styled.Text`
    font-size: 16px;
    color: ${theme.color.primary};
    font-weight: 700;
    font-family: ${theme.fontFamily.Roboto};
`

export const TouchSignUp = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6
})`
    height: 60px;
    width: 100%;
    background: ${theme.color.primary};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    border-color: ${theme.color.white};
    border-width: 2px;
`

export const TextSignUp = styled.Text`
    font-size: 16px;
    color: ${theme.color.white};
    font-weight: 700;
    font-family: ${theme.fontFamily.Roboto};
`