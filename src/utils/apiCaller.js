
import axios from 'axios';
export const fetchData = async (API_URL) => {
  try{
    const {data} =  await axios.request({
      method: 'GET',
      url: API_URL
    })
    return data; 
  }catch(error) {
    console.log(error);
  };
};


