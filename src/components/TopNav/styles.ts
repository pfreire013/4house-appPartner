import styled from 'styled-components/native';
import ArrowLeftWhite from '../../../assets/icons/arrow-left.svg'
import theme from '../../theme';

export const Container = styled.View`
  width: 100px;
  background: transparent;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-bottom: 20px;
`;

export const TouchBack = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  position: absolute;
  left: 30px;
`;

export const IconBack = styled(ArrowLeftWhite).attrs({
  fill: theme.color.white,
  height: 20,
  width: 20
})`
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${theme.fontFamily.Roboto};
  font-weight: bold;
  color: ${theme.color.white};
`;

