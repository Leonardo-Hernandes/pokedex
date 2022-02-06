import React from 'react';
import { View } from 'react-native';

import { TextInput } from './styles';

const Input = ({props, placeholder}) => {
  return <View>
    <TextInput placeholder={placeholder} {...props}/>
  </View>;
}

export default Input;