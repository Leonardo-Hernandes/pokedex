import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { textColor } from '../../assets/colors';
import { icons } from '../../assets/icons';

import { Image } from './styles';

const Icon = ({children, onPress, name, style, width, height, ...props}) => {
  // let RenderIscon;

  // switch(name){
  //   case 'grass':
  //     RenderIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/1024px-Pok%C3%A9mon_Grass_Type_Icon.svg.png"
  //     break
  //   case 'fire' :
  //     RenderIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/1024px-Pok%C3%A9mon_Fire_Type_Icon.svg.png"
  //     break
  //   case 'dragon' :
  //     RenderIcon = "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg"
  //     break
  //   case 'poison' :
  //     RenderIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/1024px-Pok%C3%A9mon_Poison_Type_Icon.svg.png"
  //     break
  //   default:
  //     RenderIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/1024px-Pok%C3%A9mon_Dark_Type_Icon.svg.png"
  // }

  return (
      <TouchableWithoutFeedback style={{paddingHorizontal: 10, style}} onPress={onPress}>
        {/* <Image style={{ height: 10, width: 10}} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/1024px-Pok%C3%A9mon_Grass_Type_Icon.svg.png"}} /> */}
        {name ? <Image color={textColor.white} source={{uri: icons[name]}}/> : children}
      </TouchableWithoutFeedback>
  );
}

export default Icon;
