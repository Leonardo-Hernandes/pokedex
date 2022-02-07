import React, {useEffect, useState} from 'react';
import { TouchableOpacity } from 'react-native';
import Tag from '../../components/Tag';
import { backgroundColors } from '../../assets/colors';
import Pokeball_Card from '../../assets/Images/Pokeball_Card.png';
import axios from 'axios';
import store from './../../store';
import { useDispatch } from 'react-redux'
import { getPokeDetails } from './../../actions';

import { 
  Container, 
  Title, 
  Number, 
  Image, 
  ImageContainer,
  ImageBackground,
  DetailsContainer, 
  Row } from './styles';

const Card = ({item, navigation, onPress}) => {
  const [pokemon, setPokemon] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    getPokemonDetails();
  }, [])

  let pokeNumber = item.url.replace("https://pokeapi.co/api/v2/pokemon-species/", '').replace("/", '')
  let url = `https://pokeapi.co/api/v2/pokemon/${pokeNumber}/`

  async function getPokemonDetails () {
    try {
      const response = await axios.get(url);

      dispatch(getPokeDetails(response.data))
      setPokemon(store.getState().pokeDetails[0]);
    } catch (error) {
      console.log(error)
    }
  }


  if(pokeNumber.length == 1) {
    pokeNumber = `00${pokeNumber}`
  } else if(pokeNumber.length == 2) {
    pokeNumber = `0${pokeNumber}`
  } else {
    pokeNumber = `${pokeNumber}`
  }
  

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {name: item.name, id: pokeNumber, details: pokemon})
      }
    >
    <Container style={{ backgroundColor: backgroundColors[pokemon.types ? pokemon.types[0].type.name : "normal"]}}>
      <DetailsContainer>
        <Number>#{pokeNumber}</Number>
          <Title>{item.name}</Title>

             {pokemon.types ?
              <Row>
               <Tag type={pokemon.types[0].type.name}/>
               {pokemon.types.length > 1 ? <Tag type={pokemon.types[1].type.name}/> : null} 
             </Row>
              : null}
             
      </DetailsContainer>

      <ImageBackground resizeMode="contain" source={Pokeball_Card}>
        <ImageContainer>
          <Image source={{uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeNumber}.png`}}/>
        </ImageContainer>
      </ImageBackground>
    </Container>

     </TouchableOpacity>

  );
}

export default Card;