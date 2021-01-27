import { combineReducers } from 'redux';
import collectionPoke from './PokemonsReducer'
import collectionPokeDetail from './DetailPokeReducer'
export default combineReducers({
  collectionPoke,
  collectionPokeDetail
})