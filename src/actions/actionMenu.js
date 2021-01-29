import {FETCH_DATA_POKE_MENU, FETCH_DATA_POKE_MENU_SUCCESS} from '../constants/ActionTypes'
import  {fetchData}  from '../utils/apiCaller';

export const fetchDataMenuPoke = (nameMenu) => {
  return {
    type: FETCH_DATA_POKE_MENU,
    payload: { nameMenu }
  }
}
export const fetchDataPokeMenuSuccess = (nameMenu,fetchedData) => {
  return {
    type: FETCH_DATA_POKE_MENU_SUCCESS,
    payload: {nameMenu,fetchedData}
  }
}

export const fetchApiMenuPoke = (API_URL,nameMenu) => async (dispatch) => {
  try {
    await dispatch(fetchDataMenuPoke(nameMenu))
    const data = await fetchData(API_URL)
    const {results} = data 
    await dispatch(fetchDataPokeMenuSuccess(nameMenu,results))
  } catch (err) {
    console.log('fetchData error', err);
  }
}