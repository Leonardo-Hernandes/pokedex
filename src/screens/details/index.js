import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, FlatList } from 'react-native';
import {backgroundColors} from '../../assets/colors';
import Tag from '../../components/Tag'
import Pokeball_header from '../../assets/Images/Pokeball_Card.png';
import Pokeball from '../../assets/Images/Pokeball.png';
import { textColor } from '../../assets/colors';

import { 
  HeaderContainer, 
  Image, 
  Title,
  Row, 
  Number, 
  DescTitle, 
  DetailsContainer,
  DetailsBox,
  DetailsTitle,
  SttsText
} from './styles';

const details = ({ route}) => {
  const name = route.params.name;
  const details = route.params.details;
  const id = route.params.id;
  
  return (
    <SafeAreaView>
      <HeaderContainer style={{backgroundColor: backgroundColors[details.types[0].type.name]}}>
          <Row>
            <Image source={{uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`}}/>
            <View>
              <Number>#{id}</Number>
              <Title>{name}</Title>
              <Row>
              <Tag type={details.types[0].type.name}/>
              {details.types[1] ? <Tag type={details.types[1].type.name}/> : null}
            </Row>
          </View>

          </Row>
          <DescTitle>About</DescTitle>

        <DetailsContainer>
          <DetailsBox>
            <DetailsTitle 
              style={{color: backgroundColors[details.types[0].type.name]}}
              >
              Base Stats
            </DetailsTitle>
            {/* {renderDetails()} */}
            <FlatList
              data={details.stats}
              scrollEnabled={false}
              contentContainerStyle={{
                paddingBottom: "100%",
              }}
              renderItem={({item}) => 
                <Row style={{justifyContent: 'space-between'}}>
                    <SttsText style={{ color: textColor.black}}>{item.stat.name.replace("-", " ")}:</SttsText>
                    <SttsText style={{ color: textColor.grey}}>{item.base_stat}</SttsText>
                </Row>
              }
            />


          </DetailsBox>
        </DetailsContainer>
      </HeaderContainer>

      
    </SafeAreaView>
  );
}

export default details;