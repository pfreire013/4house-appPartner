import styled from 'styled-components/native';
import ArrowLeftWhite from '../../../assets/icons/arrow-left-white.svg'
import theme from '../../theme';

export const Container = styled.View`
  width: 100px;
  background: transparent;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-vertical: 20px;
`;

export const TouchBack = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  position: absolute;
  left: 30px;
`;

export const IconBack = styled(ArrowLeftWhite)`
   // for edit icon style need to change de svg file
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${theme.fontFamily.Roboto};
  font-weight: bold;
  color: ${theme.color.white};
`;

