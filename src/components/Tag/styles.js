import styled from 'styled-components/native';
import { textColor } from '../../assets/colors';

export const Container = styled.View`
  border-radius: 5;
  margin-right: 5;
  margin-top: 2;
  padding-horizontal: 5;
  padding-vertical: 5;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${textColor.white};
  text-transform: capitalize;
  margin-left: 4;
`;
