import React, {useEffect, useState} from 'react';
import { height } from '../../assets/constants'
import Pokeball_header from '../../assets/Images/Pokeball_Header.png';

import Fa5Icon from 'react-native-vector-icons/FontAwesome5';

import Input from '../../components/Input/Input';
import Card from '../../components/Card';
import Icon from '../../components/Icon';
import axios from 'axios';

import {  
  SafeAreaView, 
  ImageBackground, 
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import { textColor } from '../../../src/assets/colors';

import { Container, Row, Title, SubTitle, InputContainer, LoadingContainer } from './styles';

const home = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPokemon();
  }, [])

  async function getPokemon () {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/generation/1/");

      const pokemonData = response.data.pokemon_species

      for (let i of pokemonData) {
        let pokeNumber = i.url.replace("https://pokeapi.co/api/v2/pokemon-species/", '').replace("/", '')
        i.id = pokeNumber
      }

      const pokemonList = pokemonData.sort((a, b) => {
        return a.id - b.id;
      });
      
      setPokemons(pokemonList);
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {
        isLoading == true 
        ?
          <LoadingContainer>
            <ActivityIndicator size="large"/>
          </LoadingContainer>
        : 
          <SafeAreaView>
            <Container>
              <ImageBackground 
                resizeMode={'contain'}
                style={{ width: "100%", heigth: height / 4}} 
                source={Pokeball_header}
              >
                <Title>Pokedex</Title>
                <SubTitle>Search for Pokemon by name or using the National Pokédex number.</SubTitle>
              </ImageBackground>

              <InputContainer>
                <Fa5Icon  name="search" size={18} color={textColor.grey}/>
                <Input placeholder="What Pokémon are you looking for?"/>
              </InputContainer>

              <FlatList
                data={pokemons}
                renderItem={({item}) => <Card item={item} navigation={navigation} />}
                contentContainerStyle={{
                  paddingBottom: 140 * 2
                }}
              />
            </Container>
          </SafeAreaView>
      }
    </>
  );
}

export default home;