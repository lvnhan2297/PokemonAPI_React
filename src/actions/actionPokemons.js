import {FETCH_DATA_POKE, FETCH_DATA_POKE_SUCCESS} from '../constants/ActionTypes'
import  {fetchData}  from '../utils/apiCaller';


export const fetchDataPoke = (getDataBy) => {
  return {
    type: FETCH_DATA_POKE,
    payload: {getDataBy}
  }
}
export const fetchDataPokeSuccess = (fetchedData, nextUrl, getDataBy) => {
  return {
    type: FETCH_DATA_POKE_SUCCESS,
    payload: {fetchedData, nextUrl, getDataBy}
  }
}

export const fetchApiPoke = (API_URL,getDataBy) => async (dispatch) => {
  try {
    await dispatch(fetchDataPoke(getDataBy))
    const data = await fetchData(API_URL)
    const { next, results } = data;
    await dispatch(fetchDataPokeSuccess(results, next, getDataBy))
  } catch (err) {
    console.log('fetchData error', err);
  }
}
export const fetchApiByColor = (API_URL,getDataBy) => async (dispatch) => {
  try {
    await dispatch(fetchDataPoke(getDataBy))
    const data = await fetchData(API_URL)
    const {pokemon_species} = data
    await dispatch(fetchDataPokeSuccess(pokemon_species, null, getDataBy))
  } catch (err) {
    console.log('fetchData error', err);
  }
}