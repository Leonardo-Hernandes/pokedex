import { combineReducers } from 'redux';
import pokes from './getPokes';
import pokeDetails from './getPokeDetail';

export default combineReducers({
  pokes,
  pokeDetails
})