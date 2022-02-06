import styled from 'styled-components/native';
import { textColor } from '../../assets/colors';

export const HeaderContainer = styled.View`
  align-items: center;
  padding-top: 60;
`;

export const DetailsContainer = styled.View`
  width: 100%;
  border-top-right-radius: 15;
  border-top-left-radius: 15;
  background-color: ${textColor.white}
`;

export const DetailsBox = styled.View`
  margin-horizontal: 30;
  margin-vertical: 30;
  // align-items: space-between;
`;

export const DetailsTitle = styled.Text`
  font-size: 20;
  font-weight: 700;
  margin-bottom: 15;
`;

export const SttsText = styled.Text`
  font-size: 14;
  font-weight: 600;
  margin-bottom: 15;
  text-transform: capitalize;
`;


export const Title = styled.Text`
  font-size: 26;
  color: ${textColor.white};
  font-weight: 700;
  text-transform: capitalize;
`;

export const DescTitle = styled.Text`
  font-size: 20;
  color: ${textColor.white};
  font-weight: 800;
  text-transform: capitalize;
  padding-top: 30;
  padding-bottom: 6;
`;



export const Number = styled.Text`
  font-size: 16;
  color: ${textColor.number};
  font-weight: 700;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 150;
  height: 150;
  margin-left: 10;
  margin-right: 10;
`;
