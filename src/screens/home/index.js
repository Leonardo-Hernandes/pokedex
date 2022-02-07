import React, {useEffect, useState} from 'react';
import { height } from '../../assets/constants'
import Pokeball_header from '../../assets/Images/Pokeball_Header.png';
import { TextInput } from 'react-native-paper';
import Fa5Icon from 'react-native-vector-icons/FontAwesome5';
import Input from '../../components/Input/Input';
import Card from '../../components/Card';
import Icon from '../../components/Icon';
import axios from 'axios';
import store from './../../store';
import { useDispatch } from 'react-redux'
import { getPokes } from './../../actions';
import RNPickerSelect from 'react-native-picker-select';

import {  
  SafeAreaView, 
  ImageBackground, 
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { textColor } from '../../../src/assets/colors';

import { 
  Container, 
  Row, 
  Title, 
  SubTitle, 
  InputContainer, 
  LoadingContainer, 
  PickerContainer 
  } from './styles';

const home = ({ navigation, pokes }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState("java");
  const [generation, setGeneration] = useState("1");
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch()

  useEffect(() => {
    getPokemon();
  }, [generation])

  useEffect(() => {
    if(isLoading == false) {
      filter();
    }
  }, [searchText])

  function filter (text) {
    if( searchText != "" && isLoading == false) {
      var filtred = pokemons.filter(({name, id}) => name.includes(searchText.toLowerCase()) || id.includes(searchText));

      setPokemons(filtred)
    } else {
      setPokemons(store.getState().pokes[0].data)
    }
  }

  async function getPokemon () {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/generation/${generation}/`);

      const pokemonData = response.data.pokemon_species

      for (let i of pokemonData) {
        let pokeNumber = i.url.replace("https://pokeapi.co/api/v2/pokemon-species/", '').replace("/", '')
        i.id = pokeNumber
      }

      const pokemonList = pokemonData.sort((a, b) => {
        return a.id - b.id;
      });
      
      dispatch(getPokes(pokemonList))
      setPokemons(store.getState().pokes[0].data);
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
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

              <PickerContainer>
                <RNPickerSelect
                  placeholder = {{label: 'Choose Generation', value: 1, color: '#9EA0A4'}}
                  onValueChange={(value) => setGeneration(value)}
                  items={[
                    { label: 'Generation 1', value: '1', color: '#9EA0A4' },
                    { label: 'Generation 2', value: '2', color: '#9EA0A4' },
                    { label: 'Generation 3', value: '3', color: '#9EA0A4' },
                    { label: 'Generation 4', value: '4', color: '#9EA0A4' },
                    { label: 'Generation 5', value: '5', color: '#9EA0A4' },
                  ]}
                />
              </PickerContainer>

                <TextInput
                  label="What Pokémon are you looking for?"
                  value={searchText}
                  mode='outlined'
                  style={{
                    height: 50,
                    marginBottom: 10,
                  }}
                  onChangeText={text => setSearchText(text)}
                />

              {
                isLoading == true ?
                  <LoadingContainer>
                    <ActivityIndicator size="large"/>
                  </LoadingContainer>
                :
                <FlatList
                data={pokemons}
                renderItem={({item}) => <Card item={item} navigation={navigation} />}
                contentContainerStyle={{
                  paddingBottom: 140 * 2
                }}
              />
              }
              
            </Container>
          </SafeAreaView>
  );
}

export default home;