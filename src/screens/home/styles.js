import styled from 'styled-components/native';
import { textColor, customColor } from '../../../src/assets/colors';

export const Container = styled.View`
  padding-vertical: 20
  padding-top: 20
  padding-horizontal: 20
`; 

export const InputContainer = styled.View`
  flex-direction: row;
  background-color: ${customColor.input};
  height: 50;
  margin-vertical: 12;
  padding-top: 15;
  padding-bottom: 10;
  padding-horizontal: 10;
  border-radius: 10;
  border-width: 1;
`;

export const PickerContainer = styled.View`
  height: 50;
  margin-vertical: 12;
  border-radius: 4;
  justify-content: center;
  align-items: center;
  padding-horizontal: 10;
  border-width: 1;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items; center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-itens: 'center';
  justify-content: flex-end;
  margin-vertical: 20;
`;

export const Title = styled.Text`
  font-size: 32;
  font-weight: 700;
  color: ${textColor.black};
`;

export const SubTitle = styled.Text`
  padding-vertical: 5;
  font-size: 18;
  font-weight: 200;
  color: ${textColor.black};
`;
