import React from 'react';
import { View, Image } from 'react-native';
import { colors } from '../../assets/colors';
import Icon from '../../components/Icon';

import { Container, Text } from './styles';

const Tag = ({type}) => {
  return (
    <Container style={{backgroundColor: colors[type]}}>
      <Icon name={type} width={20} heigth={20}/>
      <Text>{type}</Text>
    </Container>
  );
}

export default Tag;