import styled from 'styled-components/native';
import { backgroundColors, textColor } from '../../assets/colors';

export const Container = styled.View`
  margin-vertical: 10;
  border-radius: 10;
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailsContainer = styled.View`
  padding-vertical: 15;
  padding-horizontal: 15
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  margin-top: -20;
`;

export const ImageBackground = styled.ImageBackground`
  height: 100%;
  
`;

export const Title = styled.Text`
  font-size: 26;
  color: ${textColor.white};
  font-weight: 700;
  text-transform: capitalize;
`;

export const Number = styled.Text`
  font-size: 16;
  color: ${textColor.number};
  font-weight: 700;
`;

export const Image = styled.Image`
  width: 130;
  height: 130;
`;
