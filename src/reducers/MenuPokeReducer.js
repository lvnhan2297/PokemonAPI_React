import {
  FETCH_DATA_POKE_MENU,
  FETCH_DATA_POKE_MENU_SUCCESS
} from "../constants/ActionTypes.js";

const initialState = {
  loading: false,
  listItems: [],
};

function listMenu(state = initialState, action ) {
  switch (action.type) {
    case FETCH_DATA_POKE_MENU:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_POKE_MENU_SUCCESS:
      return {
        ...state,
        loading: false,
        listItems: [...state.listItems, ...action.payload.fetchedData]
      };
    default:
      return state;
  }
}

function collectionMenu(state = {}, action) {
  switch (action.type) {
    case FETCH_DATA_POKE_MENU:
    case FETCH_DATA_POKE_MENU_SUCCESS:
      return {
        ...state,
        [action.payload.nameMenu]: listMenu(state[action.payload.nameMenu],action)
      };
    default:
      return state;
  }
}
export default collectionMenu;