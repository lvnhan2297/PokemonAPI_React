import { CHANGE_ROUTE } from '../constants/ActionTypes';

const initialState = {
  route: {
    pathname:'/',
    search:'',
    hash:'',
    action:'POP',
    key: null,
    query:{}
  }
};

function router(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ROUTE:
      return {
        ...state,
        route: action.payload.history
      };
    default:
      return state;
  }
}

export default router;