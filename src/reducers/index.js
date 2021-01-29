import { combineReducers } from 'redux';
import collectionPokes from './PokemonsReducer'
import collectionPokeDetail from './DetailPokeReducer'
import collectionPokeMenu from './MenuPokeReducer'
import router from './RouterReducer'
export default combineReducers({
  collectionPokes,
  collectionPokeDetail,
  collectionPokeMenu,
  router
})