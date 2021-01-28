import {
  FETCH_DATA_POKE_DETAIL,
  FETCH_DATA_POKE_DETAIL_SUCCESS
} from "../constants/ActionTypes.js";

const initialState = {
  loading: false,
  pokemons: [],
};

function pokeDetail(state = initialState, action ) {
  switch (action.type) {
    case FETCH_DATA_POKE_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_POKE_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemons: {...state.pokemons,...action.payload.fetchedData}
      };
    default:
      return state;
  }
}

function collectionPokeDetail(state = {}, action) {
  switch (action.type) {
    case FETCH_DATA_POKE_DETAIL:
    case FETCH_DATA_POKE_DETAIL_SUCCESS:
      return {
        ...state,
        [action.payload.namePoke]: pokeDetail(state[action.payload.namePoke],action)
      };
    default:
      return state;
  }
}


export default collectionPokeDetail;