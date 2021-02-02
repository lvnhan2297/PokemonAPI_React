import { combineReducers } from 'redux';
import collectionPokes from './PokemonsReducer'
import collectionPokeDetail from './DetailPokeReducer'
import collectionPokeMenu from './MenuPokeReducer'

export default combineReducers({
  collectionPokes,
  collectionPokeDetail,
  collectionPokeMenu,
})