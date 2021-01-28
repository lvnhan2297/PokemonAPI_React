import { CHANGE_ROUTE } from '../constants/ActionTypes';

export const changeRoute = history => ({
  type: CHANGE_ROUTE,
  payload: { history }
});

export const initRouter = history => dispatch => {
  dispatch(changeRoute(history));
}