import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { textColor } from '../../assets/colors';
import { icons } from '../../assets/icons';

import { Image } from './styles';

const Icon = ({children, name, style}) => {
  return (
      <TouchableWithoutFeedback style={{paddingHorizontal: 10, style}}>
        {name ? <Image color={textColor.white} source={{uri: icons[name]}}/> : children}
      </TouchableWithoutFeedback>
  );
}

export default Icon;