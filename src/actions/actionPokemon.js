import {FETCH_DATA_POKE, FETCH_DATA_POKE_SUCCESS} from '../constants/ActionTypes'
import  {fetchData}  from '../utils/apiCaller';


export const fetchDataPoke = () => {
  return {
    type: FETCH_DATA_POKE
  }
}
export const fetchDataPokeSuccess = (fetchedData, nextUrl) => {
  return {
    type: FETCH_DATA_POKE_SUCCESS,
    payload: {fetchedData, nextUrl}
  }
}

export const fetchApiPoke = (API_URL) => async (dispatch) => {
  try {
    await dispatch(fetchDataPoke())
    const data = await fetchData(API_URL)
    const { next, results } = data;
    await dispatch(fetchDataPokeSuccess(results, next))
  } catch (err) {
    console.log('fetchData error', err);
  }
}