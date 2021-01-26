import {
  FETCH_DATA_POKE,
  FETCH_DATA_POKE_SUCCESS
} from "../constants/ActionTypes.js";

const initialState = {
  loading: false,
  nextUrl: null,
  pokemons: [],
};

function collectionPoke(state = initialState, action ) {
  switch (action.type) {
    case FETCH_DATA_POKE:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_POKE_SUCCESS:
      return {
        ...state,
        loading: false,
        nextUrl: action.payload.nextUrl,
        pokemons: [...state.pokemons, ...action.payload.fetchedData]
      };
    default:
      return state;
  }
}
export default collectionPoke;