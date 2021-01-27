import {FETCH_DATA_POKE_DETAIL, FETCH_DATA_POKE_DETAIL_SUCCESS} from '../constants/ActionTypes'
import  {fetchData}  from '../utils/apiCaller';


export const fetchDataDetailPoke = (namePoke) => {
  return {
    type: FETCH_DATA_POKE_DETAIL,
    payload: { namePoke }
  }
}
export const fetchDataPokeDetailSuccess = (namePoke,fetchedData) => {
  return {
    type: FETCH_DATA_POKE_DETAIL_SUCCESS,
    payload: {namePoke,fetchedData}
  }
}

export const fetchApiDetailPoke = (API_URL,namePoke) => async (dispatch) => {
  try {
    await dispatch(fetchDataDetailPoke(namePoke))
    const data = await fetchData(API_URL)
    await dispatch(fetchDataPokeDetailSuccess(namePoke,data))
  } catch (err) {
    console.log('fetchData error', err);
  }
}
